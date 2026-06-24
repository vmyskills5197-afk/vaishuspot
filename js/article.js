
const id=new URLSearchParams(location.search).get('id');
const a=articles.find(x=>x.id==id);
let likes=+(localStorage.getItem('likes_'+id)||0);
document.getElementById('content').innerHTML=`<h1>${a.title}</h1><p>${a.content}</p><button id='like'>Like (${likes})</button>`;
if(window.gtag)gtag('event','article_open',{article_title:a.title});
document.getElementById('like').onclick=()=>{likes++;localStorage.setItem('likes_'+id,likes);document.getElementById('like').innerText='Like ('+likes+')'; if(window.gtag)gtag('event','article_like',{article_title:a.title});};
