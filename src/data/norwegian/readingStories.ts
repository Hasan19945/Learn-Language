import type { Story, StoryHero, StoryMood, StoryPlace } from "../../types";

type Help = "tr" | "en";

interface Source {
  hero: StoryHero;
  casual?: boolean;
  title: Record<Help, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; en: string }[];
}

const STORIES: Record<"a0" | "a1" | "a2", Source[]> = {
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
  ],
  a2: [
    {
      hero: "mira",
      title: { tr: "Mira'nın hafta sonu", en: "Mira's weekend" },
      scenes: [
        { place: "desk", mood: "happy",
          text: "I helgen var Mira i Bergen. På lørdag gikk hun på kino med en venn.",
          tr: "Hafta sonu Mira Bergen'deydi. Cumartesi bir arkadaşıyla sinemaya gitti.",
          en: "At the weekend, Mira was in Bergen. On Saturday she went to the cinema with a friend." },
        { place: "desk", mood: "happy",
          text: "Etterpå spiste de pizza og snakket lenge.",
          tr: "Sonra pizza yediler ve uzun uzun konuştular.",
          en: "Afterwards they ate pizza and talked for a long time." },
        { place: "home", mood: "thinking",
          text: "På søndag regnet det hele dagen, så hun var hjemme og leste.",
          tr: "Pazar günü bütün gün yağmur yağdı, bu yüzden evde kalıp kitap okudu.",
          en: "On Sunday it rained all day, so she stayed at home and read." },
        { place: "home", mood: "proud",
          text: "I går kom hun hjem til Oslo. Det var en fin helg.",
          tr: "Dün Oslo'ya döndü. Güzel bir hafta sonuydu.",
          en: "Yesterday she came home to Oslo. It was a nice weekend." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in Norveç'teki iki yılı", en: "Emil's two years in Norway" },
      scenes: [
        { place: "home", mood: "happy",
          text: "Emil har bodd i Bergen i to år. Han har lært mye norsk.",
          tr: "Emil iki yıldır Bergen'de yaşıyor. Çok Norveççe öğrendi.",
          en: "Emil has lived in Bergen for two years. He has learned a lot of Norwegian." },
        { place: "home", mood: "thinking",
          text: "Han har sett nordlyset én gang, men han har aldri vært i Tromsø.",
          tr: "Kuzey ışıklarını bir kez gördü ama Tromsø'ya hiç gitmedi.",
          en: "He has seen the northern lights once, but he has never been to Tromsø." },
        { place: "home", mood: "happy",
          text: "I fjor var han i Lofoten med familien.",
          tr: "Geçen yıl ailesiyle Lofoten'deydi.",
          en: "Last year he was in Lofoten with his family." },
        { place: "home", mood: "proud",
          text: "Neste år skal han endelig reise til Tromsø.",
          tr: "Gelecek yıl sonunda Tromsø'ya gidecek.",
          en: "Next year he is finally going to travel to Tromsø." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira doktorda", en: "Mira at the doctor's" },
      scenes: [
        { place: "home", mood: "worried",
          text: "I går våknet Mira med vondt i halsen. Hun hadde også feber.",
          tr: "Dün Mira boğaz ağrısıyla uyandı. Ateşi de vardı.",
          en: "Yesterday Mira woke up with a sore throat. She also had a fever." },
        { place: "home", mood: "thinking",
          text: "Hun ringte legen og bestilte time.",
          tr: "Doktoru arayıp randevu aldı.",
          en: "She called the doctor and booked an appointment." },
        { place: "clinic", mood: "thinking",
          text: "Legen sa at hun måtte hvile i tre dager.",
          tr: "Doktor üç gün dinlenmesi gerektiğini söyledi.",
          en: "The doctor said she had to rest for three days." },
        { place: "home", mood: "proud",
          text: "Nå føler hun seg mye bedre.",
          tr: "Şimdi kendini çok daha iyi hissediyor.",
          en: "Now she feels much better." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in yeni işi", en: "Emil's new job" },
      scenes: [
        { place: "meeting", mood: "happy",
          text: "Emil har en ny jobb på et kontor. Sjefen hans er hyggelig.",
          tr: "Emil'in bir ofiste yeni bir işi var. Patronu nazik biri.",
          en: "Emil has a new job in an office. His boss is nice." },
        { place: "meeting", mood: "happy",
          text: "Han liker jobben fordi han lærer mye.",
          tr: "İşi seviyor, çünkü çok şey öğreniyor.",
          en: "He likes the job because he learns a lot." },
        { place: "meeting", mood: "worried",
          text: "Men han er ofte sliten, fordi han ikke får mange pauser.",
          tr: "Ama sık sık yoruluyor, çünkü fazla molası olmuyor.",
          en: "But he is often tired, because he doesn't get many breaks." },
        { place: "meeting", mood: "proud",
          text: "Han sier til sjefen at han trenger en pause hver dag. Sjefen er enig.",
          tr: "Patronuna her gün bir molaya ihtiyacı olduğunu söylüyor. Patronu da aynı fikirde.",
          en: "He tells his boss that he needs a break every day. The boss agrees." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira daire arıyor", en: "Mira looks for a flat" },
      scenes: [
        { place: "home", mood: "thinking",
          text: "Mira leter etter en ny leilighet. Hun ser en annonse på nettet.",
          tr: "Mira yeni bir daire arıyor. İnternette bir ilan görüyor.",
          en: "Mira is looking for a new flat. She sees an advert online." },
        { place: "home", mood: "happy",
          text: "Hun ringer og spør om leiligheten er ledig.",
          tr: "Arayıp dairenin boş olup olmadığını soruyor.",
          en: "She calls and asks if the flat is available." },
        { place: "home", mood: "surprised",
          text: "Hun må betale 11 000 kroner i husleie, og strøm er inkludert.",
          tr: "Kira olarak 11 000 kron ödemesi gerekiyor ve elektrik dahil.",
          en: "She has to pay 11,000 kroner in rent, and electricity is included." },
        { place: "home", mood: "proud",
          text: "I mars flytter hun inn.",
          tr: "Martta taşınıyor.",
          en: "In March she moves in." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in yaz planları", en: "Emil's summer plans" },
      scenes: [
        { place: "home", mood: "happy",
          text: "I sommer skal Emil reise til Lofoten med familien.",
          tr: "Bu yaz Emil ailesiyle Lofoten'e gidecek.",
          en: "This summer, Emil is going to travel to Lofoten with his family." },
        { place: "home", mood: "thinking",
          text: "Han håper at det blir sol, men det kommer til å regne litt.",
          tr: "Güneşli olmasını umuyor ama biraz yağmur yağacak.",
          en: "He hopes it will be sunny, but it's going to rain a bit." },
        { place: "home", mood: "worried",
          text: "Hvis det regner, skal de lese bøker og spille kort.",
          tr: "Yağmur yağarsa kitap okuyup kart oynayacaklar.",
          en: "If it rains, they will read books and play cards." },
        { place: "home", mood: "proud",
          text: "Emil gleder seg til ferien!",
          tr: "Emil tatili dört gözle bekliyor!",
          en: "Emil is looking forward to the holiday!" }
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
