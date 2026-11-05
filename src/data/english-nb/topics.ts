import { Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";

const B1: LessonDef[] = [
{
  id: "nb-b1-health", title: "Helse: lege og sykehus", no: "Health: doctors and hospitals", icon: "health",
  intro: "Vi bestiller legetime, forklarer plagene våre og finner fram på sykehuset. Du lærer også hvordan helsevesenet heter på engelsk.",
  notes: [
    { h: "Norsk og britisk helsevesen", p: "Fastlegen tilsvarer en GP i Storbritannia, og henvisning heter referral. Legevakt har ikke ett eksakt ord; si out-of-hours doctor. Akuttmottak heter A&E (britisk) eller ER (amerikansk). Nødnummeret er 999 i Storbritannia og 911 i USA.",
      table: [["Norsk", "Britisk", "Amerikansk"], ["fastlege", "GP", "family doctor"], ["akuttmottak", "A&E", "ER"], ["apotek", "chemist's / pharmacy", "drugstore / pharmacy"], ["nødnummer", "999", "911"]] },
    { h: "for og since", p: "Når noe fortsatt pågår, bruker engelsk present perfect: I've had a headache since Monday. (Jeg har hatt hodepine siden mandag.) I've had a cough for three days. for + varighet, since + starttidspunkt." },
    { h: "Vondt", p: "Norsk «ha vondt i» har flere engelske former: I have a headache, a sore throat, stomach ache. Eller: My back hurts. / I have a pain in my chest." }
  ],
  tip: "Falsk venn: norsk «resept» er prescription, mens engelsk receipt betyr kvittering og recipe betyr matoppskrift. Og «feber» heter ofte a temperature: «I have a temperature». Husk også a: «I have a headache», ikke «I have headache».",
  words: [
    W("GP", "fastlege", "", "I need to see my GP.", "Jeg må til fastlegen min."),
    W("A&E", "akuttmottak", "", "They took him to A&E.", "De tok ham til akuttmottaket.", { tts: "A and E", note: "Accident and Emergency" }),
    W("make an appointment", "bestille time", "", "I'd like to make an appointment.", "Jeg vil gjerne bestille time."),
    W("referral", "henvisning", "", "My GP gave me a referral.", "Fastlegen min ga meg en henvisning."),
    W("prescription", "resept", "", "You need a prescription for this.", "Du trenger resept på dette.", { note: "receipt = kvittering" }),
    W("symptom", "symptom", "", "What are your symptoms?", "Hvilke symptomer har du?"),
    W("a sore throat", "vondt i halsen", "", "I have a sore throat.", "Jeg har vondt i halsen."),
    W("a temperature", "feber", "", "My son has a temperature.", "Sønnen min har feber."),
    W("blood test", "blodprøve", "", "You need a blood test.", "Du må ta en blodprøve."),
    W("X-ray", "røntgen", "", "The X-ray shows a broken bone.", "Røntgenbildet viser et brudd."),
    W("examine", "undersøke", "", "The doctor examined my leg.", "Legen undersøkte beinet mitt."),
    W("sick note", "sykmelding", "", "My employer needs a sick note.", "Arbeidsgiveren min trenger en sykmelding."),
    W("ambulance", "ambulanse", "", "Please call an ambulance!", "Vær så snill, ring etter ambulanse!"),
    W("hurt", "gjøre vondt", "", "My back hurts.", "Jeg har vondt i ryggen.", { note: "hurt – hurt – hurt" })
  ],
  dialogue: [["A", "Good morning. What seems to be the problem?", "God morgen. Hva er problemet?"], ["B", "I've had a sore throat for a week, and I have a temperature.", "Jeg har hatt vondt i halsen i en uke, og jeg har feber."], ["A", "Let me examine you. Open your mouth, please.", "La meg undersøke deg. Åpne munnen, er du snill."], ["B", "Do I need a blood test?", "Trenger jeg en blodprøve?"], ["A", "No, it's an infection. I'll give you a prescription.", "Nei, det er en infeksjon. Jeg gir deg en resept."]],
  quiz: [
    Q("«Jeg har vært syk i tre dager.»", ["I have been ill for three days.", "I am ill for three days.", "I am ill since three days.", "I have been ill since three days."], "Pågående tilstand: present perfect + for."),
    Q("«Kan jeg få resepten?»", ["Can I have the prescription?", "Can I have the receipt?", "Can I have the recipe?", "Can I have the recept?"], "resept = prescription; receipt = kvittering; recipe = oppskrift."),
    Q("Hva heter «akuttmottak» i Storbritannia?", ["A&E", "GP", "ER", "NHS"], "A&E = Accident and Emergency. Amerikansk: ER."),
    Q("Hva betyr «referral»?", ["henvisning", "resept", "undersøkelse", "sykmelding"], "referral = henvisning til spesialist eller sykehus."),
    Q("Hva er riktig?", ["I have a headache.", "I have headache.", "I have the headpain.", "My head has vondt."], "headache tar a.")
  ],
  review: ["GP → referral → hospital; akutt: A&E / 999.", "I've had ... for / since ...: det pågår fortsatt.", "prescription = resept; receipt = kvittering."]
},
{
  id: "nb-b1-it", title: "IT: data og programvare", no: "IT: computers and software", icon: "code",
  intro: "Vi forklarer dataproblemer, ber IT-support om hjelp og lærer grunnleggende ord om programvare.",
  notes: [
    { h: "Falske venner", p: "Norsk «data» kan bety datamaskin: «Jeg sitter på data». Engelsk data betyr bare informasjon, så si computer. Norsk «program» om TV heter programme i britisk engelsk, men dataprogram skrives program overalt." },
    { h: "Verb eller substantiv?", p: "Toords verb blir ofte ett ord som substantiv: log in (logge inn) ↔ login (innloggingsinformasjon); back up (ta sikkerhetskopi) ↔ backup (sikkerhetskopi); set up (sette opp) ↔ setup (oppsett).",
      table: [["Verb", "Substantiv", "Eksempel"], ["log in", "login", "I can't log in. / Your login is wrong."], ["back up", "backup", "Back up your files. / Make a backup."], ["set up", "setup", "Set up the app. / The setup is easy."]] },
    { h: "Det virker ikke", p: "It doesn't work. / It isn't working. I keep getting an error message. (Jeg får feilmelding hele tiden.) keep + -ing brukes om noe som gjentar seg." }
  ],
  tip: "«Jeg sitter på data» blir ikke «I sit on data» på engelsk, men «I'm on the computer». «Laste ned» er download, «laste opp» er upload, og «installere» er install. Software er utellelig: «softwares» finnes ikke.",
  words: [
    W("software", "programvare", "", "We use new software at work.", "Vi bruker ny programvare på jobben.", { note: "utellelig" }),
    W("password", "passord", "", "I forgot my password.", "Jeg glemte passordet mitt."),
    W("file", "fil", "", "Where did you save the file?", "Hvor lagret du filen?"),
    W("update", "oppdatering; oppdatere", "", "The update takes ten minutes.", "Oppdateringen tar ti minutter."),
    W("error message", "feilmelding", "", "I keep getting an error message.", "Jeg får feilmelding hele tiden."),
    W("screen", "skjerm", "", "The screen is completely black.", "Skjermen er helt svart."),
    W("network", "nettverk", "", "Are you connected to the network?", "Er du koblet til nettverket?"),
    W("server", "server", "", "The server is down right now.", "Serveren er nede akkurat nå."),
    W("database", "database", "", "Customer data is stored in a database.", "Kundedata lagres i en database."),
    W("download", "laste ned", "", "You can download the app here.", "Du kan laste ned appen her."),
    W("install", "installere", "", "I need to install the program again.", "Jeg må installere programmet på nytt."),
    W("save", "lagre", "", "Don't forget to save your work.", "Ikke glem å lagre arbeidet ditt."),
    W("log in", "logge inn", "", "I can't log in to my account.", "Jeg får ikke logget inn på kontoen min."),
    W("restart", "starte på nytt", "", "Try to restart your computer.", "Prøv å starte datamaskinen på nytt.")
  ],
  dialogue: [["A", "IT support, how can I help you?", "IT-support, hva kan jeg hjelpe deg med?"], ["B", "I can't log in. I keep getting an error message.", "Jeg får ikke logget inn. Jeg får feilmelding hele tiden."], ["A", "Have you tried to restart your computer?", "Har du prøvd å starte datamaskinen på nytt?"], ["B", "Yes, but it still doesn't work.", "Ja, men det virker fortsatt ikke."], ["A", "OK. I'll reset your password. Please wait a moment.", "OK. Jeg tilbakestiller passordet ditt. Vent litt."]],
  quiz: [
    Q("«Jeg får ikke logget inn.»", ["I can't log in.", "I get not logged in.", "I can't login in.", "I don't get log in."], "Norsk «får ikke» + partisipp blir can't + verb."),
    Q("«Datamaskinen min er treg.»", ["My computer is slow.", "My data is slow.", "My machine of data is slow.", "My datamachine is slow."], "data betyr informasjon på engelsk; datamaskin = computer."),
    Q("«Jeg får feilmelding hele tiden.»", ["I keep getting an error message.", "I keep get an error message.", "I get error all the time message.", "I'm keeping an error message."], "keep + -ing."),
    Q("Hva er riktig som substantiv?", ["Make a backup of your files.", "Make a back up of your files.", "Make backup you files.", "Make a backing of files."], "Substantivet skrives i ett ord: backup."),
    Q("Hva betyr «The server is down»?", ["Serveren virker ikke.", "Serveren står i første etasje.", "Serveren er ny."], "down = ute av drift.")
  ],
  review: ["log in (verb) / login (substantiv); back up / backup.", "data = informasjon; datamaskin = computer.", "It doesn't work; I keep getting an error message."]
}
];

const B2: LessonDef[] = [
{
  id: "nb-b2-health", title: "Helse: sykdommer og behandling", no: "Health: illnesses and treatment", icon: "health",
  intro: "Vi snakker om vanlige sykdommer, diagnose og behandling, slik at du kan forstå legen og stille de riktige spørsmålene.",
  notes: [
    { h: "Faste uttrykk med sykdom", p: "Mange sykdomsuttrykk ligner på norsk, men verbene varierer. Norsk «få hjerteinfarkt» heter «have a heart attack», og «få influensa» heter «catch the flu».",
      table: [["Mønster", "Eksempel", "Norsk"], ["have", "She has diabetes.", "Hun har diabetes."], ["suffer from", "He suffers from asthma.", "Han har astma."], ["have a", "He had a heart attack.", "Han fikk hjerteinfarkt."], ["catch", "I caught the flu.", "Jeg fikk influensa."], ["be diagnosed with", "She was diagnosed with cancer.", "Hun fikk kreftdiagnose."]] },
    { h: "Passiv", p: "Medisinsk språk bruker ofte passiv: The patient was treated with antibiotics. The tumour was removed. Husk preposisjonen: be diagnosed with (ikke «diagnosed for»)." },
    { h: "Spørsmål til legen", p: "What's the diagnosis? Are there any side effects? How long will the treatment last? Is it hereditary? Will I need surgery?" }
  ],
  tip: "Norsk «Jeg ble operert» blir «I had surgery» eller «I had an operation». Ikke si «I was operated» alene; det krever «on»: «I was operated on». Og surgery er utellelig: «a surgery» betyr et legekontor i britisk engelsk.",
  words: [
    W("illness", "sykdom", "", "It's a serious illness.", "Det er en alvorlig sykdom."),
    W("diagnosis", "diagnose", "", "The doctor made a quick diagnosis.", "Legen stilte diagnosen raskt.", { note: "flertall: diagnoses" }),
    W("treatment", "behandling", "", "The treatment lasts six months.", "Behandlingen varer i seks måneder."),
    W("side effect", "bivirkning", "", "This medicine has few side effects.", "Denne medisinen har få bivirkninger."),
    W("surgery", "operasjon", "", "She had surgery on her knee.", "Hun ble operert i kneet."),
    W("infection", "infeksjon", "", "He has a lung infection.", "Han har en lungeinfeksjon."),
    W("high blood pressure", "høyt blodtrykk", "", "My father has high blood pressure.", "Faren min har høyt blodtrykk."),
    W("diabetes", "diabetes", "", "She has had diabetes for years.", "Hun har hatt diabetes i mange år."),
    W("heart attack", "hjerteinfarkt", "", "He had a heart attack at work.", "Han fikk hjerteinfarkt på jobben."),
    W("stroke", "hjerneslag", "", "A stroke needs urgent treatment.", "Hjerneslag krever rask behandling."),
    W("cancer", "kreft", "", "The cancer was found early.", "Kreften ble oppdaget tidlig."),
    W("chronic", "kronisk", "", "Asthma is a chronic disease.", "Astma er en kronisk sykdom."),
    W("hereditary", "arvelig", "", "Is this disease hereditary?", "Er denne sykdommen arvelig?"),
    W("be diagnosed with", "få diagnosen", "", "He was diagnosed with diabetes.", "Han fikk diagnosen diabetes."),
    W("recover", "bli frisk", "", "She recovered quickly after surgery.", "Hun ble raskt frisk etter operasjonen.", { note: "recover from + sykdom" })
  ],
  dialogue: [["A", "Your test results are back. You have type 2 diabetes.", "Prøvesvarene dine er kommet. Du har diabetes type 2."], ["B", "Is it serious? Will I need to stay in hospital?", "Er det alvorlig? Må jeg bli innlagt?"], ["A", "No. It's chronic, but it can be treated very well.", "Nei. Den er kronisk, men den kan behandles svært godt."], ["B", "Are there any side effects from the medicine?", "Har medisinen noen bivirkninger?"], ["A", "Some people get stomach pain, but it usually goes away.", "Noen får vondt i magen, men det går vanligvis over."]],
  quiz: [
    Q("«Jeg ble operert i fjor.»", ["I had surgery last year.", "I was operated last year.", "I did surgery last year.", "I got operation last year."], "have surgery / an operation."),
    Q("«Faren min fikk hjerteinfarkt.»", ["My father had a heart attack.", "My father got heart infarct.", "My father did a heart attack.", "My father took a heart attack."], "have a heart attack."),
    Q("«Hun fikk diagnosen kreft.»", ["She was diagnosed with cancer.", "She was diagnosed for cancer.", "She got the diagnose cancer.", "She diagnosed cancer."], "be diagnosed with."),
    Q("Hva betyr «side effect»?", ["bivirkning", "symptom", "behandling", "diagnose"], "side effect = bivirkning."),
    Q("Hva passer: He suffers ___ asthma.", ["from", "with", "of", "by"], "suffer from + sykdom.")
  ],
  review: ["have diabetes; have a heart attack; catch the flu; suffer from asthma.", "be diagnosed with; recover from; have surgery.", "diagnosis, treatment, side effect, chronic, hereditary."]
},
{
  id: "nb-b2-it", title: "IT: programvareutvikling", no: "IT: software development", icon: "code",
  intro: "Vi jobber i et utviklingsteam: krav, testing, kodegjennomgang og utrulling. Engelsk for det daglige statusmøtet.",
  notes: [
    { h: "Status i møter", p: "I stand-up-møter brukes tre tider. Ferdig arbeid: I've fixed the login bug. Pågående: I'm working on the tests. Planer: I'm going to deploy it today. Hindring: I'm blocked by the database issue.",
      table: [["Tid", "Bruk", "Eksempel"], ["Present perfect", "Ferdig", "I've merged the branch."], ["Present continuous", "Pågår", "I'm working on the API."], ["be going to", "Plan", "I'm going to write the tests."], ["be blocked by", "Hindring", "I'm blocked by the bug."]] },
    { h: "Faste verb", p: "fix a bug, write code, run the tests, review code, merge a branch, deploy a release, roll back a change. Norske utviklere sier ofte det samme på norsk: å merge, å deploye." },
    { h: "Pågående tid", p: "Norsk «jeg jobber med testene» passer både for nå og for en vane. Engelsk skiller: I'm working on the tests (nå) ↔ I work on the tests (generelt). I et statusmøte bruker du nesten alltid -ing." }
  ],
  tip: "Norsk «Jeg jobber med testene nå» blir ikke «I work with the tests now», men «I'm working on the tests now». Med en oppgave bruker man on; with brukes om personer og verktøy: I work with Anna, I work with Python.",
  words: [
    W("developer", "utvikler", "", "She works as a developer.", "Hun jobber som utvikler."),
    W("source code", "kildekode", "", "The source code is on GitHub.", "Kildekoden ligger på GitHub."),
    W("requirement", "krav", "", "The client changed the requirements.", "Kunden endret kravene."),
    W("code review", "kodegjennomgang", "", "We do a code review before merging.", "Vi gjør kodegjennomgang før vi slår sammen."),
    W("version control", "versjonskontroll", "", "We use Git for version control.", "Vi bruker Git til versjonskontroll."),
    W("branch", "gren (i koden)", "", "Create a new branch for this feature.", "Lag en ny gren for denne funksjonen."),
    W("merge", "slå sammen", "", "Can you merge my branch?", "Kan du slå sammen grenen min?"),
    W("deploy", "rulle ut", "", "We deploy the change tonight.", "Vi ruller ut endringen i kveld."),
    W("release", "versjon, utgivelse", "", "The new release comes out in May.", "Den nye versjonen kommer i mai."),
    W("fix a bug", "rette en feil", "", "She fixed the bug in an hour.", "Hun rettet feilen på en time."),
    W("feature", "funksjon", "", "We are adding a new feature.", "Vi legger til en ny funksjon."),
    W("user interface", "brukergrensesnitt", "", "The user interface must be simpler.", "Brukergrensesnittet må bli enklere."),
    W("run the tests", "kjøre testene", "", "Did you run the tests?", "Kjørte du testene?"),
    W("be blocked by", "bli hindret av", "", "I'm blocked by a database issue.", "Jeg blir hindret av et databaseproblem."),
    W("roll back", "rulle tilbake", "", "We had to roll back the release.", "Vi måtte rulle tilbake versjonen.")
  ],
  dialogue: [["A", "What's your status?", "Hva er statusen din?"], ["B", "I've fixed the login bug, and I'm working on the tests now.", "Jeg har rettet innloggingsfeilen, og nå jobber jeg med testene."], ["A", "Are you blocked by anything?", "Er det noe som hindrer deg?"], ["B", "Two tests are failing because the database isn't responding.", "To tester feiler fordi databasen ikke svarer."], ["A", "Can we still deploy tonight?", "Kan vi fortsatt rulle ut i kveld?"], ["B", "Yes, if the code review is finished by four.", "Ja, hvis kodegjennomgangen er ferdig innen klokka fire."]],
  quiz: [
    Q("«Jeg jobber med testene nå.»", ["I'm working on the tests now.", "I work with the tests now.", "I'm working with tests in now.", "I am work on the tests now."], "Pågående oppgave: be working on."),
    Q("«Jeg har rettet feilen.»", ["I've fixed the bug.", "I have fix the bug.", "I fixed up me the bug.", "I am fixed the bug."], "Ferdig arbeid: present perfect."),
    Q("«Endringen er rullet ut.»", ["The change has been deployed.", "The change has deployed.", "The change is deploy.", "The change has rolled out it."], "Passiv: has been + partisipp."),
    Q("Hva betyr «roll back»?", ["rulle tilbake", "rulle ut", "teste", "slå sammen"], "roll back = gå tilbake til forrige versjon."),
    Q("Hva passer: I work ___ Anna ___ this feature.", ["with / on", "on / with", "with / with", "on / on"], "with + person; on + oppgave.")
  ],
  review: ["Stand-up: I've fixed ...; I'm working on ...; I'm blocked by ...", "write code, run tests, fix a bug, merge a branch, deploy a release.", "work on + oppgave; work with + person."]
}
];

const C1: LessonDef[] = [
{
  id: "nb-c1-health", title: "Helse: sykehusspråk", no: "Health: hospital language", icon: "health",
  intro: "Innleggelse, utskrivning, samtykke og språket i medisinske rapporter, slik at du kan lese kliniske tekster og snakke med leger på engelsk.",
  notes: [
    { h: "Rapportspråk", p: "Kliniske tekster er korte og passive: The patient presented with chest pain. (Pasienten kom med brystsmerter.) He was admitted for observation. (Han ble lagt inn til observasjon.) No abnormalities were detected. (Det ble ikke påvist avvik.) present with = komme med plager." },
    { h: "Forsiktige formuleringer", p: "Leger uttrykker seg varsomt: It is likely that ..., We cannot rule out ..., The results are inconclusive. (Resultatene er ikke entydige.) The prognosis is guarded. (Prognosen er usikker.) The tumour appears to be benign." },
    { h: "Pasientrettigheter", p: "informed consent = informert samtykke. patient confidentiality = taushetsplikt. next of kin = nærmeste pårørende. Merk at «pårørende» ikke har noe enkelt engelsk ord; relatives dekker bare slektninger, mens family and carers er bredere." }
  ],
  tip: "Falske venner på sykehuset: engelsk consultant er overlege, ikke konsulent. Og norsk «avdeling» om sengepost heter ward, ikke department. «Lagt inn» heter admitted, og «utskrevet» heter discharged, ikke «written out».",
  words: [
    W("consultant", "overlege", "", "The consultant will see you at nine.", "Overlegen kommer til deg klokka ni.", { note: "britisk; amerikansk: attending physician" }),
    W("ward", "sengepost", "", "She was moved to another ward.", "Hun ble flyttet til en annen sengepost."),
    W("be admitted", "bli lagt inn", "", "He was admitted to hospital last night.", "Han ble lagt inn på sykehuset i går kveld."),
    W("be discharged", "bli utskrevet", "", "The patient will be discharged tomorrow.", "Pasienten blir utskrevet i morgen."),
    W("discharge summary", "epikrise", "", "Your GP will receive the discharge summary.", "Fastlegen din får epikrisen."),
    W("informed consent", "informert samtykke", "", "Surgery requires informed consent.", "Operasjon krever informert samtykke."),
    W("prognosis", "prognose", "", "The prognosis is good.", "Prognosen er god."),
    W("next of kin", "nærmeste pårørende", "", "We have informed your next of kin.", "Vi har informert dine nærmeste pårørende."),
    W("patient confidentiality", "taushetsplikt", "", "Doctors must respect patient confidentiality.", "Leger må overholde taushetsplikten."),
    W("benign", "godartet", "", "Fortunately, the tumour was benign.", "Heldigvis var svulsten godartet."),
    W("malignant", "ondartet", "", "The biopsy showed a malignant tumour.", "Biopsien viste en ondartet svulst."),
    W("present with", "komme med (plager)", "", "She presented with severe headaches.", "Hun kom med sterk hodepine."),
    W("follow-up", "oppfølging", "", "You will need a follow-up appointment.", "Du trenger en oppfølgingstime."),
    W("palliative care", "lindrende behandling", "", "He is receiving palliative care.", "Han får lindrende behandling."),
    W("rule out", "utelukke", "", "We can't rule out an infection.", "Vi kan ikke utelukke infeksjon.")
  ],
  dialogue: [["A", "I'm the patient's daughter. Can you tell me about the prognosis?", "Jeg er datteren til pasienten. Kan du si noe om prognosen?"], ["B", "Your father has given his consent, so yes.", "Faren din har gitt samtykke, så ja."], ["B", "The tumour appears to be benign, but we can't rule out complications.", "Svulsten ser ut til å være godartet, men vi kan ikke utelukke komplikasjoner."], ["A", "When will he be discharged?", "Når blir han utskrevet?"], ["B", "Probably on Friday. His GP will receive a discharge summary and arrange a follow-up.", "Trolig på fredag. Fastlegen får epikrisen og sørger for oppfølging."]],
  quiz: [
    Q("Hvilken setning passer i en rapport?", ["The patient presented with chest pain.", "The guy came in because his chest really hurt.", "He said that his chest hurts a lot."], "Klinisk språk: present with."),
    Q("«Pasienten ble lagt inn i går kveld.»", ["The patient was admitted last night.", "The patient was laid in last night.", "The patient was put inn last night.", "The patient admitted last night."], "bli lagt inn = be admitted."),
    Q("Hva er motsatt av «benign»?", ["malignant", "chronic", "inconclusive", "hereditary"], "benign = godartet; malignant = ondartet."),
    Q("Hvem er en «consultant» på et britisk sykehus?", ["overlege", "konsulent", "sykepleier"], "Falsk venn: consultant = overlege."),
    Q("«Vi kan ikke utelukke infeksjon.»", ["We can't rule out an infection.", "We can't exclude out an infection.", "We can't rule an infection off.", "We can't close an infection."], "utelukke = rule out.")
  ],
  review: ["be admitted → treatment → be discharged → discharge summary → follow-up.", "present with; no abnormalities were detected; we can't rule out ...", "consultant = overlege; ward = sengepost; next of kin = nærmeste pårørende."]
},
{
  id: "nb-c1-it", title: "IT: arkitektur og sikkerhet", no: "IT: architecture and security", icon: "code",
  intro: "Vi begrunner tekniske valg, rapporterer om nedetid og snakker om sikkerhet og personvern, slik seniorutviklere gjør det på engelsk.",
  notes: [
    { h: "Begrunne tekniske valg", p: "The trade-off is that ... (Avveiningen er at ...). The benefits outweigh the costs. (Fordelene veier opp for kostnadene.) In the long run, it pays off. (På sikt lønner det seg.) This assumes that ... (Dette forutsetter at ...)." },
    { h: "Etter nedetid", p: "En blameless postmortem peker ikke ut personer; språket er passivt og handler om årsaker: The outage was caused by a misconfiguration. The root cause has been identified. Measures have been put in place to prevent a recurrence." },
    { h: "Personvern", p: "personvern = privacy eller data protection; «person protection» finnes ikke. personopplysninger = personal data. avvik (i sikkerhetssammenheng) = data breach eller incident. Datatilsynet heter på engelsk the Norwegian Data Protection Authority." }
  ],
  tip: "Norsk «sikkerhet» dekker to engelske ord: security (mot angrep) og safety (mot ulykker). Norsk «teknisk gjeld» blir technical debt, med stum b. Og «sikkerhetskopi» er backup, ikke «security copy».",
  words: [
    W("architecture", "arkitektur", "", "The architecture must handle more traffic.", "Arkitekturen må tåle mer trafikk."),
    W("scalable", "skalerbar", "", "The solution is easily scalable.", "Løsningen er lett skalerbar."),
    W("technical debt", "teknisk gjeld", "", "We have to pay down technical debt.", "Vi må betale ned teknisk gjeld."),
    W("refactor", "refaktorere", "", "We should refactor this module.", "Vi bør refaktorere denne modulen."),
    W("legacy system", "gammelt system", "", "The legacy system is hard to maintain.", "Det gamle systemet er vanskelig å vedlikeholde."),
    W("trade-off", "avveining", "", "It's a trade-off between cost and speed.", "Det er en avveining mellom pris og fart."),
    W("vulnerability", "sårbarhet", "", "We found a serious vulnerability.", "Vi fant en alvorlig sårbarhet."),
    W("encryption", "kryptering", "", "All traffic uses encryption.", "All trafikk bruker kryptering."),
    W("outage", "nedetid, utfall", "", "The outage lasted two hours.", "Nedetiden varte i to timer."),
    W("root cause", "rotårsak", "", "The root cause is still unknown.", "Rotårsaken er fortsatt ukjent."),
    W("latency", "forsinkelse, responstid", "", "Latency increased under heavy load.", "Forsinkelsen økte under høy belastning."),
    W("access control", "tilgangskontroll", "", "We need stricter access control.", "Vi trenger strengere tilgangskontroll."),
    W("data breach", "brudd på datasikkerheten", "", "The data breach was reported immediately.", "Bruddet ble meldt umiddelbart."),
    W("backup", "sikkerhetskopi", "", "We take a backup every night.", "Vi tar sikkerhetskopi hver natt."),
    W("outweigh", "veie opp for", "", "The benefits outweigh the costs.", "Fordelene veier opp for kostnadene.")
  ],
  dialogue: [["A", "What caused last night's outage?", "Hva forårsaket nedetiden i natt?"], ["B", "The root cause was a misconfiguration. Measures have already been put in place.", "Rotårsaken var en feilkonfigurasjon. Tiltak er allerede iverksatt."], ["A", "Was any personal data affected?", "Ble noen personopplysninger berørt?"], ["B", "No, it's all encrypted, and the backup is intact.", "Nei, alt er kryptert, og sikkerhetskopien er intakt."], ["A", "Good. In the long run, we should refactor that module. The technical debt is growing.", "Bra. På sikt bør vi refaktorere den modulen. Den tekniske gjelden vokser."]],
  quiz: [
    Q("Hvilken setning passer i en rapport etter nedetid?", ["The outage was caused by a misconfiguration.", "Ola broke everything last night.", "Someone messed up the server."], "En postmortem er nøytral og peker ikke ut personer."),
    Q("«Fordelene veier opp for kostnadene.»", ["The benefits outweigh the costs.", "The benefits weigh up for the costs.", "The benefits overweight the costs.", "The costs outweigh on the benefits."], "veie opp for = outweigh."),
    Q("Beskyttelse mot hackere heter ...", ["security", "safety", "insurance", "secureness"], "security = mot angrep; safety = mot ulykker."),
    Q("«personvern» heter på engelsk ...", ["privacy", "person protection", "person guard", "people defence"], "personvern = privacy eller data protection."),
    Q("«sikkerhetskopi» heter ...", ["backup", "security copy", "safety copy", "safe duplicate"], "sikkerhetskopi = backup.")
  ],
  review: ["The trade-off is that ...; The benefits outweigh the costs.", "The outage was caused by ...; The root cause has been identified.", "security ≠ safety; personvern = privacy; sikkerhetskopi = backup."]
}
];

export default [...asExtra("B1", B1), ...asExtra("B2", B2), ...asExtra("C1", C1)];
