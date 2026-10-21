
$('#area').innerHTML='<option value="">Select a practice area</option>'+areas.map(a=>`<option>${a[0]}</option>`).join('');

$('#form').addEventListener('submit',e=>{e.preventDefault();let ok=true;
 const set=(k,m)=>{$('#e-'+k).textContent=m;if(m)ok=false};
 set('name',$('#name').value.trim().length<2?'Please enter your full name.':'');
 set('email',/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#email').value)?'':'Please enter a valid email, e.g. name@example.com.');
 set('phone',/^[+\d][\d\s-]{6,}$/.test($('#phone').value.trim())?'':'Please enter a valid phone number.');
 set('area',$('#area').value?'':'Please choose a practice area.');
 set('msg',$('#msg').value.trim().length<10?'Please tell us a little more (10+ characters).':'');
 set('consent',$('#consent').checked?'':'Please tick the consent box to continue.');
 $('#ok').style.display=ok?'block':'none';if(ok)e.target.reset()});
