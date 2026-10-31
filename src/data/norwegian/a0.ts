import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const NO_A0: LessonDef[] = [
{
  id: "l1", title: "Selamlaşma", no: "Hilsener", icon: "chat",
  intro: "Norveççe seslerle ve günlük selamlaşmalarla başlıyoruz. Bu ifadeleri Norveç'te her gün duyacaksın.",
  notes: [
    { h: "Norveç alfabesi", p: "Norveç alfabesinde 29 harf vardır. Türkçede olmayan üç harf: æ, ø, å. Bazı harfler Türkçeden farklı okunur. Aşağıdaki karşılıklar yaklaşıktır; en iyi öğrenme yolu dinlemektir.",
      table: [["Harf", "Yaklaşık ses", "Örnek"], ["æ", "geniş e (\"ev\" kelimesindeki e)", "lærer"], ["ø", "ö", "brød [brö]"], ["å", "o", "nå [no]"], ["y", "ü", "Tyrkia [türkia]"], ["u", "ü ile u arası", "du [dü]"], ["j", "y", "ja [ya]"], ["o", "çoğu zaman u", "god [gu], bor [bur]"]] },
    { h: "Yazıldığı gibi okunmayan harfler", p: "hv- ile başlayan kelimelerde h okunmaz: hva [va], hvordan [vurdan]. Kelime sonundaki -d çoğu zaman okunmaz: god [gu], kveld [kvel]. Doğu Norveç'te rs, \"ş\" gibi okunur: norsk [noşk]." },
    { h: "Günlük kullanım", p: "\"Hei\" her ortamda kullanılır: iş yerinde, okulda, dükkânda. Ayrılırken \"Ha det\" ya da \"Ha det bra\" denir. Norveççede \"lütfen\" anlamına gelen tek bir kelime yoktur; çoğu zaman \"takk\" kullanılır: \"Ja, takk.\" (Evet, lütfen / teşekkürler)." }
  ],
  tip: "Türkçede h harfi her zaman okunur. Norveççede hv- ile başlayan soru kelimelerinde (hva, hvor, hvordan) h sessizdir.",
  words: [
    W("hei", "merhaba", "hey", "Hei, Ayşe!", "Merhaba Ayşe!"),
    W("god morgen", "günaydın", "gu morn", "God morgen! Hvordan har du det?", "Günaydın! Nasılsın?"),
    W("god kveld", "iyi akşamlar", "gu kvel", "God kveld, Mehmet!", "İyi akşamlar Mehmet!"),
    W("ha det", "hoşça kal, görüşürüz", "ha de", "Ha det bra!", "Hoşça kal!"),
    W("takk", "teşekkürler", "tak", "Ja, takk.", "Evet, teşekkürler."),
    W("bra", "iyi", "bra", "Bra, takk.", "İyiyim, teşekkürler."),
    W("unnskyld", "affedersiniz, pardon", "ünşül", "Unnskyld!", "Pardon!"),
    W("ja", "evet", "ya", "Ja, takk.", "Evet, teşekkürler."),
    W("nei", "hayır", "ney", "Nei, takk.", "Hayır, teşekkürler."),
    W("og", "ve", "o", "Bra, takk. Og du?", "İyiyim, teşekkürler. Ya sen?"),
    W("Hvordan har du det?", "Nasılsın?", "vurdan har dü de", "Hei! Hvordan har du det?", "Merhaba! Nasılsın?")
  ],
  dialogue: [["A", "God morgen!", "Günaydın!"], ["B", "God morgen! Hvordan har du det?", "Günaydın! Nasılsın?"], ["A", "Bra, takk. Og du?", "İyiyim, teşekkürler. Ya sen?"], ["B", "Bra, takk.", "İyiyim, teşekkürler."], ["A", "Ha det!", "Görüşürüz!"], ["B", "Ha det bra!", "Hoşça kal!"]],
  quiz: [
    { q: "\"hvordan\" kelimesi nasıl okunur?", o: ["[vurdan] – h okunmaz", "[hvordan] – h ve v okunur", "[hordan] – v okunmaz"], a: 0, e: "hv- ile başlayan kelimelerde h okunmaz. Ayrıca o harfi burada u gibi okunur: [vurdan]." },
    { q: "\"Hvordan har du det?\" sorusuna uygun cevap hangisi?", o: ["Bra, takk.", "Ha det!", "God kveld!", "Nei."], a: 0, e: "\"Nasılsın?\" sorusuna \"Bra, takk.\" (İyiyim, teşekkürler.) diye cevap verilir." },
    { q: "Akşam biriyle karşılaştın. Ne dersin?", o: ["God kveld!", "God morgen!", "Ha det!"], a: 0, e: "\"God kveld\" = iyi akşamlar. \"God morgen\" sabah kullanılır, \"Ha det\" ise ayrılırken." },
    { q: "\"god\" kelimesinin telaffuzu hangisine en yakın?", o: ["[gu]", "[god]", "[got]"], a: 0, e: "Sondaki d okunmaz ve o burada u gibi okunur: god morgen [gu morn]." }
  ],
  review: ["hv- başında h okunmaz: hva [va].", "Sondaki -d çoğu zaman okunmaz: god [gu], kveld [kvel].", "\"Takk\" hem teşekkür hem de kibar bir \"lütfen\" yerine kullanılır."]
},
{
  id: "l2", title: "Ben, sen, o", no: "Pronomen og «er»", icon: "people",
  intro: "Kişi zamirlerini ve en önemli fiil olan \"er\" (olmak) fiilini öğreniyoruz. Bununla ilk tam cümlelerini kuracaksın.",
  notes: [
    { h: "Kişi zamirleri", p: "Türkçedeki \"o\" Norveççede ikiye ayrılır: erkek için han, kadın için hun.",
      table: [["Norveççe", "Türkçe", "Okunuş"], ["jeg", "ben", "yay"], ["du", "sen", "dü"], ["han", "o (erkek)", "han"], ["hun", "o (kadın)", "hün"], ["vi", "biz", "vi"], ["dere", "siz (çoğul)", "dere"], ["de", "onlar", "di"]] },
    { h: "\"er\" her kişide aynıdır", p: "Türkçede ek kişiye göre değişir: öğrenciyim, öğrencisin, öğrenci. Norveççede \"er\" hiç değişmez: jeg er, du er, han er, vi er, de er." },
    { h: "Meslekten önce artikel yok", p: "Meslek söylerken \"en\" kullanılmaz: Jeg er student. Han er lærer." },
    { h: "Evet/hayır soruları fiille başlar", p: "Cümle: Du er student. → Soru: Er du student? Türkçedeki \"mi\" ekinin yerine fiil başa geçer." }
  ],
  tip: "Türkçede özne düşebilir: \"Öğrenciyim.\" Norveççede özne zorunludur: \"Jeg er student.\" Sadece \"Er student\" yanlıştır. Ayrıca Norveç'te öğretmene, doktora, yöneticiye bile \"du\" denir.",
  words: [
    W("jeg", "ben", "yay", "Jeg er student.", "Ben öğrenciyim."),
    W("du", "sen", "dü", "Du er hyggelig.", "Sen naziksin."),
    W("han", "o (erkek)", "han", "Han er lærer.", "O öğretmen."),
    W("hun", "o (kadın)", "hün", "Hun er student.", "O öğrenci."),
    W("vi", "biz", "vi", "Vi er lærere.", "Biz öğretmeniz."),
    W("dere", "siz (çoğul)", "dere", "Er dere studenter?", "Siz öğrenci misiniz?"),
    W("de", "onlar", "di", "De er hyggelige.", "Onlar nazik."),
    W("er", "-dir, olmak (şimdiki zaman)", "er", "Jeg er Ayşe.", "Ben Ayşe'yim."),
    W("student", "öğrenci", "student", "Er du student?", "Öğrenci misin?"),
    W("lærer", "öğretmen", "lerer", "Hun er lærer.", "O öğretmen."),
    W("hyggelig", "hoş, nazik, keyifli", "hügeli", "Han er hyggelig.", "O nazik biri.")
  ],
  dialogue: [["A", "Hei! Jeg er Ayşe. Er du student?", "Merhaba! Ben Ayşe. Öğrenci misin?"], ["B", "Nei, jeg er lærer. Og du?", "Hayır, ben öğretmenim. Ya sen?"], ["A", "Jeg er student.", "Ben öğrenciyim."], ["B", "Hyggelig!", "Memnun oldum!"]],
  quiz: [
    { q: "\"Ben öğrenciyim.\" doğru çevirisi hangisi?", o: ["Jeg er student.", "Er student.", "Jeg student.", "Jeg være student."], a: 0, e: "Özne (jeg) ve fiil (er) zorunludur. Meslekten önce \"en\" kullanılmaz." },
    { q: "\"O (kadın) öğretmen.\"", o: ["Hun er lærer.", "Han er lærer.", "Hun lærer er.", "Hun er en lærer er."], a: 0, e: "Kadın için hun kullanılır. Fiil ikinci sıradadır: Hun er lærer." },
    { q: "\"Öğrenci misin?\" doğru soru hangisi?", o: ["Er du student?", "Du er student?", "Du student er?"], a: 0, e: "Evet/hayır sorularında fiil başa gelir: Er du student?" },
    { q: "Boşluğu doldur: \"Vi ___ lærere.\"", o: ["er", "ere", "erer"], a: 0, e: "\"er\" bütün kişilerde aynıdır: jeg er, vi er, de er." },
    { q: "\"de\" (onlar) nasıl okunur?", o: ["[di]", "[de]", "[dey]"], a: 0, e: "Zamir olan \"de\" [di] diye okunur. \"dere\" (siz) ise [dere] okunur." }
  ],
  review: ["han = o (erkek), hun = o (kadın).", "\"er\" hiç değişmez: jeg er, du er, de er.", "Evet/hayır sorusu fiille başlar: Er du student?"]
},
{
  id: "l3", title: "Tanışma", no: "Å bli kjent", icon: "globe",
  intro: "Adını, nereli olduğunu ve nerede yaşadığını söylemeyi öğreniyoruz. Norveç'te en sık sorulan sorular bunlardır.",
  notes: [
    { h: "Şimdiki zaman: mastar + r", p: "Fiilin mastarına -r eklenir ve bu biçim bütün kişilerde aynıdır. Türkçedeki hem \"geliyorum\" hem \"gelirim\" anlamını taşır.",
      table: [["Mastar", "Şimdiki zaman", "Türkçe"], ["hete", "heter", "adı ... olmak"], ["komme", "kommer", "gelmek"], ["bo", "bor", "oturmak, yaşamak"], ["snakke", "snakker", "konuşmak"]] },
    { h: "Soru kelimesiyle soru", p: "Sıra: soru kelimesi + fiil + özne. Hva heter du? Hvor bor du? \"Nereden\" sorusunda fra cümlenin sonuna gider: Hvor kommer du fra?" },
    { h: "Büyük ve küçük harf", p: "Dil ve milliyet adları küçük harfle yazılır: norsk, tyrkisk. Ülke adları büyük harfle yazılır: Norge, Tyrkia." }
  ],
  tip: "Türkçede \"nereden\" tek kelimedir. Norveççede \"hvor ... fra\" diye ikiye ayrılır: Hvor kommer du fra? Ayrıca \"Jeg snakker Norsk\" yanlıştır; dil adı küçük harfle yazılır: norsk.",
  words: [
    W("heter", "adı ... (olmak)", "heter", "Jeg heter Mehmet.", "Benim adım Mehmet.", { note: "mastar: hete" }),
    W("kommer", "gelir, geliyor", "kommer", "Jeg kommer fra Tyrkia.", "Türkiye'den geliyorum.", { note: "mastar: komme" }),
    W("bor", "oturur, yaşar", "bur", "Jeg bor i Norge.", "Norveç'te yaşıyorum.", { note: "mastar: bo" }),
    W("snakker", "konuşur", "snakker", "Jeg snakker tyrkisk.", "Türkçe konuşuyorum.", { note: "mastar: snakke" }),
    W("hva", "ne", "va", "Hva heter du?", "Adın ne?"),
    W("hvor", "nerede, nereye", "vur", "Hvor bor du?", "Nerede oturuyorsun?"),
    W("fra", "-den, -dan", "fra", "Hun er fra Norge.", "O Norveçli."),
    W("i", "-de, -da (içinde)", "i", "Han bor i Oslo.", "O Oslo'da oturuyor."),
    W("norsk", "Norveççe, Norveçli", "noşk", "Jeg snakker litt norsk.", "Biraz Norveççe konuşuyorum."),
    W("tyrkisk", "Türkçe, Türk", "türkisk", "Snakker du tyrkisk?", "Türkçe konuşuyor musun?"),
    W("Tyrkia", "Türkiye", "türkia", "Jeg kommer fra Tyrkia.", "Türkiye'den geliyorum."),
    W("Norge", "Norveç", "norge", "Vi bor i Norge.", "Norveç'te yaşıyoruz."),
    W("litt", "biraz", "lit", "Ja, litt.", "Evet, biraz."),
    W("nå", "şimdi", "no", "Jeg bor i Oslo nå.", "Şimdi Oslo'da oturuyorum.")
  ],
  dialogue: [["A", "Hva heter du?", "Adın ne?"], ["B", "Jeg heter Mehmet. Og du?", "Benim adım Mehmet. Ya senin?"], ["A", "Jeg heter Kari. Hvor kommer du fra?", "Benim adım Kari. Nerelisin?"], ["B", "Jeg kommer fra Tyrkia. Jeg bor i Oslo nå.", "Türkiye'den geliyorum. Şimdi Oslo'da oturuyorum."], ["A", "Snakker du norsk?", "Norveççe konuşuyor musun?"], ["B", "Ja, litt.", "Evet, biraz."], ["A", "Hyggelig å hilse på deg!", "Tanıştığımıza memnun oldum!"], ["B", "I like måte!", "Ben de memnun oldum!"]],
  quiz: [
    { q: "\"Nerelisin? / Nereden geliyorsun?\" doğru soru hangisi?", o: ["Hvor kommer du fra?", "Hvor du kommer fra?", "Du kommer hvor fra?"], a: 0, e: "Soru kelimesi + fiil + özne: Hvor kommer du fra? \"fra\" sona gider." },
    { q: "\"bor\" fiilinin mastarı hangisi?", o: ["bo", "bore", "borr"], a: 0, e: "Şimdiki zaman = mastar + r. bo → bor." },
    { q: "\"Norveççe konuşuyorum.\"", o: ["Jeg snakker norsk.", "Jeg snakker Norsk.", "Jeg snakke norsk.", "Snakker norsk jeg."], a: 0, e: "Fiil -r alır (snakker) ve dil adı küçük harfle yazılır (norsk)." },
    { q: "\"Hva heter du?\" ne demek?", o: ["Adın ne?", "Nerede oturuyorsun?", "Nasılsın?"], a: 0, e: "hva = ne, heter = adı ... olmak. Kelimesi kelimesine: \"Ne adlanıyorsun?\"" },
    { q: "Boşluğu doldur: \"Jeg bor ___ Norge.\"", o: ["i", "fra", "og"], a: 0, e: "\"i\" = -de/-da. Jeg bor i Norge = Norveç'te yaşıyorum." }
  ],
  review: ["Şimdiki zaman: mastar + r (bo → bor, snakke → snakker).", "Soru: soru kelimesi + fiil + özne. Hvor kommer du fra?", "Dil adları küçük harf (norsk), ülke adları büyük harf (Norge)."]
},
{
  id: "l4", title: "Sayılar 0–10", no: "Tall", icon: "num",
  intro: "0'dan 10'a kadar sayıları, yaş sormayı ve \"har\" (sahip olmak) fiilini öğreniyoruz.",
  notes: [
    { h: "Sayılar", p: "7 için iki biçim de doğrudur: sju ve syv.",
      table: [["Sayı", "Norveççe", "Okunuş"], ["0", "null", "nül"], ["1", "en", "en"], ["2", "to", "tu"], ["3", "tre", "tre"], ["4", "fire", "fire"], ["5", "fem", "fem"], ["6", "seks", "seks"], ["7", "sju / syv", "şü / süv"], ["8", "åtte", "otte"], ["9", "ni", "ni"], ["10", "ti", "ti"]] },
    { h: "en mi, ett mi?", p: "Sayarken 1 = en. Ama et-kelimelerinin önünde ett yazılır: ett barn (bir çocuk). en ve et cinsiyetlerini bir sonraki derste göreceksin." },
    { h: "Yaş söylemek", p: "Yaş \"er\" ile söylenir: Jeg er åtte år. (Sekiz yaşındayım.) Soru: Hvor gammel er du? Birden fazla kişi için: Hvor gamle er de?" }
  ],
  tip: "Türkçede sayıdan sonra isim tekil kalır: iki araba. Norveççede çoğul olur: to biler. barn ve år kelimeleri çoğulda değişmez: to barn, fem år.",
  words: [
    W("null", "sıfır", "nül", "null, en, to", "sıfır, bir, iki"),
    W("en", "bir", "en", "en, to, tre", "bir, iki, üç"),
    W("to", "iki", "tu", "Jeg har to barn.", "İki çocuğum var."),
    W("tre", "üç", "tre", "Vi er tre.", "Üç kişiyiz."),
    W("fire", "dört", "fire", "Hun er fire år.", "O dört yaşında."),
    W("fem", "beş", "fem", "De er fem og åtte år.", "Onlar beş ve sekiz yaşında."),
    W("seks", "altı", "seks", "Han er seks år.", "O altı yaşında."),
    W("sju", "yedi", "şü", "Hun er sju år.", "O yedi yaşında.", { note: "syv da doğru" }),
    W("åtte", "sekiz", "otte", "Jeg er åtte år.", "Sekiz yaşındayım."),
    W("ni", "dokuz", "ni", "Han er ni år.", "O dokuz yaşında."),
    W("ti", "on", "ti", "Vi er ti.", "On kişiyiz."),
    W("har", "var, sahip (olmak)", "har", "Jeg har to barn.", "İki çocuğum var.", { note: "mastar: ha" }),
    N("et", "barn", "barnet", "barn", "çocuk", "barn", "Har du barn?", "Çocuğun var mı?"),
    N("et", "år", "året", "år", "yıl, yaş", "or", "Hun er seks år.", "O altı yaşında."),
    W("Hvor gammel er du?", "Kaç yaşındasın?", "vur gammel er dü", "Hvor gammel er du?", "Kaç yaşındasın?")
  ],
  dialogue: [["A", "Har du barn?", "Çocuğun var mı?"], ["B", "Ja, jeg har to barn.", "Evet, iki çocuğum var."], ["A", "Hvor gamle er de?", "Kaç yaşındalar?"], ["B", "De er fem og åtte år.", "Beş ve sekiz yaşındalar."]],
  quiz: [
    { q: "3 + 4 = ?", o: ["sju", "seks", "åtte", "fem"], a: 0, e: "3 + 4 = 7 = sju (ya da syv)." },
    { q: "\"sju\" kelimesinin diğer doğru biçimi hangisi?", o: ["syv", "sjuv", "seven"], a: 0, e: "7 için hem sju hem syv doğrudur." },
    { q: "Boşluğu doldur: \"Jeg ___ åtte år.\" (Sekiz yaşındayım.)", o: ["er", "har", "bor"], a: 0, e: "Yaş \"er\" ile söylenir: Jeg er åtte år." },
    { q: "\"Hvor gamle er de?\" ne demek?", o: ["Kaç yaşındalar?", "Kaç çocukları var?", "Nerede oturuyorlar?"], a: 0, e: "Hvor gammel = kaç yaşında. Birden fazla kişi için gamle kullanılır." },
    { q: "\"bir çocuk\" doğru yazımı hangisi?", o: ["ett barn", "en barn", "et barnet"], a: 0, e: "barn bir et-kelimesidir. Sayı olarak 1 söylerken et-kelimelerinin önünde ett yazılır: ett barn." }
  ],
  review: ["7 = sju ya da syv.", "Yaş: Jeg er ... år. Soru: Hvor gammel er du?", "har = var / sahip: Jeg har to barn."]
},
{
  id: "l5", title: "İsimler: en, ei, et", no: "Substantiv", icon: "house", pack: "words",
  intro: "Norveççe isimlerin cinsiyeti, belirli hali ve çoğulu. Türkçeye en yabancı konu budur ama bir kuralı Türkçeye çok benzer.",
  notes: [
    { h: "Üç cinsiyet", p: "Her ismin bir cinsiyeti vardır: en (eril), ei (dişil), et (nötr). Türkçede böyle bir şey yok; kelimeyi her zaman artikeliyle birlikte ezberle: en bil, ei jente, et hus." },
    { h: "Belirli hal kelimenin sonuna eklenir", p: "Türkçedeki ekler gibi, belirlilik kelimenin sonuna gelir: en bil → bilen (araba → o araba). -et ile biten belirli hallerde t okunmaz: huset [hüse].",
      table: [["Cinsiyet", "Belirsiz", "Belirli", "Çoğul"], ["en", "en bil", "bilen", "biler"], ["ei", "ei jente", "jenta", "jenter"], ["et", "et eple", "eplet", "epler"], ["et (tek hece)", "et hus", "huset", "hus"]] },
    { h: "Çoğul", p: "Çoğul çoğunlukla -er ile yapılır: biler, jenter. Tek heceli et-kelimeleri çoğulda değişmez: hus → hus, barn → barn." },
    { h: "ei-kelimeleri", p: "Bokmål'da dişil kelimeler en ile de kullanılabilir: en jente, jenten. ei jente, jenta da doğrudur. İkisini de duyacaksın." },
    { h: "Ne zaman belirli?", p: "Bir şeyden ilk kez söz ederken belirsiz: Det er et hus. (Bu bir ev.) Sonra bilinen şey için belirli: Bor du i huset? (O evde mi oturuyorsun?)" }
  ],
  tip: "Türkçede \"bir\" çoğu zaman düşer: \"Araba aldım.\" Norveççede tekil sayılabilen isimden önce genellikle en/ei/et gerekir: Jeg har en bil.",
  words: [
    N("en", "gutt", "gutten", "gutter", "oğlan, erkek çocuk", "güt", "Gutten heter Ali.", "Oğlanın adı Ali."),
    N("ei", "jente", "jenta", "jenter", "kız, kız çocuk", "yente", "Jenta er sju år.", "Kız yedi yaşında."),
    N("et", "hus", "huset", "hus", "ev", "hüs", "Det er et hus.", "Bu bir ev."),
    N("en", "bil", "bilen", "biler", "araba", "bil", "Jeg har en bil.", "Bir arabam var."),
    N("en", "jobb", "jobben", "jobber", "iş", "yob", "Jeg har en jobb i Oslo.", "Oslo'da bir işim var."),
    N("et", "eple", "eplet", "epler", "elma", "eple", "Det er et eple.", "Bu bir elma."),
    N("en", "venn", "vennen", "venner", "arkadaş", "ven", "Han er en venn.", "O bir arkadaş."),
    N("en", "dag", "dagen", "dager", "gün", "dag", "Dagen er fin.", "Gün güzel."),
    W("Det er ...", "Bu (bir) ... / O ...", "de er", "Det er en bil.", "Bu bir araba.", { tts: "Det er" }),
    W("med", "ile", "me", "Jeg bor med en venn.", "Bir arkadaşla oturuyorum."),
    W("der", "orada", "der", "Bor du der?", "Orada mı oturuyorsun?")
  ],
  dialogue: [["A", "Hva er det?", "Bu ne?"], ["B", "Det er et hus.", "Bu bir ev."], ["A", "Bor du i huset?", "O evde mi oturuyorsun?"], ["B", "Ja. Jeg bor der med to barn, en gutt og ei jente.", "Evet. Orada iki çocukla oturuyorum, bir oğlan ve bir kız."]],
  quiz: [
    { q: "\"huset\" ne demek?", o: ["ev (belirli: o ev)", "bir ev", "evler"], a: 0, e: "-et belirli hal ekidir: et hus (bir ev) → huset (o ev). Sondaki t okunmaz: [hüse]." },
    { q: "\"en bil\" kelimesinin belirli hali hangisi?", o: ["bilen", "en bilen", "biler", "bilet"], a: 0, e: "en-kelimelerinde belirli hal -en ekiyle yapılır ve artikel düşer: bilen." },
    { q: "\"et hus\" kelimesinin çoğulu hangisi?", o: ["hus", "huser", "huset"], a: 0, e: "Tek heceli et-kelimeleri çoğulda değişmez: et hus → to hus." },
    { q: "\"ei jente\" kelimesinin belirli hali hangisi?", o: ["jenta", "jenter", "ei jenta", "jentet"], a: 0, e: "ei-kelimelerinde belirli hal -a ile yapılır: jenta. \"jenten\" da doğrudur, ama bu seçeneklerde yok." },
    { q: "Norveççede belirlilik eki kelimenin neresine gelir?", o: ["Sonuna, Türkçedeki ekler gibi", "Başına, ayrı bir kelime olarak", "Fiilin sonuna"], a: 0, e: "bil → bilen, hus → huset. Tıpkı Türkçede kelimenin sonuna ek gelmesi gibi." },
    { q: "\"Bir arabam var.\"", o: ["Jeg har en bil.", "Jeg har bil en.", "Jeg har bilen en."], a: 0, e: "Belirsiz artikel ismin önüne gelir: en bil. Fiil ikinci sırada: Jeg har en bil." }
  ],
  review: ["Kelimeyi artikeliyle ezberle: en bil, ei jente, et hus.", "Belirli hal sona eklenir: bilen, jenta, huset.", "Çoğul çoğunlukla -er; tek heceli et-kelimeleri değişmez: hus."]
},
{
  id: "l6", title: "Temel fiiller ve söz dizimi", no: "Verb og ordstilling", icon: "arrow", pack: "sentences",
  intro: "Her gün kullanacağın fiiller, olumsuzluk (ikke) ve Norveççenin en önemli kuralı: fiil ikinci sırada.",
  notes: [
    { h: "Fiil ikinci sırada (V2)", p: "Düz cümlede fiil her zaman ikinci sıradadır. Cümle bir zaman ifadesiyle başlarsa özne fiilden sonra gelir. Türkçede ise fiil sondadır.",
      table: [["1", "2 (fiil)", "Devamı"], ["Jeg", "lærer", "norsk i dag."], ["I dag", "lærer", "jeg norsk."]] },
    { h: "Olumsuzluk: ikke", p: "ikke fiilden hemen sonra gelir: Jeg forstår ikke. Türkçede olumsuzluk fiilin içindedir (anla-mı-yorum); Norveççede ayrı bir kelimedir." },
    { h: "kan / vil + mastar", p: "kan (-ebilmek) ve vil (istemek) fiillerinden sonra ikinci fiil mastar halinde, -r almadan gelir: Kan du snakke saktere? Vil du spise middag?" },
    { h: "lærer: iki anlam", p: "en lærer = öğretmen (isim). lærer = öğrenir (fiil). Hangisi olduğu cümleden anlaşılır: Han er lærer. / Han lærer norsk." }
  ],
  tip: "Türkçe konuşanların en sık hatası: \"I dag jeg jobber.\" Doğrusu: \"I dag jobber jeg.\" Fiil ikinci sırada kalmalı.",
  words: [
    W("går", "gider, yürür", "gor", "Jeg går på jobb.", "İşe gidiyorum.", { note: "mastar: gå" }),
    W("spiser", "yer", "spiser", "Vi spiser middag.", "Akşam yemeği yiyoruz.", { note: "mastar: spise" }),
    W("drikker", "içer", "drikker", "Hun drikker kaffe.", "O kahve içiyor.", { note: "mastar: drikke" }),
    W("lærer", "öğrenir", "lerer", "Jeg lærer norsk.", "Norveççe öğreniyorum.", { note: "fiil · mastar: lære" }),
    W("jobber", "çalışır", "yobber", "Han jobber i Oslo.", "O Oslo'da çalışıyor.", { note: "mastar: jobbe" }),
    W("forstår", "anlar", "foştor", "Forstår du?", "Anlıyor musun?", { note: "mastar: forstå" }),
    W("kan", "-ebilir", "kan", "Kan du snakke saktere?", "Daha yavaş konuşabilir misin?"),
    W("vil", "ister", "vil", "Vil du spise middag?", "Akşam yemeği yemek ister misin?"),
    W("ikke", "değil, -me/-ma", "ikke", "Jeg forstår ikke.", "Anlamıyorum."),
    W("i dag", "bugün", "i dag", "I dag jobber jeg.", "Bugün çalışıyorum."),
    W("i kveld", "bu akşam", "i kvel", "Jeg jobber i kveld.", "Bu akşam çalışıyorum."),
    N("en", "middag", "middagen", "middager", "akşam yemeği", "midda", "Middagen er bra.", "Akşam yemeği güzel."),
    W("kaffe", "kahve", "kaffe", "Kaffe, takk.", "Kahve, lütfen."),
    W("sammen", "birlikte", "sammen", "Vi spiser sammen.", "Birlikte yiyoruz."),
    W("gjerne", "memnuniyetle, seve seve", "yerne", "Ja, gjerne!", "Evet, memnuniyetle!"),
    W("saktere", "daha yavaş", "saktere", "Kan du snakke saktere?", "Daha yavaş konuşabilir misin?")
  ],
  dialogue: [["A", "Jobber du i dag?", "Bugün çalışıyor musun?"], ["B", "Nei, jeg jobber ikke i dag. I dag lærer jeg norsk.", "Hayır, bugün çalışmıyorum. Bugün Norveççe öğreniyorum."], ["A", "Så bra! Vil du spise middag sammen i kveld?", "Ne güzel! Bu akşam birlikte yemek yemek ister misin?"], ["B", "Unnskyld, kan du snakke saktere?", "Pardon, daha yavaş konuşabilir misin?"], ["A", "Vil du – spise middag – sammen?", "Birlikte – yemek yemek – ister misin?"], ["B", "Ja, gjerne!", "Evet, memnuniyetle!"]],
  quiz: [
    { q: "\"Anlamıyorum.\"", o: ["Jeg forstår ikke.", "Jeg ikke forstår.", "Ikke jeg forstår.", "Jeg forstår nei."], a: 0, e: "ikke fiilden hemen sonra gelir: Jeg forstår ikke." },
    { q: "\"Bugün çalışıyorum.\" (i dag ile başla)", o: ["I dag jobber jeg.", "I dag jeg jobber.", "Jobber i dag jeg."], a: 0, e: "V2 kuralı: fiil ikinci sırada. Başta \"i dag\" varsa özne fiilden sonra gelir." },
    { q: "Boşluğu doldur: \"Hun ___ kaffe.\" (içmek)", o: ["drikker", "drikke", "spiser"], a: 0, e: "Şimdiki zaman = mastar + r: drikke → drikker. spiser \"yer\" demektir." },
    { q: "\"Kan du snakke saktere?\" cümlesinde snakke neden -r almıyor?", o: ["kan'dan sonra fiil mastar halinde gelir", "Soru cümlelerinde -r düşer", "du ile -r kullanılmaz"], a: 0, e: "kan + mastar: kan snakke, kan forstå. -r sadece çekimli fiile gelir (kan)." },
    { q: "\"Han lærer norsk.\" cümlesinde lærer ne demek?", o: ["öğrenir", "öğretmen", "öğretir"], a: 0, e: "Burada lærer fiildir: öğrenir. \"Han er lærer\" deseydi \"o öğretmen\" olurdu." }
  ],
  review: ["Fiil ikinci sırada: I dag lærer jeg norsk.", "ikke fiilden sonra: Jeg forstår ikke.", "kan + mastar: Kan du snakke saktere?"]
}
];

export default atLevel("A0", NO_A0);
