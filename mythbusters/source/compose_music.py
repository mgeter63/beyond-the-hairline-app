# Original soft background music, synthesized from scratch (no samples).
import numpy as np, soundfile as sf, sys
from scipy.signal import fftconvolve, butter, sosfilt
SR=48000; import os; T=float(os.environ.get('MT','14')); N=int(SR*T)
rng=np.random.default_rng(7)
def hz(m): return 440*2**((m-69)/12)
def env(n, a, d):  # attack seconds, exponential decay time constant
    t=np.arange(n)/SR; e=np.exp(-t/d); ai=int(a*SR)
    if ai>0: e[:ai]*=np.linspace(0,1,ai)
    return e
def ep(m, dur, vel=1.0):  # soft electric-piano-ish tone
    n=int(dur*SR); t=np.arange(n)/SR; f=hz(m)
    s=(np.sin(2*np.pi*f*t)+0.35*np.sin(2*np.pi*2*f*t)*np.exp(-t/0.4)+0.12*np.sin(2*np.pi*3.01*f*t)*np.exp(-t/0.15))
    s*=1+0.06*np.sin(2*np.pi*4.5*t)  # gentle tremolo
    return vel*s*env(n,0.006,0.9+40/f)
def bell(m, dur, vel=1.0):
    n=int(dur*SR); t=np.arange(n)/SR; f=hz(m)
    s=np.sin(2*np.pi*f*t)+0.25*np.sin(2*np.pi*2.76*f*t)*np.exp(-t/0.25)+0.1*np.sin(2*np.pi*5.4*f*t)*np.exp(-t/0.1)
    return vel*s*env(n,0.003,0.7)
def pad(ms, dur):
    n=int(dur*SR); t=np.arange(n)/SR; s=np.zeros(n)
    for m in ms:
        for det in (-0.08,0.0,0.07):
            f=hz(m)*2**(det/12); s+=np.sin(2*np.pi*f*t+rng.uniform(0,6.28))
    a=np.minimum(1,t/1.2); r=np.minimum(1,(dur-t)/1.0); return s*a*np.clip(r,0,1)/len(ms)
def place(buf, sig, at):
    i=int(at*SR); j=min(len(buf), i+len(sig)); buf[i:j]+=sig[:j-i]
P={ # chords as midi notes, melody as (beat, midi)
 'v1':dict(bpm=72, prog=[[53,57,60,64],[50,53,57,60],[46,50,53,57],[48,52,55,57]], bass=[41,38,34,36],
           mel=[(0,72),(1.5,74),(3,77),(4,76),(6,72),(8,74),(9.5,77),(11,79),(12,77),(14,72)], lead=bell),
 'v2':dict(bpm=80, prog=[[55,59,62,66],[52,55,59,62],[48,52,55,59],[50,54,57,59]], bass=[43,40,36,38],
           mel=[(0.5,74),(1,76),(2,79),(4.5,78),(5,76),(6,74),(8.5,74),(9,76),(10,79),(12.5,81),(13,79),(14,76)], lead=ep),
 'A':dict(bpm=64, prog=[[51,55,58,62],[48,51,55,58],[44,48,51,55],[46,50,53,55]], bass=[39,36,32,34],
           mel=[(0,70),(2,72),(3,74),(4,75),(7,74),(8,72),(10,70),(12,67)], lead=ep),
 'B':dict(bpm=96, prog=[[48,52,55,59],[45,48,52,55],[41,45,48,52],[43,47,50,53]], bass=[36,33,29,31],
           mel=[(0,72),(0.5,74),(1,76),(2,79),(3,76),(4,74),(4.5,72),(5,74),(6,76),(8,79),(8.5,81),(9,79),(10,76),(12,74),(12.5,72),(13,74),(14,72)], lead=bell),
 'v4':dict(bpm=70, prog=[[46,50,53,57],[43,46,50,53],[39,43,46,50],[41,45,48,50]], bass=[34,31,27,29],
           mel=[(0,74),(1,72),(2,70),(4,69),(6,70),(8,72),(9,74),(10,77),(12,74),(14,72)], lead=bell),
 'R2':dict(bpm=100, prog=[[45,48,52,55],[41,45,48,52],[48,52,55,59],[43,47,50,53]], bass=[33,29,36,31],
           mel=[(0,76),(0.5,79),(1,81),(2,79),(3,76),(4,77),(4.5,76),(5,74),(6,72),(8,76),(8.5,79),(9,81),(10,84),(12,81),(13,79),(14,76)], lead=bell),
 'v3':dict(bpm=68, prog=[[50,54,57,61],[47,50,54,57],[43,47,50,54],[45,49,52,54]], bass=[38,35,31,33],
           mel=[(0,73),(2,74),(3,76),(4,78),(7,76),(8,74),(10,73),(11,71),(12,69)], lead=bell),
}
def make(key):
    p=P[key]; beat=60/p['bpm']; bar=4*beat; out=np.zeros(N+SR*4)
    t0=0.0; ci=0
    while t0<T:
        ch=p['prog'][ci%4]; b=p['bass'][ci%4]
        place(out, 0.18*pad([m+12 for m in ch], bar+1.0), t0)
        place(out, 0.35*ep(b, bar, 0.9), t0)
        for k,m in enumerate(ch):  # soft broken-chord arpeggio on 8ths
            for rep in range(2):
                place(out, 0.16*ep(m+12, 1.6, 0.8 if k==0 else 0.6), t0+(k+4*rep)*beat/2)
        t0+=bar; ci+=1
    for bt,m in p['mel']:
        for loop in (0,16):
            at=(bt+loop)*beat
            if at<T-1.5: place(out, 0.22*p['lead'](m,2.5,0.9), at)
    # reverb: decaying filtered noise impulse
    n=int(2.4*SR); ir=rng.standard_normal(n)*np.exp(-np.arange(n)/SR/0.6)
    ir=sosfilt(butter(2,5000,'lp',fs=SR,output='sos'),ir); ir/=np.sqrt((ir**2).sum())
    wet=fftconvolve(out,ir)[:len(out)]
    mix=0.75*out+0.45*wet
    mix=sosfilt(butter(2,7000,'lp',fs=SR,output='sos'),mix)
    mix=sosfilt(butter(1,60,'hp',fs=SR,output='sos'),mix)
    mix=mix[:N]; t=np.arange(N)/SR
    mix*=np.minimum(1,t/1.0)*np.clip((T-t)/2.0,0,1)
    mix/=np.abs(mix).max()+1e-9; mix*=0.8
    st=np.stack([mix, np.roll(mix,int(0.012*SR))],1)  # slight stereo width
    sf.write(f'music_{key}.wav', st, SR)
import sys
for k in (sys.argv[1:] or P): make(k)
print('ok')
