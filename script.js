const translations = {
  lv: {
    navAbout:"Par mums",navRaids:"Reidi",navJoin:"Pievienoties",
    eyebrow:"LATVIEŠU HORDE ĢILDE · WOW FOREVER",heroSub:"Latviešu spēlētāji. Kopīga cīņa. Viena brigāde.",
    heroCopy:"Mēs esam latviešu World of Warcraft ģilde ar Classic WoW saknēm. Spēlējam Horde pusē WoW Forever EU Mega Server un aicinām pievienoties jaunus biedrus.",
    joinDiscord:"PIEVIENOJIES DISCORD",discover:"IEPAZĪSTI ĢILDI",region:"REĢIONS",faction:"FRAKCIJA",language:"VALODA",latvian:"LATVIEŠU",artCaption:"VIENA BRIGĀDE. VIENS MĒRĶIS.",
    stat1:"WoW saknes",stat2:"EU Mega Server",stat3:"Kopienas valodas",stat4:"Uzņemam jaunus biedrus",
    aboutKicker:"KAS MĒS ESAM",aboutTitle:"VAIRĀK NEKĀ<br><em>ĢILDE.</em>",aboutIntro:"Avārijas Brigāde ir latviešu WoW kopiena, kas veidojusies kopš World of Warcraft Classic pirmsākumiem. Mūs vieno vēlme spēlēt kopā, palīdzēt cits citam un izbaudīt Azeroth kompānijā.",
    feature1Title:"Latviešu kopiena",feature1Text:"Sazināmies latviski, iepazīstam citus spēlētājus un veidojam draudzīgu vidi gan veterāniem, gan jaunpienācējiem.",
    feature2Title:"Reidi un PvE",feature2Text:"Kopīgi reidi un citas PvE aktivitātes ir svarīga mūsu ģildes dzīves daļa.",
    feature3Title:"Classic pieredze",feature3Text:"Ģildei ir vairāku gadu Classic WoW spēlēšanas un reidošanas pieredze.",
    raidKicker:"KOPĪGĀ SPĒLE",raidTitle:"SAVĀCAMIES.<br><em>CĪNĀMIES.</em>",raidText:"Mūsu reidu dienas pašlaik ir trešdiena, ceturtdiena un svētdiena. Precīzi sākuma laiki tiek saskaņoti ar ģildi — pievienojies Discord, lai uzzinātu jaunāko informāciju.",
    scheduleTitle:"PLĀNOTĀS REIDU DIENAS",wednesday:"Trešdiena",thursday:"Ceturtdiena",sunday:"Svētdiena",timeTbc:"LAIKS TIEK PRECIZĒTS",lootText:"Laupījuma sadalei izmantojam Soft Reserve sistēmu.",
    joinKicker:"TAVA VIETA IR ŠEIT",recruiting:"JAUNI BIEDRI LAIPNI GAIDĪTI",joinTitle:"PIEVIENOJIES<br><em>BRIGĀDEI.</em>",joinText:"Vai esi WoW veterāns vai tikai sāc savu piedzīvojumu — ja vēlies spēlēt kopā ar latviešiem, dod mums ziņu!",joinNow:"PIEVIENOTIES DISCORD",
    guildNameLabel:"ĢILDE",factionLabel:"FRAKCIJA",serverLabel:"SERVERIS",footerText:"Latviešu World of Warcraft kopiena · Horde · EU Mega Server",fanNote:"Neoficiāla spēlētāju ģildes lapa. World of Warcraft ir Blizzard Entertainment preču zīme."
  },
  en: {
    navAbout:"About",navRaids:"Raids",navJoin:"Join us",
    eyebrow:"LATVIAN HORDE GUILD · WOW FOREVER",heroSub:"Latvian players. Shared battles. One brigade.",
    heroCopy:"We are a Latvian World of Warcraft guild with roots in Classic WoW. We play Horde on the WoW Forever EU Mega Server and welcome new members.",
    joinDiscord:"JOIN OUR DISCORD",discover:"DISCOVER THE GUILD",region:"REGION",faction:"FACTION",language:"LANGUAGE",latvian:"LATVIAN",artCaption:"ONE BRIGADE. ONE PURPOSE.",
    stat1:"WoW roots",stat2:"EU Mega Server",stat3:"Community languages",stat4:"Recruiting new members",
    aboutKicker:"WHO WE ARE",aboutTitle:"MORE THAN A<br><em>GUILD.</em>",aboutIntro:"Avārijas Brigāde is a Latvian WoW community that dates back to the beginnings of World of Warcraft Classic. We are brought together by the desire to play, help one another and enjoy Azeroth as a team.",
    feature1Title:"Latvian community",feature1Text:"We connect in Latvian, meet fellow players and build a welcoming environment for veterans and newcomers alike.",
    feature2Title:"Raids & PvE",feature2Text:"Guild raids and other PvE activities are an important part of our community.",
    feature3Title:"Classic experience",feature3Text:"The guild has several years of Classic WoW playing and raiding experience.",
    raidKicker:"PLAYING TOGETHER",raidTitle:"ASSEMBLE.<br><em>FIGHT.</em>",raidText:"Our current raid days are Wednesday, Thursday and Sunday. Exact start times are still being coordinated — join our Discord for the latest information.",
    scheduleTitle:"PLANNED RAID DAYS",wednesday:"Wednesday",thursday:"Thursday",sunday:"Sunday",timeTbc:"TIME TO BE CONFIRMED",lootText:"We use the Soft Reserve system for loot distribution.",
    joinKicker:"YOUR PLACE IS HERE",recruiting:"NEW MEMBERS WELCOME",joinTitle:"JOIN THE<br><em>BRIGADE.</em>",joinText:"Whether you are a WoW veteran or just starting your adventure, if you want to play alongside fellow Latvians, get in touch!",
    joinNow:"JOIN OUR DISCORD",guildNameLabel:"GUILD",factionLabel:"FACTION",serverLabel:"SERVER",footerText:"Latvian World of Warcraft community · Horde · EU Mega Server",fanNote:"Unofficial player guild website. World of Warcraft is a trademark of Blizzard Entertainment."
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
document.getElementById("year").textContent = new Date().getFullYear();
