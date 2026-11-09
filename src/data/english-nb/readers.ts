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

const A2: LessonDef[] = [
{
  id: "nb-a2-story", title: "Seks korte historier", no: "Six short stories", icon: "spark", stories: readingStories("a2", "nb"),
  intro: "Seks historier med det du har lært på A2: helgen til Mira, Emils to år i England, et legebesøk, en ny jobb, å finne leilighet og sommerplaner.",
  notes: [
    { h: "Hva øver du på i historiene?", p: "Fortid: was, went, ate, called. Present perfect: has lived, has learned, has never been. Årsak med because: because he doesn't get many breaks. if (om): asks if the flat is available. Framtid: is going to travel, it is going to rain." },
    { h: "Slik øver du", p: "Se hver historie med oversettelse først, skjul så oversettelsen og se den igjen. Til slutt leser du høyt. De røde ordene er ordene i denne leksjonen." }
  ],
  tip: "«Han har bodd her i to år» blir «He has lived here for two years», med for, ikke in. Og norsk «spør om» blir «asks if»: She asks if the flat is available.",
  words: [
    W("was", "var", "wåz", "Mira was in Brighton.", "Mira var i Brighton.", { note: "be – was – been" }),
    W("went", "gikk, dro", "went", "She went to the cinema.", "Hun gikk på kino.", { note: "go – went – gone" }),
    W("yesterday", "i går", "jesterdei", "Yesterday she came home.", "I går kom hun hjem."),
    W("weekend", "helg", "wiikend", "It was a great weekend.", "Det var en flott helg."),
    W("has lived", "har bodd", "hæs livd", "Emil has lived in Bristol for two years.", "Emil har bodd i Bristol i to år."),
    W("never", "aldri", "never", "He has never been to Scotland.", "Han har aldri vært i Skottland."),
    W("doctor", "lege", "dåkter", "She called the doctor.", "Hun ringte legen."),
    W("fever", "feber", "fiiver", "She also had a fever.", "Hun hadde også feber."),
    W("sore throat", "vondt i halsen", "sår thrått", "She woke up with a sore throat.", "Hun våknet med vondt i halsen."),
    W("because", "fordi", "bikåz", "He likes the job because he learns a lot.", "Han liker jobben fordi han lærer mye."),
    W("boss", "sjef", "bås", "His boss is nice.", "Sjefen hans er hyggelig."),
    W("tired", "sliten", "taierd", "He is often tired.", "Han er ofte sliten."),
    W("available", "ledig", "aveilebel", "Is the flat available?", "Er leiligheten ledig?"),
    W("rent", "husleie", "rent", "She pays eight hundred pounds in rent.", "Hun betaler åtte hundre pund i husleie."),
    W("going to", "skal, kommer til å", "gouing tu", "It is going to rain a little.", "Det kommer til å regne litt."),
    W("holiday", "ferie", "hålidei", "Emil is looking forward to the holiday.", "Emil gleder seg til ferien.")
  ],
  dialogue: [["A", "What did you do at the weekend?", "Hva gjorde du i helgen?"], ["B", "I went to the cinema. And you?", "Jeg gikk på kino. Og du?"], ["A", "I stayed at home, because I had a fever.", "Jeg var hjemme, fordi jeg hadde feber."], ["B", "Oh no! I hope you feel better now.", "Å nei! Jeg håper du føler deg bedre nå."]],
  quiz: [
    Q("Når gikk Mira på kino?", ["on Saturday", "on Sunday", "yesterday"], "On Saturday she went to the cinema with a friend."),
    Q("«I går kom hun hjem.»", ["Yesterday she came home.", "Yesterday she has come home.", "Yesterday she comes home."], "yesterday tar fortid (came)."),
    Q("Hvor lenge har Emil bodd i Bristol?", ["two years", "three years", "one year"], "Emil has lived in Bristol for two years."),
    Q("«Han har bodd her i to år.»", ["He has lived here for two years.", "He lives here since two years.", "He has lived here in two years."], "Present perfect + for + tid."),
    Q("«Hun spør om leiligheten er ledig.»", ["She asks if the flat is available.", "She asks is the flat available.", "She asks that the flat available."], "spør om = asks if + subjekt + verb."),
    Q("Spådom: «Det kommer til å regne litt.»", ["It is going to rain a little.", "It going to rain a little.", "It is go to rain a little."], "be + going to + verb.")
  ],
  review: ["Fortid: was, went, ate. Present perfect: has lived, has never been.", "because = fordi; asks if = spør om.", "Planer og spådommer: is going to."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1), ...asExtra("A2", A2)];
