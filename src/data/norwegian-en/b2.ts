import { I, N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const B2: LessonDef[] = [
{
  id: "ne-b2-1", title: "Formal email", no: "Formell e-post", icon: "mail",
  intro: "How to write to employers, schools and public offices: fixed openings, polite requests and closings.",
  notes: [
    { h: "Openings and closings", p: "Norwegian emails are shorter and less formal than English ones. Hei or God dag + name is standard; Dear Sir has no real equivalent. Close with Med vennlig hilsen (Yours sincerely), often shortened to MVH in everyday emails.",
      table: [["Part", "Norwegian", "English"], ["Opening", "Hei Kari, / God dag,", "Dear Kari,"], ["Reference", "Viser til samtalen vår.", "Further to our conversation."], ["Attachment", "Vedlagt følger ...", "Please find attached ..."], ["Close", "Med vennlig hilsen", "Yours sincerely"]] },
    { h: "Polite requests", p: "Use modal forms: Kan du sende ...? Jeg ville satt pris på om ... (I would appreciate it if ...) Ta gjerne kontakt (Please feel free to get in touch)." },
    { h: "Tone", p: "Long polite phrases can sound stiff in Norwegian. Be friendly and direct, and get to the point quickly." }
  ],
  tip: "Direct translations of \"I hope this email finds you well\" or \"Dear Sir or Madam\" sound strange in Norwegian. Start simply and say what you want. Also, in Norwegian the first line after the greeting usually starts with a capital letter.",
  words: [
    W("Viser til", "Further to, With reference to", "", "Viser til samtalen vår i går.", "Further to our conversation yesterday."),
    W("Vedlagt følger", "Please find attached", "", "Vedlagt følger CV-en min.", "Please find my CV attached."),
    W("Med vennlig hilsen", "Yours sincerely", "", "Med vennlig hilsen Kari Nordmann", "Yours sincerely, Kari Nordmann"),
    W("Ta gjerne kontakt", "Feel free to get in touch", "", "Ta gjerne kontakt hvis du har spørsmål.", "Feel free to get in touch if you have questions."),
    W("angående", "regarding", "", "Jeg skriver angående fakturaen.", "I'm writing regarding the invoice."),
    N("en", "henvendelse", "henvendelsen", "henvendelser", "enquiry", "", "Takk for henvendelsen.", "Thank you for your enquiry."),
    W("Jeg ville satt pris på", "I would appreciate", "", "Jeg ville satt pris på svar innen fredag.", "I would appreciate a reply by Friday."),
    N("et", "vedlegg", "vedlegget", "vedlegg", "attachment", "", "Se vedlegget.", "See the attachment."),
    W("beklager", "apologise, am sorry", "", "Vi beklager ulempen.", "We apologise for the inconvenience."),
    N("en", "ulempe", "ulempen", "ulemper", "inconvenience", "", "Beklager ulempen.", "Sorry for the inconvenience."),
    N("en", "påminnelse", "påminnelsen", "påminnelser", "reminder", "", "Dette er en påminnelse om møtet.", "This is a reminder about the meeting."),
    W("på forhånd takk", "thanks in advance", "", "På forhånd takk for hjelpen.", "Thanks in advance for your help.")
  ],
  dialogue: [["A", "Hei Lars,", "Hi Lars,"], ["A", "Viser til samtalen vår i går.", "Further to our conversation yesterday."], ["A", "Vedlagt følger kontrakten.", "Please find the contract attached."], ["A", "Jeg ville satt pris på svar innen fredag.", "I would appreciate a reply by Friday."], ["A", "Med vennlig hilsen Emma", "Yours sincerely, Emma"]],
  quiz: [
    { q: "\"Please find attached ...\"", o: ["Vedlagt følger ...", "Se her vedlegget ...", "Finn vedlagt vær så snill ..."], a: 0, e: "A fixed phrase: Vedlagt følger." },
    { q: "How do you normally close a formal email?", o: ["Med vennlig hilsen", "Kjære deg", "Ha det!", "Hilsen fra meg"], a: 0, e: "Med vennlig hilsen = Yours sincerely." },
    { q: "\"Thank you for your enquiry.\"", o: ["Takk for henvendelsen.", "Takk for spørringen din.", "Takk for at du spør."], a: 0, e: "henvendelse = enquiry." },
    { q: "What does \"Viser til\" do?", o: ["Refers to an earlier contact", "Says goodbye", "Asks a question"], a: 0, e: "Viser til ... = Further to ..." },
    { q: "Which fits Norwegian email style best?", o: ["Short, friendly and direct", "Long and ceremonial", "Very casual, with slang"], a: 0, e: "Norwegian emails get to the point." }
  ],
  review: ["Hei / God dag ... Med vennlig hilsen.", "Viser til ...; Vedlagt følger ...", "Jeg ville satt pris på ...; Ta gjerne kontakt."]
},
{
  id: "ne-b2-2", title: "Arguing and linking ideas", no: "Argumentasjon", icon: "scale",
  intro: "Linking words such as selv om, likevel and derfor, and the word order rules that come with them.",
  notes: [
    { h: "Adverbs move the verb", p: "derfor (therefore), likevel (still), dessuten (besides) and imidlertid (however) count as first element, so the verb follows: Derfor tar jeg toget. In English, \"Therefore I take\" keeps the order." },
    { h: "Conjunctions keep the order", p: "selv om (even though) and fordi start a clause with subject + verb: selv om det er kaldt. Men and og don't affect word order either." },
    { h: "Structuring an argument", p: "For det første ... (Firstly ...) For det andre ... (Secondly ...) På den ene siden ... På den andre siden ... (On the one hand ... on the other ...) Alt i alt ... (All in all ...)." }
  ],
  tip: "\"Derfor jeg tar toget\" is the classic error: English puts the subject first, Norwegian the verb. And likevel has nothing to do with \"like\": it means \"still, nevertheless\".",
  words: [
    W("selv om", "even though", "", "Selv om det er kaldt, bader vi.", "Even though it's cold, we're swimming."),
    W("likevel", "still, nevertheless", "", "Det var dyrt. Likevel kjøpte jeg det.", "It was expensive. I still bought it."),
    W("derfor", "therefore, that's why", "", "Broen er stengt. Derfor tar vi bussen.", "The bridge is closed. That's why we're taking the bus."),
    W("dessuten", "besides, moreover", "", "Dessuten er det billigere.", "Besides, it's cheaper."),
    W("imidlertid", "however", "", "Planen er imidlertid dyr.", "The plan, however, is expensive."),
    W("derimot", "on the other hand", "", "Oslo er travelt. Røros er derimot rolig.", "Oslo is busy. Røros, on the other hand, is quiet."),
    W("for det første", "firstly", "", "For det første trenger vi flere ansatte.", "Firstly, we need more staff."),
    W("alt i alt", "all in all", "", "Alt i alt støtter jeg forslaget.", "All in all, I support the proposal."),
    W("påstå", "claim", "", "Noen påstår at det er farlig.", "Some claim it's dangerous."),
    N("et", "forslag", "forslaget", "forslag", "proposal", "", "Forslaget er godt.", "The proposal is good."),
    N("en", "ulempe", "ulempen", "ulemper", "disadvantage", "", "Ulempen er prisen.", "The disadvantage is the price."),
    W("bevis", "evidence, proof", "", "Det finnes ingen bevis for det.", "There's no evidence for that.")
  ],
  dialogue: [["A", "Bør biler forbys i sentrum?", "Should cars be banned in the city centre?"], ["B", "For det første ville det redusere forurensningen. Dessuten blir gatene tryggere.", "Firstly, it would reduce pollution. Besides, the streets would be safer."], ["A", "Mange butikker trenger imidlertid kunder med bil.", "However, many shops need customers with cars."], ["B", "Det er sant. Likevel tror jeg fordelene er større.", "That's true. Still, I think the benefits are greater."], ["A", "Alt i alt er jeg enig, selv om det ikke blir lett.", "All in all, I agree, even though it won't be easy."]],
  quiz: [
    { q: "\"That's why I'm taking the train.\"", o: ["Derfor tar jeg toget.", "Derfor jeg tar toget.", "Derfor toget tar jeg."], a: 0, e: "derfor counts as first element, so the verb comes next." },
    { q: "\"Even though it's cold, we're swimming.\"", o: ["Selv om det er kaldt, bader vi.", "Selv om er det kaldt, bader vi.", "Selv om det er kaldt, vi bader."], a: 0, e: "selv om + subject + verb; the main clause starts with the verb." },
    { q: "What does \"likevel\" mean?", o: ["still, nevertheless", "similarly", "likely"], a: 0, e: "A false friend." },
    { q: "\"imidlertid\" means ...", o: ["however", "therefore", "for example"], a: 0, e: "imidlertid = however; følgelig = therefore." },
    { q: "What's a natural way to summarise?", o: ["Alt i alt ...", "For det første ...", "Dessuten ..."], a: 0, e: "Alt i alt = all in all." }
  ],
  review: ["derfor, likevel, dessuten + verb: Derfor tar jeg toget.", "selv om + subject + verb.", "For det første ... Alt i alt ..."]
},
{
  id: "ne-b2-3", title: "Idioms", no: "Faste uttrykk", icon: "spark",
  intro: "12 idioms you'll hear all the time. The picture shows the literal meaning; remember the picture and you'll remember the idiom.",
  notes: [
    { h: "Remember with pictures", p: "Translated word for word, idioms sound strange, and that's exactly what makes them memorable. Look at the picture, imagine the scene, then say the real meaning." },
    { h: "Close to English", p: "Some are nearly the same as in English: ta tyren ved hornene (take the bull by the horns). Most are different: det er helt texas means \"it's completely crazy\"." },
    { h: "When to use them", p: "They're common in everyday speech and in newspapers. Use them less in formal writing." }
  ],
  tip: "Don't translate English idioms directly. \"It's raining cats and dogs\" is meaningless in Norwegian; say \"Det regner trollkjerringer\" (it's raining troll witches). And don't change the words in a set phrase.",
  words: [
    I("Det regner trollkjerringer", "It's raining cats and dogs", "it's raining troll witches", "🧙‍♀️🌧️", "Ta med paraply, det regner trollkjerringer.", "Bring an umbrella, it's raining cats and dogs."),
    I("ha is i magen", "stay calm under pressure", "have ice in the stomach", "🧊😌", "Du må ha is i magen før eksamen.", "You have to stay cool before the exam."),
    I("koste skjorta", "cost an arm and a leg", "cost the shirt", "👕💰", "Den nye bilen kostet skjorta.", "The new car cost an arm and a leg."),
    I("slå to fluer i en smekk", "kill two birds with one stone", "swat two flies in one slap", "🪰🪰👋", "Jeg slo to fluer i en smekk.", "I killed two birds with one stone."),
    I("være midt i smørøyet", "be in the best possible place", "be in the middle of the butter eye", "🧈🥣", "Vi bor midt i smørøyet.", "We live right in the best spot."),
    I("ta tyren ved hornene", "take the bull by the horns", "take the bull by the horns", "🐂🐃", "Du må ta tyren ved hornene.", "You must take the bull by the horns."),
    I("Det er helt texas", "It's completely crazy", "it's totally Texas", "🤠🌵", "Det var helt texas på festen!", "It was totally wild at the party!"),
    I("snakke rett fra levra", "speak bluntly", "talk straight from the liver", "🗣️🫀", "Hun snakker rett fra levra.", "She speaks her mind."),
    I("gå som katten rundt grøten", "beat around the bush", "walk like the cat around the porridge", "🐈🥣", "Ikke gå som katten rundt grøten, si det!", "Don't beat around the bush, say it!"),
    I("ha bein i nesa", "be assertive", "have a bone in the nose", "🦴👃", "Sjefen har bein i nesa.", "The boss knows her own mind."),
    I("være på bærtur", "be totally off track", "be out picking berries", "🫐🧺", "Du er helt på bærtur.", "You've got it completely wrong."),
    I("Det er ikke mitt bord", "It's not my responsibility", "it's not my table", "🚫🪑", "Regnskapet er ikke mitt bord.", "The accounts aren't my responsibility.")
  ],
  dialogue: [["A", "Du ser sliten ut. Går det bra?", "You look tired. Are you OK?"], ["B", "Jeg har tre jobber nå, og kurset kostet skjorta.", "I have three jobs now, and the course cost an arm and a leg."], ["A", "Ikke gå som katten rundt grøten. Må du slutte?", "Don't beat around the bush. Do you have to quit?"], ["B", "Kanskje. Jeg må ta tyren ved hornene.", "Maybe. I have to take the bull by the horns."], ["A", "Du klarer det. Du har jo bein i nesa.", "You can do it. You know your own mind, after all."]],
  quiz: [
    { q: "How do you say \"It's raining cats and dogs\"?", o: ["Det regner trollkjerringer.", "Det regner katter og hunder.", "Det regner troll."], a: 0, e: "Norwegian uses troll witches." },
    { q: "What does \"ha is i magen\" mean?", o: ["stay calm", "have a stomach ache", "feel cold"], a: 0, e: "Literally, ice in the stomach." },
    { q: "\"kill two birds with one stone\"", o: ["slå to fluer i en smekk", "drepe to fugler med en stein", "slå to fugler i en smekk"], a: 0, e: "Norwegian uses flies and a slap." },
    { q: "\"It cost an arm and a leg.\"", o: ["Det kostet skjorta.", "Det kostet en arm og et bein.", "Det kostet skjorta og beinet."], a: 0, e: "koste skjorta = cost the shirt." },
    { q: "\"Du er på bærtur\" means ...", o: ["You've got it wrong.", "You're on holiday.", "You're picking berries."], a: 0, e: "Literally \"you're out picking berries\"." }
  ],
  review: ["Remember the picture, then the meaning.", "Same as English: ta tyren ved hornene.", "Different: koste skjorta, slå to fluer i en smekk."]
},
{
  id: "ne-b2-4", title: "Particle verbs", no: "Partikkelverb", icon: "arrow",
  intro: "Like English phrasal verbs, Norwegian verbs combine with small words, and the meaning can't always be guessed. English speakers have a real advantage here.",
  notes: [
    { h: "Very like English", p: "gi opp = give up, finne ut = find out, slå opp = look up. Others are false friends: se ut = look (appear), not \"look out\"; legge på = hang up the phone." },
    { h: "Where the object goes", p: "A pronoun goes before the particle, as in English: Jeg fant det ut (I found it out). A noun usually goes after: Jeg fant ut sannheten. Compare English, where both orders are possible for nouns.",
      table: [["Noun", "Pronoun"], ["slå av lyset", "slå det av"], ["hente barna", "hente dem"], ["gi opp planen", "gi den opp"]] },
    { h: "Stress", p: "In Norwegian, the particle takes the stress: finne UT, gi OPP. That's also how you tell them apart from ordinary prepositions." }
  ],
  tip: "Don't assume the same particle as in English: \"look forward to\" is glede seg til, not \"se framover til\". And \"se ut\" means \"look (appear)\": Du ser trøtt ut = You look tired.",
  words: [
    W("gi opp", "give up", "", "Hun ga opp å røyke.", "She gave up smoking."),
    W("finne ut", "find out", "", "Jeg må finne ut prisen.", "I need to find out the price."),
    W("slå opp", "look up", "", "Slå opp ordet i ordboka.", "Look the word up in the dictionary."),
    W("se ut", "look, appear", "", "Du ser trøtt ut.", "You look tired."),
    W("slå av", "switch off", "", "Kan du slå av lyset?", "Can you switch off the light?"),
    W("slå på", "switch on", "", "Slå på ovnen.", "Switch on the heater."),
    W("utsette", "put off", "", "Vi må utsette møtet.", "We have to put off the meeting."),
    W("glede seg til", "look forward to", "", "Jeg gleder meg til ferien.", "I'm looking forward to the holiday."),
    W("hente", "pick up, fetch", "", "Jeg henter deg klokka seks.", "I'll pick you up at six."),
    W("legge på", "hang up (phone)", "", "Han la på uten å si ha det.", "He hung up without saying goodbye."),
    W("ta av", "take off", "", "Flyet tar av klokka ti.", "The plane takes off at ten."),
    W("komme overens", "get along", "", "Jeg kommer godt overens med kollegaene mine.", "I get along well with my colleagues.")
  ],
  dialogue: [["A", "Har du funnet ut når møtet er?", "Have you found out when the meeting is?"], ["B", "De har utsatt det til fredag.", "They've put it off until Friday."], ["A", "Bra. Kan du hente meg på stasjonen?", "Good. Can you pick me up at the station?"], ["B", "Ja. Forresten, du ser trøtt ut.", "Yes. By the way, you look tired."], ["A", "Jeg gleder meg til ferien!", "I'm looking forward to the holiday!"]],
  quiz: [
    { q: "\"I found it out.\" (det = it)", o: ["Jeg fant det ut.", "Jeg fant ut det.", "Jeg ut fant det.", "Jeg det fant ut."], a: 0, e: "A pronoun goes before the particle." },
    { q: "What does \"Du ser trøtt ut\" mean?", o: ["You look tired.", "Look out, you're tired.", "You see tired people."], a: 0, e: "se ut = appear." },
    { q: "\"I'm looking forward to the holiday.\"", o: ["Jeg gleder meg til ferien.", "Jeg ser framover til ferien.", "Jeg ser ut til ferien."], a: 0, e: "glede seg til = look forward to." },
    { q: "\"Switch off the light.\"", o: ["Slå av lyset.", "Slå ut lyset.", "Ta av lyset."], a: 0, e: "slå av = switch off." },
    { q: "Which part takes the stress in \"finne ut\"?", o: ["ut", "finne", "both equally"], a: 0, e: "The particle takes the stress." }
  ],
  review: ["Pronoun before the particle: fant det ut.", "se ut = appear; glede seg til = look forward to.", "The particle takes the stress."]
},
{
  id: "ne-b2-5", title: "Working life and rights", no: "Arbeidsliv og rettigheter", icon: "doc",
  intro: "Contracts, holidays, sick leave and resigning. Norway's working life has its own rules and terms.",
  notes: [
    { h: "Two kinds of sick note", p: "egenmelding: you notify your employer yourself for a short illness. sykemelding: from a doctor, for longer illness. English \"sick note\" covers only the second." },
    { h: "Leaving a job", p: "si opp (resign) is what you do; bli oppsagt is being dismissed; bli permittert is a temporary layoff. oppsigelsestid is the notice period." },
    { h: "The collective system", p: "fagforening (trade union) membership is common, and tariffavtale (collective agreement) sets pay in many sectors. Every employee must have a written arbeidskontrakt." }
  ],
  tip: "A false friend: permisjon means leave (foreldrepermisjon = parental leave), not permission (tillatelse). Also, ferie is holiday leave from work, and by law most employees get 25 working days including Saturdays.",
  words: [
    N("en", "arbeidskontrakt", "arbeidskontrakten", "arbeidskontrakter", "employment contract", "", "Les arbeidskontrakten nøye.", "Read your employment contract carefully."),
    N("en", "oppsigelsestid", "oppsigelsestiden", "oppsigelsestider", "notice period", "", "Jeg har tre måneders oppsigelsestid.", "I have three months' notice."),
    N("en", "prøvetid", "prøvetiden", "prøvetider", "probation period", "", "Prøvetiden er seks måneder.", "The probation period is six months."),
    W("si opp", "resign", "", "Hun sa opp for å starte sitt eget firma.", "She resigned to start her own company."),
    W("bli oppsagt", "be dismissed", "", "Han ble oppsagt i fjor.", "He was dismissed last year."),
    W("permittert", "laid off (temporarily)", "", "Mange ble permittert under krisen.", "Many were laid off during the crisis."),
    N("en", "permisjon", "permisjonen", "permisjoner", "leave", "", "Hun har foreldrepermisjon.", "She is on parental leave."),
    N("en", "egenmelding", "egenmeldingen", "egenmeldinger", "self-certified sick leave", "", "Jeg leverte egenmelding i dag.", "I submitted a self-certified sick leave form today."),
    N("en", "sykemelding", "sykemeldingen", "sykemeldinger", "doctor's sick note", "", "Legen ga meg sykemelding.", "The doctor gave me a sick note."),
    W("overtid", "overtime", "", "Vi får betalt for overtid.", "We get paid for overtime."),
    N("en", "fagforening", "fagforeningen", "fagforeninger", "trade union", "", "Er du medlem av en fagforening?", "Are you a member of a union?"),
    W("ha krav på", "be entitled to", "", "Du har krav på fire ukers ferie.", "You're entitled to four weeks' holiday.")
  ],
  dialogue: [["A", "Jeg har bestemt meg for å si opp.", "I've decided to resign."], ["B", "Virkelig? Hvor lang oppsigelsestid har du?", "Really? How long is your notice period?"], ["A", "Tre måneder. Og jeg har ti feriedager igjen.", "Three months. And I have ten days of holiday left."], ["B", "Har du krav på å ta dem før du slutter?", "Are you entitled to take them before you leave?"], ["A", "Ja, jeg har sjekket med fagforeningen.", "Yes, I've checked with the union."]],
  quiz: [
    { q: "\"She is on parental leave.\"", o: ["Hun har foreldrepermisjon.", "Hun har foreldretillatelse.", "Hun er foreldreferie."], a: 0, e: "permisjon = leave." },
    { q: "What is an \"egenmelding\"?", o: ["sick leave you certify yourself", "a doctor's note", "a resignation letter"], a: 0, e: "egen = own; melding = notice." },
    { q: "\"I resigned.\"", o: ["Jeg sa opp.", "Jeg ble oppsagt.", "Jeg resignerte."], a: 0, e: "si opp = resign yourself." },
    { q: "What does \"oppsigelsestid\" mean?", o: ["notice period", "probation", "holiday", "overtime"], a: 0, e: "Literally \"resignation time\"." },
    { q: "\"You're entitled to sick pay.\"", o: ["Du har krav på sykepenger.", "Du er krav på sykepenger.", "Du har rett sykepenger på."], a: 0, e: "ha krav på = be entitled to." }
  ],
  review: ["permisjon = leave; tillatelse = permission.", "si opp yourself; bli oppsagt by the employer.", "egenmelding vs sykemelding."]
},
{
  id: "ne-b2-6", title: "Small words in speech", no: "Småord: jo, vel, nok, da", icon: "chat",
  intro: "Small unstressed words that make Norwegian sound natural. They have no exact English equivalent, but they carry a lot of meaning.",
  notes: [
    { h: "The four big ones", p: "Each adds a shade of meaning to a sentence.",
      table: [["Word", "Effect", "Example"], ["jo", "\"as you know\"", "Du vet jo det."], ["vel", "seeks agreement", "Du kommer vel?"], ["nok", "\"probably\"", "Det går nok bra."], ["da", "softens, reassures", "Ikke vær redd, da."]] },
    { h: "Position", p: "They come after the verb, in the same place as ikke: Jeg kommer nok ikke i dag (I probably won't come today). In a clause they go before the verb: fordi det nok er for dyrt." },
    { h: "Answering yes", p: "jo answers a negative question with yes: Kommer du ikke? – Jo! English has no special word for this. Ja would sound wrong here." }
  ],
  tip: "After a negative question, use jo, not ja: \"Har du ikke sett filmen?\" – \"Jo, det har jeg.\" Also \"vel\" often does the job of an English question tag: Det er kaldt, er det ikke? and Det er vel kaldt? both work.",
  words: [
    W("jo", "as you know; yes (to a negative)", "", "Du vet jo at jeg ikke kan.", "You know I can't, after all."),
    W("vel", "I suppose, right?", "", "Du kommer vel i kveld?", "You're coming tonight, aren't you?"),
    W("nok", "probably", "", "Det går nok bra.", "It'll probably be fine."),
    W("da", "then, softening word", "", "Kom igjen, da!", "Come on, then!"),
    W("altså", "so, I mean", "", "Det er altså ikke så enkelt.", "So it's not that simple."),
    W("liksom", "like, sort of", "", "Det er liksom litt rart.", "It's sort of a bit strange."),
    W("ikke sant?", "right?", "", "Du bor i Oslo, ikke sant?", "You live in Oslo, right?"),
    W("forresten", "by the way", "", "Forresten, ringte du Anna?", "By the way, did you call Anna?"),
    W("i hvert fall", "at least, anyway", "", "Jeg kommer i hvert fall i morgen.", "I'm coming tomorrow at least."),
    W("egentlig", "actually, really", "", "Jeg liker egentlig ikke kaffe.", "I don't actually like coffee."),
    W("Ikke noe problem", "No problem", "", "Beklager! – Ikke noe problem.", "Sorry! – No problem."),
    W("Takk for sist", "Nice to see you again", "", "Hei, takk for sist!", "Hi, good to see you again!", { note: "literally: thanks for last time" })
  ],
  dialogue: [["A", "Det er kaldt i dag, ikke sant?", "It's cold today, isn't it?"], ["B", "Ja! Du er jo fra Tromsø, så du er nok vant til det.", "Yes! You're from Tromsø, after all, so you're probably used to it."], ["A", "Egentlig ikke. Du kommer vel på festen?", "Not really. You're coming to the party, aren't you?"], ["B", "Har du ikke fått meldingen min?", "Haven't you got my message?"], ["A", "Jo, men jeg forsto den liksom ikke.", "Yes, but I sort of didn't understand it."]],
  quiz: [
    { q: "\"Haven't you seen the film?\" – \"Yes, I have.\"", o: ["Jo, det har jeg.", "Ja, det har jeg.", "Nei, det har jeg."], a: 0, e: "Yes to a negative question is jo." },
    { q: "What does \"Du kommer vel?\" express?", o: ["You're coming, aren't you?", "Come, definitely!", "You aren't coming."], a: 0, e: "vel asks for agreement." },
    { q: "\"It'll probably be fine.\"", o: ["Det går nok bra.", "Det går jo bra nok.", "Det nok går bra."], a: 0, e: "nok = probably, placed after the verb." },
    { q: "\"I probably won't come.\"", o: ["Jeg kommer nok ikke.", "Jeg nok kommer ikke.", "Jeg kommer ikke nok."], a: 0, e: "nok comes before ikke." },
    { q: "What do you say to someone you've met recently?", o: ["Takk for sist!", "Takk for maten!", "God natt!"], a: 0, e: "A typical Norwegian politeness." }
  ],
  review: ["jo = as you know; yes to a negative question.", "vel = right?; nok = probably.", "Takk for sist when you meet again."]
},
{
  id: "ne-b2-7", title: "More idioms", no: "Flere faste uttrykk", icon: "spark",
  intro: "12 more idioms, many tied to nature and weather. Look at the picture, imagine the scene and link it to the meaning.",
  notes: [
    { h: "Nature everywhere", p: "Norwegian loves images from nature: bjørnetjeneste (a bear's service, a favour that does harm), ugler i mosen (owls in the moss, something suspicious), på tynn is (on thin ice, the same as in English)." },
    { h: "Food", p: "Food shows up a lot too: å gå som katten rundt den varme grøten (like a cat around hot porridge, to avoid the subject) and å være helt ute å kjøre (out driving, completely lost)." },
    { h: "Feelings", p: "Glad som en lerke (happy as a lark) works as in English. Å være i den sjuende himmel means to be in seventh heaven." }
  ],
  tip: "Beware of bjørnetjeneste: it sounds like a kind gesture, but it means a favour that causes more harm than good. And don't translate \"piece of cake\" literally; say \"Det er lett som en plett\".",
  words: [
    I("gjøre en bjørnetjeneste", "do someone a harmful favour", "do a bear's service", "🐻🙏", "Du gjorde ham en bjørnetjeneste.", "You did him more harm than good."),
    I("Det er ugler i mosen", "Something fishy is going on", "there are owls in the moss", "🦉🌿", "Jeg tror det er ugler i mosen her.", "I think something fishy is going on here."),
    I("lett som en plett", "a piece of cake", "easy as a spot", "✅🟡", "Eksamen var lett som en plett.", "The exam was a piece of cake."),
    I("være på tynn is", "be on thin ice", "be on thin ice", "🧊⛸️", "Nå er du på tynn is.", "Now you're on thin ice."),
    I("være helt ute å kjøre", "be completely lost", "be completely out driving", "🚗❓", "Han er helt ute å kjøre.", "He has no idea what he's doing."),
    I("i den sjuende himmel", "in seventh heaven", "in the seventh heaven", "☁️7️⃣", "Hun er i den sjuende himmel.", "She's in seventh heaven."),
    I("når det blir to torsdager i ei uke", "when pigs fly", "when there are two Thursdays in a week", "📅📅", "Han rydder når det blir to torsdager i ei uke.", "He'll tidy up when pigs fly."),
    I("dråpen som fikk begeret til å renne over", "the last straw", "the drop that made the cup overflow", "💧🥛", "Det var dråpen som fikk begeret til å renne over.", "That was the last straw."),
    I("få kalde føtter", "get cold feet", "get cold feet", "🦶🥶", "Han fikk kalde føtter før bryllupet.", "He got cold feet before the wedding."),
    I("storm i et vannglass", "a storm in a teacup", "a storm in a water glass", "🌪️🥛", "Det er bare storm i et vannglass.", "It's just a storm in a teacup."),
    I("ryke i fletta", "go at each other", "rip into the braid", "💇‍♀️😠", "De røk i fletta.", "They went at each other."),
    I("ro i land", "pull it off", "row to shore", "🚣🏝️", "Vi rodde prosjektet i land.", "We pulled off the project.")
  ],
  dialogue: [["A", "Hvorfor er Ola i den sjuende himmel i dag?", "Why is Ola in seventh heaven today?"], ["B", "Han skal gifte seg! Selv om han fikk kalde føtter forrige uke.", "He's getting married! Even though he got cold feet last week."], ["A", "Og familien?", "And the family?"], ["B", "De røk i fletta, men det var bare storm i et vannglass.", "They went at each other, but it was just a storm in a teacup."], ["A", "Da håper jeg de ror det i land.", "Then I hope they pull it off."]],
  quiz: [
    { q: "What is a \"bjørnetjeneste\"?", o: ["a favour that does harm", "a big favour", "a wild animal service"], a: 0, e: "A bear's clumsy help." },
    { q: "\"a piece of cake\"", o: ["lett som en plett", "et stykke kake", "et bakverk"], a: 0, e: "lett som en plett = very easy." },
    { q: "\"a storm in a teacup\"", o: ["storm i et vannglass", "storm i en tekopp", "storm i en kaffekopp"], a: 0, e: "Norwegian uses a water glass." },
    { q: "What does \"Det er ugler i mosen\" mean?", o: ["Something fishy is going on.", "It's going well.", "The forest is full of birds."], a: 0, e: "Literally, owls in the moss." },
    { q: "\"when pigs fly\"", o: ["når det blir to torsdager i ei uke", "når grisene flyr", "når det blir to mandager"], a: 0, e: "Two Thursdays in one week: never." }
  ],
  review: ["bjørnetjeneste = a favour that does harm.", "Nearly the same: tynn is, kalde føtter, sjuende himmel.", "Different: to torsdager i ei uke, storm i et vannglass."]
}
];

export default atLevel("B2", B2);
