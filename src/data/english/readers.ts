import { Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { readingStories } from "./readingStories";

const A0: LessonDef[] = [
{
  id: "en-a0-story", title: "İlk hikâyeler", no: "My first stories", icon: "spark", stories: readingStories("a0", "tr"),
  intro: "A0'da öğrendiklerinle iki kısa hikâye izleyip okuyorsun: Mira Londra'da yaşıyor, Emil ailesiyle Bristol'da.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "to be: I am a student, he is a teacher. Geniş zaman: I live, I drink. he/she/it ile fiil -s alır: He lives, Emil works, Emil drinks. Olumsuzluk: I don't work." },
    { h: "Nasıl çalışmalı?", p: "Önce videoyu çeviriyle izle. Sonra çeviriyi gizleyip tekrar izle. En son hikâyeyi yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "\"Emil works\", \"He lives\" cümlelerine dikkat et: he, she ve it ile fiil -s alır. \"Emil work\" yanlıştır. Olumsuzda ise -s düşer ve don't/doesn't gelir: I don't work.",
  words: [
    W("live", "yaşamak, oturmak", "liv", "I live in London.", "Londra'da yaşıyorum."),
    W("student", "öğrenci", "styudınt", "I am a student.", "Öğrenciyim."),
    W("learn", "öğrenmek", "lörn", "I am learning English.", "İngilizce öğreniyorum."),
    W("understand", "anlamak", "andırstend", "I understand a little English now.", "Artık biraz İngilizce anlıyorum."),
    W("work", "çalışmak", "wörk", "He works in Bristol.", "Bristol'da çalışıyor."),
    W("drink", "içmek", "drink", "I drink coffee.", "Kahve içiyorum."),
    W("eat", "yemek", "iit", "I eat an apple.", "Bir elma yiyorum."),
    W("friend", "arkadaş", "frend", "A friend comes in.", "Bir arkadaş içeri giriyor."),
    W("teacher", "öğretmen", "tiiçır", "He is a teacher.", "O öğretmen."),
    W("children", "çocuklar", "çildrın", "Emil has two children.", "Emil'in iki çocuğu var.", { note: "tekili: child" }),
    W("boy", "oğlan", "boy", "The boy is seven.", "Oğlan yedi yaşında."),
    W("girl", "kız", "görl", "The girl is five.", "Kız beş yaşında."),
    W("together", "birlikte", "tıgedır", "We have dinner together.", "Birlikte akşam yemeği yiyoruz."),
    W("tonight", "bu akşam, bu gece", "tınayt", "Do you want to have dinner tonight?", "Bu akşam yemek yemek ister misin?")
  ],
  dialogue: [["A", "Hi! My name is Mira. What's your name?", "Merhaba! Benim adım Mira. Senin adın ne?"], ["B", "My name is Emil. I am a teacher.", "Benim adım Emil. Öğretmenim."], ["A", "Do you want to have dinner tonight?", "Bu akşam yemek yemek ister misin?"], ["B", "Yes, I'd love to!", "Evet, memnuniyetle!"]],
  quiz: [
    Q("Mira nereden geliyor?", ["Turkey", "England", "London"], "I come from Turkey."),
    Q("Emil'in kaç çocuğu var?", ["two", "three", "five"], "Emil has two children: a boy and a girl."),
    Q("\"Bugün çalışmıyorum.\"", ["Today I don't work.", "Today I not work.", "Today I no work."], "Olumsuz: don't + fiil."),
    Q("\"Emil works in Bristol\" cümlesinde works neden -s alıyor?", ["Özne he/she/it olduğu için", "Geçmiş zaman olduğu için", "Çoğul olduğu için"], "he, she, it ile geniş zamanda fiil -s alır."),
    Q("Oğlan kaç yaşında?", ["seven", "five", "two"], "The boy is seven.")
  ],
  review: ["to be: I am, he is.", "he/she/it + fiil-s: He lives, Emil works.", "Olumsuz: I don't work."]
}
];

const A1: LessonDef[] = [
{
  id: "en-a1-story", title: "Günlük hayattan hikâyeler", no: "Everyday stories", icon: "spark", stories: readingStories("a1", "tr"),
  intro: "A1'de öğrendiklerinle dört hikâye: Mira'nın ailesi Londra'ya geliyor, Emil markette, Mira Manchester'a gidiyor ve Emil yeni dairesinde.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "Sahiplik: her father, my family. Fiyat: The bread costs two pounds. Saat: at eight o'clock, half past eight, quarter past eight. has to + fiil: She has to take the bus. Hava: It is cold. It is snowing." },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. En son yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "he, she ve it ile \"have to\" değil \"has to\" denir: She has to take the bus. Fiyat sorarken de \"How much is it?\" ya da \"How much does it cost?\" de; \"How much it costs?\" yanlıştır.",
  words: [
    W("family", "aile", "femıli", "Mira has a big family.", "Mira'nın kalabalık bir ailesi var."),
    W("brother", "erkek kardeş", "bradır", "She has a brother.", "Bir erkek kardeşi var."),
    W("sister", "kız kardeş", "sistır", "Her sister is fifteen.", "Kız kardeşi on beş yaşında."),
    W("cost", "tutmak (fiyat)", "kost", "The bread costs two pounds.", "Ekmek iki sterlin."),
    W("cheap", "ucuz", "çiip", "The milk is cheap.", "Süt ucuz."),
    W("expensive", "pahalı", "ikspensiv", "The cheese is expensive.", "Peynir pahalı."),
    W("pay", "ödemek", "pey", "Can I pay by card?", "Kartla ödeyebilir miyim?"),
    W("o'clock", "saat (tam)", "ıklok", "The bus comes at eight o'clock.", "Otobüs saat sekizde geliyor."),
    W("half past", "buçuk", "haf past", "The train leaves at half past eight.", "Tren sekiz buçukta kalkıyor."),
    W("bus", "otobüs", "bas", "But the bus doesn't come!", "Ama otobüs gelmiyor!"),
    W("train", "tren", "treyn", "Mira catches the train.", "Mira trene yetişiyor."),
    W("small", "küçük", "smol", "The flat is small.", "Daire küçük."),
    W("cold", "soğuk", "kould", "Today it is cold.", "Bugün hava soğuk."),
    W("like", "sevmek", "layk", "Emil likes skiing.", "Emil kayak yapmayı seviyor.")
  ],
  dialogue: [["A", "How much is the bread?", "Ekmek ne kadar?"], ["B", "It costs two pounds.", "İki sterlin."], ["A", "Can I pay by card?", "Kartla ödeyebilir miyim?"], ["B", "Yes, of course!", "Evet, tabii ki!"]],
  quiz: [
    Q("Mira'nın treni saat kaçta kalkıyor?", ["half past eight", "half past nine", "eight o'clock"], "The train leaves at half past eight."),
    Q("Ekmek ne kadar?", ["two pounds", "four pounds", "twelve pounds"], "The bread costs two pounds."),
    Q("\"Önce otobüse binmesi gerekiyor.\"", ["First she has to take the bus.", "First she have to take the bus.", "First she has take the bus."], "she ile has to + fiil."),
    Q("Emil'in dairesi nasıl?", ["small, but the living room is big", "big and old", "expensive and new"], "It is small, but the living room is big and nice."),
    Q("Peynir nasıl?", ["expensive", "cheap", "small"], "The cheese is expensive.")
  ],
  review: ["Sahiplik: her father, my family.", "Saat: eight o'clock, half past eight, quarter past eight.", "she/he + has to: She has to take the bus."]
}
];

const A2: LessonDef[] = [
{
  id: "en-a2-story", title: "Altı kısa hikâye", no: "Six short stories", icon: "spark", stories: readingStories("a2", "tr"),
  intro: "A2'de öğrendiklerinle altı hikâye: Mira'nın hafta sonu, Emil'in İngiltere'deki iki yılı, doktor, yeni bir iş, daire aramak ve yaz planları.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "Geçmiş zaman: was, went, ate, called. Present perfect: has lived, has learned, has never been. because ile sebep: because he doesn't get many breaks. if (-ip -mediğini): asks if the flat is available. Gelecek: is going to travel, it is going to rain." },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. En son yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "\"İki yıldır burada yaşıyor\" İngilizcede şimdiki zamanla değil, present perfect ile söylenir: He has lived here for two years. \"He lives here since two years\" yanlıştır.",
  words: [
    W("was", "-di (olmak, geçmiş)", "woz", "Mira was in Brighton.", "Mira Brighton'daydı.", { note: "be – was – been" }),
    W("went", "gitti", "went", "She went to the cinema.", "Sinemaya gitti.", { note: "go – went – gone" }),
    W("yesterday", "dün", "yestırdey", "Yesterday she came home.", "Dün eve döndü."),
    W("weekend", "hafta sonu", "wiikend", "It was a great weekend.", "Harika bir hafta sonuydu."),
    W("has lived", "-dir yaşıyor", "hez livd", "Emil has lived in Bristol for two years.", "Emil iki yıldır Bristol'da yaşıyor."),
    W("never", "hiç, asla", "nevır", "He has never been to Scotland.", "İskoçya'ya hiç gitmedi."),
    W("doctor", "doktor", "doktır", "She called the doctor.", "Doktoru aradı."),
    W("fever", "ateş", "fiivır", "She also had a fever.", "Ateşi de vardı."),
    W("sore throat", "boğaz ağrısı", "sor trout", "She woke up with a sore throat.", "Boğaz ağrısıyla uyandı."),
    W("because", "çünkü", "bikoz", "He likes the job because he learns a lot.", "İşi seviyor, çünkü çok şey öğreniyor."),
    W("boss", "patron", "bos", "His boss is nice.", "Patronu nazik biri."),
    W("tired", "yorgun", "tayırd", "He is often tired.", "Sık sık yoruluyor."),
    W("available", "boş, müsait", "ıveylıbıl", "Is the flat available?", "Daire boş mu?"),
    W("rent", "kira", "rent", "She pays eight hundred pounds in rent.", "Kira olarak sekiz yüz sterlin ödüyor."),
    W("going to", "-ecek (plan, tahmin)", "goving tu", "It is going to rain a little.", "Biraz yağmur yağacak."),
    W("holiday", "tatil", "holıdey", "Emil is looking forward to the holiday.", "Emil tatili dört gözle bekliyor.")
  ],
  dialogue: [["A", "What did you do at the weekend?", "Hafta sonu ne yaptın?"], ["B", "I went to the cinema. And you?", "Sinemaya gittim. Ya sen?"], ["A", "I stayed at home, because I had a fever.", "Evde kaldım, çünkü ateşim vardı."], ["B", "Oh no! I hope you feel better now.", "Eyvah! Umarım şimdi daha iyisindir."]],
  quiz: [
    Q("Mira sinemaya ne zaman gitti?", ["on Saturday", "on Sunday", "yesterday"], "On Saturday she went to the cinema with a friend."),
    Q("\"Dün eve döndü.\"", ["Yesterday she came home.", "Yesterday she has come home.", "Yesterday she comes home."], "yesterday ile geçmiş zaman (came) kullanılır."),
    Q("Emil kaç yıldır Bristol'da yaşıyor?", ["two years", "three years", "one year"], "Emil has lived in Bristol for two years."),
    Q("\"İki yıldır burada yaşıyor.\"", ["He has lived here for two years.", "He lives here since two years.", "He is living here for two years."], "Süren durum: present perfect + for."),
    Q("\"Dairenin boş olup olmadığını soruyor.\"", ["She asks if the flat is available.", "She asks is the flat available.", "She asks that the flat available."], "-ip -mediğini = if + özne + fiil."),
    Q("Tahmin: \"Biraz yağmur yağacak.\"", ["It is going to rain a little.", "It going to rain a little.", "It is go to rain a little."], "be + going to + fiil.")
  ],
  review: ["Geçmiş: was, went, ate. Present perfect: has lived, has never been.", "because ile sebep; if ile -ip -mediğini.", "Plan ve tahmin: is going to."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1), ...asExtra("A2", A2)];
