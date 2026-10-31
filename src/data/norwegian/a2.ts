import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const A2: LessonDef[] = [
{
  id: "a2-1", title: "Geçmiş zaman", no: "Preteritum", icon: "clock",
  intro: "\"Hafta sonu ne yaptın?\" Geçmişte olanları anlatmak için di'li geçmiş zaman (preteritum).",
  notes: [
    { h: "Düzenli fiiller", p: "Çoğu fiil -et ya da -te alır. Hangisini alacağı kelimeyle birlikte ezberlenir.",
      table: [["Mastar", "Preteritum", "Türkçe"], ["jobbe", "jobbet", "çalıştı"], ["snakke", "snakket", "konuştu"], ["spise", "spiste", "yedi"], ["kjøpe", "kjøpte", "aldı"], ["bo", "bodde", "oturdu"], ["prøve", "prøvde", "denedi"]] },
    { h: "Düzensiz fiiller", p: "En sık kullanılanlar düzensizdir ve ezberlenmelidir.",
      table: [["Mastar", "Preteritum", "Türkçe"], ["være", "var", "idi, oldu"], ["ha", "hadde", "vardı"], ["gå", "gikk", "gitti"], ["komme", "kom", "geldi"], ["se", "så", "gördü"], ["gjøre", "gjorde", "yaptı"], ["si", "sa", "dedi"], ["ta", "tok", "aldı"]] },
    { h: "Kişiye göre değişmez", p: "Şimdiki zaman gibi: jeg var, du var, de var. Türkçedeki -dım/-dın/-dı ekleri yerine tek biçim." }
  ],
  tip: "-et biçimleri (jobbet) günlük konuşmada sık sık -a ile de söylenir/yazılır: jobba, snakka. İkisi de doğrudur; resmi yazıda -et daha yaygındır.",
  words: [
    W("var", "idi, oldu (være)", "var", "Jeg var syk i går.", "Dün hastaydım."),
    W("hadde", "vardı (ha)", "hadde", "Vi hadde en fin helg.", "Güzel bir hafta sonu geçirdik."),
    W("gikk", "gitti (gå)", "yik", "Jeg gikk på kino.", "Sinemaya gittim."),
    W("kom", "geldi (komme)", "kom", "Han kom til Norge i fjor.", "Geçen yıl Norveç'e geldi."),
    W("gjorde", "yaptı (gjøre)", "yure", "Hva gjorde du i helgen?", "Hafta sonu ne yaptın?"),
    W("så", "gördü, izledi (se)", "so", "Vi så en film.", "Bir film izledik."),
    W("spiste", "yedi (spise)", "spiste", "Vi spiste middag hos venner.", "Arkadaşlarda akşam yemeği yedik."),
    W("kjøpte", "aldı (kjøpe)", "şöpte", "Jeg kjøpte nye sko.", "Yeni ayakkabı aldım."),
    W("jobbet", "çalıştı (jobbe)", "yobbet", "Hun jobbet hele dagen.", "Bütün gün çalıştı."),
    W("i fjor", "geçen yıl", "i fjur", "I fjor bodde jeg i Trondheim.", "Geçen yıl Trondheim'da oturuyordum."),
    W("for ... siden", "... önce", "for ... siden", "Jeg kom for to år siden.", "İki yıl önce geldim."),
    W("forrige uke", "geçen hafta", "forrie üke", "Forrige uke var jeg syk.", "Geçen hafta hastaydım.")
  ],
  dialogue: [["A", "Hva gjorde du i helgen?", "Hafta sonu ne yaptın?"], ["B", "På lørdag gikk jeg på tur, og om kvelden så vi en film.", "Cumartesi yürüyüşe çıktım, akşam da bir film izledik."], ["A", "Hyggelig! Var det kaldt?", "Ne güzel! Soğuk muydu?"], ["B", "Ja, men vi hadde varme klær.", "Evet, ama sıcak kıyafetlerimiz vardı."], ["A", "Jeg jobbet hele helgen.", "Ben bütün hafta sonu çalıştım."]],
  quiz: [
    { q: "\"gå\" fiilinin preteritum biçimi?", o: ["gikk", "gådde", "gått", "gikket"], a: 0, e: "gå düzensizdir: gå → gikk." },
    { q: "\"Dün hastaydım.\"", o: ["Jeg var syk i går.", "Jeg er syk i går.", "Jeg vært syk i går.", "I går jeg var syk."], a: 0, e: "være → var. \"I går\" ile başlarsan: I går var jeg syk." },
    { q: "\"İki yıl önce geldim.\"", o: ["Jeg kom for to år siden.", "Jeg kom to år før.", "Jeg kommer for to år siden."], a: 0, e: "... önce = for ... siden; komme → kom." },
    { q: "\"kjøpe\" fiilinin preteritum biçimi?", o: ["kjøpte", "kjøpet", "kjøpde", "kjøpt"], a: 0, e: "kjøpe -te alır: kjøpte. (kjøpt ise sıfat-fiil / perfektum biçimidir.)" },
    { q: "\"Hva gjorde du?\" ne demek?", o: ["Ne yaptın?", "Ne yapıyorsun?", "Ne yapacaksın?"], a: 0, e: "gjøre → gjorde (geçmiş zaman)." }
  ],
  review: ["Düzenli: -et (jobbet) ya da -te (spiste).", "Düzensiz: var, hadde, gikk, kom, så, gjorde, sa, tok.", "for ... siden = ... önce; i fjor = geçen yıl."]
},
{
  id: "a2-2", title: "Doktorda", no: "Hos legen", icon: "heart",
  intro: "Aile hekiminden randevu almak, şikâyetini anlatmak ve eczanede konuşmak.",
  notes: [
    { h: "Norveç'te sağlık sistemi", p: "Herkesin bir fastlege'si (aile hekimi) vardır. Randevu = time: \"bestille time\". Acil ama hayati olmayan durumlarda legevakt (nöbetçi klinik, 116 117), hayati acil durumda 113 aranır." },
    { h: "Ağrı: ha vondt i ...", p: "Jeg har vondt i hodet. (Başım ağrıyor.) Kelimesi kelimesine: \"başta acım var\". Vücut bölümü belirli haldedir: hodet, magen, ryggen, halsen." },
    { h: "Ne zamandan beri?", p: "Hvor lenge har du hatt vondt? (Ne zamandır ağrın var?) — I tre dager. (Üç gündür.)" }
  ],
  tip: "Norveççede \"time\" saat değil, randevudur! \"Jeg har time hos legen klokka ti\" = Saat onda doktor randevum var. Saat (60 dakika) da time'dır, ama \"randevu\" anlamı çok yaygın.",
  words: [
    N("en", "lege", "legen", "leger", "doktor", "lege", "Jeg må gå til legen.", "Doktora gitmem gerek."),
    N("en", "fastlege", "fastlegen", "fastleger", "aile hekimi", "fastlege", "Hvem er fastlegen din?", "Aile hekimin kim?"),
    N("en", "time", "timen", "timer", "randevu; saat (süre)", "time", "Jeg vil bestille time.", "Randevu almak istiyorum."),
    W("bestille time", "randevu almak", "bestille time", "Kan jeg bestille time i dag?", "Bugün için randevu alabilir miyim?"),
    W("ha vondt i ...", "... ağrısı olmak", "ha vunt i", "Jeg har vondt i magen.", "Karnım ağrıyor."),
    W("syk", "hasta", "sük", "Jeg er syk og kan ikke jobbe.", "Hastayım, çalışamam."),
    N("en", "feber", "feberen", "febere", "ateş", "feber", "Barnet har feber.", "Çocuğun ateşi var."),
    N("en", "resept", "resepten", "resepter", "reçete", "resept", "Legen skrev en resept.", "Doktor bir reçete yazdı."),
    N("et", "apotek", "apoteket", "apotek", "eczane", "aputek", "Du får medisinen på apoteket.", "İlacı eczaneden alırsın."),
    N("en", "legevakt", "legevakten", "legevakter", "nöbetçi klinik", "legevakt", "Ring legevakten om natten.", "Gece nöbetçi kliniği ara."),
    W("hodet / magen / ryggen", "baş / karın / sırt (belirli)", "hode / magen / rüggen", "Jeg har vondt i ryggen.", "Sırtım ağrıyor."),
    W("Hvor lenge ...?", "Ne kadar zamandır / ne kadar süre?", "vur lenge", "Hvor lenge har du hatt feber?", "Ne zamandır ateşin var?")
  ],
  dialogue: [["A", "Legekontoret, hei.", "Doktor muayenehanesi, merhaba."], ["B", "Hei, jeg vil gjerne bestille time. Jeg har vondt i halsen.", "Merhaba, randevu almak istiyorum. Boğazım ağrıyor."], ["A", "Hvor lenge har du hatt vondt?", "Ne zamandır ağrın var?"], ["B", "I fire dager. Og jeg har feber.", "Dört gündür. Ve ateşim var."], ["A", "Kan du komme i morgen klokka ti?", "Yarın saat onda gelebilir misin?"], ["B", "Ja, det passer fint. Takk!", "Evet, çok uygun. Teşekkürler!"]],
  quiz: [
    { q: "\"Başım ağrıyor.\"", o: ["Jeg har vondt i hodet.", "Jeg har hodet vondt.", "Hodet mitt er vondt i.", "Jeg er vondt hode."], a: 0, e: "ha vondt i + belirli vücut bölümü: Jeg har vondt i hodet." },
    { q: "\"Jeg har time klokka ni.\" Burada time ne demek?", o: ["randevu", "saat (süre)", "zaman"], a: 0, e: "Bu cümlede time randevudur: Saat dokuzda randevum var." },
    { q: "Hayati acil bir durumda Norveç'te hangi numara aranır?", o: ["113", "112", "110"], a: 0, e: "113 = ambulans / tıbbi acil. 112 polis, 110 itfaiyedir." },
    { q: "\"Ne zamandır ateşin var?\"", o: ["Hvor lenge har du hatt feber?", "Når har du feber?", "Hvor mye feber har du?"], a: 0, e: "Hvor lenge = ne kadar süredir; perfektum (har hatt) kullanılır." },
    { q: "Reçeteli ilacı nereden alırsın?", o: ["apoteket", "legevakten", "butikken"], a: 0, e: "apotek = eczane." }
  ],
  review: ["bestille time = randevu almak; time = randevu.", "Jeg har vondt i hodet/magen/ryggen.", "Acil: 113. Nöbetçi klinik: legevakt (116 117)."]
},
{
  id: "a2-3", title: "Deneyimler", no: "Perfektum", icon: "check",
  intro: "\"har + fiil\" (perfektum): deneyimler ve hâlâ süren durumlar. Türkçeden çok farklı çalışır.",
  notes: [
    { h: "Yapı: har + partisip", p: "Jeg har bodd i Norge i tre år. Partisip biçimleri de ezberlenir.",
      table: [["Mastar", "Preteritum", "Perfektum"], ["jobbe", "jobbet", "har jobbet"], ["spise", "spiste", "har spist"], ["bo", "bodde", "har bodd"], ["være", "var", "har vært"], ["gå", "gikk", "har gått"], ["se", "så", "har sett"], ["gjøre", "gjorde", "har gjort"], ["lære", "lærte", "har lært"]] },
    { h: "Preteritum mu perfektum mu?", p: "Belirli bir geçmiş zaman söyleniyorsa (i går, i fjor, for to år siden) → preteritum: Jeg kom i 2022. Zaman belirtilmiyorsa ya da durum şimdiye kadar sürüyorsa → perfektum: Har du vært i Bergen? Jeg har bodd her i tre år." },
    { h: "i + süre", p: "Hâlâ devam eden durum: Jeg har bodd her i tre år. (Üç yıldır burada oturuyorum.)" }
  ],
  tip: "Türkçede \"Üç yıldır Norveç'te yaşıyorum\" şimdiki zamanla söylenir. Norveççede perfektum gerekir: \"Jeg har bodd i Norge i tre år.\" \"Jeg bor i Norge i tre år\" yanlıştır.",
  words: [
    W("har bodd", "oturdu / -dır oturuyor", "har bud", "Jeg har bodd i Oslo i to år.", "İki yıldır Oslo'da oturuyorum."),
    W("har vært", "bulundu, gitti (deneyim)", "har vert", "Har du vært i Tromsø?", "Hiç Tromsø'ya gittin mi?"),
    W("har lært", "öğrendi", "har lert", "Jeg har lært mye norsk.", "Çok Norveççe öğrendim."),
    W("har sett", "gördü", "har set", "Har du sett nordlyset?", "Kuzey ışıklarını gördün mü?"),
    W("har gjort", "yaptı", "har yurt", "Har du gjort leksene?", "Ödevlerini yaptın mı?"),
    W("allerede", "zaten, çoktan", "allerede", "Jeg har allerede spist.", "Zaten yemek yedim."),
    W("ennå ikke", "henüz ... değil", "enno ikke", "Jeg har ikke fått svar ennå.", "Henüz cevap almadım."),
    W("noen gang", "hiç (deneyim sorusu)", "nuen gang", "Har du noen gang gått på ski?", "Hiç kayak yaptın mı?"),
    W("aldri", "hiç, asla", "aldri", "Jeg har aldri vært i Nord-Norge.", "Kuzey Norveç'e hiç gitmedim."),
    W("siden", "-den beri", "siden", "Jeg har bodd her siden 2022.", "2022'den beri burada oturuyorum."),
    N("et", "nordlys", "nordlyset", "nordlys", "kuzey ışıkları", "nurlüs", "Nordlyset var fantastisk.", "Kuzey ışıkları harikaydı.")
  ],
  dialogue: [["A", "Hvor lenge har du bodd i Norge?", "Ne zamandır Norveç'te yaşıyorsun?"], ["B", "Jeg har bodd her i tre år. Jeg kom i 2022.", "Üç yıldır burada yaşıyorum. 2022'de geldim."], ["A", "Har du noen gang sett nordlyset?", "Hiç kuzey ışıklarını gördün mü?"], ["B", "Nei, aldri! Men jeg har vært i Bergen mange ganger.", "Hayır, hiç! Ama Bergen'e birçok kez gittim."]],
  quiz: [
    { q: "\"Üç yıldır burada oturuyorum.\"", o: ["Jeg har bodd her i tre år.", "Jeg bor her i tre år.", "Jeg bodde her i tre år.", "Jeg har bo her tre år."], a: 0, e: "Hâlâ süren durum: perfektum + i + süre." },
    { q: "\"2022'de geldim.\"", o: ["Jeg kom i 2022.", "Jeg har kommet i 2022.", "Jeg kommer i 2022."], a: 0, e: "Belirli geçmiş zaman (i 2022) → preteritum." },
    { q: "\"se\" fiilinin perfektum biçimi?", o: ["har sett", "har så", "har sedd", "har set"], a: 0, e: "se → så → har sett." },
    { q: "\"Hiç Tromsø'ya gittin mi?\"", o: ["Har du noen gang vært i Tromsø?", "Var du noen gang i Tromsø i går?", "Er du i Tromsø?"], a: 0, e: "Deneyim sorusu: Har du (noen gang) vært ...?" },
    { q: "\"Henüz cevap almadım.\"", o: ["Jeg har ikke fått svar ennå.", "Jeg fikk ikke svar ennå i går.", "Jeg ikke har fått svar."], a: 0, e: "ennå ikke = henüz değil; perfektum ile. ikke çekimli fiilden (har) sonra." }
  ],
  review: ["Perfektum = har + partisip: har bodd, har vært, har sett.", "Süren durum: Jeg har bodd her i tre år.", "Belirli geçmiş zaman (i går, i 2022) → preteritum."]
},
{
  id: "a2-4", title: "İş yerinde", no: "På jobben", icon: "briefcase",
  intro: "İşini anlatmak, iş arkadaşlarıyla konuşmak ve yan cümlelerde söz dizimi (fordi, at).",
  notes: [
    { h: "Yan cümlede ikke fiilden önce", p: "Ana cümlede: Jeg har ikke tid. Yan cümlede (fordi, at, hvis, når ... ile) ikke fiilden ÖNCE gelir: ... fordi jeg ikke har tid. Ayrıca yan cümlede özne her zaman fiilden önce gelir." },
    { h: "fordi ve at", p: "fordi = çünkü: Jeg kommer ikke fordi jeg er syk. at = ki, -diğini: Jeg tror at han kommer. (Geleceğini düşünüyorum.)" },
    { h: "jobbe som", p: "Meslek söylemenin bir yolu: Jeg jobber som sykepleier. (Hemşire olarak çalışıyorum.)" }
  ],
  tip: "Türkçede yan cümle fiili sona gelir (\"vaktim olmadığı için\"). Norveççede yan cümle de \"özne + (ikke) + fiil\" sırasıyla kurulur: fordi jeg ikke har tid. \"fordi har jeg ikke tid\" yanlıştır.",
  words: [
    W("jobber som", "... olarak çalışır", "yobber som", "Hun jobber som lærer.", "Öğretmen olarak çalışıyor."),
    N("en", "kollega", "kollegaen", "kolleger", "iş arkadaşı", "kolega", "Kollegaene mine er hyggelige.", "İş arkadaşlarım nazik."),
    N("en", "sjef", "sjefen", "sjefer", "patron, yönetici", "şef", "Sjefen er på møte.", "Yönetici toplantıda."),
    N("et", "møte", "møtet", "møter", "toplantı", "möte", "Møtet begynner klokka ni.", "Toplantı saat dokuzda başlıyor."),
    N("en", "lunsj", "lunsjen", "lunsjer", "öğle yemeği", "lönş", "Skal vi spise lunsj sammen?", "Birlikte öğle yemeği yiyelim mi?"),
    W("fordi", "çünkü", "fordi", "Jeg kommer sent fordi bussen er forsinket.", "Geç kalacağım çünkü otobüs gecikmeli."),
    W("at", "ki, -dığını", "at", "Jeg vet at du er travel.", "Meşgul olduğunu biliyorum."),
    W("travel", "meşgul, yoğun", "travel", "Jeg er travel i dag.", "Bugün çok meşgulüm."),
    W("fri", "izinli, boş", "fri", "Jeg har fri på fredag.", "Cuma izinliyim."),
    W("vakt", "nöbet, vardiya", "vakt", "Jeg har nattevakt i kveld.", "Bu gece gece vardiyam var."),
    W("hjelpe", "yardım etmek", "yelpe", "Kan du hjelpe meg med dette?", "Bu konuda bana yardım edebilir misin?")
  ],
  dialogue: [["A", "Skal du være med på lunsj?", "Öğle yemeğine gelecek misin?"], ["B", "Nei, dessverre. Jeg har et møte klokka tolv.", "Hayır, maalesef. Saat on ikide toplantım var."], ["A", "Så synd! Og i morgen?", "Ne yazık! Peki yarın?"], ["B", "I morgen har jeg fri, fordi jeg jobbet på søndag.", "Yarın izinliyim, çünkü pazar günü çalıştım."], ["A", "Ok, da tar vi lunsj på torsdag.", "Tamam, o zaman perşembe öğle yemeği yeriz."]],
  quiz: [
    { q: "\"... çünkü vaktim yok.\"", o: ["... fordi jeg ikke har tid.", "... fordi jeg har ikke tid.", "... fordi har jeg ikke tid.", "... fordi ikke jeg har tid."], a: 0, e: "Yan cümlede ikke fiilden önce: fordi jeg ikke har tid." },
    { q: "\"Geleceğini biliyorum.\"", o: ["Jeg vet at han kommer.", "Jeg vet at kommer han.", "Jeg vet han at kommer."], a: 0, e: "at-cümlesinde özne fiilden önce gelir: at han kommer." },
    { q: "\"Hemşire olarak çalışıyorum.\"", o: ["Jeg jobber som sykepleier.", "Jeg jobber like sykepleier.", "Jeg jobber sykepleier som."], a: 0, e: "jobbe som + meslek." },
    { q: "\"Jeg har fri i morgen.\" ne demek?", o: ["Yarın izinliyim.", "Yarın özgürüm, işsizim.", "Yarın bedava."], a: 0, e: "ha fri = izinli olmak, çalışmamak." },
    { q: "\"Jeg tror at hun ___ kommer.\" (gelmeyeceğini)", o: ["ikke", "ikke ikke", "nei"], a: 0, e: "Jeg tror at hun ikke kommer. Yan cümlede ikke fiilden önce." }
  ],
  review: ["Yan cümle: özne + ikke + fiil: fordi jeg ikke har tid.", "fordi = çünkü, at = ki / -dığını.", "Meslek: Jeg jobber som ..."]
},
{
  id: "a2-5", title: "Ev sahibiyle konuşmak", no: "Utleieren", icon: "key",
  intro: "Kiralık daire, kira sözleşmesi ve ev sahibine kibarca bir sorunu bildirmek.",
  notes: [
    { h: "Kiralama kelimeleri", p: "utleier (ev sahibi), leietaker (kiracı), husleie (kira), depositum (depozito, genellikle en fazla 6 aylık kira, ayrı bir depositumskonto'da tutulur), leiekontrakt (kira sözleşmesi)." },
    { h: "Kibar ricalar", p: "Kunne du ...? (... yapabilir misiniz?) Jeg lurer på om ... (... merak ediyorum / acaba ...) Det hadde vært fint om ... (... olsa çok iyi olurdu.) Norveççede \"De\" (siz) kullanılmaz; kibarlık bu kalıplarla sağlanır." },
    { h: "om = -ip -mediği (dolaylı soru)", p: "Evet/hayır sorusunu dolaylı sorarken om kullanılır: Jeg lurer på om du kan komme. (Gelip gelemeyeceğini merak ediyorum.)" }
  ],
  tip: "Türkçede kibarlık için \"siz\" kullanırız. Norveççede herkese du denir; kibarlık \"kunne\" (could), \"gjerne\" ve \"Jeg lurer på om ...\" gibi kalıplarla gösterilir.",
  words: [
    N("en", "utleier", "utleieren", "utleiere", "ev sahibi (kiraya veren)", "ütleyer", "Jeg må ringe utleieren.", "Ev sahibini aramam lazım."),
    N("ei", "husleie", "husleia", "husleier", "kira", "hüsleye", "Husleia er 12 000 kroner i måneden.", "Kira aylık 12.000 kron."),
    N("et", "depositum", "depositumet", "depositum", "depozito", "deposittüm", "Depositumet er tre måneders leie.", "Depozito üç aylık kira."),
    N("en", "leiekontrakt", "leiekontrakten", "leiekontrakter", "kira sözleşmesi", "leyekontrakt", "Har du lest leiekontrakten?", "Kira sözleşmesini okudun mu?"),
    W("Kunne du ...?", "... yapabilir misin? (kibar)", "künne dü", "Kunne du se på vasken?", "Lavaboya bakabilir misiniz?"),
    W("Jeg lurer på om ...", "Acaba ... (merak ediyorum)", "yay lürer po om", "Jeg lurer på om leiligheten er ledig.", "Acaba daire boş mu?"),
    W("ødelagt", "bozuk", "ödelagt", "Vaskemaskinen er ødelagt.", "Çamaşır makinesi bozuk."),
    W("virker ikke", "çalışmıyor", "virker ikke", "Varmtvannet virker ikke.", "Sıcak su çalışmıyor."),
    W("tett", "tıkalı", "tet", "Vasken på badet er tett.", "Banyodaki lavabo tıkalı."),
    W("ledig", "boş, müsait", "ledi", "Er leiligheten fortsatt ledig?", "Daire hâlâ boş mu?"),
    W("flytte", "taşınmak", "flütte", "Vi skal flytte i mars.", "Martta taşınacağız."),
    W("si opp", "(sözleşmeyi) feshetmek", "si op", "Jeg vil si opp leiekontrakten.", "Kira sözleşmesini feshetmek istiyorum.")
  ],
  dialogue: [["A", "Hei, det er Ali i andre etasje.", "Merhaba, ben ikinci kattaki Ali."], ["B", "Hei! Hva kan jeg hjelpe deg med?", "Merhaba! Nasıl yardımcı olabilirim?"], ["A", "Vasken på kjøkkenet er tett, og varmtvannet virker ikke.", "Mutfaktaki lavabo tıkalı ve sıcak su çalışmıyor."], ["B", "Å nei. Jeg kan komme i morgen ettermiddag.", "Eyvah. Yarın öğleden sonra gelebilirim."], ["A", "Takk! Jeg lurer også på om husleia skal betales den første.", "Teşekkürler! Bir de kiranın ayın birinde mi ödeneceğini merak ediyorum."], ["B", "Ja, den første i hver måned.", "Evet, her ayın birinde."]],
  quiz: [
    { q: "\"Lavaboya bakabilir misiniz?\" (kibar)", o: ["Kunne du se på vasken?", "Se på vasken!", "Du ser på vasken?"], a: 0, e: "Kunne du ...? kibar rica kalıbıdır." },
    { q: "\"Acaba daire boş mu?\"", o: ["Jeg lurer på om leiligheten er ledig.", "Jeg lurer på er leiligheten ledig.", "Jeg lurer om på leiligheten ledig er."], a: 0, e: "Dolaylı evet/hayır sorusu: om + özne + fiil." },
    { q: "\"depositum\" ne demek?", o: ["depozito", "kira", "kira sözleşmesi", "ev sahibi"], a: 0, e: "depositum = depozito; husleie = kira; leiekontrakt = sözleşme." },
    { q: "\"Çamaşır makinesi çalışmıyor.\"", o: ["Vaskemaskinen virker ikke.", "Vaskemaskinen ikke virker.", "Vaskemaskinen jobber ikke."], a: 0, e: "Makineler için virke (çalışmak) kullanılır; jobbe insanlar içindir." },
    { q: "Norveççede kibarlık nasıl gösterilir?", o: ["Kunne du ... / gjerne gibi kalıplarla", "\"De\" (siz) diyerek", "Soyadıyla hitap ederek"], a: 0, e: "Norveç'te herkese du denir; kibarlık kalıplarla ifade edilir." }
  ],
  review: ["utleier, husleie, depositum, leiekontrakt.", "Kibar rica: Kunne du ...? / Jeg lurer på om ...", "Makine için: virker ikke (çalışmıyor)."]
},
{
  id: "a2-6", title: "Gelecek ve planlar", no: "Planer", icon: "arrow",
  intro: "Gelecekten bahsetmenin üç yolu: skal, kommer til å ve şimdiki zaman.",
  notes: [
    { h: "Üç gelecek biçimi", p: "skal = plan, niyet: Jeg skal begynne på kurs. kommer til å = tahmin, olasılık: Det kommer til å regne. Şimdiki zaman + zaman ifadesi: Jeg reiser i morgen." },
    { h: "tenker å / har lyst til å", p: "Jeg tenker å søke jobb. (İş başvurusu yapmayı düşünüyorum.) Jeg har lyst til å lære å kjøre bil. (Araba kullanmayı öğrenmek istiyorum.)" },
    { h: "hvis + şimdiki zaman", p: "Hvis jeg består prøven, skal jeg søke jobb. (Sınavı geçersem iş başvurusu yapacağım.) Ana cümle hvis-cümlesinden sonra gelirse fiil başa geçer: ..., skal jeg ..." }
  ],
  tip: "\"vil\" gelecek zaman değildir, istek bildirir: \"Jeg vil reise\" = gitmek istiyorum. Gelecek için skal ya da kommer til å kullan.",
  words: [
    W("skal", "-ecek (plan)", "skal", "Neste år skal jeg ta norskprøven.", "Seneye Norveççe sınavına gireceğim."),
    W("kommer til å", "-ecek (tahmin)", "kommer til o", "Det kommer til å bli kaldt.", "Hava soğuk olacak."),
    W("har lyst til å", "... istemek, canı istemek", "har lüst til o", "Jeg har lyst til å reise hjem.", "Memlekete gitmek istiyorum."),
    W("tenker å", "... düşünmek (niyet)", "tenker o", "Hun tenker å studere.", "Okumayı düşünüyor."),
    W("hvis", "eğer", "vis", "Hvis det blir fint vær, går vi på tur.", "Hava güzel olursa yürüyüşe çıkarız."),
    W("håper", "umut eder", "hoper", "Jeg håper at du kommer.", "Gelmeni umuyorum.", { note: "mastar: håpe" }),
    W("neste år", "seneye", "neste or", "Neste år skal vi flytte.", "Seneye taşınacağız."),
    W("snart", "yakında", "snart", "Jeg kommer snart.", "Yakında geliyorum."),
    N("en", "prøve", "prøven", "prøver", "sınav", "pröve", "Jeg skal ta norskprøven i juni.", "Haziranda Norveççe sınavına gireceğim."),
    W("bestå", "(sınavı) geçmek", "besto", "Jeg håper jeg består.", "Geçmeyi umuyorum."),
    W("søke", "başvurmak", "söke", "Jeg skal søke jobb.", "İş başvurusu yapacağım.")
  ],
  dialogue: [["A", "Hva er planene dine for neste år?", "Seneye planların neler?"], ["B", "Jeg skal ta norskprøven i juni.", "Haziranda Norveççe sınavına gireceğim."], ["A", "Lykke til! Og etterpå?", "Bol şans! Sonra?"], ["B", "Hvis jeg består, skal jeg søke jobb som sykepleier.", "Geçersem hemşire olarak iş başvurusu yapacağım."], ["A", "Det kommer til å gå bra!", "İyi geçecek!"]],
  quiz: [
    { q: "\"Yarın yağmur yağacak.\" (tahmin)", o: ["Det kommer til å regne i morgen.", "Det vil regne i morgen.", "Det skal regner i morgen."], a: 0, e: "Tahmin için kommer til å + mastar." },
    { q: "\"Jeg vil reise.\" ne demek?", o: ["Gitmek istiyorum.", "Gideceğim.", "Gittim."], a: 0, e: "vil = istemek. Gelecek değil!" },
    { q: "\"Geçersem iş başvurusu yapacağım.\"", o: ["Hvis jeg består, skal jeg søke jobb.", "Hvis jeg består, jeg skal søke jobb.", "Hvis består jeg, skal jeg søke jobb."], a: 0, e: "hvis-cümlesi önce gelirse ana cümlede fiil başa geçer: skal jeg." },
    { q: "\"Memlekete gitmek istiyorum (canım istiyor).\"", o: ["Jeg har lyst til å reise hjem.", "Jeg har lyst reise hjem.", "Jeg lyster å reise hjem."], a: 0, e: "ha lyst til å + mastar." },
    { q: "\"snart\" ne demek?", o: ["yakında", "geç", "erken"], a: 0, e: "snart = yakında." }
  ],
  review: ["skal = plan, kommer til å = tahmin.", "vil = istemek (gelecek değil).", "Hvis ..., + fiil + özne: Hvis jeg består, skal jeg ..."]
}
];

export default atLevel("A2", A2);
