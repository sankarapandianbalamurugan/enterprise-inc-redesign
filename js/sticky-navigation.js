/* Section-aware navigation. One passive scroll listener, one rAF per frame max. */
(()=>{'use strict';
 const bar=document.getElementById('site-navigation-bar');if(!bar)return;
 const areas=[...document.querySelectorAll('[data-nav-theme]')].filter(el=>el!==bar);
 let pending=false,theme='';
 function refresh(){pending=false;const y=bar.getBoundingClientRect().height*.5;let active=null;
  // Choose the smallest section containing the header's vertical sampling point.
  for(const el of areas){const r=el.getBoundingClientRect();if(r.top<=y&&r.bottom>y){if(!active||r.height<active.rect.height)active={el,rect:r};}}
  const next=active?.el.dataset.navTheme||(document.body.classList.contains('contact-page')?'light':'dark');
  if(next!==theme){theme=next;bar.dataset.navTheme=next;}
 }
 function request(){if(!pending){pending=true;requestAnimationFrame(refresh)}}
 window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request,{passive:true});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)request()});
 const menu=bar.querySelector('.menu'),nav=bar.querySelector('.nav');
 if(menu&&nav){const lock=()=>document.body.classList.toggle('nav-menu-open',nav.classList.contains('open'));
  menu.addEventListener('click',()=>requestAnimationFrame(lock));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('nav-menu-open')}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')document.body.classList.remove('nav-menu-open')});
 }
 refresh();
})();
