
(async function(){
  const $ = (s)=>Array.from(document.querySelectorAll(s));
  async function load(lang){ const r=await fetch(`./locales/${lang}/common.json`); return r.json(); }
  async function apply(lang){
    const dict = await load(lang);
    $("[data-i18n]").forEach(el=>{ const k=el.getAttribute("data-i18n"); if(dict[k]) el.textContent=dict[k]; });
    localStorage.setItem("lang",lang);
  }
  const initial = localStorage.getItem("lang") || (navigator.language?.startsWith("de")?"de":"en");
  apply(initial);
  $("[data-lang]").forEach(b=>b.addEventListener("click",()=>apply(b.dataset.lang)));
})();