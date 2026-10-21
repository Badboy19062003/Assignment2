
$('#areas').innerHTML=areas.map((a,i)=>`<article class="card reveal">
 <div class="num">0${i+1}</div>
 <h3><button class="acc-head" id="h${i}" aria-expanded="false" aria-controls="p${i}"><span>${a[0]}</span><span class="plus" aria-hidden="true"></span></button></h3>
 <p>${a[1]}</p>
 <div class="acc-panel" id="p${i}" role="region" aria-labelledby="h${i}"><div>
  <p>${a[2]}</p>
  <ul>${a[3].map(b=>`<li>${b}</li>`).join('')}</ul>
  <a href="contact.html" data-bg-light="#DBCAB2" data-bg-dark="#2e3234">Book a consultation →</a>
 </div></div></article>`).join('');
document.querySelectorAll('.acc-head').forEach(b=>b.addEventListener('click',()=>{
 const card=b.closest('.card'),open=card.classList.toggle('open');b.setAttribute('aria-expanded',open)}));
