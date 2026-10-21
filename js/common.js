
const root=document.documentElement;
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));

const tbtn=$('#theme');
let theme='light';
try{theme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}
function setTheme(t,instant){if(instant)root.classList.add('notrans');
 theme=t;root.dataset.theme=t;tbtn.setAttribute('aria-pressed',t=='dark');
 tbtn.setAttribute('aria-label','Switch to '+(t=='dark'?'light':'dark')+' mode');
 try{localStorage.setItem('theme',t)}catch(e){}}
tbtn.onclick=()=>{
 const next=theme=='dark'?'light':'dark';
 if(!document.startViewTransition||still){setTheme(next);return}
 const r=tbtn.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
 const end=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
 const vt=document.startViewTransition(()=>setTheme(next,true));
 vt.finished.finally(()=>root.classList.remove('notrans'));
 vt.ready.then(()=>root.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${end}px at ${x}px ${y}px)`]},
  {duration:800,easing:'ease-in-out',pseudoElement:'::view-transition-new(root)'}))};

const fnav=$('.fnav'),ind=$('.ind'),navLinks=[...document.querySelectorAll('.links a')],here=navLinks.find(a=>a.hasAttribute('aria-current'));
function lit(a){if(!a)return;ind.style.width=a.offsetWidth+'px';ind.style.translate=a.offsetLeft+'px 0';navLinks.forEach(l=>l.classList.toggle('lit',l===a))}
navLinks.forEach(a=>{a.addEventListener('mouseenter',()=>lit(a));a.addEventListener('focus',()=>lit(a))});
$('.links').addEventListener('mouseleave',()=>lit(here));
$('.links').addEventListener('focusout',()=>lit(here));
addEventListener('resize',()=>lit(here));addEventListener('load',()=>lit(here));
ind.style.transition='none';lit(here);requestAnimationFrame(()=>requestAnimationFrame(()=>ind.style.transition=''));


function split(el){let n=0;el.setAttribute('aria-label',el.textContent.trim());
 (function walk(node){[...node.childNodes].forEach(ch=>{
  if(ch.nodeType==3){const f=document.createDocumentFragment();
   ch.textContent.split(/(\s+)/).forEach(p=>{if(!p)return;
    if(/^\s+$/.test(p)){f.append(' ');return}
    const w=document.createElement('span'),c=document.createElement('span');
    w.className='w';w.setAttribute('aria-hidden','true');c.className='c';c.style.setProperty('--i',n++);c.textContent=p;w.append(c);f.append(w)});
   ch.replaceWith(f)}
  else if(ch.nodeType==1)walk(ch)})})(el);
 el.classList.add('split')}
document.querySelectorAll('h1,h2').forEach(h=>{h.classList.remove('reveal');split(h)});

const items=[...document.querySelectorAll('.reveal,.split')];
if(still||!('IntersectionObserver' in window))items.forEach(e=>e.classList.add('in','done'));
else{const io=new IntersectionObserver(es=>{
  const vis=es.filter(e=>e.isIntersecting).map(e=>({el:e.target,r:e.boundingClientRect}));
  vis.sort((a,b)=>(Math.round(a.r.top/40)-Math.round(b.r.top/40))||(a.r.left-b.r.left));
  vis.forEach((v,i)=>{const el=v.el;el.style.setProperty('--d',Math.min(i*.12,1.2)+'s');el.classList.add('in');io.unobserve(el);
   setTimeout(()=>el.classList.add('done'),1600+i*120)})},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
 items.forEach(el=>io.observe(el))}


const drift=[...document.querySelectorAll('[data-speed]')];
const marq=[...document.querySelectorAll('.marquee')].map((m,i)=>{
 const t=m.querySelector('.track'),unit=t.innerHTML;let copies=1;
 while(t.scrollWidth<innerWidth*2.2&&copies<12){t.innerHTML+=unit;copies++}
 return{m,t,unitW:t.scrollWidth/copies,x:0,dir:i%2?1:-1}});
let lastY=scrollY,navY=scrollY,vel=0;
function loop(){
 const y=scrollY,max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
 vel+=((y-lastY)-vel)*.12;lastY=y;
 if(!still){
  marq.forEach(o=>{const sp=.8+Math.min(Math.abs(vel),60)*.2,sign=o.dir*(vel<-1?-1:1);
   o.x=(((o.x+sign*sp)%o.unitW)+o.unitW)%o.unitW-o.unitW;
   o.t.style.transform=`translateX(${o.x}px)`;o.m.style.transform=`skewY(${clamp(-vel*.08,-3.5,3.5)}deg)`});
  drift.forEach(el=>{const r=el.parentElement.getBoundingClientRect();
   el.style.transform=`translateY(${(r.top+r.height/2-innerHeight/2)*(+el.dataset.speed)}px)`})}
 if(Math.abs(y-navY)>6){fnav.classList.toggle('hide',y>navY&&y>180);navY=y}
 if(y<=120)fnav.classList.remove('hide');
 $('#progress').style.transform=`scaleX(${y/max})`;$('#top').classList.toggle('show',y>600);
 requestAnimationFrame(loop)}
loop();
$('#top').onclick=()=>scrollTo({top:0});

if(!still&&matchMedia('(hover:hover)').matches){
 document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
   c.style.transform=`perspective(800px) rotateX(${-py*8}deg) rotateY(${px*10}deg)`});
  c.addEventListener('pointerleave',()=>c.style.transform='')});
 document.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();
   b.style.translate=`${(e.clientX-r.left-r.width/2)*.25}px ${(e.clientY-r.top-r.height/2)*.35}px`});
  b.addEventListener('pointerleave',()=>b.style.translate='')})}


document.querySelectorAll('a[data-bg-light]').forEach(a=>a.addEventListener('click',e=>{
 if(e.metaKey||e.ctrlKey||e.shiftKey||a.target)return;
 e.preventDefault();
 if(a.getAttribute('aria-current')==='page'){scrollTo({top:0,behavior:'smooth'});return}
 if(still){location.href=a.href;return}
 const col=theme=='dark'?a.dataset.bgDark:a.dataset.bgLight;
 root.style.setProperty('--wipe',col);root.classList.add('leaving');
 try{sessionStorage.setItem('wipe',col)}catch(err){}
 setTimeout(()=>{location.href=a.href},520)}));
addEventListener('pageshow',e=>{if(e.persisted)root.classList.remove('leaving')});

document.querySelectorAll('[data-map]').forEach(b=>{
 b.innerHTML=`<iframe src="${MAP_EMBED_URL}" title="Map showing our office location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="btn" href="${MAP_PLACE_LINK}" target="_blank" rel="noopener">Open in Google Maps ↗</a>`});

setTheme(theme,true);root.offsetWidth;root.classList.remove('notrans');

setTimeout(()=>document.querySelectorAll('.reveal:not(.in),.split:not(.in)').forEach(e=>e.classList.add('in','done')),3000);
