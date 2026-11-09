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

export default [...asExtra("A0", A0), ...asExtra("A1", A1)];
