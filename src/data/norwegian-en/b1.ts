import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const B1: LessonDef[] = [
{
  id: "ne-b1-1", title: "NAV and public services", no: "NAV og offentlige tjenester", icon: "doc",
  intro: "The language of NAV (the welfare agency), the tax office and official letters: applications, forms and decisions. These texts use the passive a lot.",
  notes: [
    { h: "The s-passive", p: "Infinitive + s: Skjemaet må sendes inn innen fredag (The form must be sent in by Friday). It's common after modal verbs and in rules and instructions." },
    { h: "The bli-passive", p: "bli + participle: Søknaden ble behandlet i går (The application was processed yesterday). It's used for single events, especially in the past." },
    { h: "Official words", p: "søknad (application), søke om (apply for), vedtak (decision), saksbehandler (case worker), frist (deadline), innen (by), dokumentasjon (documents)." }
  ],
  tip: "English has one passive with \"be\"; Norwegian has two forms. \"må sendes\" and \"ble sendt\" both appear in official letters. And innen fredag means \"by Friday\", not \"within Friday\".",
  words: [
    N("en", "søknad", "søknaden", "søknader", "application", "", "Søknaden din er mottatt.", "Your application has been received."),
    W("søke om", "apply for", "", "Jeg vil søke om dagpenger.", "I want to apply for unemployment benefit."),
    W("dagpenger", "unemployment benefit", "", "Du kan ha rett til dagpenger.", "You may be entitled to unemployment benefit."),
    N("et", "vedtak", "vedtaket", "vedtak", "official decision", "", "Du får vedtaket i posten.", "You'll get the decision by post."),
    N("en", "saksbehandler", "saksbehandleren", "saksbehandlere", "case worker", "", "Saksbehandleren ringer deg.", "The case worker will call you."),
    N("et", "skjema", "skjemaet", "skjemaer", "form", "", "Skjemaet må fylles ut.", "The form must be filled in."),
    N("en", "frist", "fristen", "frister", "deadline", "", "Fristen er 1. mars.", "The deadline is 1 March."),
    W("innen", "by (a time)", "", "Send dokumentasjonen innen fredag.", "Send the documents by Friday."),
    W("logge inn med BankID", "log in with BankID", "", "Du må logge inn med BankID.", "You must log in with BankID."),
    W("ha rett til", "be entitled to", "", "Har jeg rett til sykepenger?", "Am I entitled to sick pay?"),
    W("ble behandlet", "was processed", "", "Saken ble behandlet raskt.", "The case was processed quickly."),
    W("fylle ut", "fill in", "", "Kan du hjelpe meg å fylle ut skjemaet?", "Can you help me fill in the form?")
  ],
  dialogue: [["A", "NAV, du snakker med Kari.", "NAV, you're speaking to Kari."], ["B", "Hei, jeg har mistet jobben og lurer på om jeg har rett til dagpenger.", "Hi, I've lost my job and wonder if I'm entitled to unemployment benefit."], ["A", "Du må sende en søknad på nav.no. Du logger inn med BankID.", "You must send an application at nav.no. You log in with BankID."], ["B", "Hvor lang tid tar det?", "How long does it take?"], ["A", "Søknaden blir vanligvis behandlet innen fire uker.", "The application is usually processed within four weeks."]],
  quiz: [
    { q: "\"The form must be filled in.\"", o: ["Skjemaet må fylles ut.", "Skjemaet må fyller ut.", "Skjemaet må fylt ut.", "Skjemaet fylles må ut."], a: 0, e: "After a modal verb: s-passive, må fylles ut." },
    { q: "\"The application was processed yesterday.\"", o: ["Søknaden ble behandlet i går.", "Søknaden behandles i går.", "Søknaden ble behandle i går."], a: 0, e: "A single past event: bli-passive." },
    { q: "What does \"vedtak\" mean?", o: ["official decision", "application", "deadline", "form"], a: 0, e: "vedtak = decision; søknad = application; frist = deadline." },
    { q: "What does \"innen fredag\" mean?", o: ["by Friday", "during Friday", "after Friday"], a: 0, e: "innen = by a certain time." },
    { q: "\"Am I entitled to sick pay?\"", o: ["Har jeg rett til sykepenger?", "Er jeg rett til sykepenger?", "Har jeg riktig sykepenger?"], a: 0, e: "ha rett til = be entitled to." }
  ],
  review: ["s-passive: må sendes, kan fylles ut.", "bli-passive: ble behandlet, blir sendt.", "søknad, vedtak, frist, innen, saksbehandler."]
},
{
  id: "ne-b1-2", title: "The job interview", no: "Jobbintervju", icon: "briefcase",
  intro: "Talking about yourself, your experience and your education; relative clauses with som.",
  notes: [
    { h: "Relative clauses with som", p: "som = who, which, that: en jobb som passer meg (a job that suits me). If som isn't the subject, it can drop, as in English: jobben (som) jeg søkte på (the job (that) I applied for)." },
    { h: "Classic questions", p: "Fortell litt om deg selv. (Tell me a bit about yourself.) Hvorfor søker du denne stillingen? (Why are you applying for this position?) Hva er dine sterke sider? (What are your strengths?)" },
    { h: "Norwegian work culture", p: "In interviews, modesty and concrete examples matter. Hierarchies are flat; you say du to the manager. Being on time is very important." }
  ],
  tip: "Sentences that sound normal in English, like \"I'm the best candidate\", can seem boastful in Norway. Use examples instead. And \"erfaring\" (experience) is uncountable in this use: fem års erfaring.",
  words: [
    N("en", "stilling", "stillingen", "stillinger", "position", "", "Jeg søker på stillingen som kokk.", "I'm applying for the position of cook."),
    N("en", "erfaring", "erfaringen", "erfaringer", "experience", "", "Jeg har fem års erfaring fra butikk.", "I have five years of experience in retail."),
    N("en", "utdanning", "utdanningen", "utdanninger", "education", "", "Jeg har utdanning som ingeniør.", "I'm trained as an engineer."),
    W("sterke sider", "strengths", "", "Mine sterke sider er at jeg er nøyaktig.", "My strengths are that I'm precise."),
    N("en", "arbeidsgiver", "arbeidsgiveren", "arbeidsgivere", "employer", "", "Arbeidsgiveren ga meg en god attest.", "My employer gave me a good reference."),
    W("fast stilling", "permanent job", "", "Er dette en fast stilling?", "Is this a permanent job?"),
    W("heltid / deltid", "full-time / part-time", "", "Stillingen er 80 prosent deltid.", "The position is 80 percent part-time."),
    N("en", "lønn", "lønnen", "lønninger", "pay, salary", "", "Hva er lønnen?", "What is the pay?"),
    W("passer", "suit, suits", "", "Jeg tror jobben passer meg godt.", "I think the job suits me well.", { note: "infinitive: passe" }),
    W("samarbeide", "cooperate", "", "Jeg liker å samarbeide med andre.", "I like working with others."),
    W("ta ansvar", "take responsibility", "", "Jeg er vant til å ta ansvar.", "I'm used to taking responsibility."),
    N("en", "attest", "attesten", "attester", "reference letter", "", "Har du attest fra forrige jobb?", "Do you have a reference from your last job?")
  ],
  dialogue: [["A", "Velkommen! Fortell litt om deg selv.", "Welcome! Tell me a bit about yourself."], ["B", "Jeg heter Emma og har jobbet som regnskapsfører i seks år.", "My name is Emma, and I've worked as an accountant for six years."], ["A", "Hvorfor søker du denne stillingen?", "Why are you applying for this position?"], ["B", "Fordi det er en jobb som passer erfaringen min, og jeg vil utvikle meg.", "Because it's a job that suits my experience, and I want to develop."], ["A", "Hva er dine sterke sider?", "What are your strengths?"], ["B", "Jeg er nøyaktig og liker å samarbeide med andre.", "I'm precise and I like working with others."]],
  quiz: [
    { q: "\"a job that suits me\"", o: ["en jobb som passer meg", "en som passer meg jobb", "en jobb at passer meg", "en jobb passer som meg"], a: 0, e: "\"that\" as a relative word is som, not at." },
    { q: "\"the job I applied for\"", o: ["jobben jeg søkte på", "jobben på jeg søkte", "jeg søkte på jobben som", "på jobben jeg søkte"], a: 0, e: "Like English, the preposition stays at the end." },
    { q: "What does \"deltid\" mean?", o: ["part-time", "full-time", "temporary", "overtime"], a: 0, e: "deltid = part-time; heltid = full-time." },
    { q: "\"Fortell litt om deg selv.\"", o: ["Tell me a bit about yourself.", "Tell me about your work.", "Write about yourself."], a: 0, e: "The classic first question." },
    { q: "Which is true of Norwegian interviews?", o: ["Modest, concrete examples go down well.", "You should call the manager \"De\".", "Being a few minutes late is normal."], a: 0, e: "Hierarchies are flat, and punctuality matters." }
  ],
  review: ["Relative clause: en jobb som passer meg.", "som can drop; the preposition stays last: jobben jeg søkte på.", "stilling, erfaring, utdanning, heltid/deltid, lønn."]
},
{
  id: "ne-b1-3", title: "Giving opinions", no: "Meninger og sammenligning", icon: "scale",
  intro: "The difference between synes, tror and mener, which all translate as \"think\", plus comparison (bigger, the best).",
  notes: [
    { h: "synes / tror / mener", p: "synes = an opinion from experience: Jeg synes filmen var god. tror = believe, guess: Jeg tror bussen er forsinket. mener = hold a firm view: Jeg mener at skatten er for høy." },
    { h: "Comparison", p: "-ere / -est, like English -er / -est: billig – billigere – billigst. Long adjectives use mer and mest. Some are irregular.",
      table: [["Adjective", "more", "most"], ["god (good)", "bedre", "best"], ["stor", "større", "størst"], ["liten", "mindre", "minst"], ["gammel", "eldre", "eldst"], ["mange", "flere", "flest"], ["mye", "mer", "mest"]] },
    { h: "enn and som", p: "enn = than: Oslo er større enn Bergen. like ... som = as ... as: Bergen er like pen som Oslo." }
  ],
  tip: "English \"I think\" is three verbs in Norwegian, and the wrong one changes the meaning: \"Jeg tror maten er god\" (I haven't tried it, but I guess it's good) vs \"Jeg synes maten er god\" (I've tasted it and I like it).",
  words: [
    W("synes", "think (from experience)", "", "Jeg synes norsk er vanskelig.", "I find Norwegian difficult."),
    W("tror", "believe, guess", "", "Jeg tror det blir regn.", "I think it's going to rain."),
    W("mener", "hold the view", "", "Hun mener at alle bør lære norsk.", "She thinks everyone should learn Norwegian."),
    W("enig / uenig", "agree / disagree", "", "Jeg er enig med deg.", "I agree with you."),
    W("bedre", "better", "", "Det er bedre å ta toget.", "It's better to take the train."),
    W("større enn", "bigger than", "", "Oslo er større enn Bergen.", "Oslo is bigger than Bergen."),
    W("like ... som", "as ... as", "", "Toget er like raskt som bilen.", "The train is as fast as the car."),
    W("mer / mest", "more / most", "", "Denne boka er mer interessant.", "This book is more interesting."),
    W("fordel / ulempe", "advantage / disadvantage", "", "En fordel er at det er billig.", "One advantage is that it's cheap."),
    W("etter min mening", "in my opinion", "", "Etter min mening er det for dyrt.", "In my opinion, it's too expensive."),
    W("kommer an på", "depends on", "", "Det kommer an på været.", "It depends on the weather.")
  ],
  dialogue: [["A", "Hva synes du om Bergen?", "What do you think of Bergen?"], ["B", "Jeg synes byen er vakker, men det regner mer enn i Oslo.", "I find the city beautiful, but it rains more than in Oslo."], ["A", "Tror du at du vil flytte dit?", "Do you think you'll move there?"], ["B", "Det kommer an på jobben. Jeg mener at jobb er viktigere enn vær.", "It depends on the job. I think work is more important than weather."], ["A", "Der er jeg enig med deg.", "I agree with you there."]],
  quiz: [
    { q: "You've seen the film and liked it:", o: ["Jeg synes filmen var god.", "Jeg tror filmen var god.", "Jeg mener filmen god."], a: 0, e: "An opinion from experience: synes." },
    { q: "You aren't sure: \"I think the bus is late.\"", o: ["Jeg tror bussen er forsinket.", "Jeg synes bussen er forsinket.", "Jeg mener bussen er forsinket."], a: 0, e: "A guess: tror." },
    { q: "god → better?", o: ["bedre", "godere", "mer god", "best"], a: 0, e: "Irregular, as in English: god – bedre – best." },
    { q: "\"Oslo is bigger than Bergen.\"", o: ["Oslo er større enn Bergen.", "Oslo er større som Bergen.", "Oslo er mer stor enn Bergen."], a: 0, e: "stor – større; \"than\" = enn." },
    { q: "\"Det kommer an på.\"", o: ["It depends.", "It's coming.", "It doesn't matter."], a: 0, e: "komme an på = depend on." }
  ],
  review: ["synes = from experience, tror = guess, mener = firm view.", "god–bedre–best, stor–større–størst, liten–mindre–minst.", "enn = than; like ... som = as ... as."]
},
{
  id: "ne-b1-4", title: "Banking and money", no: "Bank og økonomi", icon: "bank",
  intro: "Bank accounts, bills and tax cards, as well as for å, used to say why you do something.",
  notes: [
    { h: "for å + infinitive", p: "Purpose: Jeg trenger BankID for å logge inn. In English \"to\" alone is enough, but Norwegian needs for å." },
    { h: "Money in Norway", p: "skattekort (tax card; goes to your employer automatically), lønnsslipp (payslip), regning / faktura (bill), forfallsdato (due date), eFaktura and AvtaleGiro (automatic payments). Cash is rarely used." },
    { h: "Loans and interest", p: "lån (loan), rente (interest), boliglån (mortgage), nedbetale (pay off)." }
  ],
  tip: "Don't drop the for: \"Jeg trenger BankID å logge inn\" is wrong. Say for å. And rente means interest, not rent; rent is husleie.",
  words: [
    N("en", "konto", "kontoen", "kontoer", "account", "", "Jeg vil åpne en konto.", "I'd like to open an account."),
    W("overføre penger", "transfer money", "", "Jeg overførte penger til kontoen din.", "I transferred money to your account."),
    N("en", "regning", "regningen", "regninger", "bill", "", "Regningen må betales innen den 15.", "The bill must be paid by the 15th."),
    N("en", "forfallsdato", "forfallsdatoen", "forfallsdatoer", "due date", "", "Hva er forfallsdatoen?", "What is the due date?"),
    N("et", "skattekort", "skattekortet", "skattekort", "tax card", "", "Du må bestille skattekort.", "You must order a tax card."),
    N("en", "lønnsslipp", "lønnsslippen", "lønnsslipper", "payslip", "", "Sjekk lønnsslippen din.", "Check your payslip."),
    N("et", "lån", "lånet", "lån", "loan", "", "Vi har tatt opp lån i banken.", "We've taken out a loan from the bank."),
    N("en", "rente", "renten", "renter", "interest", "", "Renten har gått opp.", "The interest rate has gone up."),
    W("for å", "in order to", "", "Jeg sparer for å kjøpe bolig.", "I'm saving to buy a home."),
    W("spare", "save", "", "Vi sparer penger hver måned.", "We save money every month."),
    W("nettbank", "online bank", "", "Jeg betaler regninger i nettbanken.", "I pay bills in the online bank.")
  ],
  dialogue: [["A", "Hei, jeg er ny i Norge og vil åpne en konto.", "Hi, I'm new in Norway and want to open an account."], ["B", "Velkommen! Har du norsk personnummer?", "Welcome! Do you have a Norwegian ID number?"], ["A", "Ja, og jeg har fått skattekort.", "Yes, and I've got a tax card."], ["B", "Fint. Du trenger BankID for å bruke nettbanken.", "Good. You need BankID to use the online bank."], ["A", "Kan jeg betale regninger automatisk?", "Can I pay bills automatically?"], ["B", "Ja, med AvtaleGiro.", "Yes, with AvtaleGiro."]],
  quiz: [
    { q: "\"I need BankID to log in.\"", o: ["Jeg trenger BankID for å logge inn.", "Jeg trenger BankID for logge inn.", "Jeg trenger BankID å for logge inn."], a: 0, e: "Purpose: for å + infinitive." },
    { q: "What does \"forfallsdato\" mean?", o: ["due date", "invoice date", "date of birth"], a: 0, e: "forfallsdato = the date a bill must be paid." },
    { q: "What does \"rente\" mean?", o: ["interest", "rent", "loan", "tax"], a: 0, e: "A false friend. Rent is husleie." },
    { q: "\"The bill must be paid.\"", o: ["Regningen må betales.", "Regningen må betaler.", "Regningen må betalt."], a: 0, e: "Modal + s-passive." },
    { q: "Which one is a payslip?", o: ["lønnsslipp", "skattekort", "regning"], a: 0, e: "lønnsslipp = payslip." }
  ],
  review: ["for å + infinitive = in order to.", "regning, forfallsdato, skattekort, lønnsslipp.", "lån, rente (interest!), spare, nettbank."]
},
{
  id: "ne-b1-5", title: "School and \"when\"", no: "Skole og utdanning", icon: "school",
  intro: "School, nursery and parents' evenings, plus a tricky point: English \"when\" and \"if\" are split differently in Norwegian.",
  notes: [
    { h: "når or da?", p: "English \"when\" has two forms. da = one single time in the past: Da jeg kom til Norge, kunne jeg ikke norsk. når = repeated, present or future: Når det regner, tar jeg bussen." },
    { h: "hvis = if", p: "Hvis du har spørsmål, kan du ringe meg. If something will certainly happen, use når: Når du kommer hjem, ringer du meg." },
    { h: "Clause first", p: "If the subordinate clause comes first, the main verb follows straight after the comma: Når jeg kommer hjem, lager jeg middag." }
  ],
  tip: "\"When I came to Norway\" must be da, because it happened once: \"Da jeg kom til Norge\". Saying \"Når jeg kom til Norge\" is one of the most common errors for English speakers.",
  words: [
    N("en", "barnehage", "barnehagen", "barnehager", "nursery, kindergarten", "", "Datteren min går i barnehage.", "My daughter goes to nursery."),
    N("et", "foreldremøte", "foreldremøtet", "foreldremøter", "parents' meeting", "", "Det er foreldremøte på torsdag.", "There's a parents' meeting on Thursday."),
    N("en", "karakter", "karakteren", "karakterer", "grade, mark", "", "Han fikk gode karakterer.", "He got good grades."),
    N("et", "vitnemål", "vitnemålet", "vitnemål", "diploma", "", "Du må legge ved vitnemålet.", "You must attach your diploma."),
    W("godkjenning", "approval, recognition", "", "Jeg har søkt om godkjenning av utdanningen min.", "I've applied for recognition of my education."),
    W("da", "when (once, in the past)", "", "Da jeg var 20, flyttet jeg.", "When I was 20, I moved."),
    W("når", "when (repeated or future)", "", "Når jeg er ferdig, ringer jeg deg.", "When I'm done, I'll call you."),
    W("hvis", "if", "", "Hvis barnet er sykt, må det være hjemme.", "If the child is ill, it must stay home."),
    W("lekser", "homework", "", "Har du gjort leksene?", "Have you done your homework?"),
    W("ungdomsskole / videregående", "lower / upper secondary school", "", "Sønnen min begynner på videregående.", "My son is starting upper secondary school."),
    W("melde seg på", "sign up", "", "Jeg har meldt meg på norskkurs.", "I've signed up for a Norwegian course.")
  ],
  dialogue: [["A", "Da jeg kom til Norge, gikk barna rett i barnehage.", "When I came to Norway, the children went straight to nursery."], ["B", "Hvordan var det for dem?", "How was it for them?"], ["A", "Vanskelig først, men når de leker med andre barn, lærer de norsk fort.", "Hard at first, but when they play with other children, they learn Norwegian fast."], ["B", "Skal du på foreldremøtet i morgen?", "Are you going to the parents' meeting tomorrow?"], ["A", "Ja, hvis jeg får fri fra jobben.", "Yes, if I can get time off work."]],
  quiz: [
    { q: "\"When I came to Norway, I didn't know Norwegian.\"", o: ["Da jeg kom til Norge, kunne jeg ikke norsk.", "Når jeg kom til Norge, kunne jeg ikke norsk.", "Da jeg kom til Norge, jeg kunne ikke norsk."], a: 0, e: "One time in the past: da. The main verb comes first." },
    { q: "\"When it rains, I take the bus.\" (always)", o: ["Når det regner, tar jeg bussen.", "Da det regner, tar jeg bussen.", "Hvis det regner, jeg tar bussen."], a: 0, e: "Repeated: når." },
    { q: "\"If you have questions, you can call me.\"", o: ["Hvis du har spørsmål, kan du ringe meg.", "Da du har spørsmål, kan du ringe meg.", "Hvis du har spørsmål, du kan ringe meg."], a: 0, e: "A condition: hvis. Then verb first: kan du." },
    { q: "What does \"barnehage\" mean?", o: ["nursery", "playground", "primary school"], a: 0, e: "Literally \"children's garden\"." },
    { q: "Which situation takes \"når\"?", o: ["A future event", "One event in the past", "Neither"], a: 0, e: "når: future, present and repeated past. da: once in the past." }
  ],
  review: ["da = once in the past; når = repeated, present or future.", "hvis = if (a condition).", "Clause first: Når jeg kommer hjem, lager jeg middag."]
},
{
  id: "ne-b1-6", title: "Telling a story", no: "Å fortelle", icon: "chat",
  intro: "Telling a story with the past, the perfect and the past perfect (hadde + participle), which works just like English \"had done\".",
  notes: [
    { h: "The past perfect", p: "hadde + participle, for something that happened before another past event: Da jeg kom til stasjonen, hadde toget allerede gått. (When I got to the station, the train had already left.)" },
    { h: "Linking words", p: "først (first), så / deretter (then), etterpå (afterwards), til slutt (finally), mens (while), før (before), etter at (after)." },
    { h: "etter at / før", p: "Etter at jeg hadde spist, gikk jeg en tur. Før jeg flyttet til Norge, jobbet jeg i London." }
  ],
  tip: "The word order trips people up: after \"Da jeg kom,\" the verb comes first: \"hadde toget gått\", not \"toget hadde gått\". And Norwegian mens means \"while\", not \"men's\"; men means \"but\".",
  words: [
    W("hadde gått", "had gone", "", "Toget hadde allerede gått.", "The train had already left."),
    W("hadde glemt", "had forgotten", "", "Jeg hadde glemt nøkkelen.", "I had forgotten the key."),
    W("først", "first", "", "Først studerte jeg, så begynte jeg å jobbe.", "First I studied, then I started working."),
    W("etterpå", "afterwards", "", "Etterpå drakk vi kaffe.", "Afterwards we had coffee."),
    W("til slutt", "finally", "", "Til slutt fant vi en leilighet.", "Finally we found a flat."),
    W("mens", "while", "", "Mens jeg ventet, leste jeg avisen.", "While I waited, I read the paper."),
    W("før", "before", "", "Før jeg flyttet, jobbet jeg i London.", "Before I moved, I worked in London."),
    W("etter at", "after", "", "Etter at kurset var ferdig, tok jeg prøven.", "After the course ended, I took the test."),
    W("plutselig", "suddenly", "", "Plutselig begynte det å snø.", "Suddenly it started to snow."),
    W("heldigvis / dessverre", "luckily / unfortunately", "", "Heldigvis hadde jeg paraply.", "Luckily I had an umbrella."),
    W("oppleve", "experience", "", "Jeg har opplevd mye i Norge.", "I've experienced a lot in Norway.")
  ],
  dialogue: [["A", "Hvordan var din første dag i Norge?", "How was your first day in Norway?"], ["B", "Kaotisk! Da jeg kom til Gardermoen, hadde jeg glemt adressen.", "Chaotic! When I got to Gardermoen, I had forgotten the address."], ["A", "Å nei! Hva gjorde du?", "Oh no! What did you do?"], ["B", "Først ringte jeg broren min. Mens jeg ventet, kjøpte jeg kaffe.", "First I called my brother. While I waited, I bought coffee."], ["A", "Og til slutt?", "And in the end?"], ["B", "Til slutt kom han og hentet meg. Heldigvis!", "Finally he came and picked me up. Luckily!"]],
  quiz: [
    { q: "\"When I arrived, the train had already left.\"", o: ["Da jeg kom, hadde toget allerede gått.", "Da jeg kom, har toget allerede gått.", "Da jeg kom, toget hadde allerede gått.", "Når jeg kom, gikk toget allerede."], a: 0, e: "hadde + participle; verb first in the main clause." },
    { q: "What does \"mens\" mean?", o: ["while", "after", "because"], a: 0, e: "mens = while." },
    { q: "\"Before I moved, I worked in London.\"", o: ["Før jeg flyttet, jobbet jeg i London.", "Før jeg flyttet, jeg jobbet i London.", "Etter jeg flyttet, jobbet jeg i London."], a: 0, e: "før = before; the verb comes first after the clause." },
    { q: "The past perfect of \"glemme\" (forget)?", o: ["hadde glemt", "hadde glemte", "har glemt", "hadde glemmet"], a: 0, e: "glemme – glemte – har glemt → hadde glemt." },
    { q: "Which word ends a story?", o: ["til slutt", "først", "mens"], a: 0, e: "til slutt = finally." }
  ],
  review: ["hadde + participle = had done: hadde gått, hadde glemt.", "først → så/etterpå → til slutt.", "Clauses with mens, før, etter at."]
}
];

export default atLevel("B1", B1);
