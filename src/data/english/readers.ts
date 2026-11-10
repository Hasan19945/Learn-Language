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

const B1: LessonDef[] = [
{
  id: "en-b1-story", title: "Hayattan sekiz hikâye", no: "Eight stories from life", icon: "spark", stories: readingStories("b1", "tr"),
  intro: "B1'de öğrendiklerinle sekiz hikâye: iş ve işçi bulma kurumu, iş görüşmesi, banka, İngilizce sınavı, rötarlı tren, mutfak, dağda kar ve mağazada şikâyet.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "who / which ile ilgi cümlesi: the adviser who helped her, a jacket which is warmer. although ve however: Although it was difficult, she didn't give up. while ve when: While the children are sleeping… When she arrived… Past perfect: had applied, had expected, had forgotten. Edilgen: was approved, has to be stirred. Dolaylı soru: asked why he wanted to work there. the more … the happier." },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. En son yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "Dolaylı soruda soru düzeni bozulur: \"He asked why he wanted to work there.\" \"why did he want\" demek yanlıştır. although bir cümleyi bağlar, however ise yeni cümleye başlar: \"However, trains are better.\"",
  words: [
    W("application", "başvuru", "ıplikeyşın", "She got an answer to her application.", "Başvurusuna cevap aldı."),
    W("approved", "onaylandı, onaylı", "ıpruuvd", "Her application was approved.", "Başvurusu onaylandı.", { note: "was approved = onaylandı (edilgen)" }),
    W("although", "-e rağmen, -se de", "olzou", "Although it was difficult, she didn't give up.", "Zor olmasına rağmen pes etmedi."),
    W("position", "pozisyon, kadro", "pızişın", "He applied for a position as a teacher.", "Öğretmenlik pozisyonuna başvurdu."),
    W("experience", "deneyim", "ikspiiriıns", "He talked about his experience.", "Deneyiminden bahsetti."),
    W("interest", "faiz", "intrıst", "A savings account pays more interest.", "Birikim hesabı daha fazla faiz verir.", { note: "ayrıca: ilgi" }),
    W("budget", "bütçe", "bacıt", "She needs to make a budget.", "Bir bütçe yapması gerekiyor."),
    W("nervous", "gergin, heyecanlı", "nörvıs", "He is nervous before the exam.", "Sınavdan önce gergin."),
    W("while", "-iken, sırasında", "wayl", "While the children are sleeping, he reads.", "Çocuklar uyurken o okuyor."),
    W("passed", "geçti (sınavı)", "pást", "He had passed!", "Sınavı geçmişti!", { note: "pass – passed – passed" }),
    W("delayed", "rötarlı, gecikmiş", "dileyd", "The train was delayed.", "Tren rötarlıydı."),
    W("however", "ancak, yine de", "haveVır", "However, trains are better for the environment.", "Yine de tren çevre için daha iyi."),
    W("environment", "çevre", "inVayırınmınt", "Trains are better for the environment than planes.", "Tren çevre için uçaktan daha iyi."),
    W("recipe", "tarif", "resıpi", "He has found a recipe for fish soup.", "Balık çorbası için bir tarif buldu."),
    W("suddenly", "birden", "sadınli", "Suddenly the doorbell rings.", "Birden kapı çalıyor."),
    W("luckily", "neyse ki", "lakili", "Luckily, the soup tasted delicious.", "Neyse ki çorbanın tadı harikaydı."),
    W("afraid", "korkmuş", "ıfreyd", "Mira was afraid of getting lost.", "Mira kaybolmaktan korkuyordu.", { note: "be afraid of = -den korkmak" }),
    W("receipt", "fiş, makbuz", "risiit", "He takes the receipt.", "Fişi yanına alıyor.", { note: "p okunmaz" }),
    W("complain", "şikâyet etmek", "kımpleyn", "He wants to complain about the jacket.", "Mont için şikâyette bulunmak istiyor."),
    W("satisfied", "memnun", "setisfayd", "He is satisfied with the service.", "Hizmetten memnun.")
  ],
  dialogue: [["A", "Why were you so late?", "Neden bu kadar geç kaldın?"], ["B", "The train was delayed, and I had to wait for an hour.", "Tren rötarlıydı ve bir saat beklemek zorunda kaldım."], ["A", "How annoying! However, it's good that you came.", "Ne sinir bozucu! Yine de gelmen iyi oldu."], ["B", "Yes, and luckily I got my money back.", "Evet, ve neyse ki paramı geri aldım."]],
  quiz: [
    Q("Mira'nın başvurusuna ne oldu?", ["It was approved.", "It was lost.", "It arrived too late."], "Two weeks later, she got an answer to her application. It was approved!"),
    Q("\"Müdür neden orada çalışmak istediğini sordu.\"", ["The head teacher asked why he wanted to work there.", "The head teacher asked why did he want to work there.", "The head teacher asked why wanted he to work there."], "Dolaylı soruda soru düzeni yoktur: why he wanted."),
    Q("Birikim hesabı neden daha iyi?", ["It pays more interest.", "It is free.", "It has a budget."], "A savings account pays more interest than a normal account."),
    Q("\"Sınav beklediğinden daha kolaydı.\"", ["The exam was easier than he had expected.", "The exam was easier than he has expected.", "The exam was more easy than he had expected."], "Geçmişten daha önceki bir an: had + expected."),
    Q("Mira istasyona vardığında trenin durumu neydi?", ["It was delayed.", "It was full.", "It had left."], "When she arrived at the station, the train was delayed."),
    Q("Çorba neden taştı?", ["Emil had forgotten to turn down the heat.", "The neighbours came too early.", "The recipe was wrong."], "Emil had forgotten to turn down the heat."),
    Q("Kaybolmamak için ne yaptılar?", ["They followed the red marks.", "They called a friend.", "They went back home."], "They decided to follow the red marks on the stones."),
    Q("Emil mağazaya ne götürdü?", ["the receipt", "the budget", "the recipe"], "He takes the receipt and goes back to the shop."),
    Q("\"Zor olmasına rağmen pes etmedi.\"", ["Although it was difficult, she didn't give up.", "However it was difficult, she didn't give up.", "Although it was difficult, but she didn't give up."], "although + cümle; ikinci cümlede but kullanılmaz.")
  ],
  review: ["who / which, although, while, when ile cümle bağlamak.", "Past perfect: had applied, had forgotten.", "Edilgen: was approved, has to be stirred."]
}
];

const B2: LessonDef[] = [
{
  id: "en-b2-story", title: "Sekiz B2 hikâyesi", no: "Eight B2 stories", icon: "spark", stories: readingStories("b2", "tr"),
  intro: "B2'de öğrendiklerinle sekiz hikâye: resmî bir e-posta, halk toplantısı, kafede deyimler, taşınma günü, fazla mesai hakkı, bir akşam yemeği, yarı maraton ve sahil temizliği.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "Resmî dil: she asks for the matter to be dealt with / If she does not receive a reply within fourteen days… Tartışma: on the one hand … on the other hand, since, instead. Deyimler: not the end of the world, like clockwork, suit someone down to the ground, over the moon, an eye-opener. Phrasal verbs: sort out, set up, unpack, end up, cut down on. Kibar kalıplar: You shouldn't have!" },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. Deyimleri kelime kelime çevirme; anlamlarını bütün olarak öğren. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "Phrasal verb'lerde edat anlamı tamamen değiştirebilir: sort = sıralamak, sort out = çözmek. cut = kesmek, cut down on = azaltmak. pack = toplamak, unpack = açıp yerleştirmek.",
  words: [
    W("landlord", "ev sahibi", "lendlord", "Her landlord hasn't replied.", "Ev sahibi cevap vermedi."),
    W("attach", "eklemek (dosya)", "ıteç", "She attaches photos of the wall.", "Duvarın fotoğraflarını ekliyor."),
    W("apologise", "özür dilemek", "ıpolıcayz", "The landlord calls and apologises.", "Ev sahibi arayıp özür diliyor."),
    W("on the one hand", "bir yandan", "on dı wan hend", "On the one hand, the road would help.", "Bir yandan yol yardımcı olurdu.", { note: "… on the other hand = öte yandan" }),
    W("argue", "savunmak, tartışmak", "argyu", "He argues that buses are better.", "Otobüslerin daha iyi olduğunu savunuyor."),
    W("proposal", "öneri", "prıpouzıl", "They will consider his proposal.", "Önerisini değerlendirecekler."),
    W("benefit", "yararına olmak, fayda", "benıfit", "It would benefit the environment.", "Çevreye yararı olurdu."),
    W("idiom", "deyim", "idiım", "Ollie loves idioms.", "Ollie deyimlere bayılıyor."),
    W("the end of the world", "dünyanın sonu (felaket)", "dı end ıv dı wörld", "It's not the end of the world.", "Dünyanın sonu değil."),
    W("like clockwork", "saat gibi, sorunsuz", "layk klokwörk", "Everything is running like clockwork.", "Her şey saat gibi işliyor."),
    W("sort out", "çözmek, halletmek", "sort aut", "Emil has to sort out the problem.", "Emil'in sorunu çözmesi gerekiyor."),
    W("unpack", "(koliden, bavuldan) çıkarmak", "anpek", "It will take weeks to unpack everything.", "Her şeyi çıkarmak haftalar sürecek."),
    W("overtime", "fazla mesai", "ouvırtaym", "She has worked a lot of overtime.", "Çok fazla mesai yaptı."),
    W("union", "sendika", "yuuniın", "She contacts her union representative.", "Sendika temsilcisiyle iletişime geçiyor."),
    W("admit", "kabul etmek, itiraf etmek", "ıdmit", "The manager admits the mistake.", "Müdür hatayı kabul ediyor."),
    W("polite", "kibar", "pılayt", "It's a polite way of saying thank you.", "Teşekkür etmenin kibar bir yolu."),
    W("probably", "muhtemelen", "probıbli", "He probably speaks better than he thinks.", "Muhtemelen sandığından daha iyi konuşuyor."),
    W("disappointed", "hayal kırıklığına uğramış", "disıpoyntıd", "Mira is disappointed.", "Mira hayal kırıklığına uğradı."),
    W("instead of", "yerine", "insted ıv", "Instead of running, she swims.", "Koşmak yerine yüzüyor."),
    W("volunteer", "gönüllü", "volıntiır", "There are lots of volunteers on the beach.", "Sahilde çok sayıda gönüllü var."),
    W("eye-opener", "göz açıcı şey, ders", "ay oupınır", "For Emil, it is a real eye-opener.", "Bu, Emil'in gözlerini açıyor."),
    W("cut down on", "azaltmak", "kat daun on", "He wants to cut down on plastic.", "Plastiği azaltmak istiyor.")
  ],
  dialogue: [["A", "Did you hear that the council wants to build a road through the park?", "Belediyenin parkın içinden yol yapmak istediğini duydun mu?"], ["B", "Yes, but I think they should invest in buses instead.", "Evet, ama bence bunun yerine otobüslere yatırım yapmalılar."], ["A", "I agree. On the one hand we'd save time, but on the other hand the children would lose the park.", "Katılıyorum. Bir yandan zaman kazanırız ama öte yandan çocuklar parkı kaybeder."], ["B", "We should probably speak up at the meeting tonight.", "Bu akşamki toplantıda herhalde sesimizi duyurmalıyız."]],
  quiz: [
    Q("Mira belediyeye ne zaman başvuracak?", ["If she does not receive a reply within fourteen days.", "If the landlord apologises.", "Within two days."], "If she does not receive a reply within fourteen days, she will contact the council."),
    Q("\"Öte yandan çocuklar önemli bir yeri kaybedecek.\"", ["On the other hand, children would lose an important place.", "In the other hand, children would lose an important place.", "On other hand, children would lose an important place."], "Kalıp: on the other hand."),
    Q("\"It's not the end of the world\" ne demek?", ["It's not so bad.", "The world is ending.", "It's very dangerous."], "Bu deyim 'o kadar da kötü değil' demektir."),
    Q("\"like clockwork\" ne demek?", ["very smoothly", "very slowly", "very late"], "like clockwork = saat gibi, sorunsuz."),
    Q("\"Emil'in sorunu hemen çözmesi gerekiyor.\"", ["Emil has to sort out the problem quickly.", "Emil has to sort out of the problem quickly.", "Emil has to sort up the problem quickly."], "sort out = çözmek."),
    Q("Mira fazla mesai için kimden yardım aldı?", ["her union representative", "her landlord", "the physiotherapist"], "She contacts her union representative."),
    Q("Kate neden \"You shouldn't have brought anything\" diyor?", ["It's a polite way of saying thank you.", "She is angry with Emil.", "Emil forgot the cake."], "Emil knows that this is just a polite way of saying thank you."),
    Q("Fizyoterapist Mira'ya ne tavsiye etti?", ["to take it easy", "to run more", "to cut down on plastic"], "The physiotherapist advises her to take it easy."),
    Q("Edilgen: \"Konunun ele alınmasını rica ediyor.\"", ["She asks for the matter to be dealt with.", "She asks for the matter to deal with.", "She asks for the matter dealing with."], "Edilgen: to be + dealt with.")
  ],
  review: ["Resmî dil: If she does not receive a reply within…, to be dealt with.", "Tartışma: on the one hand … on the other hand, since.", "Phrasal verb ve deyimler: sort out, unpack, like clockwork."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1), ...asExtra("A2", A2), ...asExtra("B1", B1), ...asExtra("B2", B2)];
