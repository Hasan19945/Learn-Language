import { N, Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { readingStories } from "./readingStories";

const A0: LessonDef[] = [
{
  id: "a0-story", title: "İlk hikâyeler", no: "Mine første historier", icon: "spark", stories: readingStories("a0", "tr"),
  intro: "A0'da öğrendiklerinle iki kısa hikâye izleyip okuyorsun: Mira Oslo'da yaşıyor, Emil ailesiyle Bergen'de.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "Şimdiki zaman (mastar + r): bor, jobber, spiser. Fiil ikinci sırada: Nå bor jeg i Oslo. I kveld spiser de middag. Olumsuzluk fiilden sonra: I dag jobber jeg ikke." },
    { h: "Nasıl çalışmalı?", p: "Önce videoyu çeviriyle izle. Sonra çeviriyi gizleyip tekrar izle. En son hikâyeyi yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "\"Nå bor jeg i Oslo\" ve \"I kveld spiser de middag\" cümlelerine dikkat et: cümle bir zaman ifadesiyle başlarsa özne fiilden sonra gelir. \"Nå jeg bor\" yanlıştır.",
  words: [
    W("heter", "adı ... (olmak)", "heter", "Jeg heter Mira.", "Benim adım Mira."),
    W("kommer", "gelir, geliyor", "kommer", "Jeg kommer fra Tyrkia.", "Türkiye'den geliyorum."),
    W("bor", "yaşar, oturur", "bur", "Han bor i et hus i Bergen.", "Bergen'de bir evde yaşıyor."),
    W("lærer", "öğrenir; öğretmen", "lerer", "Jeg lærer norsk.", "Norveççe öğreniyorum."),
    W("forstår", "anlar", "foştor", "Jeg forstår litt norsk nå.", "Artık biraz Norveççe anlıyorum."),
    W("jobber", "çalışır", "yobber", "Han jobber i Bergen.", "Bergen'de çalışıyor."),
    W("drikker", "içer", "drikker", "Emil drikker kaffe.", "Emil kahve içiyor."),
    W("spiser", "yer", "spiser", "Jeg spiser et eple.", "Bir elma yiyorum."),
    N("en", "venn", "vennen", "venner", "arkadaş", "ven", "En venn kommer.", "Bir arkadaş geliyor."),
    N("et", "barn", "barnet", "barn", "çocuk", "barn", "Emil har to barn.", "Emil'in iki çocuğu var."),
    N("en", "gutt", "gutten", "gutter", "oğlan", "güt", "Gutten er sju år.", "Oğlan yedi yaşında."),
    N("ei", "jente", "jenta", "jenter", "kız", "yente", "Jenta er fem år.", "Kız beş yaşında."),
    W("sammen", "birlikte", "sammen", "Vi spiser middag sammen.", "Birlikte akşam yemeği yiyoruz."),
    W("i kveld", "bu akşam", "i kvel", "Vil du spise middag i kveld?", "Bu akşam yemek yemek ister misin?")
  ],
  dialogue: [["A", "Hei! Jeg heter Mira. Hva heter du?", "Merhaba! Benim adım Mira. Senin adın ne?"], ["B", "Jeg heter Emil. Jeg er lærer.", "Benim adım Emil. Öğretmenim."], ["A", "Vil du spise middag i kveld?", "Bu akşam yemek yemek ister misin?"], ["B", "Ja, gjerne!", "Evet, memnuniyetle!"]],
  quiz: [
    Q("Mira nereden geliyor?", ["Tyrkia", "Norge", "Bergen"], "Jeg kommer fra Tyrkia."),
    Q("Emil'in kaç çocuğu var?", ["to", "tre", "fem"], "Emil har to barn: en gutt og ei jente."),
    Q("\"Bugün çalışmıyorum.\"", ["I dag jobber jeg ikke.", "I dag jeg jobber ikke.", "I dag ikke jobber jeg."], "Fiil ikinci sırada, ikke fiilden sonra."),
    Q("\"Nå bor jeg i Oslo\" cümlesinde neden fiil ikinci sırada?", ["Cümle bir zaman ifadesiyle başladığı için", "Soru cümlesi olduğu için", "Cümlede hata var"], "Zaman ifadesi başa gelince özne fiilden sonra gelir."),
    Q("Oğlan kaç yaşında?", ["sju", "fem", "to"], "Gutten er sju år.")
  ],
  review: ["Şimdiki zaman: mastar + r (bor, jobber, spiser).", "Fiil ikinci sırada: Nå bor jeg i Oslo.", "ikke fiilden sonra: I dag jobber jeg ikke."]
}
];

const A1: LessonDef[] = [
{
  id: "a1-story", title: "Günlük hayattan hikâyeler", no: "Historier fra hverdagen", icon: "spark", stories: readingStories("a1", "tr"),
  intro: "A1'de öğrendiklerinle dört hikâye: Mira'nın ailesi Oslo'ya geliyor, Emil markette, Mira Bergen'e gidiyor ve Emil yeni dairesinde.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "İyelik: faren hennes, familien min. Sıfatlar: en stor familie, et lite kjøkken, et nytt bad. Saat: klokka åtte, halv ni, kvart over åtte. må ve skal + mastar: må ta bussen, skal til Bergen." },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. En son yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "halv ni 9:30 değil, 8:30'dur: dokuza yarım saat var demek. Mira'nın treni bu yüzden sekiz buçukta kalkıyor.",
  words: [
    N("en", "familie", "familien", "familier", "aile", "familie", "Mira har en stor familie.", "Mira'nın kalabalık bir ailesi var."),
    N("en", "bror", "broren", "brødre", "erkek kardeş", "brur", "Hun har en bror.", "Bir erkek kardeşi var."),
    N("ei", "søster", "søstera", "søstre", "kız kardeş", "söster", "Søstera er femten år.", "Kız kardeşi on beş yaşında."),
    W("koster", "... tutar, fiyatı ...", "koster", "Brødet koster førti kroner.", "Ekmek kırk kron."),
    W("billig", "ucuz", "billi", "Melka er billig.", "Süt ucuz."),
    W("dyr", "pahalı", "dür", "Osten er dyr.", "Peynir pahalı."),
    W("betaler", "öder", "betaler", "Emil betaler med kort.", "Emil kartla ödüyor."),
    W("klokka", "saat ...'de", "klokka", "Bussen kommer klokka åtte.", "Otobüs saat sekizde geliyor."),
    W("skal", "-ecek (plan)", "skal", "På fredag skal Mira til Bergen.", "Cuma günü Mira Bergen'e gidecek."),
    W("må", "-meli, zorunda", "mo", "Hun må ta bussen.", "Otobüse binmesi gerekiyor."),
    N("en", "buss", "bussen", "busser", "otobüs", "büs", "Bussen kommer ikke!", "Otobüs gelmiyor!"),
    N("et", "tog", "toget", "tog", "tren", "tog", "Toget går klokka halv ni.", "Tren sekiz buçukta kalkıyor."),
    W("liten", "küçük", "liten", "Leiligheten er liten.", "Daire küçük."),
    W("kald", "soğuk", "kal", "I dag er det kaldt.", "Bugün hava soğuk.", { note: "kaldt, kalde" }),
    W("liker", "sever", "liker", "Emil liker å gå på ski.", "Emil kayak yapmayı seviyor.")
  ],
  dialogue: [["A", "Hva koster brødet?", "Ekmek ne kadar?"], ["B", "Det koster førti kroner.", "Kırk kron."], ["A", "Kan jeg betale med kort?", "Kartla ödeyebilir miyim?"], ["B", "Ja, selvfølgelig!", "Evet, tabii ki!"]],
  quiz: [
    Q("Mira'nın treni saat kaçta kalkıyor? (halv ni)", ["8:30", "9:30", "9:00"], "halv ni = dokuza yarım var = 8:30."),
    Q("Ekmek kaç kron?", ["førti", "fire", "fjorten"], "Brødet koster førti kroner."),
    Q("\"Önce otobüse binmesi gerekiyor.\"", ["Først må hun ta bussen.", "Først hun må ta bussen.", "Først må hun tar bussen."], "Fiil ikinci sırada; må'dan sonra mastar."),
    Q("Emil'in dairesi nasıl?", ["liten, men stua er stor", "stor og gammel", "dyr og ny"], "Den er liten, men stua er stor og fin."),
    Q("\"et lite kjøkken\": neden lite?", ["et-kelimesi olduğu için liten → lite", "Çoğul olduğu için", "Belirli hal olduğu için"], "liten düzensizdir: en liten, et lite, små.")
  ],
  review: ["İyelik: familien min, faren hennes.", "Saat: halv ni = 8:30, kvart over åtte = 8:15.", "må / skal + mastar: må ta bussen, skal til Bergen."]
}
];

const A2: LessonDef[] = [
{
  id: "a2-story", title: "Altı kısa hikâye", no: "Seks korte historier", icon: "spark", stories: readingStories("a2", "tr"),
  intro: "A2'de öğrendiklerinle altı hikâye: Mira'nın hafta sonu, Emil'in Norveç'teki iki yılı, doktor, yeni bir iş, daire aramak ve yaz planları.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "Geçmiş zaman: var, gikk, spiste, ringte. Perfektum: har bodd, har lært, har aldri vært. fordi ile yan cümle: fordi han ikke får mange pauser. om (-ip -mediğini): spør om leiligheten er ledig. Gelecek: skal reise, det kommer til å regne." },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. En son yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "fordi'den sonra ikke fiilden önce gelir: \"fordi han ikke får mange pauser\". \"fordi han får ikke\" en sık yapılan hatadır.",
  words: [
    W("var", "-di (olmak, geçmiş)", "var", "I helgen var Mira i Bergen.", "Hafta sonu Mira Bergen'deydi.", { note: "være – var" }),
    W("gikk", "gitti", "yik", "Hun gikk på kino.", "Sinemaya gitti.", { note: "gå – gikk" }),
    W("i går", "dün", "i gor", "I går kom hun hjem.", "Dün eve döndü."),
    N("en", "helg", "helgen", "helger", "hafta sonu", "helg", "Det var en fin helg.", "Güzel bir hafta sonuydu."),
    W("har bodd", "-dir yaşıyor", "har bud", "Emil har bodd i Bergen i to år.", "Emil iki yıldır Bergen'de yaşıyor."),
    W("aldri", "hiç, asla", "aldri", "Han har aldri vært i Tromsø.", "Tromsø'ya hiç gitmedi."),
    N("en", "lege", "legen", "leger", "doktor", "lege", "Hun ringte legen.", "Doktoru aradı."),
    W("feber", "ateş", "feber", "Hun hadde også feber.", "Ateşi de vardı."),
    W("vondt", "ağrı, acı", "vont", "Hun våknet med vondt i halsen.", "Boğaz ağrısıyla uyandı."),
    W("fordi", "çünkü", "fordi", "Han liker jobben fordi han lærer mye.", "İşi seviyor, çünkü çok şey öğreniyor."),
    N("en", "sjef", "sjefen", "sjefer", "patron, şef", "şef", "Sjefen hans er hyggelig.", "Patronu nazik biri."),
    W("sliten", "yorgun", "sliten", "Han er ofte sliten.", "Sık sık yoruluyor."),
    W("ledig", "boş, müsait", "ledi", "Er leiligheten ledig?", "Daire boş mu?"),
    W("husleie", "kira", "hüsleye", "Hun betaler 11 000 kroner i husleie.", "Kira olarak 11 000 kron ödüyor."),
    W("kommer til å", "-ecek (tahmin)", "kommer til o", "Det kommer til å regne litt.", "Biraz yağmur yağacak."),
    N("en", "ferie", "ferien", "ferier", "tatil", "ferie", "Emil gleder seg til ferien.", "Emil tatili dört gözle bekliyor.")
  ],
  dialogue: [["A", "Hva gjorde du i helgen?", "Hafta sonu ne yaptın?"], ["B", "Jeg gikk på kino. Og du?", "Sinemaya gittim. Ya sen?"], ["A", "Jeg var hjemme, fordi jeg hadde feber.", "Evdeydim, çünkü ateşim vardı."], ["B", "Så synd! Nå føler du deg bedre, håper jeg.", "Ne yazık! Umarım şimdi daha iyisindir."]],
  quiz: [
    Q("Hafta sonu Mira cumartesi nereye gitti?", ["på kino", "på jobb", "til legen"], "På lørdag gikk hun på kino med en venn."),
    Q("\"Dün eve döndü.\"", ["I går kom hun hjem.", "I går hun kom hjem.", "I går har hun kommet hjem."], "Belirli geçmiş zaman: preteritum; fiil ikinci sırada."),
    Q("Emil kaç yıldır Bergen'de yaşıyor?", ["to år", "tre år", "ett år"], "Emil har bodd i Bergen i to år."),
    Q("\"... çünkü fazla molası olmuyor.\"", ["fordi han ikke får mange pauser", "fordi han får ikke mange pauser", "fordi ikke han får mange pauser"], "Yan cümlede ikke fiilden önce."),
    Q("Mira dairenin boş olup olmadığını nasıl soruyor?", ["Hun spør om leiligheten er ledig.", "Hun spør hvis leiligheten er ledig.", "Hun spør er leiligheten ledig."], "-ip -mediğini = om."),
    Q("Tahmin: \"Biraz yağmur yağacak.\"", ["Det kommer til å regne litt.", "Det vil regne litt.", "Det skal regner litt."], "Tahmin için kommer til å.")
  ],
  review: ["Geçmiş: var, gikk, spiste. Perfektum: har bodd, har aldri vært.", "fordi + ikke + fiil: fordi han ikke får.", "om = -ip -mediğini; tahmin: kommer til å."]
}
];

const B1: LessonDef[] = [
{
  id: "b1-story", title: "Hayattan sekiz hikâye", no: "Åtte historier fra livet", icon: "spark", stories: readingStories("b1", "tr"),
  intro: "B1'de öğrendiklerinle sekiz hikâye: NAV, iş görüşmesi, banka, Norveççe sınavı, rötarlı tren, mutfak, dağda kar ve mağazada şikâyet.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "som ile ilgi cümlesi: saksbehandleren som hjalp henne. selv om ve likevel: Selv om det var vanskelig, ga hun ikke opp. mens ve da: Mens barna sover… Da hun kom til stasjonen… Pluskvamperfektum: hadde søkt, hadde trodd, hadde glemt. Edilgen: ble godkjent, må røres. Dolaylı soru: spurte hvorfor han ville jobbe der. jo … jo: Jo mer hun sparer, jo gladere blir hun." },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. En son yüksek sesle oku. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "Yan cümle başta olunca ana cümlede fiil hemen gelir: \"Selv om det var vanskelig, ga hun ikke opp.\" \"Mens barna sover, leser han.\" \"hun ga\" ya da \"han leser\" demek yanlış olur.",
  words: [
    N("en", "søknad", "søknaden", "søknader", "başvuru", "sökna", "Hun fikk svar på søknaden.", "Başvurusuna cevap aldı."),
    N("et", "skjema", "skjemaet", "skjemaer", "form", "şeema", "Hun måtte fylle ut et skjema.", "Bir form doldurması gerekti."),
    W("selv om", "-e rağmen, -se de", "sel om", "Selv om det var vanskelig, ga hun ikke opp.", "Zor olmasına rağmen pes etmedi."),
    W("godkjent", "onaylandı, onaylı", "gutşent", "Søknaden ble godkjent.", "Başvuru onaylandı.", { note: "ble godkjent = onaylandı (edilgen)" }),
    N("en", "stilling", "stillingen", "stillinger", "pozisyon, kadro", "stilling", "Han søkte på en stilling som lærer.", "Öğretmenlik pozisyonuna başvurdu."),
    N("en", "erfaring", "erfaringen", "erfaringer", "deneyim", "ærfaaring", "Han fortalte om erfaringen sin.", "Deneyiminden bahsetti."),
    N("en", "rente", "renten", "renter", "faiz", "rente", "En sparekonto gir mer rente.", "Birikim hesabı daha fazla faiz verir."),
    N("et", "budsjett", "budsjettet", "budsjetter", "bütçe", "büdşett", "Hun må lage et budsjett.", "Bir bütçe yapması gerekiyor."),
    W("mens", "-iken, sırasında", "mens", "Mens barna sover, leser han.", "Çocuklar uyurken o okuyor."),
    W("bestått", "geçti (sınavı)", "bestot", "Han hadde bestått!", "Sınavı geçmişti!", { note: "bestå – besto – har bestått" }),
    W("forsinket", "rötarlı, gecikmiş", "foşinket", "Toget var forsinket.", "Tren rötarlıydı."),
    W("likevel", "yine de", "likevel", "Likevel er tog bedre for miljøet.", "Yine de tren çevre için daha iyi."),
    N("et", "miljø", "miljøet", "miljøer", "çevre", "milyö", "Tog er bedre for miljøet enn fly.", "Tren çevre için uçaktan daha iyi."),
    N("en", "oppskrift", "oppskriften", "oppskrifter", "tarif", "opskrift", "Han har funnet en oppskrift på fiskesuppe.", "Balık çorbası için bir tarif buldu."),
    W("plutselig", "birden", "plütseli", "Plutselig ringer det på døra.", "Birden kapı çalıyor."),
    W("heldigvis", "neyse ki", "heldivis", "Heldigvis smakte suppen nydelig.", "Neyse ki çorbanın tadı harikaydı."),
    W("redd", "korkmuş", "redd", "Mira var redd for å gå seg vill.", "Mira kaybolmaktan korkuyordu.", { note: "være redd for = -den korkmak" }),
    N("en", "kvittering", "kvitteringen", "kvitteringer", "fiş, makbuz", "kvitering", "Han tar med kvitteringen.", "Fişi yanına alıyor."),
    W("klage", "şikâyet etmek", "klaage", "Han vil klage på jakken.", "Mont için şikâyette bulunmak istiyor."),
    W("fornøyd", "memnun", "fornöyd", "Han er fornøyd med servicen.", "Hizmetten memnun.")
  ],
  dialogue: [["A", "Hvorfor kom du så sent?", "Neden bu kadar geç geldin?"], ["B", "Toget var forsinket, og jeg måtte vente i en time.", "Tren rötarlıydı ve bir saat beklemek zorunda kaldım."], ["A", "Så kjedelig! Likevel er det bra at du kom.", "Ne sıkıcı! Yine de gelmen iyi oldu."], ["B", "Ja, og heldigvis fikk jeg pengene tilbake.", "Evet, ve neyse ki paramı geri aldım."]],
  quiz: [
    Q("Mira'nın NAV'daki başvurusuna ne oldu?", ["Den ble godkjent.", "Den ble borte.", "Den kom for sent."], "Etter to uker fikk hun svar på søknaden. Den ble godkjent!"),
    Q("\"Müdür neden orada çalışmak istediğini sordu.\"", ["Rektoren spurte hvorfor han ville jobbe der.", "Rektoren spurte hvorfor ville han jobbe der.", "Rektoren spurte hvorfor han jobbe ville der."], "Dolaylı soruda özne fiilden önce gelir: hvorfor han ville."),
    Q("Birikim hesabı neden daha iyi?", ["Den gir mer rente.", "Den er gratis.", "Den har et budsjett."], "En sparekonto gir mer rente enn en vanlig konto."),
    Q("\"Sınav sandığından daha kolaydı.\"", ["Prøven var lettere enn han hadde trodd.", "Prøven var lettere enn han har trodd.", "Prøven var mer lett enn han hadde trodd."], "Geçmişten daha önceki bir an: hadde + trodd."),
    Q("Mira istasyona vardığında tren neden yoktu?", ["Det var forsinket.", "Det var fullt.", "Det hadde gått."], "Da hun kom til stasjonen, var toget forsinket."),
    Q("Çorba neden taştı?", ["Emil hadde glemt å skru ned varmen.", "Naboene kom for tidlig.", "Oppskriften var feil."], "Emil hadde glemt å skru ned varmen."),
    Q("Dağda kaybolmamak için ne yaptılar?", ["De fulgte de røde merkene.", "De ringte en venn.", "De gikk hjem igjen."], "De bestemte seg for å følge de røde merkene på steinene."),
    Q("Emil mağazaya ne götürdü?", ["kvitteringen", "budsjettet", "oppskriften"], "Han tar med kvitteringen og går tilbake til butikken."),
    Q("\"Zor olmasına rağmen pes etmedi.\"", ["Selv om det var vanskelig, ga hun ikke opp.", "Selv om det var vanskelig, hun ga ikke opp.", "Likevel det var vanskelig, ga hun ikke opp."], "selv om'lu cümleden sonra fiil önce gelir: ga hun.")
  ],
  review: ["som, selv om, mens, da: yan cümleden sonra fiil önce gelir.", "hadde + fiil: hadde søkt, hadde glemt.", "Edilgen: ble godkjent, må røres."]
}
];

const B2: LessonDef[] = [
{
  id: "b2-story", title: "Sekiz B2 hikâyesi", no: "Åtte historier på B2-nivå", icon: "spark", stories: readingStories("b2", "tr"),
  intro: "B2'de öğrendiklerinle sekiz hikâye: resmî bir e-posta, halk toplantısı, kafede deyimler, taşınma günü, fazla mesai hakkı, bir akşam yemeği, yarı maraton ve sahil temizliği.",
  notes: [
    { h: "Hikâyelerde neleri tekrar ediyorsun?", p: "Resmî dil: Dersom hun ikke får svar innen fjorten dager… / ber om at saken blir behandlet. Tartışma: på den ene siden … på den andre siden, ettersom, heller. Deyimler: verdens undergang, som smurt, midt i blinken, få bakoversveis. Edatlı fiiller: flytte inn, finne ut av, sette opp, pakke ut, kutte ned på. Küçük kelimeler: jo, nok, da. Edilgen -s: brytes ned." },
    { h: "Nasıl çalışmalı?", p: "Her hikâyeyi önce çeviriyle izle, sonra çeviriyi gizleyip tekrar izle. Deyimleri kelime kelime çevirme; anlamlarını bütün olarak öğren. Kırmızı kelimeler bu dersin kelimeleri." }
  ],
  tip: "Edatlı fiillerde edat vurguyu taşır ve anlamı değiştirir: finne = bulmak, finne ut av = çözmek, halletmek. pakke ned = kolilemek, pakke ut = koliden çıkarmak.",
  words: [
    W("dersom", "eğer (resmî)", "dæşom", "Dersom hun ikke får svar, kontakter hun foreningen.", "Cevap alamazsa derneğe başvuracak.", { note: "resmî dilde hvis yerine" }),
    W("beklager", "özür diler, üzgünüm", "beklaager", "Utleieren ringer og beklager.", "Ev sahibi arayıp özür diliyor.", { note: "beklage – beklaget" }),
    W("ettersom", "çünkü, -diği için", "etterşom", "Det er bra, ettersom det hjelper miljøet.", "İyi, çünkü çevreye yardımcı oluyor."),
    W("på den ene siden", "bir yandan", "po den eene siiden", "På den ene siden blir det lettere å reise.", "Bir yandan seyahat etmek kolaylaşacak.", { note: "… på den andre siden = öte yandan" }),
    N("et", "forslag", "forslaget", "forslag", "öneri", "foşlaag", "Politikerne vurderer forslaget hans.", "Politikacılar önerisini değerlendiriyor."),
    W("satse", "yatırım yapmak, ağırlık vermek", "satse", "Kommunen bør satse på bussen.", "Belediye otobüse yatırım yapmalı.", { note: "satse på noe" }),
    N("et", "uttrykk", "uttrykket", "uttrykk", "ifade, deyim", "ütrük", "Ola elsker faste uttrykk.", "Ola deyimlere bayılıyor."),
    W("midt i blinken", "tam isabet, tam yerinde", "mit i blinken", "Det passer midt i blinken!", "Bu tam on ikiden vurdu!"),
    W("flytte inn", "taşınmak (bir yere)", "flütte in", "De skal flytte inn i et nytt hus.", "Yeni bir eve taşınacaklar."),
    W("finne ut av", "çözmek, halletmek", "finne üt av", "Emil må finne ut av det.", "Emil'in bunu çözmesi gerekiyor."),
    W("pakke ut", "(koliden) çıkarmak", "pakke üt", "Det tar uker å pakke ut alt.", "Her şeyi çıkarmak haftalar sürer."),
    W("overtid", "fazla mesai", "overtiid", "Hun har jobbet mye overtid.", "Çok fazla mesai yaptı."),
    N("en", "tillitsvalgt", "tillitsvalgte", "tillitsvalgte", "sendika temsilcisi", "tillitsvalt", "Hun snakker med den tillitsvalgte.", "Sendika temsilcisiyle konuşuyor."),
    N("en", "rettighet", "rettigheten", "rettigheter", "hak", "rettiheet", "Hun vet hvilke rettigheter hun har.", "Hangi haklara sahip olduğunu biliyor."),
    W("innrømme", "kabul etmek, itiraf etmek", "inrömme", "Lederen innrømmer feilen.", "Müdür hatayı kabul ediyor."),
    W("nok", "muhtemelen; yeterince", "nok", "Han snakker nok bedre enn han tror.", "Muhtemelen sandığından daha iyi konuşuyor."),
    W("skuffet", "hayal kırıklığına uğramış", "skuffet", "Mira er skuffet.", "Mira hayal kırıklığına uğradı."),
    W("i stedet for", "yerine", "i steede for", "I stedet for å løpe, svømmer hun.", "Koşmak yerine yüzüyor."),
    W("frivillig", "gönüllü", "friivilli", "Det er mange frivillige på stranda.", "Sahilde çok sayıda gönüllü var."),
    W("bakoversveis", "şaşkınlık (ağzı açık kalmak)", "baakoveşveys", "Emil får bakoversveis.", "Emil'in ağzı açık kalıyor.", { note: "få bakoversveis = çok şaşırmak" }),
    W("kutte ned på", "azaltmak", "kütte need po", "Han vil kutte ned på plast.", "Plastiği azaltmak istiyor."),
    W("bidra", "katkıda bulunmak", "biidra", "Alle kan bidra.", "Herkes katkıda bulunabilir.")
  ],
  dialogue: [["A", "Hørte du at kommunen vil bygge vei gjennom parken?", "Belediyenin parkın içinden yol yapmak istediğini duydun mu?"], ["B", "Ja, men jeg synes de heller bør satse på bussen.", "Evet, ama bence bunun yerine otobüse yatırım yapmalılar."], ["A", "Enig. På den ene siden sparer vi tid, på den andre siden mister barna parken.", "Katılıyorum. Bir yandan zaman kazanıyoruz, öte yandan çocuklar parkı kaybediyor."], ["B", "Vi får nok si fra på folkemøtet i kveld.", "Bu akşamki halk toplantısında herhalde sesimizi duyurmalıyız."]],
  quiz: [
    Q("Mira ne zaman Kiracılar Derneği'ne başvuracak?", ["Dersom hun ikke får svar innen fjorten dager.", "Dersom utleieren beklager.", "Innen to dager."], "Dersom hun ikke får svar innen fjorten dager, vil hun kontakte Leieboerforeningen."),
    Q("\"Öte yandan çocuklar önemli bir yeri kaybedecek.\"", ["På den andre siden vil barna miste et viktig sted.", "På den andre siden barna vil miste et viktig sted.", "På andre siden vil barna miste et viktig sted."], "Cümle zarfla başlarsa fiil ikinci sırada gelir: vil barna."),
    Q("\"Det er ikke verdens undergang\" ne demek?", ["Det er ikke så farlig.", "Verden går under.", "Det er veldig farlig."], "Bu deyim 'felaket değil, o kadar kötü değil' demektir."),
    Q("\"Alt går som smurt\" ne demek?", ["Alt går veldig greit.", "Alt er fullt av smør.", "Ingenting fungerer."], "som smurt = sorunsuz, yağ gibi."),
    Q("\"Emil'in bunu hemen çözmesi gerekiyor.\"", ["Emil må finne ut av det i en fart.", "Emil må finne det ut av i en fart.", "Emil må ut finne av det i en fart."], "finne ut av + nesne."),
    Q("Mira fazla mesai için kimden yardım aldı?", ["den tillitsvalgte", "utleieren", "fysioterapeuten"], "Hun tar kontakt med den tillitsvalgte."),
    Q("\"Han snakker nok bedre norsk enn han tror\" cümlesinde nok ne anlama gelir?", ["muhtemelen", "yeterince", "asla"], "Burada nok = muhtemelen, herhalde."),
    Q("Fizyoterapist Mira'ya ne tavsiye etti?", ["å ta det med ro", "å løpe mer", "å kutte ned på plast"], "Fysioterapeuten råder henne til å ta det med ro."),
    Q("Edilgen: \"Plastik mikroplastiğe dönüşüyor.\"", ["Plasten brytes ned til mikroplast.", "Plasten bryter ned til mikroplast.", "Plasten blir bryter ned til mikroplast."], "-s ile edilgen: brytes ned.")
  ],
  review: ["Resmî dil: dersom, innen, beklager.", "Tartışma: på den ene siden … på den andre siden, ettersom.", "Edatlı fiiller ve deyimler: finne ut av, pakke ut, midt i blinken."]
}
];

const C1: LessonDef[] = [
{
  id: "c1-story", title: "On C1 hikâyesi", no: "Ti historier på C1-nivå", icon: "spark", stories: readingStories("c1", "tr"),
  intro: "C1'in bütün konularını içeren on hikâye: akademik dil, vurgu yapıları, varsayımlar ve pişmanlıklar, müzakere, toplum ve medya, lehçeler ve argo, iş hayatında deyimler ve atasözleri.",
  notes: [
    { h: "Akademik dil, vurgu ve varsayımlar", p: "Akademik: legge fram problemstillingen, redegjøre for metoden, resultatene tyder på, utvalget er begrenset. Vurgu (utbrytning): Det var naboen hans som hadde sett sykkelen. Det som er vanskeligst, er å … Varsayım ve pişmanlık: Hadde hun bare stått opp …, ville hun ha rukket flyet. Om hun hadde tatt en taxi, kunne hun ha kommet fram." },
    { h: "Müzakere, medya, dil çeşitliliği ve deyimler", p: "Müzakere: holde på kravet, foreslå et kompromiss, påpeke, møtes på midten. Medya: kronikk, ytringsfrihet, kildekritikk, regulere. Dil çeşitliliği: nynorsk, sognedialekt (kor, eg), slang (sykt bra). İş deyimleri: sommerfugler i magen, tilbake til tegnebrettet, treffe spikeren på hodet, brette opp ermene. Atasözleri: Roma ble ikke bygd på én dag. Der det er vilje, er det vei." }
  ],
  tip: "\"Hadde hun bare …\" yapısında fiil başa gelir ve hvis kullanılmaz; anlamı \"keşke …\" olur. Aynı devrik yapı koşul için de kullanılır: \"Hadde han ikke invitert dem, hadde de aldri møttes.\"",
  words: [
    N("en", "problemstilling", "problemstillingen", "problemstillinger", "araştırma sorusu", "problemstilling", "Hun legger fram problemstillingen.", "Araştırma sorusunu sunuyor."),
    W("redegjør for", "açıklar, hesabını verir", "reedeyör for", "Hun redegjør for metoden.", "Yöntemini açıklıyor.", { note: "redegjøre – redegjorde" }),
    W("tyder på", "işaret eder, gösterir", "tüder po", "Resultatene tyder på en sammenheng.", "Sonuçlar bir ilişkiye işaret ediyor.", { note: "tyde på" }),
    N("et", "funn", "funnet", "funn", "bulgu", "fün", "Funnene er relevante.", "Bulgular anlamlı."),
    N("et", "utvalg", "utvalget", "utvalg", "örneklem; seçki", "ütvalg", "Utvalget er begrenset.", "Örneklem sınırlı."),
    W("anmelde", "(polise) bildirmek, şikâyet etmek", "anmelle", "Han vil anmelde tyveriet.", "Hırsızlığı bildirmek istiyor."),
    N("et", "tyveri", "tyveriet", "tyverier", "hırsızlık", "tüveri", "Tyveriet skjedde i går.", "Hırsızlık dün oldu."),
    W("nettopp", "tam da, tam olarak; az önce", "nettop", "Det var nettopp det som var rart.", "Tuhaf olan tam da buydu."),
    W("nemlig", "çünkü, işte (açıklama)", "nemli", "Det var nemlig en ny lås.", "Çünkü yeni bir kilitti."),
    W("angrer", "pişman olur", "angrer", "Hun angrer på det.", "Buna pişman.", { note: "angre på noe" }),
    W("rukket", "yetişmiş", "rükket", "Hun ville ha rukket flyet.", "Uçağa yetişmiş olurdu.", { note: "rekke – rakk – har rukket" }),
    W("tidsnok", "tam zamanında", "titsnok", "Hun kom fram akkurat tidsnok.", "Tam zamanında vardı."),
    W("forhandle", "müzakere etmek, pazarlık yapmak", "forhandle", "Han skal forhandle fram en avtale.", "Bir anlaşma için pazarlık yapacak."),
    N("en", "leverandør", "leverandøren", "leverandører", "tedarikçi", "leverandör", "Leverandøren vil øke prisene.", "Tedarikçi fiyatları artırmak istiyor."),
    N("et", "krav", "kravet", "krav", "talep", "kraav", "Motparten holder på kravet sitt.", "Karşı taraf talebinde ısrar ediyor."),
    N("et", "kompromiss", "kompromisset", "kompromisser", "uzlaşma", "kumpromis", "Emil foreslår et kompromiss.", "Emil bir uzlaşma öneriyor."),
    N("en", "kronikk", "kronikken", "kronikker", "köşe yazısı, görüş yazısı", "krunikk", "Hun skriver en kronikk.", "Bir köşe yazısı yazıyor."),
    W("ytringsfrihet", "ifade özgürlüğü", "ütringsfriheet", "Det kan true ytringsfriheten.", "Bu, ifade özgürlüğünü tehdit edebilir.", { g: "en", def: "ytringsfriheten" }),
    W("kildekritikk", "kaynak eleştirisi", "hildekritikk", "Kildekritikk er viktigere enn forbud.", "Kaynak eleştirisi yasaklardan önemli."),
    W("nynorsk", "nynorsk (Norveççenin ikinci yazı dili)", "nünoşk", "Skiltene er skrevet på nynorsk.", "Tabelalar nynorsk ile yazılmış."),
    W("venne seg til", "alışmak", "venne sæy til", "Han begynner å venne seg til uttalen.", "Telaffuza alışmaya başlıyor."),
    W("sommerfugler i magen", "midede kelebekler (heyecan)", "sommerfügler i maagen", "Mira har sommerfugler i magen.", "Mira'nın midesinde kelebekler uçuşuyor."),
    W("tilbake til tegnebrettet", "en baştan başlamak", "tilbaake til teynebrette", "De måtte tilbake til tegnebrettet.", "En baştan başlamak zorunda kaldılar."),
    N("et", "ordtak", "ordtaket", "ordtak", "atasözü", "uurtaak", "Hun har et ordtak for alt.", "Her şey için bir atasözü var."),
    W("forgjeves", "boşuna", "foryeeves", "Han venter ikke forgjeves.", "Boşuna beklemiyor."),
    N("en", "sammenheng", "sammenhengen", "sammenhenger", "bağlantı, ilişki", "sammenheng", "Hun forklarer komplekse sammenhenger.", "Karmaşık ilişkileri açıklıyor."),
    W("faktisk", "aslında, gerçekten", "faktisk", "Det var faktisk Emil som introduserte dem.", "Onları tanıştıran aslında Emil'di."),
    N("et", "brudepar", "brudeparet", "brudepar", "gelin ve damat", "brüdepaar", "Han skåler for brudeparet.", "Gelin ve damat için kadeh kaldırıyor.")
  ],
  dialogue: [["A", "Hørte du debatten om ytringsfrihet i går?", "Dün ifade özgürlüğü tartışmasını dinledin mi?"], ["B", "Ja, og det var faktisk Mira som hadde de beste argumentene.", "Evet, en iyi argümanlar aslında Mira'nınkilerdi."], ["A", "Hadde jeg bare sett hele sendingen! Jeg rakk bare slutten.", "Keşke yayının tamamını izleseydim! Sadece sonuna yetişebildim."], ["B", "Den ligger på nettet, så det er ikke for sent.", "İnternette var, yani geç değil."]],
  quiz: [
    Q("\"Resultatene tyder på at …\" ne anlama gelir?", ["Sonuçlar … olduğuna işaret ediyor.", "Sonuçlar … olduğunu kesin olarak kanıtlıyor.", "Sonuçlar … hakkında hiçbir şey söylemiyor."], "tyde på = işaret etmek; kesin kanıt anlamı taşımaz."),
    Q("\"Bisikleti gören komşusuydu.\"", ["Det var naboen hans som hadde sett sykkelen.", "Det var naboen hans hadde sett sykkelen.", "Naboen hans det var som hadde sett sykkelen."], "Vurgulu yapı: Det var … som …"),
    Q("\"Keşke çalar saat çaldığında kalksaydı!\"", ["Hadde hun bare stått opp da vekkerklokka ringte!", "Hvis hun bare står opp da vekkerklokka ringte!", "Hun hadde bare stått opp da vekkerklokka ringer!"], "Hadde + özne + bare + partisipp = keşke."),
    Q("\"Det nytter ikke å gråte over spilt melk\" ne demek?", ["Olan olmuşa üzülmenin faydası yok.", "Süt dökmek uğursuzluktur.", "Mutfakta dikkatli olmalısın."], "Geçmişte kalan bir şey için üzülmek işe yaramaz."),
    Q("\"De møtes på midten\" müzakerede ne demek?", ["İki taraf da taviz verip ortada buluşuyor.", "Toplantı yarıda bitiyor.", "Masanın ortasında oturuyorlar."], "møtes på midten = orta yolda buluşmak."),
    Q("Mira'ya göre yasaklardan daha önemli olan nedir?", ["kildekritikk", "ytringsfrihet", "propaganda"], "Mira svarer at kildekritikk er viktigere enn forbud."),
    Q("Sogn lehçesinde hvor nasıl söyleniyor?", ["kor", "eg", "no"], "Hun sier kor i stedet for hvor og eg i stedet for jeg."),
    Q("\"tilbake til tegnebrettet\" ne demek?", ["en baştan başlamak", "resim yapmak", "tahtaya not yazmak"], "Bir plan başarısız olunca yeniden başlamak."),
    Q("\"Det finnes ikke dårlig vær, bare dårlige klær\" ne öğütler?", ["Hava nasıl olursa olsun uygun giyinip dışarı çık.", "Kötü havada evde kal.", "Pahalı giysiler satın al."], "Norveçlilerin en sevdiği atasözlerinden biri."),
    Q("\"Det som er vanskeligst, er å forklare …\" yapısı ne işe yarar?", ["Cümlenin bir bölümünü vurgulamak", "Soru sormak", "Geçmişi anlatmak"], "Det som … er … = vurgulu yapı (utbrytning).")
  ],
  review: ["Akademik dil: problemstilling, redegjøre for, tyde på, funn.", "Vurgu ve varsayım: Det var … som …; Hadde hun bare …", "Medya, lehçe, deyim ve atasözü: kronikk, nynorsk, tilbake til tegnebrettet, Roma ble ikke bygd på én dag."]
}
];

export default [...asExtra("A0", A0), ...asExtra("A1", A1), ...asExtra("A2", A2), ...asExtra("B1", B1), ...asExtra("B2", B2), ...asExtra("C1", C1)];
