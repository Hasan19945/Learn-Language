import { Q, W, inLevelOrder } from "../helpers";
import type { CourseDef } from "../../types";
import a0 from "./a0";
import a1 from "./a1";
import a2 from "./a2";
import b1 from "./b1";
import b2 from "./b2";
import c1 from "./c1";
import readers from "./readers";
import topics from "./topics";

export const englishNb: CourseDef = {
  id: "en-nb", native: "nb", name: "English", lang: "Engelsk", code: "EN", yourLang: "engelsken din", key: "adim-adim-english-nb-v1", doc: "english-nb",
  voice: /^en([-_]|$)/i, voiceName: "English",
  hero: "Lær engelsk fra bunnen av, steg for steg.",
  sub: "Forklaringer på norsk, eksempler på engelsk",
  about: "Denne versjonen er laget for norsktalende. Leksjonene viser spesielt forskjellene mellom norsk og engelsk og de typiske feilene nordmenn gjør.",
  sentenceNote: "Nye verb: watch (se på), play (spille), pay (betale), buy (kjøpe). Med he/she/it får alle -s: he watches, she plays.",
  lessons: [...inLevelOrder([...a0, ...a1, ...a2, ...b1, ...b2, ...c1, ...topics]), ...readers],
  levels: [
    { id: "A0", title: "Nybegynner", d: "Uttale, hilsener, enkle setninger" },
    { id: "A1", title: "Grunnleggende", d: "Familie, handel, klokka, hjemmet, transport" },
    { id: "A2", title: "Lett viderekommen", d: "Fortid, lege, jobb, leie bolig, planer" },
    { id: "B1", title: "Middels", d: "Skjemaer, jobbintervju, meninger, bank, helse, IT" },
    { id: "B2", title: "Øvre middels", d: "Formell e-post, argumentasjon, idiomer, arbeidsliv, sykdommer, programvare" },
    { id: "C1", title: "Avansert", d: "Akademisk språk, forhandlinger, varianter, ordtak, medisinsk språk, systemarkitektur" }
  ],
  interests: {
    tech: { label: "Teknologi", words: [
      W("computer", "datamaskin", "kåmpjuuter", "I have a new computer.", "Jeg har en ny datamaskin."),
      W("app", "app", "æpp", "It's a good app.", "Det er en god app."),
      W("software", "programvare", "såftwær", "The software is new.", "Programvaren er ny."),
      W("developer", "utvikler", "diveloper", "She is a developer.", "Hun er utvikler.")],
      sentences: [["I am a developer.", "Jeg er utvikler."], ["She works on the app.", "Hun jobber med appen."]] },
    football: { label: "Fotball", words: [
      W("match", "kamp", "mætsj", "The match is today.", "Kampen er i dag."),
      W("team", "lag", "tiim", "The team is from Liverpool.", "Laget er fra Liverpool."),
      W("player", "spiller", "pleier", "He is a player.", "Han er spiller."),
      W("goal", "mål", "gåul", "It's a goal!", "Mål!")],
      sentences: [["I watch the match tonight.", "Jeg ser kampen i kveld."], ["He plays for the team.", "Han spiller for laget."]] },
    business: { label: "Arbeidsliv", words: [
      W("meeting", "møte", "miiting", "I have a meeting.", "Jeg har et møte."),
      W("colleague", "kollega", "kåliig", "She is a colleague.", "Hun er en kollega."),
      W("customer", "kunde", "kastomer", "The customer is from Sweden.", "Kunden er fra Sverige."),
      W("company", "firma, selskap", "kampeni", "The company is in Oslo.", "Firmaet ligger i Oslo.")],
      sentences: [["I have a meeting today.", "Jeg har et møte i dag."], ["We have a new customer.", "Vi har en ny kunde."]] },
    finance: { label: "Økonomi", words: [
      W("bank", "bank", "bænk", "The bank is there.", "Banken ligger der."),
      W("account", "konto", "ekaunt", "I have an account.", "Jeg har en konto."),
      W("bill", "regning", "bill", "It's a bill.", "Det er en regning."),
      W("pound", "pund", "paund", "It's ten pounds.", "Det koster ti pund.")],
      sentences: [["I have an account at the bank.", "Jeg har en konto i banken."], ["I pay the bill.", "Jeg betaler regningen."]] },
    travel: { label: "Reise", words: [
      W("train", "tog", "trein", "The train is here.", "Toget er her."),
      W("ticket", "billett", "tikkit", "I have a ticket.", "Jeg har billett."),
      W("airport", "flyplass", "ærpårt", "The airport is there.", "Flyplassen ligger der."),
      W("hotel", "hotell", "håutell", "The hotel is nice.", "Hotellet er fint.")],
      sentences: [["I buy a ticket.", "Jeg kjøper en billett."], ["The train leaves now.", "Toget går nå."]] },
    everyday: { label: "Hverdag", words: [
      W("shop", "butikk", "sjåpp", "The shop is there.", "Butikken ligger der."),
      W("flat", "leilighet (britisk)", "flætt", "I have a flat.", "Jeg har en leilighet.", { note: "amerikansk: apartment" }),
      W("bread", "brød", "bredd", "The bread is good.", "Brødet er godt."),
      W("cup", "kopp", "kapp", "A cup of coffee, please.", "En kopp kaffe, takk.")],
      sentences: [["I buy bread at the shop.", "Jeg kjøper brød i butikken."], ["We live in a flat.", "Vi bor i en leilighet."]] }
  },
  placement: {
    A0: [
      Q("Hvordan sier man «takk» på engelsk?", ["thank you", "hello", "sorry", "yes"], "thank you = takk."),
      Q("«I ___ a student.»", ["am", "is", "are", "be"], "I bruker am: I am a student."),
      Q("Hva betyr «Where are you from?»", ["Hvor er du fra?", "Hvor bor du?", "Hvordan har du det?", "Hva heter du?"], "Where ... from = hvor ... fra."),
      Q("«Jeg er lærer.»", ["I'm a teacher.", "I'm teacher.", "I teacher.", "I'm the teacher."], "Yrker trenger a/an: I'm a teacher."),
      Q("«et eple»", ["an apple", "a apple", "apple", "the an apple"], "an foran vokallyd: an apple."),
      Q("«Jeg forstår ikke.»", ["I don't understand.", "I understand not.", "I not understand.", "I doesn't understand."], "Nektelse: don't + verb."),
      Q("«I dag jobber jeg.»", ["Today I work.", "Today work I.", "Today I am work.", "I today work."], "Engelsk har ikke V2: Today I work."),
      Q("«Han snakker engelsk.»", ["He speaks English.", "He speak English.", "He speaking English.", "He is speak English."], "he/she/it får -s: speaks.")
    ],
    A1: [
      Q("Hva er «halv fire» på engelsk?", ["half past three", "half four", "half past four", "half to four"], "halv fire = 3.30 = half past three."),
      Q("«Olas far»", ["Ola's father", "Olas father", "father Ola", "the father of Olas"], "Genitiv: Ola's father."),
      Q("«Det er to bøker på bordet.»", ["There are two books on the table.", "It is two books on the table.", "There is two books on the table.", "It are two books on the table."], "Det finnes (flertall): there are."),
      Q("«Jeg venter på bussen akkurat nå.»", ["I'm waiting for the bus now.", "I wait for the bus now.", "I'm wait the bus now.", "I waiting for the bus now."], "Det som skjer nå: am/is/are + -ing."),
      Q("«Jeg trenger en opplysning.»", ["I need some information.", "I need an information.", "I need informations.", "I need a informations."], "information er utellelig."),
      Q("«Hun besøker moren sin.»", ["She visits her mother.", "She visits his mother.", "She visits sin mother.", "She visit her mother."], "Engelsk har ikke «sin»: her mother."),
      Q("«Jeg tar bussen til jobb.»", ["I go to work by bus.", "I go to work with the bus.", "I go to work by the bus.", "I go with bus to work."], "Reisemåte: by bus."),
      Q("«på mandag»", ["on Monday", "in Monday", "at Monday", "on monday"], "on + dager, med stor bokstav.")
    ],
    A2: [
      Q("«Jeg var i London i fjor.»", ["I was in London last year.", "I have been in London last year.", "I have been to London last year.", "I am in London last year."], "Avsluttet tidspunkt: preteritum."),
      Q("«Jeg har bodd her i fem år.»", ["I have lived here for five years.", "I live here since five years.", "I have lived here in five years.", "I lived here for five years now."], "Varighet til nå: present perfect + for."),
      Q("«Kan du låne meg penna di?»", ["Can you lend me your pen?", "Can you borrow me your pen?", "Can I lend your pen?", "Can you loan of me your pen?"], "låne bort = lend."),
      Q("«Sjefen min er hyggelig.»", ["My boss is nice.", "My chef is nice.", "My chief is nice.", "My master is nice."], "sjef = boss; chef = kokk."),
      Q("«Jeg skal besøke foreldrene mine.» (plan)", ["I'm going to visit my parents.", "I shall visiting my parents.", "I will to visit my parents.", "I going to visit my parents."], "Plan: be going to."),
      Q("«Så du filmen?»", ["Did you see the film?", "Did you saw the film?", "Saw you the film?", "Have you saw the film?"], "did + infinitiv."),
      Q("«Hun lærte meg å kjøre bil.»", ["She taught me to drive.", "She learned me to drive.", "She teached me to drive.", "She learnt me driving."], "lære bort = teach."),
      Q("«Jeg har time hos legen.»", ["I have an appointment with the doctor.", "I have a time at the doctor.", "I have an hour at the doctor.", "I have a meeting at the doctor."], "time = appointment.")
    ],
    B1: [
      Q("«Jeg er enig.»", ["I agree.", "I am agree.", "I'm agreeing me.", "I agreed with."], "agree er et verb."),
      Q("«Jeg mener at vi bør dra.»", ["I think we should go.", "I mean that we should go.", "I am mean we should go.", "I meaning we should go."], "mene = think."),
      Q("Norsk «2 milliarder» på engelsk:", ["2 billion", "2 milliard", "2 trillion", "2 million"], "milliard = billion."),
      Q("«Skjemaet må sendes innen fredag.»", ["The form must be sent by Friday.", "The form must send until Friday.", "The form must be sent until Friday.", "The form sends by Friday."], "Passiv + by."),
      Q("«Hvis jeg var deg, ville jeg søkt.»", ["If I were you, I would apply.", "If I would be you, I apply.", "If I am you, I would apply.", "If I were you, I will apply."], "Andre kondisjonal."),
      Q("«Jeg røykte før.»", ["I used to smoke.", "I am used to smoke.", "I use to smoking.", "I was used smoke."], "used to = pleide å."),
      Q("«Jeg leser til eksamen.»", ["I'm studying for the exam.", "I'm reading to the exam.", "I'm learning to the exam.", "I'm reading for exam."], "study for an exam."),
      Q("«Det er lettere.»", ["It's easier.", "It's more easy.", "It's more easier.", "It's easyer."], "easy → easier.")
    ],
    B2: [
      Q("«Til tross for regnet dro vi ut.»", ["Despite the rain, we went out.", "Despite of the rain, we went out.", "Although the rain, we went out.", "Despite it rained, we went out."], "despite + substantiv, uten of."),
      Q("«Hun har foreldrepermisjon.»", ["She is on parental leave.", "She is on parental permission.", "She has parent permission.", "She is permitted parents."], "permisjon = leave."),
      Q("«Utsett det!» (it)", ["Put it off!", "Put off it!", "It put off!", "Off put it!"], "Pronomen i midten: put it off."),
      Q("«Du bor i Oslo, ikke sant?»", ["You live in Oslo, don't you?", "You live in Oslo, isn't it?", "You live in Oslo, not true?", "You live in Oslo, do you?"], "Tag med do: don't you?"),
      Q("«Det regner trollkjerringer.»", ["It's raining cats and dogs.", "It's raining trolls.", "It's raining witches.", "It's raining shirts."], "Engelsk bruker katter og hunder."),
      Q("Ukjent mottaker: «Dear Sir or Madam» → avslutning?", ["Yours faithfully,", "Yours sincerely,", "Love,", "Cheers,"], "Yours faithfully."),
      Q("«Jeg ser fram til å høre fra deg.»", ["I look forward to hearing from you.", "I look forward to hear from you.", "I look forward hearing you.", "I am looking forward hear you."], "look forward to + -ing."),
      Q("«gå som katten rundt den varme grøten»", ["beat around the bush", "walk like a cat around porridge", "the cat around the hot milk", "beat the cat"], "beat around the bush.")
    ],
    C1: [
      Q("«Hvis jeg hadde visst det, ville jeg ha kommet.»", ["If I had known, I would have come.", "If I would have known, I would have come.", "If I knew, I would come yesterday.", "If I have known, I would come."], "Ikke would i if-leddet."),
      Q("«I går dro jeg på kino.»", ["Yesterday I went to the cinema.", "Yesterday went I to the cinema.", "Yesterday did I go to the cinema.", "Went I yesterday to the cinema."], "Ingen inversjon uten nektende uttrykk."),
      Q("«Aldri har jeg sett noe lignende.»", ["Never have I seen anything like it.", "Never I have seen anything like it.", "Never I saw anything like it.", "Have never I seen anything like it."], "Inversjon etter never."),
      Q("«referat» fra et møte:", ["minutes", "report", "referee", "resume"], "referat = minutes."),
      Q("«regjeringens klimapolitikk»", ["the government's climate policy", "the government's climate politics", "the regime's climate politics", "the government's climate politic"], "Konkret politikk = policy."),
      Q("«Det er en fornuftig løsning.»", ["It's a sensible solution.", "It's a sensitive solution.", "It's a sensational solution.", "It's a sensing solution."], "fornuftig = sensible."),
      Q("«Ikke selg skinnet før bjørnen er skutt.»", ["Don't count your chickens before they hatch.", "Don't sell the bear before the skin.", "Better safe than sorry.", "Don't put all your eggs in one basket."], "Engelsk bruker kyllinger."),
      Q("Hva betyr «pants» i London?", ["underbukser", "bukser", "sokker", "jakke"], "Britisk pants = underbukser.")
    ]
  }
};
