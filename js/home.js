
$('#overview').innerHTML=areas.slice(0,3).map((a,i)=>`<div class="card dcard reveal"><h3>${a[0]}</h3><p>${a[1]}</p></div>`).join('')+
 `<div class="card dcard reveal"><h3>And more…</h3><p><a href="expertise.html" data-bg-light="#C9D2D4" data-bg-dark="#33434a">See all 9 practice areas →</a></p></div>`;

let cur=0;
$('#slider').innerHTML=reviews.map(r=>`<div class="slide"><q>${r[0]}</q><small>— ${r[1]}</small></div>`).join('');
$('#dots').innerHTML=reviews.map((_,i)=>`<button aria-label="Review ${i+1}"></button>`).join('');
const slides=document.querySelectorAll('.slide'),dots=document.querySelectorAll('#dots button');
function show(i){cur=i;slides.forEach((s,j)=>s.classList.toggle('on',j==i));dots.forEach((d,j)=>d.classList.toggle('on',j==i))}
dots.forEach((d,i)=>d.onclick=()=>show(i));show(0);setInterval(()=>show((cur+1)%slides.length),15000);

const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
 const end=+e.target.dataset.count;let n=0;const t=setInterval(()=>{n+=Math.ceil(end/50);if(n>=end){n=end;clearInterval(t)}e.target.textContent=n+'+'},30)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));

