import { Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { readingStories } from "../english/readingStories";

const A0: LessonDef[] = [
{
  id: "nb-a0-story", title: "Mine første historier", no: "My first stories", icon: "spark", stories: readingStories("a0", "nb"),
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

const A1: LessonDef[] = [
{
  id: "nb-a1-story", title: "Historier fra hverdagen", no: "Everyday stories", icon: "spark", stories: readingStories("a1", "nb"),
  intro: "Fire historier med det du har lært på A1: Familien til Mira kommer til London, Emil handler, Mira reiser til Manchester, og Emil flytter inn i en ny leilighet.",
  notes: [
    { h: "Hva øver du på i historiene?", p: "Eiendomsord: her father, my family. Pris: The bread costs two pounds. Klokka: at eight o'clock, half past eight, quarter past eight. has to + verb: She has to take the bus. Vær: It is cold. It is snowing." },
    { h: "Slik øver du", p: "Se hver historie med oversettelse først, skjul så oversettelsen og se den igjen. Til slutt leser du høyt. De røde ordene er ordene i denne leksjonen." }
  ],
  tip: "Pass på klokka: half past eight er 8.30, men norsk «halv ni» er også 8.30. Engelsk sier altså «halvveis etter åtte», norsk «halvveis til ni». Og med he, she og it heter det has to: She has to take the bus.",
  words: [
    W("family", "familie", "fæmili", "Mira has a big family.", "Mira har en stor familie."),
    W("brother", "bror", "brader", "She has a brother.", "Hun har en bror."),
    W("sister", "søster", "sister", "Her sister is fifteen.", "Søstera hennes er femten."),
    W("cost", "koste", "kåst", "The bread costs two pounds.", "Brødet koster to pund."),
    W("cheap", "billig", "tsjiip", "The milk is cheap.", "Melka er billig."),
    W("expensive", "dyr", "ikspensiv", "The cheese is expensive.", "Osten er dyr."),
    W("pay", "betale", "pei", "Can I pay by card?", "Kan jeg betale med kort?"),
    W("o'clock", "klokka (hel time)", "oklåkk", "The bus comes at eight o'clock.", "Bussen kommer klokka åtte."),
    W("half past", "halv (neste time)", "haaf paast", "The train leaves at half past eight.", "Toget går halv ni."),
    W("bus", "buss", "bass", "But the bus doesn't come!", "Men bussen kommer ikke!"),
    W("train", "tog", "trein", "Mira catches the train.", "Mira rekker toget."),
    W("small", "liten", "småål", "The flat is small.", "Leiligheten er liten."),
    W("cold", "kald", "kould", "Today it is cold.", "I dag er det kaldt."),
    W("like", "like", "laik", "Emil likes skiing.", "Emil liker å gå på ski.")
  ],
  dialogue: [["A", "How much is the bread?", "Hva koster brødet?"], ["B", "It costs two pounds.", "Det koster to pund."], ["A", "Can I pay by card?", "Kan jeg betale med kort?"], ["B", "Yes, of course!", "Ja, selvfølgelig!"]],
  quiz: [
    Q("Når går toget til Mira?", ["half past eight", "half past nine", "eight o'clock"], "The train leaves at half past eight (halv ni)."),
    Q("Hva koster brødet?", ["two pounds", "four pounds", "twelve pounds"], "The bread costs two pounds."),
    Q("«Først må hun ta bussen.»", ["First she has to take the bus.", "First she have to take the bus.", "First she has take the bus."], "she + has to + verb."),
    Q("Hvordan er leiligheten til Emil?", ["small, but the living room is big", "big and old", "expensive and new"], "It is small, but the living room is big and nice."),
    Q("Hvordan er osten?", ["expensive", "cheap", "small"], "The cheese is expensive.")
  ],
  review: ["Eiendomsord: her father, my family.", "Klokka: eight o'clock, half past eight (halv ni), quarter past eight.", "she/he + has to: She has to take the bus."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1)];
