var style = document.createElement('style');
style.innerHTML=`div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#000000;border-radius:50%;animation:clickEffect 1s ease-out;z-index:99999;}@keyframes clickEffect{0%{opacity:1;width:0.5em; height:0.5em;margin:-0.25em;border-width:0.5em;}100%{opacity:0.2;width:10em; height:10em;margin:-7.5em;border-width:0.03em;}}`;
document.head.appendChild(style);
function clickEffect(e){var d=document.createElement("div");d.className="clickEffect";d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";document.body.appendChild(d);d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));}
document.addEventListener('click',clickEffect);
