import json, sys, html, os
# usage: build.py <video_id> <style> <outdir>
V = json.load(open('videos.json'))[sys.argv[1]]
style = sys.argv[2]; out = sys.argv[3]
os.makedirs(out, exist_ok=True)
for f in ('gsap.min.js', V['bg']):
    src=os.path.abspath(f'assets/{f}'); dst=f'{out}/{f}'
    if not os.path.exists(dst): os.symlink(src, dst)
acc = V['accent']; T = 14
def words(s, cls):  # word spans; **...** wraps a key phrase span
    o=[]; inkey=False
    for tok in s.split(' '):
        pre=''; post=''
        if tok.startswith('**'): tok=tok[2:]; pre=f'<span class="key {cls}k">'; inkey=True
        if tok.endswith('**'): tok=tok[:-2]; post='</span>'; inkey=False
        br='<br>' if tok.endswith('|') else ''; tok=tok.rstrip('|')
        o.append(f'{pre}<span class="w {cls}">{html.escape(tok)}</span>{post}{br}')
    body=' '.join(o[:-1])+('&nbsp;' if len(o)>1 and not o[-2].endswith('<br>') else ' ')+o[-1]
    return '<span class="bx">'+body+'</span>'
myth = words(V['myth'], 'mw'); f1 = words(V['fact1'], 'f1w'); f2 = words(V['fact2'], 'f2w')
page = f'''<!doctype html><html><head><meta charset="utf-8"><style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:1080px;height:1920px;overflow:hidden;background:#000;font-family:'Inter',sans-serif}}
#root{{position:relative;width:1080px;height:1920px;overflow:hidden}}
#bg{{position:absolute;inset:0;width:1080px;height:1920px;object-fit:cover}}
.scrim{{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.25) 38%,rgba(0,0,0,.05) 60%,rgba(0,0,0,.35) 100%)}}
#endscrim{{position:absolute;inset:0;background:rgba(10,10,14,.72);opacity:0}}
.panel{{position:absolute;left:84px;right:84px;top:{V.get('top',250)}px}}
.tag{{display:inline-block;font-weight:900;font-size:40px;letter-spacing:6px;padding:12px 26px;border-radius:999px;margin-bottom:34px}}
.tag.m{{background:#FF5A4E;color:#fff}} .tag.f{{background:{acc};color:#111}}
.txt{{font-weight:900;color:#fff;line-height:1.08;letter-spacing:-1.5px}}
.myth{{font-size:104px;position:relative}}
.fact1{{font-size:80px}} .fact2{{font-size:66px;margin-top:40px;font-weight:800}}
.w{{display:inline}} .s-reveal .w{{display:inline-block}}
.strike{{position:absolute;left:-10px;height:14px;background:#FF5A4E;border-radius:7px;transform-origin:left center;width:0}}
/* STYLE: block */
.s-block .txt{{line-height:1.22}}
.s-block .txt .bx{{background:#fff;color:#111;padding:2px 18px;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:6px}}
.s-block .txt .key{{background:{acc};padding:2px 6px;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:4px}}
.s-block .myth .bx{{background:#111;color:#fff}}
/* STYLE: reveal */
.s-reveal .txt{{text-shadow:0 0 40px rgba(0,0,0,.8),0 4px 18px rgba(0,0,0,.8),0 2px 3px rgba(0,0,0,.9)}}
.s-reveal .txt .key{{color:{acc}}}
/* STYLE: highlight */
.s-highlight .txt{{text-shadow:0 0 40px rgba(0,0,0,.8),0 4px 18px rgba(0,0,0,.8),0 2px 3px rgba(0,0,0,.9)}}
.s-highlight .txt .key{{color:#111;text-shadow:none;background:linear-gradient({acc},{acc}) no-repeat 0 0/var(--hl,0%) 100%;padding:0 8px;-webkit-box-decoration-break:clone;box-decoration-break:clone}}
.end{{position:absolute;left:84px;right:84px;top:520px;opacity:0;color:#fff;text-align:left}}
.end .rrr{{font-weight:900;font-size:118px;line-height:1.04;letter-spacing:-2px}}
.end .rrr span{{display:block}} .end .rrr span:nth-child(2){{color:{acc}}}
.end .url{{margin-top:60px;font-weight:800;font-size:54px}}
.end .pros{{margin-top:44px;font-weight:600;font-size:36px;line-height:1.35;color:rgba(255,255,255,.88)}}
.end .disc{{position:absolute;top:1060px;left:0;right:0;font-weight:500;font-size:30px;color:rgba(255,255,255,.72)}}
.brand{{position:absolute;left:84px;bottom:110px;font-weight:800;font-size:30px;letter-spacing:4px;color:rgba(255,255,255,.85)}}
</style></head><body>
<div id="root" class="s-{style}" data-composition-id="root" data-width="1080" data-height="1920" data-duration="{T}" data-fps="30">
 <video id="bg" class="clip" src="{V['bg']}" data-start="0" data-duration="{T}" muted playsinline></video>
 <div class="scrim"></div>
 <div class="panel" id="mythP"><div class="tag m">MYTH</div><div class="txt myth" id="mythT">{myth}</div></div>
 <div class="panel" id="factP" style="opacity:0"><div class="tag f">FACT</div><div class="txt fact1">{f1}</div><div class="txt fact2">{f2}</div></div>
 <div id="endscrim"></div>
 <div class="end" id="end"><div class="rrr"><span>Recognize.</span><span>Respond.</span><span>Refer.</span></div>
   <div class="url">Learn more at beyondthehairline.com</div>
   <div class="pros">For barbers, cosmetologists, hairstylists, braiders, loctitians, and twist specialists.</div>
   <div class="disc">This is for education, not medical advice.</div></div>
 <div class="brand">BEYOND THE HAIRLINE</div>
<script src="gsap.min.js"></script>
<script>
const S="{style}";
const tl=gsap.timeline({{paused:true}});
// background slow push-in
tl.fromTo("#bg",{{scale:1.0}},{{scale:1.08,duration:{T},ease:"none"}},0);
function inWords(sel,start,stagger){{
  const ws=document.querySelectorAll(sel);
  if(S==="reveal"){{ tl.fromTo(ws,{{opacity:0,y:30}},{{opacity:1,y:0,duration:.22,stagger:stagger,ease:"power2.out"}},start); return start+ws.length*stagger+.22; }}
  const box=ws[0].closest(".txt"); tl.fromTo(box,{{opacity:0,y:30}},{{opacity:1,y:0,duration:.4,ease:"power3.out"}},start); return start+.45;
}}
function hl(sel,at){{ if(S!=="highlight")return; document.querySelectorAll(sel).forEach((w,i)=>tl.fromTo(w,{{"--hl":"0%"}},{{"--hl":"100%",duration:.45,ease:"power2.out"}},at+i*.1)); }}
tl.fromTo("#mythP .tag",{{opacity:0,scale:.6}},{{opacity:1,scale:1,duration:.3,ease:"back.out(2)"}},.2);
let t=inWords(".mw",.35,.16);
hl(".mwk",t+.1);
// strike-through lines, one per text line
const mt=document.getElementById("mythT"); const lines={{}};
mt.querySelectorAll(".w").forEach(w=>{{const top=w.offsetTop;(lines[top]=lines[top]||[]).push(w)}});
let k=0; const strikeAt={V.get('strike_at',2.9)};
Object.entries(lines).forEach(([top,ws])=>{{const l=ws[0].offsetLeft, r=ws[ws.length-1].offsetLeft+ws[ws.length-1].offsetWidth;
  const s=document.createElement("div"); s.className="strike"; s.style.top=(+top+ws[0].offsetHeight*0.52-7)+"px"; s.style.left=(l-10)+"px"; mt.appendChild(s);
  tl.fromTo(s,{{width:0}},{{width:(r-l+20),duration:.28,ease:"power2.inOut"}},strikeAt+k*.2); k++;}});
tl.to("#mythP",{{opacity:0,y:-40,duration:.35,ease:"power2.in"}},4.3);
tl.set("#factP",{{opacity:1}},4.65);
tl.fromTo("#factP .tag",{{opacity:0,scale:.6}},{{opacity:1,scale:1,duration:.3,ease:"back.out(2)"}},4.65);
let t2=inWords(".f1w",4.8,.12); hl(".f1wk",t2+.1);
let t3=inWords(".f2w",Math.max(t2+.9,6.9),.12); hl(".f2wk",t3+.1);
tl.to("#factP",{{opacity:0,y:-40,duration:.35,ease:"power2.in"}},10.0);
tl.to("#endscrim",{{opacity:1,duration:.5}},10.0);
tl.fromTo("#end",{{opacity:0,y:30}},{{opacity:1,y:0,duration:.5,ease:"power3.out"}},10.3);
tl.fromTo("#end .rrr span",{{opacity:0,x:-30}},{{opacity:1,x:0,duration:.3,stagger:.22}},10.3);
window.__timelines=window.__timelines||{{}}; window.__timelines["root"]=tl;
</script></div></body></html>'''
open(f'{out}/index.html','w').write(page)
