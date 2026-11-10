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

const B1: LessonDef[] = [
{
  id: "nb-b1-story", title: "Åtte historier fra livet", no: "Eight stories from life", icon: "spark", stories: readingStories("b1", "nb"),
  intro: "Åtte historier med det du har lært på B1: jobbsenteret, et jobbintervju, banken, en engelskeksamen, et forsinket tog, kjøkkenet, snø på fjellet og en klage i butikken.",
  notes: [
    { h: "Hva øver du på i historiene?", p: "Relativsetninger med who / which: the adviser who helped her, a jacket which is warmer. although og however: Although it was difficult, she didn't give up. while og when: While the children are sleeping… When she arrived… Past perfect: had applied, had expected, had forgotten. Passiv: was approved, has to be stirred. Indirekte spørsmål: asked why he wanted to work there. the more … the happier." },
    { h: "Slik øver du", p: "Se hver historie med oversettelse først, skjul så oversettelsen og se den igjen. Til slutt leser du høyt. De røde ordene er ordene i denne leksjonen." }
  ],
  tip: "Norsk «selv om» er although, og «likevel» er however: «Although it was difficult…», «However, trains are better.» I indirekte spørsmål er ordstillingen som i en vanlig setning: «He asked why he wanted to work there», ikke «why did he want».",
  words: [
    W("application", "søknad", "æplikeisjen", "She got an answer to her application.", "Hun fikk svar på søknaden."),
    W("approved", "godkjent", "æpruuvd", "Her application was approved.", "Søknaden hennes ble godkjent.", { note: "was approved = ble godkjent (passiv)" }),
    W("although", "selv om", "åldhåu", "Although it was difficult, she didn't give up.", "Selv om det var vanskelig, ga hun ikke opp."),
    W("position", "stilling", "pesisjen", "He applied for a position as a teacher.", "Han søkte på en stilling som lærer."),
    W("experience", "erfaring", "ikspiirriens", "He talked about his experience.", "Han fortalte om erfaringen sin."),
    W("interest", "rente", "intrest", "A savings account pays more interest.", "En sparekonto gir mer rente.", { note: "også: interesse" }),
    W("budget", "budsjett", "badsjit", "She needs to make a budget.", "Hun må lage et budsjett."),
    W("nervous", "nervøs", "nørves", "He is nervous before the exam.", "Han er nervøs før eksamenen."),
    W("while", "mens", "wail", "While the children are sleeping, he reads.", "Mens barna sover, leser han."),
    W("passed", "bestått", "paast", "He had passed!", "Han hadde bestått!", { note: "pass – passed – passed" }),
    W("delayed", "forsinket", "dileid", "The train was delayed.", "Toget var forsinket."),
    W("however", "likevel, men", "hauevver", "However, trains are better for the environment.", "Likevel er tog bedre for miljøet."),
    W("environment", "miljø", "envairenment", "Trains are better for the environment than planes.", "Tog er bedre for miljøet enn fly."),
    W("recipe", "oppskrift", "ressipi", "He has found a recipe for fish soup.", "Han har funnet en oppskrift på fiskesuppe."),
    W("suddenly", "plutselig", "saddenli", "Suddenly the doorbell rings.", "Plutselig ringer det på døra."),
    W("luckily", "heldigvis", "lakkili", "Luckily, the soup tasted delicious.", "Heldigvis smakte suppen nydelig."),
    W("afraid", "redd", "efreid", "Mira was afraid of getting lost.", "Mira var redd for å gå seg vill.", { note: "be afraid of = være redd for" }),
    W("receipt", "kvittering", "risiit", "He takes the receipt.", "Han tar med kvitteringen.", { note: "p uttales ikke" }),
    W("complain", "klage", "kempleinn", "He wants to complain about the jacket.", "Han vil klage på jakken."),
    W("satisfied", "fornøyd", "sætisfaid", "He is satisfied with the service.", "Han er fornøyd med servicen.")
  ],
  dialogue: [["A", "Why were you so late?", "Hvorfor kom du så sent?"], ["B", "The train was delayed, and I had to wait for an hour.", "Toget var forsinket, og jeg måtte vente i en time."], ["A", "How annoying! However, it's good that you came.", "Så irriterende! Likevel er det bra at du kom."], ["B", "Yes, and luckily I got my money back.", "Ja, og heldigvis fikk jeg pengene tilbake."]],
  quiz: [
    Q("Hva skjedde med søknaden til Mira?", ["It was approved.", "It was lost.", "It arrived too late."], "Two weeks later, she got an answer to her application. It was approved!"),
    Q("«Rektoren spurte hvorfor han ville jobbe der.»", ["The head teacher asked why he wanted to work there.", "The head teacher asked why did he want to work there.", "The head teacher asked why wanted he to work there."], "Indirekte spørsmål har vanlig ordstilling: why he wanted."),
    Q("Hvorfor er en sparekonto bedre?", ["It pays more interest.", "It is free.", "It has a budget."], "A savings account pays more interest than a normal account."),
    Q("«Eksamenen var lettere enn han hadde trodd.»", ["The exam was easier than he had expected.", "The exam was easier than he has expected.", "The exam was more easy than he had expected."], "Lenger tilbake i fortiden: had + expected."),
    Q("Hva var galt med toget da Mira kom til stasjonen?", ["It was delayed.", "It was full.", "It had left."], "When she arrived at the station, the train was delayed."),
    Q("Hvorfor kokte suppen over?", ["Emil had forgotten to turn down the heat.", "The neighbours came too early.", "The recipe was wrong."], "Emil had forgotten to turn down the heat."),
    Q("Hva gjorde de for ikke å gå seg vill?", ["They followed the red marks.", "They called a friend.", "They went back home."], "They decided to follow the red marks on the stones."),
    Q("Hva tok Emil med til butikken?", ["the receipt", "the budget", "the recipe"], "He takes the receipt and goes back to the shop."),
    Q("«Selv om det var vanskelig, ga hun ikke opp.»", ["Although it was difficult, she didn't give up.", "However it was difficult, she didn't give up.", "Although it was difficult, but she didn't give up."], "although + setning; ikke but i den andre delen.")
  ],
  review: ["Bind setninger med who / which, although, while, when.", "Past perfect: had applied, had forgotten.", "Passiv: was approved, has to be stirred."]
}
];

const B2: LessonDef[] = [
{
  id: "nb-b2-story", title: "Åtte historier på B2-nivå", no: "Eight B2 stories", icon: "spark", stories: readingStories("b2", "nb"),
  intro: "Åtte historier med det du har lært på B2: en formell e-post, et folkemøte, faste uttrykk på en kafé, flyttedagen, retten til overtidsbetaling, et middagsselskap, et halvmaraton og strandrydding.",
  notes: [
    { h: "Hva øver du på i historiene?", p: "Formelt språk: she asks for the matter to be dealt with / If she does not receive a reply within fourteen days… Argumentasjon: on the one hand … on the other hand, since, instead. Faste uttrykk: not the end of the world, like clockwork, suit someone down to the ground, over the moon, an eye-opener. Phrasal verbs: sort out, set up, unpack, end up, cut down on. Høflige fraser: You shouldn't have!" },
    { h: "Slik øver du", p: "Se hver historie med oversettelse først, skjul så oversettelsen og se den igjen. Ikke oversett faste uttrykk ord for ord; lær hva de betyr som helhet. De røde ordene er ordene i denne leksjonen." }
  ],
  tip: "Mange phrasal verbs ligner norske partikkelverb: sort out = finne ut av, cut down on = kutte ned på, unpack = pakke ut. Men «on the other hand» heter aldri «in the other hand».",
  words: [
    W("landlord", "utleier", "lændlård", "Her landlord hasn't replied.", "Utleieren har ikke svart."),
    W("attach", "legge ved", "ætætsj", "She attaches photos of the wall.", "Hun legger ved bilder av veggen."),
    W("apologise", "beklage, be om unnskyldning", "epålledsjais", "The landlord calls and apologises.", "Utleieren ringer og beklager."),
    W("on the one hand", "på den ene siden", "ån dhe wann hænd", "On the one hand, the road would help.", "På den ene siden ville veien hjelpe.", { note: "… on the other hand = på den andre siden" }),
    W("argue", "argumentere, krangle", "aagju", "He argues that buses are better.", "Han argumenterer for at busser er bedre."),
    W("proposal", "forslag", "propousel", "They will consider his proposal.", "De skal vurdere forslaget hans."),
    W("benefit", "være bra for, fordel", "benefitt", "It would benefit the environment.", "Det ville være bra for miljøet."),
    W("idiom", "fast uttrykk", "iddiem", "Ollie loves idioms.", "Ollie elsker faste uttrykk."),
    W("the end of the world", "verdens undergang", "dhi end åv dhe wørld", "It's not the end of the world.", "Det er ikke verdens undergang."),
    W("like clockwork", "som smurt", "laik klåkkwørk", "Everything is running like clockwork.", "Alt går som smurt."),
    W("sort out", "ordne, finne ut av", "sårt aut", "Emil has to sort out the problem.", "Emil må finne ut av problemet."),
    W("unpack", "pakke ut", "anpæk", "It will take weeks to unpack everything.", "Det tar uker å pakke ut alt."),
    W("overtime", "overtid", "ouvertaim", "She has worked a lot of overtime.", "Hun har jobbet mye overtid."),
    W("union", "fagforening", "juunien", "She contacts her union representative.", "Hun tar kontakt med den tillitsvalgte."),
    W("admit", "innrømme", "ædmitt", "The manager admits the mistake.", "Lederen innrømmer feilen."),
    W("polite", "høflig", "pelait", "It's a polite way of saying thank you.", "Det er en høflig måte å si takk på."),
    W("probably", "sannsynligvis, nok", "pråbbebli", "He probably speaks better than he thinks.", "Han snakker nok bedre enn han tror."),
    W("disappointed", "skuffet", "disseppåintid", "Mira is disappointed.", "Mira er skuffet."),
    W("instead of", "i stedet for", "instedd åv", "Instead of running, she swims.", "I stedet for å løpe, svømmer hun."),
    W("volunteer", "frivillig", "vålentiir", "There are lots of volunteers on the beach.", "Det er mange frivillige på stranda."),
    W("eye-opener", "tankevekker", "ai-ouppener", "For Emil, it is a real eye-opener.", "For Emil er det en real tankevekker."),
    W("cut down on", "kutte ned på", "katt daun ån", "He wants to cut down on plastic.", "Han vil kutte ned på plast.")
  ],
  dialogue: [["A", "Did you hear that the council wants to build a road through the park?", "Hørte du at kommunen vil bygge vei gjennom parken?"], ["B", "Yes, but I think they should invest in buses instead.", "Ja, men jeg synes de heller bør satse på busser."], ["A", "I agree. On the one hand we'd save time, but on the other hand the children would lose the park.", "Enig. På den ene siden ville vi spart tid, men på den andre siden ville barna miste parken."], ["B", "We should probably speak up at the meeting tonight.", "Vi bør nok si fra på møtet i kveld."]],
  quiz: [
    Q("Når vil Mira kontakte kommunen?", ["If she does not receive a reply within fourteen days.", "If the landlord apologises.", "Within two days."], "If she does not receive a reply within fourteen days, she will contact the council."),
    Q("«På den andre siden ville barna miste et viktig sted.»", ["On the other hand, children would lose an important place.", "In the other hand, children would lose an important place.", "On other hand, children would lose an important place."], "Fast uttrykk: on the other hand."),
    Q("Hva betyr «It's not the end of the world»?", ["It's not so bad.", "The world is ending.", "It's very dangerous."], "Det betyr «det er ikke så farlig»."),
    Q("Hva betyr «like clockwork»?", ["very smoothly", "very slowly", "very late"], "like clockwork = som smurt."),
    Q("«Emil må finne ut av problemet i en fart.»", ["Emil has to sort out the problem quickly.", "Emil has to sort out of the problem quickly.", "Emil has to sort up the problem quickly."], "sort out = finne ut av, ordne."),
    Q("Hvem fikk Mira hjelp av med overtiden?", ["her union representative", "her landlord", "the physiotherapist"], "She contacts her union representative."),
    Q("Hvorfor sier Kate «You shouldn't have brought anything»?", ["It's a polite way of saying thank you.", "She is angry with Emil.", "Emil forgot the cake."], "Emil knows that this is just a polite way of saying thank you."),
    Q("Hva rådet fysioterapeuten Mira til?", ["to take it easy", "to run more", "to cut down on plastic"], "The physiotherapist advises her to take it easy."),
    Q("Passiv: «Hun ber om at saken blir behandlet.»", ["She asks for the matter to be dealt with.", "She asks for the matter to deal with.", "She asks for the matter dealing with."], "Passiv: to be + dealt with.")
  ],
  review: ["Formelt språk: If she does not receive a reply within…, to be dealt with.", "Argumentasjon: on the one hand … on the other hand, since.", "Phrasal verbs og faste uttrykk: sort out, unpack, like clockwork."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1), ...asExtra("A2", A2), ...asExtra("B1", B1), ...asExtra("B2", B2)];
