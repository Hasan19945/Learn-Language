import { W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A2: LessonDef[] = [
{
  id: "nb-a2-1", title: "Preteritum", no: "Past simple", icon: "clock",
  intro: "Vi forteller om det som skjedde i går, i fjor og i helgen. Engelsk preteritum ligner mye på norsk, men spørsmål og nektelse trenger did.",
  notes: [
    { h: "Regelmessige verb: -ed", p: "Regelmessige verb får -ed, likt for alle personer: I worked, she worked. Uttalen varierer: worked [wørkt], played [pleid], wanted [wåntid]." },
    { h: "Uregelmessige verb", p: "De vanligste verbene er uregelmessige, akkurat som på norsk, og må pugges.",
      table: [["Infinitiv", "Preteritum", "Norsk"], ["go", "went", "dro, gikk"], ["have", "had", "hadde"], ["see", "saw", "så"], ["buy", "bought", "kjøpte"], ["eat", "ate", "spiste"], ["come", "came", "kom"], ["make", "made", "lagde"]] },
    { h: "Spørsmål og nektelse med did", p: "Norsk: Kom du i går? Jeg kom ikke. Engelsk bruker did, og hovedverbet går tilbake til infinitiv: Did you come yesterday? I didn't come. «Did you came» og «I didn't went» er feil." },
    { h: "Tidsuttrykk", p: "yesterday (i går), last week (forrige uke), last year (i fjor), two days ago (for to dager siden). Merk: «for ... siden» heter ago og står etter tiden: three years ago." }
  ],
  tip: "Norsk «for tre år siden» blir «three years ago», ikke «for three years since». Og etter did kommer infinitiv: «Did you see it?», ikke «Did you saw it?».",
  words: [
    W("yesterday", "i går", "jesterdei", "I worked late yesterday.", "Jeg jobbet sent i går."),
    W("last week", "forrige uke", "laast wiik", "We went to Bergen last week.", "Vi dro til Bergen forrige uke."),
    W("ago", "siden (for ... siden)", "egåu", "I moved here two years ago.", "Jeg flyttet hit for to år siden."),
    W("went", "dro, gikk", "went", "She went home early.", "Hun dro hjem tidlig.", { note: "go – went – gone" }),
    W("had", "hadde", "hædd", "We had a great time.", "Vi hadde det veldig fint.", { note: "have – had – had" }),
    W("saw", "så", "så", "I saw a good film.", "Jeg så en god film.", { note: "see – saw – seen" }),
    W("bought", "kjøpte", "bååt", "He bought a new phone.", "Han kjøpte en ny telefon.", { note: "buy – bought – bought" }),
    W("came", "kom", "keim", "They came at eight.", "De kom klokka åtte.", { note: "come – came – come" }),
    W("did", "gjorde (hjelpeverb i spørsmål)", "didd", "Did you like it?", "Likte du det?"),
    W("didn't", "ikke (i fortid)", "diddent", "I didn't see him.", "Jeg så ham ikke."),
    W("trip", "tur, reise", "tripp", "How was your trip?", "Hvordan var turen?"),
    W("holiday", "ferie", "hålidei", "We were on holiday in Spain.", "Vi var på ferie i Spania.", { note: "amerikansk: vacation" }),
    W("was", "var (I/he/she/it)", "wåzz", "It was cold.", "Det var kaldt."),
    W("were", "var (you/we/they)", "wør", "Were you at home?", "Var du hjemme?"),
    W("moved", "flyttet", "muuvd", "We moved to Stavanger in 2019.", "Vi flyttet til Stavanger i 2019.")
  ],
  dialogue: [["A", "How was your weekend?", "Hvordan var helgen?"], ["B", "Great! We went to the mountains.", "Kjempefin! Vi dro til fjells."], ["A", "Did you go skiing?", "Gikk dere på ski?"], ["B", "No, we didn't. There wasn't enough snow.", "Nei. Det var ikke nok snø."], ["A", "What did you do?", "Hva gjorde dere?"], ["B", "We went hiking and had dinner at a nice hotel.", "Vi gikk tur og spiste middag på et fint hotell."]],
  quiz: [
    { q: "«Så du filmen?»", o: ["Did you see the film?", "Did you saw the film?", "Saw you the film?", "Do you saw the film?"], a: 0, e: "Spørsmål i fortid: Did + infinitiv: Did you see ...?" },
    { q: "«for tre år siden»", o: ["three years ago", "for three years since", "since three years", "three years since"], a: 0, e: "ago står etter tidsrommet: three years ago." },
    { q: "Preteritum av «buy»?", o: ["bought", "buyed", "brought", "boughted"], a: 0, e: "buy – bought – bought. Ikke bland med bring – brought." },
    { q: "«Jeg dro ikke.»", o: ["I didn't go.", "I didn't went.", "I went not.", "I not went."], a: 0, e: "Nektelse i fortid: didn't + infinitiv." },
    { q: "Fyll inn: «We ___ at home yesterday.»", o: ["were", "was", "are"], a: 0, e: "we, you og they bruker were." }
  ],
  review: ["Regelmessig: -ed. Uregelmessig: go – went, buy – bought.", "Spørsmål/nektelse: did / didn't + infinitiv.", "for to år siden = two years ago."]
},
{
  id: "nb-a2-2", title: "Hos legen", no: "At the doctor's", icon: "heart",
  intro: "Vi lærer å si hvor det gjør vondt, bestille time og forstå legens råd.",
  notes: [
    { h: "Det gjør vondt", p: "Norsk «Jeg har vondt i hodet» blir «I have a headache». Ord på -ache: headache, stomachache, toothache, backache. Andre steder: My knee hurts. My throat is sore.",
      table: [["Norsk", "Engelsk"], ["Jeg har vondt i hodet.", "I have a headache."], ["Jeg har vondt i magen.", "I have a stomachache."], ["Jeg har vondt i halsen.", "I have a sore throat."], ["Kneet mitt gjør vondt.", "My knee hurts."]] },
    { h: "Bestille time", p: "I'd like to make an appointment. Is there anything available today? Merk: «time» på norsk heter appointment på engelsk. «I have a time at the doctor's» er feil." },
    { h: "Råd med should", p: "You should rest. You shouldn't go to work. Etter should kommer infinitiv uten to: should take, ikke «should to take»." }
  ],
  tip: "«Jeg har time hos legen» heter «I have an appointment with the doctor». Og si «I have a headache», ikke «I have pain in my head» (det er ikke feil, men det høres stivt ut).",
  words: [
    W("doctor", "lege", "dåkter", "I need to see a doctor.", "Jeg må gå til legen."),
    W("appointment", "time, avtale", "eppåintment", "I have an appointment at ten.", "Jeg har time klokka ti."),
    W("headache", "hodepine", "heddeik", "I have a terrible headache.", "Jeg har forferdelig hodepine."),
    W("sore throat", "vondt i halsen", "sår thråut", "I have a sore throat and a cough.", "Jeg har vondt i halsen og hoste."),
    W("cough", "hoste", "kåff", "She has a bad cough.", "Hun har stygg hoste."),
    W("fever", "feber", "fiiver", "He has a high fever.", "Han har høy feber.", { note: "britisk også: temperature" }),
    W("hurt", "gjøre vondt", "hørt", "My back hurts.", "Jeg har vondt i ryggen."),
    W("ill", "syk", "ill", "I feel ill.", "Jeg føler meg syk.", { note: "amerikansk: sick" }),
    W("medicine", "medisin", "medsin", "Take this medicine twice a day.", "Ta denne medisinen to ganger om dagen."),
    W("prescription", "resept", "priskripsjen", "You need a prescription.", "Du trenger resept."),
    W("pharmacy", "apotek", "faarmesi", "The pharmacy is next to the doctor's.", "Apoteket ligger ved siden av legekontoret.", { note: "britisk også: chemist's" }),
    W("rest", "hvile", "rest", "You should rest for a few days.", "Du bør hvile noen dager."),
    W("should", "burde, bør", "sjudd", "You should drink a lot of water.", "Du bør drikke mye vann."),
    W("sick leave", "sykemelding", "sikk liiv", "I'm on sick leave this week.", "Jeg er sykemeldt denne uka."),
    W("emergency", "nødsituasjon, akutt", "imørdjensi", "In an emergency, call 999.", "I en nødsituasjon, ring 999.", { note: "Storbritannia: 999, USA: 911" })
  ],
  dialogue: [["A", "Good morning. What's the problem?", "God morgen. Hva er problemet?"], ["B", "I have a sore throat and a fever.", "Jeg har vondt i halsen og feber."], ["A", "How long have you had it?", "Hvor lenge har du hatt det?"], ["B", "Since Monday. I also have a headache.", "Siden mandag. Jeg har også hodepine."], ["A", "You should rest and drink a lot of water.", "Du bør hvile og drikke mye vann."], ["B", "Do I need a prescription?", "Trenger jeg resept?"], ["A", "No, you can buy this at the pharmacy.", "Nei, dette kan du kjøpe på apoteket."]],
  quiz: [
    { q: "«Jeg har time hos legen.»", o: ["I have an appointment with the doctor.", "I have a time at the doctor.", "I have an hour at the doctor.", "I have a meeting at the doctor."], a: 0, e: "time (avtale) = appointment." },
    { q: "«Jeg har vondt i hodet.»", o: ["I have a headache.", "I have hurt in my head.", "My head is ache.", "I have a head pain."], a: 0, e: "Det naturlige uttrykket er I have a headache." },
    { q: "«Du bør hvile.»", o: ["You should rest.", "You should to rest.", "You should resting.", "You shall rest."], a: 0, e: "should + infinitiv uten to." },
    { q: "Hva betyr «pharmacy»?", o: ["apotek", "gård", "sykehus"], a: 0, e: "pharmacy = apotek (britisk også chemist's)." },
    { q: "«Ryggen min gjør vondt.»", o: ["My back hurts.", "My back is hurting me pain.", "My back ache.", "I hurt my back pain."], a: 0, e: "hurt brukes som verb: My back hurts." }
  ],
  review: ["time hos legen = appointment.", "I have a headache / a sore throat; My knee hurts.", "should + infinitiv: You should rest."]
},
{
  id: "nb-a2-3", title: "Erfaringer", no: "Present perfect", icon: "check",
  intro: "Present perfect (have + partisipp) ligner på norsk perfektum, men reglene er strengere. Dette er et av områdene der nordmenn oftest gjør feil.",
  notes: [
    { h: "Aldri med fortidig tidspunkt", p: "På norsk kan vi si «Jeg har vært i London i fjor». På engelsk kan present perfect ikke brukes med et avsluttet tidspunkt. Da må du bruke preteritum: I was in London last year. Present perfect brukes når tiden ikke nevnes, eller når den ikke er avsluttet.",
      table: [["Feil", "Riktig"], ["I have been in London last year.", "I was in London last year."], ["I have seen him yesterday.", "I saw him yesterday."], ["Did you ever eat sushi?", "Have you ever eaten sushi?"]] },
    { h: "Noe som har vart til nå: for / since", p: "Norsk bruker ofte presens: Jeg har bodd her i fem år / Jeg bor her siden 2020. Engelsk krever present perfect for noe som har vart fram til nå: I have lived here for five years. I have lived here since 2020. «I live here since 2020» er feil. for + tidsrom (for five years), since + startpunkt (since 2020)." },
    { h: "Erfaringer: ever / never", p: "Have you ever been to Scotland? I've never tried it. Merk: «been to» om å ha besøkt et sted: I've been to Paris. «gone to» betyr at personen er der fortsatt: She has gone to Paris (hun er i Paris nå)." }
  ],
  tip: "To typiske norske feil: «I have been there last summer» (riktig: I was there last summer) og «I live in Norway since 2015» (riktig: I have lived in Norway since 2015). Norsk «i» fem år blir «for» five years, ikke «in».",
  words: [
    W("ever", "noen gang", "evver", "Have you ever been to Scotland?", "Har du noen gang vært i Skottland?"),
    W("never", "aldri", "nevver", "I've never eaten haggis.", "Jeg har aldri spist haggis."),
    W("already", "allerede", "ålreddi", "I've already finished.", "Jeg er allerede ferdig."),
    W("yet", "ennå (i spørsmål og nektelse)", "jett", "Have you finished yet? – Not yet.", "Er du ferdig ennå? – Ikke ennå."),
    W("just", "nettopp", "djast", "She has just left.", "Hun har nettopp gått."),
    W("for", "i (om varighet)", "får", "I've lived here for five years.", "Jeg har bodd her i fem år."),
    W("since", "siden", "sins", "I've worked here since 2020.", "Jeg har jobbet her siden 2020."),
    W("been to", "vært i (besøkt)", "biin tu", "I've been to London twice.", "Jeg har vært i London to ganger."),
    W("seen", "sett", "siin", "Have you seen this film?", "Har du sett denne filmen?", { note: "see – saw – seen" }),
    W("done", "gjort", "dann", "I've done my homework.", "Jeg har gjort leksene mine.", { note: "do – did – done" }),
    W("eaten", "spist", "iiten", "Have you eaten?", "Har du spist?", { note: "eat – ate – eaten" }),
    W("tried", "prøvd", "traid", "Have you tried surfing?", "Har du prøvd å surfe?"),
    W("lived", "bodd", "livvd", "We've lived in Norway all our lives.", "Vi har bodd i Norge hele livet."),
    W("How long", "Hvor lenge", "hau lång", "How long have you lived here?", "Hvor lenge har du bodd her?"),
    W("twice", "to ganger", "twais", "I've been there twice.", "Jeg har vært der to ganger.")
  ],
  dialogue: [["A", "Have you ever been to Scotland?", "Har du noen gang vært i Skottland?"], ["B", "Yes, I have. I was in Edinburgh last summer.", "Ja. Jeg var i Edinburgh i fjor sommer."], ["A", "How long have you lived in Oslo?", "Hvor lenge har du bodd i Oslo?"], ["B", "I've lived here for six years.", "Jeg har bodd her i seks år."], ["A", "Have you found a job yet?", "Har du funnet jobb ennå?"], ["B", "Yes, I've just started at a bank.", "Ja, jeg har nettopp begynt i en bank."]],
  quiz: [
    { q: "«Jeg var i London i fjor.»", o: ["I was in London last year.", "I have been in London last year.", "I have been to London last year.", "I am in London last year."], a: 0, e: "Avsluttet tidspunkt (last year) krever preteritum." },
    { q: "«Jeg har bodd her siden 2020.»", o: ["I have lived here since 2020.", "I live here since 2020.", "I am living here since 2020.", "I lived here since 2020."], a: 0, e: "Noe som har vart til nå: present perfect + since." },
    { q: "«Jeg har jobbet her i fem år.»", o: ["I've worked here for five years.", "I've worked here in five years.", "I work here since five years.", "I've worked here since five years."], a: 0, e: "Norsk «i» om varighet blir for: for five years." },
    { q: "«She has gone to Paris.» Hvor er hun nå?", o: ["i Paris", "hjemme igjen", "på vei hjem"], a: 0, e: "gone to = er der fortsatt. been to = har vært der og kommet tilbake." },
    { q: "«Har du spist ennå?»", o: ["Have you eaten yet?", "Have you eaten already yet?", "Did you eat yet already?", "Have you ate yet?"], a: 0, e: "yet i spørsmål, og partisippet av eat er eaten." }
  ],
  review: ["Avsluttet tidspunkt = preteritum: I was there last year.", "Vart til nå = present perfect: I have lived here for 5 years / since 2020.", "been to = har besøkt; gone to = er der nå."]
},
{
  id: "nb-a2-4", title: "På jobben", no: "At work", icon: "briefcase",
  intro: "Vi lærer ord fra arbeidslivet og noen falske venner: ord som ligner på norsk, men betyr noe annet.",
  notes: [
    { h: "Falske venner på jobben", p: "Disse ordene lurer mange nordmenn.",
      table: [["Norsk", "Riktig engelsk", "Falsk venn"], ["sjef", "boss, manager", "chef = kokk"], ["kontrollere", "check", "control = styre"], ["eventuelt", "possibly, if necessary", "eventually = til slutt"], ["aktuell", "relevant, current", "actual = faktisk"], ["bli", "become, get", "become ≠ bekomme"]] },
    { h: "make eller do?", p: "Norsk «gjøre» er enten make eller do. do om oppgaver og arbeid: do the dishes, do my job, do a course. make om å lage eller skape: make a decision, make a mistake, make money, make a phone call." },
    { h: "Høflige forespørsler", p: "Engelsk arbeidsliv er mer indirekte enn det norske. «Send meg rapporten» kan virke frekt. Bruk heller: Could you send me the report, please? Would you mind checking this?" }
  ],
  tip: "«My chef is nice» betyr at kokken din er hyggelig. Sjefen heter boss eller manager. Og «I will control the numbers» betyr at du vil styre tallene; du mener «I will check the numbers».",
  words: [
    W("boss", "sjef", "båss", "My boss is very friendly.", "Sjefen min er veldig vennlig.", { note: "chef = kokk!" }),
    W("manager", "leder, sjef", "mænidjer", "I need to talk to the manager.", "Jeg må snakke med lederen."),
    W("colleague", "kollega", "kåliig", "My colleagues are great.", "Kollegaene mine er flotte."),
    W("meeting", "møte", "miiting", "The meeting starts at ten.", "Møtet begynner klokka ti."),
    W("check", "sjekke, kontrollere", "tsjekk", "Can you check the numbers?", "Kan du kontrollere tallene?", { note: "control = styre" }),
    W("deadline", "frist", "deddlain", "The deadline is on Friday.", "Fristen er på fredag."),
    W("make a decision", "ta en avgjørelse", "meik e disisjen", "We need to make a decision today.", "Vi må ta en avgjørelse i dag."),
    W("make a mistake", "gjøre en feil", "meik e misteik", "Sorry, I made a mistake.", "Beklager, jeg gjorde en feil."),
    W("do a course", "ta et kurs", "duu e kårs", "I'm doing a course in Excel.", "Jeg tar et kurs i Excel."),
    W("full-time", "heltid", "full taim", "She works full-time.", "Hun jobber heltid."),
    W("part-time", "deltid", "paart taim", "I have a part-time job.", "Jeg har en deltidsjobb."),
    W("salary", "lønn (fast)", "sæleri", "The salary is good.", "Lønna er god."),
    W("eventually", "til slutt", "iventsjuelli", "Eventually, we found a solution.", "Til slutt fant vi en løsning.", { note: "ikke «eventuelt»!" }),
    W("actually", "faktisk, egentlig", "æktsjuelli", "Actually, I don't agree.", "Egentlig er jeg ikke enig.", { note: "ikke «aktuelt»!" }),
    W("Could you ...?", "Kunne du ...?", "kudd ju", "Could you send me the file?", "Kunne du sende meg fila?", { tts: "Could you" })
  ],
  dialogue: [["A", "Could you check these numbers before the meeting?", "Kunne du kontrollere disse tallene før møtet?"], ["B", "Of course. When is the deadline?", "Selvfølgelig. Når er fristen?"], ["A", "Friday. The boss wants to make a decision next week.", "Fredag. Sjefen vil ta en avgjørelse neste uke."], ["B", "Actually, I think there is a mistake here.", "Jeg tror faktisk det er en feil her."], ["A", "You're right. Thanks for checking!", "Du har rett. Takk for at du sjekket!"]],
  quiz: [
    { q: "«Sjefen min er hyggelig.»", o: ["My boss is nice.", "My chef is nice.", "My chief is nice."], a: 0, e: "sjef = boss eller manager. chef betyr kokk." },
    { q: "Hva betyr «eventually»?", o: ["til slutt", "eventuelt", "kanskje"], a: 0, e: "eventually = til slutt. Norsk «eventuelt» er possibly eller if necessary." },
    { q: "«Kan du kontrollere tallene?»", o: ["Can you check the numbers?", "Can you control the numbers?", "Can you controll the numbers?"], a: 0, e: "kontrollere (sjekke) = check. control betyr å styre." },
    { q: "«Jeg gjorde en feil.»", o: ["I made a mistake.", "I did a mistake.", "I made a fault.", "I did a wrong."], a: 0, e: "make a mistake (ikke do)." },
    { q: "Hva er den mest høflige forespørselen?", o: ["Could you send me the report, please?", "Send me the report.", "You send me the report.", "I want the report now."], a: 0, e: "Engelsk arbeidsliv er indirekte: Could you ..., please?" }
  ],
  review: ["sjef = boss (chef = kokk); kontrollere = check.", "eventually = til slutt; actually = faktisk.", "make a decision/mistake, do a course/the dishes."]
},
{
  id: "nb-a2-5", title: "Leie bolig", no: "Renting a flat", icon: "key",
  intro: "Vi leier leilighet: husleie, depositum, utleier og kontrakt. Vi lærer også to verbpar som er ett ord på norsk: låne og lære.",
  notes: [
    { h: "låne: borrow og lend", p: "Norsk «låne» dekker to retninger. borrow = låne av noen (få). lend = låne bort til noen (gi). Can I borrow your pen? Can you lend me your pen? «Can you borrow me your pen?» er feil.",
      table: [["Norsk", "Engelsk"], ["Kan jeg låne bilen din?", "Can I borrow your car?"], ["Kan du låne meg bilen din?", "Can you lend me your car?"], ["Han lærte meg engelsk.", "He taught me English."], ["Jeg lærer engelsk.", "I'm learning English."]] },
    { h: "lære: learn og teach", p: "Samme problem: learn = lære selv, teach = lære bort. «She learned me to drive» er feil; det heter «She taught me to drive»." },
    { h: "Leieforhold", p: "landlord (utleier), tenant (leietaker), rent (husleie), deposit (depositum), contract / tenancy agreement (leiekontrakt), bills (regninger: strøm, vann). «Bills included» betyr at strøm og liknende er inkludert i leia." }
  ],
  tip: "Nordmenn sier ofte «Can you borrow me ...?» og «He learned me ...». Riktig: «Can you lend me ...?» og «He taught me ...».",
  words: [
    W("rent", "husleie, leie", "rent", "The rent is £900 a month.", "Husleia er 900 pund i måneden."),
    W("deposit", "depositum", "dipåzitt", "We paid a deposit of one month's rent.", "Vi betalte én måneds leie i depositum."),
    W("landlord", "utleier", "lændlård", "Our landlord is very helpful.", "Utleieren vår er veldig hjelpsom.", { note: "kvinne også: landlady" }),
    W("tenant", "leietaker", "tennent", "The tenant pays the bills.", "Leietakeren betaler regningene."),
    W("contract", "kontrakt", "kåntrækt", "Please read the contract carefully.", "Les kontrakten nøye."),
    W("bills", "regninger", "billz", "Are the bills included?", "Er strøm og slikt inkludert?"),
    W("furnished", "møblert", "førnisjt", "Is the flat furnished?", "Er leiligheten møblert?"),
    W("borrow", "låne (av noen)", "bårråu", "Can I borrow your ladder?", "Kan jeg låne stigen din?"),
    W("lend", "låne (bort til noen)", "lend", "Can you lend me some money?", "Kan du låne meg litt penger?"),
    W("teach", "lære (bort), undervise", "tiitsj", "She teaches English.", "Hun underviser i engelsk.", { note: "teach – taught – taught" }),
    W("move in", "flytte inn", "muuv inn", "We move in on the first of June.", "Vi flytter inn første juni."),
    W("move out", "flytte ut", "muuv aut", "When do you move out?", "Når flytter du ut?"),
    W("neighbour", "nabo", "neiber", "Our neighbours are quiet.", "Naboene våre er stille.", { note: "amerikansk: neighbor" }),
    W("broken", "ødelagt", "bråuken", "The washing machine is broken.", "Vaskemaskinen er ødelagt."),
    W("repair", "reparere", "ripær", "Can you repair the heater?", "Kan du reparere ovnen?")
  ],
  dialogue: [["A", "Hello, I'm calling about the flat for rent.", "Hei, jeg ringer om leiligheten som er til leie."], ["B", "Yes, it's still available. The rent is £850 a month.", "Ja, den er fortsatt ledig. Leia er 850 pund i måneden."], ["A", "Are the bills included?", "Er strøm og slikt inkludert?"], ["B", "No, but it's furnished.", "Nei, men den er møblert."], ["A", "How much is the deposit?", "Hvor mye er depositumet?"], ["B", "One month's rent. You can move in next week.", "Én måneds leie. Du kan flytte inn neste uke."]],
  quiz: [
    { q: "«Kan du låne meg penna di?»", o: ["Can you lend me your pen?", "Can you borrow me your pen?", "Can you loan of me your pen?", "Can I lend your pen?"], a: 0, e: "låne bort = lend: Can you lend me ...?" },
    { q: "«Kan jeg låne penna di?»", o: ["Can I borrow your pen?", "Can I lend your pen?", "Can you borrow me your pen?"], a: 0, e: "låne av noen = borrow: Can I borrow ...?" },
    { q: "«Hun lærte meg å kjøre bil.»", o: ["She taught me to drive.", "She learned me to drive.", "She teached me to drive.", "She learnt me driving."], a: 0, e: "lære bort = teach; preteritum taught." },
    { q: "Hva er en «landlord»?", o: ["utleier", "grunneier i middelalderen", "leietaker"], a: 0, e: "landlord = utleier, tenant = leietaker." },
    { q: "Hva betyr «bills included»?", o: ["strøm og liknende er med i leia", "regningene er betalt for et år", "det er ikke lov med regninger"], a: 0, e: "bills = regninger for strøm, vann, internett osv." }
  ],
  review: ["borrow = låne av; lend = låne bort.", "learn = lære selv; teach = lære bort.", "rent, deposit, landlord, tenant, bills."]
},
{
  id: "nb-a2-6", title: "Planer og framtid", no: "Future plans", icon: "arrow",
  intro: "Vi snakker om planer og framtid. Norsk bruker «skal» og «kommer til å», men engelsk har flere former, og «shall» er nesten aldri riktig oversettelse av «skal».",
  notes: [
    { h: "Tre måter å snakke om framtid", p: "be going to = plan du allerede har bestemt: I'm going to visit my parents. will = beslutning nå, løfte eller spådom: I'll help you! It will rain tomorrow. am/is/are + -ing = avtale med fast tid: I'm meeting Kari at six.",
      table: [["Norsk", "Engelsk"], ["Jeg skal besøke foreldrene mine.", "I'm going to visit my parents."], ["Jeg skal møte Kari klokka seks.", "I'm meeting Kari at six."], ["Jeg skal hjelpe deg!", "I'll help you!"], ["Det kommer til å regne.", "It's going to rain. / It will rain."]] },
    { h: "Ikke «shall» for «skal»", p: "shall er sjeldent i moderne engelsk og brukes nesten bare i forslag: Shall we go? (Skal vi gå?). «I shall go to the cinema tonight» høres gammeldags ut. Si: I'm going to the cinema tonight." },
    { h: "Når-setninger", p: "Etter when, if, before og after bruker engelsk presens om framtid, som norsk: I'll call you when I arrive. «when I will arrive» er feil." }
  ],
  tip: "Norsk «skal» blir sjelden shall. «Jeg skal på kino i kveld» = I'm going to the cinema tonight. Bruk shall bare i forslag: «Shall we start?».",
  words: [
    W("going to", "skal, kommer til å", "gåuing tu", "I'm going to study medicine.", "Jeg skal studere medisin."),
    W("will", "vil, skal (beslutning, løfte)", "will", "I'll call you tomorrow.", "Jeg ringer deg i morgen.", { note: "kortform: I'll" }),
    W("Shall we ...?", "Skal vi ...?", "sjæll wii", "Shall we go for a walk?", "Skal vi gå en tur?", { tts: "Shall we" }),
    W("plan", "plan, planlegge", "plæn", "What are your plans for the summer?", "Hva er planene dine for sommeren?"),
    W("tomorrow", "i morgen", "tumårråu", "See you tomorrow!", "Vi ses i morgen!"),
    W("next week", "neste uke", "nekst wiik", "I'm starting a new job next week.", "Jeg begynner i ny jobb neste uke."),
    W("soon", "snart", "suun", "The bus will be here soon.", "Bussen kommer snart."),
    W("maybe", "kanskje", "meibi", "Maybe I'll stay at home.", "Kanskje jeg blir hjemme."),
    W("probably", "sannsynligvis", "pråbebli", "It will probably rain.", "Det kommer sannsynligvis til å regne."),
    W("hope", "håpe", "håup", "I hope you can come.", "Jeg håper du kan komme."),
    W("book", "bestille (reise, bord)", "bukk", "I've booked a table for two.", "Jeg har bestilt bord for to."),
    W("abroad", "i utlandet, utenlands", "ebråd", "We're going abroad this summer.", "Vi skal utenlands i sommer."),
    W("when", "når", "wenn", "Call me when you arrive.", "Ring meg når du kommer fram."),
    W("arrive", "komme fram, ankomme", "eraiv", "The train arrives at nine.", "Toget ankommer klokka ni."),
    W("leave", "dra, reise, forlate", "liiv", "We're leaving on Saturday.", "Vi reiser på lørdag.")
  ],
  dialogue: [["A", "What are you going to do this summer?", "Hva skal du gjøre i sommer?"], ["B", "We're going abroad. We're flying to Italy in July.", "Vi skal utenlands. Vi flyr til Italia i juli."], ["A", "How nice! Have you booked a hotel?", "Så fint! Har dere bestilt hotell?"], ["B", "Not yet. Maybe we'll rent a house.", "Ikke ennå. Kanskje vi leier et hus."], ["A", "Shall we meet before you leave?", "Skal vi møtes før du reiser?"], ["B", "Yes! I'll call you next week.", "Ja! Jeg ringer deg neste uke."]],
  quiz: [
    { q: "«Jeg skal på kino i kveld.» (avtalt)", o: ["I'm going to the cinema tonight.", "I shall go to cinema tonight.", "I go to the cinema tonight will.", "I'm go to the cinema tonight."], a: 0, e: "Avtalt plan: am going (to). shall høres gammeldags ut her." },
    { q: "Telefonen ringer. «Jeg tar den!»", o: ["I'll get it!", "I'm going to get it!", "I get it tomorrow!", "I shall to get it!"], a: 0, e: "Beslutning i øyeblikket: will (I'll)." },
    { q: "«Skal vi gå?» (forslag)", o: ["Shall we go?", "Will we go?", "Are we go?", "Go we?"], a: 0, e: "Forslag: Shall we ...?" },
    { q: "«Ring meg når du kommer fram.»", o: ["Call me when you arrive.", "Call me when you will arrive.", "Call me when you are arrive.", "Call me when arrive you."], a: 0, e: "Etter when: presens om framtid." },
    { q: "Hva betyr «abroad»?", o: ["i utlandet", "om bord", "bredt"], a: 0, e: "abroad = i/til utlandet." }
  ],
  review: ["going to = plan; will = beslutning nå/løfte; -ing = avtale.", "skal ≠ shall. Shall bare i forslag: Shall we go?", "when + presens: Call me when you arrive."]
}
];

export default atLevel("A2", A2);
