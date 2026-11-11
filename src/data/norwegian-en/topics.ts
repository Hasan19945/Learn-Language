import { N, Q, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";
import { HEALTH_STORIES, IT_STORIES } from "./stories";

const B1: LessonDef[] = [
{
  id: "ne-b1-health", title: "Health: doctors and hospitals", no: "Helse: lege og sykehus", icon: "health", story: HEALTH_STORIES.b1,
  intro: "Finding your way around the Norwegian health system: your GP, the out-of-hours doctor and the hospital; explaining symptoms and booking an appointment.",
  notes: [
    { h: "Where do you go?", p: "In Norway you go to your fastlege (GP) first. You normally get to hospital through their henvisning (referral). Out of hours, for urgent but not life-threatening problems, call legevakt (116 117). In a life-threatening situation, call 113.",
      table: [["Situation", "Where?", "Phone"], ["Normal complaint", "fastlege", "your GP"], ["Urgent, out of hours", "legevakt", "116 117"], ["Life-threatening", "ambulanse / akuttmottak", "113"]] },
    { h: "Explaining symptoms", p: "Jeg har vondt i ... (My ... hurts.) Jeg har hatt feber i tre dager. (I have had a fever for three days.) For a duration, use har hatt + i." },
    { h: "A reflexive verb", p: "føle seg (feel) is reflexive: Jeg føler meg dårlig. Hun føler seg bedre. Du føler deg sliten." }
  ],
  tip: "Time here means appointment: bestille time means book an appointment, not order an hour. And \"for three days\" is i tre dager, not for tre dager.",
  words: [
    N("en", "fastlege", "fastlegen", "fastleger", "regular GP", "", "Jeg må ringe fastlegen min.", "I have to call my GP."),
    N("en", "legevakt", "legevakten", "legevakter", "out-of-hours doctor", "", "Legevakten er åpen hele natten.", "The out-of-hours service is open all night."),
    N("et", "sykehus", "sykehuset", "sykehus", "hospital", "", "Moren min ligger på sykehuset.", "My mother is in hospital."),
    N("et", "akuttmottak", "akuttmottaket", "akuttmottak", "emergency department", "", "Ambulansen kjørte ham til akuttmottaket.", "The ambulance took him to the emergency department."),
    W("bestille time", "book an appointment", "", "Jeg vil bestille time hos legen.", "I want to book an appointment with the doctor."),
    N("en", "henvisning", "henvisningen", "henvisninger", "referral", "", "Legen skrev en henvisning til sykehuset.", "The doctor wrote a referral to the hospital."),
    N("en", "resept", "resepten", "resepter", "prescription", "", "Du får resept på antibiotika.", "You'll get a prescription for antibiotics."),
    W("ha vondt i", "have a pain in", "", "Jeg har vondt i ryggen.", "My back hurts."),
    W("føle seg dårlig", "feel unwell", "", "Jeg føler meg dårlig i dag.", "I feel unwell today."),
    N("en", "smerte", "smerten", "smerter", "pain", "", "Smertene startet i går kveld.", "The pain started yesterday evening."),
    N("en", "undersøkelse", "undersøkelsen", "undersøkelser", "examination", "", "Undersøkelsen tar en halv time.", "The examination takes half an hour."),
    N("en", "blodprøve", "blodprøven", "blodprøver", "blood test", "", "Vi må ta en blodprøve.", "We have to do a blood test."),
    N("en", "sykmelding", "sykmeldingen", "sykmeldinger", "sick note", "", "Legen ga meg sykmelding i en uke.", "The doctor gave me a sick note for a week."),
    W("apotek", "pharmacy", "", "Du henter medisinen på apoteket.", "You collect the medicine at the pharmacy.", { g: "et", def: "apoteket", pl: "apotek" })
  ],
  dialogue: [["A", "Legekontoret, hva kan jeg hjelpe deg med?", "Doctor's surgery, how can I help you?"], ["B", "Jeg vil gjerne bestille time. Jeg har hatt vondt i magen i en uke.", "I'd like to book an appointment. My stomach has hurt for a week."], ["A", "Har du feber?", "Do you have a fever?"], ["B", "Nei, men jeg føler meg veldig dårlig.", "No, but I feel very unwell."], ["A", "Du kan komme i morgen klokka ni. Da tar vi en blodprøve.", "You can come tomorrow at nine. We'll do a blood test then."]],
  quiz: [
    Q("Your child has a high fever at night, but it's not life-threatening. Who do you call?", ["legevakt (116 117)", "fastlege", "apotek", "NAV"], "Urgent, out of hours: legevakt."),
    Q("\"I have been ill for three days.\"", ["Jeg har vært syk i tre dager.", "Jeg er syk for tre dager.", "Jeg var syk siden tre dager.", "Jeg blir syk tre dager."], "Still going on: har vært + i + time."),
    Q("What does \"bestille time\" mean?", ["book an appointment", "buy a watch", "set aside some time"], "time means appointment here."),
    Q("\"I feel unwell.\"", ["Jeg føler meg dårlig.", "Jeg føler dårlig.", "Jeg føler seg dårlig.", "Meg føler jeg dårlig."], "Reflexive: jeg føler meg, han føler seg."),
    Q("What does \"henvisning\" mean?", ["a referral to another doctor", "a prescription", "a sick note", "an appointment"], "You usually get to hospital with a GP's henvisning.")
  ],
  review: ["fastlege → henvisning → sykehus; out of hours legevakt; life-threatening 113.", "Duration: Jeg har hatt feber i tre dager.", "Jeg har vondt i ..., Jeg føler meg dårlig, bestille time."]
},
{
  id: "ne-b1-it", title: "IT: computers and software", no: "IT: data og programvare", icon: "code", story: IT_STORIES.b1,
  intro: "Talking about computers at work and at home: files, passwords, updates, error messages and asking IT support for help.",
  notes: [
    { h: "Imperatives", p: "Instructions use the imperative. Drop the final -e of the infinitive: å installere → Installer! å starte → Start! å laste ned → Last ned! Verbs like å gå stay the same: Gå!",
      table: [["Infinitive", "Imperative", "English"], ["å lagre", "Lagre filen!", "Save the file!"], ["å starte på nytt", "Start på nytt!", "Restart!"], ["å laste ned", "Last ned appen!", "Download the app!"]] },
    { h: "Saying it doesn't work", p: "Det virker ikke. (It doesn't work.) Jeg får ikke logget inn. (I can't log in.) Jeg får en feilmelding. (I get an error message.) få + ikke + participle is very common for \"can't manage to\"." },
    { h: "data in Norwegian", p: "Data means both \"data\" and, in everyday speech, \"computer\": Jeg sitter på data. The formal word is datamaskin, and a laptop is en bærbar PC." }
  ],
  tip: "Don't say \"Jeg kan ikke logge inn\" when something is blocking you: \"Jeg får ikke logget inn\" is more natural. And laste ned is download, laste opp is upload, installere is install.",
  words: [
    N("en", "programvare", "programvaren", "programvarer", "software", "", "Vi bruker ny programvare på jobben.", "We use new software at work."),
    N("et", "passord", "passordet", "passord", "password", "", "Jeg har glemt passordet mitt.", "I've forgotten my password."),
    N("en", "fil", "filen", "filer", "file", "", "Hvor lagret du filen?", "Where did you save the file?"),
    N("en", "oppdatering", "oppdateringen", "oppdateringer", "update", "", "Oppdateringen tar ti minutter.", "The update takes ten minutes."),
    N("en", "feilmelding", "feilmeldingen", "feilmeldinger", "error message", "", "Jeg får en feilmelding på skjermen.", "I get an error message on the screen."),
    N("en", "skjerm", "skjermen", "skjermer", "screen", "", "Skjermen er helt svart.", "The screen is completely black."),
    N("et", "nettverk", "nettverket", "nettverk", "network", "", "Er du koblet til nettverket?", "Are you connected to the network?"),
    N("en", "server", "serveren", "servere", "server", "", "Serveren er nede akkurat nå.", "The server is down right now."),
    N("en", "database", "databasen", "databaser", "database", "", "Kundene ligger i databasen.", "The customers are in the database."),
    W("laste ned", "download", "", "Du kan laste ned appen her.", "You can download the app here."),
    W("installere", "install", "", "Jeg må installere programmet på nytt.", "I have to install the program again."),
    W("lagre", "save", "", "Husk å lagre dokumentet.", "Remember to save the document."),
    W("logge inn", "log in", "", "Jeg får ikke logget inn.", "I can't log in."),
    W("starte på nytt", "restart", "", "Prøv å starte maskinen på nytt.", "Try restarting the machine.")
  ],
  dialogue: [["A", "IT-support, hva er problemet?", "IT support, what's the problem?"], ["B", "Jeg får ikke logget inn. Jeg får en feilmelding.", "I can't log in. I get an error message."], ["A", "Har du prøvd å starte maskinen på nytt?", "Have you tried restarting the machine?"], ["B", "Ja, men det virker ikke.", "Yes, but it doesn't work."], ["A", "Da må vi endre passordet ditt. Vent litt.", "Then we have to change your password. Wait a moment."]],
  quiz: [
    Q("\"Save the file!\"", ["Lagre filen!", "Lagrer filen!", "Å lagre filen!", "Filen lagre!"], "Imperative: lagre filen, without -r."),
    Q("\"I can't log in.\"", ["Jeg får ikke logget inn.", "Jeg ikke får logge inn.", "Jeg kan ikke logget inn.", "Jeg logger ikke får inn."], "få + ikke + participle."),
    Q("What does \"laste ned\" mean?", ["download", "upload", "delete", "close"], "laste ned = download; laste opp = upload."),
    Q("\"I've forgotten my password.\"", ["Jeg har glemt passordet mitt.", "Jeg har glemt koden min av data.", "Jeg glemmer passordet meg."], "password = passord."),
    Q("What does \"Serveren er nede\" mean?", ["The server is down.", "The server is downstairs.", "The server is new."], "nede means out of action here.")
  ],
  review: ["Imperative: Lagre! Start på nytt! Last ned!", "Jeg får ikke logget inn; Det virker ikke; Jeg får en feilmelding.", "programvare, passord, fil, oppdatering, server, database."]
}
];

const B2: LessonDef[] = [
{
  id: "ne-b2-health", title: "Health: illnesses and treatment", no: "Helse: sykdommer og behandling", icon: "health", story: HEALTH_STORIES.b2,
  intro: "Names of common illnesses, talking about diagnosis and treatment, understanding the doctor and asking the right questions.",
  notes: [
    { h: "Names of illnesses", p: "Most illness names take no article: Han har diabetes. Hun har astma. Jeg har høyt blodtrykk. Sudden events use få: Han fikk hjerteinfarkt. Hun fikk hjerneslag.",
      table: [["Norwegian", "English", "Pattern"], ["diabetes", "diabetes", "ha diabetes"], ["høyt blodtrykk", "high blood pressure", "ha høyt blodtrykk"], ["hjerteinfarkt", "heart attack", "få hjerteinfarkt"], ["hjerneslag", "stroke", "få hjerneslag"], ["kreft", "cancer", "få kreft"]] },
    { h: "The passive with bli", p: "Hospital language often uses the bli-passive: Han ble operert i går. (He had surgery yesterday.) Hun blir behandlet med antibiotika. (She is being treated with antibiotics.)" },
    { h: "Questions for the doctor", p: "Hva er diagnosen? Finnes det bivirkninger? Hvor lenge varer behandlingen? Er sykdommen arvelig? Må jeg bli innlagt?" }
  ],
  tip: "\"I had an operation\" is passive in Norwegian: \"Jeg ble operert\". \"Jeg hadde en operasjon\" is understood but less natural. And \"He had a heart attack\" is \"Han fikk hjerteinfarkt\", with få (got), not ha.",
  words: [
    N("en", "sykdom", "sykdommen", "sykdommer", "illness", "", "Sykdommen er ikke farlig.", "The illness isn't dangerous."),
    N("en", "diagnose", "diagnosen", "diagnoser", "diagnosis", "", "Legen stilte diagnosen raskt.", "The doctor made the diagnosis quickly."),
    N("en", "behandling", "behandlingen", "behandlinger", "treatment", "", "Behandlingen varer i seks måneder.", "The treatment lasts six months."),
    N("en", "bivirkning", "bivirkningen", "bivirkninger", "side effect", "", "Medisinen har få bivirkninger.", "The medicine has few side effects."),
    N("en", "operasjon", "operasjonen", "operasjoner", "operation", "", "Operasjonen gikk bra.", "The operation went well."),
    W("bli operert", "have an operation", "", "Jeg skal bli operert i kneet.", "I'm going to have an operation on my knee."),
    N("en", "infeksjon", "infeksjonen", "infeksjoner", "infection", "", "Hun har en infeksjon i lungene.", "She has a lung infection."),
    W("høyt blodtrykk", "high blood pressure", "", "Faren min har høyt blodtrykk.", "My father has high blood pressure."),
    W("diabetes", "diabetes", "", "Hun har hatt diabetes i mange år.", "She has had diabetes for many years."),
    N("et", "hjerteinfarkt", "hjerteinfarktet", "hjerteinfarkt", "heart attack", "", "Han fikk hjerteinfarkt på jobben.", "He had a heart attack at work."),
    N("et", "hjerneslag", "hjerneslaget", "hjerneslag", "stroke", "", "Hjerneslag krever rask hjelp.", "A stroke needs fast help."),
    W("kreft", "cancer", "", "Kreften ble oppdaget tidlig.", "The cancer was found early."),
    W("kronisk", "chronic", "", "Astma er en kronisk sykdom.", "Asthma is a chronic illness."),
    W("arvelig", "hereditary", "", "Er denne sykdommen arvelig?", "Is this illness hereditary?"),
    W("bli frisk", "get well, recover", "", "Du blir snart frisk igjen.", "You'll soon be well again.")
  ],
  dialogue: [["A", "Vi har fått svar på prøvene. Du har diabetes type 2.", "We've got the test results. You have type 2 diabetes."], ["B", "Er det farlig? Må jeg bli innlagt?", "Is it dangerous? Do I have to be admitted?"], ["A", "Nei, sykdommen er kronisk, men den kan behandles godt.", "No, the illness is chronic, but it can be treated well."], ["B", "Har medisinen bivirkninger?", "Does the medicine have side effects?"], ["A", "Noen får vondt i magen, men det går vanligvis over.", "Some people get stomach pain, but it usually passes."]],
  quiz: [
    Q("\"I had an operation yesterday.\"", ["Jeg ble operert i går.", "Jeg gjorde operasjon i går.", "Jeg opererte i går.", "Jeg har operasjon i går."], "Having surgery is passive: ble operert."),
    Q("\"My father had a heart attack.\"", ["Faren min fikk hjerteinfarkt.", "Faren min hadde hjerte attack.", "Faren min gjorde hjerteinfarkt."], "Sudden illnesses take få."),
    Q("What does \"bivirkning\" mean?", ["side effect", "diagnosis", "infection", "recovery"], "bi- = side, virkning = effect."),
    Q("\"Is this illness hereditary?\"", ["Er denne sykdommen arvelig?", "Er denne sykdom arvelig?", "Har denne sykdommen arv?"], "denne + definite noun: denne sykdommen."),
    Q("What's true of a \"kronisk\" illness?", ["It lasts a long time.", "It goes away in days.", "It only affects children."], "kronisk = long-term.")
  ],
  review: ["ha diabetes / astma; få hjerteinfarkt / hjerneslag.", "The bli-passive: ble operert, blir behandlet.", "diagnose, behandling, bivirkning, kronisk, arvelig."]
},
{
  id: "ne-b2-it", title: "IT: software development", no: "IT: programvareutvikling", icon: "code", story: IT_STORIES.b2,
  intro: "Talking in a software team: requirements, testing, code review, releases. We also see how English terms are used in Norwegian technical talk.",
  notes: [
    { h: "English loanwords", p: "Norwegian developers use many English terms directly and conjugate them in Norwegian: å deploye – deployer – deployet; å merge – merger – merget. Their gender is usually en: en bug, en pull request. In documents you may prefer the Norwegian: feil, kodegjennomgang.",
      table: [["Everyday", "Formal", "English"], ["en bug", "en feil", "bug"], ["å deploye", "å rulle ut", "deploy"], ["code review", "kodegjennomgang", "code review"]] },
    { h: "Reporting status", p: "Use the perfect or bli-passive when a task is finished: Jeg har fikset feilen. Feilen er rettet. Endringen ble rullet ut i går. For work in progress: Jeg holder på med testene." },
    { h: "ikke in a clause", p: "In a clause, ikke goes before the verb: Testen feiler fordi databasen ikke svarer. (The test fails because the database isn't responding.)" }
  ],
  tip: "Norwegian has no \"-ing\" tense. To stress that something is ongoing, use holde på med: \"Jeg holder på med å skrive testene\". And remember the word order: fordi den ikke virker, not fordi den virker ikke.",
  words: [
    N("en", "utvikler", "utvikleren", "utviklere", "developer", "", "Hun jobber som utvikler i Oslo.", "She works as a developer in Oslo."),
    N("en", "kildekode", "kildekoden", "kildekoder", "source code", "", "Kildekoden ligger på GitHub.", "The source code is on GitHub."),
    N("et", "krav", "kravet", "krav", "requirement", "", "Kunden har endret kravene.", "The customer has changed the requirements."),
    N("en", "kodegjennomgang", "kodegjennomgangen", "kodegjennomganger", "code review", "", "Vi gjør kodegjennomgang før vi slår sammen.", "We do a code review before merging."),
    N("en", "versjon", "versjonen", "versjoner", "version", "", "Den nye versjonen kommer i mai.", "The new version comes out in May."),
    N("en", "versjonskontroll", "versjonskontrollen", "versjonskontroller", "version control", "", "Vi bruker Git til versjonskontroll.", "We use Git for version control."),
    N("et", "brukergrensesnitt", "brukergrensesnittet", "brukergrensesnitt", "user interface", "", "Brukergrensesnittet må bli enklere.", "The user interface must become simpler."),
    N("en", "lansering", "lanseringen", "lanseringer", "launch", "", "Lanseringen er utsatt til neste uke.", "The launch has been postponed to next week."),
    N("en", "oppgave", "oppgaven", "oppgaver", "task", "", "Jeg tar den neste oppgaven.", "I'll take the next task."),
    W("rulle ut", "deploy", "", "Vi ruller ut endringen i kveld.", "We're deploying the change tonight."),
    W("rette en feil", "fix a bug", "", "Hun rettet feilen på en time.", "She fixed the bug in an hour."),
    W("slå sammen", "merge", "", "Kan du slå sammen koden min?", "Can you merge my code?"),
    W("holde på med", "be working on", "", "Jeg holder på med testene nå.", "I'm working on the tests now."),
    W("feile", "fail (a test)", "", "To av testene feiler.", "Two of the tests are failing."),
    W("frist", "deadline", "", "Klarer vi fristen på fredag?", "Can we make the deadline on Friday?", { g: "en", def: "fristen", pl: "frister" })
  ],
  dialogue: [["A", "Hvordan går det med oppgaven din?", "How's your task going?"], ["B", "Jeg holder på med testene, men to av dem feiler.", "I'm working on the tests, but two of them are failing."], ["A", "Hvorfor det?", "Why's that?"], ["B", "Fordi databasen ikke svarer i testmiljøet.", "Because the database isn't responding in the test environment."], ["A", "Klarer vi å rulle ut i kveld?", "Can we deploy tonight?"], ["B", "Ja, hvis kodegjennomgangen er ferdig før fire.", "Yes, if the code review is done before four."]],
  quiz: [
    Q("\"because it doesn't work\"", ["fordi den ikke virker", "fordi den virker ikke", "fordi ikke den virker", "fordi virker den ikke"], "In a clause, ikke goes before the verb."),
    Q("\"I'm working on the tests now.\"", ["Jeg holder på med testene nå.", "Jeg holder testene nå på.", "Jeg er holdende testene.", "Jeg jobber på testene med."], "holde på med = be working on."),
    Q("What does \"rulle ut\" mean?", ["deploy", "delete", "test", "download"], "rulle ut = deploy."),
    Q("\"The bug has been fixed.\" (formal)", ["Feilen er rettet.", "Feilen er rette.", "Feilen retter.", "Feilen har rettet."], "er + participle states the result."),
    Q("What about saying \"en bug\" in a team?", ["It's normal in speech; feil is used in writing too.", "It's never used in Norwegian.", "Only et bug is correct."], "English terms are common; the formal word is feil.")
  ],
  review: ["Jeg holder på med ...; Feilen er rettet; Endringen ble rullet ut.", "Clause: fordi den ikke virker.", "krav, kodegjennomgang, versjonskontroll, lansering, rulle ut."]
}
];

const C1: LessonDef[] = [
{
  id: "ne-c1-health", title: "Health: hospital language", no: "Helse: sykehusspråk", icon: "health", story: HEALTH_STORIES.c1,
  intro: "Admission, discharge, patients' rights and the language of medical reports. For reading discharge letters and talking to doctors as a relative.",
  notes: [
    { h: "Report language", p: "Medical texts often drop the subject and use passives and nouns: Pasienten ble innlagt med brystsmerter. (The patient was admitted with chest pain.) Det ble besluttet å operere. (It was decided to operate.)" },
    { h: "Patients' rights", p: "Norway's pasient- og brukerrettighetsloven gives patients the right to information and to consent to treatment. Health staff have taushetsplikt (a duty of confidentiality); information only goes to pårørende with the patient's consent." },
    { h: "Softening probabilities", p: "Doctors avoid absolute statements: Det er sannsynlig at ... (It's likely that ...), Vi kan ikke utelukke ... (We can't rule out ...), Prognosen er usikker. (The prognosis is uncertain.) Svulsten viser seg å være godartet. (The tumour turns out to be benign.)" }
  ],
  tip: "pårørende has no single English word: it covers \"next of kin\" and \"close relatives\" and can include a partner or close friend. It's the same in singular and plural. And \"to be discharged\" is passive: \"bli utskrevet\".",
  words: [
    N("en", "overlege", "overlegen", "overleger", "consultant", "", "Overlegen går visitt klokka ni.", "The consultant does the round at nine."),
    N("en", "sengepost", "sengeposten", "sengeposter", "ward", "", "Hun ble flyttet til en annen sengepost.", "She was moved to another ward."),
    N("en", "innleggelse", "innleggelsen", "innleggelser", "hospital admission", "", "Innleggelsen varte i fem dager.", "The admission lasted five days."),
    W("bli utskrevet", "be discharged", "", "Pasienten blir utskrevet i morgen.", "The patient will be discharged tomorrow."),
    N("en", "epikrise", "epikrisen", "epikriser", "discharge summary", "", "Fastlegen får epikrisen etter utskrivning.", "The GP gets the discharge summary after discharge."),
    N("et", "samtykke", "samtykket", "samtykker", "consent", "", "Operasjonen krever skriftlig samtykke.", "The operation needs written consent."),
    N("en", "prognose", "prognosen", "prognoser", "prognosis", "", "Prognosen er god.", "The prognosis is good."),
    W("pårørende", "next of kin", "", "Pårørende kan ringe sengeposten.", "Next of kin can call the ward."),
    N("en", "taushetsplikt", "taushetsplikten", "", "duty of confidentiality", "", "Legen har taushetsplikt.", "The doctor has a duty of confidentiality."),
    W("godartet", "benign", "", "Svulsten var heldigvis godartet.", "The tumour was fortunately benign."),
    W("ondartet", "malignant", "", "Prøven viser en ondartet svulst.", "The sample shows a malignant tumour."),
    N("en", "svulst", "svulsten", "svulster", "tumour", "", "Svulsten må fjernes.", "The tumour must be removed."),
    N("en", "oppfølging", "oppfølgingen", "oppfølginger", "follow-up", "", "Du trenger oppfølging hos fastlegen.", "You need follow-up with your GP."),
    W("lindrende behandling", "palliative care", "", "Pasienten får lindrende behandling.", "The patient is receiving palliative care."),
    W("utelukke", "rule out", "", "Vi kan ikke utelukke infeksjon.", "We can't rule out an infection.")
  ],
  dialogue: [["A", "Jeg er datteren til pasienten. Kan du si noe om prognosen?", "I'm the patient's daughter. Can you say something about the prognosis?"], ["B", "Faren din har gitt samtykke, så jeg kan snakke med deg.", "Your father has given consent, so I can talk to you."], ["B", "Svulsten viste seg å være godartet, men vi kan ikke utelukke komplikasjoner.", "The tumour turned out to be benign, but we can't rule out complications."], ["A", "Når blir han utskrevet?", "When will he be discharged?"], ["B", "Trolig på fredag. Fastlegen får epikrisen og står for oppfølgingen.", "Probably on Friday. The GP gets the discharge summary and handles the follow-up."]],
  quiz: [
    Q("Why does the doctor ask for consent before giving information?", ["Taushetsplikt: information is shared only with permission.", "Because the hospital charges a fee.", "Because relatives may never be told anything."], "taushetsplikt = duty of confidentiality."),
    Q("\"The patient will be discharged tomorrow.\"", ["Pasienten blir utskrevet i morgen.", "Pasienten utskriver i morgen.", "Pasienten discharger i morgen.", "Pasienten skriver ut i morgen."], "bli utskrevet is passive."),
    Q("The opposite of \"godartet\"?", ["ondartet", "arvelig", "kronisk", "lindrende"], "godartet = benign; ondartet = malignant."),
    Q("Which sentence fits a report?", ["Pasienten ble innlagt med brystsmerter.", "Han hadde så vondt, så han dro inn.", "Vi tok ham inn fordi det var ille."], "Report language: passive and neutral."),
    Q("\"Vi kan ikke utelukke infeksjon.\"", ["We can't rule out an infection.", "There definitely is an infection.", "The infection can't be treated."], "utelukke = rule out.")
  ],
  review: ["Report language: Pasienten ble innlagt ...; Det ble besluttet ...", "innleggelse → behandling → utskrivning → epikrise → oppfølging.", "samtykke, taushetsplikt, pårørende, prognose, godartet/ondartet."]
},
{
  id: "ne-c1-it", title: "IT: architecture and security", no: "IT: arkitektur og sikkerhet", icon: "code", story: IT_STORIES.c1,
  intro: "Discussing technical decisions: architecture, technical debt, security holes, outages and data protection, which is taken seriously in Norway.",
  notes: [
    { h: "Defending a decision", p: "Avveiningen er at ... (The trade-off is that ...). Fordelen veier opp for ulempen. (The benefit outweighs the drawback.) På sikt lønner det seg. (It pays off in the long run.) Det forutsetter at ... (This assumes that ...)" },
    { h: "Incident reports", p: "A post-incident report is neutral and passive, and blames no individual: Nedetiden skyldtes en feilkonfigurasjon. (The downtime was caused by a misconfiguration.) Rotårsaken ble identifisert. Tiltak er iverksatt. (Measures have been taken.)" },
    { h: "Data protection", p: "Norway follows GDPR, and the regulator is Datatilsynet. A breach of personal data (personopplysninger) must be reported within 72 hours. personvern means privacy and data protection." }
  ],
  tip: "Be careful with skyldes (be due to): \"Feilen skyldes X\" has no preposition, unlike English \"is due to\". Also sikkerhet covers both English \"security\" and \"safety\".",
  words: [
    N("en", "arkitektur", "arkitekturen", "arkitekturer", "architecture", "", "Arkitekturen må tåle mer trafikk.", "The architecture must handle more traffic."),
    W("skalerbar", "scalable", "", "Løsningen er lett skalerbar.", "The solution is easily scalable."),
    W("teknisk gjeld", "technical debt", "", "Vi må betale ned teknisk gjeld.", "We have to pay down technical debt."),
    W("refaktorere", "refactor", "", "Vi refaktorerer modulen før lansering.", "We're refactoring the module before launch."),
    N("en", "avveining", "avveiningen", "avveininger", "trade-off", "", "Dette er en avveining mellom pris og ytelse.", "This is a trade-off between price and performance."),
    N("en", "sårbarhet", "sårbarheten", "sårbarheter", "vulnerability", "", "Vi fant en alvorlig sårbarhet.", "We found a serious vulnerability."),
    N("en", "kryptering", "krypteringen", "krypteringer", "encryption", "", "All trafikk bruker kryptering.", "All traffic uses encryption."),
    N("en", "nedetid", "nedetiden", "", "downtime", "", "Nedetiden varte i to timer.", "The downtime lasted two hours."),
    N("en", "rotårsak", "rotårsaken", "rotårsaker", "root cause", "", "Rotårsaken er fortsatt ukjent.", "The root cause is still unknown."),
    N("en", "responstid", "responstiden", "responstider", "response time", "", "Responstiden økte under lasten.", "The response time rose under load."),
    N("en", "tilgangskontroll", "tilgangskontrollen", "tilgangskontroller", "access control", "", "Tilgangskontrollen må strammes inn.", "Access control must be tightened."),
    N("en", "sikkerhetskopi", "sikkerhetskopien", "sikkerhetskopier", "backup", "", "Vi tar sikkerhetskopi hver natt.", "We take a backup every night."),
    N("et", "personvern", "personvernet", "", "privacy, data protection", "", "Personvern må vurderes fra starten.", "Privacy must be considered from the start."),
    N("et", "avvik", "avviket", "avvik", "reported incident", "", "Vi meldte avviket til Datatilsynet.", "We reported the incident to Datatilsynet."),
    W("skyldes", "be due to", "", "Feilen skyldes en gammel versjon.", "The error is due to an old version.")
  ],
  dialogue: [["A", "Hva skyldtes nedetiden i natt?", "What caused last night's downtime?"], ["B", "Rotårsaken var en feilkonfigurasjon. Tiltak er allerede iverksatt.", "The root cause was a misconfiguration. Measures have already been taken."], ["A", "Ble personopplysninger berørt?", "Was any personal data affected?"], ["B", "Nei, alt er kryptert, og sikkerhetskopien er intakt.", "No, everything is encrypted and the backup is intact."], ["A", "Bra. Men vi bør refaktorere modulen på sikt. Den tekniske gjelden vokser.", "Good. But we should refactor the module in the long run. The technical debt is growing."]],
  quiz: [
    Q("\"The error is due to an old version.\"", ["Feilen skyldes en gammel versjon.", "Feilen skylder en gammel versjon.", "Feilen skyldes til en gammel versjon.", "Feilen er skyld gammel versjon."], "skyldes + cause, no preposition."),
    Q("Which sentence fits an incident report?", ["Rotårsaken ble identifisert, og tiltak er iverksatt.", "Ola gjorde en dum feil.", "Noen rotet til alt i natt."], "Reports are neutral and blame nobody."),
    Q("What does \"sårbarhet\" mean?", ["vulnerability", "encryption", "backup", "response time"], "sårbar = vulnerable."),
    Q("\"På sikt lønner det seg.\"", ["It pays off in the long run.", "It's very expensive now.", "It ends soon."], "på sikt = in the long run."),
    Q("Who do you report personal data breaches to in Norway?", ["Datatilsynet", "NAV", "Skatteetaten", "Legevakten"], "Datatilsynet is the data protection regulator.")
  ],
  review: ["Avveiningen er at ...; Fordelen veier opp for ulempen.", "Reports: skyldes, rotårsak, tiltak er iverksatt.", "sårbarhet, kryptering, personvern, teknisk gjeld, skalerbar."]
}
];

export default [...atLevel("B1", B1), ...atLevel("B2", B2), ...atLevel("C1", C1)];
