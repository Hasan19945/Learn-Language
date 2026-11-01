import { W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A1: LessonDef[] = [
{
  id: "nb-a1-1", title: "Familie", no: "Family", icon: "people",
  intro: "Vi snakker om familien og lærer eiendomsord: my, your, his, her, our, their, og genitiv med 's.",
  notes: [
    { h: "Eiendomsord", p: "Engelske eiendomsord står alltid foran ordet og endrer seg aldri etter ordet de står til. På norsk kan vi si «bilen min», men på engelsk går det bare an å si «my car».",
      table: [["Engelsk", "Norsk"], ["my", "min, mitt, mine"], ["your", "din / deres"], ["his", "hans, sin (om han)"], ["her", "hennes, sin (om hun)"], ["its", "dens, dets"], ["our", "vår, vårt, våre"], ["their", "deres, sin (om de)"]] },
    { h: "Ingen «sin» på engelsk", p: "Norsk skiller mellom «Han elsker kona si» og «Han elsker kona hans» (en annen manns kone). Engelsk har bare his: He loves his wife. Sammenhengen avgjør hvem det er snakk om." },
    { h: "Genitiv: 's", p: "Som på norsk legger man til s, men med apostrof: Ola's father (Olas far). Flertall som slutter på s får bare apostrof: my parents' house (foreldrene mines hus)." }
  ],
  tip: "Norsk «sin/si/sitt» finnes ikke på engelsk. Si «She visits her mother» (hun besøker moren sin). Og husk apostrofen: «Olas bil» blir «Ola's car», ikke «Olas car».",
  words: [
    W("family", "familie", "fæmili", "I have a big family.", "Jeg har en stor familie."),
    W("mother", "mor", "mather", "My mother is a nurse.", "Moren min er sykepleier.", { note: "uformelt: mum (britisk), mom (amerikansk)" }),
    W("father", "far", "fåther", "His father lives in Tromsø.", "Faren hans bor i Tromsø.", { note: "uformelt: dad" }),
    W("parents", "foreldre", "pærents", "My parents are retired.", "Foreldrene mine er pensjonister."),
    W("brother", "bror", "brather", "I have two brothers.", "Jeg har to brødre."),
    W("sister", "søster", "sister", "Her sister is a doctor.", "Søsteren hennes er lege."),
    W("son", "sønn", "sann", "Our son is ten.", "Sønnen vår er ti."),
    W("daughter", "datter", "dåter", "Their daughter studies in Trondheim.", "Datteren deres studerer i Trondheim."),
    W("husband", "ektemann", "hasbend", "Her husband is from Wales.", "Mannen hennes er fra Wales."),
    W("wife", "kone", "waif", "He loves his wife.", "Han elsker kona si."),
    W("grandmother", "bestemor, farmor, mormor", "grænmather", "My grandmother is ninety.", "Bestemoren min er nitti.", { note: "uformelt: grandma, gran" }),
    W("married", "gift", "mærrid", "Are you married?", "Er du gift?"),
    W("his", "hans, sin", "hiz", "This is his car.", "Dette er bilen hans."),
    W("her", "hennes, sin", "hør", "Her name is Anna.", "Hun heter Anna."),
    W("their", "deres", "thær", "Their house is big.", "Huset deres er stort.")
  ],
  dialogue: [["A", "Do you have brothers or sisters?", "Har du søsken?"], ["B", "Yes, I have one sister. Her name is Anna.", "Ja, jeg har én søster. Hun heter Anna."], ["A", "Is she married?", "Er hun gift?"], ["B", "Yes. Her husband is from Wales.", "Ja. Mannen hennes er fra Wales."], ["A", "Do they have children?", "Har de barn?"], ["B", "Yes, a son. Their son is ten.", "Ja, en sønn. Sønnen deres er ti."]],
  quiz: [
    { q: "«Hun besøker moren sin.»", o: ["She visits her mother.", "She visits his mother.", "She visits sin mother.", "She visit her mother."], a: 0, e: "Engelsk har ikke «sin». Om en kvinne bruker man her: She visits her mother." },
    { q: "«Olas far»", o: ["Ola's father", "Olas father", "father Ola", "the father of Olas"], a: 0, e: "Genitiv med apostrof: Ola's father." },
    { q: "«Bilen min»", o: ["my car", "car my", "the car my", "car-en mine"], a: 0, e: "Eiendomsordet står alltid foran: my car." },
    { q: "Hva er «brothers and sisters» på norsk?", o: ["søsken", "foreldre", "besteforeldre"], a: 0, e: "Engelsk har ikke ett vanlig ord for søsken i dagligtale; man sier brothers and sisters (formelt: siblings)." },
    { q: "«Huset til foreldrene mine»", o: ["my parents' house", "my parent's house", "my parents house's", "my parentses house"], a: 0, e: "parents slutter på s, så det får bare apostrof: my parents' house." }
  ],
  review: ["Eiendomsord står foran: my car, her name.", "Ingen «sin»: He loves his wife.", "Genitiv med apostrof: Ola's father, my parents' house."]
},
{
  id: "nb-a1-2", title: "I butikken", no: "At the shop", icon: "bag",
  intro: "Vi handler: priser, «How much?» og «How many?», og forskjellen på tellelige og utellelige substantiv.",
  notes: [
    { h: "How much / How many", p: "much brukes med det man ikke kan telle (money, milk, time), many med det man kan telle (apples, people). Prisen spør man om med How much: How much is it? How much are the apples?" },
    { h: "Utellelige ord", p: "Noen ord er tellelige på norsk, men utellelige på engelsk. De har ikke flertall og ikke a/an: information, advice, news, furniture, luggage. «An information» og «informations» er feil. Bruk «some information» eller «a piece of advice».",
      table: [["Norsk", "Engelsk", "Feil"], ["en opplysning", "some information", "an information"], ["et råd", "some advice", "an advice"], ["møbler", "furniture", "furnitures"], ["nyheter", "news (entall!)", "The news are good"]] },
    { h: "Penger og priser", p: "I Storbritannia: pounds (£) og pence (p). £2.50 leses «two pounds fifty». Merk punktum som desimaltegn, ikke komma som på norsk: 2.50, ikke 2,50. «money» er entall: The money is on the table." }
  ],
  tip: "Nordmenn sier ofte «Can I get an information?» eller «The news are good». Riktig: «Can I get some information?» og «The news is good». Og skriv priser med punktum: £3.99.",
  words: [
    W("shop", "butikk", "sjåpp", "The shop opens at nine.", "Butikken åpner klokka ni.", { note: "amerikansk: store" }),
    W("buy", "kjøpe", "bai", "I buy bread every day.", "Jeg kjøper brød hver dag."),
    W("How much is it?", "Hva koster det?", "hau matsj iz itt", "Excuse me, how much is it?", "Unnskyld, hva koster det?"),
    W("cheap", "billig", "tsjiip", "The apples are cheap today.", "Eplene er billige i dag."),
    W("expensive", "dyr", "ikspensiv", "This coat is too expensive.", "Denne kåpa er for dyr."),
    W("bread", "brød", "bredd", "A loaf of bread, please.", "Et brød, takk."),
    W("milk", "melk", "milk", "We need some milk.", "Vi trenger melk."),
    W("cheese", "ost", "tsjiiz", "Norwegian brown cheese is sweet.", "Norsk brunost er søt."),
    W("bag", "pose, veske", "bægg", "Do you need a bag?", "Trenger du pose?"),
    W("money", "penger", "manni", "I don't have much money.", "Jeg har ikke mye penger.", { note: "entall: the money is" }),
    W("pay", "betale", "pei", "Can I pay by card?", "Kan jeg betale med kort?"),
    W("card", "kort", "kard", "Card or cash?", "Kort eller kontant?"),
    W("cash", "kontanter", "kæsj", "Sorry, we don't take cash.", "Beklager, vi tar ikke kontanter."),
    W("information", "informasjon, opplysninger", "infårmeisjen", "I need some information.", "Jeg trenger litt informasjon.", { note: "utellelig: ingen an, ingen -s" }),
    W("receipt", "kvittering", "risiit", "Can I have the receipt, please?", "Kan jeg få kvitteringen?", { note: "p er stum" })
  ],
  dialogue: [["A", "Hello! How much are the apples?", "Hei! Hva koster eplene?"], ["B", "They're two pounds a kilo.", "De koster to pund kiloen."], ["A", "OK, one kilo, please. And some cheese.", "Ok, én kilo, takk. Og litt ost."], ["B", "That's five pounds fifty. Card or cash?", "Det blir fem pund og femti. Kort eller kontant?"], ["A", "Card, please. Can I have the receipt?", "Kort, takk. Kan jeg få kvitteringen?"], ["B", "Of course. Here you are.", "Selvfølgelig. Vær så god."]],
  quiz: [
    { q: "«Hva koster eplene?»", o: ["How much are the apples?", "How many are the apples?", "What cost the apples?", "How much cost the apples?"], a: 0, e: "Pris: How much is/are ...?" },
    { q: "«Jeg trenger en opplysning.»", o: ["I need some information.", "I need an information.", "I need informations.", "I need a informations."], a: 0, e: "information er utellelig: ingen an og ingen -s." },
    { q: "Hva er riktig?", o: ["The news is good.", "The news are good.", "The newses are good."], a: 0, e: "news er entall på engelsk: The news is good." },
    { q: "Fyll inn: «How ___ people are there?»", o: ["many", "much", "lot"], a: 0, e: "people kan telles, så det blir many." },
    { q: "Hvordan skrives 2,50 pund?", o: ["£2.50", "£2,50", "2,50£"], a: 0, e: "Engelsk bruker punktum som desimaltegn og setter £ foran: £2.50." }
  ],
  review: ["much med utellelige (money), many med tellelige (apples).", "information, advice, news, furniture: ingen a/an og ingen -s.", "Punktum som desimaltegn: £2.50."]
},
{
  id: "nb-a1-3", title: "Klokka og dager", no: "Time and days", icon: "clock",
  intro: "Vi lærer å si hva klokka er, dager og måneder, og preposisjonene at, on og in. Her finnes en klassisk felle for nordmenn: «halv».",
  notes: [
    { h: "Hva er klokka?", p: "past = over, to = på. half past three = halv fire (3.30). quarter past = kvart over, quarter to = kvart på. Pass på: på norsk teller «halv» mot neste time, på engelsk teller «half past» fra forrige time.",
      table: [["Klokka", "Engelsk", "Norsk"], ["3:00", "three o'clock", "tre"], ["3:15", "quarter past three", "kvart over tre"], ["3:30", "half past three", "halv fire"], ["3:45", "quarter to four", "kvart på fire"], ["3:10", "ten past three", "ti over tre"], ["3:50", "ten to four", "ti på fire"]] },
    { h: "Fellen «half four»", p: "I britisk dagligtale betyr «half four» halv fem (4.30), fordi det er en forkortelse av «half past four». En nordmann som sier «half four» og mener 3.30, kommer en time for sent. Si heller «half past three» eller «three thirty»." },
    { h: "at, on, in", p: "at + klokkeslett: at 9 o'clock. on + dager og datoer: on Monday, on 17 May. in + måneder, årstider og år: in May, in winter, in 2025. Dager og måneder skrives med stor bokstav." },
    { h: "Døgnet", p: "Engelsk bruker ofte a.m. (før kl. 12) og p.m. (etter kl. 12) i stedet for 24-timersklokka: 7 p.m. = 19.00. Tog- og flytider skrives likevel ofte med 24 timer." }
  ],
  tip: "«Halv fire» er half past three, ikke «half four». Og husk store bokstaver: «on monday» er feil, det heter «on Monday».",
  words: [
    W("What time is it?", "Hva er klokka?", "wått taim iz itt", "Excuse me, what time is it?", "Unnskyld, hva er klokka?"),
    W("o'clock", "(hel time)", "åklåkk", "It's seven o'clock.", "Klokka er sju."),
    W("half past", "halv (neste time)", "haaf paast", "It's half past three.", "Klokka er halv fire.", { note: "half past three = 3.30" }),
    W("quarter past", "kvart over", "kwårter paast", "It's quarter past nine.", "Klokka er kvart over ni."),
    W("quarter to", "kvart på", "kwårter tu", "It's quarter to ten.", "Klokka er kvart på ti."),
    W("Monday", "mandag", "manndei", "I work on Monday.", "Jeg jobber på mandag."),
    W("Wednesday", "onsdag", "wenzdei", "The shop is closed on Wednesday.", "Butikken er stengt på onsdag.", { note: "d-en er stum" }),
    W("Friday", "fredag", "fraidei", "See you on Friday!", "Vi ses på fredag!"),
    W("weekend", "helg", "wiikend", "What do you do at the weekend?", "Hva gjør du i helgen?", { note: "britisk: at the weekend, amerikansk: on the weekend" }),
    W("morning", "morgen, formiddag", "mårning", "I run in the morning.", "Jeg løper om morgenen."),
    W("afternoon", "ettermiddag", "aaftenuun", "The meeting is in the afternoon.", "Møtet er om ettermiddagen."),
    W("early", "tidlig", "ørli", "I get up early.", "Jeg står opp tidlig."),
    W("late", "sen, sent", "leit", "Sorry, I'm late.", "Beklager at jeg er sen."),
    W("always", "alltid", "ålweiz", "I always drink coffee in the morning.", "Jeg drikker alltid kaffe om morgenen."),
    W("never", "aldri", "nevver", "He never works at the weekend.", "Han jobber aldri i helgene.")
  ],
  dialogue: [["A", "What time is the meeting?", "Når er møtet?"], ["B", "At half past three.", "Halv fire."], ["A", "Half past three? So 3.30?", "Halv fire? Altså 15.30?"], ["B", "Yes. On Friday, in the big room.", "Ja. På fredag, i det store rommet."], ["A", "Great. I'm never late!", "Flott. Jeg kommer aldri for sent!"]],
  quiz: [
    { q: "Hva er «halv fire» på engelsk?", o: ["half past three", "half four", "half past four", "half to four"], a: 0, e: "halv fire = 3.30 = half past three. «Half four» betyr 4.30 i britisk dagligtale." },
    { q: "En britisk venn sier «See you at half four». Når skal du komme?", o: ["16.30", "15.30", "16.00"], a: 0, e: "«half four» er kort for «half past four» = 4.30." },
    { q: "«kvart på ti»", o: ["quarter to ten", "quarter past ten", "quarter to nine", "quarter before ten"], a: 0, e: "to = på: quarter to ten." },
    { q: "Fyll inn: «I work ___ Monday.»", o: ["on", "in", "at"], a: 0, e: "on + dager: on Monday." },
    { q: "Fyll inn: «My birthday is ___ May.»", o: ["in", "on", "at"], a: 0, e: "in + måneder: in May." },
    { q: "Hva er riktig?", o: ["on Monday", "on monday", "at monday"], a: 0, e: "Dager skrives med stor bokstav, og vi bruker on." }
  ],
  review: ["half past three = halv fire (3.30). «half four» = 4.30!", "at + klokkeslett, on + dager, in + måneder og år.", "Dager og måneder med stor bokstav: Monday, May."]
},
{
  id: "nb-a1-4", title: "Hjemme", no: "At home", icon: "house",
  intro: "Vi beskriver hjemmet: rom, møbler og adjektiv, og lærer «there is» og «there are».",
  notes: [
    { h: "there is / there are", p: "Norsk «det er» om noe som finnes, blir «there is» (entall) eller «there are» (flertall): There is a sofa in the living room. There are two bedrooms. «It is two bedrooms» er feil.",
      table: [["Norsk", "Engelsk"], ["Det er en sofa her.", "There is a sofa here."], ["Det er to soverom.", "There are two bedrooms."], ["Er det en heis?", "Is there a lift?"]] },
    { h: "Adjektiv bøyes ikke", p: "Norske adjektiv bøyes: et stort hus, store hus, det store huset. Engelske adjektiv er alltid like: a big house, big houses, the big house." },
    { h: "Møbler", p: "furniture (møbler) er utellelig: The furniture is new. Ett møbel heter «a piece of furniture»." }
  ],
  tip: "Unngå «It is a garden behind the house» når du mener at det finnes en hage. Si «There is a garden behind the house». Og ikke bøy adjektivet: «bigs houses» er feil.",
  words: [
    W("flat", "leilighet", "flætt", "I live in a small flat.", "Jeg bor i en liten leilighet.", { note: "amerikansk: apartment" }),
    W("room", "rom", "ruum", "The room is bright.", "Rommet er lyst."),
    W("kitchen", "kjøkken", "kitsjen", "The kitchen is new.", "Kjøkkenet er nytt."),
    W("bedroom", "soverom", "bedruum", "There are two bedrooms.", "Det er to soverom."),
    W("living room", "stue", "livving ruum", "The sofa is in the living room.", "Sofaen står i stua."),
    W("bathroom", "bad", "baathruum", "Where is the bathroom?", "Hvor er badet?"),
    W("furniture", "møbler", "førnitsjer", "The furniture is old.", "Møblene er gamle.", { note: "utellelig" }),
    W("big", "stor", "bigg", "It's a big house.", "Det er et stort hus."),
    W("small", "liten", "smål", "The bathroom is small.", "Badet er lite."),
    W("new", "ny", "njuu", "We have a new sofa.", "Vi har en ny sofa."),
    W("old", "gammel", "åuld", "It's an old building.", "Det er en gammel bygning."),
    W("bright", "lys", "brait", "The flat is very bright.", "Leiligheten er veldig lys."),
    W("There is", "Det er (finnes, entall)", "thær iz", "There is a garden behind the house.", "Det er en hage bak huset.", { tts: "There is" }),
    W("There are", "Det er (finnes, flertall)", "thær ar", "There are three rooms.", "Det er tre rom.", { tts: "There are" }),
    W("upstairs", "ovenpå", "apstærz", "The bedrooms are upstairs.", "Soverommene er ovenpå.")
  ],
  dialogue: [["A", "Tell me about your new flat!", "Fortell om den nye leiligheten din!"], ["B", "It's small but very bright.", "Den er liten, men veldig lys."], ["A", "How many bedrooms are there?", "Hvor mange soverom er det?"], ["B", "There are two bedrooms and a big kitchen.", "Det er to soverom og et stort kjøkken."], ["A", "Is there a balcony?", "Er det balkong?"], ["B", "Yes, there is. I love it!", "Ja, det er det. Jeg elsker den!"]],
  quiz: [
    { q: "«Det er to soverom.»", o: ["There are two bedrooms.", "It is two bedrooms.", "There is two bedrooms.", "It are two bedrooms."], a: 0, e: "Om noe som finnes, i flertall: There are." },
    { q: "«store hus»", o: ["big houses", "bigs houses", "bigger houses", "big housen"], a: 0, e: "Engelske adjektiv bøyes ikke: big houses." },
    { q: "«Er det heis?»", o: ["Is there a lift?", "Is it a lift?", "Are there a lift?", "There is a lift?"], a: 0, e: "Spørsmål: Is there ...? (amerikansk: elevator)." },
    { q: "«Møblene er nye.»", o: ["The furniture is new.", "The furnitures are new.", "The furniture are new."], a: 0, e: "furniture er utellelig og står i entall." },
    { q: "Hva betyr «upstairs»?", o: ["ovenpå", "nede", "utenfor"], a: 0, e: "upstairs = ovenpå, downstairs = nede." }
  ],
  review: ["Det finnes = there is / there are.", "Adjektiv bøyes ikke: a big house, big houses.", "furniture er utellelig: The furniture is new."]
},
{
  id: "nb-a1-5", title: "Transport", no: "Getting around", icon: "bus",
  intro: "Vi reiser med buss, tog og fly, og lærer å spørre om veien. Preposisjonene er annerledes enn på norsk.",
  notes: [
    { h: "by, on, in", p: "Hvordan man reiser: by bus, by train, by car (uten the). Men om å være på et transportmiddel: on the bus, on the train, in the car. Til fots: on foot.",
      table: [["Norsk", "Engelsk"], ["Jeg tar bussen.", "I go by bus. / I take the bus."], ["Jeg sitter på bussen.", "I'm on the bus."], ["Jeg sitter i bilen.", "I'm in the car."], ["Jeg går.", "I walk. / I go on foot."]] },
    { h: "Spørre om veien", p: "Excuse me, how do I get to the station? Is it far? Svar: Go straight on. Turn left / right. It's on the left. It's next to the bank. It's opposite the church." },
    { h: "Venstrekjøring", p: "I Storbritannia kjører man på venstre side. Se derfor til høyre først når du går over gata. «Look right» står ofte malt på gata i London." }
  ],
  tip: "Norsk «å ta bussen» kan være «take the bus», men når du forteller hvordan du reiser, sier engelsktalende «by bus» uten the. «I go with the bus» er en direkte oversettelse og høres feil ut.",
  words: [
    W("bus", "buss", "bass", "I go to work by bus.", "Jeg tar bussen til jobb."),
    W("train", "tog", "trein", "The train is late.", "Toget er forsinket."),
    W("plane", "fly", "plein", "We go by plane.", "Vi reiser med fly."),
    W("ticket", "billett", "tikkit", "A return ticket, please.", "En tur-retur-billett, takk."),
    W("station", "stasjon", "steisjen", "Where is the station?", "Hvor er stasjonen?"),
    W("stop", "holdeplass, stoppe", "ståpp", "The bus stop is over there.", "Bussholdeplassen er der borte."),
    W("left", "venstre", "left", "Turn left at the bank.", "Ta til venstre ved banken."),
    W("right", "høyre, riktig", "rait", "It's on the right.", "Det er på høyre side."),
    W("straight on", "rett fram", "streit ånn", "Go straight on.", "Gå rett fram."),
    W("far", "langt", "far", "Is it far?", "Er det langt?"),
    W("near", "nær", "niir", "The hotel is near the station.", "Hotellet ligger nær stasjonen."),
    W("next to", "ved siden av", "nekst tu", "It's next to the bank.", "Det ligger ved siden av banken."),
    W("opposite", "rett overfor", "åppozitt", "The café is opposite the church.", "Kafeen ligger rett overfor kirka."),
    W("on foot", "til fots", "ånn futt", "It's ten minutes on foot.", "Det er ti minutter å gå."),
    W("get to", "komme til", "gett tu", "How do I get to the airport?", "Hvordan kommer jeg til flyplassen?")
  ],
  dialogue: [["A", "Excuse me, how do I get to the station?", "Unnskyld, hvordan kommer jeg til stasjonen?"], ["B", "Go straight on and turn left at the bank.", "Gå rett fram og ta til venstre ved banken."], ["A", "Is it far?", "Er det langt?"], ["B", "No, it's ten minutes on foot. Or you can go by bus.", "Nei, det er ti minutter å gå. Eller du kan ta bussen."], ["A", "Thank you very much!", "Tusen takk!"], ["B", "You're welcome.", "Bare hyggelig."]],
  quiz: [
    { q: "«Jeg tar bussen til jobb.»", o: ["I go to work by bus.", "I go to work with the bus.", "I go to work by the bus.", "I go with bus to work."], a: 0, e: "Reisemåte: by bus, uten the." },
    { q: "«Jeg sitter på toget.»", o: ["I'm on the train.", "I'm in the train.", "I'm by train.", "I'm at the train."], a: 0, e: "Om å være på buss og tog: on the bus, on the train." },
    { q: "Hva betyr «opposite the church»?", o: ["rett overfor kirka", "ved siden av kirka", "bak kirka"], a: 0, e: "opposite = rett overfor." },
    { q: "Hva er et naturlig svar på «Thank you very much!»?", o: ["You're welcome.", "Please.", "Excuse me."], a: 0, e: "You're welcome = bare hyggelig / ingen årsak." },
    { q: "Du skal gå over gata i London. Hvor ser du først?", o: ["til høyre", "til venstre", "rett fram"], a: 0, e: "Venstrekjøring: bilene kommer fra høyre." }
  ],
  review: ["by bus / by train (uten the), men on the bus.", "Go straight on, turn left/right, it's opposite ...", "Takk-svar: You're welcome."]
},
{
  id: "nb-a1-6", title: "Vær og fritid", no: "Weather and free time", icon: "sun",
  intro: "Vi snakker om været, som briter elsker, og om fritid. Vi lærer også presens progressiv: det som skjer akkurat nå.",
  notes: [
    { h: "Det som skjer nå: am/is/are + -ing", p: "Norsk har bare én presensform: Jeg leser. Engelsk skiller mellom det man gjør vanligvis (I read every day) og det som skjer akkurat nå (I'm reading now). Den siste formen kalles presens progressiv.",
      table: [["Vanligvis", "Akkurat nå"], ["I work in Oslo.", "I'm working at home today."], ["It rains a lot in Bergen.", "It's raining."], ["She reads books.", "She's reading a book now."]] },
    { h: "Været", p: "Norsk «Det regner» blir «It's raining» (nå) eller «It rains» (generelt). It's sunny, it's cloudy, it's windy, it's cold. Temperaturer i Storbritannia oppgis i celsius, men i USA i fahrenheit." },
    { h: "like + -ing", p: "Om ting du liker å gjøre: I like swimming eller I like to swim. Etter enjoy kommer alltid -ing: I enjoy reading. Ikke «I enjoy to read»." }
  ],
  tip: "Nordmenn sier ofte «It rains now» eller «I read a book now». Det som skjer akkurat nå, krever -ing: «It's raining now», «I'm reading a book». Og «What do you do?» betyr «Hva jobber du med?», ikke «Hva holder du på med?» (det er «What are you doing?»).",
  words: [
    W("weather", "vær", "wether", "The weather is nice today.", "Det er fint vær i dag."),
    W("rain", "regn, regne", "rein", "It's raining again.", "Det regner igjen."),
    W("snow", "snø, snø (verb)", "snåu", "It snows a lot in Tromsø.", "Det snør mye i Tromsø."),
    W("sunny", "solrik, sol", "sanni", "It's sunny and warm.", "Det er sol og varmt."),
    W("windy", "vind, vindfullt", "windi", "It's very windy on the coast.", "Det er mye vind ved kysten."),
    W("cold", "kald, kaldt", "kåuld", "It's cold today.", "Det er kaldt i dag."),
    W("warm", "varm, varmt", "wårm", "The water is warm.", "Vannet er varmt."),
    W("free time", "fritid", "frii taim", "What do you do in your free time?", "Hva gjør du på fritiden?"),
    W("hiking", "fottur, gå på tur", "haiking", "We go hiking in the mountains.", "Vi går på tur i fjellet."),
    W("skiing", "gå på ski", "skiing", "I love skiing.", "Jeg elsker å gå på ski."),
    W("swimming", "svømming", "swimming", "She goes swimming on Fridays.", "Hun svømmer på fredager."),
    W("read", "lese", "riid", "I'm reading a good book.", "Jeg leser en god bok."),
    W("watch", "se på", "wåtsj", "We're watching a film.", "Vi ser på film."),
    W("enjoy", "like, nyte", "indjåi", "I enjoy cooking.", "Jeg liker å lage mat.", { note: "enjoy + -ing" }),
    W("What are you doing?", "Hva holder du på med?", "wått ar ju duing", "Hi! What are you doing?", "Hei! Hva holder du på med?")
  ],
  dialogue: [["A", "Hi! What are you doing?", "Hei! Hva holder du på med?"], ["B", "I'm reading. It's raining, so I'm staying inside.", "Jeg leser. Det regner, så jeg blir inne."], ["A", "It's sunny here! We're going hiking.", "Her er det sol! Vi skal på tur."], ["B", "Lucky you! Do you go hiking every weekend?", "Heldig! Går dere på tur hver helg?"], ["A", "Yes, we love it. And in winter we go skiing.", "Ja, vi elsker det. Og om vinteren går vi på ski."]],
  quiz: [
    { q: "«Det regner (akkurat nå).»", o: ["It's raining.", "It rains now.", "It's rain.", "It raining."], a: 0, e: "Det som skjer nå: am/is/are + -ing: It's raining." },
    { q: "«Hva holder du på med?»", o: ["What are you doing?", "What do you do?", "What you doing are?"], a: 0, e: "«What do you do?» betyr «Hva jobber du med?»." },
    { q: "«Jeg liker å lese.»", o: ["I enjoy reading.", "I enjoy to read.", "I enjoy read.", "I am enjoy reading."], a: 0, e: "enjoy + -ing: I enjoy reading." },
    { q: "Hva betyr «What do you do?»", o: ["Hva jobber du med?", "Hva holder du på med akkurat nå?", "Hvordan har du det?"], a: 0, e: "What do you do? = Hva er yrket ditt?" },
    { q: "«Hun jobber hjemme i dag.»", o: ["She's working at home today.", "She works at home today.", "She is work at home today."], a: 0, e: "Noe midlertidig, som gjelder i dag: is working." }
  ],
  review: ["Akkurat nå: am/is/are + -ing (It's raining).", "Vanligvis: presens (It rains a lot in Bergen).", "enjoy + -ing; What do you do? = Hva jobber du med?"]
}
];

export default atLevel("A1", A1);
