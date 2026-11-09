import type { Story, StoryHero, StoryMood, StoryPlace } from "../../types";
import type { HelpLang } from "./itStories";

interface Source {
  hero: StoryHero;
  casual?: boolean;
  title: Record<HelpLang, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; nb: string }[];
}

const STORIES: Source[] = [
  {
    hero: "mira",
    title: { tr: "Mira Londra'da", nb: "Mira i London" },
    scenes: [
      { place: "home", mood: "happy",
        text: "Hi! My name is Mira. I come from Turkey. Now I live in London.",
        tr: "Merhaba! Benim adım Mira. Türkiye'den geliyorum. Şimdi Londra'da yaşıyorum.",
        nb: "Hei! Jeg heter Mira. Jeg kommer fra Tyrkia. Nå bor jeg i London." },
      { place: "home", mood: "thinking",
        text: "I am a student, and I am learning English. I understand a little English now.",
        tr: "Öğrenciyim ve İngilizce öğreniyorum. Artık biraz İngilizce anlıyorum.",
        nb: "Jeg er student, og jeg lærer engelsk. Jeg forstår litt engelsk nå." },
      { place: "desk", mood: "happy",
        text: "Today I don't work. I drink coffee and eat an apple.",
        tr: "Bugün çalışmıyorum. Kahve içiyorum ve bir elma yiyorum.",
        nb: "I dag jobber jeg ikke. Jeg drikker kaffe og spiser et eple." },
      { place: "desk", mood: "surprised",
        text: "Then a friend comes in. His name is Emil, and he is a teacher.",
        tr: "Sonra bir arkadaş içeri giriyor. Adı Emil ve o öğretmen.",
        nb: "Så kommer en venn inn. Han heter Emil, og han er lærer." },
      { place: "home", mood: "proud",
        text: "Do you want to have dinner tonight, Emil? Yes, I'd love to! We have dinner together.",
        tr: "Bu akşam yemek yemek ister misin, Emil? Evet, memnuniyetle! Birlikte akşam yemeği yiyoruz.",
        nb: "Vil du spise middag i kveld, Emil? Ja, gjerne! Vi spiser middag sammen." }
    ]
  },
  {
    hero: "emil",
    casual: true,
    title: { tr: "Emil'in ailesi", nb: "Familien til Emil" },
    scenes: [
      { place: "home", mood: "happy",
        text: "This is Emil. He lives in a house in Bristol.",
        tr: "Bu Emil. Bristol'da bir evde yaşıyor.",
        nb: "Dette er Emil. Han bor i et hus i Bristol." },
      { place: "home", mood: "thinking",
        text: "Emil has two children, a boy and a girl. The boy is seven, and the girl is five.",
        tr: "Emil'in iki çocuğu var, bir oğlan ve bir kız. Oğlan yedi yaşında, kız beş yaşında.",
        nb: "Emil har to barn, en gutt og ei jente. Gutten er sju år, og jenta er fem." },
      { place: "desk", mood: "happy",
        text: "Emil is a teacher. He works in Bristol, and he has a car.",
        tr: "Emil öğretmen. Bristol'da çalışıyor ve bir arabası var.",
        nb: "Emil er lærer. Han jobber i Bristol, og han har en bil." },
      { place: "home", mood: "worried",
        text: "The car isn't here today. Emil walks to work.",
        tr: "Araba bugün burada değil. Emil işe yürüyerek gidiyor.",
        nb: "Bilen er ikke her i dag. Emil går på jobb." },
      { place: "home", mood: "proud",
        text: "This evening they have dinner together. The boy and the girl eat apples, and Emil drinks coffee.",
        tr: "Bu akşam birlikte akşam yemeği yiyorlar. Oğlan ve kız elma yiyor, Emil kahve içiyor.",
        nb: "I kveld spiser de middag sammen. Gutten og jenta spiser epler, og Emil drikker kaffe." }
    ]
  }
];

export const a0Stories = (lang: HelpLang): Story[] => STORIES.map(s => ({
  hero: s.hero,
  casual: s.casual,
  title: s.title[lang],
  scenes: s.scenes.map(({ place, mood, text, tr, nb }) => ({ place, mood, text, tr: lang === "tr" ? tr : nb }))
}));
