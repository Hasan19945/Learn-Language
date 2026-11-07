import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A0: LessonDef[] = [
{
  id: "ne-a0-1", title: "Greetings", no: "Hilsener", icon: "chat",
  intro: "We start with the sounds of Norwegian and everyday greetings. You'll hear these phrases every day in Norway.",
  notes: [
    { h: "The Norwegian alphabet", p: "Norwegian has 29 letters: the English 26 plus æ, ø and å. The sounds below are approximate; listening is the best way to learn them.",
      table: [["Letter", "Roughly like", "Example"], ["æ", "a in \"bad\"", "lærer"], ["ø", "u in \"burn\", lips rounded", "brød [brur]"], ["å", "aw in \"law\"", "nå [naw]"], ["y", "ee with rounded lips", "ny [new]"], ["j", "y in \"yes\"", "ja [yah]"], ["o", "often oo", "god [goo], bor [boor]"]] },
    { h: "Silent letters", p: "In words starting with hv-, the h is silent: hva [vah], hvordan [VOOR-dan]. Final -d is often silent too: god [goo], kveld [kvel]. In Eastern Norway, rs sounds like \"sh\": norsk [noshk]." },
    { h: "Saying please", p: "Norwegian has no single everyday word for \"please\". People use takk (thank you): \"Ja, takk\" means \"Yes, please\". This is not rude; it's just how the language works." }
  ],
  tip: "Don't read Norwegian j as in \"jam\": it's always like y in \"yes\". And hei sounds like English \"hi\" or \"hay\", but ha det [HAH-deh] means goodbye, not hello.",
  words: [
    W("hei", "hi, hello", "hay", "Hei, Anna!", "Hi, Anna!"),
    W("god morgen", "good morning", "goo MOR-en", "God morgen! Hvordan har du det?", "Good morning! How are you?"),
    W("god kveld", "good evening", "goo kvel", "God kveld, Tom!", "Good evening, Tom!"),
    W("ha det", "goodbye", "HAH-deh", "Ha det bra!", "Goodbye!"),
    W("takk", "thank you", "tahk", "Ja, takk.", "Yes, please."),
    W("bra", "good, well", "brah", "Bra, takk.", "Fine, thanks."),
    W("unnskyld", "excuse me, sorry", "OON-shool", "Unnskyld!", "Excuse me!"),
    W("ja", "yes", "yah", "Ja, takk.", "Yes, please."),
    W("nei", "no", "nay", "Nei, takk.", "No, thanks."),
    W("og", "and", "aw", "Bra, takk. Og du?", "Fine, thanks. And you?"),
    W("Hvordan har du det?", "How are you?", "VOOR-dan har doo deh", "Hei! Hvordan har du det?", "Hi! How are you?")
  ],
  dialogue: [["A", "God morgen!", "Good morning!"], ["B", "God morgen! Hvordan har du det?", "Good morning! How are you?"], ["A", "Bra, takk. Og du?", "Fine, thanks. And you?"], ["B", "Bra, takk.", "Fine, thanks."], ["A", "Ha det!", "Bye!"], ["B", "Ha det bra!", "Goodbye!"]],
  quiz: [
    { q: "How is \"hvordan\" pronounced?", o: ["[VOOR-dan]: the h is silent", "[HVOR-dan]: h and v are both said", "[HOR-dan]: the v is silent"], a: 0, e: "In hv- words, the h is silent, and o sounds like oo here." },
    { q: "What's a good answer to \"Hvordan har du det?\"", o: ["Bra, takk.", "Ha det!", "God kveld!", "Nei."], a: 0, e: "\"How are you?\" → \"Bra, takk\" (Fine, thanks)." },
    { q: "How do you say \"Yes, please\"?", o: ["Ja, takk.", "Ja, unnskyld.", "Ja, bra."], a: 0, e: "Norwegian uses takk: Ja, takk." },
    { q: "\"god\" sounds closest to ...", o: ["[goo]", "[god]", "[got]"], a: 0, e: "The final d is silent and o sounds like oo: god morgen [goo MOR-en]." }
  ],
  review: ["In hv- words the h is silent: hva [vah].", "Final -d is often silent: god [goo], kveld [kvel].", "\"Please\" is usually takk: Ja, takk."]
},
{
  id: "ne-a0-2", title: "I, you, he, she", no: "Pronomen og «er»", icon: "people",
  intro: "We learn the personal pronouns and the most important verb, er (am, is, are). With these you can build your first full sentences.",
  notes: [
    { h: "Personal pronouns", p: "Most of these look familiar, but watch the pronunciation of jeg and de.",
      table: [["Norwegian", "English", "Say"], ["jeg", "I", "yay"], ["du", "you (one person)", "doo"], ["han", "he", "hahn"], ["hun", "she", "hewn"], ["vi", "we", "vee"], ["dere", "you (several)", "DEH-reh"], ["de", "they", "dee"]] },
    { h: "One verb form for everyone", p: "English says I am, you are, she is. Norwegian only has er: jeg er, du er, hun er, vi er, de er. This is true of all Norwegian verbs, so you never need to add -s for he and she." },
    { h: "No article with jobs", p: "Unlike English, jobs take no article: Jeg er student (I am a student). Han er lærer (He is a teacher)." },
    { h: "Questions start with the verb", p: "Statement: Du er student. Question: Er du student? There is no \"do\" helper in Norwegian." }
  ],
  tip: "Don't translate \"a\" with jobs: \"Jeg er en lærer\" sounds wrong for simply stating your job. And \"you\" has two forms: du for one person, dere for several. Norwegians use du with almost everyone, including doctors and bosses.",
  words: [
    W("jeg", "I", "yay", "Jeg er student.", "I am a student."),
    W("du", "you (one person)", "doo", "Du er hyggelig.", "You are nice."),
    W("han", "he", "hahn", "Han er lærer.", "He is a teacher."),
    W("hun", "she", "hewn", "Hun er student.", "She is a student."),
    W("vi", "we", "vee", "Vi er lærere.", "We are teachers."),
    W("dere", "you (several)", "DEH-reh", "Er dere studenter?", "Are you students?"),
    W("de", "they", "dee", "De er hyggelige.", "They are nice."),
    W("er", "am, is, are", "ar", "Jeg er Anna.", "I am Anna."),
    W("student", "student", "stoo-DENT", "Er du student?", "Are you a student?"),
    W("lærer", "teacher", "LAIR-er", "Hun er lærer.", "She is a teacher."),
    W("hyggelig", "nice, pleasant", "HEWG-eh-lee", "Han er hyggelig.", "He is nice.")
  ],
  dialogue: [["A", "Hei! Jeg er Anna. Er du student?", "Hi! I'm Anna. Are you a student?"], ["B", "Nei, jeg er lærer. Og du?", "No, I'm a teacher. And you?"], ["A", "Jeg er student.", "I'm a student."], ["B", "Hyggelig!", "Nice to meet you!"]],
  quiz: [
    { q: "\"I am a student.\"", o: ["Jeg er student.", "Jeg er en student er.", "Jeg student.", "Jeg være student."], a: 0, e: "Jobs and roles take no article: Jeg er student." },
    { q: "\"She is a teacher.\"", o: ["Hun er lærer.", "Han er lærer.", "Hun lærer er.", "Hun is lærer."], a: 0, e: "She = hun. He = han." },
    { q: "\"Are you a student?\"", o: ["Er du student?", "Du er student er?", "Gjør du student?"], a: 0, e: "Questions start with the verb. There is no \"do\" helper." },
    { q: "Fill the gap: \"Vi ___ lærere.\"", o: ["er", "ere", "are"], a: 0, e: "er is the same for every person." },
    { q: "How is \"jeg\" pronounced?", o: ["[yay]", "[jeg]", "[jay]"], a: 0, e: "j sounds like y, and g is silent here: [yay]." }
  ],
  review: ["han = he, hun = she.", "er never changes: jeg er, du er, de er.", "Yes/no questions start with the verb: Er du student?"]
},
{
  id: "ne-a0-3", title: "Getting to know people", no: "Å bli kjent", icon: "globe",
  intro: "We learn to say your name, where you're from and where you live. These are the questions you'll hear most in Norway.",
  notes: [
    { h: "Present tense: infinitive + r", p: "Add -r to the infinitive. The form is the same for everyone, and it covers both \"I come\" and \"I am coming\".",
      table: [["Infinitive", "Present", "English"], ["hete", "heter", "be called"], ["komme", "kommer", "come"], ["bo", "bor", "live"], ["snakke", "snakker", "speak"]] },
    { h: "Questions with a question word", p: "Question word + verb + subject: Hva heter du? Hvor bor du? As in English, fra goes at the end: Hvor kommer du fra? (Where do you come from?)" },
    { h: "Capital letters", p: "Unlike English, languages and nationalities take a small letter: norsk, engelsk. Countries take a capital: Norge, England." }
  ],
  tip: "Norwegian has no \"-ing\" form for this: \"I am living\" is just Jeg bor. Don't add \"do\" to questions either: \"Do you live?\" is Bor du? And write norsk with a small n, unlike English \"Norwegian\".",
  words: [
    W("heter", "am/is/are called", "HEH-ter", "Jeg heter Tom.", "My name is Tom.", { note: "infinitive: hete" }),
    W("kommer", "come, comes", "KOM-mer", "Jeg kommer fra England.", "I come from England.", { note: "infinitive: komme" }),
    W("bor", "live, lives", "boor", "Jeg bor i Norge.", "I live in Norway.", { note: "infinitive: bo" }),
    W("snakker", "speak, speaks", "SNAH-ker", "Jeg snakker engelsk.", "I speak English.", { note: "infinitive: snakke" }),
    W("hva", "what", "vah", "Hva heter du?", "What's your name?"),
    W("hvor", "where", "voor", "Hvor bor du?", "Where do you live?"),
    W("fra", "from", "frah", "Hun er fra Norge.", "She is from Norway."),
    W("i", "in", "ee", "Han bor i Oslo.", "He lives in Oslo."),
    W("norsk", "Norwegian", "noshk", "Jeg snakker litt norsk.", "I speak a little Norwegian."),
    W("engelsk", "English", "ENG-elsk", "Snakker du engelsk?", "Do you speak English?"),
    W("England", "England", "ENG-lahn", "Jeg kommer fra England.", "I come from England."),
    W("Norge", "Norway", "NOR-geh", "Vi bor i Norge.", "We live in Norway."),
    W("litt", "a little", "lit", "Ja, litt.", "Yes, a little."),
    W("nå", "now", "naw", "Jeg bor i Oslo nå.", "I live in Oslo now.")
  ],
  dialogue: [["A", "Hva heter du?", "What's your name?"], ["B", "Jeg heter Tom. Og du?", "My name is Tom. And you?"], ["A", "Jeg heter Kari. Hvor kommer du fra?", "My name is Kari. Where are you from?"], ["B", "Jeg kommer fra England. Jeg bor i Oslo nå.", "I'm from England. I live in Oslo now."], ["A", "Snakker du norsk?", "Do you speak Norwegian?"], ["B", "Ja, litt.", "Yes, a little."]],
  quiz: [
    { q: "\"Where are you from?\"", o: ["Hvor kommer du fra?", "Hvor du kommer fra?", "Hvor gjør du komme fra?"], a: 0, e: "Question word + verb + subject, with fra at the end." },
    { q: "What is the infinitive of \"bor\"?", o: ["bo", "bore", "borr"], a: 0, e: "Present = infinitive + r: bo → bor." },
    { q: "\"I speak Norwegian.\"", o: ["Jeg snakker norsk.", "Jeg snakker Norsk.", "Jeg snakke norsk.", "Jeg er snakker norsk."], a: 0, e: "The verb takes -r and the language has a small letter." },
    { q: "What does \"Hva heter du?\" mean?", o: ["What's your name?", "Where do you live?", "How are you?"], a: 0, e: "Literally \"What are you called?\"" },
    { q: "Fill the gap: \"Jeg bor ___ Norge.\"", o: ["i", "fra", "og"], a: 0, e: "i = in." }
  ],
  review: ["Present: infinitive + r (bo → bor, snakke → snakker).", "Question: question word + verb + subject. Hvor kommer du fra?", "Small letter for languages (norsk), capital for countries (Norge)."]
},
{
  id: "ne-a0-4", title: "Numbers 0–10", no: "Tall", icon: "num",
  intro: "We learn the numbers 0 to 10, how to ask someone's age and the verb har (have).",
  notes: [
    { h: "The numbers", p: "For 7, both sju and syv are correct.",
      table: [["Number", "Norwegian", "Say"], ["0", "null", "nool"], ["1", "en", "ayn"], ["2", "to", "too"], ["3", "tre", "treh"], ["4", "fire", "FEE-reh"], ["5", "fem", "fem"], ["6", "seks", "seks"], ["7", "sju / syv", "shoo / sewv"], ["8", "åtte", "AW-teh"], ["9", "ni", "nee"], ["10", "ti", "tee"]] },
    { h: "en or ett?", p: "When counting, 1 is en. Before an et-word it is written ett: ett barn (one child). You'll meet en and et in the next lesson." },
    { h: "Saying your age", p: "Age uses er, just like English: Jeg er åtte år (I am eight years old). The question is Hvor gammel er du? For several people: Hvor gamle er de?" }
  ],
  tip: "False friends: Norwegian to means two, not \"to\", and fire means four, not \"fire\". Also barn means child, and has nothing to do with a farm building.",
  words: [
    W("null", "zero", "nool", "null, en, to", "zero, one, two"),
    W("en", "one", "ayn", "en, to, tre", "one, two, three"),
    W("to", "two", "too", "Jeg har to barn.", "I have two children."),
    W("tre", "three", "treh", "Vi er tre.", "There are three of us."),
    W("fire", "four", "FEE-reh", "Hun er fire år.", "She is four years old."),
    W("fem", "five", "fem", "De er fem og åtte år.", "They are five and eight years old."),
    W("seks", "six", "seks", "Han er seks år.", "He is six years old."),
    W("sju", "seven", "shoo", "Hun er sju år.", "She is seven years old.", { note: "syv is also correct" }),
    W("åtte", "eight", "AW-teh", "Jeg er åtte år.", "I am eight years old."),
    W("ni", "nine", "nee", "Han er ni år.", "He is nine years old."),
    W("ti", "ten", "tee", "Vi er ti.", "There are ten of us."),
    W("har", "have, has", "har", "Jeg har to barn.", "I have two children.", { note: "infinitive: ha" }),
    N("et", "barn", "barnet", "barn", "child", "barn", "Har du barn?", "Do you have children?"),
    N("et", "år", "året", "år", "year", "awr", "Hun er seks år.", "She is six years old."),
    W("Hvor gammel er du?", "How old are you?", "voor GAH-mel ar doo", "Hvor gammel er du?", "How old are you?")
  ],
  dialogue: [["A", "Har du barn?", "Do you have children?"], ["B", "Ja, jeg har to barn.", "Yes, I have two children."], ["A", "Hvor gamle er de?", "How old are they?"], ["B", "De er fem og åtte år.", "They are five and eight."]],
  quiz: [
    { q: "3 + 4 = ?", o: ["sju", "seks", "åtte", "fem"], a: 0, e: "3 + 4 = 7 = sju (or syv)." },
    { q: "What does Norwegian \"fire\" mean?", o: ["four", "fire", "five"], a: 0, e: "A false friend: fire = 4." },
    { q: "Fill the gap: \"Jeg ___ åtte år.\" (I am eight.)", o: ["er", "har", "bor"], a: 0, e: "Age uses er, as in English." },
    { q: "What does \"Hvor gamle er de?\" mean?", o: ["How old are they?", "How many children do they have?", "Where do they live?"], a: 0, e: "Hvor gammel = how old; gamle for several people." },
    { q: "\"one child\"", o: ["ett barn", "en barn", "et barnet"], a: 0, e: "barn is an et-word, so one is written ett: ett barn." }
  ],
  review: ["7 = sju or syv.", "Age: Jeg er ... år. Question: Hvor gammel er du?", "False friends: to = 2, fire = 4, barn = child."]
},
{
  id: "ne-a0-5", title: "Nouns: en, ei, et", no: "Substantiv", icon: "house", pack: "words",
  intro: "Norwegian nouns have gender, and \"the\" is an ending on the noun. This is the biggest difference from English.",
  notes: [
    { h: "Three genders", p: "Every noun has a gender: en (masculine), ei (feminine) or et (neuter). There's no logic to learn; memorise each noun with its article: en bil, ei jente, et hus." },
    { h: "\"The\" goes on the end", p: "English puts \"the\" in front. Norwegian adds it to the end: en bil (a car) → bilen (the car). In -et endings the t is silent: huset [HEW-seh].",
      table: [["Gender", "a/an", "the", "plural"], ["en", "en bil", "bilen", "biler"], ["ei", "ei jente", "jenta", "jenter"], ["et", "et eple", "eplet", "epler"], ["et (one syllable)", "et hus", "huset", "hus"]] },
    { h: "Plural", p: "Most nouns add -er: biler, jenter. One-syllable et-words don't change, like English \"sheep\": et hus → to hus." },
    { h: "ei-words", p: "In Bokmål, feminine nouns can also use en: en jente, jenten. Both ei jente, jenta and en jente, jenten are correct, and you'll hear both." }
  ],
  tip: "Don't put a separate word for \"the\" in front: \"the car\" is bilen, never \"den bil\". As in English, you need an article with a single countable noun: Jeg har en bil.",
  words: [
    N("en", "gutt", "gutten", "gutter", "boy", "goot", "Gutten heter Ali.", "The boy is called Ali."),
    N("ei", "jente", "jenta", "jenter", "girl", "YEN-teh", "Jenta er sju år.", "The girl is seven."),
    N("et", "hus", "huset", "hus", "house", "hews", "Det er et hus.", "It's a house."),
    N("en", "bil", "bilen", "biler", "car", "beel", "Jeg har en bil.", "I have a car."),
    N("en", "jobb", "jobben", "jobber", "job", "yob", "Jeg har en jobb i Oslo.", "I have a job in Oslo."),
    N("et", "eple", "eplet", "epler", "apple", "EP-leh", "Det er et eple.", "It's an apple."),
    N("en", "venn", "vennen", "venner", "friend", "ven", "Han er en venn.", "He is a friend."),
    N("en", "dag", "dagen", "dager", "day", "dahg", "Dagen er fin.", "The day is nice."),
    W("Det er ...", "It is ..., That is ...", "deh ar", "Det er en bil.", "It's a car.", { tts: "Det er" }),
    W("med", "with", "meh", "Jeg bor med en venn.", "I live with a friend."),
    W("der", "there", "dar", "Bor du der?", "Do you live there?")
  ],
  dialogue: [["A", "Hva er det?", "What's that?"], ["B", "Det er et hus.", "It's a house."], ["A", "Bor du i huset?", "Do you live in the house?"], ["B", "Ja. Jeg bor der med to barn, en gutt og ei jente.", "Yes. I live there with two children, a boy and a girl."]],
  quiz: [
    { q: "What does \"huset\" mean?", o: ["the house", "a house", "houses"], a: 0, e: "-et means \"the\": et hus → huset. The t is silent." },
    { q: "\"the car\"", o: ["bilen", "en bilen", "biler", "bilet"], a: 0, e: "en-words add -en, and there's no separate \"the\"." },
    { q: "The plural of \"et hus\"?", o: ["hus", "huser", "huset"], a: 0, e: "One-syllable et-words don't change: to hus." },
    { q: "\"the girl\"", o: ["jenta", "jenter", "ei jenta", "jentet"], a: 0, e: "ei-words take -a: jenta (jenten is also correct, but not an option here)." },
    { q: "Where does \"the\" go in Norwegian?", o: ["On the end of the noun", "In front, as a separate word", "After the verb"], a: 0, e: "bil → bilen, hus → huset." },
    { q: "\"I have a car.\"", o: ["Jeg har en bil.", "Jeg har bil en.", "Jeg har bilen en."], a: 0, e: "\"a\" goes in front, as in English: en bil." }
  ],
  review: ["Learn nouns with their article: en bil, ei jente, et hus.", "\"The\" is an ending: bilen, jenta, huset.", "Plural is usually -er; short et-words don't change: hus."]
},
{
  id: "ne-a0-6", title: "Basic verbs and word order", no: "Verb og ordstilling", icon: "arrow", pack: "sentences",
  intro: "Everyday verbs, how to say not (ikke) and the most important rule in Norwegian: the verb comes second.",
  notes: [
    { h: "The verb comes second", p: "In a main clause, the verb is always the second element. If the sentence starts with a time phrase, the subject moves after the verb. English doesn't do this.",
      table: [["1", "2 (verb)", "The rest"], ["Jeg", "lærer", "norsk i dag."], ["I dag", "lærer", "jeg norsk."]] },
    { h: "Not: ikke", p: "ikke comes right after the verb: Jeg forstår ikke. There's no \"do\" helper: \"I don't understand\" is literally \"I understand not\"." },
    { h: "kan / vil + infinitive", p: "After kan (can) and vil (want to), the next verb has no -r and no å: Kan du snakke saktere? Vil du spise middag?" },
    { h: "False friend: vil", p: "Norwegian vil means \"want to\", not \"will\". Jeg vil spise = I want to eat." }
  ],
  tip: "The classic English speaker's mistake: \"I dag jeg jobber.\" The right form is \"I dag jobber jeg\", with the verb in second place. Also, don't translate \"I don't\" with \"gjør\": say \"Jeg forstår ikke\".",
  words: [
    W("går", "go, walk", "gawr", "Jeg går på jobb.", "I'm going to work.", { note: "infinitive: gå" }),
    W("spiser", "eat, eats", "SPEE-ser", "Vi spiser middag.", "We're having dinner.", { note: "infinitive: spise" }),
    W("drikker", "drink, drinks", "DRIK-ker", "Hun drikker kaffe.", "She is drinking coffee.", { note: "infinitive: drikke" }),
    W("lærer", "learn, learns", "LAIR-er", "Jeg lærer norsk.", "I'm learning Norwegian.", { note: "verb · infinitive: lære" }),
    W("jobber", "work, works", "YOB-ber", "Han jobber i Oslo.", "He works in Oslo.", { note: "infinitive: jobbe" }),
    W("forstår", "understand, understands", "for-STAWR", "Forstår du?", "Do you understand?", { note: "infinitive: forstå" }),
    W("kan", "can", "kahn", "Kan du snakke saktere?", "Can you speak more slowly?"),
    W("vil", "want to", "vil", "Vil du spise middag?", "Do you want to have dinner?", { note: "not \"will\"" }),
    W("ikke", "not", "IK-keh", "Jeg forstår ikke.", "I don't understand."),
    W("i dag", "today", "ee dahg", "I dag jobber jeg.", "Today I'm working."),
    W("i kveld", "this evening", "ee kvel", "Jeg jobber i kveld.", "I'm working this evening."),
    N("en", "middag", "middagen", "middager", "dinner", "MID-dah", "Middagen er bra.", "Dinner is good."),
    W("kaffe", "coffee", "KAH-feh", "Kaffe, takk.", "Coffee, please."),
    W("sammen", "together", "SAH-men", "Vi spiser sammen.", "We eat together."),
    W("gjerne", "gladly, I'd love to", "YAR-neh", "Ja, gjerne!", "Yes, I'd love to!"),
    W("saktere", "more slowly", "SAHK-teh-reh", "Kan du snakke saktere?", "Can you speak more slowly?")
  ],
  dialogue: [["A", "Jobber du i dag?", "Are you working today?"], ["B", "Nei, jeg jobber ikke i dag. I dag lærer jeg norsk.", "No, I'm not working today. Today I'm learning Norwegian."], ["A", "Så bra! Vil du spise middag sammen i kveld?", "How nice! Do you want to have dinner together this evening?"], ["B", "Unnskyld, kan du snakke saktere?", "Sorry, can you speak more slowly?"], ["A", "Vil du spise middag sammen?", "Do you want to have dinner together?"], ["B", "Ja, gjerne!", "Yes, I'd love to!"]],
  quiz: [
    { q: "\"I don't understand.\"", o: ["Jeg forstår ikke.", "Jeg ikke forstår.", "Jeg gjør ikke forstå.", "Jeg forstår nei."], a: 0, e: "ikke comes right after the verb, with no \"do\" helper." },
    { q: "\"Today I'm working.\" (start with i dag)", o: ["I dag jobber jeg.", "I dag jeg jobber.", "Jobber i dag jeg."], a: 0, e: "The verb must be second, so the subject moves after it." },
    { q: "Fill the gap: \"Hun ___ kaffe.\" (drink)", o: ["drikker", "drikke", "spiser"], a: 0, e: "Present = infinitive + r." },
    { q: "Why has snakke no -r in \"Kan du snakke saktere?\"", o: ["After kan, the verb is an infinitive", "Questions drop the -r", "du never takes -r"], a: 0, e: "kan + infinitive, like English \"can speak\"." },
    { q: "What does \"Jeg vil spise\" mean?", o: ["I want to eat.", "I will eat.", "I can eat."], a: 0, e: "A false friend: vil = want to." }
  ],
  review: ["The verb comes second: I dag lærer jeg norsk.", "ikke after the verb: Jeg forstår ikke.", "kan / vil + infinitive; vil means \"want to\"."]
}
];

export default atLevel("A0", A0);
