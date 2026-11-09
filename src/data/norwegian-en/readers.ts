import { N, Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { readingStories } from "../norwegian/readingStories";

const A0: LessonDef[] = [
{
  id: "ne-a0-story", title: "First stories", no: "Mine første historier", icon: "spark", stories: readingStories("a0", "en"),
  intro: "Two short stories using what you learned in A0: Mira lives in Oslo, and Emil lives with his family in Bergen.",
  notes: [
    { h: "What do the stories practise?", p: "The present tense (infinitive + r): bor, jobber, spiser. The verb comes second: Nå bor jeg i Oslo. I kveld spiser de middag. ikke after the verb: I dag jobber jeg ikke." },
    { h: "How to practise", p: "First watch the video with the translation. Then hide the translation and watch again. Finally, read the story aloud. The red words are this lesson's words." }
  ],
  tip: "Look at \"Nå bor jeg i Oslo\" and \"I kveld spiser de middag\": when a sentence starts with a time phrase, the subject moves after the verb. \"Nå jeg bor\" is wrong, even though English says \"Now I live\".",
  words: [
    W("heter", "am/is called", "HEH-ter", "Jeg heter Mira.", "My name is Mira."),
    W("kommer", "come, comes", "KOM-mer", "Jeg kommer fra Tyrkia.", "I come from Turkey."),
    W("bor", "live, lives", "boor", "Han bor i et hus i Bergen.", "He lives in a house in Bergen."),
    W("lærer", "learn; teacher", "LAIR-er", "Jeg lærer norsk.", "I'm learning Norwegian."),
    W("forstår", "understand", "for-STAWR", "Jeg forstår litt norsk nå.", "I understand a little Norwegian now."),
    W("jobber", "work, works", "YOB-ber", "Han jobber i Bergen.", "He works in Bergen."),
    W("drikker", "drink, drinks", "DRIK-ker", "Emil drikker kaffe.", "Emil drinks coffee."),
    W("spiser", "eat, eats", "SPEE-ser", "Jeg spiser et eple.", "I'm eating an apple."),
    N("en", "venn", "vennen", "venner", "friend", "ven", "En venn kommer.", "A friend comes."),
    N("et", "barn", "barnet", "barn", "child", "barn", "Emil har to barn.", "Emil has two children."),
    N("en", "gutt", "gutten", "gutter", "boy", "goot", "Gutten er sju år.", "The boy is seven."),
    N("ei", "jente", "jenta", "jenter", "girl", "YEN-teh", "Jenta er fem år.", "The girl is five."),
    W("sammen", "together", "SAH-men", "Vi spiser middag sammen.", "We have dinner together."),
    W("i kveld", "tonight, this evening", "ee kvel", "Vil du spise middag i kveld?", "Do you want to have dinner tonight?")
  ],
  dialogue: [["A", "Hei! Jeg heter Mira. Hva heter du?", "Hi! My name is Mira. What's your name?"], ["B", "Jeg heter Emil. Jeg er lærer.", "My name is Emil. I'm a teacher."], ["A", "Vil du spise middag i kveld?", "Do you want to have dinner tonight?"], ["B", "Ja, gjerne!", "Yes, I'd love to!"]],
  quiz: [
    Q("Where does Mira come from?", ["Tyrkia", "Norge", "Bergen"], "Jeg kommer fra Tyrkia."),
    Q("How many children does Emil have?", ["to", "tre", "fem"], "Emil har to barn: en gutt og ei jente."),
    Q("\"Today I'm not working.\"", ["I dag jobber jeg ikke.", "I dag jeg jobber ikke.", "I dag ikke jobber jeg."], "The verb comes second, and ikke comes after it."),
    Q("Why is the verb second in \"Nå bor jeg i Oslo\"?", ["The sentence starts with a time word", "It's a question", "It's a mistake"], "After a time word at the start, the subject follows the verb."),
    Q("How old is the boy?", ["sju", "fem", "to"], "Gutten er sju år.")
  ],
  review: ["Present: infinitive + r (bor, jobber, spiser).", "The verb comes second: Nå bor jeg i Oslo.", "ikke after the verb: I dag jobber jeg ikke."]
}
];

const A1: LessonDef[] = [
{
  id: "ne-a1-story", title: "Everyday stories", no: "Historier fra hverdagen", icon: "spark", stories: readingStories("a1", "en"),
  intro: "Four stories using what you learned in A1: Mira's family visits Oslo, Emil goes shopping, Mira travels to Bergen and Emil settles into his new flat.",
  notes: [
    { h: "What do the stories practise?", p: "Possessives: faren hennes, familien min. Adjectives: en stor familie, et lite kjøkken, et nytt bad. Time: klokka åtte, halv ni, kvart over åtte. må and skal + infinitive: må ta bussen, skal til Bergen." },
    { h: "How to practise", p: "Watch each story with the translation first, then hide it and watch again. Finally, read aloud. The red words are this lesson's words." }
  ],
  tip: "halv ni is 8:30, not 9:30: it means half way to nine. That's why Mira's train leaves at half past eight. English \"half nine\" means the opposite, so be careful!",
  words: [
    N("en", "familie", "familien", "familier", "family", "fah-MEE-lee-eh", "Mira har en stor familie.", "Mira has a big family."),
    N("en", "bror", "broren", "brødre", "brother", "broor", "Hun har en bror.", "She has a brother."),
    N("ei", "søster", "søstera", "søstre", "sister", "SUR-ster", "Søstera er femten år.", "Her sister is fifteen."),
    W("koster", "costs", "KOS-ter", "Brødet koster førti kroner.", "The bread costs forty kroner."),
    W("billig", "cheap", "BIL-lee", "Melka er billig.", "The milk is cheap."),
    W("dyr", "expensive", "dewr", "Osten er dyr.", "The cheese is expensive."),
    W("betaler", "pays", "beh-TAH-ler", "Emil betaler med kort.", "Emil pays by card."),
    W("klokka", "at ... o'clock", "KLOK-kah", "Bussen kommer klokka åtte.", "The bus comes at eight o'clock."),
    W("skal", "is going to", "skahl", "På fredag skal Mira til Bergen.", "On Friday, Mira is going to Bergen."),
    W("må", "must, has to", "maw", "Hun må ta bussen.", "She has to take the bus."),
    N("en", "buss", "bussen", "busser", "bus", "boos", "Bussen kommer ikke!", "The bus isn't coming!"),
    N("et", "tog", "toget", "tog", "train", "tawg", "Toget går klokka halv ni.", "The train leaves at half past eight."),
    W("liten", "small", "LEE-ten", "Leiligheten er liten.", "The flat is small."),
    W("kald", "cold", "kahl", "I dag er det kaldt.", "It's cold today.", { note: "kaldt, kalde" }),
    W("liker", "likes", "LEE-ker", "Emil liker å gå på ski.", "Emil likes skiing.")
  ],
  dialogue: [["A", "Hva koster brødet?", "How much is the bread?"], ["B", "Det koster førti kroner.", "It costs forty kroner."], ["A", "Kan jeg betale med kort?", "Can I pay by card?"], ["B", "Ja, selvfølgelig!", "Yes, of course!"]],
  quiz: [
    Q("When does Mira's train leave? (halv ni)", ["8:30", "9:30", "9:00"], "halv ni = half way to nine = 8:30."),
    Q("How much is the bread?", ["førti", "fire", "fjorten"], "Brødet koster førti kroner."),
    Q("\"First she has to take the bus.\"", ["Først må hun ta bussen.", "Først hun må ta bussen.", "Først må hun tar bussen."], "The verb comes second; må + infinitive."),
    Q("What is Emil's flat like?", ["liten, men stua er stor", "stor og gammel", "dyr og ny"], "Den er liten, men stua er stor og fin."),
    Q("Why \"lite\" in \"et lite kjøkken\"?", ["It's an et-word, so liten → lite", "It's plural", "It's definite"], "liten is irregular: en liten, et lite, små.")
  ],
  review: ["Possessives: familien min, faren hennes.", "Time: halv ni = 8:30, kvart over åtte = 8:15.", "må / skal + infinitive: må ta bussen, skal til Bergen."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1)];
