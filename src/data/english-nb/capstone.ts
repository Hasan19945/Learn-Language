import { Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { a0Stories } from "../english/a0Stories";

const A0: LessonDef[] = [
{
  id: "nb-a0-story", title: "Mine første historier", no: "My first stories", icon: "spark", stories: a0Stories("nb"),
  intro: "To korte historier med det du har lært på A0: Mira bor i London, og Emil bor med familien sin i Bristol.",
  notes: [
    { h: "Hva øver du på i historiene?", p: "to be: I am a student, he is a teacher. Presens: I live, I drink. Med he, she og it får verbet -s: He lives, Emil works, Emil drinks. Nektelse: I don't work." },
    { h: "Slik øver du", p: "Se videoen med oversettelse først. Skjul så oversettelsen og se den igjen. Til slutt leser du historien høyt. De røde ordene er ordene i denne leksjonen." }
  ],
  tip: "Legg merke til \"Emil works\" og \"He lives\": med he, she og it får verbet -s. \"Emil work\" er feil. I nektende setninger faller -s bort, og du bruker don't eller doesn't: I don't work.",
  words: [
    W("live", "bo", "liv", "I live in London.", "Jeg bor i London."),
    W("student", "student", "stjuudent", "I am a student.", "Jeg er student."),
    W("learn", "lære", "lørn", "I am learning English.", "Jeg lærer engelsk."),
    W("understand", "forstå", "anderstænd", "I understand a little English now.", "Jeg forstår litt engelsk nå."),
    W("work", "jobbe, arbeide", "wørk", "He works in Bristol.", "Han jobber i Bristol."),
    W("drink", "drikke", "drink", "I drink coffee.", "Jeg drikker kaffe."),
    W("eat", "spise", "iit", "I eat an apple.", "Jeg spiser et eple."),
    W("friend", "venn", "frend", "A friend comes in.", "En venn kommer inn."),
    W("teacher", "lærer", "tiitsjer", "He is a teacher.", "Han er lærer."),
    W("children", "barn (flertall)", "tsjildren", "Emil has two children.", "Emil har to barn.", { note: "entall: child" }),
    W("boy", "gutt", "båi", "The boy is seven.", "Gutten er sju."),
    W("girl", "jente", "gørl", "The girl is five.", "Jenta er fem."),
    W("together", "sammen", "tugéder", "We have dinner together.", "Vi spiser middag sammen."),
    W("tonight", "i kveld", "tunait", "Do you want to have dinner tonight?", "Vil du spise middag i kveld?")
  ],
  dialogue: [["A", "Hi! My name is Mira. What's your name?", "Hei! Jeg heter Mira. Hva heter du?"], ["B", "My name is Emil. I am a teacher.", "Jeg heter Emil. Jeg er lærer."], ["A", "Do you want to have dinner tonight?", "Vil du spise middag i kveld?"], ["B", "Yes, I'd love to!", "Ja, gjerne!"]],
  quiz: [
    Q("Hvor kommer Mira fra?", ["Turkey", "England", "London"], "I come from Turkey."),
    Q("Hvor mange barn har Emil?", ["two", "three", "five"], "Emil has two children: a boy and a girl."),
    Q("«I dag jobber jeg ikke.»", ["Today I don't work.", "Today I not work.", "Today I work not."], "Nektelse: don't + verb."),
    Q("Hvorfor får works -s i «Emil works in Bristol»?", ["Fordi subjektet er he/she/it", "Fordi det er fortid", "Fordi det er flertall"], "Med he, she og it får verbet -s i presens."),
    Q("Hvor gammel er gutten?", ["seven", "five", "two"], "The boy is seven.")
  ],
  review: ["to be: I am, he is.", "he/she/it + verb-s: He lives, Emil works.", "Nektelse: I don't work."]
}
];

export default asExtra("A0", A0);
