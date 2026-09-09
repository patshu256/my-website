const btn=document.getElementById('menuBtn');const menu=document.getElementById('navMenu');btn.onclick=()=>menu.classList.toggle('active');
const items=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{items.forEach(i=>{if(i.getBoundingClientRect().top<window.innerHeight-100)i.classList.add('show')})});