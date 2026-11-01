import { W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const B1: LessonDef[] = [
{
  id: "nb-b1-1", title: "Skjemaer og offentlige saker", no: "Forms and official matters", icon: "doc",
  intro: "Vi fyller ut skjemaer, søker om ting og forstår offentlige brev. Her lærer vi også passiv, som er vanlig i formelt språk.",
  notes: [
    { h: "Passiv: be + partisipp", p: "Norsk har to passivformer: «skjemaet sendes» og «skjemaet blir sendt». Engelsk har bare én: be + partisipp. The form must be sent by Friday. Your application has been received. «The form sends» betyr noe helt annet.",
      table: [["Norsk", "Engelsk"], ["Skjemaet må sendes innen fredag.", "The form must be sent by Friday."], ["Søknaden din er mottatt.", "Your application has been received."], ["Brevet ble sendt i går.", "The letter was sent yesterday."]] },
    { h: "by og until", p: "Norsk «innen» = by: Send it by Friday (senest fredag). Norsk «til» om varighet = until: The office is open until four. «Send it until Friday» er en vanlig norsk feil." },
    { h: "Adresser og datoer", p: "Britisk dato: 17 May 2025 eller 17/05/2025. Amerikansk: May 17, 2025 eller 05/17/2025. Skriv måneden med bokstaver i formelle tekster for å unngå misforståelser." }
  ],
  tip: "«innen fredag» er by Friday, ikke until Friday. Og ikke oversett «personnummer» med «person number»; i Storbritannia heter tilsvarende nummer National Insurance number, i USA Social Security number.",
  words: [
    W("form", "skjema", "", "Please fill in this form.", "Vennligst fyll ut dette skjemaet."),
    W("fill in", "fylle ut", "", "Fill in your name and address.", "Fyll inn navn og adresse.", { note: "amerikansk også: fill out" }),
    W("apply for", "søke om", "", "I want to apply for a visa.", "Jeg vil søke om visum."),
    W("application", "søknad", "", "Your application has been received.", "Søknaden din er mottatt."),
    W("signature", "underskrift", "", "We need your signature here.", "Vi trenger underskriften din her."),
    W("date of birth", "fødselsdato", "", "Write your date of birth.", "Skriv fødselsdatoen din."),
    W("proof of address", "bekreftelse på adresse", "", "Bring a bill as proof of address.", "Ta med en regning som bekreftelse på adressen."),
    W("by", "innen (senest)", "", "Send the form by Friday.", "Send skjemaet innen fredag."),
    W("until", "til (om varighet)", "", "The office is open until four.", "Kontoret er åpent til fire."),
    W("council", "kommune", "", "Contact the council about rubbish collection.", "Kontakt kommunen om søppeltømming."),
    W("tax", "skatt", "", "How much tax do you pay?", "Hvor mye skatt betaler du?"),
    W("valid", "gyldig", "", "Your passport is no longer valid.", "Passet ditt er ikke lenger gyldig."),
    W("renew", "fornye", "", "I need to renew my passport.", "Jeg må fornye passet."),
    W("queue", "kø, stå i kø", "", "There was a long queue at the office.", "Det var lang kø på kontoret.", { note: "amerikansk: line" }),
    W("received", "mottatt", "", "We have received your letter.", "Vi har mottatt brevet ditt.")
  ],
  dialogue: [["A", "Good morning. I'd like to renew my passport.", "God morgen. Jeg vil gjerne fornye passet."], ["B", "Have you filled in the application form?", "Har du fylt ut søknadsskjemaet?"], ["A", "Yes, here it is. Do you need a photo?", "Ja, her er det. Trenger dere bilde?"], ["B", "Yes, and your signature here, please.", "Ja, og underskriften din her."], ["A", "When will the new passport be ready?", "Når blir det nye passet klart?"], ["B", "It will be sent to you within three weeks.", "Det blir sendt til deg innen tre uker."]],
  quiz: [
    { q: "«Skjemaet må sendes innen fredag.»", o: ["The form must be sent by Friday.", "The form must send until Friday.", "The form must be sent until Friday.", "The form sends by Friday."], a: 0, e: "Passiv: must be sent. innen = by." },
    { q: "«Butikken er åpen til ti.»", o: ["The shop is open until ten.", "The shop is open by ten.", "The shop is open to ten o'clock until."], a: 0, e: "Varighet: until." },
    { q: "«Søknaden din er mottatt.»", o: ["Your application has been received.", "Your application has received.", "Your application is receiving.", "Your application received."], a: 0, e: "Passiv i present perfect: has been + partisipp." },
    { q: "Hva betyr «fill in a form»?", o: ["fylle ut et skjema", "levere et skjema", "lage et skjema"], a: 0, e: "fill in (britisk) / fill out (amerikansk) = fylle ut." },
    { q: "«05/06/2025» på et amerikansk skjema er ...", o: ["6. mai 2025", "5. juni 2025", "umulig å vite"], a: 0, e: "Amerikansk rekkefølge: måned/dag/år." }
  ],
  review: ["Passiv: be + partisipp (must be sent, has been received).", "innen = by; til (varighet) = until.", "Amerikansk dato: måned/dag/år."]
},
{
  id: "nb-b1-2", title: "Jobbintervju", no: "Job interview", icon: "briefcase",
  intro: "Vi forbereder et jobbintervju på engelsk: å presentere seg, snakke om erfaring og styrker, og stille spørsmål.",
  notes: [
    { h: "Selg deg selv", p: "Norsk kultur er beskjeden, og nordmenn sier ofte «I'm quite good at ...». I engelskspråklige intervjuer forventes det at du er tydelig på det du kan: I have strong experience in ... I'm very good at ... I successfully led a team of five. Vær konkret og gi eksempler." },
    { h: "experience: tellelig eller ikke?", p: "experience som kunnskap er utellelig: I have a lot of experience (ikke «experiences»). Som enkelthendelse kan det telles: It was a great experience." },
    { h: "worked as a ...", p: "Som med yrker ellers trenger engelsk artikkel: I worked as a nurse for five years. Om nåværende jobb: I've been working as an engineer since 2019 (present perfect progressiv for noe som fortsatt pågår)." }
  ],
  tip: "«I have many experiences with customers» høres feil ut. Si «I have a lot of experience with customers». Og vær ikke for beskjeden: «I'm not bad at Excel» kan høres ut som at du er dårlig. Si «I'm very good at Excel».",
  words: [
    W("CV", "CV", "", "Please send your CV and a cover letter.", "Send CV og søknadsbrev.", { note: "amerikansk: résumé" }),
    W("cover letter", "søknadsbrev", "", "My cover letter is one page.", "Søknadsbrevet mitt er én side."),
    W("experience", "erfaring", "", "I have five years' experience in sales.", "Jeg har fem års erfaring fra salg.", { note: "utellelig: a lot of experience" }),
    W("skills", "ferdigheter", "", "What skills do you have?", "Hvilke ferdigheter har du?"),
    W("strength", "styrke", "", "My greatest strength is teamwork.", "Min største styrke er samarbeid."),
    W("weakness", "svakhet", "", "What is your biggest weakness?", "Hva er din største svakhet?"),
    W("responsible for", "ansvarlig for", "", "I was responsible for a team of six.", "Jeg var ansvarlig for et team på seks."),
    W("position", "stilling", "", "I'm applying for the position of nurse.", "Jeg søker på stillingen som sykepleier."),
    W("reference", "referanse", "", "Can you give us two references?", "Kan du gi oss to referanser?"),
    W("qualified", "kvalifisert", "", "She is highly qualified.", "Hun er svært godt kvalifisert."),
    W("challenge", "utfordring", "", "I like a challenge.", "Jeg liker utfordringer."),
    W("salary expectations", "lønnskrav", "", "What are your salary expectations?", "Hva er lønnskravet ditt?"),
    W("start date", "tiltredelse, oppstart", "", "When is the start date?", "Når er tiltredelsen?"),
    W("hire", "ansette", "", "They hired three new people.", "De ansatte tre nye."),
    W("look forward to", "glede seg til", "", "I look forward to hearing from you.", "Jeg ser fram til å høre fra deg.", { note: "+ -ing" })
  ],
  dialogue: [["A", "Tell me a little about yourself.", "Fortell litt om deg selv."], ["B", "I'm a nurse. I've worked in a hospital for six years.", "Jeg er sykepleier. Jeg har jobbet på sykehus i seks år."], ["A", "What is your greatest strength?", "Hva er din største styrke?"], ["B", "I stay calm under pressure. Last year I was responsible for a busy ward.", "Jeg holder hodet kaldt under press. I fjor var jeg ansvarlig for en travel avdeling."], ["A", "Why do you want this position?", "Hvorfor vil du ha denne stillingen?"], ["B", "I want a new challenge, and I have a lot of experience with children.", "Jeg vil ha en ny utfordring, og jeg har mye erfaring med barn."]],
  quiz: [
    { q: "«Jeg har mye erfaring med kunder.»", o: ["I have a lot of experience with customers.", "I have many experiences with customers.", "I have much experiences with customers.", "I have an experience with customers."], a: 0, e: "experience som kunnskap er utellelig." },
    { q: "«Jeg jobbet som lærer.»", o: ["I worked as a teacher.", "I worked as teacher.", "I worked like a teacher.", "I worked for teacher."], a: 0, e: "Yrker trenger a/an: as a teacher." },
    { q: "Hva passer best i et engelsk intervju?", o: ["I'm very good at planning. For example, I ...", "I'm not so bad at planning, maybe.", "Planning is OK for me, I think."], a: 0, e: "Vær tydelig og konkret, gjerne med et eksempel." },
    { q: "«Jeg ser fram til å høre fra deg.»", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I look forward hearing you.", "I am looking forward hear from you."], a: 0, e: "look forward to + -ing." },
    { q: "Hva betyr «hire»?", o: ["ansette", "leie ut", "høre"], a: 0, e: "hire = ansette (også leie, f.eks. hire a car)." }
  ],
  review: ["Vær tydelig om det du kan, med eksempler.", "experience (kunnskap) er utellelig.", "I worked as a nurse; look forward to + -ing."]
},
{
  id: "nb-b1-3", title: "Meninger og sammenligninger", no: "Opinions and comparisons", icon: "scale",
  intro: "Vi uttrykker meninger, er enige og uenige, og sammenligner. Her finnes noen av de mest typiske norske feilene.",
  notes: [
    { h: "Å mene", p: "Norsk «mene» oversettes vanligvis med think: I think we should go. «I mean» betyr «jeg mener (altså) / det jeg vil si er»: I mean, it's not a big problem. «I mean that we should go» høres rart ut i betydningen «jeg synes»." },
    { h: "Enig: agree er et verb", p: "agree er et verb på engelsk, ikke et adjektiv. «I am agree» er feil. Si: I agree. I don't agree. I agree with you. Do you agree?",
      table: [["Feil", "Riktig"], ["I am agree.", "I agree."], ["I mean that it is wrong.", "I think it's wrong."], ["It is more easy.", "It's easier."], ["He is more old than me.", "He's older than me."]] },
    { h: "Komparativ", p: "Korte adjektiv: -er / -est: cheap, cheaper, the cheapest. Lange adjektiv: more / most: expensive, more expensive, the most expensive. Uregelmessige: good – better – best, bad – worse – worst. «than» = enn: bigger than." }
  ],
  tip: "«I am agree» og «I mean that ...» er to av de vanligste feilene nordmenn gjør. Si «I agree» og «I think that ...».",
  words: [
    W("I think", "jeg synes, jeg tror, jeg mener", "", "I think it's a good idea.", "Jeg synes det er en god idé."),
    W("in my opinion", "etter min mening", "", "In my opinion, it's too expensive.", "Etter min mening er det for dyrt."),
    W("agree", "være enig", "", "I agree with you.", "Jeg er enig med deg.", { note: "verb: I agree (ikke I am agree)" }),
    W("disagree", "være uenig", "", "I'm afraid I disagree.", "Jeg er dessverre uenig."),
    W("I mean", "jeg mener (altså), det jeg vil si", "", "I mean, it's not a big problem.", "Altså, det er ikke et stort problem."),
    W("better", "bedre", "", "The new phone is better.", "Den nye telefonen er bedre."),
    W("worse", "verre, dårligere", "", "The weather is worse today.", "Været er verre i dag."),
    W("than", "enn", "", "Oslo is bigger than Bergen.", "Oslo er større enn Bergen."),
    W("the most", "mest", "", "It's the most beautiful place in Norway.", "Det er det vakreste stedet i Norge."),
    W("advantage", "fordel", "", "One advantage is the price.", "En fordel er prisen."),
    W("disadvantage", "ulempe", "", "The main disadvantage is the noise.", "Den største ulempen er støyen."),
    W("on the other hand", "på den andre siden", "", "On the other hand, it's very safe.", "På den andre siden er det veldig trygt."),
    W("prefer", "foretrekke", "", "I prefer tea to coffee.", "Jeg foretrekker te framfor kaffe."),
    W("depend on", "komme an på", "", "It depends on the weather.", "Det kommer an på været."),
    W("exactly", "akkurat, nettopp", "", "Exactly! That's what I mean.", "Nettopp! Det er det jeg mener.")
  ],
  dialogue: [["A", "Is it better to live in the city or in the countryside?", "Er det bedre å bo i byen eller på landet?"], ["B", "I think the city is better. It's more exciting.", "Jeg synes byen er bedre. Det er mer spennende."], ["A", "I don't agree. The countryside is quieter and cheaper.", "Jeg er ikke enig. Landet er roligere og billigere."], ["B", "On the other hand, there are fewer jobs.", "På den andre siden er det færre jobber."], ["A", "That's true. I guess it depends on your job.", "Det er sant. Jeg antar det kommer an på jobben."]],
  quiz: [
    { q: "«Jeg er enig.»", o: ["I agree.", "I am agree.", "I agreed with.", "I'm agreeing me."], a: 0, e: "agree er et verb: I agree." },
    { q: "«Jeg mener at vi bør dra.»", o: ["I think we should go.", "I mean that we should go.", "I meaning we should go.", "I am mean we should go."], a: 0, e: "mene = think." },
    { q: "«Det er lettere.»", o: ["It's easier.", "It's more easy.", "It's more easier.", "It's easyer."], a: 0, e: "Korte adjektiv får -er: easy → easier." },
    { q: "«bad» i komparativ:", o: ["worse", "badder", "more bad", "worst"], a: 0, e: "bad – worse – worst." },
    { q: "«Jeg foretrekker te framfor kaffe.»", o: ["I prefer tea to coffee.", "I prefer tea than coffee.", "I prefer tea before coffee.", "I more like tea than coffee."], a: 0, e: "prefer A to B." }
  ],
  review: ["mene = think; I mean = altså.", "agree er et verb: I agree, I don't agree.", "-er/-est for korte, more/most for lange adjektiv."]
},
{
  id: "nb-b1-4", title: "Bank og penger", no: "Banking and money", icon: "bank",
  intro: "Vi åpner konto, snakker om lån og renter, og lærer en viktig felle med store tall.",
  notes: [
    { h: "Fellen: billion", p: "Engelsk «billion» er tusen millioner, altså norsk milliard. Norsk «billion» (en million millioner) heter «trillion» på engelsk. Les derfor engelske nyheter om økonomi med omhu.",
      table: [["Tall", "Norsk", "Engelsk"], ["1 000 000", "en million", "a million"], ["1 000 000 000", "en milliard", "a billion"], ["1 000 000 000 000", "en billion", "a trillion"]] },
    { h: "Tall og skilletegn", p: "Engelsk bruker komma som tusenskilletegn og punktum som desimaltegn: 1,500.75. Norsk skriver 1 500,75. «2,5 million» skrives 2.5 million." },
    { h: "earn og make money", p: "tjene penger = earn money eller make money (ikke «serve money»). lønn = salary (månedslønn) eller wages (timelønn). lån = loan; boliglån = mortgage." }
  ],
  tip: "Norsk «milliard» er billion på engelsk. «The state has 2 billion kroner» betyr 2 milliarder. Og skriv 1,500 for tusen fem hundre, ikke 1.500.",
  words: [
    W("account", "konto", "", "I'd like to open an account.", "Jeg vil gjerne åpne en konto."),
    W("loan", "lån", "", "We applied for a loan.", "Vi søkte om lån."),
    W("mortgage", "boliglån", "", "Our mortgage is very high.", "Boliglånet vårt er veldig høyt.", { note: "t er stum: [mårgidj]" }),
    W("interest rate", "rente", "", "The interest rate has gone up.", "Renta har gått opp."),
    W("savings", "sparepenger", "", "We have some savings.", "Vi har litt sparepenger."),
    W("earn", "tjene", "", "She earns a good salary.", "Hun tjener godt."),
    W("billion", "milliard", "", "The project cost two billion dollars.", "Prosjektet kostet to milliarder dollar.", { note: "ikke norsk billion!" }),
    W("withdraw", "ta ut (penger)", "", "I want to withdraw some cash.", "Jeg vil ta ut litt kontanter."),
    W("transfer", "overføring, overføre", "", "I made a transfer to my sister.", "Jeg overførte penger til søsteren min."),
    W("balance", "saldo", "", "What's my balance?", "Hva er saldoen min?"),
    W("debit card", "bankkort", "", "Can I pay with a debit card?", "Kan jeg betale med bankkort?"),
    W("cash machine", "minibank", "", "Is there a cash machine near here?", "Er det en minibank i nærheten?", { note: "amerikansk: ATM" }),
    W("fee", "gebyr", "", "There is no fee for this account.", "Det er ikke noe gebyr på denne kontoen."),
    W("afford", "ha råd til", "", "We can't afford a new car.", "Vi har ikke råd til ny bil."),
    W("budget", "budsjett", "", "We need to stick to our budget.", "Vi må holde budsjettet.")
  ],
  dialogue: [["A", "Good afternoon. I'd like to open an account.", "God ettermiddag. Jeg vil gjerne åpne en konto."], ["B", "Of course. Do you have ID and proof of address?", "Selvfølgelig. Har du legitimasjon og bekreftelse på adresse?"], ["A", "Yes. Is there a monthly fee?", "Ja. Er det et månedlig gebyr?"], ["B", "No, it's free. You'll get a debit card in the post.", "Nei, den er gratis. Du får bankkort i posten."], ["A", "Great. And what is the interest rate on savings?", "Flott. Og hva er renta på sparing?"], ["B", "At the moment it's three per cent.", "For øyeblikket er den tre prosent."]],
  quiz: [
    { q: "Norsk «2 milliarder kroner» på engelsk:", o: ["2 billion kroner", "2 milliard kroner", "2 trillion kroner", "2 million kroner"], a: 0, e: "milliard = billion." },
    { q: "Engelsk «one trillion» er på norsk ...", o: ["en billion", "en milliard", "en million"], a: 0, e: "trillion = 10¹² = norsk billion." },
    { q: "Hvordan skrives 1 500,50 på engelsk?", o: ["1,500.50", "1.500,50", "1 500,50"], a: 0, e: "Komma som tusenskilletegn, punktum som desimaltegn." },
    { q: "«Vi har ikke råd til det.»", o: ["We can't afford it.", "We don't have advice for it.", "We can't buy it advice.", "We haven't afford."], a: 0, e: "ha råd til = afford." },
    { q: "Hva er et «mortgage»?", o: ["boliglån", "pantelån i en pantelåner", "gjeldsbrev for bil"], a: 0, e: "mortgage = boliglån." }
  ],
  review: ["billion = milliard; trillion = billion.", "1,500.50 (komma for tusen, punktum for desimal).", "earn / make money; can't afford."]
},
{
  id: "nb-b1-5", title: "Utdanning og betingelser", no: "Education and conditionals", icon: "school",
  intro: "Vi snakker om skole og studier og lærer betingelsessetninger med if.",
  notes: [
    { h: "Første kondisjonal: mulig framtid", p: "If + presens, will + verb: If it rains, we'll stay inside. Ikke will i if-leddet: «If it will rain» er feil." },
    { h: "Andre kondisjonal: tenkt situasjon", p: "If + preteritum, would + verb: If I had more time, I would study more. Med be bruker man gjerne were: If I were you, I would apply. Norsk: Hvis jeg var deg, ville jeg søkt.",
      table: [["Type", "if-ledd", "hovedledd"], ["Mulig", "If I pass the exam,", "I'll be happy."], ["Tenkt", "If I had money,", "I would travel."], ["Råd", "If I were you,", "I would ask."]] },
    { h: "Skoleord", p: "lese til eksamen = study for an exam (ikke «read to the exam»). ta en eksamen = take an exam. bestå = pass, stryke = fail. elev = pupil (britisk) eller student. forelesning = lecture." }
  ],
  tip: "«I read to the exam» er en direkte oversettelse som ikke gir mening. Si «I'm studying for the exam». Og husk: ikke will etter if: «If I will have time» er feil.",
  words: [
    W("study for", "lese til, øve til", "", "I'm studying for my maths exam.", "Jeg leser til matteeksamen."),
    W("take an exam", "ta en eksamen", "", "I take the exam in June.", "Jeg tar eksamen i juni."),
    W("pass", "bestå", "", "Did you pass the test?", "Besto du prøven?"),
    W("fail", "stryke", "", "He failed his driving test.", "Han strøk på oppkjøringen."),
    W("degree", "grad (utdanning)", "", "She has a degree in law.", "Hun har en grad i juss."),
    W("lecture", "forelesning", "", "The lecture starts at nine.", "Forelesningen begynner klokka ni.", { note: "ikke «lektyre»" }),
    W("pupil", "elev", "", "There are 25 pupils in the class.", "Det er 25 elever i klassen."),
    W("grade", "karakter", "", "She got good grades.", "Hun fikk gode karakterer.", { note: "britisk også: marks" }),
    W("subject", "fag", "", "My favourite subject is history.", "Favorittfaget mitt er historie."),
    W("If I were you", "Hvis jeg var deg", "", "If I were you, I would apply.", "Hvis jeg var deg, ville jeg søkt."),
    W("would", "ville", "", "I would travel more if I could.", "Jeg ville reist mer om jeg kunne."),
    W("unless", "med mindre", "", "You won't pass unless you study.", "Du består ikke med mindre du leser."),
    W("scholarship", "stipend", "", "He got a scholarship to study abroad.", "Han fikk stipend for å studere i utlandet."),
    W("homework", "lekser", "", "I have a lot of homework.", "Jeg har mange lekser.", { note: "utellelig" }),
    W("graduate", "fullføre (utdanning), uteksaminert", "", "She graduated in 2020.", "Hun ble ferdig i 2020.")
  ],
  dialogue: [["A", "Are you ready for the exam?", "Er du klar for eksamen?"], ["B", "Not really. If I study all weekend, I'll pass.", "Ikke helt. Hvis jeg leser hele helgen, består jeg."], ["A", "If I were you, I would start tonight.", "Hvis jeg var deg, ville jeg begynt i kveld."], ["B", "You're right. If I fail, I'll have to take it again.", "Du har rett. Hvis jeg stryker, må jeg ta den igjen."], ["A", "You won't fail unless you give up!", "Du stryker ikke med mindre du gir opp!"]],
  quiz: [
    { q: "«Jeg leser til eksamen.»", o: ["I'm studying for the exam.", "I'm reading to the exam.", "I'm reading for exam.", "I'm learning to the exam."], a: 0, e: "lese til eksamen = study for an exam." },
    { q: "«Hvis det regner, blir vi inne.»", o: ["If it rains, we'll stay inside.", "If it will rain, we stay inside.", "If it will rain, we'll stay inside.", "If it rained, we'll stay inside."], a: 0, e: "Første kondisjonal: if + presens, will + verb." },
    { q: "«Hvis jeg hadde mer tid, ville jeg reist.»", o: ["If I had more time, I would travel.", "If I would have more time, I travel.", "If I have more time, I would travel.", "If I had more time, I will travel."], a: 0, e: "Andre kondisjonal: if + preteritum, would + verb." },
    { q: "Hva betyr «fail» i skolesammenheng?", o: ["stryke", "falle", "bestå"], a: 0, e: "fail = stryke; pass = bestå." },
    { q: "Hva betyr «lecture»?", o: ["forelesning", "lektyre", "lekse"], a: 0, e: "lecture = forelesning; lektyre er reading." }
  ],
  review: ["If + presens, will: If it rains, we'll stay.", "If + preteritum, would: If I were you, I would ...", "study for an exam; pass / fail."]
},
{
  id: "nb-b1-6", title: "Å fortelle", no: "Telling stories", icon: "chat",
  intro: "Vi forteller historier om fortiden med past continuous, past perfect og used to.",
  notes: [
    { h: "Past continuous: was/were + -ing", p: "Noe som pågikk da noe annet skjedde: I was cooking when the phone rang. Norsk bruker ofte «holdt på med å» eller bare preteritum: Jeg lagde mat da telefonen ringte." },
    { h: "Past perfect: had + partisipp", p: "Noe som skjedde før noe annet i fortiden, som norsk pluskvamperfektum: When I arrived, the train had already left (Da jeg kom, hadde toget allerede gått)." },
    { h: "used to = pleide å", p: "Vaner i fortiden som ikke gjelder lenger: I used to smoke (jeg røykte før / pleide å røyke). Ikke bland med «be used to» = være vant til: I'm used to the cold.",
      table: [["Engelsk", "Norsk"], ["I used to live in Bodø.", "Jeg bodde i Bodø før."], ["I'm used to the cold.", "Jeg er vant til kulda."], ["I'm getting used to it.", "Jeg begynner å venne meg til det."]] }
  ],
  tip: "«I am used to smoke» betyr ingenting. Si «I used to smoke» (pleide å) eller «I'm used to the noise» (er vant til). Etter «be used to» kommer substantiv eller -ing: I'm used to getting up early.",
  words: [
    W("used to", "pleide å, før", "", "I used to play football.", "Jeg spilte fotball før."),
    W("be used to", "være vant til", "", "I'm used to the cold.", "Jeg er vant til kulda."),
    W("while", "mens", "", "I was reading while he was cooking.", "Jeg leste mens han lagde mat."),
    W("suddenly", "plutselig", "", "Suddenly the lights went out.", "Plutselig gikk lyset."),
    W("already", "allerede", "", "The film had already started.", "Filmen hadde allerede begynt."),
    W("then", "så, deretter", "", "Then we went home.", "Så dro vi hjem."),
    W("after that", "etter det", "", "After that, we had dinner.", "Etter det spiste vi middag."),
    W("in the end", "til slutt", "", "In the end, everything was fine.", "Til slutt gikk alt bra."),
    W("happen", "skje", "", "What happened?", "Hva skjedde?"),
    W("accident", "ulykke", "", "He had an accident on the way home.", "Han var med i en ulykke på vei hjem."),
    W("lose", "miste, tape", "", "I lost my keys.", "Jeg mistet nøklene.", { note: "lose – lost – lost" }),
    W("find", "finne", "", "Luckily I found them.", "Heldigvis fant jeg dem.", { note: "find – found – found" }),
    W("luckily", "heldigvis", "", "Luckily, nobody was hurt.", "Heldigvis ble ingen skadet."),
    W("realise", "innse, skjønne", "", "I realised I was late.", "Jeg skjønte at jeg var sen.", { note: "amerikansk: realize" }),
    W("rang", "ringte", "", "The phone rang twice.", "Telefonen ringte to ganger.", { note: "ring – rang – rung" })
  ],
  dialogue: [["A", "What happened to your arm?", "Hva har skjedd med armen din?"], ["B", "I was cycling to work when a car suddenly stopped.", "Jeg syklet til jobb da en bil plutselig stoppet."], ["A", "Oh no! Did you fall?", "Å nei! Falt du?"], ["B", "Yes. I didn't realise I had broken it.", "Ja. Jeg skjønte ikke at jeg hadde brukket den."], ["A", "Do you still cycle to work?", "Sykler du fortsatt til jobb?"], ["B", "I used to, but now I take the bus.", "Det gjorde jeg før, men nå tar jeg bussen."]],
  quiz: [
    { q: "«Jeg røykte før.»", o: ["I used to smoke.", "I am used to smoke.", "I use to smoking.", "I was used smoke."], a: 0, e: "Vane i fortiden: used to + infinitiv." },
    { q: "«Jeg er vant til kulda.»", o: ["I'm used to the cold.", "I used to the cold.", "I'm use to the cold.", "I'm used the cold."], a: 0, e: "være vant til = be used to." },
    { q: "«Jeg lagde mat da telefonen ringte.»", o: ["I was cooking when the phone rang.", "I cooked when the phone was ringing.", "I was cooking when the phone was rung.", "I am cooking when the phone rang."], a: 0, e: "Pågående handling (was cooking) avbrutt av en kort handling (rang)." },
    { q: "«Da jeg kom, hadde toget gått.»", o: ["When I arrived, the train had left.", "When I arrived, the train has left.", "When I had arrived, the train left.", "When I arrive, the train had left."], a: 0, e: "Det som skjedde først: past perfect (had left)." },
    { q: "Hva betyr «in the end»?", o: ["til slutt", "på slutten av en bok", "i enden av gata"], a: 0, e: "in the end = til slutt." }
  ],
  review: ["was/were + -ing: pågående handling i fortiden.", "had + partisipp: det som skjedde før.", "used to = pleide å; be used to = være vant til."]
}
];

export default atLevel("B1", B1);
