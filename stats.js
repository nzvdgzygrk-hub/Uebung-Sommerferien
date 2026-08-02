function summaryButtons(p){let box=document.getElementById('summary-buttons');box.innerHTML='';sort(p).forEach(n=>{let b=document.createElement('button');b.className='summary-btn';b.dataset.player=n;b.onclick=()=>copy(summary(n),b,`${n} ✔`);box.appendChild(b)});updateSummaryButtons()}
function data(n,id){let t=document.querySelector(`table[data-week="${id}"]`),r=[...t.tBodies[0].rows].find(x=>x.querySelector('.name').textContent.trim()===n);return{soll:t.dataset.km,a:q(r,'activity').value,km:q(r,'km').value||'-',d:q(r,'min').value||'-',p:q(r,'pace').value||'-',sprints:yes(q(r,'sprints')),seil:yes(q(r,'seil')),kraft:yes(q(r,'kraft')),pass:yes(q(r,'pass')),jong:yes(q(r,'jonglieren')),anz:q(r,'jonglierenAnzahl').value||'-',video:yes(q(r,'video')),rueckmeldung:yes(q(r,'rueckmeldung'))}}
function result(d){let basis=d.a==='training'?7:(num(d.km)>0?2:0)+['sprints','seil','kraft','pass','jong'].filter(k=>d[k]==='Ja').length;let bonus=(d.video==='Ja'?.5:0)+(d.rueckmeldung==='Ja'?.5:0),done=basis+bonus;return{done,total:8,percent:Math.round(done/8*100)}}
function playerPercent(n){let done=0,total=0;WEEKS.forEach(w=>{let r=result(data(n,w.id));done+=r.done;total+=r.total});return total?Math.round(done/total*100):0}
function percentClass(p){return p>=80?'pct-green':p>=60?'pct-yellow':p>=30?'pct-orange':'pct-red'}
function updateSummaryButtons(){document.querySelectorAll('.summary-btn').forEach(b=>{let p=playerPercent(b.dataset.player);b.classList.remove('pct-green','pct-yellow','pct-orange','pct-red');b.classList.add(percentClass(p));b.innerHTML=`<span>${b.dataset.player}</span><span class="pct">${p} %</span>`})}
function pointText(v){return Number.isInteger(v)?String(v):String(v).replace('.',',')}
function scoringText(){return`📌 Punkteverteilung pro Woche
🏃 Joggen oder 🚴 Fahrradfahren: 2 Punkte
⚡ Sprinttraining: 1 Punkt
🪢 Seilspringen: 1 Punkt
💪 Kraftübung: 1 Punkt
⚽ Pass-Challenge: 1 Punkt
🎯 Jonglieren: 1 Punkt
🎥 Video gesendet: 0,5 Punkte
📩 Rückmeldung gegeben: 0,5 Punkte
➡️ Maximal: 8 Punkte pro Woche`}
function psText(p){if(p===100)return'Hervorragend – die maximale Punktzahl wurde erreicht.';if(p>=80)return'Starke Leistung – fast alle möglichen Punkte wurden erreicht.';if(p>=60)return'Ein großer Teil der möglichen Punkte wurde erreicht.';if(p>=30)return'Ein Teil der möglichen Punkte wurde erreicht. Es ist noch Luft nach oben.';return'Nur wenige der möglichen Punkte wurden erreicht.'}
function summary(n){let out=`D1 Sommerferien-Vorbereitung\n${n}\n\n${scoringText()}\n\n`,done=0,total=0;WEEKS.forEach(w=>{let d=data(n,w.id),r=result(d);done+=r.done;total+=r.total;if(d.a==='training'){out+=`Woche ${w.id}:\n⚽ Training bei der SSVg begonnen: 7 Punkte\n🎥 Video gesendet: ${d.video}${d.video==='Ja'?' (+0,5 Punkte)':''}\n📩 Rückmeldung gegeben: ${d.rueckmeldung}${d.rueckmeldung==='Ja'?' (+0,5 Punkte)':''}\n⭐ Bewertung: ${pointText(r.done)} von ${r.total} Punkten – ${r.percent} %\n\n`;return}out+=`Woche ${w.id} (Soll ${d.soll} km Joggen oder vergleichbar Fahrrad):\n`;out+=d.a==='fahrrad'?`🚴 Fahrrad: ${d.km} km\n`:`🏃 Joggen: ${d.km} km in ${d.d} Min${d.p!=='-'?` (Pace: ${d.p} min/km)`:''}\n`;out+=`⚡ Sprinttraining: ${d.sprints}\n🪢 Seilspringen: ${d.seil}\n💪 Kraftübungen: ${d.kraft}\n⚽ Pass-Challenge: ${d.pass}\n🎯 Jonglieren: ${d.jong} (Anzahl: ${d.anz})\n🎥 Video gesendet: ${d.video}${d.video==='Ja'?' (+0,5 Punkte)':''}\n📩 Rückmeldung gegeben: ${d.rueckmeldung}${d.rueckmeldung==='Ja'?' (+0,5 Punkte)':''}\n⭐ Bewertung: ${pointText(r.done)} von ${r.total} Punkten – ${r.percent} %\n\n`});let percent=total?Math.round(done/total*100):0;out+=`📊 Gesamtergebnis Sommerferien\n⭐ ${pointText(done)} von ${total} Punkten erreicht\n📈 Erfolgsquote: ${percent} %\n\nPS: ${psText(percent)}`;return out.trim()}
