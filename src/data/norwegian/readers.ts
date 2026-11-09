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

export default [...asExtra("A0", A0), ...asExtra("A1", A1), ...asExtra("A2", A2)];
