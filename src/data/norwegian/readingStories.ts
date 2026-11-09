import type { Story, StoryHero, StoryMood, StoryPlace } from "../../types";

type Help = "tr" | "en";

interface Source {
  hero: StoryHero;
  casual?: boolean;
  title: Record<Help, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; en: string }[];
}

const STORIES: Record<"a0" | "a1", Source[]> = {
  a0: [
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
  ],
  a1: [
    {
      hero: "mira",
      title: { tr: "Mira'nın ailesi geliyor", en: "Mira's family visits" },
      scenes: [
        { place: "home", mood: "happy",
          text: "Mira har en stor familie. Faren hennes heter Ali, og mora hennes heter Leyla.",
          tr: "Mira'nın kalabalık bir ailesi var. Babasının adı Ali, annesinin adı Leyla.",
          en: "Mira has a big family. Her father is called Ali, and her mother is called Leyla." },
        { place: "home", mood: "thinking",
          text: "Hun har en bror og ei søster. Broren er tjue år, og søstera er femten år.",
          tr: "Bir erkek kardeşi ve bir kız kardeşi var. Erkek kardeşi yirmi, kız kardeşi on beş yaşında.",
          en: "She has a brother and a sister. Her brother is twenty, and her sister is fifteen." },
        { place: "home", mood: "surprised",
          text: "I dag kommer familien til Oslo. Mira er veldig glad.",
          tr: "Bugün ailesi Oslo'ya geliyor. Mira çok mutlu.",
          en: "Today the family is coming to Oslo. Mira is very happy." },
        { place: "home", mood: "proud",
          text: "De spiser middag sammen i stua. Jeg elsker familien min, sier Mira.",
          tr: "Salonda birlikte akşam yemeği yiyorlar. Ailemi çok seviyorum, diyor Mira.",
          en: "They have dinner together in the living room. I love my family, says Mira." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil markette", en: "Emil at the shop" },
      scenes: [
        { place: "desk", mood: "happy",
          text: "Emil er i butikken. Han vil gjerne kjøpe brød og melk.",
          tr: "Emil markette. Ekmek ve süt almak istiyor.",
          en: "Emil is at the shop. He would like to buy bread and milk." },
        { place: "desk", mood: "thinking",
          text: "Brødet koster førti kroner. Melka er billig, men osten er dyr.",
          tr: "Ekmek kırk kron. Süt ucuz ama peynir pahalı.",
          en: "The bread costs forty kroner. The milk is cheap, but the cheese is expensive." },
        { place: "desk", mood: "worried",
          text: "Emil har ikke kontanter, bare kort. Kan jeg betale med kort? spør han.",
          tr: "Emil'in nakit parası yok, sadece kartı var. Kartla ödeyebilir miyim? diye soruyor.",
          en: "Emil has no cash, only a card. Can I pay by card? he asks." },
        { place: "desk", mood: "proud",
          text: "Ja, selvfølgelig! Emil betaler og går hjem med maten.",
          tr: "Evet, tabii ki! Emil ödüyor ve yiyeceklerle eve gidiyor.",
          en: "Yes, of course! Emil pays and goes home with the food." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira Bergen yolunda", en: "Mira's trip to Bergen" },
      scenes: [
        { place: "home", mood: "thinking",
          text: "På fredag skal Mira til Bergen. Toget går klokka halv ni.",
          tr: "Cuma günü Mira Bergen'e gidecek. Tren sekiz buçukta kalkıyor.",
          en: "On Friday, Mira is going to Bergen. The train leaves at half past eight." },
        { place: "home", mood: "worried",
          text: "Først må hun ta bussen til stasjonen. Bussen kommer klokka åtte.",
          tr: "Önce istasyona otobüsle gitmesi gerekiyor. Otobüs saat sekizde geliyor.",
          en: "First she has to take the bus to the station. The bus comes at eight o'clock." },
        { place: "home", mood: "surprised",
          text: "Men bussen kommer ikke! Nå er klokka kvart over åtte.",
          tr: "Ama otobüs gelmiyor! Saat şimdi sekizi çeyrek geçiyor.",
          en: "But the bus doesn't come! Now it's quarter past eight." },
        { place: "desk", mood: "proud",
          text: "Mira tar en taxi og rekker toget. Hun er i Bergen klokka fire.",
          tr: "Mira taksiye biniyor ve trene yetişiyor. Saat dörtte Bergen'de.",
          en: "Mira takes a taxi and catches the train. She is in Bergen at four o'clock." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in yeni dairesi", en: "Emil's new flat" },
      scenes: [
        { place: "home", mood: "happy",
          text: "Emil har en ny leilighet. Den er liten, men stua er stor og fin.",
          tr: "Emil'in yeni bir dairesi var. Küçük ama salonu büyük ve güzel.",
          en: "Emil has a new flat. It's small, but the living room is big and nice." },
        { place: "home", mood: "thinking",
          text: "Leiligheten har ett soverom, et lite kjøkken og et nytt bad.",
          tr: "Dairede bir yatak odası, küçük bir mutfak ve yeni bir banyo var.",
          en: "The flat has one bedroom, a small kitchen and a new bathroom." },
        { place: "home", mood: "worried",
          text: "I dag er det kaldt, og det snør. Emil er hjemme og leser ei bok.",
          tr: "Bugün hava soğuk ve kar yağıyor. Emil evde ve kitap okuyor.",
          en: "Today it's cold, and it's snowing. Emil is at home, reading a book." },
        { place: "home", mood: "proud",
          text: "På søndag er det sol. Emil liker å gå på ski, så han drar på tur med en venn.",
          tr: "Pazar günü hava güneşli. Emil kayak yapmayı seviyor, bu yüzden bir arkadaşıyla doğaya çıkıyor.",
          en: "On Sunday, it's sunny. Emil likes skiing, so he goes on a trip with a friend." }
      ]
    }
  ]
};

export const readingStories = (level: keyof typeof STORIES, lang: Help): Story[] => STORIES[level].map(s => ({
  hero: s.hero,
  casual: s.casual,
  title: s.title[lang],
  scenes: s.scenes.map(({ place, mood, text, tr, en }) => ({ place, mood, text, tr: lang === "tr" ? tr : en }))
}));
