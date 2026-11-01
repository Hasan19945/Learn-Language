import { I, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const B2: LessonDef[] = [
{
  id: "nb-b2-1", title: "Formell e-post", no: "Formal emails", icon: "mail",
  intro: "Vi skriver formelle e-poster til arbeidsgivere, skoler og bedrifter: innledning, faste uttrykk og avslutning.",
  notes: [
    { h: "Hilsen og avslutning", p: "Kjenner du ikke navnet: Dear Sir or Madam → Yours faithfully. Kjenner du navnet: Dear Ms Smith → Yours sincerely. Mindre formelt: Kind regards / Best regards, som tilsvarer «Med vennlig hilsen».",
      table: [["Innledning", "Avslutning", "Når?"], ["Dear Sir or Madam,", "Yours faithfully,", "Ukjent mottaker"], ["Dear Mr Brown,", "Yours sincerely,", "Kjent mottaker"], ["Dear Anna,", "Kind regards,", "Kjent, halvformelt"]] },
    { h: "Faste uttrykk", p: "I am writing to enquire about ... (Jeg skriver for å høre om ...) Further to our conversation, ... (Med henvisning til samtalen vår ...) Please find attached ... (Vedlagt finner du ...) I would be grateful if you could ... (Jeg ville satt pris på om du kunne ...) I look forward to hearing from you." },
    { h: "Norsk direktehet", p: "Norske e-poster er ofte korte og direkte: «Hei, send meg kontrakten.» På engelsk kan dette virke frekt. Bruk høflige omskrivninger: Could you please send me the contract? I would appreciate it if ... Unngå sammentrekninger (I'm, don't) i formelle tekster." }
  ],
  tip: "«Hi» og «Send me ...» passer i en norsk jobb-e-post, men er for brått i en formell engelsk e-post. Og «I look forward to hear from you» er feil: etter «look forward to» kommer -ing.",
  words: [
    W("Dear Sir or Madam", "Til den det måtte angå", "", "Dear Sir or Madam, I am writing to complain about ...", "Til den det måtte angå. Jeg skriver for å klage på ..."),
    W("I am writing to", "Jeg skriver for å", "", "I am writing to apply for the position of nurse.", "Jeg skriver for å søke på stillingen som sykepleier."),
    W("enquiry", "forespørsel", "", "Thank you for your enquiry.", "Takk for henvendelsen.", { note: "amerikansk: inquiry" }),
    W("regarding", "angående", "", "I am writing regarding my invoice.", "Jeg skriver angående fakturaen min."),
    W("Please find attached", "Vedlagt finner du", "", "Please find attached my CV.", "Vedlagt finner du CV-en min."),
    W("I would be grateful if", "Jeg ville satt pris på om", "", "I would be grateful if you could reply by Friday.", "Jeg ville satt pris på svar innen fredag."),
    W("further to", "med henvisning til", "", "Further to our phone call, I attach the contract.", "Med henvisning til telefonsamtalen vår legger jeg ved kontrakten."),
    W("apologise for", "beklage", "", "We apologise for any inconvenience.", "Vi beklager eventuelle ulemper.", { note: "amerikansk: apologize" }),
    W("inconvenience", "ulempe, bry", "", "Sorry for the inconvenience.", "Beklager bryet."),
    W("reminder", "påminnelse", "", "This is a reminder that your payment is due.", "Dette er en påminnelse om at betalingen forfaller."),
    W("in advance", "på forhånd", "", "Thank you in advance for your help.", "Takk på forhånd for hjelpen."),
    W("I look forward to hearing from you", "Jeg ser fram til å høre fra deg", "", "I look forward to hearing from you.", "Jeg ser fram til å høre fra deg."),
    W("Yours sincerely", "Med vennlig hilsen (kjent mottaker)", "", "Yours sincerely, Kari Nordmann", "Med vennlig hilsen Kari Nordmann"),
    W("Yours faithfully", "Med vennlig hilsen (ukjent mottaker)", "", "Yours faithfully, Ola Hansen", "Med vennlig hilsen Ola Hansen"),
    W("Kind regards", "Med vennlig hilsen (halvformelt)", "", "Kind regards, Anna", "Vennlig hilsen Anna")
  ],
  dialogue: [["A", "Dear Sir or Madam,", "Til den det måtte angå,"], ["A", "I am writing regarding my order no. 4521, which I placed on 3 May.", "Jeg skriver angående bestilling nr. 4521, som jeg la inn 3. mai."], ["A", "Unfortunately, the item has not arrived yet. Please find attached a copy of the receipt.", "Dessverre har varen ikke kommet ennå. Vedlagt finner du en kopi av kvitteringen."], ["A", "I would be grateful if you could look into this matter as soon as possible.", "Jeg ville satt pris på om dere kunne se på saken så snart som mulig."], ["A", "I look forward to hearing from you.", "Jeg ser fram til å høre fra dere."], ["A", "Yours faithfully, Kari Nordmann", "Med vennlig hilsen Kari Nordmann"]],
  quiz: [
    { q: "E-posten begynner med «Dear Sir or Madam». Hvordan avslutter du?", o: ["Yours faithfully,", "Yours sincerely,", "Love,", "Cheers,"], a: 0, e: "Ukjent mottaker: Yours faithfully." },
    { q: "Hvilken avslutning er riktig?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I look forward hearing you.", "I am looking forward hear from you."], a: 0, e: "look forward to + -ing: hearing." },
    { q: "«Vedlagt finner du ...»", o: ["Please find attached ...", "Look at the attach ...", "Here is attach ...", "Find attached please me ..."], a: 0, e: "Fast uttrykk: Please find attached ..." },
    { q: "Hva passer best i en formell e-post?", o: ["I would be grateful if you could send it.", "Send it to me.", "You must send it.", "Gimme the file."], a: 0, e: "Formell og høflig forespørsel: I would be grateful if you could ..." },
    { q: "Hva betyr «in advance»?", o: ["på forhånd", "avansert", "i forkant av køen"], a: 0, e: "Thank you in advance = takk på forhånd." }
  ],
  review: ["Dear Sir or Madam → Yours faithfully; Dear Mr X → Yours sincerely.", "Please find attached / I would be grateful if you could ...", "look forward to + -ing; ingen sammentrekninger i formell tekst."]
},
{
  id: "nb-b2-2", title: "Argumentasjon og bindeord", no: "Linking ideas", icon: "scale",
  intro: "Vi binder sammen ideer med bindeord som although, despite, however og therefore, slik at teksten blir tydelig og overbevisende.",
  notes: [
    { h: "Motsetning", p: "Samme betydning, ulik konstruksjon. Se nøye på hva som kommer etter ordet.",
      table: [["Bindeord", "Etterfølges av", "Eksempel"], ["although / even though", "setning", "Although it was cold, we swam."], ["despite / in spite of", "substantiv eller -ing", "Despite the cold, we swam."], ["however", "ny setning, komma", "It was cold. However, we swam."]] },
    { h: "Norske bindeord", p: "selv om = although / even though (ikke «self if»). imidlertid = however. derfor = therefore. dessuten = moreover / furthermore / besides. likevel = still / nevertheless. «however» står vanligvis først i setningen med komma etter: However, the price is high." },
    { h: "Argumenterende tekst", p: "Innledning: It is often argued that ... Argumenter: Firstly, ... Secondly, ... Motargument: On the other hand, ... Konklusjon: To sum up, ... / On balance, I believe ..." }
  ],
  tip: "«Despite of» finnes ikke: si «despite the rain» eller «in spite of the rain». Og etter despite kommer ikke en hel setning: «Despite it was cold» er feil; si «Although it was cold».",
  words: [
    W("although", "selv om", "", "Although it was late, we kept working.", "Selv om det var sent, fortsatte vi å jobbe."),
    W("even though", "selv om (sterkere)", "", "Even though he was tired, he finished the report.", "Selv om han var sliten, gjorde han ferdig rapporten."),
    W("despite", "til tross for", "", "Despite the rain, the match continued.", "Til tross for regnet fortsatte kampen.", { note: "ikke «despite of»" }),
    W("however", "imidlertid, men", "", "The idea is good. However, it is expensive.", "Ideen er god. Den er imidlertid dyr."),
    W("therefore", "derfor", "", "The bridge is closed. Therefore, we must drive around.", "Brua er stengt. Derfor må vi kjøre rundt."),
    W("moreover", "dessuten", "", "Moreover, the plan is cheaper.", "Dessuten er planen billigere."),
    W("nevertheless", "likevel", "", "It was risky. Nevertheless, they did it.", "Det var risikabelt. Likevel gjorde de det."),
    W("whereas", "mens (kontrast)", "", "Oslo is busy, whereas Røros is quiet.", "Oslo er travel, mens Røros er rolig."),
    W("as a result", "som følge av dette", "", "Prices rose. As a result, sales fell.", "Prisene steg. Som følge av dette falt salget."),
    W("firstly", "for det første", "", "Firstly, we need more staff.", "For det første trenger vi flere ansatte."),
    W("on balance", "alt i alt", "", "On balance, I support the proposal.", "Alt i alt støtter jeg forslaget."),
    W("to sum up", "for å oppsummere", "", "To sum up, the plan has more advantages than disadvantages.", "For å oppsummere har planen flere fordeler enn ulemper."),
    W("It could be argued that", "Man kan hevde at", "", "It could be argued that cars should be banned in city centres.", "Man kan hevde at biler bør forbys i sentrum."),
    W("claim", "hevde, påstand", "", "Some people claim that it is unsafe.", "Noen hevder at det er utrygt."),
    W("evidence", "belegg, bevis", "", "There is no evidence for this.", "Det finnes ikke belegg for dette.", { note: "utellelig" })
  ],
  dialogue: [["A", "Should cars be banned in the city centre?", "Bør biler forbys i sentrum?"], ["B", "Firstly, it would reduce pollution. Moreover, the streets would be safer.", "For det første ville det redusere forurensningen. Dessuten ville gatene bli tryggere."], ["A", "However, many shops depend on customers with cars.", "Mange butikker er imidlertid avhengige av kunder med bil."], ["B", "That's true. Nevertheless, I think the benefits are greater.", "Det er sant. Likevel tror jeg fordelene er større."], ["A", "On balance, I agree, although it won't be easy.", "Alt i alt er jeg enig, selv om det ikke blir lett."]],
  quiz: [
    { q: "«Til tross for regnet dro vi ut.»", o: ["Despite the rain, we went out.", "Despite of the rain, we went out.", "Although the rain, we went out.", "Despite it rained, we went out."], a: 0, e: "despite + substantiv, uten of." },
    { q: "«Selv om det var kaldt, badet vi.»", o: ["Although it was cold, we swam.", "Despite it was cold, we swam.", "Self if it was cold, we swam.", "However it was cold, we swam."], a: 0, e: "although + setning." },
    { q: "Hva betyr «therefore»?", o: ["derfor", "dessuten", "imidlertid", "likevel"], a: 0, e: "therefore = derfor." },
    { q: "Hva er riktig tegnsetting?", o: ["It is good. However, it is expensive.", "It is good, however it is expensive.", "It is good however, it is expensive."], a: 0, e: "however begynner gjerne en ny setning og etterfølges av komma." },
    { q: "«Oslo er travel, mens Røros er rolig.»", o: ["Oslo is busy, whereas Røros is quiet.", "Oslo is busy, while Røros quiet.", "Oslo is busy, whereas Røros quiet is."], a: 0, e: "whereas viser kontrast mellom to ting." }
  ],
  review: ["although + setning; despite + substantiv (ikke despite of).", "however = imidlertid; therefore = derfor; moreover = dessuten.", "Firstly ... On the other hand ... On balance ..."]
},
{
  id: "nb-b2-3", title: "Idiomer", no: "Idioms", icon: "spark",
  intro: "12 idiomer du hører hele tiden i hverdagen. Bildet viser hva idiomet betyr ord for ord; husk bildet, så husker du betydningen.",
  notes: [
    { h: "Husk med bilder", p: "Oversatt ord for ord blir idiomer rare: å slippe katta ut av sekken, å regne katter og hunder. Nettopp det rare bildet er lett å huske. Se på bildet, forestill deg scenen, og si så den egentlige betydningen." },
    { h: "Mange finnes på norsk", p: "Noen er nesten like på norsk: «break the ice» = bryte isen, «let the cat out of the bag» = slippe katta ut av sekken, «hit the nail on the head» = treffe spikeren på hodet. Andre er helt annerledes: «It's raining cats and dogs» = det regner trollkjerringer, «kill two birds with one stone» = slå to fluer i én smekk." },
    { h: "Når bruker man dem?", p: "Idiomer er vanlige i dagligtale, TV-serier og aviser. I formelle e-poster og akademiske tekster brukes de sjeldnere." }
  ],
  tip: "Ikke oversett norske idiomer direkte: «It costs the shirt» betyr ingenting på engelsk; det heter «It costs an arm and a leg». Og ikke endre ordene: «a piece of a cake» er feil.",
  words: [
    I("a piece of cake", "lett som en plett", "et stykke kake", "🍰👌", "The exam was a piece of cake.", "Eksamen var lett som en plett."),
    I("break the ice", "bryte isen", "bryte isen", "🧊🔨", "He told a joke to break the ice.", "Han fortalte en vits for å bryte isen."),
    I("cost an arm and a leg", "koste skjorta", "koste en arm og et bein", "💪🦵💰", "The new phone cost an arm and a leg.", "Den nye telefonen kostet skjorta."),
    I("under the weather", "i dårlig form, litt syk", "under været", "🌧️🤒", "I'm feeling a bit under the weather today.", "Jeg er litt i dårlig form i dag."),
    I("once in a blue moon", "svært sjelden", "én gang ved blå måne", "🔵🌕", "I only see him once in a blue moon.", "Jeg ser ham svært sjelden."),
    I("let the cat out of the bag", "slippe katta ut av sekken", "slippe katta ut av sekken", "🐈👜", "Who let the cat out of the bag about the party?", "Hvem slapp katta ut av sekken om festen?"),
    I("hit the nail on the head", "treffe spikeren på hodet", "treffe spikeren på hodet", "🔨📌🎯", "You hit the nail on the head with that comment.", "Du traff spikeren på hodet med den kommentaren."),
    I("It's raining cats and dogs.", "Det regner trollkjerringer.", "det regner katter og hunder", "🐈🐕🌧️", "Take an umbrella, it's raining cats and dogs.", "Ta med paraply, det regner trollkjerringer."),
    I("kill two birds with one stone", "slå to fluer i én smekk", "drepe to fugler med én stein", "🪨🐦🐦", "I'll visit my parents and see the dentist – killing two birds with one stone.", "Jeg besøker foreldrene mine og går til tannlegen – to fluer i én smekk."),
    I("The ball is in your court.", "Det er ditt trekk.", "ballen er på din banehalvdel", "🎾👉", "I've made my offer. Now the ball is in your court.", "Jeg har kommet med tilbudet mitt. Nå er det ditt trekk."),
    I("bite off more than you can chew", "ta seg vann over hodet", "bite av mer enn du kan tygge", "🍔😮", "I bit off more than I could chew with three jobs.", "Jeg tok meg vann over hodet med tre jobber."),
    I("spill the beans", "røpe hemmeligheten", "søle bønnene", "🫘💦", "Come on, spill the beans! What happened?", "Kom igjen, fortell! Hva skjedde?")
  ],
  dialogue: [["A", "You look tired. Are you OK?", "Du ser sliten ut. Går det bra?"], ["B", "I'm a bit under the weather. I've bitten off more than I can chew this month.", "Jeg er litt i dårlig form. Jeg har tatt meg vann over hodet denne måneden."], ["A", "Is it the new job? I heard the training is a piece of cake.", "Er det den nye jobben? Jeg hørte opplæringen var lett som en plett."], ["B", "The training, yes. But I'm also studying, and the course cost an arm and a leg.", "Opplæringen, ja. Men jeg studerer også, og kurset kostet skjorta."], ["A", "Well, you can't do everything. The ball is in your court.", "Du kan ikke gjøre alt. Det er ditt trekk."], ["B", "You've hit the nail on the head. I need to choose.", "Du traff spikeren på hodet. Jeg må velge."]],
  quiz: [
    { q: "Hva betyr «a piece of cake»?", o: ["lett som en plett", "noe søtt", "et lite stykke"], a: 0, e: "Ord for ord «et stykke kake» = veldig lett." },
    { q: "Hvordan sier man «det regner trollkjerringer» på engelsk?", o: ["It's raining cats and dogs.", "It's raining trolls.", "It's raining witches.", "It's raining shirts."], a: 0, e: "Engelsk bruker katter og hunder." },
    { q: "«slå to fluer i én smekk»", o: ["kill two birds with one stone", "hit two flies with one smack", "kill two flies with one stone"], a: 0, e: "Engelsk bruker fugler og stein: kill two birds with one stone." },
    { q: "«Den kostet skjorta.»", o: ["It cost an arm and a leg.", "It cost the shirt.", "It cost a shirt and a leg."], a: 0, e: "koste skjorta = cost an arm and a leg." },
    { q: "Noen sladret om overraskelsesfesten:", o: ["They let the cat out of the bag.", "They broke the ice.", "They hit the nail on the head."], a: 0, e: "let the cat out of the bag = røpe en hemmelighet, akkurat som på norsk." }
  ],
  review: ["Husk bildet (et stykke kake), så betydningen (lett).", "Like på norsk: break the ice, let the cat out of the bag, hit the nail on the head.", "Annerledes: koste skjorta = cost an arm and a leg."]
},
{
  id: "nb-b2-4", title: "Frasale verb", no: "Phrasal verbs", icon: "arrow",
  intro: "Frasale verb (verb + partikkel) er grunnmuren i dagligdags engelsk. Norsk har lignende verb (gi opp, finne ut), men betydningen kan ikke alltid gjettes.",
  notes: [
    { h: "Mange ligner på norsk", p: "give up = gi opp, find out = finne ut, look after = se etter, carry on = fortsette. Men noen er falske venner: «put up with» = finne seg i (ikke «sette opp med»), «turn down» = avslå (også skru ned)." },
    { h: "Hvor står objektet?", p: "Ved mange frasale verb kan et substantiv stå før eller etter partikkelen: put off the meeting / put the meeting off. Et pronomen må stå i midten: put it off. «put off it» er feil.",
      table: [["Substantiv", "Pronomen"], ["turn off the light / turn the light off", "turn it off"], ["pick up the kids / pick the kids up", "pick them up"], ["give up smoking", "give it up"]] },
    { h: "Uformelt og formelt", p: "Frasale verb er typisk for muntlig språk. I formelle tekster brukes ofte et latinsk ord: put off → postpone, find out → discover, carry on → continue." }
  ],
  tip: "Ikke legg pronomenet bakerst: «Can you pick up me?» er feil; det skal være «Can you pick me up?». Og «I can't stand up with it» betyr ingenting; si «I can't put up with it» (jeg finner meg ikke i det).",
  words: [
    W("put off", "utsette", "", "Let's put the meeting off until Monday.", "La oss utsette møtet til mandag.", { note: "formelt: postpone" }),
    W("give up", "gi opp, slutte med", "", "She gave up smoking last year.", "Hun sluttet å røyke i fjor."),
    W("look after", "passe på, ta vare på", "", "Can you look after the kids tonight?", "Kan du passe barna i kveld?"),
    W("find out", "finne ut", "", "I need to find out the price.", "Jeg må finne ut prisen."),
    W("turn down", "avslå; skru ned", "", "He turned down the job offer.", "Han takket nei til jobbtilbudet."),
    W("run out of", "gå tom for", "", "We've run out of milk.", "Vi er tomme for melk."),
    W("get on with", "komme overens med", "", "I get on well with my colleagues.", "Jeg kommer godt overens med kollegaene mine."),
    W("put up with", "finne seg i, tåle", "", "I can't put up with the noise any more.", "Jeg finner meg ikke i bråket lenger."),
    W("set up", "starte, etablere", "", "They set up a company in 2020.", "De startet et firma i 2020."),
    W("carry on", "fortsette", "", "Carry on, I'm listening.", "Bare fortsett, jeg hører etter."),
    W("pick up", "hente; plukke opp", "", "I'll pick you up at six.", "Jeg henter deg klokka seks."),
    W("take off", "lette (fly); ta av (klær)", "", "The plane took off on time.", "Flyet lettet i rute."),
    W("look up", "slå opp", "", "Look the word up in a dictionary.", "Slå opp ordet i en ordbok."),
    W("come across", "komme over, støte på", "", "I came across an old photo.", "Jeg kom over et gammelt bilde."),
    W("figure out", "skjønne, finne ut av", "", "I can't figure out how this works.", "Jeg skjønner ikke hvordan dette fungerer.")
  ],
  dialogue: [["A", "Have you found out when the meeting is?", "Har du funnet ut når møtet er?"], ["B", "They've put it off until Friday.", "De har utsatt det til fredag."], ["A", "Good. Can you pick me up at the station on Friday?", "Bra. Kan du hente meg på stasjonen på fredag?"], ["B", "Sure. By the way, did you turn down that job offer?", "Klart. Forresten, takket du nei til det jobbtilbudet?"], ["A", "Yes. I get on so well with my team, I didn't want to leave.", "Ja. Jeg kommer så godt overens med teamet mitt at jeg ikke ville slutte."]],
  quiz: [
    { q: "«Utsett det!» (it = det)", o: ["Put it off!", "Put off it!", "It put off!", "Off put it!"], a: 0, e: "Pronomenet står mellom verbet og partikkelen: put it off." },
    { q: "«Kan du hente meg?»", o: ["Can you pick me up?", "Can you pick up me?", "Can you up pick me?", "Can you pick me?"], a: 0, e: "Pronomen i midten: pick me up." },
    { q: "Hva betyr «turn down an offer»?", o: ["avslå et tilbud", "skru ned et tilbud", "forbedre et tilbud"], a: 0, e: "turn down = avslå." },
    { q: "«Vi er tomme for kaffe.»", o: ["We've run out of coffee.", "We've run off coffee.", "We are empty of coffee.", "We've given up coffee."], a: 0, e: "gå tom for = run out of." },
    { q: "Hva betyr «I can't put up with it»?", o: ["Jeg finner meg ikke i det.", "Jeg kan ikke sette det opp.", "Jeg kan ikke henge det opp."], a: 0, e: "put up with = finne seg i, tåle." }
  ],
  review: ["Pronomen i midten: put it off, pick me up.", "give up, find out, look after ligner på norsk.", "put up with = finne seg i; turn down = avslå."]
},
{
  id: "nb-b2-5", title: "Arbeidsliv og rettigheter", no: "Work and employment rights", icon: "doc",
  intro: "Vi lærer ord om arbeidskontrakt, ferie, sykefravær og oppsigelse, og noen falske venner fra norsk arbeidsliv.",
  notes: [
    { h: "Falske venner i arbeidslivet", p: "Norsk «permisjon» er ikke permission (tillatelse), men leave: parental leave (foreldrepermisjon), unpaid leave (ulønnet permisjon). Norsk «permittert» heter laid off eller furloughed. Norsk «ferie» om lovpålagt ferie fra jobben heter annual leave eller holiday.",
      table: [["Norsk", "Engelsk", "Ikke"], ["foreldrepermisjon", "parental leave", "parental permission"], ["permittert", "laid off / furloughed", "permitted"], ["oppsigelsestid", "notice period", "resignation time"], ["prøvetid", "probation period", "test time"]] },
    { h: "Oppsigelse", p: "Si opp selv = resign / hand in your notice. Bli oppsagt = be dismissed / be fired (uformelt). Oppsagt på grunn av nedbemanning = be made redundant. «I was sacked» er uformelt britisk for å få sparken." },
    { h: "Kontrakt og vilkår", p: "employment contract (arbeidskontrakt), working hours (arbeidstid), overtime (overtid), sick pay (sykepenger), trade union (fagforening), pension (pensjon)." }
  ],
  tip: "«I'm on permission» betyr ingenting. Si «I'm on leave» eller «I'm on parental leave». Og «I was permitted» betyr at du fikk lov; «permittert» heter «laid off» eller «furloughed».",
  words: [
    W("employment contract", "arbeidskontrakt", "", "Read your employment contract carefully.", "Les arbeidskontrakten nøye."),
    W("notice period", "oppsigelsestid", "", "My notice period is three months.", "Jeg har tre måneders oppsigelsestid."),
    W("probation period", "prøvetid", "", "The probation period is six months.", "Prøvetiden er seks måneder."),
    W("resign", "si opp (selv)", "", "She resigned to start her own business.", "Hun sa opp for å starte sitt eget firma."),
    W("dismiss", "si opp (arbeidsgiver), avskjedige", "", "He was dismissed for misconduct.", "Han ble avskjediget for tjenesteforsømmelse."),
    W("made redundant", "oppsagt pga. nedbemanning", "", "Fifty workers were made redundant.", "Femti arbeidere ble sagt opp på grunn av nedbemanning."),
    W("laid off", "permittert, oppsagt", "", "Many people were laid off during the crisis.", "Mange ble permittert under krisen."),
    W("leave", "permisjon", "", "She is on parental leave.", "Hun har foreldrepermisjon.", { note: "permission = tillatelse" }),
    W("annual leave", "ferie (fra jobb)", "", "I have 25 days of annual leave.", "Jeg har 25 feriedager."),
    W("sick pay", "sykepenger", "", "Do you get sick pay from day one?", "Får du sykepenger fra første dag?"),
    W("overtime", "overtid", "", "We get paid for overtime.", "Vi får betalt for overtid."),
    W("trade union", "fagforening", "", "Are you a member of a trade union?", "Er du medlem av en fagforening?"),
    W("working hours", "arbeidstid", "", "My working hours are flexible.", "Arbeidstiden min er fleksibel."),
    W("pension", "pensjon", "", "The company pays into my pension.", "Firmaet betaler inn til pensjonen min."),
    W("entitled to", "ha rett til", "", "You are entitled to four weeks' holiday.", "Du har rett til fire ukers ferie.")
  ],
  dialogue: [["A", "I've decided to resign.", "Jeg har bestemt meg for å si opp."], ["B", "Really? What's your notice period?", "Seriøst? Hvor lang oppsigelsestid har du?"], ["A", "Three months. And I still have ten days of annual leave.", "Tre måneder. Og jeg har fortsatt ti feriedager igjen."], ["B", "Are you entitled to take them before you leave?", "Har du rett til å ta dem ut før du slutter?"], ["A", "Yes, I checked with the union.", "Ja, jeg sjekket med fagforeningen."]],
  quiz: [
    { q: "«Hun har foreldrepermisjon.»", o: ["She is on parental leave.", "She is on parental permission.", "She has parent permission.", "She is permitted parents."], a: 0, e: "permisjon = leave." },
    { q: "«Jeg ble permittert.»", o: ["I was laid off.", "I was permitted.", "I was permissioned.", "I was leaved."], a: 0, e: "permittert = laid off / furloughed. permitted = fikk lov." },
    { q: "«Jeg sa opp.» (selv)", o: ["I resigned.", "I was dismissed.", "I said up.", "I was made redundant."], a: 0, e: "si opp selv = resign." },
    { q: "Hva er «notice period»?", o: ["oppsigelsestid", "prøvetid", "ferie", "overtid"], a: 0, e: "notice period = oppsigelsestid." },
    { q: "«Du har rett til sykepenger.»", o: ["You are entitled to sick pay.", "You have right to sick pay.", "You are right for sick money.", "You are allowed sick money."], a: 0, e: "ha rett til = be entitled to." }
  ],
  review: ["permisjon = leave; permittert = laid off.", "resign (selv) / dismissed, made redundant (arbeidsgiver).", "notice period, probation period, entitled to."]
},
{
  id: "nb-b2-6", title: "Samtalens finesser", no: "Question tags and fillers", icon: "chat",
  intro: "Vi lærer «question tags» (..., ikke sant?), småord og høflighetsstrategier som får engelsken din til å låte naturlig.",
  notes: [
    { h: "Question tags", p: "Norsk har én form for alle setninger: «ikke sant?» eller «ikke?». Engelsk bruker en kort tag som følger verbet i setningen: positiv setning → negativ tag, negativ setning → positiv tag.",
      table: [["Setning", "Tag"], ["It's cold,", "isn't it?"], ["You live in Oslo,", "don't you?"], ["She can swim,", "can't she?"], ["They didn't come,", "did they?"], ["You've been there,", "haven't you?"]] },
    { h: "Småord i samtale", p: "well (vel, altså), you know (vet du), I mean (altså), kind of / sort of (liksom, på en måte), actually (faktisk). De gir tid til å tenke og gjør tonen mykere." },
    { h: "Myk ned", p: "Engelsk høflighet er indirekte. Nordmenn kan høres bryske ut når de oversetter direkte. «That's wrong» → «I'm not sure that's quite right». «I want ...» → «I'd like ...» / «Could I have ...?». «No» → «I'm afraid I can't»." }
  ],
  tip: "«It's cold, not true?» og «You live in Oslo, isn't it?» er typiske feil. Tag-en må matche verbet: «It's cold, isn't it?», «You live in Oslo, don't you?».",
  words: [
    W("isn't it?", "ikke sant? (med is)", "", "It's beautiful, isn't it?", "Det er vakkert, ikke sant?"),
    W("don't you?", "ikke sant? (med presens)", "", "You work here, don't you?", "Du jobber her, ikke sant?"),
    W("did you?", "gjorde du? (etter nektelse)", "", "You didn't see him, did you?", "Du så ham ikke, gjorde du?"),
    W("well", "vel, altså", "", "Well, I'm not sure.", "Tja, jeg er ikke sikker."),
    W("you know", "vet du, skjønner du", "", "It's, you know, a bit complicated.", "Det er, vet du, litt komplisert."),
    W("kind of", "liksom, på en måte", "", "I'm kind of tired.", "Jeg er liksom litt sliten."),
    W("I'm afraid", "dessverre", "", "I'm afraid I can't come.", "Jeg kan dessverre ikke komme."),
    W("I'd like", "jeg vil gjerne ha", "", "I'd like a glass of water, please.", "Jeg vil gjerne ha et glass vann."),
    W("Would you mind ...?", "Har du noe imot å ...?", "", "Would you mind closing the window?", "Har du noe imot å lukke vinduet?", { tts: "Would you mind" }),
    W("I'm not sure", "jeg er ikke sikker", "", "I'm not sure that's quite right.", "Jeg er ikke sikker på at det stemmer helt."),
    W("by the way", "forresten", "", "By the way, did you call Anna?", "Forresten, ringte du Anna?"),
    W("anyway", "uansett, men altså", "", "Anyway, let's get back to work.", "Uansett, la oss komme tilbake til jobben."),
    W("to be honest", "for å være ærlig", "", "To be honest, I didn't like the film.", "For å være ærlig likte jeg ikke filmen."),
    W("sort of", "på en måte", "", "It's sort of a long story.", "Det er en litt lang historie."),
    W("No worries", "Ingen problem", "", "Sorry I'm late! – No worries.", "Beklager at jeg er sen! – Null problem.")
  ],
  dialogue: [["A", "It's freezing today, isn't it?", "Det er iskaldt i dag, ikke sant?"], ["B", "It is! You're from Tromsø, aren't you? You must be used to it.", "Ja! Du er fra Tromsø, ikke sant? Du må være vant til det."], ["A", "Well, kind of. But this wind is, you know, different.", "Tja, på en måte. Men denne vinden er, vet du, annerledes."], ["B", "Would you mind closing the window?", "Har du noe imot å lukke vinduet?"], ["A", "No worries. By the way, you didn't book the meeting room, did you?", "Null problem. Forresten, du bestilte vel ikke møterommet?"], ["B", "I'm afraid I forgot. Sorry!", "Jeg glemte det dessverre. Beklager!"]],
  quiz: [
    { q: "«Du bor i Oslo, ikke sant?»", o: ["You live in Oslo, don't you?", "You live in Oslo, isn't it?", "You live in Oslo, not true?", "You live in Oslo, do you not true?"], a: 0, e: "Presens med live → tag med do: don't you?" },
    { q: "«Hun kan svømme, ikke sant?»", o: ["She can swim, can't she?", "She can swim, isn't she?", "She can swim, doesn't she?", "She can swim, can she?"], a: 0, e: "Positiv setning med can → negativ tag: can't she?" },
    { q: "«De kom ikke, gjorde de?»", o: ["They didn't come, did they?", "They didn't come, didn't they?", "They didn't come, isn't it?"], a: 0, e: "Negativ setning → positiv tag." },
    { q: "Hva er mest høflig?", o: ["I'm afraid I can't help you with that.", "No. I can't.", "That's not my job."], a: 0, e: "I'm afraid ... myker ned et nei." },
    { q: "Hva betyr «by the way»?", o: ["forresten", "på veien", "ved siden av"], a: 0, e: "by the way = forresten." }
  ],
  review: ["Tag følger verbet: It's ..., isn't it? You live ..., don't you?", "Positiv setning → negativ tag, og omvendt.", "Myk ned: I'm afraid, I'd like, Would you mind ...?"]
},
{
  id: "nb-b2-7", title: "Idiomer 2", no: "More idioms", icon: "spark",
  intro: "12 nye idiomer, mange med en norsk søsken. Se på bildet, forestill deg scenen og koble den til betydningen.",
  notes: [
    { h: "Samme bilde, nesten samme ord", p: "Noen idiomer er nesten like på norsk: «get cold feet» = få kalde føtter, «a storm in a teacup» = en storm i et vannglass. Pass på de små forskjellene: tekopp, ikke vannglass." },
    { h: "Helt andre bilder", p: "«beat around the bush» (slå rundt busken) = gå som katten rundt den varme grøten. «on cloud nine» (på sky ni) = i den sjuende himmel. «when pigs fly» = når det blir to torsdager i én uke." },
    { h: "Følelser", p: "Mange idiomer handler om følelser: on cloud nine (veldig glad), the last straw (dråpen som fikk begeret til å renne over), get cold feet (få kalde føtter)." }
  ],
  tip: "Ikke oversett norske idiomer direkte: «walk like the cat around the hot porridge» skjønner ingen. Si «beat around the bush». Og «in the seventh heaven» finnes, men «on cloud nine» er mye vanligere.",
  words: [
    I("beat around the bush", "gå som katten rundt den varme grøten", "slå rundt busken", "🌳👊", "Stop beating around the bush and tell me!", "Slutt å gå som katten rundt grøten og fortell!"),
    I("get cold feet", "få kalde føtter", "få kalde føtter", "🦶🥶", "He got cold feet before the wedding.", "Han fikk kalde føtter før bryllupet."),
    I("a storm in a teacup", "en storm i et vannglass", "en storm i en tekopp", "🌪️☕", "Don't worry, it's just a storm in a teacup.", "Ikke bekymre deg, det er bare en storm i et vannglass."),
    I("on cloud nine", "i den sjuende himmel", "på sky nummer ni", "☁️9️⃣😊", "She's been on cloud nine since she got the job.", "Hun har vært i den sjuende himmel siden hun fikk jobben."),
    I("when pigs fly", "når det blir to torsdager i én uke", "når griser flyr", "🐖✈️", "He'll clean his room when pigs fly.", "Han rydder rommet når det blir to torsdager i én uke."),
    I("the last straw", "dråpen som fikk begeret til å renne over", "det siste strået", "🐪🌾", "The noise at 3 a.m. was the last straw.", "Bråket klokka tre om natta var dråpen som fikk begeret til å renne over."),
    I("pull someone's leg", "tulle med noen", "dra i beinet til noen", "🦵😄", "Relax, I'm just pulling your leg!", "Slapp av, jeg bare tuller med deg!"),
    I("the elephant in the room", "det alle vet, men ingen sier", "elefanten i rommet", "🐘🛋️", "The budget cut is the elephant in the room.", "Budsjettkuttet er det alle vet, men ingen snakker om."),
    I("bark up the wrong tree", "være på villspor", "bjeffe opp feil tre", "🐕🌲", "If you think I took it, you're barking up the wrong tree.", "Hvis du tror jeg tok den, er du på villspor."),
    I("see eye to eye", "være enige", "se øye til øye", "👁️↔️👁️", "We don't always see eye to eye.", "Vi er ikke alltid enige."),
    I("cry over spilt milk", "gråte over spilt melk", "gråte over sølt melk", "🥛😢", "It's done. There's no use crying over spilt milk.", "Det er gjort. Det nytter ikke å gråte over spilt melk."),
    I("jump on the bandwagon", "henge seg på trenden", "hoppe på musikkvogna", "🎺🛻", "Everyone is jumping on the AI bandwagon.", "Alle henger seg på KI-trenden.")
  ],
  dialogue: [["A", "Why is Ola on cloud nine today?", "Hvorfor er Ola i den sjuende himmel i dag?"], ["B", "He's getting married! Although last week he got cold feet.", "Han skal gifte seg! Selv om han fikk kalde føtter forrige uke."], ["A", "Are you pulling my leg?", "Tuller du med meg?"], ["B", "No! But his parents and his fiancée don't see eye to eye.", "Nei! Men foreldrene hans og forloveden er ikke enige."], ["A", "I'm sure it's just a storm in a teacup.", "Det er sikkert bare en storm i et vannglass."]],
  quiz: [
    { q: "«gå som katten rundt den varme grøten»", o: ["beat around the bush", "walk like a cat around porridge", "the cat around the hot milk"], a: 0, e: "Engelsk: beat around the bush (slå rundt busken)." },
    { q: "Hva betyr «on cloud nine»?", o: ["veldig glad", "forvirret", "i dårlig form"], a: 0, e: "on cloud nine = i den sjuende himmel." },
    { q: "«en storm i et vannglass»", o: ["a storm in a teacup", "a storm in a water glass", "a storm in a bottle"], a: 0, e: "Engelsk bruker tekopp: a storm in a teacup." },
    { q: "Hva betyr «I'm pulling your leg»?", o: ["Jeg tuller med deg.", "Jeg hjelper deg opp.", "Jeg drar deg med."], a: 0, e: "pull someone's leg = tulle med noen." },
    { q: "Han sier han skal begynne å trene «when pigs fly». Hva mener han?", o: ["aldri", "snart", "neste år"], a: 0, e: "when pigs fly = aldri." }
  ],
  review: ["Nesten likt: get cold feet, a storm in a teacup (ikke water glass).", "Annerledes: beat around the bush = gå som katten rundt grøten.", "on cloud nine = i den sjuende himmel; when pigs fly = aldri."]
}
];

export default atLevel("B2", B2);
