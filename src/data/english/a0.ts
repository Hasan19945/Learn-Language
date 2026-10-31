import { W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const EN_A0: LessonDef[] = [
{
  id: "en-l1", title: "Selamlaşma", no: "Greetings", icon: "chat",
  intro: "İngilizce seslerle ve günlük selamlaşmalarla başlıyoruz. Bu ifadeleri her gün duyacaksın.",
  notes: [
    { h: "İngiliz alfabesi", p: "İngiliz alfabesinde 26 harf vardır. Türkçede olmayan harfler: q, w, x. Türkçede olup İngilizcede olmayanlar: ç, ğ, ı, ö, ş, ü. En büyük fark: İngilizce yazıldığı gibi okunmaz. Aşağıdaki karşılıklar yaklaşıktır; en iyi öğrenme yolu dinlemektir.",
      table: [["Yazılış", "Yaklaşık ses", "Örnek"], ["th", "dil üst dişlere değer, \"t\" ya da \"d\" değil", "thank you, this"], ["w", "dudaklar yuvarlak, kısa \"u\"", "what [vat değil, uat]"], ["sh", "ş", "she [şii]"], ["ch", "ç", "chair [çeır]"], ["j", "c", "job [cob]"], ["ee", "uzun i", "see [sii]"], ["oo", "uzun u", "good [gud], food [fuud]"]] },
    { h: "Okunmayan harfler", p: "Bazı harfler hiç okunmaz: know [nou], write [rayt], hour [auır]. Kelime sonundaki -e çoğu zaman okunmaz: name [neym], five [fayv]." },
    { h: "Günlük kullanım", p: "\"Hi\" samimi, \"Hello\" her ortamda kullanılır. \"How are you?\" çoğu zaman sadece bir selamdır; kısa cevap yeterli: \"Fine, thanks.\" Norveççenin aksine İngilizcede \"please\" (lütfen) çok sık kullanılır ve kibarlık için önemlidir." }
  ],
  tip: "Türkçede her harf yazıldığı gibi okunur. İngilizcede yazılış ve okunuş çoğu zaman farklıdır. Yeni bir kelimeyi her zaman okunuşuyla birlikte öğren. \"th\" sesi Türkçede yok: \"tenk yu\" değil, dilini dişlerinin arasına koyup söyle.",
  words: [
    W("hello", "merhaba", "helou", "Hello, Ayşe!", "Merhaba Ayşe!"),
    W("hi", "selam", "hay", "Hi, Tom!", "Selam Tom!"),
    W("good morning", "günaydın", "gud mooning", "Good morning! How are you?", "Günaydın! Nasılsın?"),
    W("good evening", "iyi akşamlar", "gud iivning", "Good evening, Mehmet!", "İyi akşamlar Mehmet!"),
    W("goodbye", "hoşça kal", "gudbay", "Goodbye! See you tomorrow.", "Hoşça kal! Yarın görüşürüz."),
    W("thank you", "teşekkür ederim", "thenk yu", "Thank you very much.", "Çok teşekkür ederim.", { note: "kısa ve samimi: thanks" }),
    W("please", "lütfen", "pliiz", "A coffee, please.", "Bir kahve, lütfen."),
    W("sorry", "özür dilerim, pardon", "sori", "Sorry, I'm late.", "Özür dilerim, geç kaldım."),
    W("excuse me", "affedersiniz", "ikskyuuz mi", "Excuse me, where is the bus?", "Affedersiniz, otobüs nerede?"),
    W("yes", "evet", "yes", "Yes, please.", "Evet, lütfen."),
    W("no", "hayır", "nou", "No, thank you.", "Hayır, teşekkür ederim."),
    W("fine", "iyi", "fayn", "I'm fine, thanks.", "İyiyim, teşekkürler."),
    W("How are you?", "Nasılsın?", "hau aa yu", "Hi! How are you?", "Selam! Nasılsın?")
  ],
  dialogue: [["A", "Good morning!", "Günaydın!"], ["B", "Good morning! How are you?", "Günaydın! Nasılsın?"], ["A", "I'm fine, thanks. And you?", "İyiyim, teşekkürler. Ya sen?"], ["B", "Fine, thank you.", "İyiyim, teşekkür ederim."], ["A", "Goodbye!", "Hoşça kal!"], ["B", "Bye! See you!", "Görüşürüz!"]],
  quiz: [
    { q: "\"know\" kelimesi nasıl okunur?", o: ["[nou] – k okunmaz", "[know] – bütün harfler okunur", "[kınov]"], a: 0, e: "kn- ile başlayan kelimelerde k okunmaz: know [nou], knife [nayf]." },
    { q: "\"How are you?\" sorusuna uygun cevap hangisi?", o: ["Fine, thanks.", "Goodbye!", "Good evening!", "No."], a: 0, e: "\"Nasılsın?\" sorusuna \"Fine, thanks.\" (İyiyim, teşekkürler.) diye cevap verilir." },
    { q: "Akşam biriyle karşılaştın. Ne dersin?", o: ["Good evening!", "Good morning!", "Goodbye!"], a: 0, e: "\"Good evening\" = iyi akşamlar. \"Good morning\" sabah, \"Goodbye\" ayrılırken kullanılır." },
    { q: "Kafede kibarca kahve istiyorsun:", o: ["A coffee, please.", "Coffee! Give!", "Sorry coffee."], a: 0, e: "İngilizcede \"please\" kibarlık için çok önemlidir: A coffee, please." },
    { q: "Birinin dikkatini çekmek için ne dersin?", o: ["Excuse me.", "Thank you.", "Goodbye."], a: 0, e: "excuse me = affedersiniz. Birine soru sormadan önce kullanılır." }
  ],
  review: ["İngilizce yazıldığı gibi okunmaz: know [nou], name [neym].", "th sesi için dil dişlerin arasına gelir: thank you.", "please (lütfen) çok sık kullanılır: A coffee, please."]
},
{
  id: "en-l2", title: "Ben, sen, o", no: "Pronouns and \"to be\"", icon: "people",
  intro: "Kişi zamirlerini ve en önemli fiil olan \"to be\" (olmak) fiilini öğreniyoruz: am, is, are. Bununla ilk tam cümlelerini kuracaksın.",
  notes: [
    { h: "Kişi zamirleri", p: "Türkçedeki \"o\" İngilizcede üçe ayrılır: erkek için he, kadın için she, nesne ve hayvan için it. \"you\" hem sen hem siz demektir.",
      table: [["İngilizce", "Türkçe", "Okunuş"], ["I", "ben", "ay"], ["you", "sen / siz", "yu"], ["he", "o (erkek)", "hii"], ["she", "o (kadın)", "şii"], ["it", "o (nesne, hayvan)", "it"], ["we", "biz", "uii"], ["they", "onlar", "they"]] },
    { h: "am, is, are", p: "\"to be\" kişiye göre değişir. Konuşmada genellikle kısaltılır: I'm, you're, he's, she's, it's, we're, they're.",
      table: [["Kişi", "Fiil", "Kısa hali"], ["I", "am", "I'm"], ["he / she / it", "is", "he's, she's, it's"], ["you / we / they", "are", "you're, we're, they're"]] },
    { h: "Meslekten önce a / an", p: "Meslek söylerken a ya da an gerekir: I'm a student. She's an engineer. \"I'm student\" yanlıştır." },
    { h: "Olumsuz ve soru", p: "Olumsuz: fiilden sonra not: I'm not, he isn't, they aren't. Soru: fiil başa geçer: You are a student. → Are you a student? Türkçedeki \"mi\" ekinin yerine fiil başa gelir." }
  ],
  tip: "Türkçede özne düşebilir: \"Öğrenciyim.\" İngilizcede özne zorunludur: \"I am a student.\" Sadece \"Am student\" yanlıştır. Ayrıca \"is\" ve \"are\" Türkçedeki \"-dir\" ekine benzer ama hiçbir zaman düşmez: \"She is nice\" (O nazik), \"She nice\" yanlış.",
  words: [
    W("I", "ben", "ay", "I am a student.", "Ben öğrenciyim.", { note: "her zaman büyük harfle yazılır" }),
    W("you", "sen, siz", "yu", "You are nice.", "Sen naziksin."),
    W("he", "o (erkek)", "hii", "He is a teacher.", "O öğretmen."),
    W("she", "o (kadın)", "şii", "She is a student.", "O öğrenci."),
    W("it", "o (nesne, hayvan)", "it", "It is a cat.", "O bir kedi."),
    W("we", "biz", "uii", "We are teachers.", "Biz öğretmeniz."),
    W("they", "onlar", "they", "They are nice.", "Onlar nazik."),
    W("am", "-ım (I ile)", "em", "I am Ayşe.", "Ben Ayşe'yim."),
    W("is", "-dir (he/she/it ile)", "iz", "He is from Turkey.", "O Türkiyeli."),
    W("are", "-sın, -iz, -lar (you/we/they ile)", "aa", "Are you a student?", "Öğrenci misin?"),
    W("student", "öğrenci", "styuudınt", "Are you a student?", "Öğrenci misin?"),
    W("teacher", "öğretmen", "tiiçır", "She is a teacher.", "O öğretmen."),
    W("nice", "hoş, nazik", "nays", "He is nice.", "O nazik biri.")
  ],
  dialogue: [["A", "Hi! I'm Ayşe. Are you a student?", "Selam! Ben Ayşe. Öğrenci misin?"], ["B", "No, I'm a teacher. And you?", "Hayır, ben öğretmenim. Ya sen?"], ["A", "I'm a student.", "Ben öğrenciyim."], ["B", "Nice to meet you!", "Tanıştığımıza memnun oldum!"]],
  quiz: [
    { q: "\"Ben öğrenciyim.\" doğru çevirisi hangisi?", o: ["I am a student.", "Am student.", "I student.", "I is a student."], a: 0, e: "Özne (I) ve fiil (am) zorunludur. Meslekten önce a gelir." },
    { q: "\"O (kadın) öğretmen.\"", o: ["She is a teacher.", "He is a teacher.", "She are a teacher.", "She teacher."], a: 0, e: "Kadın için she, she ile is kullanılır: She is a teacher." },
    { q: "\"Öğrenci misin?\" doğru soru hangisi?", o: ["Are you a student?", "You are a student?", "Is you a student?"], a: 0, e: "Evet/hayır sorularında fiil başa gelir: Are you a student?" },
    { q: "Boşluğu doldur: \"We ___ teachers.\"", o: ["are", "is", "am"], a: 0, e: "we, you, they ile are kullanılır." },
    { q: "\"It is a dog.\" cümlesinde it neyi gösterir?", o: ["bir hayvanı ya da nesneyi", "bir erkeği", "bir kadını"], a: 0, e: "it = o (nesne, hayvan). İnsanlar için he ya da she kullanılır." }
  ],
  review: ["he = o (erkek), she = o (kadın), it = o (nesne, hayvan).", "I am, he/she/it is, you/we/they are.", "Meslekten önce a / an: I'm a student."]
},
{
  id: "en-l3", title: "Tanışma", no: "Getting to know people", icon: "globe",
  intro: "Adını, nereli olduğunu ve nerede yaşadığını söylemeyi öğreniyoruz. Yeni biriyle tanışınca ilk sorulan sorular bunlardır.",
  notes: [
    { h: "Geniş zaman (present simple)", p: "Fiil yalın haliyle kullanılır. Sadece he, she, it ile fiile -s eklenir. Bu yapı Türkçedeki geniş zamana ve bazen şimdiki zamana karşılık gelir.",
      table: [["Fiil", "I / you / we / they", "he / she / it"], ["live (yaşamak)", "I live", "she lives"], ["come (gelmek)", "you come", "he comes"], ["speak (konuşmak)", "we speak", "it speaks"], ["work (çalışmak)", "they work", "she works"]] },
    { h: "Soru kelimesiyle soru", p: "Sıra: soru kelimesi + be + özne: What is your name? Where are you from? Diğer fiillerde do yardımcı olur: Where do you live? \"Nereden\" sorusunda from cümlenin sonuna gider." },
    { h: "Büyük harf", p: "Türkçenin aksine İngilizcede dil ve milliyet adları da büyük harfle yazılır: English, Turkish. Ülke adları da büyük: Turkey, England." }
  ],
  tip: "Türkçede \"nereden\" tek kelimedir. İngilizcede \"Where ... from\" diye ikiye ayrılır: Where are you from? Ayrıca \"I speak english\" yanlıştır; dil adı büyük harfle yazılır: English.",
  words: [
    W("name", "ad, isim", "neym", "My name is Mehmet.", "Benim adım Mehmet."),
    W("my", "benim", "may", "My name is Kate.", "Benim adım Kate."),
    W("your", "senin", "yoor", "What's your name?", "Adın ne?"),
    W("from", "-den, -dan", "from", "I'm from Turkey.", "Türkiyeliyim."),
    W("live", "yaşamak, oturmak", "liv", "I live in London.", "Londra'da yaşıyorum.", { note: "he/she: lives" }),
    W("speak", "konuşmak", "spiik", "I speak Turkish.", "Türkçe konuşuyorum.", { note: "he/she: speaks" }),
    W("what", "ne", "vat", "What's your name?", "Adın ne?"),
    W("where", "nerede, nereye", "veır", "Where do you live?", "Nerede oturuyorsun?"),
    W("in", "-de, -da (içinde)", "in", "She lives in Bristol.", "O Bristol'de yaşıyor."),
    W("English", "İngilizce, İngiliz", "ingliş", "I speak a little English.", "Biraz İngilizce konuşuyorum."),
    W("Turkish", "Türkçe, Türk", "törkiş", "Do you speak Turkish?", "Türkçe konuşuyor musun?"),
    W("Turkey", "Türkiye", "törki", "I'm from Turkey.", "Türkiyeliyim.", { note: "resmî adı: Türkiye" }),
    W("England", "İngiltere", "ingılınd", "We live in England.", "İngiltere'de yaşıyoruz."),
    W("a little", "biraz", "ı litıl", "Yes, a little.", "Evet, biraz."),
    W("now", "şimdi", "nau", "I live in London now.", "Şimdi Londra'da yaşıyorum.")
  ],
  dialogue: [["A", "What's your name?", "Adın ne?"], ["B", "My name is Mehmet. And you?", "Benim adım Mehmet. Ya senin?"], ["A", "I'm Kate. Where are you from?", "Ben Kate. Nerelisin?"], ["B", "I'm from Turkey. I live in London now.", "Türkiyeliyim. Şimdi Londra'da yaşıyorum."], ["A", "Do you speak English?", "İngilizce konuşuyor musun?"], ["B", "Yes, a little.", "Evet, biraz."], ["A", "Nice to meet you!", "Tanıştığımıza memnun oldum!"], ["B", "Nice to meet you too!", "Ben de memnun oldum!"]],
  quiz: [
    { q: "\"Nerelisin?\" doğru soru hangisi?", o: ["Where are you from?", "Where you are from?", "From where you are?"], a: 0, e: "Soru kelimesi + fiil + özne: Where are you from? \"from\" sona gider." },
    { q: "\"O Londra'da yaşıyor.\" (she)", o: ["She lives in London.", "She live in London.", "She living in London.", "She is live in London."], a: 0, e: "he/she/it ile geniş zamanda fiil -s alır: lives." },
    { q: "\"Türkçe konuşuyorum.\"", o: ["I speak Turkish.", "I speak turkish.", "I speaks Turkish.", "Speak Turkish I."], a: 0, e: "I ile fiil -s almaz ve dil adı büyük harfle yazılır: Turkish." },
    { q: "\"What's your name?\" ne demek?", o: ["Adın ne?", "Nerede oturuyorsun?", "Nasılsın?"], a: 0, e: "what = ne, your name = senin adın. What's = What is." },
    { q: "Boşluğu doldur: \"I live ___ England.\"", o: ["in", "from", "and"], a: 0, e: "\"in\" = -de/-da. I live in England = İngiltere'de yaşıyorum." }
  ],
  review: ["Geniş zaman: I live, she lives (he/she/it ile -s).", "Soru: soru kelimesi + fiil + özne. Where are you from?", "Dil ve ülke adları büyük harfle: English, Turkey."]
},
{
  id: "en-l4", title: "Sayılar 0–10", no: "Numbers", icon: "num",
  intro: "0'dan 10'a kadar sayıları, yaş sormayı ve \"have\" (sahip olmak) fiilini öğreniyoruz.",
  notes: [
    { h: "Sayılar", p: "0 için iki söyleyiş var: zero ve telefon numaralarında oh [ou].",
      table: [["Sayı", "İngilizce", "Okunuş"], ["0", "zero", "ziırou"], ["1", "one", "uan"], ["2", "two", "tuu"], ["3", "three", "thrii"], ["4", "four", "foo"], ["5", "five", "fayv"], ["6", "six", "siks"], ["7", "seven", "sevın"], ["8", "eight", "eyt"], ["9", "nine", "nayn"], ["10", "ten", "ten"]] },
    { h: "have / has", p: "Sahip olmak: I have, you have, we have, they have. he/she/it ile has: She has two children. Olumsuz: I don't have, she doesn't have." },
    { h: "Yaş söylemek", p: "Yaş \"be\" ile söylenir: I am eight (years old). \"I have eight years\" yanlıştır. Soru: How old are you? Birden fazla kişi için: How old are they?" }
  ],
  tip: "Türkçede sayıdan sonra isim tekil kalır: iki araba. İngilizcede çoğul olur: two cars. Bazı kelimelerin çoğulu düzensizdir: one child → two children.",
  words: [
    W("zero", "sıfır", "ziırou", "zero, one, two", "sıfır, bir, iki"),
    W("one", "bir", "uan", "one, two, three", "bir, iki, üç"),
    W("two", "iki", "tuu", "I have two children.", "İki çocuğum var."),
    W("three", "üç", "thrii", "We are three.", "Üç kişiyiz."),
    W("four", "dört", "foo", "She is four.", "O dört yaşında."),
    W("five", "beş", "fayv", "They are five and eight.", "Onlar beş ve sekiz yaşında."),
    W("six", "altı", "siks", "He is six years old.", "O altı yaşında."),
    W("seven", "yedi", "sevın", "She is seven.", "O yedi yaşında."),
    W("eight", "sekiz", "eyt", "I am eight years old.", "Sekiz yaşındayım."),
    W("nine", "dokuz", "nayn", "He is nine.", "O dokuz yaşında."),
    W("ten", "on", "ten", "We are ten.", "On kişiyiz."),
    W("have", "sahip olmak, -si var", "hev", "I have two children.", "İki çocuğum var.", { note: "he/she/it: has" }),
    W("child", "çocuk", "çayld", "Do you have children?", "Çocuğun var mı?", { note: "çoğul: children [çildrın]" }),
    W("year", "yıl", "yiır", "She is six years old.", "O altı yaşında.", { note: "çoğul: years" }),
    W("How old are you?", "Kaç yaşındasın?", "hau ould aa yu", "How old are you?", "Kaç yaşındasın?")
  ],
  dialogue: [["A", "Do you have children?", "Çocuğun var mı?"], ["B", "Yes, I have two children.", "Evet, iki çocuğum var."], ["A", "How old are they?", "Kaç yaşındalar?"], ["B", "They are five and eight.", "Beş ve sekiz yaşındalar."]],
  quiz: [
    { q: "3 + 4 = ?", o: ["seven", "six", "eight", "five"], a: 0, e: "3 + 4 = 7 = seven." },
    { q: "\"two\" nasıl okunur?", o: ["[tuu] – w okunmaz", "[tvo]", "[tuvo]"], a: 0, e: "two kelimesinde w okunmaz: [tuu]." },
    { q: "Boşluğu doldur: \"I ___ eight years old.\" (Sekiz yaşındayım.)", o: ["am", "have", "is"], a: 0, e: "Yaş \"be\" ile söylenir: I am eight years old." },
    { q: "\"How old are they?\" ne demek?", o: ["Kaç yaşındalar?", "Kaç çocukları var?", "Nerede oturuyorlar?"], a: 0, e: "How old = kaç yaşında." },
    { q: "\"iki çocuk\" doğru yazımı hangisi?", o: ["two children", "two child", "two childs"], a: 0, e: "child kelimesinin çoğulu düzensizdir: children." },
    { q: "\"Onun (kadın) iki kedisi var.\"", o: ["She has two cats.", "She have two cats.", "She is two cats.", "She has two cat."], a: 0, e: "he/she/it ile has; sayıdan sonra çoğul: two cats." }
  ],
  review: ["Sayıdan sonra çoğul: two cars, three children.", "Yaş: I am ... (years old). Soru: How old are you?", "have / has: I have, she has."]
},
{
  id: "en-l5", title: "İsimler: a, an, the", no: "Nouns and articles", icon: "house", pack: "words",
  intro: "İngilizce isimlerden önce gelen a, an, the kelimelerini ve çoğul yapmayı öğreniyoruz. Türkçede bu kelimeler yok, bu yüzden dikkat isteyen bir konu.",
  notes: [
    { h: "Cinsiyet yok", p: "İngilizce isimlerin cinsiyeti yoktur. Her isimle aynı kelimeler kullanılır: a car, a girl, a house." },
    { h: "a, an, the", p: "a / an = bir (belirsiz). the = o, bilinen (belirli). Ünsüz sesle başlayan kelimeden önce a, ünlü sesle başlayan kelimeden önce an gelir. Önemli olan yazılış değil, okunuştur: an hour [auır], a university [yuunivörsiti].",
      table: [["Belirsiz", "Belirli", "Çoğul"], ["a car", "the car", "cars"], ["an apple", "the apple", "apples"], ["a house", "the house", "houses"], ["a box", "the box", "boxes"], ["a man", "the man", "men"]] },
    { h: "Çoğul", p: "Çoğul çoğunlukla -s ile yapılır: cars. -s, -sh, -ch, -x ile biten kelimeler -es alır: boxes, watches. Düzensiz çoğullar ezberlenmeli: man → men, woman → women, child → children." },
    { h: "Ne zaman the?", p: "Bir şeyden ilk kez söz ederken a/an: This is a house. (Bu bir ev.) Sonra bilinen şey için the: Do you live in the house? (O evde mi oturuyorsun?) the okunuşu: ünsüzden önce [dı], ünlüden önce [di]." }
  ],
  tip: "Türkçede \"bir\" çoğu zaman düşer: \"Araba aldım.\" İngilizcede tekil sayılabilen isim yalnız kalamaz; önüne a/an, the ya da my gibi bir kelime gelmeli: I have a car. \"I have car\" yanlıştır.",
  words: [
    W("boy", "oğlan, erkek çocuk", "boy", "The boy is called Ali.", "Oğlanın adı Ali.", { note: "çoğul: boys" }),
    W("girl", "kız, kız çocuk", "görl", "The girl is seven.", "Kız yedi yaşında.", { note: "çoğul: girls" }),
    W("house", "ev", "haus", "This is a house.", "Bu bir ev.", { note: "çoğul: houses [hauziz]" }),
    W("car", "araba", "kaa", "I have a car.", "Bir arabam var.", { note: "çoğul: cars" }),
    W("job", "iş", "cob", "I have a job in London.", "Londra'da bir işim var.", { note: "çoğul: jobs" }),
    W("apple", "elma", "epıl", "This is an apple.", "Bu bir elma.", { note: "an apple · çoğul: apples" }),
    W("friend", "arkadaş", "frend", "He is a friend.", "O bir arkadaş.", { note: "çoğul: friends" }),
    W("day", "gün", "dey", "The day is nice.", "Gün güzel.", { note: "çoğul: days" }),
    W("man", "adam", "men", "The man is a teacher.", "Adam öğretmen.", { note: "düzensiz çoğul: men" }),
    W("woman", "kadın", "vumın", "The woman is from Turkey.", "Kadın Türkiyeli.", { note: "düzensiz çoğul: women [vimin]" }),
    W("This is ...", "Bu (bir) ...", "dis iz", "This is a car.", "Bu bir araba.", { tts: "This is" }),
    W("with", "ile", "vith", "I live with a friend.", "Bir arkadaşla oturuyorum."),
    W("there", "orada", "deır", "Do you live there?", "Orada mı oturuyorsun?")
  ],
  dialogue: [["A", "What's this?", "Bu ne?"], ["B", "This is a house.", "Bu bir ev."], ["A", "Do you live in the house?", "O evde mi oturuyorsun?"], ["B", "Yes. I live there with two children, a boy and a girl.", "Evet. Orada iki çocukla oturuyorum, bir oğlan ve bir kız."]],
  quiz: [
    { q: "\"the house\" ne demek?", o: ["o ev (bilinen ev)", "bir ev", "evler"], a: 0, e: "the belirli bir şeyi gösterir: a house (bir ev) → the house (o ev)." },
    { q: "Doğru olan hangisi?", o: ["an apple", "a apple", "an car", "a egg"], a: 0, e: "Ünlü sesle başlayan kelimeden önce an: an apple, an egg." },
    { q: "\"box\" kelimesinin çoğulu hangisi?", o: ["boxes", "boxs", "box"], a: 0, e: "-x ile biten kelimeler -es alır: boxes." },
    { q: "\"woman\" kelimesinin çoğulu hangisi?", o: ["women", "womans", "womens", "woman"], a: 0, e: "Düzensiz çoğul: woman → women [vimin]." },
    { q: "Hangisi doğru? (hour = saat, h okunmaz)", o: ["an hour", "a hour", "the an hour"], a: 0, e: "hour [auır] ünlü sesle başlar, bu yüzden an hour." },
    { q: "\"Bir arabam var.\"", o: ["I have a car.", "I have car.", "I have the a car."], a: 0, e: "Tekil sayılabilen isim yalnız kalamaz: I have a car." }
  ],
  review: ["a + ünsüz ses (a car), an + ünlü ses (an apple, an hour).", "the = bilinen, belirli şey: the house.", "Çoğul çoğunlukla -s; düzensiz: men, women, children."]
},
{
  id: "en-l6", title: "Temel fiiller ve söz dizimi", no: "Verbs and word order", icon: "arrow", pack: "sentences",
  intro: "Her gün kullanacağın fiiller, olumsuzluk (don't) ve İngilizcenin en önemli kuralı: özne + fiil + nesne.",
  notes: [
    { h: "Özne + fiil + nesne", p: "Türkçede fiil sondadır: Ben kahve içerim. İngilizcede fiil öznenin hemen arkasından gelir: I drink coffee. Zaman ifadesi genellikle sona ya da başa gelir; özne ve fiilin sırası değişmez.",
      table: [["Özne", "Fiil", "Nesne / Devamı"], ["I", "drink", "coffee."], ["She", "learns", "English today."], ["Today", "I work", "at home."]] },
    { h: "Olumsuzluk: don't / doesn't", p: "Olumsuz cümle do yardımcısıyla yapılır: I don't understand. he/she/it ile doesn't gelir ve fiil -s almaz: She doesn't work today. \"She doesn't works\" yanlış." },
    { h: "Soru: Do / Does", p: "Evet/hayır sorusu Do ya da Does ile başlar: Do you work today? Does he speak English? Cevap: Yes, I do. / No, he doesn't." },
    { h: "can / want to", p: "can (-ebilmek) fiilinden sonra fiil yalın gelir: Can you speak slowly? want (istemek) fiilinden sonra to gelir: Do you want to eat dinner?" }
  ],
  tip: "Türkçe konuşanların en sık hatası: \"I am work\" ya da \"I am drink coffee\". Geniş zamanda am/is/are kullanılmaz: I work. I drink coffee.",
  words: [
    W("go", "gitmek", "gou", "I go to work.", "İşe giderim.", { note: "he/she: goes" }),
    W("eat", "yemek", "iit", "We eat dinner at seven.", "Yedide akşam yemeği yeriz."),
    W("drink", "içmek", "drink", "She drinks coffee.", "O kahve içer."),
    W("learn", "öğrenmek", "lörn", "I learn English.", "İngilizce öğreniyorum."),
    W("work", "çalışmak", "vörk", "He works in London.", "O Londra'da çalışıyor."),
    W("understand", "anlamak", "andırstend", "Do you understand?", "Anlıyor musun?"),
    W("can", "-ebilmek", "ken", "Can you speak slowly?", "Yavaş konuşabilir misin?"),
    W("want", "istemek", "vont", "Do you want to eat dinner?", "Akşam yemeği yemek ister misin?"),
    W("don't", "-me, -ma (olumsuz)", "dount", "I don't understand.", "Anlamıyorum.", { note: "do not · he/she/it: doesn't" }),
    W("today", "bugün", "tıdey", "I don't work today.", "Bugün çalışmıyorum."),
    W("tonight", "bu akşam, bu gece", "tınayt", "I work tonight.", "Bu akşam çalışıyorum."),
    W("dinner", "akşam yemeği", "dinır", "Dinner is ready.", "Akşam yemeği hazır."),
    W("coffee", "kahve", "kofi", "Coffee, please.", "Kahve, lütfen."),
    W("together", "birlikte", "tıgedır", "We eat together.", "Birlikte yiyoruz."),
    W("of course", "tabii ki", "ıv koors", "Yes, of course!", "Evet, tabii ki!"),
    W("slowly", "yavaşça", "slouli", "Can you speak slowly?", "Yavaş konuşabilir misin?")
  ],
  dialogue: [["A", "Do you work today?", "Bugün çalışıyor musun?"], ["B", "No, I don't work today. I have an English class.", "Hayır, bugün çalışmıyorum. İngilizce dersim var."], ["A", "Great! Do you want to eat dinner together tonight?", "Harika! Bu akşam birlikte yemek yemek ister misin?"], ["B", "Sorry, can you speak slowly?", "Pardon, yavaş konuşabilir misin?"], ["A", "Do you want – to eat dinner – together?", "Birlikte – akşam yemeği – yemek ister misin?"], ["B", "Yes, of course!", "Evet, tabii ki!"]],
  quiz: [
    { q: "\"Anlamıyorum.\"", o: ["I don't understand.", "I not understand.", "I understand not.", "I am not understand."], a: 0, e: "Olumsuz: don't + fiil: I don't understand." },
    { q: "\"Kahve içerim.\" doğru söz dizimi?", o: ["I drink coffee.", "I coffee drink.", "Coffee I drink.", "Drink I coffee."], a: 0, e: "Özne + fiil + nesne: I drink coffee." },
    { q: "Boşluğu doldur: \"She ___ coffee.\" (içmek)", o: ["drinks", "drink", "is drink"], a: 0, e: "he/she/it ile geniş zamanda fiil -s alır: drinks." },
    { q: "\"Can you speak slowly?\" cümlesinde speak neden -s ya da to almıyor?", o: ["can'den sonra fiil yalın gelir", "Soru cümlelerinde -s düşer", "you ile to kullanılmaz"], a: 0, e: "can + yalın fiil: can speak, can understand." },
    { q: "\"O bugün çalışmıyor.\" (he)", o: ["He doesn't work today.", "He don't work today.", "He doesn't works today.", "He not work today."], a: 0, e: "he/she/it ile doesn't, ardından yalın fiil: doesn't work." },
    { q: "\"I am work in London.\" cümlesinin doğrusu?", o: ["I work in London.", "I am works in London.", "I working in London."], a: 0, e: "Geniş zamanda am/is/are kullanılmaz: I work in London." }
  ],
  review: ["Özne + fiil + nesne: I drink coffee.", "Olumsuz: don't / doesn't + yalın fiil.", "can + yalın fiil, want to + fiil."]
}
];
export default atLevel("A0", EN_A0);
