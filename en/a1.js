const EN_A1 = [
{
  id: "en-a1-1", title: "Aile", no: "Family", icon: "people",
  intro: "Aileni tanıtmayı ve iyelik sözcüklerini (benim, senin, onun) öğreniyoruz.",
  notes: [
    { h: "İyelik sıfatları", p: "İyelik sözcüğü ismin önüne gelir ve hiç değişmez: my father, my mother, my children. Türkçedeki iyelik ekinin (-im, -in) yerine geçer.",
      table: [["Kişi", "İyelik", "Örnek"], ["I", "my", "my brother (erkek kardeşim)"], ["you", "your", "your sister (kız kardeşin)"], ["he", "his", "his wife (onun karısı)"], ["she", "her", "her husband (onun kocası)"], ["we", "our", "our son (oğlumuz)"], ["they", "their", "their daughter (onların kızı)"]] },
    { h: "his mi, her mi?", p: "Türkçedeki \"onun\" ikiye ayrılır. Sahip erkekse his, kadınsa her: Ali and his sister (Ali ve onun kız kardeşi). Ayşe and her brother (Ayşe ve onun erkek kardeşi)." },
    { h: "İsim + 's", p: "Bir kişinin bir şeyi: isim + 's + sahip olunan: Ali's father (Ali'nin babası), my mother's car (annemin arabası). Türkçedeki \"-nin\" ekine benzer." },
    { h: "Kardeş", p: "İngilizcede \"kardeş\" için tek kelime yok: brother (erkek kardeş), sister (kız kardeş). Abla/ağabey ayrımı da yok: older sister (abla), younger brother (küçük erkek kardeş)." }
  ],
  tip: "Türkçede \"onun\" hem erkek hem kadın için aynıdır. İngilizcede sahibine bakılır: \"Ayşe and his brother\" yanlıştır, doğrusu \"Ayşe and her brother\".",
  words: [
    W("family", "aile", "femıli", "I have a big family.", "Büyük bir ailem var."),
    W("mother", "anne", "madır", "My mother is a teacher.", "Annem öğretmen.", { note: "samimi: mum (İngiltere), mom (ABD)" }),
    W("father", "baba", "faadır", "His father lives in Izmir.", "Onun babası İzmir'de yaşıyor.", { note: "samimi: dad" }),
    W("brother", "erkek kardeş, ağabey", "bradır", "I have two brothers.", "İki erkek kardeşim var."),
    W("sister", "kız kardeş, abla", "sistır", "Her sister is twenty.", "Onun kız kardeşi yirmi yaşında."),
    W("son", "oğul", "san", "Our son is five.", "Oğlumuz beş yaşında."),
    W("daughter", "kız evlat", "dootır", "Their daughter is a student.", "Onların kızı öğrenci.", { note: "gh okunmaz" }),
    W("wife", "eş (kadın), karı", "vayf", "This is my wife, Elif.", "Bu eşim Elif.", { note: "çoğul: wives" }),
    W("husband", "eş (erkek), koca", "hazbınd", "Her husband works in London.", "Onun kocası Londra'da çalışıyor."),
    W("parents", "anne baba, ebeveyn", "peırınts", "My parents live in Turkey.", "Annemle babam Türkiye'de yaşıyor."),
    W("married", "evli", "merid", "Are you married?", "Evli misin?"),
    W("his", "onun (erkek)", "hiz", "Ali and his sister.", "Ali ve kız kardeşi."),
    W("her", "onun (kadın)", "hör", "Ayşe and her brother.", "Ayşe ve erkek kardeşi."),
    W("our", "bizim", "auır", "Our house is small.", "Bizim evimiz küçük."),
    W("their", "onların", "deır", "Their children are nice.", "Onların çocukları nazik.")
  ],
  dialogue: [["A", "Are you married?", "Evli misin?"], ["B", "Yes. My wife is Elif. We have a son and a daughter.", "Evet. Eşimin adı Elif. Bir oğlumuz ve bir kızımız var."], ["A", "How old are your children?", "Çocukların kaç yaşında?"], ["B", "Our son is six and our daughter is three.", "Oğlumuz altı, kızımız üç yaşında."], ["A", "Do your parents live here?", "Annenle baban burada mı yaşıyor?"], ["B", "No, my parents live in Turkey. My sister lives with them.", "Hayır, annemle babam Türkiye'de yaşıyor. Kız kardeşim onlarla yaşıyor."]],
  quiz: [
    { q: "\"Ayşe ve erkek kardeşi\"", o: ["Ayşe and her brother", "Ayşe and his brother", "Ayşe and she brother", "Ayşe's and brother"], a: 0, e: "Sahip Ayşe (kadın) olduğu için her kullanılır." },
    { q: "\"Ali'nin babası\"", o: ["Ali's father", "father Ali's", "Ali father", "the Ali's father"], a: 0, e: "İsim + 's + sahip olunan: Ali's father." },
    { q: "\"Onların kızı\"", o: ["their daughter", "they daughter", "theirs daughter", "her daughter"], a: 0, e: "they → their: their daughter." },
    { q: "\"daughter\" nasıl okunur?", o: ["[dootır] – gh okunmaz", "[dauğtır]", "[dagter]"], a: 0, e: "gh bu kelimede okunmaz: [dootır]." },
    { q: "Boşluğu doldur: \"We love ___ children.\"", o: ["our", "we", "us"], a: 0, e: "we → our: our children." }
  ],
  review: ["my, your, his, her, our, their ismin önüne gelir ve değişmez.", "Sahip erkekse his, kadınsa her.", "İsim + 's = -nin: Ali's father."]
},
{
  id: "en-a1-2", title: "Market ve fiyatlar", no: "At the shop", icon: "bag",
  intro: "Alışveriş yaparken fiyat sormayı, 11'den 100'e kadar sayıları ve some / any kullanımını öğreniyoruz.",
  notes: [
    { h: "Sayılar 11–100", p: "11–19 arası -teen ile, onlar -ty ile biter. Okunuşta vurguya dikkat: thirTEEN (13) ama THIRty (30). Birler basamağı tireyle bağlanır: twenty-one, fifty-seven.",
      table: [["Sayı", "İngilizce", "Okunuş"], ["11", "eleven", "ilevın"], ["12", "twelve", "tuelv"], ["13", "thirteen", "thörtiin"], ["15", "fifteen", "fiftiin"], ["20", "twenty", "tuenti"], ["30", "thirty", "thörti"], ["50", "fifty", "fifti"], ["100", "a hundred", "ı handrıd"]] },
    { h: "How much / How many", p: "Fiyat sorarken: How much is it? (Ne kadar?) Birden fazla şey için: How much are they? Sayılabilen şeylerin sayısı için How many: How many apples?" },
    { h: "some / any", p: "some: olumlu cümlede \"biraz, birkaç\": I need some milk. any: soru ve olumsuz cümlede: Do you have any eggs? We don't have any bread. Rica ederken some kullanılır: Can I have some water?" },
    { h: "Sayılamayan isimler", p: "milk, water, bread, cheese, money gibi isimler sayılamaz: a milk değil, some milk ya da a bottle of milk (bir şişe süt). Çoğulu da olmaz: breads değil, bread." }
  ],
  tip: "Türkçede \"iki ekmek\" diyebiliriz. İngilizcede bread sayılamaz: two loaves of bread (iki somun ekmek). Benzer şekilde \"bir para\" değil \"some money\", \"bir bilgi\" değil \"some information\".",
  words: [
    W("How much is it?", "Ne kadar? Kaç para?", "hau maç iz it", "Excuse me, how much is it?", "Affedersiniz, bu ne kadar?"),
    W("cost", "tutmak (fiyat)", "kost", "It costs five pounds.", "Beş sterlin tutuyor.", { note: "it costs" }),
    W("cheap", "ucuz", "çiip", "The apples are cheap today.", "Elmalar bugün ucuz."),
    W("expensive", "pahalı", "ikspensiv", "Cheese is expensive here.", "Peynir burada pahalı."),
    W("milk", "süt", "milk", "I need some milk.", "Biraz süte ihtiyacım var.", { note: "sayılamaz" }),
    W("cheese", "peynir", "çiiz", "Do you have any cheese?", "Peynir var mı?", { note: "sayılamaz" }),
    W("egg", "yumurta", "eg", "I want six eggs.", "Altı yumurta istiyorum.", { note: "an egg · çoğul: eggs" }),
    W("water", "su", "vootır", "Can I have some water?", "Biraz su alabilir miyim?", { note: "sayılamaz" }),
    W("some", "biraz, birkaç", "sam", "I need some eggs.", "Birkaç yumurtaya ihtiyacım var."),
    W("any", "hiç, herhangi (soru, olumsuz)", "eni", "We don't have any milk.", "Hiç sütümüz yok."),
    W("bag", "poşet, çanta", "beg", "Do you need a bag?", "Poşet ister misiniz?"),
    W("I'd like", "... istiyorum (kibar)", "ayd layk", "I'd like a kilo of apples, please.", "Bir kilo elma istiyorum, lütfen.", { note: "= I would like" }),
    W("pay", "ödemek", "pey", "Can I pay by card?", "Kartla ödeyebilir miyim?"),
    W("cash", "nakit", "keş", "I pay in cash.", "Nakit ödüyorum."),
    W("twenty", "yirmi", "tuenti", "That's twenty pounds.", "Yirmi sterlin ediyor.")
  ],
  dialogue: [["A", "Hello! Can I help you?", "Merhaba! Yardımcı olabilir miyim?"], ["B", "Yes, I'd like some cheese and six eggs, please.", "Evet, biraz peynir ve altı yumurta istiyorum, lütfen."], ["A", "Here you are. Anything else?", "Buyurun. Başka bir şey?"], ["B", "Do you have any milk?", "Süt var mı?"], ["A", "Yes, it's there. That's twelve pounds fifty.", "Evet, orada. Toplam on iki sterlin elli."], ["B", "Can I pay by card?", "Kartla ödeyebilir miyim?"], ["A", "Of course. Do you need a bag?", "Tabii. Poşet ister misiniz?"], ["B", "No, thanks.", "Hayır, teşekkürler."]],
  quiz: [
    { q: "\"Süt var mı?\"", o: ["Do you have any milk?", "Do you have some milks?", "Have you a milk?", "Do you have a milk?"], a: 0, e: "Soruda any; milk sayılamaz, a almaz ve çoğul olmaz." },
    { q: "\"13\" hangisi?", o: ["thirteen", "thirty", "threeteen", "thirdteen"], a: 0, e: "13 = thirteen (vurgu sonda), 30 = thirty (vurgu başta)." },
    { q: "Fiyat sorarken hangisi?", o: ["How much is it?", "How many is it?", "What cost it?", "How much it is?"], a: 0, e: "Fiyat: How much is it? / How much are they?" },
    { q: "\"Hiç ekmeğimiz yok.\"", o: ["We don't have any bread.", "We don't have some bread.", "We have any bread.", "We don't have breads."], a: 0, e: "Olumsuzda any; bread sayılamaz." },
    { q: "Kibarca istemek için hangisi daha uygun?", o: ["I'd like a coffee, please.", "I want coffee.", "Give coffee.", "Coffee me."], a: 0, e: "I'd like (= I would like) kibar istek bildirir." },
    { q: "47 sayısı?", o: ["forty-seven", "fourty-seven", "seventy-four", "four-seven"], a: 0, e: "40 = forty (u yok!), 47 = forty-seven." }
  ],
  review: ["How much is it? = Ne kadar?", "some: olumlu cümle; any: soru ve olumsuz cümle.", "milk, water, bread, money sayılamaz: a almaz, çoğul olmaz."]
},
{
  id: "en-a1-3", title: "Saat ve günler", no: "Time and days", icon: "clock",
  intro: "Saati sormayı ve söylemeyi, haftanın günlerini ve zaman edatlarını (at, on, in) öğreniyoruz.",
  notes: [
    { h: "Saat söylemek", p: "Tam saat: It's three o'clock. Geçe: past, kala: to. Yarım saat: half past (\"yarım geçe\").",
      table: [["Saat", "İngilizce", "Türkçe"], ["3:00", "three o'clock", "saat üç"], ["3:15", "quarter past three", "üçü çeyrek geçiyor"], ["3:30", "half past three", "üç buçuk"], ["3:45", "quarter to four", "dörde çeyrek var"], ["3:10", "ten past three", "üçü on geçiyor"], ["3:50", "ten to four", "dörde on var"]] },
    { h: "Dijital söyleyiş", p: "Sayıları sırayla söylemek de çok yaygındır: 3:15 = three fifteen, 7:45 = seven forty-five. Sabah için a.m., öğleden sonra ve akşam için p.m.: 8 a.m., 8 p.m." },
    { h: "at, on, in", p: "Saatle at: at five o'clock. Günle on: on Monday. Ay, yıl ve günün bölümleriyle in: in May, in 2024, in the morning. İstisna: at night (gece), at the weekend (İngiltere) / on the weekend (ABD)." },
    { h: "Büyük harf", p: "Günler ve aylar büyük harfle yazılır: Monday, Friday, January. Türkçede küçük harfle yazılır." }
  ],
  tip: "Türkçede \"üç buçuk\" deriz. İngilizcede \"half past three\" (üçü yarım geçiyor) denir. İngiltere'de günlük konuşmada \"half four\" de duyarsın: bu 4:30 demektir, 3:30 değil! Emin değilsen \"four thirty\" de.",
  words: [
    W("What time is it?", "Saat kaç?", "vat taym iz it", "Excuse me, what time is it?", "Affedersiniz, saat kaç?"),
    W("o'clock", "saat (tam)", "ıklok", "It's five o'clock.", "Saat beş."),
    W("half past", "buçuk (... yarım geçe)", "haaf paast", "It's half past seven.", "Saat yedi buçuk."),
    W("quarter past", "çeyrek geçe", "kuootır paast", "It's quarter past two.", "İkiyi çeyrek geçiyor."),
    W("quarter to", "çeyrek kala", "kuootır tu", "It's quarter to nine.", "Dokuza çeyrek var."),
    W("Monday", "pazartesi", "mandey", "I work on Monday.", "Pazartesi çalışıyorum."),
    W("Wednesday", "çarşamba", "venzdey", "The meeting is on Wednesday.", "Toplantı çarşamba günü.", { note: "ilk d okunmaz" }),
    W("Friday", "cuma", "fraydey", "See you on Friday!", "Cuma görüşürüz!"),
    W("Saturday", "cumartesi", "setırdey", "I don't work on Saturday.", "Cumartesi çalışmam."),
    W("Sunday", "pazar", "sandey", "On Sunday we eat together.", "Pazar günü birlikte yeriz."),
    W("week", "hafta", "viik", "I work five days a week.", "Haftada beş gün çalışırım."),
    W("weekend", "hafta sonu", "viikend", "What do you do at the weekend?", "Hafta sonu ne yaparsın?"),
    W("at", "-de (saatle)", "et", "The film starts at eight.", "Film sekizde başlıyor."),
    W("on", "-de (günle)", "on", "The shop is closed on Sunday.", "Dükkân pazar günü kapalı."),
    W("late", "geç", "leyt", "Sorry, I'm late.", "Özür dilerim, geç kaldım."),
    W("early", "erken", "örli", "I get up early.", "Erken kalkarım.")
  ],
  dialogue: [["A", "Excuse me, what time is it?", "Affedersiniz, saat kaç?"], ["B", "It's quarter to nine.", "Dokuza çeyrek var."], ["A", "Oh no, I'm late! My class starts at nine.", "Eyvah, geç kaldım! Dersim dokuzda başlıyor."], ["B", "Do you have class every day?", "Her gün dersin var mı?"], ["A", "No, only on Monday and Wednesday.", "Hayır, sadece pazartesi ve çarşamba."], ["B", "Good luck! See you at the weekend.", "Kolay gelsin! Hafta sonu görüşürüz."]],
  quiz: [
    { q: "\"half past four\" saat kaçtır?", o: ["4:30", "3:30", "4:15", "4:45"], a: 0, e: "half past four = dördü yarım geçiyor = 4:30." },
    { q: "\"quarter to six\" saat kaçtır?", o: ["5:45", "6:15", "6:45", "5:15"], a: 0, e: "quarter to six = altıya çeyrek var = 5:45." },
    { q: "Boşluğu doldur: \"I work ___ Monday.\"", o: ["on", "in", "at"], a: 0, e: "Günlerle on kullanılır: on Monday." },
    { q: "Boşluğu doldur: \"The film starts ___ eight o'clock.\"", o: ["at", "on", "in"], a: 0, e: "Saatle at kullanılır: at eight o'clock." },
    { q: "Hangisi doğru yazılmış?", o: ["Friday", "friday", "FriDay"], a: 0, e: "Günler İngilizcede büyük harfle başlar: Friday." },
    { q: "Boşluğu doldur: \"I study ___ the morning.\"", o: ["in", "on", "at"], a: 0, e: "Günün bölümleri in ile: in the morning, in the evening. İstisna: at night." }
  ],
  review: ["half past three = 3:30; quarter to four = 3:45.", "at + saat, on + gün, in + ay/yıl/günün bölümü.", "Günler ve aylar büyük harfle: Monday, May."]
},
{
  id: "en-a1-4", title: "Ev ve sıfatlar", no: "At home", icon: "house",
  intro: "Evini anlatmayı, \"there is / there are\" (var) yapısını ve sıfatları öğreniyoruz.",
  notes: [
    { h: "there is / there are", p: "Bir yerde bir şeyin varlığını söylemek için: tekil isimle there is, çoğul isimle there are. Türkçedeki \"var\" kelimesine karşılık gelir.",
      table: [["", "Tekil", "Çoğul"], ["Olumlu", "There is a sofa.", "There are two rooms."], ["Olumsuz", "There isn't a garden.", "There aren't any chairs."], ["Soru", "Is there a lift?", "Are there any shops?"]] },
    { h: "Sıfatlar değişmez", p: "Sıfat ismin önüne gelir ve hiç değişmez: a big house, two big houses. Çoğul isimle bile -s almaz: \"bigs houses\" yanlış." },
    { h: "Yer edatları", p: "in (içinde), on (üstünde), under (altında), next to (yanında), between (arasında). Türkçede ek isimden sonra gelir (masa-da), İngilizcede edat önce: on the table." }
  ],
  tip: "Türkçede \"Evde iki oda var\" deriz. İngilizcede \"There are two rooms in the house.\" Sıra Türkçeden farklı: önce there are, sonra şey, en son yer. \"In the house has two rooms\" yanlıştır.",
  words: [
    W("room", "oda", "ruum", "There are three rooms.", "Üç oda var."),
    W("kitchen", "mutfak", "kiçın", "The kitchen is small.", "Mutfak küçük."),
    W("bathroom", "banyo", "baathruum", "Where is the bathroom?", "Banyo nerede?"),
    W("bedroom", "yatak odası", "bedruum", "The bedroom is upstairs.", "Yatak odası üst katta."),
    W("garden", "bahçe", "gaadın", "Is there a garden?", "Bahçe var mı?"),
    W("there is", "(tekil) var", "deır iz", "There is a sofa in the living room.", "Oturma odasında bir kanepe var.", { note: "kısa: there's" }),
    W("there are", "(çoğul) var", "deır aa", "There are two chairs in the kitchen.", "Mutfakta iki sandalye var."),
    W("big", "büyük", "big", "It's a big flat.", "Büyük bir daire."),
    W("small", "küçük", "smool", "The rooms are small.", "Odalar küçük."),
    W("new", "yeni", "nyuu", "We have a new sofa.", "Yeni bir kanepemiz var."),
    W("old", "eski, yaşlı", "ould", "The house is very old.", "Ev çok eski."),
    W("beautiful", "güzel", "byuutıfıl", "What a beautiful garden!", "Ne güzel bir bahçe!"),
    W("on", "üstünde", "on", "The keys are on the table.", "Anahtarlar masanın üstünde."),
    W("under", "altında", "andır", "The cat is under the bed.", "Kedi yatağın altında."),
    W("next to", "yanında", "nekst tu", "The bathroom is next to the bedroom.", "Banyo yatak odasının yanında.")
  ],
  dialogue: [["A", "Is your new flat big?", "Yeni dairen büyük mü?"], ["B", "No, it's small. There are two rooms and a kitchen.", "Hayır, küçük. İki oda ve bir mutfak var."], ["A", "Is there a garden?", "Bahçe var mı?"], ["B", "No, there isn't. But there is a beautiful park next to the house.", "Hayır, yok. Ama evin yanında güzel bir park var."], ["A", "Nice! And where is the bathroom?", "Güzel! Banyo nerede?"], ["B", "It's next to the bedroom.", "Yatak odasının yanında."]],
  quiz: [
    { q: "\"Mutfakta iki sandalye var.\"", o: ["There are two chairs in the kitchen.", "There is two chairs in the kitchen.", "In the kitchen has two chairs.", "It has two chairs in kitchen."], a: 0, e: "Çoğul isim: there are. Yer en sonda: in the kitchen." },
    { q: "\"iki büyük ev\"", o: ["two big houses", "two bigs houses", "two houses big", "two big house"], a: 0, e: "Sıfat değişmez ve ismin önüne gelir: two big houses." },
    { q: "\"Bahçe var mı?\"", o: ["Is there a garden?", "There is a garden?", "Has a garden?", "Is a garden there is?"], a: 0, e: "Soru: Is there + tekil isim?" },
    { q: "\"Kedi yatağın altında.\"", o: ["The cat is under the bed.", "The cat is on the bed.", "The cat is bed under.", "The cat under the bed."], a: 0, e: "under = altında. Fiil (is) unutulmamalı." },
    { q: "\"next to\" ne demek?", o: ["yanında", "arkasında", "içinde"], a: 0, e: "next to = yanında. behind = arkasında, in = içinde." }
  ],
  review: ["There is + tekil, there are + çoğul.", "Sıfat ismin önünde ve değişmez: two big houses.", "Edat ismin önünde: on the table, under the bed."]
},
{
  id: "en-a1-5", title: "Ulaşım", no: "Getting around", icon: "bus",
  intro: "Ulaşım araçlarını, yol sormayı ve şimdiki zamanı (present continuous) öğreniyoruz.",
  notes: [
    { h: "Şimdiki zaman (present continuous)", p: "Şu anda olan bir şey için: am / is / are + fiil-ing. I'm waiting for the bus. (Otobüsü bekliyorum.) Geniş zaman (I wait) alışkanlık için kullanılır.",
      table: [["Geniş zaman (alışkanlık)", "Şimdiki zaman (şu an)"], ["I take the bus every day.", "I'm taking the bus now."], ["She walks to work.", "She's walking to work."], ["They don't drive.", "They aren't driving."]] },
    { h: "by bus, on foot", p: "Ulaşım aracı by ile söylenir ve a/the almaz: by bus, by train, by car. Yürüyerek: on foot. Bir araca binmek: take the bus, get on the train." },
    { h: "Yol tarifi (emir kipi)", p: "Emir kipi fiilin yalın halidir: Turn left. (Sola dön.) Go straight on. (Düz git.) Take the second right. (İkinci sağdan dön.) Kibar soru: Excuse me, how do I get to the station?" }
  ],
  tip: "Türkçede \"Otobüse biniyorum\" hem alışkanlık hem şu an olabilir. İngilizcede ikisi ayrıdır: I take the bus (her gün) / I'm taking the bus (şu an). Ayrıca \"go with bus\" yanlış, doğrusu: go by bus.",
  words: [
    W("bus", "otobüs", "bas", "I go to work by bus.", "İşe otobüsle giderim.", { note: "çoğul: buses" }),
    W("station", "istasyon", "steyşın", "Where is the station?", "İstasyon nerede?"),
    W("stop", "durak", "stop", "The bus stop is over there.", "Otobüs durağı şurada."),
    W("take", "binmek, almak", "teyk", "I take the train every morning.", "Her sabah trene binerim."),
    W("wait", "beklemek", "veyt", "I'm waiting for the bus.", "Otobüsü bekliyorum.", { note: "wait for + kişi/şey" }),
    W("walk", "yürümek", "vook", "I walk to work.", "İşe yürüyerek giderim.", { note: "l okunmaz" }),
    W("drive", "araba sürmek", "drayv", "Can you drive?", "Araba sürebilir misin?"),
    W("left", "sol, sola", "left", "Turn left at the bank.", "Bankada sola dön."),
    W("right", "sağ, sağa", "rayt", "The station is on the right.", "İstasyon sağda.", { note: "gh okunmaz" }),
    W("straight on", "dümdüz", "streyt on", "Go straight on.", "Düz git."),
    W("near", "yakın", "niır", "Is it near here?", "Buraya yakın mı?"),
    W("far", "uzak", "faa", "The airport is far.", "Havalimanı uzak."),
    W("by", "ile (araç)", "bay", "We go by train.", "Trenle gidiyoruz."),
    W("How do I get to ...?", "... nasıl giderim?", "hau du ay get tu", "How do I get to the station?", "İstasyona nasıl giderim?", { tts: "How do I get to the station?" })
  ],
  dialogue: [["A", "Excuse me, how do I get to the station?", "Affedersiniz, istasyona nasıl giderim?"], ["B", "Go straight on and turn left at the bank.", "Düz gidin ve bankada sola dönün."], ["A", "Is it far?", "Uzak mı?"], ["B", "No, it's near. About five minutes on foot.", "Hayır, yakın. Yürüyerek beş dakika kadar."], ["A", "Thank you! I'm taking the train to London.", "Teşekkürler! Londra'ya trene biniyorum."], ["B", "Have a good trip!", "İyi yolculuklar!"]],
  quiz: [
    { q: "\"Şu an otobüsü bekliyorum.\"", o: ["I'm waiting for the bus.", "I wait the bus now.", "I'm wait for the bus.", "I waiting for the bus."], a: 0, e: "Şu an: am + fiil-ing. wait for + şey." },
    { q: "\"İşe otobüsle giderim.\"", o: ["I go to work by bus.", "I go to work with bus.", "I go to work by the bus.", "I go to work on bus."], a: 0, e: "Ulaşım aracı by ile ve a/the olmadan: by bus." },
    { q: "\"Turn left.\" ne demek?", o: ["Sola dön.", "Sağa dön.", "Düz git.", "Geri dön."], a: 0, e: "turn left = sola dön, turn right = sağa dön." },
    { q: "Hangisi alışkanlık bildirir?", o: ["I take the train every day.", "I'm taking the train now.", "I'm taking the train."], a: 0, e: "Alışkanlık için geniş zaman: I take ... every day." },
    { q: "\"walk\" nasıl okunur?", o: ["[vook] – l okunmaz", "[valk]", "[volk]"], a: 0, e: "walk, talk kelimelerinde l okunmaz." }
  ],
  review: ["Şu an: am/is/are + -ing. Alışkanlık: geniş zaman.", "by bus, by train, on foot.", "Yol tarifi: Turn left. Go straight on."]
},
{
  id: "en-a1-6", title: "Hava ve boş zaman", no: "Weather and free time", icon: "sun",
  intro: "Hava durumunu anlatmayı, hobilerden bahsetmeyi ve ne sıklıkla bir şey yaptığını söylemeyi öğreniyoruz.",
  notes: [
    { h: "Hava durumu", p: "Hava durumu it ile söylenir: It's sunny. It's cold. Şu an yağıyorsa: It's raining. It's snowing. Türkçedeki \"Yağmur yağıyor\" için özne it'tir." },
    { h: "like + -ing", p: "Hoşlanmayı anlatırken like, love, hate fiillerinden sonra fiil -ing alır: I like swimming. She loves reading. \"I like swim\" yanlıştır. (like to swim da doğrudur.)" },
    { h: "Sıklık zarfları", p: "Sıklık zarfı fiilin önüne, ama be fiilinin arkasına gelir: I always walk. She is never late.",
      table: [["Zarf", "Türkçe", "Örnek"], ["always", "her zaman", "I always drink tea."], ["usually", "genellikle", "We usually eat at seven."], ["often", "sık sık", "He often swims."], ["sometimes", "bazen", "I sometimes read."], ["never", "asla, hiç", "She never drinks coffee."]] }
  ],
  tip: "never zaten olumsuzdur; yanına don't gelmez. \"I don't never drink coffee\" yanlış, doğrusu: \"I never drink coffee.\" Türkçedeki \"Hiç içmem\" yapısındaki çift olumsuzluk İngilizcede kullanılmaz.",
  words: [
    W("weather", "hava (durumu)", "vedır", "What's the weather like?", "Hava nasıl?"),
    W("sunny", "güneşli", "sani", "It's sunny today.", "Bugün hava güneşli."),
    W("rain", "yağmur, yağmur yağmak", "reyn", "It's raining.", "Yağmur yağıyor."),
    W("snow", "kar, kar yağmak", "snou", "It often snows in January.", "Ocakta sık sık kar yağar."),
    W("cold", "soğuk", "kould", "It's very cold today.", "Bugün hava çok soğuk."),
    W("warm", "ılık, sıcak", "voom", "It's warm in summer.", "Yazın hava sıcak."),
    W("like", "sevmek, hoşlanmak", "layk", "I like swimming.", "Yüzmeyi severim."),
    W("love", "çok sevmek", "lav", "She loves reading.", "O okumayı çok sever."),
    W("hate", "nefret etmek", "heyt", "I hate cold weather.", "Soğuk havadan nefret ederim."),
    W("always", "her zaman", "oolveyz", "I always walk to work.", "İşe her zaman yürüyerek giderim."),
    W("usually", "genellikle", "yuujuıli", "We usually eat at seven.", "Genellikle yedide yemek yeriz."),
    W("sometimes", "bazen", "samtaymz", "I sometimes play football.", "Bazen futbol oynarım."),
    W("never", "asla, hiç", "nevır", "He never drinks coffee.", "O hiç kahve içmez."),
    W("free time", "boş zaman", "frii taym", "What do you do in your free time?", "Boş zamanında ne yaparsın?"),
    W("swim", "yüzmek", "suim", "Can you swim?", "Yüzebilir misin?")
  ],
  dialogue: [["A", "What's the weather like today?", "Bugün hava nasıl?"], ["B", "It's raining again. I hate rain!", "Yine yağmur yağıyor. Yağmurdan nefret ediyorum!"], ["A", "What do you usually do in your free time?", "Boş zamanında genellikle ne yaparsın?"], ["B", "I like swimming and reading. And you?", "Yüzmeyi ve okumayı severim. Ya sen?"], ["A", "I sometimes play football, but I never swim. The water is too cold!", "Bazen futbol oynarım ama hiç yüzmem. Su çok soğuk!"]],
  quiz: [
    { q: "\"Yağmur yağıyor.\"", o: ["It's raining.", "Rain is.", "It rains now is.", "Is raining."], a: 0, e: "Hava durumu it ile söylenir: It's raining." },
    { q: "\"Okumayı severim.\"", o: ["I like reading.", "I like read.", "I am like reading.", "I likes reading."], a: 0, e: "like + -ing: I like reading." },
    { q: "\"O hiç kahve içmez.\"", o: ["He never drinks coffee.", "He doesn't never drink coffee.", "He drinks never coffee.", "Never he drinks coffee."], a: 0, e: "never fiilden önce gelir ve don't ile kullanılmaz." },
    { q: "\"O asla geç kalmaz.\" (be fiiliyle)", o: ["She is never late.", "She never is late.", "She is late never.", "Never she is late."], a: 0, e: "Sıklık zarfı be fiilinin arkasına gelir: is never." },
    { q: "\"What's the weather like?\" ne demek?", o: ["Hava nasıl?", "Havayı sever misin?", "Hava ne zaman?"], a: 0, e: "What's ... like? = ... nasıl? Burada like \"gibi\" anlamındadır." }
  ],
  review: ["Hava: It's sunny. It's raining.", "like / love / hate + -ing.", "Sıklık zarfı fiilin önünde, be'nin arkasında: I always walk. She is never late."]
}
];
EN_A1.forEach(L => (L.level = "A1"));
COURSES.en.lessons.push(...EN_A1);
