
const MAP={btc:'bitcoin',eth:'ethereum',xrp:'ripple',sol:'solana',ada:'cardano',ltc:'litecoin',doge:'dogecoin',shib:'shiba-inu',vet:'vechain',vtho:'vethor-token'};
async function predict(){
  const el=document.getElementById('pred-out');
  const coin=(document.getElementById('coin')?.value||'').trim().toLowerCase();
  const id = MAP[coin]||coin;
  try{
    const r=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(id)}&vs_currencies=usd`,{headers:{'accept':'application/json'}});
    const j=await r.json(); const p=j?.[id]?.usd;
    if(!p){el.textContent='Preis nicht gefunden.';return;}
    el.textContent=`${coin.toUpperCase()}: Aktuell $${p} → Prognose 12M: $${(p*1.2).toFixed(2)} (+20%)`;
  }catch(e){ el.textContent='API-Fehler oder Netzwerkproblem.'; }
}
