let i=0;const slides=document.querySelectorAll('.slide');const wrap=document.querySelector('.slides');
function show(n){i=(n+slides.length)%slides.length;wrap.style.transform=`translateX(-${i*100}vw)`}
document.getElementById('next').onclick=()=>show(i+1);
document.getElementById('prev').onclick=()=>show(i-1);
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')show(i+1);if(e.key==='ArrowLeft')show(i-1);});
