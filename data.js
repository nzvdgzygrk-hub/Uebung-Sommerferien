const DEFAULT=['Ahmet','Aos','Benjamin','David','Efe','Elias','Jannik','Jonas','Julian','Kiril','Malik','Mario','Mika','Noah','Noel','Paul B','Paul H','Piotrek','Semih'];
const WEEKS=[
{id:1,km:'3',sprint:'3 × 20 m Sprint',seil:'3 × 60 Sek.\n➤ 30 Sek. Technik + 30 Sek. Speed',kraft:'3 × 15 Ausfallschritte pro Bein',jong:25,pass:'➤ 40 Pässe mit dem rechten Fuß\n➤ 40 Pässe mit dem linken Fuß\n➤ nach jedem Pass 1–2 schnelle Schritte zurück und wieder in die Ballerwartungshaltung kommen'},
{id:2,km:'3,5',sprint:'4 × 20 m Sprint',seil:'3 × 60 Sek.\n➤ 30 Sek. Technik + 30 Sek. Speed',kraft:'3 × 20 Sit-ups',jong:30,pass:'➤ 40 Pässe mit dem rechten Fuß\n➤ 40 Pässe mit dem linken Fuß\n➤ nach jedem Pass 1–2 schnelle Schritte zur Seite und wieder bereit zum Ball stehen'},
{id:3,km:'4',sprint:'5 × 20 m Sprint',seil:'3 × 75 Sek.\n➤ 35 Sek. Technik + 40 Sek. Speed',kraft:'3 × 20 Leg Throws',jong:35,pass:'➤ Ball mit rechts zur Seite mitnehmen und wieder passen\n➤ danach mit links zur anderen Seite mitnehmen und passen\n➤ 40 Pässe pro Seite – den Ball direkt in die neue Richtung mitnehmen'},
{id:4,km:'4,5',sprint:'5 × 25 m Sprint',seil:'3 × 75 Sek.\n➤ 35 Sek. Technik + 40 Sek. Speed',kraft:'3 × 60 Sek. Plank',jong:40,pass:'➤ leicht seitlich zum Ball stehen\n➤ Ball mit dem hinteren Fuß annehmen, zur anderen Seite mitnehmen und passen\n➤ danach die Seite wechseln – 40 Pässe pro Seite'},
{id:5,km:'4,8',sprint:'6 × 25 m Sprint',seil:'3 × 90 Sek.\n➤ 45 Sek. Technik + 45 Sek. Speed',kraft:'3 × 10 Sprungkniebeugen\n➤ explosiv hochspringen, sauber und weich landen',jong:45,pass:'➤ Ball mit rechts annehmen und mit links passen\n➤ Ball mit links annehmen und mit rechts passen\n➤ jeweils 40 Pässe und nach jedem Pass wieder bereit stehen'},
{id:6,km:'5',sprint:'8 × 25 m Sprint',seil:'3 × 90 Sek.\n➤ 45 Sek. Technik + 45 Sek. Speed',kraft:'3 × 45 Sek. Bergsteiger (Mountain Climbers)',jong:50,pass:'➤ 40 Pässe mit rechts\n➤ 40 Pässe mit links\n➤ 40 Pässe mit seitlicher Ballmitnahme\n➤ 40 Pässe abwechselnd mit rechts und links – nur saubere Pässe zählen'}];
const KEY='sommerferien_d1_state_v3',OLD=['sommerferien_u12_state_v2','sommerferien_u12_state_v1'],CODE='123456',ACT=['joggen','fahrrad','training'];let validUntil=0;
const feedback=()=>`📩 Rückmeldung an das Trainerteam

Hinweis: Bitte meldet nur die aktuelle Woche zurück.

🏃🚴 Bitte gebt pro Woche nur eine Einheit an. Auch wenn ihr mehrmals joggen oder Fahrrad fahren wart, tragt bitte nur einen Lauf oder eine Fahrradrunde ein.

🏃 Joggen: _____ km in _____ Minuten
oder
🚴 Fahrradfahren: _____ km

⚡ Sprinttraining ✅

🪢 Seilspringen ✅

💪 Krafttraining ✅

⚽ Pass-Challenge ✅

🎯 Jonglieren: _____ Kontakte

🎥 Videos gesendet ✅

Falls etwas nicht erledigt wurde, bitte das ✅ durch ein ❌ ersetzen.`;
const weekText=w=>`✅ Woche ${w.id}

🪢 Seilspringen:
${w.seil}

🏃 Joggen / 🚴 Fahrradfahren über die Running-App: ${w.km} km Joggen oder Fahrradfahren vom Umfang her vergleichbar
➡️ Fahrradfahren bitte ohne E-Unterstützung.

⚡ Sprinttraining:
${w.sprint}
➤ 30 Sek. Pause zwischen den Sprints

💪 Kraftübung:
${w.kraft}

⚽ Pass-Challenge:
${w.pass}
➤ gegen eine Wand oder mit Eltern/Geschwistern
➤ kein Video erforderlich

🎯 Balljonglieren: Ziel: ${w.jong} Kontakte (beidbeinig) – mindestens 5 Versuche

🎥 Videos: 1 × Seilspringen + Kraftübung (1 Satz) + Balljonglieren (bestes Ergebnis)

💡 Die Übungen dürfen gerne auf mehrere Tage der Woche verteilt werden. Das Joggen/Fahrradfahren und das Sprinttraining sollten möglichst an unterschiedlichen Tagen durchgeführt werden. Bitte nicht alle Übungen an einem einzigen Tag erledigen.`;
const blank=()=>({aktivitaet:'joggen',istKm:'',minuten:'',pace:'',sprints:false,seil:false,kraft:false,pass:false,jonglieren:false,jonglierenAnzahl:'',video:false,rueckmeldung:false});
