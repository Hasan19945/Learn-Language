import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A1: LessonDef[] = [
{
  id: "a1-1", title: "Aile", no: "Familie", icon: "people",
  intro: "Aileni tanıtmayı ve iyelik sözcüklerini (benim, senin) öğreniyoruz.",
  notes: [
    { h: "İyelik isimden sonra gelir", p: "Norveççede iyelik sözcüğü genellikle belirli isimden sonra gelir: faren min (benim babam), kelimesi kelimesine \"baba-sı benim\". İsim belirli haldedir.",
      table: [["Cinsiyet", "benim", "senin", "Örnek"], ["en", "min", "din", "faren min"], ["ei", "mi", "di", "mora mi"], ["et", "mitt", "ditt", "huset mitt"], ["çoğul", "mine", "dine", "barna mine"]] },
    { h: "hans, hennes, vår, deres", p: "hans (onun, erkek), hennes (onun, kadın) ve deres (onların / sizin) hiç değişmez: faren hans, mora hennes. vår (bizim) değişir: faren vår, huset vårt, barna våre." },
    { h: "ei-kelimeleri", p: "mor, datter, søster dişil kelimelerdir: mora mi / moren min. İki biçim de doğrudur." }
  ],
  tip: "Türkçede \"benim annem\" der, iyeliği hem başta hem sonda (-m) gösteririz. Norveççede tek bir kelime yeter ve isimden sonra gelir: mora mi. \"min mor\" de duyulur ama vurgu içindir.",
  words: [
    N("ei", "mor", "mora", "mødre", "anne", "mur", "Mora mi heter Fatma.", "Annemin adı Fatma."),
    N("en", "far", "faren", "fedre", "baba", "far", "Faren min jobber i Bergen.", "Babam Bergen'de çalışıyor."),
    N("en", "bror", "broren", "brødre", "erkek kardeş", "brur", "Jeg har en bror.", "Bir erkek kardeşim var."),
    N("ei", "søster", "søstera", "søstre", "kız kardeş", "söster", "Søstera mi bor i Tyrkia.", "Kız kardeşim Türkiye'de yaşıyor."),
    N("en", "sønn", "sønnen", "sønner", "oğul", "sön", "Sønnen vår er ti år.", "Oğlumuz on yaşında."),
    N("ei", "datter", "dattera", "døtre", "kız evlat", "datter", "Dattera hennes er student.", "Onun kızı öğrenci."),
    W("foreldre", "anne baba, ebeveynler", "foreldre", "Foreldrene mine bor i Izmir.", "Annemle babam İzmir'de yaşıyor.", { note: "çoğul · belirli: foreldrene" }),
    W("søsken", "kardeşler", "sösken", "Hvor mange søsken har du?", "Kaç kardeşin var?"),
    W("gift", "evli", "yift", "Er du gift?", "Evli misin?"),
    W("samboer", "birlikte yaşanan partner", "sambuer", "Samboeren min er norsk.", "Birlikte yaşadığım partnerim Norveçli.", { note: "Norveç'te çok yaygın" }),
    W("hvor mange", "kaç tane", "vur manne", "Hvor mange barn har dere?", "Kaç çocuğunuz var?")
  ],
  dialogue: [["A", "Har du søsken?", "Kardeşin var mı?"], ["B", "Ja, jeg har en bror og to søstre.", "Evet, bir erkek ve iki kız kardeşim var."], ["A", "Bor de i Norge?", "Norveç'te mi yaşıyorlar?"], ["B", "Nei, de bor i Tyrkia med foreldrene mine.", "Hayır, annemle babamla Türkiye'de yaşıyorlar."], ["A", "Er du gift?", "Evli misin?"], ["B", "Ja. Kona mi heter Elif.", "Evet. Eşimin adı Elif."]],
  quiz: [
    { q: "\"benim babam\"", o: ["faren min", "min faren", "far mitt", "faren mitt"], a: 0, e: "far bir en-kelimesi: belirli hal faren, iyelik min ve isimden sonra gelir." },
    { q: "\"benim evim\"", o: ["huset mitt", "huset min", "huset mi", "mitt hus mitt"], a: 0, e: "hus bir et-kelimesi, bu yüzden mitt: huset mitt." },
    { q: "\"onun (kadın) kızı\"", o: ["dattera hennes", "dattera hans", "dattera henne", "hennes dattera mi"], a: 0, e: "hennes = onun (kadın). hennes ve hans değişmez." },
    { q: "\"benim çocuklarım\"", o: ["barna mine", "barna mitt", "barnet mine", "barn min"], a: 0, e: "Çoğulda mine kullanılır. barn kelimesinin belirli çoğulu barna." },
    { q: "\"Hvor mange søsken har du?\" ne demek?", o: ["Kaç kardeşin var?", "Kardeşlerin nerede?", "Kardeşin evli mi?"], a: 0, e: "hvor mange = kaç tane, søsken = kardeşler." }
  ],
  review: ["İyelik isimden sonra: faren min, huset mitt, barna mine.", "min / mi / mitt / mine isme göre değişir.", "hans, hennes, deres hiç değişmez."]
},
{
  id: "a1-2", title: "Market ve fiyatlar", no: "I butikken", icon: "bag",
  intro: "11'den 100'e kadar sayılar ve markette alışveriş: fiyat sormak, istediğini söylemek.",
  notes: [
    { h: "Sayılar 11–100", p: "20'den sonra onlar önce gelir: 21 = tjueen, 45 = førtifem. Türkçedeki gibi: yirmi bir.",
      table: [["Sayı", "Norveççe", "Okunuş"], ["11", "elleve", "elve"], ["12", "tolv", "tol"], ["13", "tretten", "tretten"], ["15", "femten", "femten"], ["20", "tjue", "şüe"], ["30", "tretti", "tretti"], ["40", "førti", "förti"], ["50", "femti", "femti"], ["60", "seksti", "seksti"], ["70", "sytti", "sütti"], ["80", "åtti", "otti"], ["90", "nitti", "nitti"], ["100", "hundre", "hündre"]] },
    { h: "Kibar istek", p: "\"Jeg vil ha ...\" (... istiyorum) doğrudan ama kabalık sayılmaz. Daha kibar: \"Jeg skal ha ...\" (markette, kafede çok yaygın) ya da \"Kan jeg få ...?\" (... alabilir miyim?)." },
    { h: "Sayılamayan isimler", p: "melk, kaffe, brød gibi kelimelerden önce artikel gerekmez: Jeg kjøper melk. Ama: en kaffe, takk (bir kahve) da günlük dilde kullanılır." }
  ],
  tip: "Türkçede \"kaç para?\" deriz. Norveççede \"Hvor mye koster det?\" (Ne kadar tutuyor?) denir. Kartla ödemek çok yaygındır: \"Kan jeg betale med kort?\"",
  words: [
    W("Hvor mye koster det?", "Bu ne kadar?", "vur müe koster de", "Hvor mye koster osten?", "Peynir ne kadar?"),
    W("koster", "tutar, fiyatı ... olmak", "koster", "Det koster femti kroner.", "Elli kron tutuyor.", { note: "mastar: koste" }),
    W("kjøper", "satın alır", "şöper", "Jeg kjøper brød og melk.", "Ekmek ve süt alıyorum.", { note: "mastar: kjøpe" }),
    W("betaler", "öder", "betaler", "Kan jeg betale med kort?", "Kartla ödeyebilir miyim?", { note: "mastar: betale" }),
    W("Jeg skal ha ...", "... alacağım (sipariş)", "yay skal ha", "Jeg skal ha to kaffe, takk.", "İki kahve alacağım, lütfen."),
    W("Kan jeg få ...?", "... alabilir miyim?", "kan yay fo", "Kan jeg få en pose?", "Bir poşet alabilir miyim?"),
    W("melk", "süt", "melk", "Melken er i kjøleskapet.", "Süt buzdolabında."),
    N("en", "ost", "osten", "oster", "peynir", "ust", "Jeg kjøper en ost.", "Bir peynir alıyorum."),
    N("et", "egg", "egget", "egg", "yumurta", "eg", "Vi trenger seks egg.", "Altı yumurtaya ihtiyacımız var."),
    N("en", "fisk", "fisken", "fisker", "balık", "fisk", "Fisken er fersk.", "Balık taze."),
    W("kjøtt", "et", "şöt", "Jeg spiser ikke svinekjøtt.", "Domuz eti yemem."),
    N("en", "pose", "posen", "poser", "poşet", "puse", "Trenger du pose?", "Poşet ister misin?"),
    W("trenger", "ihtiyacı var", "trenger", "Jeg trenger melk.", "Süte ihtiyacım var.", { note: "mastar: trenge" }),
    W("dyr / billig", "pahalı / ucuz", "dür / billi", "Fisken er dyr, men eggene er billige.", "Balık pahalı ama yumurtalar ucuz.")
  ],
  dialogue: [["A", "Hei! Trenger du pose?", "Merhaba! Poşet ister misin?"], ["B", "Ja, takk. Hvor mye koster det?", "Evet, teşekkürler. Ne kadar tutuyor?"], ["A", "Det blir åttifire kroner.", "Seksen dört kron ediyor."], ["B", "Kan jeg betale med kort?", "Kartla ödeyebilir miyim?"], ["A", "Ja, selvfølgelig.", "Evet, tabii ki."], ["B", "Takk! Ha en fin dag.", "Teşekkürler! İyi günler."]],
  quiz: [
    { q: "47 sayısı hangisi?", o: ["førtisju", "syttifire", "fireogsytti", "førtiseks"], a: 0, e: "Önce onlar, sonra birler: førti + sju = førtisju." },
    { q: "\"tjue\" kaçtır?", o: ["20", "12", "2", "30"], a: 0, e: "tjue = 20. tolv = 12." },
    { q: "Kafede kibar sipariş hangisi?", o: ["Jeg skal ha en kaffe, takk.", "Gi kaffe.", "Kaffe jeg vil."], a: 0, e: "\"Jeg skal ha ...\" sipariş verirken en doğal ifadedir." },
    { q: "\"Kartla ödeyebilir miyim?\"", o: ["Kan jeg betale med kort?", "Kan jeg betaler med kort?", "Jeg kan betale kort?"], a: 0, e: "kan + mastar (betale), soru fiille başlar." },
    { q: "\"Det blir nitti kroner.\" Kaç kron?", o: ["90", "19", "9", "900"], a: 0, e: "nitti = 90, nitten = 19." }
  ],
  review: ["21–99: önce onlar, sonra birler: tjueen, førtifem.", "Sipariş: Jeg skal ha ... / Kan jeg få ...?", "Fiyat: Hvor mye koster det?"]
},
{
  id: "a1-3", title: "Saat ve günler", no: "Tid og dager", icon: "clock",
  intro: "Haftanın günleri, saati sormak ve söylemek. Dikkat: \"halv\" Türkçeden farklı çalışır!",
  notes: [
    { h: "Saat", p: "Hva er klokka? (Saat kaç?) → Klokka er tre. (Saat üç.)",
      table: [["Saat", "Norveççe", "Türkçe"], ["3:00", "klokka tre", "saat üç"], ["3:15", "kvart over tre", "üçü çeyrek geçiyor"], ["2:30", "halv tre", "iki buçuk"], ["2:45", "kvart på tre", "üçe çeyrek var"], ["3:10", "ti over tre", "üçü on geçiyor"], ["2:50", "ti på tre", "üçe on var"]] },
    { h: "Günler küçük harfle", p: "mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag. \"på mandag\" = bu pazartesi, \"på mandager\" = her pazartesi." },
    { h: "Zaman ifadeleri", p: "i dag (bugün), i morgen (yarın), i går (dün), i kveld (bu akşam). Cümle bunlarla başlarsa fiil yine ikinci sırada: I morgen jobber jeg." }
  ],
  tip: "En önemli tuzak: \"halv tre\" 3:30 DEĞİL, 2:30'dur! Norveççe \"üçe yarım var\" der. Randevuya bir saat geç kalmamak için bunu iyi öğren.",
  words: [
    W("Hva er klokka?", "Saat kaç?", "va er klokka", "Unnskyld, hva er klokka?", "Pardon, saat kaç?"),
    W("halv", "buçuk (bir sonraki saate göre)", "hal", "Klokka er halv fire.", "Saat üç buçuk."),
    W("kvart over", "çeyrek geçe", "kvart over", "Toget går kvart over åtte.", "Tren sekizi çeyrek geçe kalkıyor."),
    W("kvart på", "çeyrek kala", "kvart po", "Vi møtes kvart på ni.", "Dokuza çeyrek kala buluşuyoruz."),
    W("mandag", "pazartesi", "mandag", "På mandag begynner kurset.", "Kurs pazartesi başlıyor."),
    W("fredag", "cuma", "fredag", "Jeg jobber ikke på fredag.", "Cuma çalışmıyorum."),
    W("lørdag", "cumartesi", "lördag", "På lørdag skal vi handle.", "Cumartesi alışveriş yapacağız."),
    W("søndag", "pazar", "söndag", "Butikken er stengt på søndag.", "Market pazar günü kapalı."),
    W("i morgen", "yarın", "i morn", "I morgen har jeg norskkurs.", "Yarın Norveççe kursum var."),
    W("i går", "dün", "i gor", "Hvor var du i går?", "Dün neredeydin?"),
    N("ei", "uke", "uka", "uker", "hafta", "üke", "Jeg har kurs to ganger i uka.", "Haftada iki kez kursum var."),
    W("åpen / stengt", "açık / kapalı", "open / stengt", "Er apoteket åpent nå?", "Eczane şimdi açık mı?")
  ],
  dialogue: [["A", "Når begynner kurset?", "Kurs ne zaman başlıyor?"], ["B", "På tirsdag, klokka halv seks.", "Salı günü, saat beş buçukta."], ["A", "Halv seks? Altså 17.30?", "Beş buçuk mu? Yani 17.30?"], ["B", "Ja, nettopp. Og det slutter kvart over sju.", "Evet, aynen. Ve yediyi çeyrek geçe bitiyor."], ["A", "Fint. Vi ses på tirsdag!", "Güzel. Salı görüşürüz!"]],
  quiz: [
    { q: "\"halv tre\" saat kaçtır?", o: ["2:30", "3:30", "3:00", "2:15"], a: 0, e: "halv tre = üçe yarım saat var = 2:30. Türkçe konuşanların en sık yaptığı hata!" },
    { q: "8:45 nasıl söylenir?", o: ["kvart på ni", "kvart over åtte", "halv ni", "kvart over ni"], a: 0, e: "8:45 = dokuza çeyrek var = kvart på ni." },
    { q: "\"Yarın çalışıyorum.\" (i morgen ile başla)", o: ["I morgen jobber jeg.", "I morgen jeg jobber.", "Jobber i morgen jeg."], a: 0, e: "Fiil ikinci sırada kalır: I morgen jobber jeg." },
    { q: "\"på søndager\" ne demek?", o: ["her pazar", "bu pazar", "geçen pazar"], a: 0, e: "Çoğul -er tekrarı gösterir: på søndager = pazarları, her pazar." },
    { q: "Günlerin yazımı hangisi doğru?", o: ["mandag", "Mandag (cümle ortasında)", "MANDAG"], a: 0, e: "Norveççede gün adları küçük harfle yazılır." }
  ],
  review: ["halv tre = 2:30 (üçe yarım var).", "kvart over / kvart på = çeyrek geçe / çeyrek kala.", "Günler küçük harf: på mandag (bu pazartesi), på mandager (her pazartesi)."]
},
{
  id: "a1-4", title: "Ev ve sıfatlar", no: "Hjemme", icon: "house",
  intro: "Evin bölümleri, nerede ne olduğu ve sıfatların isimle uyumu.",
  notes: [
    { h: "Sıfat uyumu", p: "Sıfat ismin cinsiyetine ve sayısına göre ek alır. Türkçede sıfat hiç değişmez; Norveççede değişir.",
      table: [["", "en / ei", "et", "çoğul"], ["belirsiz", "en stor stue", "et stort kjøkken", "store rom"], ["belirli", "den store stua", "det store kjøkkenet", "de store rommene"]] },
    { h: "liten ve gammel", p: "liten düzensizdir: en liten stue, et lite bad, små rom. gammel: et gammelt hus, gamle hus." },
    { h: "Yer bildirme", p: "i stua (salonda), på kjøkkenet (mutfakta), på badet (banyoda), ved siden av (yanında), under (altında). Mutfak ve banyo için på kullanılır." }
  ],
  tip: "Türkçede \"büyük ev\" ile \"büyük evler\" arasında sıfat aynı kalır. Norveççede: et stort hus, store hus. Belirli halde sıfatın önüne den/det/de de gelir: det store huset.",
  words: [
    N("ei", "stue", "stua", "stuer", "oturma odası, salon", "stüe", "Vi ser på TV i stua.", "Salonda televizyon izliyoruz."),
    N("et", "kjøkken", "kjøkkenet", "kjøkken", "mutfak", "şökken", "Kjøkkenet er lite.", "Mutfak küçük."),
    N("et", "soverom", "soverommet", "soverom", "yatak odası", "soverum", "Leiligheten har to soverom.", "Dairede iki yatak odası var."),
    N("et", "bad", "badet", "bad", "banyo", "bad", "Badet er nytt.", "Banyo yeni."),
    N("et", "rom", "rommet", "rom", "oda", "rum", "Rommet er stort.", "Oda büyük."),
    W("stor", "büyük", "stur", "Vi har en stor stue og et stort kjøkken.", "Büyük bir salonumuz ve büyük bir mutfağımız var."),
    W("liten", "küçük", "liten", "Det er et lite bad.", "Küçük bir banyo.", { note: "et lite · çoğul: små" }),
    W("ny", "yeni", "nü", "Vi har et nytt kjøleskap.", "Yeni bir buzdolabımız var."),
    W("gammel", "eski, yaşlı", "gammel", "Huset er gammelt.", "Ev eski."),
    W("ved siden av", "yanında", "ve siden av", "Badet er ved siden av soverommet.", "Banyo yatak odasının yanında."),
    W("Det er ...", "... var (bulunur)", "de er", "Det er to soverom i leiligheten.", "Dairede iki yatak odası var.")
  ],
  dialogue: [["A", "Hvordan er den nye leiligheten?", "Yeni daire nasıl?"], ["B", "Den er fin! Det er en stor stue og to små soverom.", "Güzel! Büyük bir salon ve iki küçük yatak odası var."], ["A", "Og kjøkkenet?", "Ya mutfak?"], ["B", "Kjøkkenet er gammelt, men badet er nytt.", "Mutfak eski ama banyo yeni."]],
  quiz: [
    { q: "\"büyük bir mutfak\" (et kjøkken)", o: ["et stort kjøkken", "et stor kjøkken", "en stor kjøkken", "et store kjøkken"], a: 0, e: "et-kelimelerinde sıfat -t alır: stort." },
    { q: "\"küçük odalar\"", o: ["små rom", "lite rom", "litene rom", "liten rommer"], a: 0, e: "liten düzensizdir; çoğulu små." },
    { q: "\"büyük salon\" (belirli: o büyük salon)", o: ["den store stua", "den stor stua", "store stua den", "det store stua"], a: 0, e: "Belirli hal: den + sıfat-e + belirli isim: den store stua." },
    { q: "\"Mutfakta\" hangisi?", o: ["på kjøkkenet", "i kjøkkenet", "til kjøkkenet"], a: 0, e: "Mutfak ve banyo için på kullanılır: på kjøkkenet, på badet." },
    { q: "\"Huset er ___.\" (eski)", o: ["gammelt", "gammel", "gamle"], a: 0, e: "hus bir et-kelimesi; yüklem sıfatı da uyum gösterir: Huset er gammelt." }
  ],
  review: ["Sıfat: en stor, et stort, store.", "Belirli: den store stua, det store huset, de store rommene.", "på kjøkkenet / på badet, ama i stua."]
},
{
  id: "a1-5", title: "Ulaşım", no: "Transport", icon: "bus",
  intro: "Otobüs, tramvay, tren. Yol sormak ve yardımcı fiiller: må, skal, kan, vil.",
  notes: [
    { h: "Yardımcı fiil + mastar", p: "må (zorunda), skal (-ecek, planlı), kan (-ebilir), vil (ister), bør (-meli, tavsiye). Ardından gelen fiil -r almaz: Jeg må ta bussen." },
    { h: "ta bussen", p: "Bir taşıta binmek \"ta\" (almak) fiiliyle söylenir: ta bussen, ta toget, ta trikken. Belirli hal kullanılır." },
    { h: "Yön sormak", p: "Hvor går bussen? (Otobüs nereye gidiyor?) Når går neste buss? (Bir sonraki otobüs ne zaman?) Hvor må jeg bytte? (Nerede aktarma yapmalıyım?)" }
  ],
  tip: "Türkçede \"otobüse binmek\" deriz. Norveççede \"ta bussen\" (otobüsü almak) denir. \"gå\" yürüyerek gitmek demektir: Jeg går til jobben = işe yürüyerek gidiyorum. Taşıtla gidiyorsan: Jeg tar bussen til jobben.",
  words: [
    N("en", "buss", "bussen", "busser", "otobüs", "büs", "Bussen er forsinket.", "Otobüs gecikmeli."),
    N("en", "trikk", "trikken", "trikker", "tramvay", "trik", "Jeg tar trikken til sentrum.", "Merkeze tramvayla gidiyorum."),
    N("et", "tog", "toget", "tog", "tren", "tog", "Toget går fra Oslo S.", "Tren Oslo Merkez'den kalkıyor."),
    N("en", "holdeplass", "holdeplassen", "holdeplasser", "durak", "holleplas", "Hvor er holdeplassen?", "Durak nerede?"),
    W("må", "zorunda, -meli", "mo", "Jeg må ta bussen.", "Otobüse binmem lazım."),
    W("skal", "-ecek (plan)", "skal", "Vi skal til Bergen i morgen.", "Yarın Bergen'e gideceğiz."),
    W("bytte", "aktarma yapmak, değiştirmek", "bütte", "Du må bytte på Majorstuen.", "Majorstuen'de aktarma yapmalısın."),
    W("neste", "bir sonraki", "neste", "Når går neste buss?", "Bir sonraki otobüs ne zaman?"),
    W("forsinket", "gecikmeli", "foşinket", "Toget er ti minutter forsinket.", "Tren on dakika gecikmeli."),
    W("sentrum", "şehir merkezi", "sentrüm", "Går denne bussen til sentrum?", "Bu otobüs merkeze gidiyor mu?"),
    W("til / fra", "-e / -den", "til / fra", "Fra Oslo til Bergen tar det sju timer.", "Oslo'dan Bergen'e yedi saat sürüyor.")
  ],
  dialogue: [["A", "Unnskyld, går denne bussen til sentrum?", "Pardon, bu otobüs merkeze gidiyor mu?"], ["B", "Nei, du må ta trikken.", "Hayır, tramvaya binmen gerek."], ["A", "Hvor er holdeplassen?", "Durak nerede?"], ["B", "Der borte, ved siden av butikken.", "Şurada, marketin yanında."], ["A", "Når går neste trikk?", "Bir sonraki tramvay ne zaman?"], ["B", "Om fem minutter.", "Beş dakika sonra."]],
  quiz: [
    { q: "\"Otobüse binmem lazım.\"", o: ["Jeg må ta bussen.", "Jeg må tar bussen.", "Jeg må gå bussen.", "Jeg tar må bussen."], a: 0, e: "må + mastar: må ta. Taşıta binmek = ta." },
    { q: "\"Jeg går til jobben.\" ne demek?", o: ["İşe yürüyerek gidiyorum.", "İşe otobüsle gidiyorum.", "İşten geliyorum."], a: 0, e: "gå = yürümek. Taşıtla gidiyorsan: Jeg tar bussen til jobben." },
    { q: "\"Yarın Bergen'e gideceğiz.\" (plan)", o: ["Vi skal til Bergen i morgen.", "Vi skal går til Bergen i morgen.", "Vi til Bergen skal i morgen."], a: 0, e: "skal ile hareket fiili düşebilir: Vi skal til Bergen." },
    { q: "\"om fem minutter\" ne demek?", o: ["beş dakika sonra", "beş dakika önce", "beş dakikadır"], a: 0, e: "om + süre = ... sonra (gelecek)." },
    { q: "Hangi yardımcı fiil \"tavsiye\" bildirir?", o: ["bør", "må", "vil"], a: 0, e: "bør = -meli (tavsiye): Du bør ta toget. må = zorunluluk, vil = istek." }
  ],
  review: ["må / skal / kan / vil / bør + mastar.", "Taşıt: ta bussen / ta toget. gå = yürümek.", "om fem minutter = beş dakika sonra."]
},
{
  id: "a1-6", title: "Hava ve boş zaman", no: "Vær og fritid", icon: "sun",
  intro: "Hava durumu (Norveç'te en sevilen sohbet konusu) ve hobilerden bahsetmek.",
  notes: [
    { h: "Hava: det + fiil", p: "Hava olayları \"det\" ile söylenir: Det regner. (Yağmur yağıyor.) Det snør. (Kar yağıyor.) Det er kaldt. (Hava soğuk.) Türkçedeki gibi öznesiz cümle kurulmaz." },
    { h: "liker å + mastar", p: "Bir şeyi yapmayı sevmek: Jeg liker å gå på tur. å, İngilizcedeki \"to\" gibidir. Bir şeyi sevmek: Jeg liker kaffe." },
    { h: "Sıklık", p: "alltid (her zaman), ofte (sık sık), noen ganger (bazen), sjelden (nadiren), aldri (asla). Fiilden sonra gelir: Jeg går ofte på tur." }
  ],
  tip: "\"Det finnes ikke dårlig vær, bare dårlige klær.\" (Kötü hava yoktur, sadece kötü kıyafet vardır.) Norveçliler her havada \"tur\"a (doğa yürüyüşü) çıkar. \"gå på tur\" yürüyüşe çıkmak demektir.",
  words: [
    N("et", "vær", "været", "vær", "hava (durumu)", "ver", "Hvordan er været i dag?", "Bugün hava nasıl?"),
    W("Det regner.", "Yağmur yağıyor.", "de rayner", "Det regner mye i Bergen.", "Bergen'de çok yağmur yağar."),
    W("Det snør.", "Kar yağıyor.", "de snör", "Det snør i dag!", "Bugün kar yağıyor!"),
    W("kaldt / varmt", "soğuk / sıcak", "kalt / varmt", "Det er kaldt ute.", "Dışarısı soğuk."),
    N("ei", "sol", "sola", "soler", "güneş", "sul", "Sola skinner.", "Güneş parlıyor."),
    W("liker", "sever", "liker", "Jeg liker å lese.", "Okumayı severim.", { note: "mastar: like" }),
    W("gå på tur", "yürüyüşe çıkmak", "go po tür", "Vi går på tur i skogen.", "Ormanda yürüyüşe çıkıyoruz."),
    W("gå på ski", "kayak yapmak", "go po şi", "Liker du å gå på ski?", "Kayak yapmayı sever misin?"),
    W("i helgen", "hafta sonu", "i helgen", "Hva skal du gjøre i helgen?", "Hafta sonu ne yapacaksın?"),
    W("ofte", "sık sık", "ofte", "Jeg spiller ofte fotball.", "Sık sık futbol oynarım."),
    W("aldri", "asla, hiç", "aldri", "Jeg drikker aldri kaffe om kvelden.", "Akşamları asla kahve içmem."),
    W("ute / inne", "dışarıda / içeride", "üte / inne", "Barna leker ute.", "Çocuklar dışarıda oynuyor.")
  ],
  dialogue: [["A", "For et vær! Det regner igjen.", "Ne hava ama! Yine yağmur yağıyor."], ["B", "Ja, men i morgen blir det sol.", "Evet, ama yarın güneşli olacak."], ["A", "Fint! Hva skal du gjøre i helgen?", "Güzel! Hafta sonu ne yapacaksın?"], ["B", "Jeg skal gå på tur. Vil du være med?", "Yürüyüşe çıkacağım. Gelmek ister misin?"], ["A", "Ja, gjerne!", "Evet, memnuniyetle!"]],
  quiz: [
    { q: "\"Yağmur yağıyor.\"", o: ["Det regner.", "Regner.", "Regnet er.", "Det er regner."], a: 0, e: "Hava olaylarında özne olarak det kullanılır: Det regner." },
    { q: "\"Okumayı severim.\"", o: ["Jeg liker å lese.", "Jeg liker lese.", "Jeg liker leser.", "Jeg å liker lese."], a: 0, e: "liker å + mastar." },
    { q: "\"Sık sık yürüyüşe çıkarım.\"", o: ["Jeg går ofte på tur.", "Jeg ofte går på tur.", "Ofte jeg går på tur."], a: 0, e: "ofte gibi zarflar düz cümlede fiilden sonra gelir." },
    { q: "\"Vil du være med?\" ne demek?", o: ["Gelmek / katılmak ister misin?", "Benimle misin?", "Burada mısın?"], a: 0, e: "være med = katılmak, birlikte gelmek." },
    { q: "\"i helgen\" ne demek?", o: ["hafta sonu", "haftada bir", "hafta içi"], a: 0, e: "helg = hafta sonu. i helgen = bu hafta sonu." }
  ],
  review: ["Hava: Det regner / Det snør / Det er kaldt.", "liker å + mastar: Jeg liker å gå på tur.", "Sıklık zarfı fiilden sonra: Jeg går ofte på tur."]
}
];

export default atLevel("A1", A1);
