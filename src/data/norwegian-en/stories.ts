import type { Story, StoryMood, StoryPlace, TalkLine } from "../../types";

type Levels = Record<"b1" | "b2" | "c1", Story>;

const L = (who: 0 | 1, mood: StoryMood, text: string, tr: string, place?: StoryPlace): TalkLine => ({ who, mood, text, tr, place });

export const IT_STORIES: Levels = {
  b1: {
    hero: "mira",
    title: "Mira's first day at work",
    scenes: [
      { place: "desk", mood: "happy",
        text: "Det er Miras første dag i IT-support. Hun åpner maskinen og prøver å logge inn. Men hun har allerede glemt det nye passordet sitt!",
        tr: "It's Mira's first day in IT support. She opens the machine and tries to log in. But she has already forgotten her new password!" },
      { place: "desk", mood: "worried",
        text: "Så ringer en kunde. Skjermen hans er helt svart, og han får en feilmelding. Mira ber ham om å starte på nytt. Han er lei seg fordi han ikke rakk å lagre filen.",
        tr: "Then a customer calls. His screen is completely black, and he gets an error message. Mira asks him to restart. He is sad because he didn't manage to save the file." },
      { place: "servers", mood: "surprised",
        text: "Plutselig får ingen på kontoret åpnet appen. Mira løper til serverrommet. Serveren er nede, og en nettverkskabel ligger på gulvet!",
        tr: "Suddenly nobody in the office can open the app. Mira runs to the server room. The server is down, and a network cable is lying on the floor!" },
      { place: "servers", mood: "thinking",
        text: "Hun kobler til kabelen og sjekker databasen. Alle kundedataene er trygge. Nå må hun laste ned den siste oppdateringen og installere den.",
        tr: "She connects the cable and checks the database. All the customer data is safe. Now she has to download the latest update and install it." },
      { place: "desk", mood: "proud",
        text: "En time senere virker programvaren igjen. Alle smiler, og Mira får endelig et nytt passord. Hun har lært én ting i dag: Husk alltid å lagre arbeidet ditt!",
        tr: "An hour later, the software works again. Everyone smiles, and Mira finally gets a new password. She has learned one thing today: Always remember to save your work!" }
    ]
  },
  b2: {
    hero: "mira",
    title: "Mira's first big task",
    scenes: [
      { place: "desk", mood: "happy",
        text: "To år senere jobber Mira som utvikler. Kunden vil ha en ny versjon til lanseringen i mai. Kravet er enkelt: Brukergrensesnittet må bli lettere å bruke.",
        tr: "Two years later, Mira works as a developer. The customer wants a new version for the launch in May. The requirement is simple: The user interface must become easier to use." },
      { place: "desk", mood: "thinking",
        text: "Mira åpner kildekoden og tar den første oppgaven. Takket være versjonskontroll kan hun ikke ødelegge hovedkoden. Hun jobber hele dagen, men fristen er kort.",
        tr: "Mira opens the source code and takes the first task. Thanks to version control, she can't break the main code. She works all day, but the deadline is close." },
      { place: "meeting", mood: "worried",
        text: "På morgenmøtet høres hun nervøs ut. Hun sier at hun må holde på med testene, og at to av dem kan feile. Kollegaen Jonas tilbyr seg å rette en feil i innloggingskoden.",
        tr: "At the morning meeting, she sounds nervous. She says she has to work on the tests, and that two of them may fail. Her colleague Jonas offers to fix a bug in the login code." },
      { place: "meeting", mood: "happy",
        text: "Etter kodegjennomgangen smiler Jonas og sier at alt ser bra ut. Nå kan Mira slå sammen koden sin. Samme kveld skal de rulle ut endringen.",
        tr: "After the code review, Jonas smiles and says everything looks good. Now Mira can merge her code. The same evening, they will deploy the change." },
      { place: "servers", mood: "surprised",
        text: "Ti minutter senere blir nettstedet veldig tregt! De ruller raskt tilbake endringen. Så finner de problemet og prøver igjen.",
        tr: "Ten minutes later, the site becomes very slow! They quickly roll back the change. Then they find the problem and try again." },
      { place: "desk", mood: "proud",
        text: "Neste dag virker alt perfekt. Kunden er fornøyd med resultatet. Mira har lært at et godt team kan løse nesten alt.",
        tr: "The next day, everything works perfectly. The customer is happy with the result. Mira has learned that a good team can solve almost anything." }
    ]
  },
  c1: {
    hero: "mira",
    title: "The outage at three in the morning",
    scenes: [
      { place: "home", mood: "worried",
        text: "Klokka tre om natten vekker telefonen Mira. Hun er seniorutvikler nå, og firmaet har lang nedetid. Kundene kommer ikke inn på nettstedet, og responstiden har økt i flere timer.",
        tr: "At three in the morning, the phone wakes Mira. She is a senior developer now, and the company has a long outage. Customers can't get into the site, and the response time has been rising for hours." },
      { place: "servers", mood: "thinking",
        text: "Teamet finner rotårsaken i et gammelt system. Problemet skyldes mange års teknisk gjeld. Enda verre er at de finner en sårbarhet på innloggingssiden.",
        tr: "The team finds the root cause in an old system. The problem is due to many years of technical debt. Even worse, they find a vulnerability on the login page." },
      { place: "servers", mood: "surprised",
        text: "Er personvernet til kundene truet? Mira sjekker loggene med hjertet i halsen. Heldigvis holdt krypteringen, tilgangskontrollen stoppet angriperne, og den siste sikkerhetskopien er trygg.",
        tr: "Is the customers' privacy at risk? Mira checks the logs with her heart in her mouth. Luckily, the encryption held, access control stopped the attackers, and the latest backup is safe." },
      { place: "meeting", mood: "thinking",
        text: "De melder likevel avviket til Datatilsynet. Uken etter legger Mira fram en plan for lederne. Hun vil refaktorere de verste delene og endre arkitekturen.",
        tr: "They still report the incident to Datatilsynet. The week after, Mira presents a plan to the managers. She wants to refactor the worst parts and change the architecture." },
      { place: "meeting", mood: "proud",
        text: "Den nye løsningen blir skalerbar, men den koster tid og penger. Dette er en avveining, forklarer hun, men fordelene veier opp for kostnadene. Direktøren nikker og godkjenner planen. Den natten sover Mira godt for første gang på flere uker.",
        tr: "The new solution will be scalable, but it costs time and money. This is a trade-off, she explains, but the benefits outweigh the costs. The director nods and approves the plan. That night, Mira sleeps well for the first time in weeks." }
    ]
  }
};

export const HEALTH_STORIES: Levels = {
  b1: {
    hero: "emil",
    casual: true,
    title: "Emil's tough week",
    talk: {
      cast: ["emil", "sara"],
      place: "clinic",
      lines: [
        L(1, "happy", "God morgen, Emil. Jeg er vikar for fastlegen din i dag. Hva er problemet?", "Good morning, Emil. I'm standing in for your GP today. What's the problem?"),
        L(0, "worried", "Jeg begynte å ha vondt i halsen i går, og nå har jeg feber.", "My throat started hurting yesterday, and now I have a fever."),
        L(1, "thinking", "Har du andre smerter?", "Do you have any other pain?"),
        L(0, "worried", "Ja, i ryggen. Det er ikke lett å føle seg dårlig når man bor alene.", "Yes, in my back. It's not easy to feel unwell when you live alone."),
        L(1, "thinking", "Da gjør vi en undersøkelse. Åpne munnen, er du snill.", "Then let's do an examination. Open your mouth, please."),
        L(0, "worried", "Burde jeg dra til legevakten eller akuttmottaket?", "Should I go to the out-of-hours doctor or the emergency department?"),
        L(1, "happy", "Nei, det er ikke nødvendig. Du trenger ikke sykehus for dette.", "No, that's not necessary. You don't need a hospital for this."),
        L(0, "thinking", "Trenger jeg en henvisning til en spesialist?", "Do I need a referral to a specialist?"),
        L(1, "thinking", "Nei, ingen henvisning. Men vi tar en blodprøve.", "No, no referral. But we'll do a blood test."),
        L(0, "thinking", "Kan jeg få noe for halsen?", "Can I get something for my throat?"),
        L(1, "happy", "Du får en resept på antibiotika. Du henter medisinen på apoteket.", "You'll get a prescription for antibiotics. You collect the medicine at the pharmacy."),
        L(0, "worried", "Arbeidsgiveren min trenger også en sykmelding.", "My employer needs a sick note too."),
        L(1, "happy", "Her er sykmeldingen din for tre dager. Hvil deg og drikk mye vann.", "Here's your sick note for three days. Rest and drink plenty of water."),
        L(0, "thinking", "Hvordan kan jeg bestille time hvis det blir verre?", "How can I book an appointment if it gets worse?"),
        L(1, "proud", "Du kan bestille time på nettet eller ringe oss.", "You can book an appointment online or call us."),
        L(0, "proud", "Tusen takk. Jeg føler meg allerede litt bedre!", "Thank you very much. I already feel a bit better!")
      ]
    },
    scenes: [
      { place: "home", mood: "worried",
        text: "Emil er en ung medisinstudent, men denne uken er han selv pasient. Det er ikke morsomt å ha vondt i halsen. Han begynner å føle seg dårlig, og smertene blir verre.",
        tr: "Emil is a young medical student, but this week he is the patient himself. It's no fun having a sore throat. He starts to feel unwell, and the pain gets worse." },
      { place: "clinic", mood: "thinking",
        text: "Han ringer for å bestille time hos fastlegen. Legen gjør en grundig undersøkelse og tar en blodprøve. Etterpå får han en resept, og han henter medisinen på apoteket.",
        tr: "He calls to book an appointment with his GP. The doctor does a thorough examination and takes a blood test. Afterwards, he gets a prescription and collects the medicine at the pharmacy." },
      { place: "clinic", mood: "happy",
        text: "Legen skriver også en sykmelding, så han kan hvile hjemme. Tre dager senere føler han seg mye bedre.",
        tr: "The doctor also writes a sick note, so he can rest at home. Three days later, he feels much better." },
      { place: "emergency", mood: "surprised",
        text: "På vei hjem ser han en gammel mann falle på isen! Emil ringer 113 og blir hos ham. Ambulansen kjører mannen til akuttmottaket.",
        tr: "On his way home, he sees an old man fall on the ice! Emil calls 113 and stays with him. The ambulance takes the man to the emergency department." },
      { place: "ward", mood: "thinking",
        text: "Mannen må ligge på sykehuset i flere dager. Kona hans sier at hun først prøvde å ringe legevakten. Legen skriver en henvisning til en spesialist.",
        tr: "The man has to stay in hospital for several days. His wife says she first tried to call the out-of-hours doctor. The doctor writes a referral to a specialist." },
      { place: "ward", mood: "proud",
        text: "Den gamle mannen takker Emil med tårer i øynene. Emil smiler. Nå vet han nøyaktig hvorfor han vil bli lege.",
        tr: "The old man thanks Emil with tears in his eyes. Emil smiles. Now he knows exactly why he wants to become a doctor." }
    ]
  },
  b2: {
    hero: "emil",
    title: "Emil's first patient",
    talk: {
      cast: ["hansen", "emil"],
      place: "clinic",
      lines: [
        L(1, "happy", "God dag, Hansen. Prøvesvarene er kommet, og jeg har en diagnose.", "Good afternoon, Mr Hansen. The test results are back, and I have a diagnosis."),
        L(0, "worried", "Si at det ikke er kreft!", "Tell me it isn't cancer!"),
        L(1, "happy", "Nei, det er ikke kreft. Du har høyt blodtrykk og diabetes type 2.", "No, it isn't cancer. You have high blood pressure and type 2 diabetes."),
        L(0, "worried", "Er det en alvorlig sykdom?", "Is that a serious illness?"),
        L(1, "thinking", "Begge er kroniske, så de går ikke over. Men vi kan holde dem godt under kontroll.", "Both are chronic, so they won't go away. But we can keep them well under control."),
        L(0, "worried", "Faren min fikk hjerneslag, og broren min fikk hjerteinfarkt. Er det arvelig?", "My father had a stroke, and my brother had a heart attack. Is it hereditary?"),
        L(1, "thinking", "Delvis, ja. Derfor vil vi starte behandlingen nå.", "Partly, yes. That's why we want to start treatment now."),
        L(0, "thinking", "Har medisinen noen bivirkning?", "Does the medicine have a side effect?"),
        L(1, "happy", "Du kan bli trøtt i begynnelsen. Si fra hvis det skjer.", "You may feel tired at first. Tell me if that happens."),
        L(0, "worried", "Og dette såret på foten vil ikke gro. Se her.", "And this wound on my foot won't heal. Look here."),
        L(1, "surprised", "Det ser ut som en infeksjon. Med diabetes må vi handle raskt.", "That looks like an infection. With diabetes, we have to act fast."),
        L(0, "surprised", "Må jeg bli operert?", "Will I need an operation?"),
        L(1, "thinking", "Kanskje, men det blir i så fall en liten operasjon.", "Perhaps, but in that case it will be a small operation."),
        L(0, "happy", "Hvor lang tid tar det å bli frisk?", "How long does it take to recover?"),
        L(1, "proud", "Følger du planen, kan du bli frisk på noen uker.", "If you follow the plan, you can recover in a few weeks.")
      ]
    },
    scenes: [
      { place: "ward", mood: "happy",
        text: "To år senere er Emil en ung lege. Den første pasienten hans, Hansen, har høyt blodtrykk og diabetes. Han er bekymret for den kroniske sykdommen sin.",
        tr: "Two years later, Emil is a young doctor. His first patient, Mr Hansen, has high blood pressure and diabetes. He is worried about his chronic illness." },
      { place: "clinic", mood: "thinking",
        text: "Hansen spør om problemene er arvelige. Faren fikk hjerneslag, og broren fikk hjerteinfarkt. Emil forklarer at et sunt liv kan redusere risikoen.",
        tr: "Mr Hansen asks if the problems are hereditary. His father had a stroke, and his brother had a heart attack. Emil explains that a healthy life can reduce the risk." },
      { place: "emergency", mood: "surprised",
        text: "En natt blir Hansen plutselig veldig syk. Han har en alvorlig infeksjon i foten, og han må bli operert med en gang.",
        tr: "One night, Mr Hansen suddenly becomes very ill. He has a serious infection in his foot, and he has to have an operation at once." },
      { place: "ward", mood: "worried",
        text: "Operasjonen går bra, men legene tar flere prøver fordi de frykter kreft. Emil venter nervøst på diagnosen. Heldigvis viser svaret at det ikke er noe nytt.",
        tr: "The operation goes well, but the doctors do more tests because they fear cancer. Emil nervously waits for the diagnosis. Luckily, the answer shows there's nothing new." },
      { place: "clinic", mood: "thinking",
        text: "Den nye behandlingen virker, men den har én bivirkning: Han blir veldig trøtt. Emil endrer dosen og ser til ham hver dag.",
        tr: "The new treatment works, but it has one side effect: He gets very tired. Emil changes the dose and checks on him every day." },
      { place: "ward", mood: "proud",
        text: "Tre uker senere kan Hansen reise hjem for å bli frisk. Han takker Emil og lover å ta medisinene sine.",
        tr: "Three weeks later, Mr Hansen can go home to recover. He thanks Emil and promises to take his medicine." }
    ]
  },
  c1: {
    hero: "emil",
    title: "The consultant's long night",
    talk: {
      cast: ["berg", "emil"],
      place: "ward",
      lines: [
        L(1, "happy", "God kveld, Berg. Jeg er Emil, overlege på denne sengeposten.", "Good evening, Ms Berg. I'm Emil, the consultant on this ward."),
        L(0, "worried", "Hvorfor må jeg bli her? Jeg besvimte jo bare.", "Why do I have to stay here? I only fainted."),
        L(1, "thinking", "Plutselig besvimelse krever innleggelse for undersøkelser.", "Sudden fainting requires admission for tests."),
        L(1, "thinking", "Bildene viser en liten svulst. Vi kan ikke utelukke noe før biopsien.", "The images show a small tumour. We can't rule out anything before the biopsy."),
        L(0, "surprised", "En svulst! Er den ondartet?", "A tumour! Is it malignant?"),
        L(1, "happy", "Den kan godt være godartet. Biopsien vil vise det.", "It may well be benign. The biopsy will show."),
        L(0, "worried", "Sønnen min ringer hele tiden. Forteller du ham alt?", "My son keeps calling. Will you tell him everything?"),
        L(1, "thinking", "Jeg har taushetsplikt, med mindre du sier ja. Er han din nærmeste pårørende?", "I have a duty of confidentiality unless you say yes. Is he your next of kin?"),
        L(0, "thinking", "Ja, det er han. Du kan snakke med ham.", "Yes, he is. You may speak to him."),
        L(1, "thinking", "Takk. Før operasjonen trenger jeg ditt samtykke, så jeg forklarer risikoen.", "Thank you. Before the operation, I need your consent, so I'll explain the risks."),
        L(1, "proud", "Gode nyheter, Berg. Svulsten er godartet, og prognosen er svært god.", "Good news, Ms Berg. The tumour is benign, and the prognosis is very good.", "clinic"),
        L(0, "happy", "Gudskjelov! Jeg var redd for at jeg ville trenge lindrende behandling.", "Thank goodness! I was afraid I would need palliative care.", "clinic"),
        L(1, "happy", "Nei, ikke i det hele tatt. Du kan bli utskrevet neste uke.", "No, not at all. You can be discharged next week.", "clinic"),
        L(0, "thinking", "Og hva med fastlegen min?", "And what about my GP?", "clinic"),
        L(1, "proud", "Fastlegen får epikrisen og står for oppfølgingen.", "Your GP will get the discharge summary and handle the follow-up.", "clinic")
      ]
    },
    scenes: [
      { place: "emergency", mood: "worried",
        text: "Emil er nå overlege, og i natt er sykehuset fullt. En kvinne kommer inn fordi hun har besvimt. Hun trenger rask innleggelse.",
        tr: "Emil is now a consultant, and tonight the hospital is full. A woman comes in because she has fainted. She needs a quick admission." },
      { place: "ward", mood: "thinking",
        text: "På sengeposten finner teamet en svulst. Er den godartet eller ondartet? Emil kan ikke utelukke det verste før biopsien.",
        tr: "On the ward, the team finds a tumour. Is it benign or malignant? Emil can't rule out the worst before the biopsy." },
      { place: "clinic", mood: "thinking",
        text: "Han forklarer alle risikoene først, for operasjonen krever skriftlig samtykke. Sønnen hennes ringer og vil ha detaljer, men Emil har taushetsplikt. Først når hun gir tillatelse, kan han snakke med de pårørende.",
        tr: "He explains all the risks first, because the operation requires written consent. Her son calls and wants details, but Emil has a duty of confidentiality. Only when she gives permission can he speak to her next of kin." },
      { place: "clinic", mood: "happy",
        text: "Svaret kommer: Svulsten er godartet, og prognosen er svært god. Emil går selv for å fortelle henne det.",
        tr: "The answer comes: The tumour is benign, and the prognosis is very good. Emil goes himself to tell her." },
      { place: "ward", mood: "thinking",
        text: "I sengen ved siden av ligger en gammel mann som får lindrende behandling. Emil sitter hos ham en stund, for god medisin handler også om å lytte.",
        tr: "In the next bed lies an old man receiving palliative care. Emil sits with him for a while, because good medicine is also about listening." },
      { place: "ward", mood: "proud",
        text: "En uke senere kan kvinnen bli utskrevet. Fastlegen får epikrisen og står for oppfølgingen. I døra smiler hun og sier takk.",
        tr: "A week later, the woman can be discharged. Her GP gets the discharge summary and handles the follow-up. At the door, she smiles and says thank you." }
    ]
  }
};
