import { N, Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { a0Stories } from "../norwegian/a0Stories";

const A0: LessonDef[] = [
{
  id: "ne-a0-story", title: "First stories", no: "Mine første historier", icon: "spark", stories: a0Stories("en"),
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

export default asExtra("A0", A0);
