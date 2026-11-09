import { N, Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { a0Stories } from "./a0Stories";

const A0: LessonDef[] = [
{
  id: "a0-story", title: "İlk hikâyeler", no: "Mine første historier", icon: "spark", stories: a0Stories("tr"),
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

export default asExtra("A0", A0);
