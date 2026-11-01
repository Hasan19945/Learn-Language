import { W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A0: LessonDef[] = [
{
  id: "nb-a0-1", title: "Hilsener", no: "Greetings", icon: "chat",
  intro: "Vi begynner med engelske lyder og hilsener du hører hver dag. Mange ord ligner på norsk, men uttalen er ofte annerledes.",
  notes: [
    { h: "Lyder som ikke finnes på norsk", p: "Det engelske alfabetet har 26 bokstaver, altså ingen æ, ø og å. Noen lyder finnes ikke på norsk og må øves spesielt. Tabellen gir omtrentlige lyder; den beste måten å lære på er å lytte.",
      table: [["Skrives", "Omtrentlig lyd", "Eksempel"], ["th", "tunga mellom tennene, ikke «t» eller «d»", "thank you, this"], ["w", "runde lepper, kort «u», ikke norsk v", "what, we"], ["v", "som norsk v, overtenner mot underleppa", "very, evening"], ["z", "stemt s, som en surrende bie", "zoo, please"], ["j", "«dj»", "job [djåbb]"], ["sh", "«sj»", "she [sjii]"], ["ch", "«tsj»", "chair [tsjær]"]] },
    { h: "Stumme bokstaver", p: "Noen bokstaver uttales ikke: know [nåu], write [rait], hour [auer]. En e på slutten av ordet er vanligvis stum: name [neim], five [faiv]. Engelsk staves altså ikke slik det uttales, i motsetning til norsk." },
    { h: "Hverdagsbruk", p: "«Hi» er uformelt, «Hello» passer overalt. «How are you?» er som regel bare en hilsen, ikke et ekte spørsmål om helsa; svar kort: «Fine, thanks. And you?» Engelsktalende sier «please» mye oftere enn nordmenn sier «vær så snill», og det er viktig for å virke høflig." }
  ],
  tip: "På norsk holder det ofte å si «En kaffe, takk.» På engelsk må du si «please»: «A coffee, please.» Uten please kan du virke uhøflig. Øv også på forskjellen på w og v: «very well» skal ikke bli «wery vell».",
  words: [
    W("hello", "hallo", "hellåu", "Hello, Kari!", "Hallo, Kari!"),
    W("hi", "hei", "hai", "Hi, Tom!", "Hei, Tom!"),
    W("good morning", "god morgen", "gudd mårning", "Good morning! How are you?", "God morgen! Hvordan har du det?"),
    W("good evening", "god kveld", "gudd iivning", "Good evening, Ola!", "God kveld, Ola!"),
    W("goodbye", "ha det", "gudbai", "Goodbye! See you tomorrow.", "Ha det! Vi ses i morgen.", { note: "uformelt: bye" }),
    W("thank you", "takk", "thænk ju", "Thank you very much.", "Tusen takk.", { note: "kort og uformelt: thanks" }),
    W("please", "vær så snill, takk (i bestillinger)", "pliiz", "A coffee, please.", "En kaffe, takk."),
    W("sorry", "unnskyld, beklager", "sårri", "Sorry, I'm late.", "Beklager at jeg er sen."),
    W("excuse me", "unnskyld (for å få oppmerksomhet)", "ikskjuuz mi", "Excuse me, where is the bus?", "Unnskyld, hvor er bussen?"),
    W("yes", "ja", "jes", "Yes, please.", "Ja, takk."),
    W("no", "nei", "nåu", "No, thank you.", "Nei takk."),
    W("fine", "bra, fint", "fain", "I'm fine, thanks.", "Jeg har det bra, takk."),
    W("How are you?", "Hvordan har du det?", "hau ar ju", "Hi! How are you?", "Hei! Hvordan har du det?")
  ],
  dialogue: [["A", "Good morning!", "God morgen!"], ["B", "Good morning! How are you?", "God morgen! Hvordan har du det?"], ["A", "I'm fine, thanks. And you?", "Bra, takk. Og du?"], ["B", "Fine, thank you.", "Bra, takk."], ["A", "Goodbye!", "Ha det!"], ["B", "Bye! See you!", "Ha det! Vi ses!"]],
  quiz: [
    { q: "Hvordan uttales «know»?", o: ["[nåu] – k er stum", "[knåu] – alle bokstavene uttales", "[kenåv]"], a: 0, e: "I ord som begynner med kn-, er k stum: know [nåu], knife [naif]." },
    { q: "Hva passer som svar på «How are you?»", o: ["Fine, thanks.", "Goodbye!", "Good evening!", "No."], a: 0, e: "«How are you?» besvares kort: «Fine, thanks.» (Bra, takk.)" },
    { q: "Du møter noen om kvelden. Hva sier du?", o: ["Good evening!", "Good morning!", "Goodbye!"], a: 0, e: "«Good evening» = god kveld. «Good morning» bruker man om morgenen, «Goodbye» når man går." },
    { q: "Du bestiller kaffe på en kafé. Hva er høflig?", o: ["A coffee, please.", "A coffee.", "Give coffee."], a: 0, e: "På engelsk er «please» nødvendig for å være høflig: A coffee, please." },
    { q: "Hva sier du for å få oppmerksomheten til en fremmed?", o: ["Excuse me.", "Thank you.", "Goodbye."], a: 0, e: "excuse me = unnskyld. Brukes før du spør en fremmed om noe." }
  ],
  review: ["Engelsk staves ikke slik det uttales: know [nåu], name [neim].", "w har runde lepper, v har tenner mot leppa: very well.", "Si please i bestillinger: A coffee, please."]
},
{
  id: "nb-a0-2", title: "Jeg, du, han", no: "Pronouns and \"to be\"", icon: "people",
  intro: "Vi lærer personlige pronomen og det viktigste verbet: «to be» (å være). På norsk sier vi «er» til alle, men på engelsk har verbet tre former: am, is, are.",
  notes: [
    { h: "Personlige pronomen", p: "De fleste pronomenene ligner på norsk. Men «you» betyr både du og dere, og «it» brukes om ting og dyr, der norsk bruker den eller det.",
      table: [["Engelsk", "Norsk", "Uttale"], ["I", "jeg", "ai"], ["you", "du / dere", "ju"], ["he", "han", "hii"], ["she", "hun", "sjii"], ["it", "den / det", "itt"], ["we", "vi", "wii"], ["they", "de", "thei"]] },
    { h: "am, is, are", p: "Norsk «er» er likt for alle personer. Engelsk «to be» endrer seg etter personen. I tale trekkes det ofte sammen: I'm, you're, he's, she's, it's, we're, they're.",
      table: [["Person", "Verb", "Kortform"], ["I", "am", "I'm"], ["he / she / it", "is", "he's, she's, it's"], ["you / we / they", "are", "you're, we're, they're"]] },
    { h: "Yrke krever a / an", p: "På norsk sier vi «Jeg er lærer» uten artikkel. På engelsk må yrket ha a eller an: I'm a teacher. She's an engineer. «I'm teacher» er feil." },
    { h: "Nektelse og spørsmål", p: "Nektelse: not etter verbet: I'm not, he isn't, they aren't. Spørsmål: verbet flyttes først, akkurat som på norsk: You are a student. → Are you a student?" }
  ],
  tip: "Den vanligste feilen er å oversette «Jeg er lærer» direkte til «I am teacher». Husk artikkelen: I am a teacher. Og husk at «I» alltid skrives med stor bokstav, også midt i setningen.",
  words: [
    W("I", "jeg", "ai", "I am a student.", "Jeg er student.", { note: "skrives alltid med stor bokstav" }),
    W("you", "du, dere", "ju", "You are nice.", "Du er hyggelig."),
    W("he", "han", "hii", "He is a teacher.", "Han er lærer."),
    W("she", "hun", "sjii", "She is a student.", "Hun er student."),
    W("it", "den, det", "itt", "It is a cat.", "Det er en katt."),
    W("we", "vi", "wii", "We are teachers.", "Vi er lærere."),
    W("they", "de", "thei", "They are nice.", "De er hyggelige."),
    W("am", "er (med I)", "æm", "I am Kari.", "Jeg er Kari."),
    W("is", "er (med he/she/it)", "iz", "He is from Norway.", "Han er fra Norge."),
    W("are", "er (med you/we/they)", "ar", "Are you a student?", "Er du student?"),
    W("student", "student, elev", "stjuudent", "Are you a student?", "Er du student?"),
    W("teacher", "lærer", "tiitsjer", "She is a teacher.", "Hun er lærer."),
    W("nice", "hyggelig, fin", "nais", "He is nice.", "Han er hyggelig.")
  ],
  dialogue: [["A", "Hi! I'm Kari. Are you a student?", "Hei! Jeg er Kari. Er du student?"], ["B", "No, I'm a teacher. And you?", "Nei, jeg er lærer. Og du?"], ["A", "I'm a student.", "Jeg er student."], ["B", "Nice to meet you!", "Hyggelig å hilse på deg!"]],
  quiz: [
    { q: "«Jeg er student.» Hva er riktig?", o: ["I am a student.", "I am student.", "I student.", "I is a student."], a: 0, e: "Yrker og roller trenger a/an på engelsk: I am a student." },
    { q: "«Hun er lærer.»", o: ["She is a teacher.", "He is a teacher.", "She are a teacher.", "She is teacher."], a: 0, e: "Hun = she, og she bruker is. Husk a: She is a teacher." },
    { q: "«Er du student?»", o: ["Are you a student?", "You are a student?", "Is you a student?"], a: 0, e: "Ja/nei-spørsmål med «to be»: verbet først, som på norsk: Are you a student?" },
    { q: "Fyll inn: «We ___ teachers.»", o: ["are", "is", "am"], a: 0, e: "we, you og they bruker are." },
    { q: "Hva viser «it» til i «It is a dog»?", o: ["et dyr eller en ting", "en mann", "en kvinne"], a: 0, e: "it = den/det, om ting og dyr. Om mennesker bruker man he eller she." }
  ],
  review: ["I am, he/she/it is, you/we/they are.", "Yrke trenger a/an: I'm a teacher (ikke I'm teacher).", "you = både du og dere."]
},
{
  id: "nb-a0-3", title: "Bli kjent", no: "Getting to know people", icon: "globe",
  intro: "Vi lærer å si hva vi heter, hvor vi kommer fra og hvor vi bor. Dette er de første spørsmålene du får når du møter noen nye.",
  notes: [
    { h: "Presens: he/she/it får -s", p: "På norsk er presens likt for alle: jeg bor, hun bor. På engelsk får verbet -s med he, she og it: I live, she lives. Dette er en av de vanligste feilene nordmenn gjør.",
      table: [["Verb", "I / you / we / they", "he / she / it"], ["live (bo)", "I live", "she lives"], ["come (komme)", "you come", "he comes"], ["speak (snakke)", "we speak", "she speaks"], ["work (jobbe)", "they work", "he works"]] },
    { h: "Spørsmål med spørreord", p: "Med «to be»: spørreord + verb + subjekt, som på norsk: Where are you from? Med andre verb trenger engelsk hjelpeverbet do: Where do you live? (ikke «Where live you?»). «Hvor ... fra» blir «Where ... from», med from på slutten." },
    { h: "Stor bokstav", p: "På norsk skriver vi språk og nasjonalitet med liten bokstav: norsk, engelsk. På engelsk har de stor bokstav: Norwegian, English. Også dager og måneder har stor bokstav: Monday, May." }
  ],
  tip: "«Hvor bor du?» blir ikke «Where live you?», men «Where do you live?». Og «Jeg snakker engelsk» skrives «I speak English» med stor E.",
  words: [
    W("name", "navn", "neim", "My name is Ola.", "Jeg heter Ola."),
    W("my", "min, mitt, mine", "mai", "My name is Kate.", "Jeg heter Kate."),
    W("your", "din, ditt, dine", "jår", "What's your name?", "Hva heter du?"),
    W("from", "fra", "fråmm", "I'm from Norway.", "Jeg er fra Norge."),
    W("live", "bo", "livv", "I live in Bergen.", "Jeg bor i Bergen.", { note: "he/she: lives" }),
    W("speak", "snakke", "spiik", "I speak Norwegian.", "Jeg snakker norsk.", { note: "he/she: speaks" }),
    W("what", "hva", "wått", "What's your name?", "Hva heter du?"),
    W("where", "hvor", "wær", "Where do you live?", "Hvor bor du?"),
    W("in", "i", "inn", "She lives in Oslo.", "Hun bor i Oslo."),
    W("English", "engelsk", "inglisj", "I speak a little English.", "Jeg snakker litt engelsk."),
    W("Norwegian", "norsk, nordmann", "nårwiidjen", "Do you speak Norwegian?", "Snakker du norsk?"),
    W("Norway", "Norge", "nårwei", "I'm from Norway.", "Jeg er fra Norge."),
    W("England", "England", "inglend", "We live in England.", "Vi bor i England."),
    W("a little", "litt", "e littel", "Yes, a little.", "Ja, litt."),
    W("now", "nå", "nau", "I live in London now.", "Jeg bor i London nå.")
  ],
  dialogue: [["A", "What's your name?", "Hva heter du?"], ["B", "My name is Ola. And you?", "Jeg heter Ola. Og du?"], ["A", "I'm Kate. Where are you from?", "Jeg er Kate. Hvor er du fra?"], ["B", "I'm from Norway. I live in London now.", "Jeg er fra Norge. Jeg bor i London nå."], ["A", "Do you speak English?", "Snakker du engelsk?"], ["B", "Yes, a little.", "Ja, litt."], ["A", "Nice to meet you!", "Hyggelig å hilse på deg!"], ["B", "Nice to meet you too!", "I like måte!"]],
  quiz: [
    { q: "«Hvor er du fra?»", o: ["Where are you from?", "Where you are from?", "From where you are?"], a: 0, e: "Spørreord + verb + subjekt, med from på slutten: Where are you from?" },
    { q: "«Hun bor i London.»", o: ["She lives in London.", "She live in London.", "She living in London.", "She is live in London."], a: 0, e: "he/she/it får -s i presens: lives." },
    { q: "«Hvor bor du?»", o: ["Where do you live?", "Where live you?", "Where you live?", "Where are you live?"], a: 0, e: "Andre verb enn «to be» trenger do i spørsmål: Where do you live?" },
    { q: "«Jeg snakker norsk.»", o: ["I speak Norwegian.", "I speak norwegian.", "I speaks Norwegian."], a: 0, e: "Språk skrives med stor bokstav på engelsk, og I får ikke -s." },
    { q: "Fyll inn: «I live ___ England.»", o: ["in", "from", "on"], a: 0, e: "in = i. I live in England = Jeg bor i England." }
  ],
  review: ["he/she/it får -s: she lives, he speaks.", "Spørsmål med andre verb trenger do: Where do you live?", "Språk og land med stor bokstav: English, Norway."]
},
{
  id: "nb-a0-4", title: "Tall 0–10", no: "Numbers", icon: "num",
  intro: "Vi lærer tallene fra 0 til 10, hvordan man spør om alder, og verbet «have» (ha).",
  notes: [
    { h: "Tallene", p: "0 har to uttaler: zero, og i telefonnumre ofte oh [åu].",
      table: [["Tall", "Engelsk", "Uttale"], ["0", "zero", "ziiråu"], ["1", "one", "wann"], ["2", "two", "tuu"], ["3", "three", "thrii"], ["4", "four", "får"], ["5", "five", "faiv"], ["6", "six", "siks"], ["7", "seven", "sevven"], ["8", "eight", "eit"], ["9", "nine", "nain"], ["10", "ten", "tenn"]] },
    { h: "have / has", p: "Å ha: I have, you have, we have, they have. Med he/she/it blir det has: She has two children. Nektelse: I don't have, she doesn't have." },
    { h: "Alder", p: "Som på norsk bruker engelsk «to be» om alder: I am eight (years old). Men du kan ikke si bare «I am eight years»; enten «I'm eight» eller «I'm eight years old». Spørsmål: How old are you?" }
  ],
  tip: "Nordmenn sier ofte «I have two kids» riktig, men glemmer has: «She have a car» er feil, det heter «She has a car». Og «I am 30 years» er feil; si «I'm 30» eller «I'm 30 years old».",
  words: [
    W("zero", "null", "ziiråu", "zero, one, two", "null, en, to"),
    W("one", "en, ett", "wann", "one, two, three", "en, to, tre"),
    W("two", "to", "tuu", "I have two children.", "Jeg har to barn."),
    W("three", "tre", "thrii", "We are three.", "Vi er tre."),
    W("four", "fire", "får", "She is four.", "Hun er fire."),
    W("five", "fem", "faiv", "They are five and eight.", "De er fem og åtte."),
    W("six", "seks", "siks", "He is six years old.", "Han er seks år gammel."),
    W("seven", "sju", "sevven", "She is seven.", "Hun er sju."),
    W("eight", "åtte", "eit", "I am eight years old.", "Jeg er åtte år gammel."),
    W("nine", "ni", "nain", "He is nine.", "Han er ni."),
    W("ten", "ti", "tenn", "We are ten.", "Vi er ti."),
    W("have", "ha", "hævv", "I have two children.", "Jeg har to barn.", { note: "he/she/it: has" }),
    W("child", "barn", "tsjaild", "Do you have children?", "Har du barn?", { note: "flertall: children [tsjildren]" }),
    W("year", "år", "jiir", "She is six years old.", "Hun er seks år gammel.", { note: "flertall: years" }),
    W("How old are you?", "Hvor gammel er du?", "hau åuld ar ju", "How old are you?", "Hvor gammel er du?")
  ],
  dialogue: [["A", "Do you have children?", "Har du barn?"], ["B", "Yes, I have two children.", "Ja, jeg har to barn."], ["A", "How old are they?", "Hvor gamle er de?"], ["B", "They are five and eight.", "De er fem og åtte."]],
  quiz: [
    { q: "3 + 4 = ?", o: ["seven", "six", "eight", "five"], a: 0, e: "3 + 4 = 7 = seven." },
    { q: "Hvordan uttales «two»?", o: ["[tuu] – w er stum", "[två]", "[twåu]"], a: 0, e: "I two er w stum: [tuu]." },
    { q: "«Jeg er åtte år gammel.»", o: ["I am eight years old.", "I have eight years.", "I am eight years.", "I have eight years old."], a: 0, e: "Alder med «to be», og helst med «old»: I am eight years old." },
    { q: "Hva betyr «How old are they?»", o: ["Hvor gamle er de?", "Hvor mange barn har de?", "Hvor bor de?"], a: 0, e: "How old = hvor gammel." },
    { q: "«to barn»", o: ["two children", "two child", "two childs"], a: 0, e: "child har uregelmessig flertall: children." },
    { q: "«Hun har to katter.»", o: ["She has two cats.", "She have two cats.", "She is two cats.", "She has two cat."], a: 0, e: "he/she/it bruker has, og etter tall kommer flertall: two cats." }
  ],
  review: ["have → has med he/she/it: She has a car.", "Alder: I'm 30 / I'm 30 years old (ikke I'm 30 years).", "child → children."]
},
{
  id: "nb-a0-5", title: "Substantiv: a, an, the", no: "Nouns and articles", icon: "house", pack: "words",
  intro: "Engelske substantiv har ikke kjønn, og den bestemte artikkelen står foran ordet, ikke bak. For nordmenn er dette både enklere og litt uvant.",
  notes: [
    { h: "Ingen en, ei, et", p: "Engelsk har ikke grammatisk kjønn. Alle substantiv bruker de samme ordene: a car, a girl, a house. Du trenger ikke lære kjønn slik du gjør på norsk." },
    { h: "the står foran", p: "På norsk legger vi bestemt form til slutten av ordet: bil → bilen, hus → huset. På engelsk står «the» foran: car → the car. a / an = en/ei/et. a foran konsonantlyd, an foran vokallyd. Det er uttalen som avgjør, ikke skrivemåten: an hour [auer], a university [juunivørsiti].",
      table: [["Ubestemt", "Bestemt", "Flertall"], ["a car", "the car", "cars"], ["an apple", "the apple", "apples"], ["a house", "the house", "houses"], ["a box", "the box", "boxes"], ["a man", "the man", "men"]] },
    { h: "Flertall", p: "Flertall lages som regel med -s: cars. Ord som slutter på -s, -sh, -ch, -x får -es: boxes, watches. Noen er uregelmessige og må pugges: man → men, woman → women, child → children." },
    { h: "Når bruker man the?", p: "Første gang man nevner noe: a/an. Etterpå, når begge vet hva det er snakk om: the. This is a house. Do you live in the house? Uttale: the foran konsonant [the], foran vokal [thi]." }
  ],
  tip: "Ikke legg bestemt form på slutten slik som på norsk: «car-en» finnes ikke, det heter «the car». Og husk at engelsk bruker a/an der norsk ofte dropper artikkelen: «Jeg har bil» blir «I have a car».",
  words: [
    W("boy", "gutt", "båi", "The boy is called Ali.", "Gutten heter Ali.", { note: "flertall: boys" }),
    W("girl", "jente", "gørl", "The girl is seven.", "Jenta er sju.", { note: "flertall: girls" }),
    W("house", "hus", "haus", "This is a house.", "Dette er et hus.", { note: "flertall: houses [hauziz]" }),
    W("car", "bil", "kar", "I have a car.", "Jeg har bil.", { note: "flertall: cars" }),
    W("job", "jobb", "djåbb", "I have a job in Oslo.", "Jeg har en jobb i Oslo.", { note: "flertall: jobs" }),
    W("apple", "eple", "æppel", "This is an apple.", "Dette er et eple.", { note: "an apple · flertall: apples" }),
    W("friend", "venn", "frend", "He is a friend.", "Han er en venn.", { note: "flertall: friends" }),
    W("day", "dag", "dei", "The day is nice.", "Dagen er fin.", { note: "flertall: days" }),
    W("man", "mann", "mæn", "The man is a teacher.", "Mannen er lærer.", { note: "uregelmessig flertall: men" }),
    W("woman", "kvinne", "wummen", "The woman is from Norway.", "Kvinnen er fra Norge.", { note: "uregelmessig flertall: women [wimmin]" }),
    W("This is ...", "Dette er ...", "this iz", "This is a car.", "Dette er en bil.", { tts: "This is" }),
    W("with", "med", "with", "I live with a friend.", "Jeg bor med en venn."),
    W("there", "der", "thær", "Do you live there?", "Bor du der?")
  ],
  dialogue: [["A", "What's this?", "Hva er dette?"], ["B", "This is a house.", "Dette er et hus."], ["A", "Do you live in the house?", "Bor du i huset?"], ["B", "Yes. I live there with two children, a boy and a girl.", "Ja. Jeg bor der med to barn, en gutt og ei jente."]],
  quiz: [
    { q: "Hva betyr «the house»?", o: ["huset", "et hus", "husene"], a: 0, e: "the står foran ordet og gjør det bestemt: a house (et hus) → the house (huset)." },
    { q: "Hva er riktig?", o: ["an apple", "a apple", "an car", "a egg"], a: 0, e: "an foran vokallyd: an apple, an egg." },
    { q: "Flertall av «box»?", o: ["boxes", "boxs", "box"], a: 0, e: "Ord på -x får -es: boxes." },
    { q: "Flertall av «woman»?", o: ["women", "womans", "womens", "woman"], a: 0, e: "Uregelmessig flertall: woman → women [wimmin]." },
    { q: "Hva er riktig? (h er stum i hour)", o: ["an hour", "a hour", "the an hour"], a: 0, e: "hour [auer] begynner med vokallyd, derfor an hour." },
    { q: "«Jeg har bil.»", o: ["I have a car.", "I have car.", "I have the car-en."], a: 0, e: "Et entallsord kan ikke stå alene på engelsk: I have a car." }
  ],
  review: ["Ingen kjønn: a car, a girl, a house.", "the står foran: the car (ikke «car-en»).", "a foran konsonantlyd, an foran vokallyd: an hour."]
},
{
  id: "nb-a0-6", title: "Verb og ordstilling", no: "Verbs and word order", icon: "arrow", pack: "sentences",
  intro: "Vanlige verb, nektelse med don't, og den viktigste forskjellen fra norsk: engelsk har ikke verbet på andreplass.",
  notes: [
    { h: "Ikke V2 på engelsk", p: "På norsk står verbet alltid på andreplass: I dag jobber jeg. På engelsk står subjektet foran verbet, uansett hva setningen begynner med: Today I work. «Today work I» er feil.",
      table: [["Først", "Subjekt", "Verb + resten"], ["", "I", "drink coffee."], ["Today", "I", "work at home."], ["In the morning", "she", "drinks tea."]] },
    { h: "Nektelse: don't / doesn't", p: "Norsk setter «ikke» etter verbet: Jeg forstår ikke. Engelsk bruker hjelpeverbet do: I don't understand. Med he/she/it: doesn't, og da får hovedverbet ikke -s: She doesn't work today. «I understand not» og «She doesn't works» er feil." },
    { h: "Spørsmål: Do / Does", p: "På norsk flytter vi verbet først: Jobber du i dag? På engelsk begynner ja/nei-spørsmål med Do eller Does: Do you work today? Does he speak English? Svar: Yes, I do. / No, he doesn't." },
    { h: "can / want to", p: "Etter can (kan) kommer verbet uten to: Can you speak slowly? Etter want (vil) kommer to: Do you want to eat dinner? Merk: «want» betyr å ønske, ikke fremtid som norsk «vil»." }
  ],
  tip: "Norsk ordstilling smitter lett: «Today work I at home» og «Understand you?» er feil. Det skal være «Today I work at home» og «Do you understand?».",
  words: [
    W("go", "gå, dra", "gåu", "I go to work.", "Jeg drar på jobb.", { note: "he/she: goes" }),
    W("eat", "spise", "iit", "We eat dinner at five.", "Vi spiser middag klokka fem."),
    W("drink", "drikke", "drink", "She drinks coffee.", "Hun drikker kaffe."),
    W("learn", "lære (selv)", "lørn", "I learn English.", "Jeg lærer engelsk.", { note: "lære bort = teach" }),
    W("work", "jobbe, arbeide", "wørk", "He works in Oslo.", "Han jobber i Oslo."),
    W("understand", "forstå", "anderstænd", "Do you understand?", "Forstår du?"),
    W("can", "kan", "kæn", "Can you speak slowly?", "Kan du snakke sakte?"),
    W("want", "ville ha, ønske", "wånt", "Do you want to eat dinner?", "Vil du spise middag?"),
    W("don't", "ikke (med do)", "dåunt", "I don't understand.", "Jeg forstår ikke.", { note: "do not · he/she/it: doesn't" }),
    W("today", "i dag", "tudei", "I don't work today.", "Jeg jobber ikke i dag."),
    W("tonight", "i kveld", "tunait", "I work tonight.", "Jeg jobber i kveld."),
    W("dinner", "middag", "dinner", "Dinner is ready.", "Middagen er klar."),
    W("coffee", "kaffe", "kåffi", "Coffee, please.", "Kaffe, takk."),
    W("together", "sammen", "tugether", "We eat together.", "Vi spiser sammen."),
    W("of course", "selvfølgelig", "åv kårs", "Yes, of course!", "Ja, selvfølgelig!"),
    W("slowly", "sakte", "slåuli", "Can you speak slowly?", "Kan du snakke sakte?")
  ],
  dialogue: [["A", "Do you work today?", "Jobber du i dag?"], ["B", "No, I don't work today. I have an English class.", "Nei, jeg jobber ikke i dag. Jeg har engelsktime."], ["A", "Great! Do you want to eat dinner together tonight?", "Så bra! Vil du spise middag sammen i kveld?"], ["B", "Sorry, can you speak slowly?", "Unnskyld, kan du snakke sakte?"], ["A", "Do you want – to eat dinner – together?", "Vil du – spise middag – sammen?"], ["B", "Yes, of course!", "Ja, selvfølgelig!"]],
  quiz: [
    { q: "«Jeg forstår ikke.»", o: ["I don't understand.", "I understand not.", "I not understand.", "I am not understand."], a: 0, e: "Nektelse med do: I don't understand." },
    { q: "«I dag jobber jeg hjemme.»", o: ["Today I work at home.", "Today work I at home.", "Today I am work at home.", "I today work at home."], a: 0, e: "Engelsk har ikke V2: subjektet står foran verbet: Today I work." },
    { q: "Fyll inn: «She ___ coffee.» (drikke)", o: ["drinks", "drink", "is drink"], a: 0, e: "he/she/it får -s i presens: drinks." },
    { q: "«Forstår du?»", o: ["Do you understand?", "Understand you?", "You understand?"], a: 0, e: "Ja/nei-spørsmål begynner med Do: Do you understand?" },
    { q: "«Han jobber ikke i dag.»", o: ["He doesn't work today.", "He don't work today.", "He doesn't works today.", "He works not today."], a: 0, e: "he/she/it: doesn't + verb uten -s: doesn't work." },
    { q: "Hvorfor har ikke «speak» to i «Can you speak slowly?»", o: ["Etter can kommer verbet uten to", "Spørsmål har aldri to", "you tar aldri to"], a: 0, e: "can + verb uten to: can speak, can understand." }
  ],
  review: ["Ikke V2: Today I work (ikke Today work I).", "Nektelse: don't / doesn't + verb uten -s.", "Spørsmål: Do you ...? Does she ...?"]
}
];

export default atLevel("A0", A0);
