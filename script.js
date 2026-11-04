/* ============ AVĀRIJAS BRIGĀDE — v2 ============ */

/* ---------- i18n ---------- */
const translations = {
  lv: {
    navAbout:"Par mums",navRaids:"Reidi",navJoin:"Pievienoties",
    eyebrow:"LATVIEŠU HORDE ĢILDE · WOW FOREVER",heroSub:"Latviešu spēlētāji. Kopīga cīņa. Viena brigāde.",
    heroCopy:"Mēs esam latviešu World of Warcraft ģilde ar Classic WoW saknēm. Spēlējam Horde pusē WoW Forever EU serverī ar PvP ruleset un aicinām pievienoties jaunus biedrus.",
    joinDiscord:"PIEVIENOJIES DISCORD",discover:"IEPAZĪSTI ĢILDI",region:"REĢIONS",faction:"FRAKCIJA",language:"VALODA",latvian:"LATVIEŠU",
    estClassic:"EST. CLASSIC",artCaption:"VIENA BRIGĀDE. VIENS MĒRĶIS.",
    mq1:"LATVIEŠU HORDE ĢILDE",mq2:"REIDI · PVE · PVP · KOPIENA",
    stat1:"WoW saknes",stat2:"EU PvP Ruleset",stat3:"Kopienas valodas",stat4:"Uzņemam jaunus biedrus",
    aboutKicker:"KAS MĒS ESAM",aboutTitle:"VAIRĀK NEKĀ <em>ĢILDE.</em>",aboutIntro:"Avārijas Brigāde ir latviešu WoW kopiena, kas veidojusies kopš World of Warcraft Classic pirmsākumiem. Mūs vieno vēlme spēlēt kopā, palīdzēt cits citam un izbaudīt Azeroth kompānijā.",
    feature1Title:"Latviešu kopiena",feature1Text:"Sazināmies latviski, iepazīstam citus spēlētājus un veidojam draudzīgu vidi gan veterāniem, gan jaunpienācējiem.",
    feature2Title:"Reidi, PvE un PvP",feature2Text:"Kopīgi reidi, PvE aktivitātes un PvP cīņas ir svarīga mūsu ģildes dzīves daļa.",
    feature3Title:"Classic pieredze",feature3Text:"Ģildei ir vairāku gadu Classic WoW spēlēšanas un reidošanas pieredze.",
    raidKicker:"KOPĪGĀ SPĒLE",raidTitle:"SAVĀCAMIES. <em>CĪNĀMIES.</em>",raidText:"Mūsu reidu dienas pašlaik ir trešdiena, ceturtdiena un svētdiena. Precīzi sākuma laiki tiek saskaņoti ar ģildi — pievienojies Discord, lai uzzinātu jaunāko informāciju.",
    scheduleTitle:"PLĀNOTĀS REIDU DIENAS",wednesday:"Trešdiena",thursday:"Ceturtdiena",sunday:"Svētdiena",timeTbc:"LAIKS TIEK PRECIZĒTS",lootText:"Laupījuma sadalei izmantojam Soft Reserve sistēmu.",
    joinKicker:"TAVA VIETA IR ŠEIT",recruiting:"JAUNI BIEDRI LAIPNI GAIDĪTI",joinTitle:"PIEVIENOJIES <em>BRIGĀDEI.</em>",joinText:"Vai esi WoW veterāns vai tikai sāc savu piedzīvojumu — ja vēlies spēlēt kopā ar latviešiem, dod mums ziņu!",joinNow:"PIEVIENOTIES DISCORD",
    guildNameLabel:"ĢILDE",factionLabel:"FRAKCIJA",serverLabel:"SERVERIS",footerText:"Latviešu World of Warcraft kopiena · Horde · EU PvP Ruleset",fanNote:"Neoficiāla spēlētāju ģildes lapa. World of Warcraft ir Blizzard Entertainment preču zīme.",
    navGallery:"Leģendas",galleryKicker:"MŪSU LEĢENDAS",galleryTitle:"UZVARAS, KAS <em>PALIEK.</em>",galleryIntro:"Mirkļi no mūsu kopīgā ceļa — leģendārie boss killi, ģildes sanāksmes, viena mācību stunda no Lady Vashj un mūsu video.",
    capLichTitle:"THE LIGHT OF DAWN",capLichText:"Lich King gāšanās 25HC · Icecrown Citadel · 18.02.2024.",
    capRagTitle:"HEROIC: RAGNAROS",capRagText:"Uguns valdnieks gāzts · Firelands · 13.02.2025.",
    capDwTitle:"HEROIC: MADNESS OF DEATHWING",capDwText:"Deathwing kritis · Dragon Soul.",
    capOrgTitle:"SIEGE OF ORGRIMMAR",capOrgText:"Ģildes reids · Orgrimmar atbrīvota · 30.06.2026.",
    capGroup2Title:"WARRIORS' GATHERING",capGroup2Text:"Brigāde savācas · 2022.",
    capWipeTitle:"MĀCĪBU STUNDA",capWipeText:"Lady Vashj neatlaida nevienu dzīvu. · Serpentshrine Cavern",
    capWipeEpilogue:"Pēbilde: Lady Vashj vairs nedzīvo. Mēs atgriezāmies — un šoreiz mācību stundu pasniedzām mēs.",
    capVideoTitle:"AVĀRIJAS BRIGĀDE FOREVER",capVideoText:"Mūsu ģildes video — divas minūtes tīras Azeroth enerģijas. Uzspied play!"
  },
  en: {
    navAbout:"About",navRaids:"Raids",navJoin:"Join us",
    eyebrow:"LATVIAN HORDE GUILD · WOW FOREVER",heroSub:"Latvian players. Shared battles. One brigade.",
    heroCopy:"We are a Latvian World of Warcraft guild with roots in Classic WoW. We play Horde on the WoW Forever EU server (PvP ruleset) and welcome new members.",
    joinDiscord:"JOIN OUR DISCORD",discover:"DISCOVER THE GUILD",region:"REGION",faction:"FACTION",language:"LANGUAGE",latvian:"LATVIAN",
    estClassic:"EST. CLASSIC",artCaption:"ONE BRIGADE. ONE PURPOSE.",
    mq1:"LATVIAN HORDE GUILD",mq2:"RAIDS · PVE · PVP · COMMUNITY",
    stat1:"WoW roots",stat2:"EU PvP Ruleset",stat3:"Community languages",stat4:"Recruiting new members",
    aboutKicker:"WHO WE ARE",aboutTitle:"MORE THAN A <em>GUILD.</em>",aboutIntro:"Avārijas Brigāde is a Latvian WoW community that dates back to the beginnings of World of Warcraft Classic. We are brought together by the desire to play, help one another and enjoy Azeroth as a team.",
    feature1Title:"Latvian community",feature1Text:"We connect in Latvian, meet fellow players and build a welcoming environment for veterans and newcomers alike.",
    feature2Title:"Raids, PvE & PvP",feature2Text:"Guild raids, PvE activities and PvP battles are an important part of our community.",
    feature3Title:"Classic experience",feature3Text:"The guild has several years of Classic WoW playing and raiding experience.",
    raidKicker:"PLAYING TOGETHER",raidTitle:"ASSEMBLE. <em>FIGHT.</em>",raidText:"Our current raid days are Wednesday, Thursday and Sunday. Exact start times are still being coordinated — join our Discord for the latest information.",
    scheduleTitle:"PLANNED RAID DAYS",wednesday:"Wednesday",thursday:"Thursday",sunday:"Sunday",timeTbc:"TIME TO BE CONFIRMED",lootText:"We use the Soft Reserve system for loot distribution.",
    joinKicker:"YOUR PLACE IS HERE",recruiting:"NEW MEMBERS WELCOME",joinTitle:"JOIN THE <em>BRIGADE.</em>",joinText:"Whether you are a WoW veteran or just starting your adventure, if you want to play alongside fellow Latvians, get in touch!",
    joinNow:"JOIN OUR DISCORD",guildNameLabel:"GUILD",factionLabel:"FACTION",serverLabel:"SERVER",footerText:"Latvian World of Warcraft community · Horde · EU PvP Ruleset",fanNote:"Unofficial player guild website. World of Warcraft is a trademark of Blizzard Entertainment.",
    navGallery:"Legends",galleryKicker:"OUR LEGENDS",galleryTitle:"VICTORIES THAT <em>LAST.</em>",galleryIntro:"Moments from our journey — legendary boss kills, guild gatherings, one unforgettable lesson from Lady Vashj, and our video.",
    capLichTitle:"THE LIGHT OF DAWN",capLichText:"Heroic: Fall of the Lich King (25) · Icecrown Citadel · Feb 18, 2024.",
    capRagTitle:"HEROIC: RAGNAROS",capRagText:"The Firelord falls · Firelands · Feb 13, 2025.",
    capDwTitle:"HEROIC: MADNESS OF DEATHWING",capDwText:"Deathwing down · Dragon Soul.",
    capOrgTitle:"SIEGE OF ORGRIMMAR",capOrgText:"Guild run · Orgrimmar liberated · Jun 30, 2026.",
    capGroup2Title:"WARRIORS' GATHERING",capGroup2Text:"The Brigade assembles · 2022.",
    capWipeTitle:"A LESSON LEARNED",capWipeText:"Lady Vashj left no one standing. · Serpentshrine Cavern",
    capWipeEpilogue:"Epilogue: Lady Vashj is no longer with us. We came back — and this time we taught the lesson.",
    capVideoTitle:"AVĀRIJAS BRIGĀDE FOREVER",capVideoText:"Our guild video — two minutes of pure Azeroth energy. Hit play!"
  }
};
let currentLang = "lv";
const switcher = document.getElementById("langSwitch");
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  switcher.textContent = lang === "lv" ? "EN" : "LV";
}
switcher.addEventListener("click",()=>setLanguage(currentLang === "lv" ? "en" : "lv"));

/* ---------- footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- marquee: duplicate track for seamless loop ---------- */
(function(){
  const track = document.getElementById("marqueeTrack");
  if(track) track.innerHTML += track.innerHTML;
})();

/* ---------- scroll reveals (IntersectionObserver, staggered) ---------- */
(function(){
  const items = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){
    items.forEach(el=>el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:"0px 0px -40px 0px"});
  // stagger within each section
  const groups = new Map();
  items.forEach(el=>{
    const parent = el.closest("section,.stats,.join-card") || document.body;
    const n = groups.get(parent) || 0;
    groups.set(parent, n + 1);
    el.style.transitionDelay = (n * 90) + "ms";
    el.addEventListener("transitionend", ()=>{ el.style.transitionDelay = "0ms"; }, { once:true });
    io.observe(el);
  });
})();

/* ---------- mobile menu overlay ---------- */
(function(){
  const btn = document.getElementById("menuBtn");
  const overlay = document.getElementById("menuOverlay");
  const closeBtn = document.getElementById("menuClose");
  if(!btn || !overlay) return;
  function openMenu(){
    overlay.hidden = false;
    requestAnimationFrame(()=>overlay.classList.add("open"));
    btn.setAttribute("aria-expanded","true");
    closeBtn.focus();
  }
  function closeMenu(){
    overlay.classList.remove("open");
    btn.setAttribute("aria-expanded","false");
    setTimeout(()=>{ overlay.hidden = true; },250);
    btn.focus();
  }
  btn.addEventListener("click",openMenu);
  closeBtn.addEventListener("click",closeMenu);
  overlay.addEventListener("click",e=>{ if(e.target === overlay) closeMenu(); });
  overlay.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
  document.addEventListener("keydown",e=>{ if(e.key === "Escape" && !overlay.hidden) closeMenu(); });
})();

/* ---------- ember particle field + mouse parallax ---------- */
(function(){
  const canvas = document.getElementById("embers");
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W, H, dpr;
  const COUNT = Math.min(110, Math.max(50, Math.floor(window.innerWidth / 14)));
  const embers = [];
  const mouse = { x:.5, y:.5, tx:.5, ty:.5 };

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width = window.innerWidth * dpr;
    H = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
  }
  window.addEventListener("resize", resize);
  resize();

  function spawn(e, randomY){
    e.x = Math.random() * W;
    e.y = randomY ? Math.random() * H : H + 10 * dpr;
    e.r = (Math.random() * 2.2 + .6) * dpr;
    e.speed = (Math.random() * .45 + .18) * dpr;
    e.drift = (Math.random() - .5) * .35 * dpr;
    e.flicker = Math.random() * Math.PI * 2;
    e.flickerSpeed = Math.random() * .04 + .015;
    e.warm = Math.random(); // 0 = red, 1 = orange
  }
  for(let i = 0; i < COUNT; i++){
    const e = {};
    spawn(e, true);
    embers.push(e);
  }

  window.addEventListener("pointermove", ev=>{
    mouse.tx = ev.clientX / window.innerWidth;
    mouse.ty = ev.clientY / window.innerHeight;
  },{passive:true});

  function draw(){
    // smooth parallax (lerp factor 0.05)
    mouse.x += (mouse.tx - mouse.x) * .05;
    mouse.y += (mouse.ty - mouse.y) * .05;
    const px = (mouse.x - .5) * 26 * dpr;
    const py = (mouse.y - .5) * 18 * dpr;

    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for(const e of embers){
      e.y -= e.speed;
      e.x += e.drift + Math.sin(e.flicker) * .22 * dpr;
      e.flicker += e.flickerSpeed;
      if(e.y < -12 * dpr || e.x < -12 * dpr || e.x > W + 12 * dpr) spawn(e, false);

      const tw = .55 + Math.sin(e.flicker * 2.2) * .45; // twinkle 0.1..1
      const alpha = .14 + tw * .5;
      const depth = e.r / (2.8 * dpr); // smaller = farther
      const ox = px * depth, oy = py * depth;

      const cr = Math.round(220 + e.warm * 35);
      const cg = Math.round(20 + e.warm * 90);
      const cb = Math.round(60 - e.warm * 25);
      const g = ctx.createRadialGradient(e.x + ox, e.y + oy, 0, e.x + ox, e.y + oy, e.r * 4.2);
      g.addColorStop(0, "rgba(" + cr + "," + cg + "," + cb + "," + alpha + ")");
      g.addColorStop(.45, "rgba(" + cr + "," + cg + "," + cb + "," + (alpha * .32) + ")");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(e.x + ox, e.y + oy, e.r * 4.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
    if(!reduced) requestAnimationFrame(draw);
  }
  draw();
})();

/* ---------- hero crest parallax ---------- */
(function(){
  const art = document.getElementById("heroArt");
  if(!art) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener("pointermove", ev=>{
    tx = (ev.clientX / window.innerWidth - .5) * 22;
    ty = (ev.clientY / window.innerHeight - .5) * 16;
  },{passive:true});
  (function tick(){
    cx += (tx - cx) * .05;
    cy += (ty - cy) * .05;
    art.style.transform = "translateY(-50%) translate(" + cx + "px," + cy + "px)";
    requestAnimationFrame(tick);
  })();
})();

/* ---------- gallery youtube lite-embed ---------- */
(function(){
  document.querySelectorAll(".yt-lite").forEach(el=>{
    function play(){
      if(el.dataset.played) return;
      el.dataset.played = "1";
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + el.dataset.vid + "?autoplay=1&rel=0";
      f.allow = "accelerometer; autoplay; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.title = "Avārijas Brigāde Forever — guild video";
      el.innerHTML = "";
      el.appendChild(f);
    }
    el.addEventListener("click", play);
    el.addEventListener("keydown", e=>{
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); play(); }
    });
  });
})();

/* ---------- gallery lightbox ---------- */
(function(){
  const cards = document.querySelectorAll(".g-card[data-full]");
  if(!cards.length) return;
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role","dialog");
  lb.setAttribute("aria-modal","true");
  lb.setAttribute("aria-label","Image preview");
  lb.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close">✕</button><img alt="">';
  document.body.appendChild(lb);
  const img = lb.querySelector("img");
  const closeBtn = lb.querySelector(".lightbox-close");
  function open(src, alt){
    img.src = src;
    img.alt = alt || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function close(){
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
  cards.forEach(c=>{
    const src = c.dataset.full;
    const label = c.querySelector("figcaption strong");
    const alt = label ? label.textContent : "";
    c.addEventListener("click", ()=>open(src, alt));
    c.addEventListener("keydown", e=>{
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); open(src, alt); }
    });
  });
  lb.addEventListener("click", e=>{ if(e.target === lb) close(); });
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", e=>{
    if(e.key === "Escape" && lb.classList.contains("open")) close();
  });
})();
