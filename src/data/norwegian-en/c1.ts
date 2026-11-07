import { I, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const C1: LessonDef[] = [
{
  id: "ne-c1-1", title: "Academic style", no: "Fagspråk og akademisk stil", icon: "school",
  intro: "How Norwegian academic and professional writing works: nouns instead of verbs, passives and careful claims.",
  notes: [
    { h: "Nominal style", p: "Formal Norwegian often turns verbs into nouns: Prisene økte → Det var en økning i prisene. Use this sparingly: Språkrådet recommends clear language, and overly nominal text is considered poor style." },
    { h: "Careful claims", p: "Hedging words: trolig (probably), antakelig (presumably), tilsynelatende (apparently), i stor grad (to a large extent), kan tyde på at (may suggest that)." },
    { h: "Linking", p: "følgelig (consequently), dermed (thereby), imidlertid (however), i tillegg (in addition), med andre ord (in other words)." }
  ],
  tip: "Norwegian academic writing uses \"jeg\" less than English in some fields, but avoid heavy English-style long sentences: clear, short sentences are preferred. And \"eventuelt\" is a false friend: it means \"possibly, if applicable\", not \"eventually\" (til slutt).",
  words: [
    W("økning", "increase", "", "Det har vært en økning i prisene.", "There has been an increase in prices."),
    W("nedgang", "decline", "", "Tallene viser en nedgang.", "The figures show a decline."),
    W("undersøkelse", "study, survey", "", "Undersøkelsen omfatter 500 personer.", "The study covers 500 people."),
    W("trolig", "probably", "", "Dette skyldes trolig flere faktorer.", "This is probably due to several factors."),
    W("antakelig", "presumably", "", "Det er antakelig en sammenheng.", "There is presumably a connection."),
    W("kan tyde på", "may suggest", "", "Tallene kan tyde på en endring.", "The figures may suggest a change."),
    W("følgelig", "consequently", "", "Følgelig må planen endres.", "Consequently, the plan must change."),
    W("dermed", "thereby, thus", "", "Dermed faller kostnadene.", "Thus the costs fall."),
    W("i stor grad", "to a large extent", "", "Dette avhenger i stor grad av prisen.", "This depends to a large extent on the price."),
    W("sammenheng", "connection, context", "", "Det er en klar sammenheng.", "There is a clear connection."),
    W("eventuelt", "possibly, if applicable", "", "Eventuelle spørsmål kan rettes til meg.", "Any questions can be sent to me.", { note: "not \"eventually\"" }),
    W("med andre ord", "in other words", "", "Med andre ord må vi spare.", "In other words, we have to save.")
  ],
  dialogue: [["A", "Hva viser undersøkelsen?", "What does the study show?"], ["B", "Den viser en klar økning i bruken av digitale tjenester.", "It shows a clear increase in the use of digital services."], ["A", "Hva skyldes det?", "What is it due to?"], ["B", "Det skyldes trolig flere faktorer, men tallene må tolkes med varsomhet.", "It's probably due to several factors, but the figures must be interpreted with caution."]],
  quiz: [
    { q: "What does \"eventuelt\" mean?", o: ["possibly, if applicable", "eventually", "finally"], a: 0, e: "A false friend. \"Eventually\" is til slutt." },
    { q: "Most careful claim:", o: ["Tallene kan tyde på en endring.", "Tallene beviser en endring.", "Alt har endret seg."], a: 0, e: "kan tyde på = may suggest." },
    { q: "\"Consequently, the plan must change.\"", o: ["Følgelig må planen endres.", "Følgelig planen må endres.", "Følgelig må endres planen."], a: 0, e: "An adverb first: the verb comes second." },
    { q: "What does \"nedgang\" mean?", o: ["decline", "increase", "entrance"], a: 0, e: "nedgang = decline; økning = increase." }
  ],
  review: ["Nouns for verbs: økning, nedgang, but keep it clear.", "Hedging: trolig, antakelig, kan tyde på.", "eventuelt ≠ eventually."]
},
{
  id: "ne-c1-2", title: "Emphasis and word order", no: "Utbrytning og trykk", icon: "arrow",
  intro: "How to emphasise part of a sentence with cleft sentences (Det var ... som), and how som works in indirect questions.",
  notes: [
    { h: "Cleft sentences", p: "Det er / Det var ... som ... puts the focus on one element, like English \"It was Kari who ...\", but Norwegian uses it far more often: Det var Kari som ringte." },
    { h: "Fronting", p: "Moving something to the front gives emphasis; the verb stays second: Den filmen har jeg sett (That film I have seen). English rarely does this, but it's normal in Norwegian." },
    { h: "som in indirect questions", p: "If the question word is the subject of the clause, add som: Jeg vet ikke hvem som kommer. English needs no such word." }
  ],
  tip: "\"Jeg vet ikke hvem kommer\" is a very common error. When the question word is the subject, use som: Jeg vet ikke hvem som kommer. It's the same with hva som: Jeg vet ikke hva som skjedde.",
  words: [
    W("Det var ... som", "It was ... who", "", "Det var Kari som ringte.", "It was Kari who called."),
    W("hvem som", "who (in a clause)", "", "Jeg vet ikke hvem som kommer.", "I don't know who's coming."),
    W("hva som", "what (in a clause)", "", "Hun spurte hva som skjedde.", "She asked what happened."),
    W("skjer", "happen, happens", "", "Hva skjer i kveld?", "What's happening tonight?", { note: "infinitive: skje" }),
    W("nettopp", "just, exactly", "", "Det er nettopp det jeg mener.", "That's exactly what I mean."),
    W("selveste", "the very", "", "Selveste statsministeren kom.", "The prime minister herself came."),
    W("til og med", "even", "", "Til og med barna forsto det.", "Even the children understood it."),
    W("særlig", "particularly", "", "Det gjelder særlig eldre.", "It applies particularly to older people."),
    W("ikke bare ... men også", "not only ... but also", "", "Hun er ikke bare flink, men også snill.", "She's not only clever but also kind."),
    W("nemlig", "you see, namely", "", "Jeg kan ikke, jeg er nemlig syk.", "I can't; you see, I'm ill."),
    W("derimot", "by contrast", "", "Han derimot var fornøyd.", "He, by contrast, was happy.")
  ],
  dialogue: [["A", "Hvem var det som ringte?", "Who was it that called?"], ["B", "Det var sjefen som ringte.", "It was the boss who called."], ["A", "Vet du hva som skjedde?", "Do you know what happened?"], ["B", "Nei, men det er nettopp det jeg må finne ut.", "No, but that's exactly what I have to find out."]],
  quiz: [
    { q: "\"I don't know who's coming.\"", o: ["Jeg vet ikke hvem som kommer.", "Jeg vet ikke hvem kommer.", "Jeg vet ikke som hvem kommer."], a: 0, e: "hvem is the subject, so som is needed." },
    { q: "\"It was Kari who called.\"", o: ["Det var Kari som ringte.", "Det var Kari hvem ringte.", "Kari var det ringte."], a: 0, e: "Cleft: Det var ... som." },
    { q: "Fronting: \"That film I have seen.\"", o: ["Den filmen har jeg sett.", "Den filmen jeg har sett.", "Den filmen sett jeg har."], a: 0, e: "The verb stays second." },
    { q: "What does \"nemlig\" add?", o: ["\"you see\", gives the reason", "\"not at all\"", "\"maybe\""], a: 0, e: "It explains: jeg er nemlig syk." }
  ],
  review: ["Det var ... som ...", "hvem som / hva som when the question word is the subject.", "Fronting: Den filmen har jeg sett."]
},
{
  id: "ne-c1-3", title: "Hypotheticals and regrets", no: "Hypotetiske setninger", icon: "clock",
  intro: "Things that didn't happen and what you should have done, including a form English speakers find unusual: Hadde jeg visst.",
  notes: [
    { h: "Unreal now", p: "Hvis jeg hadde tid, ville jeg reist (If I had time, I would travel). Often even shorter, with the verb first: Hadde jeg tid, ville jeg reist." },
    { h: "Unreal past", p: "Hvis jeg hadde visst det, ville jeg ha kommet (If I had known, I would have come). Often: Hadde jeg visst det, hadde jeg kommet." },
    { h: "Regret with burde", p: "burde ha + participle = should have: Du burde ha sagt det (You should have said it). kunne ha = could have. skulle ha = should have (wish): Jeg skulle ha reist." }
  ],
  tip: "English needs \"would have\" and \"had\", but spoken Norwegian often uses hadde in both parts: Hadde jeg visst det, hadde jeg kommet. And don't forget: the verb comes first in the main clause after the if-part.",
  words: [
    W("hvis jeg hadde", "if I had", "", "Hvis jeg hadde tid, ville jeg reist.", "If I had time, I would travel."),
    W("ville ha", "would have", "", "Jeg ville ha kommet.", "I would have come."),
    W("burde ha", "should have", "", "Du burde ha sagt det.", "You should have said it."),
    W("kunne ha", "could have", "", "Det kunne ha gått galt.", "It could have gone wrong."),
    W("skulle ønske", "wish", "", "Jeg skulle ønske jeg hadde tid.", "I wish I had time."),
    W("angre", "regret", "", "Jeg angrer på det jeg sa.", "I regret what I said."),
    W("heller", "rather, instead", "", "Vi burde heller ha tatt toget.", "We should have taken the train instead."),
    W("i så fall", "in that case", "", "I så fall kommer jeg ikke.", "In that case, I won't come."),
    W("ellers", "otherwise", "", "Skynd deg, ellers kommer du for sent.", "Hurry, otherwise you'll be late."),
    W("uansett", "anyway, regardless", "", "Jeg kommer uansett.", "I'm coming anyway."),
    W("med mindre", "unless", "", "Jeg kommer, med mindre det regner.", "I'll come, unless it rains."),
    W("forutsatt at", "provided that", "", "Vi begynner, forutsatt at alle er her.", "We'll start, provided that everyone is here.")
  ],
  dialogue: [["A", "Hvorfor sa du det ikke?", "Why didn't you say it?"], ["B", "Hadde jeg visst det, hadde jeg sagt det.", "If I had known, I would have said it."], ["A", "Du burde ha spurt meg.", "You should have asked me."], ["B", "Du har rett. Jeg angrer på det.", "You're right. I regret it."]],
  quiz: [
    { q: "\"If I had known, I would have come.\"", o: ["Hadde jeg visst det, hadde jeg kommet.", "Hvis jeg vet det, kommer jeg.", "Hadde jeg visst det, jeg hadde kommet."], a: 0, e: "The verb comes first in both parts." },
    { q: "\"You should have said it.\"", o: ["Du burde ha sagt det.", "Du burde si det hatt.", "Du skal sagt det."], a: 0, e: "burde ha + participle." },
    { q: "What does \"med mindre\" mean?", o: ["unless", "less", "at least"], a: 0, e: "med mindre = unless." },
    { q: "\"I wish I had time.\"", o: ["Jeg skulle ønske jeg hadde tid.", "Jeg ønsker jeg har tid.", "Jeg vil jeg hadde tid."], a: 0, e: "skulle ønske = wish." }
  ],
  review: ["Hadde jeg visst det, hadde jeg kommet.", "burde ha, kunne ha + participle.", "med mindre, forutsatt at, i så fall."]
},
{
  id: "ne-c1-4", title: "Meetings and negotiation", no: "Møter og forhandlinger", icon: "briefcase",
  intro: "How to take part in meetings, disagree politely and negotiate in a Norwegian workplace, where consensus matters.",
  notes: [
    { h: "Norwegian meetings", p: "Meetings are informal and aim at consensus. Everyone is expected to speak, and the boss doesn't simply decide. Direct disagreement is fine if it's calm and factual." },
    { h: "Softening", p: "Jeg er ikke helt enig. (I don't quite agree.) Kan vi se på det på en annen måte? Det høres fornuftig ut, men ... (That sounds sensible, but ...)" },
    { h: "Reaching agreement", p: "Vi må finne en løsning. Kan vi møtes på midten? (Can we meet in the middle?) Da er vi enige. (Then we're agreed.)" }
  ],
  tip: "Understatement is normal: \"Det er ikke så dumt\" (not so stupid) can be high praise. English-style enthusiasm like \"That's amazing!\" can sound exaggerated in a Norwegian meeting.",
  words: [
    W("dagsorden", "agenda", "", "Hva står på dagsorden i dag?", "What's on the agenda today?"),
    W("referat", "minutes", "", "Hvem skriver referat?", "Who is taking the minutes?"),
    W("forhandle", "negotiate", "", "Vi må forhandle om prisen.", "We have to negotiate the price."),
    W("løsning", "solution", "", "Vi må finne en løsning.", "We have to find a solution."),
    W("møtes på midten", "meet in the middle", "", "Kan vi møtes på midten?", "Can we meet in the middle?"),
    W("avtale", "agreement, agree", "", "Da har vi en avtale.", "Then we have a deal."),
    W("innspill", "input, suggestion", "", "Har noen innspill?", "Does anyone have any input?"),
    W("Det høres fornuftig ut", "That sounds sensible", "", "Det høres fornuftig ut, men det koster mye.", "That sounds sensible, but it costs a lot."),
    W("ikke helt enig", "don't quite agree", "", "Jeg er ikke helt enig i det.", "I don't quite agree with that."),
    W("tilbud", "offer", "", "Vi har fått et godt tilbud.", "We've had a good offer."),
    W("frist", "deadline", "", "Kan vi utsette fristen?", "Can we postpone the deadline?"),
    W("ansvar", "responsibility", "", "Hvem har ansvar for dette?", "Who is responsible for this?")
  ],
  dialogue: [["A", "Hva er tilbudet deres?", "What is your offer?"], ["B", "Vi kan gi ti prosent rabatt.", "We can give a ten percent discount."], ["A", "Jeg er ikke helt enig i at det er nok. Kan vi møtes på midten?", "I don't quite agree that it's enough. Can we meet in the middle?"], ["B", "Det høres fornuftig ut. Da har vi en avtale.", "That sounds sensible. Then we have a deal."]],
  quiz: [
    { q: "A polite way to disagree:", o: ["Jeg er ikke helt enig.", "Du tar feil.", "Det er dumt."], a: 0, e: "A soft, factual tone." },
    { q: "What does \"referat\" mean?", o: ["minutes of a meeting", "a referee", "a reference"], a: 0, e: "A false friend: minutes." },
    { q: "\"Det er ikke så dumt\" usually means ...", o: ["That's actually quite good.", "That's stupid.", "I don't know."], a: 0, e: "Norwegian understatement." },
    { q: "What are \"innspill\"?", o: ["input, suggestions", "mistakes", "contracts"], a: 0, e: "innspill = input." }
  ],
  review: ["Consensus: Kan vi møtes på midten?", "Soften: Jeg er ikke helt enig. Det høres fornuftig ut, men ...", "dagsorden, referat, innspill, avtale."]
},
{
  id: "ne-c1-5", title: "Society and the media", no: "Samfunn og medier", icon: "globe",
  intro: "The vocabulary of politics and the news: Stortinget, elections, the welfare state and how to discuss them.",
  notes: [
    { h: "The political system", p: "Norway is a constitutional monarchy. Stortinget is the parliament, regjeringen the government and statsministeren the prime minister. Kommune (municipality) and fylke (county) handle local matters." },
    { h: "The welfare state", p: "velferdsstaten pays for healthcare, education and benefits through high taxes. The term dugnad, voluntary community work, is central to Norwegian identity." },
    { h: "News language", p: "Headlines drop small words: Krever svar fra regjeringen (Demands answers from the government). Common verbs: hevde (claim), kreve (demand), avvise (reject)." }
  ],
  tip: "A false friend: politikk covers both \"politics\" and \"policy\". And konsekvens means consequence, but aktuell means relevant, current, not \"actual\" (faktisk).",
  words: [
    W("Stortinget", "the Norwegian parliament", "", "Stortinget vedtok loven.", "Parliament passed the law."),
    W("regjeringen", "the government", "", "Regjeringen foreslår nye regler.", "The government is proposing new rules."),
    W("velferdsstaten", "the welfare state", "", "Velferdsstaten koster mye.", "The welfare state costs a lot."),
    W("valg", "election, choice", "", "Det er valg til høsten.", "There's an election this autumn."),
    W("skatt", "tax", "", "Skatten er høy i Norge.", "Tax is high in Norway."),
    W("kommune", "municipality", "", "Kommunen har dårlig økonomi.", "The municipality's finances are poor."),
    W("hevde", "claim", "", "Partiet hevder at det virker.", "The party claims that it works."),
    W("kreve", "demand", "", "Opposisjonen krever svar.", "The opposition demands answers."),
    W("avvise", "reject", "", "Ministeren avviser kritikken.", "The minister rejects the criticism."),
    W("aktuell", "current, relevant", "", "Saken er svært aktuell.", "The issue is very current.", { note: "not \"actual\"" }),
    W("dugnad", "voluntary community work", "", "Vi har dugnad på lørdag.", "We have a community work day on Saturday."),
    W("ytringsfrihet", "freedom of speech", "", "Ytringsfrihet er viktig.", "Freedom of speech is important.")
  ],
  dialogue: [["A", "Har du lest om den nye loven?", "Have you read about the new law?"], ["B", "Ja, regjeringen foreslår høyere skatt.", "Yes, the government is proposing higher taxes."], ["A", "Opposisjonen krever svar.", "The opposition is demanding answers."], ["B", "Ministeren avviser kritikken, men saken er svært aktuell før valget.", "The minister rejects the criticism, but the issue is very current ahead of the election."]],
  quiz: [
    { q: "What does \"aktuell\" mean?", o: ["current, relevant", "actual", "active"], a: 0, e: "A false friend. Actual = faktisk." },
    { q: "What is \"Stortinget\"?", o: ["the parliament", "the king's palace", "the supreme court"], a: 0, e: "Literally \"the great assembly\"." },
    { q: "What does \"dugnad\" mean?", o: ["voluntary community work", "a tax", "a party"], a: 0, e: "Central to Norwegian culture." },
    { q: "\"The minister rejects the criticism.\"", o: ["Ministeren avviser kritikken.", "Ministeren krever kritikken.", "Ministeren hevder kritikken."], a: 0, e: "avvise = reject." }
  ],
  review: ["Stortinget, regjeringen, kommunen, velferdsstaten.", "hevde, kreve, avvise.", "aktuell ≠ actual; dugnad."]
},
{
  id: "ne-c1-6", title: "Dialects, Nynorsk and slang", no: "Språkvariasjon", icon: "chat",
  intro: "Norway has no standard spoken form: dialects are used everywhere, and there are two written languages. This lesson helps you understand what you'll really hear.",
  notes: [
    { h: "Two written forms", p: "Bokmål is used by most people; Nynorsk by about 10–15%, mainly in Western Norway. Both are official. You should be able to read Nynorsk.",
      table: [["Bokmål", "Nynorsk", "English"], ["jeg", "eg", "I"], ["ikke", "ikkje", "not"], ["hva", "kva", "what"], ["vet", "veit", "know"]] },
    { h: "Dialects", p: "People speak their dialect at work and on TV, and it's a matter of pride. Common differences: jeg can be eg, æ or je; ikke can be ikkje, itj or ente. Bergen has only two genders." },
    { h: "Slang", p: "Common informal words include kjipt (annoying, bad), digg (great, tasty), chill (relaxed), and the many English loanwords." }
  ],
  tip: "Don't apologise if you can't follow a dialect: Norwegians know they're hard. Just say \"Kan du si det en gang til?\" Also, English words in Norwegian often take Norwegian endings: å chille, å google, jeg googlet det.",
  words: [
    W("dialekt", "dialect", "", "Hun snakker bergensk dialekt.", "She speaks the Bergen dialect."),
    W("bokmål", "Bokmål", "", "Boka er skrevet på bokmål.", "The book is written in Bokmål."),
    W("nynorsk", "Nynorsk", "", "Han skriver nynorsk.", "He writes Nynorsk."),
    W("eg", "I (Nynorsk)", "", "Eg veit ikkje.", "I don't know."),
    W("ikkje", "not (Nynorsk)", "", "Det er ikkje langt.", "It's not far."),
    W("kva", "what (Nynorsk)", "", "Kva heiter du?", "What's your name?"),
    W("Kan du si det en gang til?", "Could you say that again?", "", "Unnskyld, kan du si det en gang til?", "Sorry, could you say that again?"),
    W("kjipt", "annoying, too bad", "", "Så kjipt!", "That's so annoying!"),
    W("digg", "great, delicious", "", "Maten var digg.", "The food was great."),
    W("kult", "cool", "", "Det var kult!", "That was cool!"),
    W("slitsomt", "tiring, annoying", "", "Det var slitsomt.", "That was tiring."),
    W("i det hele tatt", "at all", "", "Forstår du i det hele tatt?", "Do you understand at all?")
  ],
  dialogue: [["A", "Kor kjem du frå?", "Where do you come from? (Nynorsk)"], ["B", "Unnskyld, kan du si det en gang til?", "Sorry, could you say that again?"], ["A", "Hvor kommer du fra? Jeg snakker dialekt.", "Where do you come from? I speak a dialect."], ["B", "Jeg er fra England. Dialekter er skikkelig vanskelige!", "I'm from England. Dialects are really hard!"]],
  quiz: [
    { q: "Nynorsk \"Eg veit ikkje.\" in Bokmål?", o: ["Jeg vet ikke.", "Jeg vil ikke.", "Jeg var ikke."], a: 0, e: "eg = jeg, veit = vet, ikkje = ikke." },
    { q: "What should you do with dialects?", o: ["Ask people to repeat, politely", "Tell them to use Bokmål", "Avoid speaking"], a: 0, e: "Kan du si det en gang til?" },
    { q: "What does \"kjipt\" mean?", o: ["annoying, too bad", "cheap", "fun"], a: 0, e: "A common informal word." },
    { q: "Which is true?", o: ["Bokmål and Nynorsk are both official.", "Only Bokmål is official.", "Nynorsk is a dialect only."], a: 0, e: "Both are official written forms." }
  ],
  review: ["Bokmål and Nynorsk: jeg/eg, ikke/ikkje, hva/kva.", "Dialects are normal everywhere.", "Kan du si det en gang til?"]
},
{
  id: "ne-c1-7", title: "Workplace idioms", no: "Uttrykk i arbeidslivet", icon: "spark",
  intro: "Set phrases you'll hear in meetings and at the coffee machine. Use the pictures to remember them.",
  notes: [
    { h: "In meetings", p: "Komme til bords (come to the table), ta det på strak arm (do it off the cuff) and legge lista høyt (set the bar high) are all common." },
    { h: "Sometimes the same as English", p: "Legge kortene på bordet (put your cards on the table) and være i samme båt (be in the same boat) mean exactly the same." },
    { h: "Register", p: "These are fine in meetings and emails between colleagues, but use them with care in very formal documents." }
  ],
  tip: "Don't confuse \"ligge lavt\" and \"legge lista lavt\". And \"ta en for laget\" (take one for the team) is the same idea in both languages, but sound like a colleague, not a cliché: use it sparingly.",
  words: [
    I("legge kortene på bordet", "put your cards on the table", "put the cards on the table", "🃏🪑", "La oss legge kortene på bordet.", "Let's put our cards on the table."),
    I("sitte i samme båt", "be in the same boat", "sit in the same boat", "🚣👥", "Vi sitter alle i samme båt.", "We're all in the same boat."),
    I("legge lista høyt", "set the bar high", "put the bar high", "📏⬆️", "Sjefen legger lista høyt.", "The boss sets the bar high."),
    I("ta det på strak arm", "do it off the cuff", "take it on a straight arm", "💪✨", "Hun tok foredraget på strak arm.", "She gave the talk off the cuff."),
    I("skyte seg selv i foten", "shoot yourself in the foot", "shoot yourself in the foot", "🔫🦶", "Med det skjøt vi oss selv i foten.", "With that, we shot ourselves in the foot."),
    I("kaste kortene", "give up", "throw in the cards", "🃏🗑️", "Vi må ikke kaste kortene ennå.", "We mustn't give up yet."),
    I("ha mange baller i lufta", "juggle many tasks", "have many balls in the air", "🤹⚽", "Hun har mange baller i lufta.", "She's juggling a lot of things."),
    I("trå varsomt", "tread carefully", "step carefully", "🦶🤫", "Her må vi trå varsomt.", "We have to tread carefully here."),
    I("få noe i fanget", "have something land on you", "get something in your lap", "🎁🧍", "Jeg fikk prosjektet i fanget.", "The project landed in my lap."),
    I("gå i baklås", "grind to a halt", "go into back lock", "🔒⚙️", "Forhandlingene gikk i baklås.", "The negotiations ground to a halt."),
    I("ta en for laget", "take one for the team", "take one for the team", "🛡️👥", "Jeg kan ta en for laget.", "I can take one for the team."),
    I("gå på veggen", "be overwhelmed", "walk on the wall", "🧱🚶", "Jeg går snart på veggen.", "I'm about to hit a wall.")
  ],
  dialogue: [["A", "Hvordan går prosjektet?", "How's the project going?"], ["B", "Forhandlingene gikk i baklås, og jeg har mange baller i lufta.", "The negotiations ground to a halt, and I've got a lot of balls in the air."], ["A", "La oss legge kortene på bordet. Vi sitter i samme båt.", "Let's put our cards on the table. We're in the same boat."], ["B", "Takk. Vi må ikke kaste kortene ennå.", "Thanks. We mustn't give up yet."]],
  quiz: [
    { q: "\"We're in the same boat.\"", o: ["Vi sitter i samme båt.", "Vi er i samme bil.", "Vi har samme båt."], a: 0, e: "sitte i samme båt." },
    { q: "What does \"gå i baklås\" mean?", o: ["grind to a halt", "walk backwards", "lock a door"], a: 0, e: "Literally, go into back lock." },
    { q: "\"ha mange baller i lufta\" means ...", o: ["juggling many tasks", "playing sport", "being very happy"], a: 0, e: "Many balls in the air." },
    { q: "What does \"kaste kortene\" mean?", o: ["give up", "shuffle", "win"], a: 0, e: "Throw in your cards." }
  ],
  review: ["Same as English: legge kortene på bordet, sitte i samme båt.", "Different: gå i baklås, ta det på strak arm.", "Use them with colleagues, less in formal texts."]
},
{
  id: "ne-c1-8", title: "Proverbs and sayings", no: "Ordtak og hverdagsuttrykk", icon: "spark",
  intro: "Norwegian proverbs you'll hear from colleagues and grandparents. Many show what Norwegians value: modesty, nature and being prepared.",
  notes: [
    { h: "Janteloven", p: "Janteloven, the \"law of Jante\", is the unwritten rule that you shouldn't think you're better than others. It explains a lot about Norwegian modesty." },
    { h: "Out in nature", p: "Ut på tur, aldri sur (out on a trip, never grumpy) and Det finnes ikke dårlig vær, bare dårlige klær (no bad weather, only bad clothes) sum up the Norwegian love of the outdoors." },
    { h: "Friluftsliv", p: "Friluftsliv means open-air living, a core part of Norwegian life, which English has borrowed. Others include koselig (cosy, nice), which is one of the most used Norwegian words." }
  ],
  tip: "Koselig has no exact English word: it can describe a home, a person, an evening or even a chat. And Norwegians mean \"Takk for sist\" and \"Takk for maten\" seriously; skipping them can sound impolite.",
  words: [
    I("Ut på tur, aldri sur", "Out on a trip, never grumpy", "out on a trip, never sour", "🥾😊", "Kom igjen! Ut på tur, aldri sur!", "Come on! Out on a trip, never grumpy!"),
    I("Borte bra, men hjemme best", "East or west, home is best", "away good, but home best", "🏠❤️", "Borte bra, men hjemme best.", "East or west, home is best."),
    I("Den som venter på noe godt, venter ikke forgjeves", "Good things come to those who wait", "who waits for something good waits not in vain", "⏳🍰", "Bare vent, den som venter på noe godt, venter ikke forgjeves.", "Just wait, good things come to those who wait."),
    I("Alle gode ting er tre", "All good things come in threes", "all good things are three", "3️⃣✨", "Vi prøver en gang til. Alle gode ting er tre.", "Let's try once more. All good things come in threes."),
    I("Det er ikke gull alt som glimrer", "All that glitters is not gold", "it is not gold all that glitters", "🪙✨", "Husk at det ikke er gull alt som glimrer.", "Remember, all that glitters is not gold."),
    I("Liten tue kan velte stort lass", "Small things can have big effects", "a small tussock can tip a big load", "🌱🛒", "Husk at liten tue kan velte stort lass.", "Remember that small things can have big effects."),
    I("Når enden er god, er allting godt", "All's well that ends well", "when the end is good, everything is good", "🏁😊", "Vi rakk det! Når enden er god, er allting godt.", "We made it! All's well that ends well."),
    I("Morgenstund har gull i munn", "The early bird catches the worm", "morning hour has gold in its mouth", "🌅🪙", "Stå opp! Morgenstund har gull i munn.", "Get up! The early bird catches the worm."),
    I("Mange bekker små gjør en stor å", "Many small streams make a big river", "many small streams make a big river", "💧🏞️", "Spar litt: mange bekker små gjør en stor å.", "Save a little: small amounts add up."),
    W("koselig", "cosy, nice", "", "For en koselig kveld!", "What a lovely evening!"),
    W("friluftsliv", "outdoor life", "", "Friluftsliv er viktig for nordmenn.", "Outdoor life is important to Norwegians."),
    W("Janteloven", "the law of Jante", "", "Janteloven sier at du ikke er bedre enn andre.", "The law of Jante says you aren't better than others.")
  ],
  dialogue: [["A", "Skal vi gå på tur? Det regner litt.", "Shall we go for a walk? It's raining a bit."], ["B", "Det finnes ikke dårlig vær, bare dårlige klær!", "There's no bad weather, only bad clothes!"], ["A", "Ut på tur, aldri sur. Etterpå drikker vi kakao.", "Out on a trip, never grumpy. Afterwards we'll have hot chocolate."], ["B", "Så koselig!", "How lovely!"]],
  quiz: [
    { q: "\"The early bird catches the worm.\"", o: ["Morgenstund har gull i munn.", "Tidlig fugl får ormen.", "Ut på tur, aldri sur."], a: 0, e: "Literally, morning hour has gold in its mouth." },
    { q: "What does \"koselig\" describe?", o: ["something cosy and nice", "something cheap", "something cold"], a: 0, e: "A key Norwegian word." },
    { q: "\"All's well that ends well.\"", o: ["Når enden er god, er allting godt.", "Alle gode ting er tre.", "Borte bra, men hjemme best."], a: 0, e: "A very close match to English." },
    { q: "What is Janteloven about?", o: ["not thinking you're better than others", "a traffic rule", "working hours"], a: 0, e: "The unwritten rule of modesty." }
  ],
  review: ["Ut på tur, aldri sur; Borte bra, men hjemme best.", "Morgenstund har gull i munn.", "koselig, friluftsliv, Janteloven."]
}
];

export default atLevel("C1", C1);
