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

const A2: LessonDef[] = [
{
  id: "ne-a2-story", title: "Six short stories", no: "Seks korte historier", icon: "spark", stories: readingStories("a2", "en"),
  intro: "Six stories using what you learned in A2: Mira's weekend, Emil's two years in Norway, a visit to the doctor, a new job, finding a flat and summer plans.",
  notes: [
    { h: "What do the stories practise?", p: "The past: var, gikk, spiste, ringte. The perfect: har bodd, har lært, har aldri vært. Clauses with fordi: fordi han ikke får mange pauser. om (whether): spør om leiligheten er ledig. The future: skal reise, det kommer til å regne." },
    { h: "How to practise", p: "Watch each story with the translation first, then hide it and watch again. Finally, read aloud. The red words are this lesson's words." }
  ],
  tip: "After fordi, ikke comes before the verb: \"fordi han ikke får mange pauser\". And \"for two years\" is i to år, never for to år.",
  words: [
    W("var", "was, were", "var", "I helgen var Mira i Bergen.", "At the weekend, Mira was in Bergen.", { note: "være – var" }),
    W("gikk", "went", "yik", "Hun gikk på kino.", "She went to the cinema.", { note: "gå – gikk" }),
    W("i går", "yesterday", "ee gawr", "I går kom hun hjem.", "Yesterday she came home."),
    N("en", "helg", "helgen", "helger", "weekend", "helg", "Det var en fin helg.", "It was a nice weekend."),
    W("har bodd", "has lived", "har bood", "Emil har bodd i Bergen i to år.", "Emil has lived in Bergen for two years."),
    W("aldri", "never", "AHL-dree", "Han har aldri vært i Tromsø.", "He has never been to Tromsø."),
    N("en", "lege", "legen", "leger", "doctor", "LEH-geh", "Hun ringte legen.", "She called the doctor."),
    W("feber", "fever", "FEH-ber", "Hun hadde også feber.", "She also had a fever."),
    W("vondt", "pain, sore", "vont", "Hun våknet med vondt i halsen.", "She woke up with a sore throat."),
    W("fordi", "because", "for-DEE", "Han liker jobben fordi han lærer mye.", "He likes the job because he learns a lot."),
    N("en", "sjef", "sjefen", "sjefer", "boss", "shayf", "Sjefen hans er hyggelig.", "His boss is nice."),
    W("sliten", "tired", "SLEE-ten", "Han er ofte sliten.", "He is often tired."),
    W("ledig", "available", "LEH-dee", "Er leiligheten ledig?", "Is the flat available?"),
    W("husleie", "rent", "HEWS-lay-eh", "Hun betaler 11 000 kroner i husleie.", "She pays 11,000 kroner in rent."),
    W("kommer til å", "is going to (prediction)", "KOM-mer til aw", "Det kommer til å regne litt.", "It's going to rain a bit."),
    N("en", "ferie", "ferien", "ferier", "holiday", "FEH-ree-eh", "Emil gleder seg til ferien.", "Emil is looking forward to the holiday.")
  ],
  dialogue: [["A", "Hva gjorde du i helgen?", "What did you do at the weekend?"], ["B", "Jeg gikk på kino. Og du?", "I went to the cinema. And you?"], ["A", "Jeg var hjemme, fordi jeg hadde feber.", "I was at home, because I had a fever."], ["B", "Så synd! Nå føler du deg bedre, håper jeg.", "What a pity! I hope you feel better now."]],
  quiz: [
    Q("Where did Mira go on Saturday?", ["på kino", "på jobb", "til legen"], "På lørdag gikk hun på kino med en venn."),
    Q("\"Yesterday she came home.\"", ["I går kom hun hjem.", "I går hun kom hjem.", "I går har hun kommet hjem."], "A finished time takes the past; the verb stays second."),
    Q("How long has Emil lived in Bergen?", ["to år", "tre år", "ett år"], "Emil har bodd i Bergen i to år."),
    Q("\"... because he doesn't get many breaks\"", ["fordi han ikke får mange pauser", "fordi han får ikke mange pauser", "fordi ikke han får mange pauser"], "In a clause, ikke comes before the verb."),
    Q("How does Mira ask whether the flat is available?", ["Hun spør om leiligheten er ledig.", "Hun spør hvis leiligheten er ledig.", "Hun spør er leiligheten ledig."], "\"whether\" is om."),
    Q("A prediction: \"It's going to rain a bit.\"", ["Det kommer til å regne litt.", "Det vil regne litt.", "Det skal regner litt."], "Predictions use kommer til å.")
  ],
  review: ["Past: var, gikk, spiste. Perfect: har bodd, har aldri vært.", "fordi + ikke + verb: fordi han ikke får.", "om = whether; prediction: kommer til å."]
}
];

const B1: LessonDef[] = [
{
  id: "ne-b1-story", title: "Eight stories from life", no: "Åtte historier fra livet", icon: "spark", stories: readingStories("b1", "en"),
  intro: "Eight stories using what you learned in B1: NAV, a job interview, the bank, a Norwegian test, a delayed train, the kitchen, snow in the mountains and a complaint in a shop.",
  notes: [
    { h: "What do the stories practise?", p: "Relative clauses with som: saksbehandleren som hjalp henne. selv om and likevel: Selv om det var vanskelig, ga hun ikke opp. mens and da: Mens barna sover… Da hun kom til stasjonen… The past perfect: hadde søkt, hadde trodd, hadde glemt. The passive: ble godkjent, må røres. Indirect questions: spurte hvorfor han ville jobbe der. jo … jo: Jo mer hun sparer, jo gladere blir hun." },
    { h: "How to practise", p: "Watch each story with the translation first, then hide it and watch again. Finally, read aloud. The red words are this lesson's words." }
  ],
  tip: "When a clause comes first, the verb of the main clause comes straight after it: \"Selv om det var vanskelig, ga hun ikke opp.\" \"Mens barna sover, leser han.\" Saying \"hun ga\" or \"han leser\" there is wrong.",
  words: [
    N("en", "søknad", "søknaden", "søknader", "application", "SUHK-nahd", "Hun fikk svar på søknaden.", "She got an answer to her application."),
    N("et", "skjema", "skjemaet", "skjemaer", "form", "SHEH-mah", "Hun måtte fylle ut et skjema.", "She had to fill in a form."),
    W("selv om", "even though", "sel om", "Selv om det var vanskelig, ga hun ikke opp.", "Even though it was difficult, she didn't give up."),
    W("godkjent", "approved", "GOO-shent", "Søknaden ble godkjent.", "The application was approved.", { note: "ble godkjent = was approved (passive)" }),
    N("en", "stilling", "stillingen", "stillinger", "position, post", "STIL-ling", "Han søkte på en stilling som lærer.", "He applied for a position as a teacher."),
    N("en", "erfaring", "erfaringen", "erfaringer", "experience", "AR-fah-ring", "Han fortalte om erfaringen sin.", "He talked about his experience."),
    N("en", "rente", "renten", "renter", "interest (money)", "REN-teh", "En sparekonto gir mer rente.", "A savings account gives more interest."),
    N("et", "budsjett", "budsjettet", "budsjetter", "budget", "bewd-SHET", "Hun må lage et budsjett.", "She has to make a budget."),
    W("mens", "while", "mens", "Mens barna sover, leser han.", "While the children sleep, he reads."),
    W("bestått", "passed (a test)", "beh-STAWT", "Han hadde bestått!", "He had passed!", { note: "bestå – besto – har bestått" }),
    W("forsinket", "delayed, late", "for-SHIN-ket", "Toget var forsinket.", "The train was delayed."),
    W("likevel", "still, even so", "LEE-keh-vel", "Likevel er tog bedre for miljøet.", "Still, trains are better for the environment."),
    N("et", "miljø", "miljøet", "miljøer", "environment", "MIL-yuh", "Tog er bedre for miljøet enn fly.", "Trains are better for the environment than planes."),
    N("en", "oppskrift", "oppskriften", "oppskrifter", "recipe", "OP-skrift", "Han har funnet en oppskrift på fiskesuppe.", "He has found a recipe for fish soup."),
    W("plutselig", "suddenly", "PLEWT-seh-lee", "Plutselig ringer det på døra.", "Suddenly the doorbell rings."),
    W("heldigvis", "luckily", "HEL-dee-vees", "Heldigvis smakte suppen nydelig.", "Luckily the soup tasted wonderful."),
    W("redd", "afraid", "red", "Mira var redd for å gå seg vill.", "Mira was afraid of getting lost.", { note: "være redd for = be afraid of" }),
    N("en", "kvittering", "kvitteringen", "kvitteringer", "receipt", "kvit-TEH-ring", "Han tar med kvitteringen.", "He takes the receipt with him."),
    W("klage", "to complain", "KLAH-geh", "Han vil klage på jakken.", "He wants to complain about the jacket."),
    W("fornøyd", "satisfied, pleased", "for-NOYD", "Han er fornøyd med servicen.", "He is satisfied with the service.")
  ],
  dialogue: [["A", "Hvorfor kom du så sent?", "Why were you so late?"], ["B", "Toget var forsinket, og jeg måtte vente i en time.", "The train was delayed, and I had to wait for an hour."], ["A", "Så kjedelig! Likevel er det bra at du kom.", "How annoying! Still, it's good that you came."], ["B", "Ja, og heldigvis fikk jeg pengene tilbake.", "Yes, and luckily I got my money back."]],
  quiz: [
    Q("What happened to Mira's application at NAV?", ["Den ble godkjent.", "Den ble borte.", "Den kom for sent."], "Etter to uker fikk hun svar på søknaden. Den ble godkjent!"),
    Q("\"The head teacher asked why he wanted to work there.\"", ["Rektoren spurte hvorfor han ville jobbe der.", "Rektoren spurte hvorfor ville han jobbe der.", "Rektoren spurte hvorfor han jobbe ville der."], "In an indirect question the subject comes before the verb: hvorfor han ville."),
    Q("Why is a savings account better?", ["Den gir mer rente.", "Den er gratis.", "Den har et budsjett."], "En sparekonto gir mer rente enn en vanlig konto."),
    Q("\"The test was easier than he had thought.\"", ["Prøven var lettere enn han hadde trodd.", "Prøven var lettere enn han har trodd.", "Prøven var mer lett enn han hadde trodd."], "Further back in the past: hadde + trodd."),
    Q("What was wrong with the train when Mira got to the station?", ["Det var forsinket.", "Det var fullt.", "Det hadde gått."], "Da hun kom til stasjonen, var toget forsinket."),
    Q("Why did the soup boil over?", ["Emil hadde glemt å skru ned varmen.", "Naboene kom for tidlig.", "Oppskriften var feil."], "Emil hadde glemt å skru ned varmen."),
    Q("What did they do so they wouldn't get lost?", ["De fulgte de røde merkene.", "De ringte en venn.", "De gikk hjem igjen."], "De bestemte seg for å følge de røde merkene på steinene."),
    Q("What did Emil take to the shop?", ["kvitteringen", "budsjettet", "oppskriften"], "Han tar med kvitteringen og går tilbake til butikken."),
    Q("\"Even though it was difficult, she didn't give up.\"", ["Selv om det var vanskelig, ga hun ikke opp.", "Selv om det var vanskelig, hun ga ikke opp.", "Likevel det var vanskelig, ga hun ikke opp."], "After a selv om clause, the verb comes first: ga hun.")
  ],
  review: ["som, selv om, mens, da: after a clause, the verb comes first.", "hadde + verb: hadde søkt, hadde glemt.", "Passive: ble godkjent, må røres."]
}
];

const B2: LessonDef[] = [
{
  id: "ne-b2-story", title: "Eight B2 stories", no: "Åtte historier på B2-nivå", icon: "spark", stories: readingStories("b2", "en"),
  intro: "Eight stories using what you learned in B2: a formal email, a public meeting, idioms at a café, moving day, the right to overtime pay, a dinner party, a half marathon and a beach clean-up.",
  notes: [
    { h: "What do the stories practise?", p: "Formal language: Dersom hun ikke får svar innen fjorten dager… / ber om at saken blir behandlet. Arguing: på den ene siden … på den andre siden, ettersom, heller. Idioms: verdens undergang, som smurt, midt i blinken, få bakoversveis. Particle verbs: flytte inn, finne ut av, sette opp, pakke ut, kutte ned på. Little words: jo, nok, da. The -s passive: brytes ned." },
    { h: "How to practise", p: "Watch each story with the translation first, then hide it and watch again. Don't translate idioms word for word; learn what they mean as a whole. The red words are this lesson's words." }
  ],
  tip: "In particle verbs the particle is stressed and changes the meaning: finne = find, finne ut av = sort out. pakke ned = pack, pakke ut = unpack.",
  words: [
    W("dersom", "if (formal)", "DASH-om", "Dersom hun ikke får svar, kontakter hun foreningen.", "If she gets no answer, she will contact the association.", { note: "formal alternative to hvis" }),
    W("beklager", "apologises; sorry", "beh-KLAH-ger", "Utleieren ringer og beklager.", "The landlord calls and apologises.", { note: "beklage – beklaget" }),
    W("ettersom", "since, as", "ET-ter-shom", "Det er bra, ettersom det hjelper miljøet.", "It's good, since it helps the environment."),
    W("på den ene siden", "on the one hand", "paw den EH-neh SEE-den", "På den ene siden blir det lettere å reise.", "On the one hand, it will be easier to travel.", { note: "… på den andre siden = on the other hand" }),
    N("et", "forslag", "forslaget", "forslag", "proposal, suggestion", "FOSH-lahg", "Politikerne vurderer forslaget hans.", "The politicians are considering his proposal."),
    W("satse", "invest in, go for", "SAHT-seh", "Kommunen bør satse på bussen.", "The council should invest in the bus.", { note: "satse på noe" }),
    N("et", "uttrykk", "uttrykket", "uttrykk", "expression, idiom", "EWT-trewk", "Ola elsker faste uttrykk.", "Ola loves idioms."),
    W("midt i blinken", "spot on, perfect", "mit ee BLIN-ken", "Det passer midt i blinken!", "That suits me perfectly!"),
    W("flytte inn", "move in", "FLEWT-teh in", "De skal flytte inn i et nytt hus.", "They are moving into a new house."),
    W("finne ut av", "sort out, figure out", "FIN-neh ewt ahv", "Emil må finne ut av det.", "Emil has to sort it out."),
    W("pakke ut", "unpack", "PAHK-keh ewt", "Det tar uker å pakke ut alt.", "It takes weeks to unpack everything."),
    W("overtid", "overtime", "AW-ver-teed", "Hun har jobbet mye overtid.", "She has worked a lot of overtime."),
    N("en", "tillitsvalgt", "tillitsvalgte", "tillitsvalgte", "union representative", "TIL-lits-valt", "Hun snakker med den tillitsvalgte.", "She talks to the union representative."),
    N("en", "rettighet", "rettigheten", "rettigheter", "right (legal)", "RET-tee-hayt", "Hun vet hvilke rettigheter hun har.", "She knows what rights she has."),
    W("innrømme", "admit", "IN-ruhm-meh", "Lederen innrømmer feilen.", "The manager admits the mistake."),
    W("nok", "probably; enough", "nok", "Han snakker nok bedre enn han tror.", "He probably speaks better than he thinks."),
    W("skuffet", "disappointed", "SKUF-fet", "Mira er skuffet.", "Mira is disappointed."),
    W("i stedet for", "instead of", "ee STEH-deh for", "I stedet for å løpe, svømmer hun.", "Instead of running, she swims."),
    W("frivillig", "volunteer; voluntary", "FREE-vil-lee", "Det er mange frivillige på stranda.", "There are many volunteers on the beach."),
    W("bakoversveis", "astonishment", "BAH-kaw-ver-shvays", "Emil får bakoversveis.", "Emil is stunned.", { note: "få bakoversveis = be blown away" }),
    W("kutte ned på", "cut down on", "KEWT-teh neh paw", "Han vil kutte ned på plast.", "He wants to cut down on plastic."),
    W("bidra", "contribute", "BEE-drah", "Alle kan bidra.", "Everyone can contribute.")
  ],
  dialogue: [["A", "Hørte du at kommunen vil bygge vei gjennom parken?", "Did you hear that the council wants to build a road through the park?"], ["B", "Ja, men jeg synes de heller bør satse på bussen.", "Yes, but I think they should invest in the bus instead."], ["A", "Enig. På den ene siden sparer vi tid, på den andre siden mister barna parken.", "I agree. On the one hand we save time, on the other hand the children lose the park."], ["B", "Vi får nok si fra på folkemøtet i kveld.", "I suppose we'll have to speak up at the public meeting tonight."]],
  quiz: [
    Q("When will Mira contact the Tenants' Association?", ["Dersom hun ikke får svar innen fjorten dager.", "Dersom utleieren beklager.", "Innen to dager."], "Dersom hun ikke får svar innen fjorten dager, vil hun kontakte Leieboerforeningen."),
    Q("\"On the other hand, the children will lose an important place.\"", ["På den andre siden vil barna miste et viktig sted.", "På den andre siden barna vil miste et viktig sted.", "På andre siden vil barna miste et viktig sted."], "When an adverbial comes first, the verb is second: vil barna."),
    Q("What does \"Det er ikke verdens undergang\" mean?", ["Det er ikke så farlig.", "Verden går under.", "Det er veldig farlig."], "It means 'it's not that bad'."),
    Q("What does \"Alt går som smurt\" mean?", ["Alt går veldig greit.", "Alt er fullt av smør.", "Ingenting fungerer."], "som smurt = smoothly, like clockwork."),
    Q("\"Emil has to sort it out quickly.\"", ["Emil må finne ut av det i en fart.", "Emil må finne det ut av i en fart.", "Emil må ut finne av det i en fart."], "finne ut av + object."),
    Q("Who helped Mira with her overtime pay?", ["den tillitsvalgte", "utleieren", "fysioterapeuten"], "Hun tar kontakt med den tillitsvalgte."),
    Q("In \"Han snakker nok bedre norsk enn han tror\", what does nok mean?", ["probably", "enough", "never"], "Here nok = probably."),
    Q("What did the physiotherapist advise Mira to do?", ["å ta det med ro", "å løpe mer", "å kutte ned på plast"], "Fysioterapeuten råder henne til å ta det med ro."),
    Q("Passive: \"The plastic breaks down into microplastics.\"", ["Plasten brytes ned til mikroplast.", "Plasten bryter ned til mikroplast.", "Plasten blir bryter ned til mikroplast."], "The -s passive: brytes ned.")
  ],
  review: ["Formal language: dersom, innen, beklager.", "Arguing: på den ene siden … på den andre siden, ettersom.", "Particle verbs and idioms: finne ut av, pakke ut, midt i blinken."]
}
];

const C1: LessonDef[] = [
{
  id: "ne-c1-story", title: "Ten C1 stories", no: "Ti historier på C1-nivå", icon: "spark", stories: readingStories("c1", "en"),
  intro: "Ten stories covering every C1 topic: academic language, emphasis, hypotheticals and regrets, negotiation, society and the media, dialects and slang, business idioms and proverbs.",
  notes: [
    { h: "Academic language, emphasis and hypotheticals", p: "Academic: legge fram problemstillingen, redegjøre for metoden, resultatene tyder på, utvalget er begrenset. Emphasis (utbrytning): Det var naboen hans som hadde sett sykkelen. Det som er vanskeligst, er å … Hypotheticals and regrets: Hadde hun bare stått opp …, ville hun ha rukket flyet. Om hun hadde tatt en taxi, kunne hun ha kommet fram." },
    { h: "Negotiation, media, language variation and idioms", p: "Negotiation: holde på kravet, foreslå et kompromiss, påpeke, møtes på midten. Media: kronikk, ytringsfrihet, kildekritikk, regulere. Language variation: nynorsk, sognedialekt (kor, eg), slang (sykt bra). Business idioms: sommerfugler i magen, tilbake til tegnebrettet, treffe spikeren på hodet, brette opp ermene. Proverbs: Roma ble ikke bygd på én dag. Der det er vilje, er det vei." }
  ],
  tip: "In \"Hadde hun bare …\" the verb comes first and there is no hvis; it means \"if only …\". The same inverted pattern works for conditions: \"Hadde han ikke invitert dem, hadde de aldri møttes.\"",
  words: [
    N("en", "problemstilling", "problemstillingen", "problemstillinger", "research question", "proh-BLEM-stil-ling", "Hun legger fram problemstillingen.", "She presents the research question."),
    W("redegjør for", "gives an account of", "REH-deh-yur for", "Hun redegjør for metoden.", "She gives an account of the method.", { note: "redegjøre – redegjorde" }),
    W("tyder på", "suggests, indicates", "TEW-der paw", "Resultatene tyder på en sammenheng.", "The results suggest a connection.", { note: "tyde på" }),
    N("et", "funn", "funnet", "funn", "finding", "fewn", "Funnene er relevante.", "The findings are relevant."),
    N("et", "utvalg", "utvalget", "utvalg", "sample; selection", "EWT-valg", "Utvalget er begrenset.", "The sample is limited."),
    W("anmelde", "report (to the police)", "AHN-mel-leh", "Han vil anmelde tyveriet.", "He wants to report the theft."),
    N("et", "tyveri", "tyveriet", "tyverier", "theft", "tew-veh-REE", "Tyveriet skjedde i går.", "The theft happened yesterday."),
    W("nettopp", "exactly, precisely; just", "NET-top", "Det var nettopp det som var rart.", "That was exactly what was strange."),
    W("nemlig", "you see, namely", "NEM-lee", "Det var nemlig en ny lås.", "It was, you see, a new lock."),
    W("angrer", "regrets", "AHN-grer", "Hun angrer på det.", "She regrets it.", { note: "angre på noe" }),
    W("rukket", "caught, made it in time", "ROOK-ket", "Hun ville ha rukket flyet.", "She would have caught the plane.", { note: "rekke – rakk – har rukket" }),
    W("tidsnok", "in time", "TEETS-nok", "Hun kom fram akkurat tidsnok.", "She arrived just in time."),
    W("forhandle", "negotiate", "for-HAHN-dleh", "Han skal forhandle fram en avtale.", "He is going to negotiate an agreement."),
    N("en", "leverandør", "leverandøren", "leverandører", "supplier", "leh-veh-rahn-DUR", "Leverandøren vil øke prisene.", "The supplier wants to raise prices."),
    N("et", "krav", "kravet", "krav", "demand, requirement", "krahv", "Motparten holder på kravet sitt.", "The other side sticks to its demand."),
    N("et", "kompromiss", "kompromisset", "kompromisser", "compromise", "kom-proh-MISS", "Emil foreslår et kompromiss.", "Emil suggests a compromise."),
    N("en", "kronikk", "kronikken", "kronikker", "opinion piece", "kroo-NIK", "Hun skriver en kronikk.", "She is writing an opinion piece."),
    W("ytringsfrihet", "freedom of expression", "EWT-rings-free-hayt", "Det kan true ytringsfriheten.", "It could threaten freedom of expression.", { g: "en", def: "ytringsfriheten" }),
    W("kildekritikk", "critical evaluation of sources", "KHIL-deh-kri-tik", "Kildekritikk er viktigere enn forbud.", "Evaluating sources matters more than bans."),
    W("nynorsk", "Nynorsk (the second written standard)", "NEW-noshk", "Skiltene er skrevet på nynorsk.", "The signs are written in Nynorsk."),
    W("venne seg til", "get used to", "VEN-neh say til", "Han begynner å venne seg til uttalen.", "He starts to get used to the pronunciation."),
    W("sommerfugler i magen", "butterflies in the stomach", "SOM-mer-fewg-ler ee MAH-gen", "Mira har sommerfugler i magen.", "Mira has butterflies in her stomach."),
    W("tilbake til tegnebrettet", "back to the drawing board", "til-BAH-keh til TAY-neh-bret-teh", "De måtte tilbake til tegnebrettet.", "They had to go back to the drawing board."),
    N("et", "ordtak", "ordtaket", "ordtak", "proverb", "OOR-tahk", "Hun har et ordtak for alt.", "She has a proverb for everything."),
    W("forgjeves", "in vain", "for-YEH-ves", "Han venter ikke forgjeves.", "He isn't waiting in vain."),
    N("en", "sammenheng", "sammenhengen", "sammenhenger", "connection, context", "SAHM-men-heng", "Hun forklarer komplekse sammenhenger.", "She explains complex connections."),
    W("faktisk", "actually, in fact", "FAHK-tisk", "Det var faktisk Emil som introduserte dem.", "It was actually Emil who introduced them."),
    N("et", "brudepar", "brudeparet", "brudepar", "bride and groom", "BREW-deh-pahr", "Han skåler for brudeparet.", "He toasts the bride and groom.")
  ],
  dialogue: [["A", "Hørte du debatten om ytringsfrihet i går?", "Did you hear the debate about freedom of expression yesterday?"], ["B", "Ja, og det var faktisk Mira som hadde de beste argumentene.", "Yes, and it was actually Mira who had the best arguments."], ["A", "Hadde jeg bare sett hele sendingen! Jeg rakk bare slutten.", "If only I had watched the whole broadcast! I only caught the end."], ["B", "Den ligger på nettet, så det er ikke for sent.", "It's online, so it's not too late."]],
  quiz: [
    Q("What does \"Resultatene tyder på at …\" mean?", ["The results suggest that …", "The results prove beyond doubt that …", "The results say nothing about …"], "tyde på = suggest, indicate; it is not absolute proof."),
    Q("\"It was his neighbour who had seen the bike.\"", ["Det var naboen hans som hadde sett sykkelen.", "Det var naboen hans hadde sett sykkelen.", "Naboen hans det var som hadde sett sykkelen."], "Emphasis: Det var … som …"),
    Q("\"If only she had got up when the alarm rang!\"", ["Hadde hun bare stått opp da vekkerklokka ringte!", "Hvis hun bare står opp da vekkerklokka ringte!", "Hun hadde bare stått opp da vekkerklokka ringer!"], "Hadde + subject + bare + participle = if only."),
    Q("What does \"Det nytter ikke å gråte over spilt melk\" mean?", ["There's no use crying over spilt milk.", "Spilling milk brings bad luck.", "You must be careful in the kitchen."], "It's pointless to be upset about something that can't be changed."),
    Q("In a negotiation, what does \"De møtes på midten\" mean?", ["They meet halfway.", "The meeting ends halfway through.", "They sit in the middle of the table."], "møtes på midten = both sides give a little."),
    Q("According to Mira, what is more important than bans?", ["kildekritikk", "ytringsfrihet", "propaganda"], "Mira svarer at kildekritikk er viktigere enn forbud."),
    Q("How is hvor said in the Sogn dialect?", ["kor", "eg", "no"], "Hun sier kor i stedet for hvor og eg i stedet for jeg."),
    Q("What does \"tilbake til tegnebrettet\" mean?", ["back to the drawing board", "doing a drawing", "writing on the board"], "Starting again after a plan fails."),
    Q("What does \"Det finnes ikke dårlig vær, bare dårlige klær\" advise?", ["Dress properly and go out whatever the weather.", "Stay in when the weather is bad.", "Buy expensive clothes."], "One of Norway's favourite sayings."),
    Q("What is the pattern \"Det som er vanskeligst, er å forklare …\" used for?", ["Emphasising part of the sentence", "Asking a question", "Talking about the past"], "Det som … er … = cleft sentence (utbrytning).")
  ],
  review: ["Academic language: problemstilling, redegjøre for, tyde på, funn.", "Emphasis and hypotheticals: Det var … som …; Hadde hun bare …", "Media, dialects, idioms and proverbs: kronikk, nynorsk, tilbake til tegnebrettet, Roma ble ikke bygd på én dag."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1), ...asExtra("A2", A2), ...asExtra("B1", B1), ...asExtra("B2", B2), ...asExtra("C1", C1)];
