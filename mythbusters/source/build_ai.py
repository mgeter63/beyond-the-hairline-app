# Captions + end card over an AI clip. usage: build_ai.py <cfg.json> <outdir>
import json, sys, os, html
C=json.load(open(sys.argv[1])); out=sys.argv[2]; os.makedirs(out,exist_ok=True)
for f in (C['clip'], '/home/user/mythbusters/project/assets/gsap.min.js'):
    d=f"{out}/{os.path.basename(f)}"
    if not os.path.exists(d): os.symlink(os.path.abspath(f), d)
T=C['total']; acc=C['accent']; clipdur=C['clipdur']
def fmt(s): return html.escape(s).replace('**','')  # plain
caps=''.join(f'<div class="cap" id="c{i}"><span class="ln">{c["html"]}</span></div>' for i,c in enumerate(C['caps']))
page=f'''<!doctype html><html><head><meta charset="utf-8"><style>
*{{margin:0;padding:0;box-sizing:border-box}} body{{width:1080px;height:1920px;background:#000;font-family:'Inter',sans-serif;overflow:hidden}}
#root{{position:relative;width:1080px;height:1920px;overflow:hidden}}
#clip{{position:absolute;inset:0;width:1080px;height:1920px;object-fit:cover}}
#hold{{position:absolute;inset:0;width:1080px;height:1920px;object-fit:cover;opacity:0}}
.grad{{position:absolute;left:0;right:0;bottom:0;height:900px;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.55))}}
.cap{{position:absolute;left:70px;right:70px;bottom:{C.get('cap_bottom',430)}px;text-align:center;opacity:0}}
.ln{{display:inline;font-weight:800;font-size:66px;line-height:1.32;color:#fff;background:rgba(12,12,16,.78);padding:6px 22px;border-radius:14px;-webkit-box-decoration-break:clone;box-decoration-break:clone}}
.ln b{{color:{acc};font-weight:900}}
#dim{{position:absolute;inset:0;background:rgba(10,10,14,.74);opacity:0}}
.end{{position:absolute;left:84px;right:84px;top:540px;color:#fff;opacity:0}}
.end .rrr{{font-weight:900;font-size:118px;line-height:1.04;letter-spacing:-2px}} .end .rrr span{{display:block}} .end .rrr span:nth-child(2){{color:{acc}}}
.end .url{{margin-top:60px;font-weight:800;font-size:54px}}
.end .pros{{margin-top:44px;font-weight:600;font-size:36px;line-height:1.35;color:rgba(255,255,255,.88)}}
.end .disc{{position:absolute;top:1040px;left:0;right:0;font-weight:500;font-size:30px;color:rgba(255,255,255,.72)}}
.brand{{position:absolute;left:84px;bottom:110px;font-weight:800;font-size:30px;letter-spacing:4px;color:rgba(255,255,255,.85)}}
.ai{{position:absolute;right:60px;top:70px;font-weight:600;font-size:24px;color:rgba(255,255,255,.75);background:rgba(0,0,0,.35);padding:6px 14px;border-radius:999px}}
</style></head><body>
<div id="root" data-composition-id="root" data-width="1080" data-height="1920" data-duration="{T}" data-fps="30">
<video id="clip" class="clip" src="{os.path.basename(C['clip'])}" data-start="0" data-duration="{clipdur}" muted playsinline></video>
<div class="grad"></div>{caps}
<div id="dim"></div>
<div class="end" id="end"><div class="rrr"><span>Recognize.</span><span>Respond.</span><span>Refer.</span></div>
<div class="url">Learn more at beyondthehairline.com</div>
<div class="pros">For barbers, cosmetologists, hairstylists, braiders, loctitians, and twist specialists.</div>
<div class="disc">This is for education, not medical advice.</div></div>
<div class="ai">AI-generated</div>
<div class="brand">BEYOND THE HAIRLINE</div>
<script src="gsap.min.js"></script><script>
const tl=gsap.timeline({{paused:true}});
const caps={json.dumps(C['caps'])};
caps.forEach((c,i)=>{{tl.fromTo("#c"+i,{{opacity:0,y:24}},{{opacity:1,y:0,duration:.35,ease:"power3.out"}},c.start);
  tl.to("#c"+i,{{opacity:0,duration:.3}},c.end);}});
tl.to("#dim",{{opacity:1,duration:.5}},{C['end_at']});
tl.fromTo("#end",{{opacity:0,y:30}},{{opacity:1,y:0,duration:.5,ease:"power3.out"}},{C['end_at']+0.2});
tl.fromTo("#end .rrr span",{{opacity:0,x:-30}},{{opacity:1,x:0,duration:.3,stagger:.22}},{C['end_at']+0.2});
window.__timelines={{root:tl}};
</script></div></body></html>'''
open(f'{out}/index.html','w').write(page)
