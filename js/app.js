const perPage=6;let current=1;
const container=document.getElementById('articles');
const pag=document.getElementById('pagination');
function render(){
let data=[...articles];
const q=document.getElementById('search').value.toLowerCase();
data=data.filter(a=>a.title.toLowerCase().includes(q));
const sort=document.getElementById('sort').value;
if(sort==='oldest')data.reverse();
if(sort==='popular')data.sort((a,b)=>(localStorage.getItem('likes_'+b.id)||0)-(localStorage.getItem('likes_'+a.id)||0));
const start=(current-1)*perPage;
container.innerHTML=data.slice(start,start+perPage).map(a=>`<div class='card'><h3>${a.title}</h3><a href='article.html?id=${a.id}'>Read</a></div>`).join('');
let pages=Math.ceil(data.length/perPage); pag.innerHTML='';
for(let i=1;i<=pages;i++){pag.innerHTML+=`<button onclick='current=${i};render()'>${i}</button>`}
}
document.getElementById('search').oninput=()=>{if(window.gtag)gtag('event','search');render();};
document.getElementById('sort').onchange=render;render();
