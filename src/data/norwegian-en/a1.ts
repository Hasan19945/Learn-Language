import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A1: LessonDef[] = [
{
  id: "ne-a1-1", title: "Family", no: "Familien", icon: "people",
  intro: "We talk about the family and learn how to say my, your and our, which often come after the noun in Norwegian.",
  notes: [
    { h: "Possessives after the noun", p: "The natural way is noun with \"the\" + possessive: faren min (literally \"the father my\"). Min can also go first (min far), but this sounds emphatic.",
      table: [["en", "ei", "et", "plural"], ["faren min", "mora mi", "barnet mitt", "barna mine"], ["faren din", "mora di", "barnet ditt", "barna dine"]] },
    { h: "Possessives agree with the noun", p: "min / mi / mitt / mine all mean \"my\". The form follows the noun's gender, not the owner. Hans (his) and hennes (her) never change." },
    { h: "Family words", p: "Norwegian builds grandparents logically: farfar is your father's father, mormor your mother's mother." }
  ],
  tip: "English has just \"my\", so learners forget to match it: it's barnet mitt, not barnet min. And sønn is son, but søster is sister, so check the spelling closely.",
  words: [
    N("en", "familie", "familien", "familier", "family", "fah-MEE-lee-eh", "Familien min bor i Bergen.", "My family lives in Bergen."),
    N("en", "far", "faren", "fedre", "father", "far", "Faren min heter Ola.", "My father is called Ola."),
    N("ei", "mor", "mora", "mødre", "mother", "moor", "Mora mi er lærer.", "My mother is a teacher."),
    N("en", "bror", "broren", "brødre", "brother", "broor", "Broren min er seks år.", "My brother is six."),
    N("ei", "søster", "søstera", "søstre", "sister", "SUR-ster", "Søstera mi bor i Oslo.", "My sister lives in Oslo."),
    N("en", "sønn", "sønnen", "sønner", "son", "surn", "Sønnen min går på skolen.", "My son goes to school."),
    N("ei", "datter", "datteren", "døtre", "daughter", "DAH-ter", "Datteren min er ni år.", "My daughter is nine."),
    N("en", "mann", "mannen", "menn", "man, husband", "mahn", "Mannen min jobber i dag.", "My husband is working today."),
    N("ei", "kone", "kona", "koner", "wife", "KOO-neh", "Kona mi er fra Norge.", "My wife is from Norway."),
    W("min", "my", "meen", "Det er vennen min.", "That's my friend.", { note: "mi, mitt, mine" }),
    W("din", "your", "deen", "Er det broren din?", "Is that your brother?", { note: "di, ditt, dine" }),
    W("gift", "married", "yift", "Er du gift?", "Are you married?")
  ],
  dialogue: [["A", "Har du søsken?", "Do you have brothers and sisters?"], ["B", "Ja, jeg har en bror og ei søster.", "Yes, I have a brother and a sister."], ["A", "Bor de i Oslo?", "Do they live in Oslo?"], ["B", "Broren min bor i Oslo. Søstera mi bor i Bergen.", "My brother lives in Oslo. My sister lives in Bergen."], ["A", "Er du gift?", "Are you married?"], ["B", "Ja, kona mi heter Kari.", "Yes, my wife is called Kari."]],
  quiz: [
    { q: "\"my father\" (the usual way)", o: ["faren min", "min faren", "far min", "faren mitt"], a: 0, e: "Noun with \"the\" + possessive: faren min." },
    { q: "\"my child\" (et barn)", o: ["barnet mitt", "barnet min", "barnet mi", "mitt barnet"], a: 0, e: "An et-word takes mitt." },
    { q: "What decides min / mi / mitt?", o: ["The noun's gender", "The owner's gender", "The number of owners"], a: 0, e: "It agrees with the noun, not the owner." },
    { q: "What is your mother's mother called?", o: ["mormor", "farmor", "morfar", "søster"], a: 0, e: "mor + mor = mormor." },
    { q: "What does \"kona mi\" mean?", o: ["my wife", "my daughter", "my mother"], a: 0, e: "ei kone → kona mi." }
  ],
  review: ["Noun with \"the\" + possessive: faren min, mora mi, barnet mitt.", "The possessive agrees with the noun.", "mormor, morfar, farmor, farfar say exactly who they are."]
},
{
  id: "ne-a1-2", title: "Shopping and big numbers", no: "I butikken", icon: "bag",
  intro: "We go shopping, count up to a thousand and ask what things cost. In Norway you pay in kroner.",
  notes: [
    { h: "Numbers", p: "From 20 up, tens come first, as in English: tjueen (21), femtisju (57). You may hear the old pattern enogtjue in older speech.",
      table: [["10s", "Norwegian"], ["11, 12", "elleve, tolv"], ["13–19", "tretten ... nitten"], ["20, 30", "tjue, tretti"], ["40, 50", "førti, femti"], ["60, 70", "seksti, sytti"], ["80, 90", "åtti, nitti"], ["100, 1000", "hundre, tusen"]] },
    { h: "Prices", p: "Det koster 50 kroner. The question is Hva koster det? The singular is ei krone (one krone), and the plural kroner." },
    { h: "Asking politely", p: "\"I would like\" is Jeg vil gjerne ha. It's politer than Jeg vil ha (I want). And kan jeg få ...? (can I have ...?) is very common in shops." }
  ],
  tip: "Don't translate \"please\" with a separate word. \"A coffee, please\" is \"En kaffe, takk\". Also Norwegian billig means cheap, and has nothing to do with \"bill\".",
  words: [
    W("koster", "cost, costs", "KOS-ter", "Hva koster det?", "What does it cost?", { note: "infinitive: koste" }),
    W("kjøper", "buy, buys", "SHUR-per", "Jeg kjøper melk.", "I'm buying milk.", { note: "infinitive: kjøpe" }),
    W("betaler", "pay, pays", "beh-TAH-ler", "Jeg betaler med kort.", "I'm paying by card.", { note: "infinitive: betale" }),
    W("Jeg vil gjerne ha", "I would like", "yay vil YAR-neh hah", "Jeg vil gjerne ha en kaffe.", "I would like a coffee."),
    N("en", "krone", "kronen", "kroner", "krone", "KROO-neh", "Det koster femti kroner.", "It costs fifty kroner."),
    N("et", "kort", "kortet", "kort", "card", "kort", "Kan jeg betale med kort?", "Can I pay by card?"),
    W("melk", "milk", "melk", "Har dere melk?", "Do you have milk?"),
    N("et", "brød", "brødet", "brød", "bread", "brur", "Jeg kjøper et brød.", "I'm buying a loaf of bread."),
    W("dyr", "expensive", "dewr", "Det er for dyrt.", "It's too expensive.", { note: "dyrt with et" }),
    W("billig", "cheap", "BIL-lee", "Melk er billig her.", "Milk is cheap here."),
    W("hundre", "a hundred", "HOON-dreh", "Det koster hundre kroner.", "It costs a hundred kroner."),
    W("tjue", "twenty", "SHOO-eh", "Jeg er tjue år.", "I am twenty."),
    W("femti", "fifty", "FEM-tee", "Han er femti år.", "He is fifty."),
    W("noe annet", "anything else", "NOO-eh AHN-net", "Skal du ha noe annet?", "Would you like anything else?")
  ],
  dialogue: [["A", "Hei! Hva skal det være?", "Hi! What can I get you?"], ["B", "Jeg vil gjerne ha en kaffe og et brød.", "I would like a coffee and a loaf of bread."], ["A", "Skal du ha noe annet?", "Would you like anything else?"], ["B", "Nei, takk. Hva koster det?", "No, thanks. What does it cost?"], ["A", "Det koster hundre kroner.", "It costs a hundred kroner."], ["B", "Kan jeg betale med kort?", "Can I pay by card?"]],
  quiz: [
    { q: "The number 57?", o: ["femtisju", "syttifem", "femogsytti", "femtiseks"], a: 0, e: "Tens first: femti + sju." },
    { q: "\"What does it cost?\"", o: ["Hva koster det?", "Hva det koster?", "Hvor mye gjør det koste?"], a: 0, e: "Question word + verb + subject." },
    { q: "The politest order:", o: ["Jeg vil gjerne ha en kaffe.", "Jeg vil ha en kaffe.", "Gi meg kaffe."], a: 0, e: "Jeg vil gjerne ha = I would like." },
    { q: "What does \"billig\" mean?", o: ["cheap", "expensive", "bill"], a: 0, e: "billig = cheap; dyr = expensive." },
    { q: "\"fifty kroner\"", o: ["femti kroner", "femti krone", "femtien kroner"], a: 0, e: "Plural after numbers: kroner." }
  ],
  review: ["From 20 up, tens come first: femtisju.", "Hva koster det? Det koster ... kroner.", "Jeg vil gjerne ha ... = I would like ..."]
},
{
  id: "ne-a1-3", title: "Telling the time", no: "Klokka", icon: "clock",
  intro: "We ask the time and talk about days. One Norwegian expression surprises every English speaker: halv fire.",
  notes: [
    { h: "Half past is half to", p: "halv fire means half way TO four, so 3:30, not 4:30. English \"half four\" means the opposite, so be careful!",
      table: [["Time", "Norwegian"], ["3:00", "klokka tre"], ["3:15", "kvart over tre"], ["3:30", "halv fire"], ["3:45", "kvart på fire"], ["3:25", "fem på halv fire"], ["3:35", "fem over halv fire"]] },
    { h: "Days", p: "Days and months take a small letter, unlike English: mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag." },
    { h: "When?", p: "\"at three\" is klokka tre. \"on Monday\" is på mandag. Hva er klokka? means What time is it? (literally \"What is the clock?\")." }
  ],
  tip: "British speakers: \"half four\" means 4:30, but Norwegian halv fire means 3:30. Getting this wrong makes you an hour late or half an hour early! Also write mandag with a small m.",
  words: [
    W("Hva er klokka?", "What time is it?", "vah ar KLOK-kah", "Unnskyld, hva er klokka?", "Excuse me, what time is it?"),
    W("klokka", "at ... o'clock", "KLOK-kah", "Jeg kommer klokka tre.", "I'm coming at three."),
    W("halv", "half", "hahl", "Klokka er halv fire.", "It's half past three.", { note: "halv fire = 3:30" }),
    W("kvart", "quarter", "kvart", "Klokka er kvart over tre.", "It's quarter past three."),
    W("over", "past", "AW-ver", "Klokka er ti over fem.", "It's ten past five."),
    W("på", "to (with time)", "paw", "Klokka er ti på fem.", "It's ten to five."),
    W("mandag", "Monday", "MAHN-dah", "Jeg jobber på mandag.", "I'm working on Monday."),
    W("fredag", "Friday", "FREH-dah", "På fredag spiser vi ute.", "On Friday we're eating out."),
    W("lørdag", "Saturday", "LUR-dah", "Vi er hjemme på lørdag.", "We're at home on Saturday."),
    W("søndag", "Sunday", "SURN-dah", "Butikken er stengt på søndag.", "The shop is closed on Sunday."),
    W("i morgen", "tomorrow", "ee MOR-en", "Vi ses i morgen!", "See you tomorrow!"),
    W("stengt", "closed", "stengt", "Banken er stengt nå.", "The bank is closed now."),
    W("åpen", "open", "AW-pen", "Er butikken åpen?", "Is the shop open?")
  ],
  dialogue: [["A", "Unnskyld, hva er klokka?", "Excuse me, what time is it?"], ["B", "Klokka er halv fire.", "It's half past three."], ["A", "Takk! Er butikken åpen nå?", "Thanks! Is the shop open now?"], ["B", "Ja, men den stenger klokka fire.", "Yes, but it closes at four."], ["A", "Er den åpen i morgen?", "Is it open tomorrow?"], ["B", "Nei, i morgen er det søndag.", "No, tomorrow is Sunday."]],
  quiz: [
    { q: "What time is \"halv fire\"?", o: ["3:30", "4:30", "4:15", "3:45"], a: 0, e: "Half way to four = 3:30." },
    { q: "\"quarter to eight\"", o: ["kvart på åtte", "kvart over åtte", "halv åtte"], a: 0, e: "på = to; over = past." },
    { q: "\"at three o'clock\"", o: ["klokka tre", "på tre", "i tre"], a: 0, e: "Use klokka with times." },
    { q: "\"on Monday\"", o: ["på mandag", "på Mandag", "i mandag"], a: 0, e: "på + day, with a small letter." },
    { q: "What does \"stengt\" mean?", o: ["closed", "open", "tomorrow"], a: 0, e: "stengt = closed; åpen = open." }
  ],
  review: ["halv fire = 3:30, half way TO four.", "kvart over tre (3:15), kvart på fire (3:45).", "Days have a small letter: på mandag."]
},
{
  id: "ne-a1-4", title: "At home", no: "Hjemme", icon: "house",
  intro: "We describe a home and learn how adjectives change. Norwegian adjectives follow the noun's gender and number.",
  notes: [
    { h: "Adjectives change", p: "English adjectives never change. In Norwegian they take -t with et-words and -e in the plural.",
      table: [["en / ei", "et", "plural"], ["en stor bil", "et stort hus", "store hus"], ["en fin dag", "et fint rom", "fine rom"], ["ei lita stue", "et lite rom", "små rom"]] },
    { h: "Prepositions: i or på?", p: "Most rooms use i: i stua, i soverommet. But kitchen and bathroom use på: på kjøkkenet, på badet. This has to be learned word by word." },
    { h: "There is", p: "\"There is\" is Det er: Det er to rom i leiligheten (There are two rooms in the flat). Same form for singular and plural." }
  ],
  tip: "Don't say \"et stor hus\": et-words need -t. And liten (small) is irregular: en liten bil, ei lita stue, et lite rom, små rom.",
  words: [
    N("et", "rom", "rommet", "rom", "room", "room", "Rommet er stort.", "The room is big."),
    N("et", "kjøkken", "kjøkkenet", "kjøkken", "kitchen", "SHUR-ken", "Vi spiser på kjøkkenet.", "We eat in the kitchen."),
    N("et", "bad", "badet", "bad", "bathroom", "bahd", "Badet er lite.", "The bathroom is small."),
    N("ei", "stue", "stua", "stuer", "living room", "STEW-eh", "Vi sitter i stua.", "We're sitting in the living room."),
    N("et", "soverom", "soverommet", "soverom", "bedroom", "SAW-veh-room", "Leiligheten har to soverom.", "The flat has two bedrooms."),
    N("ei", "seng", "senga", "senger", "bed", "seng", "Senga er ny.", "The bed is new."),
    N("et", "bord", "bordet", "bord", "table", "boor", "Maten er på bordet.", "The food is on the table."),
    N("en", "stol", "stolen", "stoler", "chair", "stool", "Stolen er fin.", "The chair is nice."),
    W("stor", "big", "stoor", "Vi har et stort hus.", "We have a big house.", { note: "stort, store" }),
    W("liten", "small", "LEE-ten", "Jeg har en liten leilighet.", "I have a small flat.", { note: "lita, lite, små" }),
    W("ny", "new", "new", "Vi har en ny bil.", "We have a new car.", { note: "nytt, nye" }),
    W("gammel", "old", "GAH-mel", "Huset er gammelt.", "The house is old.", { note: "gammelt, gamle" }),
    W("hjemme", "at home", "YEM-meh", "Jeg er hjemme nå.", "I'm at home now.")
  ],
  dialogue: [["A", "Bor du i et hus?", "Do you live in a house?"], ["B", "Nei, jeg bor i en liten leilighet.", "No, I live in a small flat."], ["A", "Hvor mange rom har den?", "How many rooms does it have?"], ["B", "Den har to soverom, ei stue og et lite kjøkken.", "It has two bedrooms, a living room and a small kitchen."], ["A", "Er den ny?", "Is it new?"], ["B", "Nei, huset er gammelt, men badet er nytt.", "No, the building is old, but the bathroom is new."]],
  quiz: [
    { q: "\"a big house\" (et hus)", o: ["et stort hus", "et stor hus", "et store hus"], a: 0, e: "et-words: adjective + t." },
    { q: "\"big houses\"", o: ["store hus", "stort hus", "stor hus", "storer hus"], a: 0, e: "Plural: adjective + e." },
    { q: "\"in the kitchen\"", o: ["på kjøkkenet", "i kjøkkenet", "til kjøkkenet"], a: 0, e: "Kitchen and bathroom take på." },
    { q: "\"a small room\" (et rom)", o: ["et lite rom", "et liten rom", "et lita rom"], a: 0, e: "liten is irregular: et lite rom." },
    { q: "What does \"hjemme\" mean?", o: ["at home", "home (to)", "house"], a: 0, e: "Jeg er hjemme = I'm at home." }
  ],
  review: ["et-words: stort. Plural: store.", "liten, lita, lite, små.", "på kjøkkenet, på badet, but i stua."]
},
{
  id: "ne-a1-5", title: "Weather and free time", no: "Vær og fritid", icon: "sun",
  intro: "Norwegians love talking about the weather. We also learn to say what we like doing with liker å.",
  notes: [
    { h: "Det for weather", p: "Weather sentences start with det, like English \"it\": Det regner (It's raining). Det snør (It's snowing). Det er kaldt (It's cold)." },
    { h: "liker å + infinitive", p: "\"I like reading\" uses the infinitive with å: Jeg liker å lese. Norwegian has no -ing form here: never \"liker leser\"." },
    { h: "å in spelling", p: "The infinitive marker å sounds like \"aw\" and matches English \"to\": å lese = to read. After kan, vil, må and skal it disappears: Jeg kan lese." }
  ],
  tip: "Norwegian says \"Det er kaldt\", with -t, because det is treated as an et-word. Also Norwegians have a saying: \"Det finnes ikke dårlig vær, bare dårlige klær\" (there's no bad weather, only bad clothes).",
  words: [
    W("været", "the weather", "VAIR-eh", "Hvordan er været i dag?", "What's the weather like today?"),
    W("Det regner", "It's raining", "deh RAY-ner", "Det regner i Bergen.", "It's raining in Bergen."),
    W("Det snør", "It's snowing", "deh snur", "Det snør i dag.", "It's snowing today."),
    W("kald", "cold", "kahl", "Det er kaldt i dag.", "It's cold today.", { note: "kaldt, kalde" }),
    W("varm", "warm, hot", "varm", "Det er varmt i stua.", "It's warm in the living room.", { note: "varmt, varme" }),
    W("sol", "sun", "sool", "Det er sol i dag.", "It's sunny today."),
    W("liker", "like, likes", "LEE-ker", "Jeg liker å lese.", "I like reading.", { note: "infinitive: like" }),
    W("leser", "read, reads", "LEH-ser", "Hun leser ei bok.", "She is reading a book.", { note: "infinitive: lese" }),
    W("trener", "exercise, exercises", "TREH-ner", "Han trener hver dag.", "He exercises every day.", { note: "infinitive: trene" }),
    W("går på ski", "go skiing", "gawr paw shee", "Vi går på ski på søndag.", "We're going skiing on Sunday."),
    W("går tur", "go for a walk", "gawr toor", "Jeg går tur i dag.", "I'm going for a walk today."),
    W("hver dag", "every day", "var dahg", "Jeg lærer norsk hver dag.", "I learn Norwegian every day."),
    N("ei", "bok", "boka", "bøker", "book", "book", "Boka er bra.", "The book is good.")
  ],
  dialogue: [["A", "Hvordan er været i dag?", "What's the weather like today?"], ["B", "Det er kaldt, men det er sol.", "It's cold, but it's sunny."], ["A", "Vil du gå tur?", "Do you want to go for a walk?"], ["B", "Ja, gjerne! Jeg liker å gå tur.", "Yes, I'd love to! I like going for walks."], ["A", "Går du på ski også?", "Do you ski too?"], ["B", "Nei, jeg kan ikke gå på ski ennå.", "No, I can't ski yet."]],
  quiz: [
    { q: "\"I like reading.\"", o: ["Jeg liker å lese.", "Jeg liker lese.", "Jeg liker leser.", "Jeg liker leseing."], a: 0, e: "liker å + infinitive." },
    { q: "\"It's cold.\"", o: ["Det er kaldt.", "Det er kald.", "Den er kalde."], a: 0, e: "With det, the adjective takes -t." },
    { q: "What does \"Det snør\" mean?", o: ["It's snowing.", "It's raining.", "It's sunny."], a: 0, e: "snø = snow." },
    { q: "Which sentence is right?", o: ["Jeg kan lese.", "Jeg kan å lese.", "Jeg kan leser."], a: 0, e: "After kan, the å disappears." },
    { q: "\"every day\"", o: ["hver dag", "alle dag", "hver dager"], a: 0, e: "hver + singular, like English \"every\"." }
  ],
  review: ["Det regner, Det snør, Det er kaldt.", "liker å + infinitive; no -ing form.", "After kan, vil, må and skal, no å."]
},
{
  id: "ne-a1-6", title: "Getting around", no: "Transport", icon: "bus",
  intro: "We take the bus and train, ask the way and learn må and skal, two verbs you'll use all the time.",
  notes: [
    { h: "må and skal", p: "må means must / have to. skal shows a plan, like English \"be going to\". Both take a bare infinitive: Jeg må gå. Jeg skal ta bussen." },
    { h: "Taking transport", p: "Use ta for buses and trains, as in English: Jeg tar bussen. Going on foot is gå: Jeg går til jobben. Driving is kjøre." },
    { h: "Going somewhere", p: "til = to: Jeg skal til Bergen. In Norwegian, you often drop the verb after skal and må when the direction is clear: Jeg må hjem (I have to go home)." }
  ],
  tip: "Norwegian gå only means going on foot, so \"Jeg går til Bergen\" sounds like you're walking there! Use reiser or skal til. And skal doesn't mean \"shall\" as in formal English; it's the everyday way of talking about plans.",
  words: [
    N("en", "buss", "bussen", "busser", "bus", "boos", "Bussen kommer nå.", "The bus is coming now."),
    N("et", "tog", "toget", "tog", "train", "tawg", "Toget går klokka ni.", "The train leaves at nine."),
    N("en", "billett", "billetten", "billetter", "ticket", "bi-LET", "Jeg må kjøpe en billett.", "I have to buy a ticket."),
    N("en", "stasjon", "stasjonen", "stasjoner", "station", "stah-SHOON", "Hvor er stasjonen?", "Where is the station?"),
    W("tar", "take, takes", "tar", "Jeg tar bussen til jobben.", "I take the bus to work.", { note: "infinitive: ta" }),
    W("må", "must, have to", "maw", "Jeg må gå nå.", "I have to go now."),
    W("skal", "am going to", "skahl", "Vi skal til Bergen.", "We're going to Bergen."),
    W("til", "to", "til", "Bussen går til sentrum.", "The bus goes to the centre."),
    W("til venstre", "to the left", "til VEN-streh", "Gå til venstre her.", "Go left here."),
    W("til høyre", "to the right", "til HOY-reh", "Stasjonen er til høyre.", "The station is on the right."),
    W("rett fram", "straight ahead", "ret frahm", "Gå rett fram.", "Go straight ahead."),
    W("langt", "far", "lahngt", "Er det langt?", "Is it far?"),
    W("sentrum", "the town centre", "SEN-troom", "Jeg bor i sentrum.", "I live in the centre.")
  ],
  dialogue: [["A", "Unnskyld, hvor er stasjonen?", "Excuse me, where is the station?"], ["B", "Gå rett fram og så til venstre.", "Go straight ahead and then left."], ["A", "Er det langt?", "Is it far?"], ["B", "Nei, det tar fem minutter.", "No, it takes five minutes."], ["A", "Takk! Jeg skal ta toget til Bergen.", "Thanks! I'm going to take the train to Bergen."], ["B", "Da må du kjøpe billett først.", "Then you have to buy a ticket first."]],
  quiz: [
    { q: "\"I have to take the bus.\"", o: ["Jeg må ta bussen.", "Jeg må å ta bussen.", "Jeg må tar bussen.", "Jeg tar må bussen."], a: 0, e: "må + infinitive, without å." },
    { q: "\"I'm going to Bergen\" (by train)", o: ["Jeg skal til Bergen.", "Jeg går til Bergen.", "Jeg må Bergen."], a: 0, e: "går means on foot; skal til shows the plan." },
    { q: "\"to the right\"", o: ["til høyre", "til venstre", "rett fram"], a: 0, e: "høyre = right; venstre = left." },
    { q: "What does \"Er det langt?\" mean?", o: ["Is it far?", "Is it long?", "Is it late?"], a: 0, e: "langt = far (with distance)." },
    { q: "\"We're going to eat.\"", o: ["Vi skal spise.", "Vi skal å spise.", "Vi skal spiser."], a: 0, e: "skal + infinitive." }
  ],
  review: ["må = must, skal = plan; both + infinitive.", "ta bussen, kjøre bil, gå on foot.", "til venstre, til høyre, rett fram."]
}
];

export default atLevel("A1", A1);
