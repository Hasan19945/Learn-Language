import { Q } from "../helpers";
import type { CourseDef } from "../../types";

export const placement: CourseDef["placement"] = {
  A0: [
    Q("How do you say \"thank you\" in Norwegian?", ["takk", "hei", "unnskyld", "ja"], "takk = thank you."),
    Q("\"Jeg ___ student.\"", ["er", "har", "bor", "heter"], "er = am, is, are: Jeg er student."),
    Q("What does \"Hvor kommer du fra?\" mean?", ["Where are you from?", "Where do you live?", "How are you?", "What's your name?"], "hvor ... fra = where ... from."),
    Q("Which word means \"she\"?", ["hun", "han", "de", "du"], "hun = she, han = he."),
    Q("What is the definite form of \"et hus\"?", ["huset", "husen", "hus", "husa"], "et-words take -et in the definite form."),
    Q("\"I don't understand.\"", ["Jeg forstår ikke.", "Jeg ikke forstår.", "Jeg gjør ikke forstå.", "Ikke jeg forstår."], "ikke comes after the verb, and there is no \"do\" helper."),
    Q("Which one is the number 8?", ["åtte", "atten", "otte", "seks"], "8 = åtte."),
    Q("\"Today I'm working.\" (start with i dag)", ["I dag jobber jeg.", "I dag jeg jobber.", "Jobber i dag jeg.", "I dag jobbe jeg."], "The verb comes second: I dag jobber jeg.")
  ],
  A1: [
    Q("What time is \"halv fire\"?", ["3:30", "4:30", "4:15", "3:45"], "halv fire = half way to four = 3:30."),
    Q("\"my father\"", ["faren min", "min far min", "faren mitt", "far min"], "The possessive usually follows a definite noun: faren min."),
    Q("\"et stort hus\" in the plural?", ["store hus", "stort hus", "stor hus", "storer hus"], "In the plural, the adjective takes -e: store hus."),
    Q("\"I have to take the bus.\"", ["Jeg må ta bussen.", "Jeg må tar bussen.", "Jeg må å ta bussen.", "Jeg tar må bussen."], "må + infinitive, without å."),
    Q("\"I like reading.\"", ["Jeg liker å lese.", "Jeg liker lese.", "Jeg liker leser.", "Jeg liker leseing."], "liker å + infinitive."),
    Q("The number 57?", ["femtisju", "syttifem", "femogsytti", "femtiseks"], "Tens first: femti + sju."),
    Q("What does \"Det regner\" mean?", ["It's raining.", "It's snowing.", "It's cold.", "It's sunny."], "regne = to rain."),
    Q("\"in the kitchen\"", ["på kjøkkenet", "i kjøkkenet", "til kjøkkenet", "ved kjøkken"], "Kitchen and bathroom take på: på kjøkkenet.")
  ],
  A2: [
    Q("\"Yesterday I went to the cinema.\"", ["I går gikk jeg på kino.", "I går jeg gikk på kino.", "I går går jeg på kino.", "I går har jeg gått på kino."], "A finished time: preteritum (gikk); the verb stays second."),
    Q("\"I have lived in Norway for three years.\"", ["Jeg har bodd i Norge i tre år.", "Jeg bor i Norge for tre år.", "Jeg bodde i Norge for tre år.", "Jeg har bo i Norge tre år."], "\"for\" with a time is i: i tre år."),
    Q("\"... because I don't have time\"", ["fordi jeg ikke har tid", "fordi jeg har ikke tid", "fordi har jeg ikke tid", "fordi ikke har jeg tid"], "In a subordinate clause, ikke comes before the verb."),
    Q("What does \"Jeg har vondt i hodet\" mean?", ["I have a headache.", "I hit my head.", "I am confused.", "I am ill."], "ha vondt i = have a pain in."),
    Q("A prediction: \"It's going to rain.\"", ["Det kommer til å regne.", "Det vil regne.", "Det skal regner.", "Det har regnet."], "Predictions use kommer til å."),
    Q("The perfect of \"se\"?", ["har sett", "har så", "har sedd", "har seet"], "se – så – har sett."),
    Q("\"I wonder if the flat is free.\"", ["Jeg lurer på om leiligheten er ledig.", "Jeg lurer på er leiligheten ledig.", "Jeg lurer om leiligheten ledig er.", "Jeg lurer på hvis leiligheten er ledig."], "\"whether\" is om, not hvis."),
    Q("What does \"bestille time hos legen\" mean?", ["book a doctor's appointment", "wait an hour at the doctor's", "ask the doctor the time", "call the doctor"], "time = appointment here.")
  ],
  B1: [
    Q("\"The form must be sent by Friday.\"", ["Skjemaet må sendes innen fredag.", "Skjemaet må sender innen fredag.", "Skjemaet må sendt innen fredag.", "Skjemaet sendes må innen fredag."], "Modal + s-passive: må sendes."),
    Q("You've seen the film and liked it:", ["Jeg synes filmen var bra.", "Jeg tror filmen var bra.", "Jeg mener filmen bra.", "Jeg tenker filmen var bra."], "An opinion from experience: synes."),
    Q("\"When I came to Norway, I didn't know Norwegian.\"", ["Da jeg kom til Norge, kunne jeg ikke norsk.", "Når jeg kom til Norge, kunne jeg ikke norsk.", "Da jeg kom til Norge, jeg kunne ikke norsk.", "Da kom jeg til Norge, kunne jeg ikke norsk."], "One time in the past: da. The main clause starts with the verb."),
    Q("\"the job I applied for\"", ["jobben jeg søkte på", "jobben på jeg søkte", "jeg søkte jobben på", "på jobben jeg søkte"], "Like English, the preposition stays at the end."),
    Q("\"You need BankID to log in.\"", ["Du trenger BankID for å logge inn.", "Du trenger BankID for logge inn.", "Du trenger BankID å for logge inn.", "Du trenger BankID til logge inn."], "Purpose: for å + infinitive."),
    Q("\"When I arrived, the train had already left.\"", ["Da jeg kom, hadde toget allerede gått.", "Da jeg kom, har toget allerede gått.", "Da jeg kom, toget hadde allerede gått.", "Da jeg kom, gikk toget allerede hadde."], "hadde + participle; the verb comes first in the main clause."),
    Q("god → better?", ["bedre", "godere", "mer god", "best"], "god – bedre – best."),
    Q("What does \"vedtak\" mean?", ["official decision", "application", "deadline", "form"], "vedtak = official decision.")
  ],
  B2: [
    Q("\"That's why I'm taking the train.\"", ["Derfor tar jeg toget.", "Derfor jeg tar toget.", "Derfor toget tar jeg.", "Jeg derfor tar toget."], "An adverb first: the verb stays second."),
    Q("\"I like Norway even though it's cold.\"", ["Jeg liker Norge selv om det er kaldt.", "Jeg liker Norge likevel det er kaldt.", "Jeg liker Norge derimot det er kaldt.", "Jeg liker Norge selv om er det kaldt."], "selv om starts a clause: subject + verb."),
    Q("\"Jeg er syk.\" → Hun sa ...", ["at hun var syk", "at hun er syk var", "om hun var syk", "at var hun syk"], "Reported speech: sa → var."),
    Q("What does \"ha is i magen\" mean?", ["to keep calm", "to have a stomach ache", "to feel cold", "to be hungry"], "Literally \"ice in the stomach\": staying cool."),
    Q("\"I found it out.\" (det = it)", ["Jeg fant det ut.", "Jeg fant ut det.", "Jeg ut fant det.", "Jeg det fant ut."], "A pronoun object goes before the particle, as in English."),
    Q("What does \"Du kommer vel?\" express?", ["You are coming, aren't you?", "Come, definitely!", "You aren't coming.", "How are you coming?"], "vel asks for confirmation, like a question tag."),
    Q("In a formal email, \"Please find attached ...\":", ["Vedlagt følger ...", "Viser til ...", "Med vennlig hilsen ...", "Ta gjerne kontakt ..."], "Vedlagt følger = attached is."),
    Q("What is a \"sykemelding\"?", ["a doctor's sick note", "self-certified sick leave", "a dismissal letter", "a hospital appointment"], "sykemelding = from the doctor; egenmelding = self-certified.")
  ],
  C1: [
    Q("\"I don't know who is coming.\"", ["Jeg vet ikke hvem som kommer.", "Jeg vet ikke hvem kommer.", "Jeg vet ikke hvem kommer som.", "Jeg vet ikke som hvem kommer."], "When the question word is the subject of the clause, you need som."),
    Q("\"If I had known, I would have come.\"", ["Hadde jeg visst det, hadde jeg kommet.", "Hvis jeg vet det, kommer jeg.", "Hadde jeg visst det, jeg hadde kommet.", "Visste jeg det, kommer jeg."], "Unreal past: Hadde jeg visst, hadde jeg kommet."),
    Q("\"Jo mer jeg leser, desto mer ___.\"", ["forstår jeg", "jeg forstår", "forstå jeg", "jeg forstå"], "After desto, the verb comes first."),
    Q("What does \"Prosjektet ble rodd i land\" mean?", ["The project was brought to a successful end.", "The project fell through.", "The project moved ashore.", "The project was postponed."], "ro i land = row ashore: finish something successfully."),
    Q("\"Resultatene viser imidlertid ...\": what does imidlertid mean?", ["however", "therefore", "for example", "definitely"], "imidlertid = however; følgelig = therefore."),
    Q("Nynorsk \"Eg veit ikkje.\" In Bokmål?", ["Jeg vet ikke.", "Jeg vil ikke.", "Jeg var ikke.", "Jeg ser ikke."], "eg = jeg, veit = vet, ikkje = ikke."),
    Q("\"Det er ugler i mosen.\"", ["Something fishy is going on.", "There are birds in the forest.", "Everything is fine.", "The weather is changing."], "Literally \"owls in the moss\"."),
    Q("What does \"Du burde ha sagt det\" express?", ["You should have said it (criticism).", "You may say it.", "You will say it.", "You said it."], "burde ha + participle = should have.")
  ]
};
