import type { Story, StoryHero, StoryMood, StoryPlace } from "../../types";

type Help = "tr" | "en";

interface Source {
  hero: StoryHero;
  casual?: boolean;
  title: Record<Help, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; en: string }[];
}

const STORIES: Source[] = [
  {
    hero: "mira",
    title: { tr: "Mira Oslo'da", en: "Mira in Oslo" },
    scenes: [
      { place: "home", mood: "happy",
        text: "Hei! Jeg heter Mira. Jeg kommer fra Tyrkia. Nå bor jeg i Oslo.",
        tr: "Merhaba! Benim adım Mira. Türkiye'den geliyorum. Şimdi Oslo'da yaşıyorum.",
        en: "Hi! My name is Mira. I come from Turkey. Now I live in Oslo." },
      { place: "home", mood: "thinking",
        text: "Jeg er student, og jeg lærer norsk. Jeg forstår litt norsk nå.",
        tr: "Öğrenciyim ve Norveççe öğreniyorum. Artık biraz Norveççe anlıyorum.",
        en: "I'm a student, and I'm learning Norwegian. I understand a little Norwegian now." },
      { place: "desk", mood: "happy",
        text: "I dag jobber jeg ikke. Jeg drikker kaffe og spiser et eple.",
        tr: "Bugün çalışmıyorum. Kahve içiyorum ve bir elma yiyorum.",
        en: "Today I'm not working. I'm drinking coffee and eating an apple." },
      { place: "desk", mood: "surprised",
        text: "En venn kommer. Han heter Emil, og han er lærer.",
        tr: "Bir arkadaş geliyor. Adı Emil ve o öğretmen.",
        en: "A friend comes. His name is Emil, and he's a teacher." },
      { place: "home", mood: "proud",
        text: "Vil du spise middag i kveld, Emil? Ja, gjerne! Vi spiser middag sammen.",
        tr: "Bu akşam yemek yemek ister misin, Emil? Evet, memnuniyetle! Birlikte akşam yemeği yiyoruz.",
        en: "Do you want to have dinner tonight, Emil? Yes, I'd love to! We have dinner together." }
    ]
  },
  {
    hero: "emil",
    casual: true,
    title: { tr: "Emil'in ailesi", en: "Emil's family" },
    scenes: [
      { place: "home", mood: "happy",
        text: "Det er Emil. Han bor i et hus i Bergen.",
        tr: "Bu Emil. Bergen'de bir evde yaşıyor.",
        en: "This is Emil. He lives in a house in Bergen." },
      { place: "home", mood: "thinking",
        text: "Emil har to barn, en gutt og ei jente. Gutten er sju år, og jenta er fem år.",
        tr: "Emil'in iki çocuğu var, bir oğlan ve bir kız. Oğlan yedi yaşında, kız beş yaşında.",
        en: "Emil has two children, a boy and a girl. The boy is seven, and the girl is five." },
      { place: "desk", mood: "happy",
        text: "Emil er lærer. Han jobber i Bergen, og han har en bil.",
        tr: "Emil öğretmen. Bergen'de çalışıyor ve bir arabası var.",
        en: "Emil is a teacher. He works in Bergen, and he has a car." },
      { place: "home", mood: "worried",
        text: "Bilen er ikke her i dag. Emil går på jobb.",
        tr: "Araba bugün burada değil. Emil işe yürüyerek gidiyor.",
        en: "The car isn't here today. Emil walks to work." },
      { place: "home", mood: "proud",
        text: "I kveld spiser de middag sammen. Gutten og jenta spiser epler, og Emil drikker kaffe.",
        tr: "Bu akşam birlikte akşam yemeği yiyorlar. Oğlan ve kız elma yiyor, Emil kahve içiyor.",
        en: "This evening they have dinner together. The boy and the girl eat apples, and Emil drinks coffee." }
    ]
  }
];

export const a0Stories = (lang: Help): Story[] => STORIES.map(s => ({
  hero: s.hero,
  casual: s.casual,
  title: s.title[lang],
  scenes: s.scenes.map(({ place, mood, text, tr, en }) => ({ place, mood, text, tr: lang === "tr" ? tr : en }))
}));
