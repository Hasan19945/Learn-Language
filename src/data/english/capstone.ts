import { Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { a0Stories } from "./a0Stories";

const A0: LessonDef[] = [
{
  id: "en-a0-story", title: "İlk hikâyeler", no: "My first stories", icon: "spark", stories: a0Stories("tr"),
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

export default asExtra("A0", A0);
