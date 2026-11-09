import type { Story, StoryHero, StoryMood, StoryPlace } from "../../types";
import type { HelpLang } from "./itStories";

interface Source {
  hero: StoryHero;
  casual?: boolean;
  title: Record<HelpLang, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; nb: string }[];
}

const STORIES: Record<"a0" | "a1", Source[]> = {
  a0: [
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
          nb: "Emil har to barn, en gutt og ei jente. Gutten er sju, og jenta er fem." },
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
  ],
  a1: [
    {
      hero: "mira",
      title: { tr: "Mira'nın ailesi geliyor", nb: "Familien til Mira kommer" },
      scenes: [
        { place: "home", mood: "happy",
          text: "Mira has a big family. Her father is called Ali, and her mother is called Leyla.",
          tr: "Mira'nın kalabalık bir ailesi var. Babasının adı Ali, annesinin adı Leyla.",
          nb: "Mira har en stor familie. Faren hennes heter Ali, og mora hennes heter Leyla." },
        { place: "home", mood: "thinking",
          text: "She has a brother and a sister. Her brother is twenty, and her sister is fifteen.",
          tr: "Bir erkek kardeşi ve bir kız kardeşi var. Erkek kardeşi yirmi, kız kardeşi on beş yaşında.",
          nb: "Hun har en bror og ei søster. Broren er tjue, og søstera er femten." },
        { place: "home", mood: "surprised",
          text: "Today her family is coming to London. Mira is very happy.",
          tr: "Bugün ailesi Londra'ya geliyor. Mira çok mutlu.",
          nb: "I dag kommer familien hennes til London. Mira er veldig glad." },
        { place: "home", mood: "proud",
          text: "They have dinner together in the living room. I love my family, says Mira.",
          tr: "Salonda birlikte akşam yemeği yiyorlar. Ailemi çok seviyorum, diyor Mira.",
          nb: "De spiser middag sammen i stua. Jeg elsker familien min, sier Mira." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil markette", nb: "Emil i butikken" },
      scenes: [
        { place: "desk", mood: "happy",
          text: "Emil is at the shop. He would like to buy bread and milk.",
          tr: "Emil markette. Ekmek ve süt almak istiyor.",
          nb: "Emil er i butikken. Han vil gjerne kjøpe brød og melk." },
        { place: "desk", mood: "thinking",
          text: "The bread costs two pounds. The milk is cheap, but the cheese is expensive.",
          tr: "Ekmek iki sterlin. Süt ucuz ama peynir pahalı.",
          nb: "Brødet koster to pund. Melka er billig, men osten er dyr." },
        { place: "desk", mood: "worried",
          text: "Emil doesn't have any cash, only a card. Can I pay by card? he asks.",
          tr: "Emil'in hiç nakit parası yok, sadece kartı var. Kartla ödeyebilir miyim? diye soruyor.",
          nb: "Emil har ikke kontanter, bare kort. Kan jeg betale med kort? spør han." },
        { place: "desk", mood: "proud",
          text: "Yes, of course! Emil pays and goes home with the food.",
          tr: "Evet, tabii ki! Emil ödüyor ve yiyeceklerle eve gidiyor.",
          nb: "Ja, selvfølgelig! Emil betaler og går hjem med maten." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira Manchester yolunda", nb: "Mira skal til Manchester" },
      scenes: [
        { place: "home", mood: "thinking",
          text: "On Friday, Mira is going to Manchester. The train leaves at half past eight.",
          tr: "Cuma günü Mira Manchester'a gidecek. Tren sekiz buçukta kalkıyor.",
          nb: "På fredag skal Mira til Manchester. Toget går halv ni." },
        { place: "home", mood: "worried",
          text: "First she has to take the bus to the station. The bus comes at eight o'clock.",
          tr: "Önce istasyona otobüsle gitmesi gerekiyor. Otobüs saat sekizde geliyor.",
          nb: "Først må hun ta bussen til stasjonen. Bussen kommer klokka åtte." },
        { place: "home", mood: "surprised",
          text: "But the bus doesn't come! It's quarter past eight now.",
          tr: "Ama otobüs gelmiyor! Saat şimdi sekizi çeyrek geçiyor.",
          nb: "Men bussen kommer ikke! Nå er klokka kvart over åtte." },
        { place: "desk", mood: "proud",
          text: "Mira takes a taxi and catches the train. She arrives in Manchester at four o'clock.",
          tr: "Mira taksiye biniyor ve trene yetişiyor. Saat dörtte Manchester'a varıyor.",
          nb: "Mira tar en taxi og rekker toget. Hun kommer til Manchester klokka fire." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in yeni dairesi", nb: "Den nye leiligheten til Emil" },
      scenes: [
        { place: "home", mood: "happy",
          text: "Emil has a new flat. It is small, but the living room is big and nice.",
          tr: "Emil'in yeni bir dairesi var. Küçük ama salonu büyük ve güzel.",
          nb: "Emil har en ny leilighet. Den er liten, men stua er stor og fin." },
        { place: "home", mood: "thinking",
          text: "The flat has one bedroom, a small kitchen and a new bathroom.",
          tr: "Dairede bir yatak odası, küçük bir mutfak ve yeni bir banyo var.",
          nb: "Leiligheten har ett soverom, et lite kjøkken og et nytt bad." },
        { place: "home", mood: "worried",
          text: "Today it is cold, and it is snowing. Emil is at home and reads a book.",
          tr: "Bugün hava soğuk ve kar yağıyor. Emil evde ve kitap okuyor.",
          nb: "I dag er det kaldt, og det snør. Emil er hjemme og leser ei bok." },
        { place: "home", mood: "proud",
          text: "On Sunday it is sunny. Emil likes skiing, so he goes out with a friend.",
          tr: "Pazar günü hava güneşli. Emil kayak yapmayı seviyor, bu yüzden bir arkadaşıyla dışarı çıkıyor.",
          nb: "På søndag er det sol. Emil liker å gå på ski, så han drar ut med en venn." }
      ]
    }
  ]
};

export const readingStories = (level: keyof typeof STORIES, lang: HelpLang): Story[] => STORIES[level].map(s => ({
  hero: s.hero,
  casual: s.casual,
  title: s.title[lang],
  scenes: s.scenes.map(({ place, mood, text, tr, nb }) => ({ place, mood, text, tr: lang === "tr" ? tr : nb }))
}));
