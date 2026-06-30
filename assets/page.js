/* =======================================================================
   Shared chrome for the standalone slug pages (gear, spirit-week-themes,
   raffle-baskets, fundraising-video). Injects the header, ticker, footer,
   and the video/lightbox modals, then wires them up — so each slug page
   only contains its own <main> content.
   A page may define window.renderPage(config) to populate its content;
   it runs after the chrome is in place.
   ======================================================================= */
(function(){
  var C = window.WOS || {};

  /* brand colors from config */
  var cc = C.colors || {}, rootStyle = document.documentElement.style;
  for(var k in cc){ rootStyle.setProperty('--'+k, cc[k]); }

  /* Cloudflare Web Analytics (only if a token is set in config) */
  if(C.cfBeaconToken){ var cfb = document.createElement('script'); cfb.defer = true; cfb.src = 'https://static.cloudflareinsights.com/beacon.min.js'; cfb.setAttribute('data-cf-beacon', JSON.stringify({token: C.cfBeaconToken})); document.head.appendChild(cfb); }

  /* ---- header + ticker ---- */
  var links = [['Home','/#top'],['About','/#about'],['Donate','/#donate'],['Contact','/#contact'],['Volunteer','/#volunteer']];
  var header = document.createElement('header');
  header.id = 'hdr';
  header.innerHTML = '<div class="wrap nav">'+
    '<a class="brand" href="/"><img src="'+C.logo+'" alt="Week of Sports logo"> Week of Sports</a>'+
    '<nav class="nav-links">'+links.map(function(l){return '<a href="'+l[1]+'">'+l[0]+'</a>';}).join('')+'</nav>'+
    '<a class="nav-ig" href="'+(C.instagramUrl||'https://www.instagram.com/weekofsports')+'" target="_blank" rel="noopener" aria-label="Follow Week of Sports on Instagram"><svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"></circle></svg></a>'+
    '<button class="btn btn-primary" id="hdr-donate">Donate</button></div>';

  var ticker = document.createElement('div');
  ticker.className = 'ticker';
  var tk = (C.ticker||[]).map(function(s){return '<span>'+s+'</span>';}).join('');
  ticker.innerHTML = '<div class="ticker-track">'+tk+tk+'</div>';

  document.body.insertBefore(ticker, document.body.firstChild);
  document.body.insertBefore(header, document.body.firstChild);

  /* ---- footer ---- */
  var footer = document.createElement('footer');
  footer.innerHTML = '<div class="wrap">'+
    '<img src="'+C.logo+'" alt="Week of Sports">'+
    '<div class="f-links">'+
      '<a href="https://www.instagram.com/weekofsports" target="_blank">Instagram</a>'+
      '<a href="https://www.facebook.com/week.of.sports/" target="_blank">Facebook</a>'+
      '<a href="/#donate">Donate</a>'+
      '<a href="/gear/">Gear</a>'+
      '<a href="/spirit-week-themes/">Spirit week</a>'+
      '<a href="/raffle-baskets/">Raffle baskets</a>'+
      '<a href="/fundraising-video/">Our story</a>'+
      '<a href="mailto:'+C.contactEmail+'">Contact</a>'+
    '</div>'+
    '</div>';
  document.body.appendChild(footer);

  /* ---- video modal + lightbox ---- */
  var modal = document.createElement('div');
  modal.className = 'modal'; modal.id = 'modal';
  modal.innerHTML = '<div class="modal-box"><button class="modal-x" aria-label="Close">&times;</button><div id="modal-content"></div></div>';
  document.body.appendChild(modal);

  var lb = document.createElement('div');
  lb.className = 'lb'; lb.id = 'lb';
  lb.innerHTML = '<button class="lb-x" aria-label="Close">&times;</button><button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button><img id="lb-img" alt=""><button class="lb-nav lb-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(lb);

  /* ---- wiring ---- */
  window.addEventListener('scroll', function(){ header.classList.toggle('scrolled', window.scrollY>40); });

  window.openVenmo = function(){
    var note = encodeURIComponent('Week of Sports — Andrew Walker Memorial Scholarship');
    window.open('https://venmo.com/u/'+C.venmoHandle+'?txn=pay&note='+note, '_blank');
  };
  document.getElementById('hdr-donate').onclick = window.openVenmo;

  function embedUrl(u){
    if(!u) return '';
    var yt = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if(yt) return 'https://www.youtube.com/embed/'+yt[1]+'?autoplay=1&rel=0';
    var vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if(vm) return 'https://player.vimeo.com/video/'+vm[1]+'?autoplay=1';
    return u;
  }
  window.openVideo = function(){
    var url = embedUrl(C.heroVideoUrl), mc = document.getElementById('modal-content');
    if(!url){ mc.innerHTML = '<div class="modal-msg">Add your video link in <b>heroVideoUrl</b> in config.js.</div>'; modal.classList.add('open'); return; }
    mc.innerHTML = '<div class="vspin"></div><iframe class="vframe" src="'+url+'" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>';
    var ifr = mc.querySelector('iframe');
    function reveal(){ ifr.classList.add('ready'); var sp=mc.querySelector('.vspin'); if(sp) sp.remove(); }
    ifr.onload = reveal; setTimeout(reveal, 2500);
    modal.classList.add('open');
  };
  window.closeVideo = function(){ modal.classList.remove('open'); document.getElementById('modal-content').innerHTML=''; };
  modal.querySelector('.modal-x').onclick = window.closeVideo;
  modal.onclick = function(e){ if(e.target===modal) window.closeVideo(); };

  /* shared lightbox — a page sets window.LBIMAGES = [src, ...] */
  var lbi = 0;
  window.openLB = function(i){ var a=window.LBIMAGES||[]; if(!a.length) return; lbi=i; document.getElementById('lb-img').src=a[i]; lb.classList.add('open'); };
  window.stepLB = function(d){ var a=window.LBIMAGES||[]; if(!a.length) return; lbi=(lbi+d+a.length)%a.length; document.getElementById('lb-img').src=a[lbi]; };
  window.closeLB = function(){ lb.classList.remove('open'); };
  lb.querySelector('.lb-x').onclick = window.closeLB;
  lb.querySelector('.lb-prev').onclick = function(){ window.stepLB(-1); };
  lb.querySelector('.lb-next').onclick = function(){ window.stepLB(1); };
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape'){ window.closeVideo(); window.closeLB(); }
    if(lb.classList.contains('open')){ if(e.key==='ArrowLeft') window.stepLB(-1); if(e.key==='ArrowRight') window.stepLB(1); }
  });

  /* reveal-on-scroll */
  var revObs = new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); revObs.unobserve(e.target); } }); }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){ revObs.observe(el); });

  /* page-specific content */
  if(typeof window.renderPage === 'function') window.renderPage(C);
})();
