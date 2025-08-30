
document.addEventListener('DOMContentLoaded',()=>{
 const burger=document.getElementById('burger'), panel=document.getElementById('nav-panel');
 if(burger&&panel){ burger.addEventListener('click',()=>{ burger.classList.toggle('open'); panel.classList.toggle('open'); }); }
});
