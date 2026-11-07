import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A2: LessonDef[] = [
{
  id: "ne-a2-1", title: "Talking about the past", no: "Preteritum", icon: "clock",
  intro: "We learn the simple past, used for finished events, as in English \"I went\". Many verbs follow a pattern, and the common ones are irregular.",
  notes: [
    { h: "Regular patterns", p: "Most verbs end in -et or -te in the past. The form never changes for the person.",
      table: [["Infinitive", "Past", "English"], ["jobbe", "jobbet", "worked"], ["snakke", "snakket", "spoke"], ["spise", "spiste", "ate"], ["lese", "leste", "read"], ["bo", "bodde", "lived"]] },
    { h: "Common irregular verbs", p: "These must be learned, as in English: være – var (was), ha – hadde (had), gå – gikk (went), komme – kom (came), se – så (saw), ta – tok (took), si – sa (said), gjøre – gjorde (did)." },
    { h: "Time words", p: "i går (yesterday), i forrige uke (last week), i fjor (last year) call for the simple past: I går gikk jeg på kino." }
  ],
  tip: "Word order still applies: \"I går jeg gikk\" is wrong. Keep the verb second: I går gikk jeg. And Norwegian så means both \"saw\" and \"so\", so read the context.",
  words: [
    W("var", "was, were", "var", "Jeg var hjemme i går.", "I was at home yesterday.", { note: "være – var" }),
    W("hadde", "had", "HAH-deh", "Vi hadde en fin dag.", "We had a nice day.", { note: "ha – hadde" }),
    W("gikk", "went, walked", "yik", "Hun gikk på kino.", "She went to the cinema.", { note: "gå – gikk" }),
    W("kom", "came", "kom", "Han kom klokka ni.", "He came at nine.", { note: "komme – kom" }),
    W("så", "saw", "saw", "Jeg så en film.", "I saw a film.", { note: "se – så" }),
    W("tok", "took", "took", "Vi tok toget.", "We took the train.", { note: "ta – tok" }),
    W("spiste", "ate", "SPIS-teh", "Vi spiste middag sammen.", "We had dinner together.", { note: "spise – spiste" }),
    W("jobbet", "worked", "YOB-bet", "Jeg jobbet i helgen.", "I worked at the weekend.", { note: "jobbe – jobbet" }),
    W("i går", "yesterday", "ee gawr", "I går var det kaldt.", "Yesterday it was cold."),
    W("i fjor", "last year", "ee fyoor", "I fjor bodde jeg i England.", "Last year I lived in England."),
    W("forrige uke", "last week", "FOR-ree-eh OO-keh", "Jeg var i Oslo forrige uke.", "I was in Oslo last week."),
    N("en", "helg", "helgen", "helger", "weekend", "helg", "Hva gjorde du i helgen?", "What did you do at the weekend?"),
    W("kino", "cinema", "SHEE-noo", "Vi gikk på kino.", "We went to the cinema.")
  ],
  dialogue: [["A", "Hva gjorde du i helgen?", "What did you do at the weekend?"], ["B", "På lørdag gikk jeg på kino.", "On Saturday I went to the cinema."], ["A", "Hva så du?", "What did you see?"], ["B", "Jeg så en norsk film. Den var bra.", "I saw a Norwegian film. It was good."], ["A", "Og i går?", "And yesterday?"], ["B", "I går var jeg hjemme og spiste middag med familien.", "Yesterday I was at home and had dinner with the family."]],
  quiz: [
    { q: "\"Yesterday I went to the cinema.\"", o: ["I går gikk jeg på kino.", "I går jeg gikk på kino.", "I går går jeg på kino."], a: 0, e: "Past tense, with the verb second." },
    { q: "The past of \"være\"?", o: ["var", "værte", "er"], a: 0, e: "være – var." },
    { q: "The past of \"spise\"?", o: ["spiste", "spiset", "spis"], a: 0, e: "spise – spiste." },
    { q: "What does \"i fjor\" mean?", o: ["last year", "last week", "yesterday"], a: 0, e: "i fjor = last year." },
    { q: "\"I saw a film.\"", o: ["Jeg så en film.", "Jeg sett en film.", "Jeg ser en film."], a: 0, e: "se – så – har sett." }
  ],
  review: ["Past: -et or -te (jobbet, spiste).", "Learn the irregulars: var, hadde, gikk, kom, så, tok.", "Keep the verb second: I går gikk jeg."]
},
{
  id: "ne-a2-2", title: "The perfect tense", no: "Perfektum", icon: "check",
  intro: "We learn the Norwegian present perfect (har + participle), which works a lot like English \"I have done\".",
  notes: [
    { h: "Formation", p: "har + participle, for every person: Jeg har spist. Han har lest boka.",
      table: [["Infinitive", "Past", "Perfect"], ["jobbe", "jobbet", "har jobbet"], ["spise", "spiste", "har spist"], ["bo", "bodde", "har bodd"], ["være", "var", "har vært"], ["gå", "gikk", "har gått"], ["se", "så", "har sett"]] },
    { h: "Same logic as English", p: "Use the perfect for experience and for things still true now: Jeg har vært i Norge (I have been to Norway). Use the simple past with a finished time: Jeg var i Norge i fjor." },
    { h: "for + time is i", p: "\"I have lived here for three years\" is Jeg har bodd her i tre år. Don't translate \"for\" here." }
  ],
  tip: "Don't translate \"for three years\" with for: it's i tre år. And \"since\" with a time is siden: Jeg har bodd her siden 2020. Norwegian never says \"I am living here for three years\".",
  words: [
    W("har vært", "have been", "har vairt", "Har du vært i Bergen?", "Have you been to Bergen?"),
    W("har bodd", "have lived", "har bood", "Jeg har bodd her i tre år.", "I have lived here for three years."),
    W("har spist", "have eaten", "har spist", "Har du spist?", "Have you eaten?"),
    W("har sett", "have seen", "har set", "Jeg har sett filmen.", "I have seen the film."),
    W("har gjort", "have done", "har yort", "Hva har du gjort i dag?", "What have you done today?"),
    W("har lært", "have learned", "har lairt", "Jeg har lært mye norsk.", "I have learned a lot of Norwegian."),
    W("allerede", "already", "AHL-leh-reh-deh", "Jeg har allerede spist.", "I have already eaten."),
    W("ennå", "yet, still", "EN-naw", "Jeg har ikke sett den ennå.", "I haven't seen it yet."),
    W("aldri", "never", "AHL-dree", "Jeg har aldri vært der.", "I have never been there."),
    W("noen gang", "ever", "NOO-en gahng", "Har du noen gang vært i Tromsø?", "Have you ever been to Tromsø?"),
    W("siden", "since", "SEE-den", "Jeg har bodd her siden 2020.", "I have lived here since 2020."),
    W("mye", "a lot, much", "MEW-eh", "Vi har jobbet mye.", "We have worked a lot.")
  ],
  dialogue: [["A", "Hvor lenge har du bodd i Norge?", "How long have you lived in Norway?"], ["B", "Jeg har bodd her i to år.", "I have lived here for two years."], ["A", "Har du noen gang vært i Tromsø?", "Have you ever been to Tromsø?"], ["B", "Nei, jeg har aldri vært der.", "No, I have never been there."], ["A", "Du må dra dit! Jeg var der i fjor.", "You must go there! I was there last year."], ["B", "Har du sett nordlyset?", "Have you seen the northern lights?"]],
  quiz: [
    { q: "\"I have lived in Norway for three years.\"", o: ["Jeg har bodd i Norge i tre år.", "Jeg har bodd i Norge for tre år.", "Jeg bor i Norge for tre år."], a: 0, e: "for + time is i." },
    { q: "\"I was in Oslo last year.\"", o: ["Jeg var i Oslo i fjor.", "Jeg har vært i Oslo i fjor.", "Jeg er i Oslo i fjor."], a: 0, e: "A finished time takes the simple past." },
    { q: "The perfect of \"se\"?", o: ["har sett", "har så", "har sedd", "har seet"], a: 0, e: "se – så – har sett." },
    { q: "\"I haven't seen it yet.\"", o: ["Jeg har ikke sett den ennå.", "Jeg har sett den ikke ennå.", "Jeg ikke har sett den ennå."], a: 0, e: "ikke comes after har." },
    { q: "What does \"aldri\" mean?", o: ["never", "already", "ever"], a: 0, e: "aldri = never." }
  ],
  review: ["har + participle: har spist, har vært, har sett.", "A finished time takes the past: i fjor var jeg ...", "for + time = i: i tre år."]
},
{
  id: "ne-a2-3", title: "At the doctor's", no: "Hos legen", icon: "heart",
  intro: "We learn the body, how to explain symptoms and how to book a doctor's appointment in Norway.",
  notes: [
    { h: "Saying it hurts", p: "The key phrase is ha vondt i: Jeg har vondt i hodet (I have a headache). It works for any body part, and you don't need a special word like \"headache\"." },
    { h: "Fastlege", p: "In Norway, everyone has a fastlege (regular GP). You book time with them: bestille time. Time here means appointment, not hour." },
    { h: "Reflexive verbs", p: "Some verbs need seg (myself, yourself): Jeg føler meg syk, Han føler seg bra. Jeg må legge meg (I must lie down)." }
  ],
  tip: "A false friend for English speakers: time means appointment here, so \"bestille time\" is to book an appointment, not to order time. And a \"lege\" is a doctor, nothing to do with \"legs\": a leg is et bein.",
  words: [
    N("en", "lege", "legen", "leger", "doctor", "LEH-geh", "Jeg må til legen.", "I have to go to the doctor."),
    W("bestille time", "book an appointment", "beh-STIL-leh TEE-meh", "Jeg vil bestille time.", "I would like to book an appointment."),
    W("ha vondt i", "have a pain in", "hah vont ee", "Jeg har vondt i ryggen.", "My back hurts."),
    N("et", "hode", "hodet", "hoder", "head", "HOO-deh", "Jeg har vondt i hodet.", "I have a headache."),
    N("en", "mage", "magen", "mager", "stomach", "MAH-geh", "Magen er ikke bra.", "My stomach isn't right."),
    N("en", "rygg", "ryggen", "rygger", "back", "rewg", "Ryggen min er vond.", "My back is sore."),
    N("en", "hals", "halsen", "halser", "throat, neck", "hahls", "Jeg har vondt i halsen.", "I have a sore throat."),
    N("et", "bein", "beinet", "bein", "leg", "bayn", "Jeg brakk beinet.", "I broke my leg."),
    W("feber", "fever", "FEH-ber", "Jeg har feber.", "I have a fever."),
    W("syk", "ill, sick", "sewk", "Barnet er sykt i dag.", "The child is ill today.", { note: "sykt, syke" }),
    W("medisin", "medicine", "meh-dee-SEEN", "Du må ta medisin.", "You must take medicine."),
    W("føler meg", "feel (I)", "FUR-ler may", "Jeg føler meg bedre.", "I feel better.", { note: "infinitive: føle seg" }),
    W("hoster", "cough, coughs", "HOOS-ter", "Han hoster mye.", "He is coughing a lot.", { note: "infinitive: hoste" })
  ],
  dialogue: [["A", "Legekontoret, hva kan jeg hjelpe deg med?", "Doctor's surgery, how can I help you?"], ["B", "Jeg vil bestille time. Jeg har vondt i halsen.", "I'd like to book an appointment. I have a sore throat."], ["A", "Har du feber?", "Do you have a fever?"], ["B", "Ja, og jeg hoster mye.", "Yes, and I'm coughing a lot."], ["A", "Kan du komme klokka to i dag?", "Can you come at two today?"], ["B", "Ja, tusen takk.", "Yes, thank you very much."]],
  quiz: [
    { q: "\"I have a headache.\"", o: ["Jeg har vondt i hodet.", "Jeg har hodepine i hodet har.", "Jeg er vondt hodet."], a: 0, e: "ha vondt i + body part." },
    { q: "What does \"bestille time\" mean?", o: ["book an appointment", "order an hour", "ask the time"], a: 0, e: "time = appointment here." },
    { q: "What is a \"lege\"?", o: ["a doctor", "a leg", "a medicine"], a: 0, e: "A false friend: lege = doctor. A leg is et bein." },
    { q: "\"I feel better.\"", o: ["Jeg føler meg bedre.", "Jeg føler bedre.", "Jeg føler seg bedre."], a: 0, e: "With jeg, the reflexive is meg." },
    { q: "\"The child is ill.\" (et barn)", o: ["Barnet er sykt.", "Barnet er syk.", "Barnet er syke."], a: 0, e: "et-word: sykt." }
  ],
  review: ["ha vondt i + body part.", "fastlege, bestille time (time = appointment).", "føle seg: jeg føler meg, han føler seg."]
},
{
  id: "ne-a2-4", title: "Work", no: "På jobben", icon: "briefcase",
  intro: "We talk about jobs and learn to give reasons with fordi, where the word order changes.",
  notes: [
    { h: "Subordinate clauses", p: "After fordi (because), at (that), hvis (if) and når (when), there's no second-place rule, and ikke comes BEFORE the verb.",
      table: [["Main clause", "Subordinate clause"], ["Jeg har ikke tid.", "... fordi jeg ikke har tid."], ["Han jobber ikke.", "... at han ikke jobber."]] },
    { h: "Working life", p: "Norwegian workplaces are flat and informal. People use first names, and coffee breaks and leaving by 4 pm are normal. Punctuality matters." },
    { h: "Saying your job", p: "Remember, no article: Jeg er sykepleier (I'm a nurse). As a job: Jeg jobber som sykepleier (I work as a nurse)." }
  ],
  tip: "Watch ikke in fordi clauses: \"fordi jeg har ikke tid\" is the classic error. The rule is: fordi jeg ikke har tid. Also don't confuse jobb (job) with arbeid (work in general).",
  words: [
    N("en", "sjef", "sjefen", "sjefer", "boss", "shayf", "Sjefen min er hyggelig.", "My boss is nice."),
    N("en", "kollega", "kollegaen", "kolleger", "colleague", "koo-LEH-gah", "Kollegaene mine er fine.", "My colleagues are nice."),
    N("et", "kontor", "kontoret", "kontorer", "office", "koon-TOOR", "Jeg jobber på kontoret.", "I work at the office."),
    N("et", "møte", "møtet", "møter", "meeting", "MUR-teh", "Vi har et møte klokka ni.", "We have a meeting at nine."),
    N("en", "sykepleier", "sykepleieren", "sykepleiere", "nurse", "SEW-keh-play-er", "Hun jobber som sykepleier.", "She works as a nurse."),
    N("en", "ingeniør", "ingeniøren", "ingeniører", "engineer", "in-shen-YUR", "Han er ingeniør.", "He is an engineer."),
    N("en", "pause", "pausen", "pauser", "break", "POW-seh", "Vi tar pause nå.", "We're taking a break now."),
    W("fordi", "because", "for-DEE", "Jeg er sliten fordi jeg jobber mye.", "I'm tired because I work a lot."),
    W("at", "that", "aht", "Jeg tror at det er bra.", "I think that it's good."),
    W("sliten", "tired", "SLEE-ten", "Jeg er sliten i dag.", "I'm tired today."),
    W("travel", "busy", "TRAH-vel", "Hun er veldig travel.", "She is very busy."),
    W("heltid", "full-time", "HEL-teed", "Jeg jobber heltid.", "I work full-time."),
    W("tjener", "earn, earns", "SHEH-ner", "Han tjener godt.", "He earns well.", { note: "infinitive: tjene" })
  ],
  dialogue: [["A", "Hva jobber du med?", "What do you do for a living?"], ["B", "Jeg jobber som sykepleier. Og du?", "I work as a nurse. And you?"], ["A", "Jeg er ingeniør. Liker du jobben din?", "I'm an engineer. Do you like your job?"], ["B", "Ja, men jeg er sliten fordi jeg ikke har mange pauser.", "Yes, but I'm tired because I don't have many breaks."], ["A", "Er sjefen hyggelig?", "Is your boss nice?"], ["B", "Ja, og kollegaene mine er fine.", "Yes, and my colleagues are nice."]],
  quiz: [
    { q: "\"... because I don't have time\"", o: ["fordi jeg ikke har tid", "fordi jeg har ikke tid", "fordi har jeg ikke tid"], a: 0, e: "In a subordinate clause, ikke goes before the verb." },
    { q: "\"I work as a nurse.\"", o: ["Jeg jobber som sykepleier.", "Jeg jobber som en sykepleier.", "Jeg jobber lik sykepleier."], a: 0, e: "No article with jobs." },
    { q: "What does \"sliten\" mean?", o: ["tired", "busy", "late"], a: 0, e: "sliten = tired." },
    { q: "\"I think that it's good.\"", o: ["Jeg tror at det er bra.", "Jeg tror det at er bra.", "Jeg tror at er det bra."], a: 0, e: "at + subject + verb." },
    { q: "What is \"sjefen\"?", o: ["the boss", "the chef", "the colleague"], a: 0, e: "sjef = boss; a cook is en kokk." }
  ],
  review: ["fordi jeg ikke har tid: ikke before the verb.", "Jeg jobber som ... (no article).", "sjef = boss; kokk = chef."]
},
{
  id: "ne-a2-5", title: "Finding a flat", no: "Å leie bolig", icon: "key",
  intro: "We read ads and talk to a landlord. We also learn to ask polite indirect questions with om.",
  notes: [
    { h: "Whether: om", p: "In indirect questions, \"whether/if\" is om, not hvis: Jeg lurer på om leiligheten er ledig. Hvis only means \"if\" as a condition." },
    { h: "Renting in Norway", p: "A rental ad usually mentions husleie (rent), depositum (deposit) and whether strøm (electricity) is included. A contract is en leiekontrakt." },
    { h: "Jeg lurer på", p: "Jeg lurer på (I wonder) is a polite way to start a question. Lure also means to trick, and the context shows which." }
  ],
  tip: "English \"if\" is two Norwegian words: hvis for conditions, om for \"whether\". \"Jeg lurer på hvis\" is wrong. And hybel is a Norwegian word worth knowing: a bedsit or small rented room.",
  words: [
    N("en", "leilighet", "leiligheten", "leiligheter", "flat, apartment", "LAY-li-het", "Leiligheten er ledig.", "The flat is available."),
    N("en", "hybel", "hybelen", "hybler", "bedsit", "HEW-bel", "Studenten bor på hybel.", "The student lives in a bedsit."),
    W("leier", "rent, rents", "LAY-er", "Vi leier et hus.", "We're renting a house.", { note: "infinitive: leie" }),
    W("husleie", "rent (payment)", "HEWS-lay-eh", "Husleia er 12 000 kroner.", "The rent is 12,000 kroner."),
    N("et", "depositum", "depositumet", "depositum", "deposit", "deh-POO-see-toom", "Depositumet er stort.", "The deposit is large."),
    W("strøm", "electricity", "strurm", "Er strøm inkludert?", "Is electricity included?"),
    W("inkludert", "included", "in-kloo-DAIRT", "Internett er inkludert.", "The internet is included."),
    W("ledig", "available, free", "LEH-dee", "Er leiligheten ledig?", "Is the flat available?"),
    W("Jeg lurer på om", "I wonder if", "yay LOO-rer paw om", "Jeg lurer på om den er ledig.", "I wonder if it's available."),
    W("om", "whether, if", "om", "Vet du om det er langt?", "Do you know if it's far?"),
    N("en", "kontrakt", "kontrakten", "kontrakter", "contract", "kon-TRAHKT", "Vi skriver under kontrakten.", "We're signing the contract."),
    W("møblert", "furnished", "mur-BLAIRT", "Hybelen er møblert.", "The bedsit is furnished."),
    W("nabo", "neighbour", "NAH-boo", "Naboen er hyggelig.", "The neighbour is nice.")
  ],
  dialogue: [["A", "Hei, jeg ringer om leiligheten. Er den ledig?", "Hi, I'm calling about the flat. Is it available?"], ["B", "Ja, den er ledig fra mars.", "Yes, it's available from March."], ["A", "Jeg lurer på om strøm er inkludert.", "I wonder if electricity is included."], ["B", "Nei, men internett er inkludert.", "No, but the internet is included."], ["A", "Hvor mye er husleia?", "How much is the rent?"], ["B", "Den er 12 000 kroner, pluss depositum.", "It's 12,000 kroner, plus a deposit."]],
  quiz: [
    { q: "\"I wonder if the flat is available.\"", o: ["Jeg lurer på om leiligheten er ledig.", "Jeg lurer på hvis leiligheten er ledig.", "Jeg lurer på er leiligheten ledig."], a: 0, e: "\"whether\" is om." },
    { q: "What is \"husleie\"?", o: ["rent", "a house", "a deposit"], a: 0, e: "husleie = rent payment." },
    { q: "What does \"ledig\" mean here?", o: ["available", "cheap", "new"], a: 0, e: "ledig = free, available." },
    { q: "What's included if \"strøm\" is included?", o: ["electricity", "water", "the internet"], a: 0, e: "strøm = electricity." },
    { q: "What is a \"hybel\"?", o: ["a small rented room", "a big house", "a hotel"], a: 0, e: "hybel = bedsit, typical for students." }
  ],
  review: ["\"whether\" = om: Jeg lurer på om ...", "husleie, depositum, strøm, kontrakt.", "hvis only for conditions."]
},
{
  id: "ne-a2-6", title: "Plans and the future", no: "Planer", icon: "arrow",
  intro: "Norwegian has three ways to talk about the future: skal for plans, kommer til å for predictions, and the present with a time word.",
  notes: [
    { h: "Three futures", p: "Each has its own use. Note that vil is NOT the normal future.",
      table: [["Use", "Norwegian", "English"], ["Plan", "Jeg skal reise i morgen.", "I'm going to travel tomorrow."], ["Prediction", "Det kommer til å regne.", "It's going to rain."], ["Time word", "Jeg kommer i morgen.", "I'm coming tomorrow."]] },
    { h: "Hvis: conditions", p: "Hvis det regner, tar jeg bussen (If it rains, I'll take the bus). If the if-clause comes first, the main clause starts with the verb." },
    { h: "Hope and want", p: "Håper means hope: Jeg håper at det blir fint. Vil means want: Jeg vil reise." }
  ],
  tip: "Don't translate \"will\" with vil: \"Det vil regne\" isn't normal speech. Say Det kommer til å regne. And after a hvis-clause, the verb comes next: Hvis det regner, tar jeg bussen.",
  words: [
    W("kommer til å", "going to (prediction)", "KOM-mer til aw", "Det kommer til å regne.", "It's going to rain."),
    W("reiser", "travel, travels", "RAY-ser", "Vi reiser til Bergen.", "We're travelling to Bergen.", { note: "infinitive: reise" }),
    W("hvis", "if", "vis", "Hvis det regner, tar jeg bussen.", "If it rains, I'll take the bus."),
    W("håper", "hope, hopes", "HAW-per", "Jeg håper du kommer.", "I hope you're coming.", { note: "infinitive: håpe" }),
    W("neste uke", "next week", "NES-teh OO-keh", "Vi reiser neste uke.", "We're travelling next week."),
    W("neste år", "next year", "NES-teh awr", "Neste år skal jeg lære mer.", "Next year I'm going to learn more."),
    W("sommer", "summer", "SOM-mer", "I sommer skal vi til Lofoten.", "This summer we're going to Lofoten."),
    W("vinter", "winter", "VIN-ter", "Det er kaldt om vinteren.", "It's cold in winter."),
    N("en", "ferie", "ferien", "ferier", "holiday", "FEH-ree-eh", "Jeg har ferie i juli.", "I'm on holiday in July."),
    N("en", "plan", "planen", "planer", "plan", "plahn", "Har du planer i kveld?", "Do you have plans this evening?"),
    W("kanskje", "maybe", "KAHN-sheh", "Kanskje vi kommer.", "Maybe we'll come."),
    W("sikkert", "probably, surely", "SIK-kert", "Det blir sikkert fint.", "It will surely be nice."),
    W("blir", "become, will be", "bleer", "Det blir kaldt i morgen.", "It will be cold tomorrow.", { note: "infinitive: bli" })
  ],
  dialogue: [["A", "Har du planer i sommer?", "Do you have plans this summer?"], ["B", "Ja, vi skal reise til Lofoten.", "Yes, we're going to travel to Lofoten."], ["A", "Så fint! Kommer det til å bli varmt?", "How nice! Is it going to be warm?"], ["B", "Kanskje ikke, men jeg håper det blir sol.", "Maybe not, but I hope it'll be sunny."], ["A", "Hva gjør dere hvis det regner?", "What will you do if it rains?"], ["B", "Hvis det regner, leser vi bøker.", "If it rains, we'll read books."]],
  quiz: [
    { q: "A prediction: \"It's going to rain.\"", o: ["Det kommer til å regne.", "Det vil regne.", "Det skal regner.", "Det regnet."], a: 0, e: "Predictions use kommer til å." },
    { q: "A plan: \"I'm going to travel tomorrow.\"", o: ["Jeg skal reise i morgen.", "Jeg vil å reise i morgen.", "Jeg kommer å reise i morgen."], a: 0, e: "Plans use skal." },
    { q: "\"If it rains, I'll take the bus.\"", o: ["Hvis det regner, tar jeg bussen.", "Hvis det regner, jeg tar bussen.", "Om regner det, jeg tar bussen."], a: 0, e: "After the if-clause, the verb comes first." },
    { q: "What does \"Jeg vil reise\" mean?", o: ["I want to travel.", "I will travel.", "I travelled."], a: 0, e: "vil = want to." },
    { q: "What does \"kanskje\" mean?", o: ["maybe", "surely", "never"], a: 0, e: "kanskje = maybe." }
  ],
  review: ["Plan: skal. Prediction: kommer til å.", "vil = want to, not \"will\".", "Hvis ..., + verb first: Hvis det regner, tar jeg bussen."]
}
];

export default atLevel("A2", A2);
