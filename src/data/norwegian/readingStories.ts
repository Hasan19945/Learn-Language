import type { Story, StoryHero, StoryMood, StoryPlace } from "../../types";

type Help = "tr" | "en";

interface Source {
  hero: StoryHero;
  casual?: boolean;
  title: Record<Help, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; en: string }[];
}

const STORIES: Record<"a0" | "a1" | "a2" | "b1" | "b2" | "c1", Source[]> = {
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
          text: "Emil har ikke kontanter, bare kort. Han spør kassereren: Kan jeg betale med kort?",
          tr: "Emil'in nakit parası yok, sadece kartı var. Kasiyere soruyor: Kartla ödeyebilir miyim?",
          en: "Emil has no cash, only a card. He asks the cashier: Can I pay by card?" },
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
          text: "Hun må betale elleve tusen kroner i husleie, og strøm er inkludert.",
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
  ],
  b1: [
    {
      hero: "mira",
      title: { tr: "Mira Nav'da", en: "Mira at Nav" },
      scenes: [
        { place: "office", mood: "worried",
          text: "Mira mistet jobben sin forrige måned. Derfor gikk hun til Nav for å få hjelp.",
          tr: "Mira geçen ay işini kaybetti. Bu yüzden yardım almak için Nav'a gitti.",
          en: "Mira lost her job last month. So she went to Nav to get help." },
        { place: "office", mood: "thinking",
          text: "Hun trakk en kølapp og ventet i tjue minutter. Saksbehandleren som hjalp henne, var veldig vennlig.",
          tr: "Sıra numarası aldı ve yirmi dakika bekledi. Ona yardım eden memur çok nazikti.",
          en: "She took a queue ticket and waited for twenty minutes. The caseworker who helped her was very friendly." },
        { place: "office", mood: "surprised",
          text: "Hun måtte fylle ut et langt skjema på nettet. Selv om det var vanskelig, ga hun ikke opp.",
          tr: "İnternette uzun bir form doldurması gerekti. Zor olmasına rağmen pes etmedi.",
          en: "She had to fill in a long form online. Even though it was difficult, she didn't give up." },
        { place: "office", mood: "proud",
          text: "Etter to uker fikk hun svar på søknaden. Den ble godkjent!",
          tr: "İki hafta sonra başvurusuna cevap aldı. Başvurusu onaylandı!",
          en: "After two weeks she got an answer to her application. It was approved!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in iş görüşmesi", en: "Emil's job interview" },
      scenes: [
        { place: "interview", mood: "worried",
          text: "Emil hadde søkt på en stilling som lærer ved en skole i Bergen. I dag skal han på intervju.",
          tr: "Emil Bergen'deki bir okulda öğretmenlik pozisyonuna başvurmuştu. Bugün mülakata gidecek.",
          en: "Emil had applied for a position as a teacher at a school in Bergen. Today he has an interview." },
        { place: "interview", mood: "thinking",
          text: "Rektoren spurte hvorfor han ville jobbe der. Emil svarte at han liker å jobbe med barn.",
          tr: "Müdür neden orada çalışmak istediğini sordu. Emil çocuklarla çalışmayı sevdiğini söyledi.",
          en: "The head teacher asked why he wanted to work there. Emil answered that he likes working with children." },
        { place: "interview", mood: "happy",
          text: "Han fortalte også om erfaringen sin. Han har jobbet som lærer i fem år.",
          tr: "Deneyiminden de bahsetti. Beş yıldır öğretmen olarak çalışıyor.",
          en: "He also talked about his experience. He has worked as a teacher for five years." },
        { place: "interview", mood: "proud",
          text: "Tre dager senere ringte rektoren. Emil fikk jobben!",
          tr: "Üç gün sonra müdür aradı. Emil işi aldı!",
          en: "Three days later the head teacher called. Emil got the job!" }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira bankada", en: "Mira at the bank" },
      scenes: [
        { place: "bank", mood: "thinking",
          text: "Mira vil spare penger til en lang reise. Hun går i banken for å få gode råd.",
          tr: "Mira uzun bir yolculuk için para biriktirmek istiyor. İyi tavsiyeler almak için bankaya gidiyor.",
          en: "Mira wants to save money for a long trip. She goes to the bank to get some good advice." },
        { place: "bank", mood: "happy",
          text: "Rådgiveren forklarer at en sparekonto gir mer rente enn en vanlig konto.",
          tr: "Danışman, birikim hesabının normal bir hesaptan daha fazla faiz verdiğini açıklıyor.",
          en: "The adviser explains that a savings account gives more interest than an ordinary account." },
        { place: "bank", mood: "worried",
          text: "Men Mira bruker for mye penger på mat og klær. Hun må lage et budsjett.",
          tr: "Ama Mira yemeğe ve kıyafete çok fazla para harcıyor. Bir bütçe yapması gerekiyor.",
          en: "But Mira spends too much money on food and clothes. She has to make a budget." },
        { place: "bank", mood: "proud",
          text: "Nå sparer hun to tusen kroner hver måned. Jo mer hun sparer, jo gladere blir hun.",
          tr: "Artık her ay iki bin kron biriktiriyor. Ne kadar çok biriktirirse o kadar mutlu oluyor.",
          en: "Now she saves two thousand kroner every month. The more she saves, the happier she gets." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in Norveççe sınavı", en: "Emil's Norwegian test" },
      scenes: [
        { place: "classroom", mood: "worried",
          text: "Emil skal ta norskprøven på B1-nivå neste uke. Han er nervøs, fordi han ikke har øvd nok.",
          tr: "Emil gelecek hafta B1 seviyesindeki Norveççe sınavına girecek. Gergin, çünkü yeterince çalışmadı.",
          en: "Emil is taking the Norwegian test at B1 level next week. He's nervous, because he hasn't practised enough." },
        { place: "classroom", mood: "thinking",
          text: "Læreren sier at han bør lese avisen og snakke norsk hver dag. Mens barna sover, leser han og skriver.",
          tr: "Öğretmen her gün gazete okuması ve Norveççe konuşması gerektiğini söylüyor. Çocuklar uyurken o okuyor ve yazıyor.",
          en: "The teacher says he should read the newspaper and speak Norwegian every day. While the children are sleeping, he reads and writes." },
        { place: "classroom", mood: "surprised",
          text: "Prøven var lettere enn han hadde trodd. Den muntlige delen gikk spesielt bra.",
          tr: "Sınav sandığından daha kolaydı. Sözlü bölüm özellikle iyi geçti.",
          en: "The test was easier than he had thought. The oral part went especially well." },
        { place: "classroom", mood: "proud",
          text: "En måned senere fikk han resultatet. Han hadde bestått!",
          tr: "Bir ay sonra sonucu aldı. Sınavı geçmişti!",
          en: "A month later he got the result. He had passed!" }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Tren rötarlı", en: "The train is delayed" },
      scenes: [
        { place: "station", mood: "happy",
          text: "Mira skulle besøke ei venninne i Trondheim. Toget skulle gå klokka sju om morgenen.",
          tr: "Mira Trondheim'daki bir kız arkadaşını ziyaret edecekti. Tren sabah saat yedide kalkacaktı.",
          en: "Mira was going to visit a friend in Trondheim. The train was supposed to leave at seven in the morning." },
        { place: "station", mood: "worried",
          text: "Da hun kom til stasjonen, var toget forsinket. Det var signalfeil, og ingen visste hvor lenge det ville ta.",
          tr: "İstasyona vardığında tren rötarlıydı. Sinyal arızası vardı ve kimse bunun ne kadar süreceğini bilmiyordu.",
          en: "When she got to the station, the train was delayed. There was a signal fault, and nobody knew how long it would take." },
        { place: "station", mood: "thinking",
          text: "Mira synes at togene i Norge burde være mer punktlige. Likevel er tog bedre for miljøet enn fly.",
          tr: "Mira, Norveç'teki trenlerin daha dakik olması gerektiğini düşünüyor. Yine de tren çevre için uçaktan daha iyi.",
          en: "Mira thinks the trains in Norway ought to be more punctual. Still, trains are better for the environment than planes." },
        { place: "station", mood: "proud",
          text: "Etter to timer kom toget endelig. Hun fikk pengene for billetten tilbake.",
          tr: "İki saat sonra tren sonunda geldi. Biletinin parasını geri aldı.",
          en: "After two hours the train finally came. She got the money for her ticket back." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil mutfakta", en: "Emil in the kitchen" },
      scenes: [
        { place: "kitchen", mood: "happy",
          text: "På lørdag skal Emil lage middag til naboene sine. Han har funnet en oppskrift på fiskesuppe.",
          tr: "Cumartesi Emil komşularına akşam yemeği yapacak. Balık çorbası için bir tarif buldu.",
          en: "On Saturday Emil is going to make dinner for his neighbours. He has found a recipe for fish soup." },
        { place: "kitchen", mood: "thinking",
          text: "Først skjærer han grønnsakene, og så koker han fisken i tjue minutter. Suppen må røres hele tiden.",
          tr: "Önce sebzeleri doğruyor, sonra balığı yirmi dakika pişiriyor. Çorbanın sürekli karıştırılması gerekiyor.",
          en: "First he chops the vegetables, and then he cooks the fish for twenty minutes. The soup has to be stirred all the time." },
        { place: "kitchen", mood: "surprised",
          text: "Plutselig ringer det på døra, og suppen koker over! Emil hadde glemt å skru ned varmen.",
          tr: "Birden kapı çalıyor ve çorba taşıyor! Emil ocağı kısmayı unutmuştu.",
          en: "Suddenly the doorbell rings, and the soup boils over! Emil had forgotten to turn down the heat." },
        { place: "kitchen", mood: "proud",
          text: "Heldigvis smakte suppen nydelig. Naboene ba om oppskriften.",
          tr: "Neyse ki çorbanın tadı harikaydı. Komşular tarifi istedi.",
          en: "Luckily the soup tasted wonderful. The neighbours asked for the recipe." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Dağda kar", en: "Snow in the mountains" },
      scenes: [
        { place: "mountain", mood: "happy",
          text: "I høstferien dro Mira på fjelltur med to kolleger. De gikk opp til ei hytte som ligger ved et vann.",
          tr: "Sonbahar tatilinde Mira iki iş arkadaşıyla dağ yürüyüşüne çıktı. Bir gölün kıyısındaki bir kulübeye kadar yürüdüler.",
          en: "In the autumn holiday Mira went on a mountain hike with two colleagues. They walked up to a cabin that lies by a lake." },
        { place: "mountain", mood: "worried",
          text: "Etter en time begynte det å snø, og det ble vanskelig å se stien. Mira var redd for å gå seg vill.",
          tr: "Bir saat sonra kar yağmaya başladı ve patikayı görmek zorlaştı. Mira kaybolmaktan korkuyordu.",
          en: "After an hour it started to snow, and it became hard to see the path. Mira was afraid of getting lost." },
        { place: "mountain", mood: "thinking",
          text: "Heldigvis hadde de kart og kompass i sekken. De bestemte seg for å følge de røde merkene på steinene.",
          tr: "Neyse ki sırt çantasında harita ve pusula vardı. Taşların üzerindeki kırmızı işaretleri takip etmeye karar verdiler.",
          en: "Luckily they had a map and compass in the backpack. They decided to follow the red marks on the stones." },
        { place: "mountain", mood: "proud",
          text: "Da de kom fram til hytta, tente de bål og drakk varm kakao. Turen ble et eventyr som hun aldri kommer til å glemme.",
          tr: "Kulübeye vardıklarında ateş yaktılar ve sıcak kakao içtiler. Bu yürüyüş, asla unutmayacağı bir macera oldu.",
          en: "When they reached the cabin, they lit a fire and drank hot cocoa. The trip became an adventure that she will never forget." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil şikâyet ediyor", en: "Emil makes a complaint" },
      scenes: [
        { place: "shop", mood: "worried",
          text: "Emil kjøpte en vinterjakke for to uker siden. Nå har glidelåsen gått i stykker.",
          tr: "Emil iki hafta önce bir kış montu aldı. Şimdi fermuarı bozuldu.",
          en: "Emil bought a winter jacket two weeks ago. Now the zip has broken." },
        { place: "shop", mood: "thinking",
          text: "Han tar med kvitteringen og går tilbake til butikken. Han vil klage og bytte jakken.",
          tr: "Fişi yanına alıp mağazaya geri gidiyor. Şikâyet edip montu değiştirmek istiyor.",
          en: "He takes the receipt and goes back to the shop. He wants to complain and exchange the jacket." },
        { place: "shop", mood: "surprised",
          text: "Ekspeditøren sier at jakken har to års garanti. Emil kan velge mellom en ny jakke og å få pengene tilbake.",
          tr: "Satış görevlisi montun iki yıl garantisi olduğunu söylüyor. Emil yeni bir mont ile parasını geri almak arasında seçim yapabilir.",
          en: "The shop assistant says that the jacket has a two-year guarantee. Emil can choose between a new jacket and getting his money back." },
        { place: "shop", mood: "proud",
          text: "Han velger en ny jakke som er både varmere og lettere. Han er fornøyd med servicen.",
          tr: "Hem daha sıcak hem daha hafif olan yeni bir mont seçiyor. Hizmetten memnun.",
          en: "He chooses a new jacket that is both warmer and lighter. He is satisfied with the service." }
      ]
    }
  ],
  b2: [
    {
      hero: "mira",
      title: { tr: "Ev sahibine resmî e-posta", en: "A formal email to the landlord" },
      scenes: [
        { place: "study", mood: "worried",
          text: "Det har vært fuktig på badet til Mira i flere måneder, og nå har det kommet mugg på veggen. Utleieren har ikke svart på meldingene hennes.",
          tr: "Mira'nın banyosu aylardır nemli ve artık duvarda küf oluştu. Ev sahibi mesajlarına cevap vermedi.",
          en: "Mira's bathroom has been damp for several months, and now mould has appeared on the wall. The landlord hasn't answered her messages." },
        { place: "study", mood: "thinking",
          text: "Derfor bestemmer hun seg for å skrive en formell e-post. Hun holder seg til fakta og legger ved bilder av veggen.",
          tr: "Bu yüzden resmî bir e-posta yazmaya karar veriyor. Sadece gerçeklere bağlı kalıyor ve duvarın fotoğraflarını ekliyor.",
          en: "So she decides to write a formal email. She sticks to the facts and attaches photos of the wall." },
        { place: "study", mood: "thinking",
          text: "I e-posten ber hun om at saken blir behandlet så snart som mulig. Dersom hun ikke får svar innen fjorten dager, vil hun kontakte Leieboerforeningen.",
          tr: "E-postada konunun en kısa sürede ele alınmasını rica ediyor. On dört gün içinde cevap alamazsa Kiracılar Derneği'ne başvuracak.",
          en: "In the email she asks for the matter to be dealt with as soon as possible. If she doesn't get an answer within fourteen days, she will contact the Tenants' Association." },
        { place: "study", mood: "proud",
          text: "Allerede dagen etter ringer utleieren og beklager. En håndverker kommer neste uke for å fikse problemet.",
          tr: "Daha ertesi gün ev sahibi arayıp özür diliyor. Gelecek hafta sorunu çözmek için bir usta gelecek.",
          en: "The very next day, the landlord calls and apologises. A tradesman is coming next week to fix the problem." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Halk toplantısı", en: "The public meeting" },
      scenes: [
        { place: "townhall", mood: "happy",
          text: "Kommunen vil bygge en ny vei gjennom parken i bydelen der Emil bor. I kveld er det folkemøte om saken.",
          tr: "Belediye, Emil'in yaşadığı semtteki parkın içinden yeni bir yol yapmak istiyor. Bu akşam konuyla ilgili bir halk toplantısı var.",
          en: "The council wants to build a new road through the park in the district where Emil lives. Tonight there is a public meeting about it." },
        { place: "townhall", mood: "thinking",
          text: "På den ene siden vil veien gjøre det lettere å komme seg til sentrum. På den andre siden vil barna miste et viktig sted å leke.",
          tr: "Bir yandan yol, şehir merkezine ulaşmayı kolaylaştıracak. Öte yandan çocuklar oyun oynayabilecekleri önemli bir yeri kaybedecek.",
          en: "On the one hand, the road will make it easier to get to the city centre. On the other hand, the children will lose an important place to play." },
        { place: "townhall", mood: "worried",
          text: "Emil er nervøs, men han tar ordet likevel. Han mener at kommunen heller bør satse på et bedre busstilbud, ettersom det er bra både for miljøet og for folkehelsen.",
          tr: "Emil gergin ama yine de söz alıyor. Belediyenin bunun yerine daha iyi otobüs hizmetine yatırım yapması gerektiğini savunuyor, çünkü bu hem çevre hem de halk sağlığı için iyi.",
          en: "Emil is nervous, but he speaks up anyway. He thinks the council should rather invest in better bus services, since that is good both for the environment and for public health." },
        { place: "townhall", mood: "proud",
          text: "Mange i salen klapper og sier seg enige. Politikerne lover å vurdere forslaget hans nøye.",
          tr: "Salondaki birçok kişi alkışlıyor ve katıldığını söylüyor. Politikacılar önerisini dikkatle değerlendirmeye söz veriyor.",
          en: "Many people in the hall clap and say they agree. The politicians promise to consider his proposal carefully." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Kafede deyimler", en: "Idioms at the café" },
      scenes: [
        { place: "cafe", mood: "happy",
          text: "Mira har begynt å jobbe deltid på en kafé i sentrum. Kollegaen hennes, Ola, elsker faste uttrykk.",
          tr: "Mira şehir merkezindeki bir kafede yarı zamanlı çalışmaya başladı. İş arkadaşı Ola deyimlere bayılıyor.",
          en: "Mira has started working part-time at a café in the city centre. Her colleague, Ola, loves idioms." },
        { place: "cafe", mood: "surprised",
          text: "Den første dagen er det kø helt ut døra, og Mira søler kaffe på en gjest. Ola smiler og sier at det ikke er verdens undergang.",
          tr: "İlk gün kapıya kadar kuyruk var ve Mira bir müşterinin üstüne kahve döküyor. Ola gülümseyip bunun dünyanın sonu olmadığını söylüyor.",
          en: "On the first day the queue goes all the way out the door, and Mira spills coffee on a customer. Ola smiles and says it isn't the end of the world." },
        { place: "cafe", mood: "thinking",
          text: "Etter en uke går alt som smurt. Mira skjønner at uttrykket betyr at alt går veldig greit.",
          tr: "Bir hafta sonra her şey yağ gibi akıyor. Mira bu deyimin her şeyin çok iyi gittiği anlamına geldiğini anlıyor.",
          en: "After a week, everything is going like clockwork. Mira realises that the expression means that everything is going very smoothly." },
        { place: "cafe", mood: "proud",
          text: "Nå bruker hun uttrykkene selv. Da sjefen spør om hun vil ha flere vakter, svarer hun at det passer midt i blinken!",
          tr: "Artık deyimleri kendisi de kullanıyor. Patronu daha fazla vardiya isteyip istemediğini sorunca, bunun tam on ikiden vurduğunu söylüyor!",
          en: "Now she uses the expressions herself. When the boss asks if she wants more shifts, she answers that it suits her down to the ground!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Taşınma günü", en: "Moving day" },
      scenes: [
        { place: "moving", mood: "happy",
          text: "Emil og familien skal flytte inn i et større hus på lørdag. Hele uka har de pakket ting ned i esker.",
          tr: "Emil ve ailesi cumartesi günü daha büyük bir eve taşınacak. Bütün hafta eşyaları kolilere yerleştirdiler.",
          en: "Emil and his family are moving into a bigger house on Saturday. All week they have been packing things into boxes." },
        { place: "moving", mood: "worried",
          text: "På lørdag morgen ringer firmaet som skulle leie ut flyttebilen, og sier at de må avlyse. Emil må finne ut av det i en fart.",
          tr: "Cumartesi sabahı nakliye aracını kiralayacak olan firma arayıp iptal etmek zorunda olduğunu söylüyor. Emil'in sorunu hemen çözmesi gerekiyor.",
          en: "On Saturday morning, the company that was going to rent out the removal van calls and says they have to cancel. Emil has to sort it out quickly." },
        { place: "moving", mood: "thinking",
          text: "Han ringer naboen, som tilbyr seg å låne dem tilhengeren sin. Sammen klarer de å bære ut sofaen og sette opp sengene i det nye huset.",
          tr: "Komşusunu arıyor; komşusu onlara römorkunu ödünç vermeyi teklif ediyor. Birlikte koltuğu dışarı taşımayı ve yeni evde yatakları kurmayı başarıyorlar.",
          en: "He calls his neighbour, who offers to lend them his trailer. Together they manage to carry out the sofa and put up the beds in the new house." },
        { place: "moving", mood: "proud",
          text: "Om kvelden er de slitne, men fornøyde. Det tar nok noen uker å pakke ut alt, men nå er de endelig på plass.",
          tr: "Akşam yorgunlar ama memnunlar. Her şeyi açmak muhtemelen birkaç hafta sürecek ama artık sonunda yerleştiler.",
          en: "In the evening they are tired but happy. It will probably take a few weeks to unpack everything, but now they are finally settled." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Fazla mesai hakkı", en: "The right to overtime pay" },
      scenes: [
        { place: "reception", mood: "worried",
          text: "Mira jobber i resepsjonen på et hotell i Oslo. De siste månedene har hun jobbet mye overtid uten å få betalt for det.",
          tr: "Mira Oslo'daki bir otelin resepsiyonunda çalışıyor. Son aylarda karşılığını almadan çok fazla mesai yaptı.",
          en: "Mira works at the reception of a hotel in Oslo. In recent months she has worked a lot of overtime without being paid for it." },
        { place: "reception", mood: "thinking",
          text: "Hun leser arbeidskontrakten sin nøye. Der står det at overtid skal betales med minst førti prosent tillegg.",
          tr: "İş sözleşmesini dikkatle okuyor. Orada fazla mesainin en az yüzde kırk ek ücretle ödenmesi gerektiği yazıyor.",
          en: "She reads her employment contract carefully. It says that overtime must be paid with at least a forty per cent supplement." },
        { place: "reception", mood: "thinking",
          text: "Hun tar kontakt med den tillitsvalgte, som forklarer hvilke rettigheter hun har. Sammen tar de opp saken med lederen.",
          tr: "Sendika temsilcisiyle iletişime geçiyor; temsilci ona hangi haklara sahip olduğunu açıklıyor. Birlikte konuyu müdürle görüşüyorlar.",
          en: "She contacts the union representative, who explains what rights she has. Together they raise the matter with the manager." },
        { place: "reception", mood: "proud",
          text: "Lederen innrømmer at det har skjedd en feil. Mira får etterbetalt lønnen, og hotellet lover å følge reglene i framtiden.",
          tr: "Müdür bir hata yapıldığını kabul ediyor. Mira'nın maaş farkı ödeniyor ve otel gelecekte kurallara uyacağına söz veriyor.",
          en: "The manager admits that a mistake has been made. Mira gets her back pay, and the hotel promises to follow the rules in future." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Kari'de akşam yemeği", en: "Dinner at Kari's" },
      scenes: [
        { place: "dinner", mood: "happy",
          text: "Emil er invitert på middag hos kollegaen sin, Kari. Han har med seg blomster og en kake som han har bakt selv.",
          tr: "Emil iş arkadaşı Kari'ye akşam yemeğine davetli. Yanında çiçek ve kendi yaptığı bir pasta getirdi.",
          en: "Emil is invited to dinner at his colleague Kari's place. He brings flowers and a cake that he has baked himself." },
        { place: "dinner", mood: "surprised",
          text: "Kari sier at han da ikke trengte å ta med noe. Emil vet at småordet da gjør setningen vennligere, ikke strengere.",
          tr: "Kari, bir şey getirmesine hiç gerek olmadığını söylüyor. Emil, da kelimesinin cümleyi sertleştirmediğini, aksine daha sıcak yaptığını biliyor.",
          en: "Kari says that he really didn't need to bring anything. Emil knows that the little word da makes the sentence friendlier, not stricter." },
        { place: "dinner", mood: "thinking",
          text: "Under middagen snakker de om alt mulig. Kari sier at Emil jo har bodd i Norge lenge, og at han nok snakker bedre norsk enn han tror.",
          tr: "Yemek boyunca her şeyden konuşuyorlar. Kari, Emil'in zaten uzun zamandır Norveç'te yaşadığını ve muhtemelen sandığından daha iyi Norveççe konuştuğunu söylüyor.",
          en: "During dinner they talk about all sorts of things. Kari says that Emil has, after all, lived in Norway for a long time, and that he probably speaks better Norwegian than he thinks." },
        { place: "dinner", mood: "proud",
          text: "Da han går, takker han for maten og for en hyggelig kveld. Neste gang skal han invitere Kari og familien hennes hjem til seg.",
          tr: "Giderken yemek ve güzel akşam için teşekkür ediyor. Bir dahaki sefere Kari'yi ve ailesini kendi evine davet edecek.",
          en: "When he leaves, he thanks her for the meal and for a lovely evening. Next time he is going to invite Kari and her family to his home." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Yarı maraton", en: "The half marathon" },
      scenes: [
        { place: "stadium", mood: "happy",
          text: "Mira har trent til Oslo Maraton i et halvt år. Målet hennes er å løpe halvmaraton på under to timer.",
          tr: "Mira altı aydır Oslo Maratonu için antrenman yapıyor. Hedefi yarı maratonu iki saatin altında koşmak.",
          en: "Mira has been training for the Oslo Marathon for half a year. Her goal is to run the half marathon in under two hours." },
        { place: "stadium", mood: "worried",
          text: "To uker før løpet får hun vondt i kneet. Fysioterapeuten råder henne til å ta det med ro, ellers kan skaden bli verre.",
          tr: "Yarıştan iki hafta önce dizi ağrımaya başlıyor. Fizyoterapist ona yavaşlamasını tavsiye ediyor, yoksa sakatlık kötüleşebilir.",
          en: "Two weeks before the race, her knee starts to hurt. The physiotherapist advises her to take it easy, otherwise the injury could get worse." },
        { place: "stadium", mood: "thinking",
          text: "Mira er skuffet, men hun følger rådet. I stedet for å løpe sykler og svømmer hun for å holde formen ved like.",
          tr: "Mira hayal kırıklığına uğruyor ama tavsiyeye uyuyor. Koşmak yerine formunu korumak için bisiklete biniyor ve yüzüyor.",
          en: "Mira is disappointed, but she follows the advice. Instead of running, she cycles and swims to keep in shape." },
        { place: "stadium", mood: "proud",
          text: "På løpsdagen er kneet bra igjen. Hun krysser målstreken etter én time og femtiåtte minutter, og hun er stolt som en hane!",
          tr: "Yarış günü dizi yine iyi. Bitiş çizgisini bir saat elli sekiz dakikada geçiyor ve gururdan göğsü kabarıyor!",
          en: "On race day, her knee is fine again. She crosses the finish line after one hour and fifty-eight minutes, and she is as proud as a peacock!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Sahil temizliği", en: "The beach clean-up" },
      scenes: [
        { place: "beach", mood: "happy",
          text: "En lørdag i mai blir Emil med på strandrydding sammen med en miljøorganisasjon. Været er strålende, og det er mange frivillige der.",
          tr: "Mayıs ayında bir cumartesi günü Emil bir çevre örgütüyle sahil temizliğine katılıyor. Hava harika ve orada çok sayıda gönüllü var.",
          en: "One Saturday in May, Emil joins a beach clean-up with an environmental organisation. The weather is brilliant, and there are lots of volunteers there." },
        { place: "beach", mood: "surprised",
          text: "Etter bare en time har de fylt tjue sekker med søppel. Mesteparten er plast som har drevet i land fra havet.",
          tr: "Sadece bir saat sonra yirmi torbayı çöple doldurmuşlar. Çoğu denizden kıyıya vurmuş plastik.",
          en: "After only an hour, they have filled twenty bags with rubbish. Most of it is plastic that has drifted ashore from the sea." },
        { place: "beach", mood: "worried",
          text: "En av de frivillige forteller at plasten brytes ned til mikroplast, som havner i fisken vi spiser. Emil får bakoversveis.",
          tr: "Gönüllülerden biri plastiğin mikroplastiğe dönüştüğünü ve yediğimiz balıklara karıştığını anlatıyor. Emil'in ağzı açık kalıyor.",
          en: "One of the volunteers explains that the plastic breaks down into microplastics, which end up in the fish we eat. Emil is stunned." },
        { place: "beach", mood: "proud",
          text: "Etter denne dagen bestemmer han seg for å kutte ned på engangsplast. Han mener at alle kan bidra, selv om det bare er med små endringer.",
          tr: "Bu günden sonra tek kullanımlık plastiği azaltmaya karar veriyor. Küçük değişikliklerle de olsa herkesin katkıda bulunabileceğini düşünüyor.",
          en: "After that day, he decides to cut down on single-use plastic. He thinks everyone can contribute, even if it's only with small changes." }
      ]
    }
  ],
  c1: [
    {
      hero: "mira",
      title: { tr: "Mira tezini savunuyor", en: "Mira defends her thesis" },
      scenes: [
        { place: "lecture", mood: "worried",
          text: "I dag skal Mira forsvare masteroppgaven sin om integrering på arbeidsmarkedet. Salen er full, og sensorene sitter på første rad.",
          tr: "Bugün Mira, işgücü piyasasında entegrasyon üzerine yazdığı yüksek lisans tezini savunacak. Salon dolu ve jüri üyeleri ön sırada oturuyor.",
          en: "Today Mira is defending her master's thesis on integration in the labour market. The hall is full, and the examiners are sitting in the front row." },
        { place: "lecture", mood: "thinking",
          text: "Hun legger fram problemstillingen og redegjør for metoden. Resultatene tyder på at språkkunnskaper har stor betydning for hvor raskt innvandrere får jobb.",
          tr: "Araştırma sorusunu sunuyor ve yöntemini açıklıyor. Sonuçlar, dil bilgisinin göçmenlerin ne kadar hızlı iş bulduğu üzerinde büyük önem taşıdığına işaret ediyor.",
          en: "She presents the research question and gives an account of the method. The results suggest that language skills are of great importance for how quickly immigrants find work." },
        { place: "lecture", mood: "surprised",
          text: "En av sensorene stiller et kritisk spørsmål om utvalget. Mira innrømmer at utvalget er begrenset, men argumenterer for at funnene likevel er relevante.",
          tr: "Jüri üyelerinden biri örneklemle ilgili eleştirel bir soru soruyor. Mira örneklemin sınırlı olduğunu kabul ediyor ama bulguların yine de anlamlı olduğunu savunuyor.",
          en: "One of the examiners asks a critical question about the sample. Mira admits that the sample is limited, but argues that the findings are nevertheless relevant." },
        { place: "lecture", mood: "proud",
          text: "Etter en time med diskusjon får hun beskjed om at oppgaven er bestått med karakteren A. Det var verdt alle de sene kveldene på lesesalen!",
          tr: "Bir saatlik tartışmanın ardından tezinin A notuyla kabul edildiği bildiriliyor. Okuma salonundaki onca geç saate değdi!",
          en: "After an hour of discussion, she is told that the thesis has passed with an A. It was worth all those late evenings in the reading room!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Çalınan bisiklet", en: "The stolen bike" },
      scenes: [
        { place: "police", mood: "worried",
          text: "Da Emil kom ut fra jobben i går, var sykkelen hans borte. Det var ikke første gang det skjedde i det strøket.",
          tr: "Emil dün işten çıktığında bisikleti yoktu. O semtte bu ilk kez olmuyordu.",
          en: "When Emil came out of work yesterday, his bike was gone. It wasn't the first time it had happened in that area." },
        { place: "police", mood: "thinking",
          text: "Han dro til politistasjonen for å anmelde tyveriet. Betjenten spurte om sykkelen hadde vært låst, og Emil svarte at det var nettopp det som var så rart.",
          tr: "Hırsızlığı bildirmek için karakola gitti. Polis memuru bisikletin kilitli olup olmadığını sordu, Emil de tuhaf olanın tam da bu olduğunu söyledi.",
          en: "He went to the police station to report the theft. The officer asked whether the bike had been locked, and Emil answered that that was exactly what was so strange." },
        { place: "police", mood: "surprised",
          text: "Det var nemlig en ny og dyr lås han hadde kjøpt bare uka før. Det er slike låser tyvene klipper opp på sekunder, forklarte betjenten.",
          tr: "Çünkü sadece bir hafta önce aldığı yeni ve pahalı bir kilitti. Hırsızların saniyeler içinde kestiği kilitler tam da bunlar, diye açıkladı memur.",
          en: "You see, it was a new and expensive lock that he had bought only the week before. It's locks like that the thieves cut open in seconds, the officer explained." },
        { place: "police", mood: "proud",
          text: "Tre dager senere ringte politiet. Det var naboen hans som hadde sett sykkelen bak et kjøpesenter!",
          tr: "Üç gün sonra polis aradı. Bisikleti bir alışveriş merkezinin arkasında gören, komşusuydu!",
          en: "Three days later, the police called. It was his neighbour who had seen the bike behind a shopping centre!" }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Kaçan uçak", en: "The missed flight" },
      scenes: [
        { place: "airport", mood: "worried",
          text: "Mira skulle fly til Istanbul for å feire bursdagen til mora. Men da hun kom til Gardermoen, hadde flyet allerede gått.",
          tr: "Mira annesinin doğum gününü kutlamak için İstanbul'a uçacaktı. Ama Gardermoen'e vardığında uçak çoktan kalkmıştı.",
          en: "Mira was going to fly to Istanbul to celebrate her mother's birthday. But when she got to Gardermoen, the plane had already left." },
        { place: "airport", mood: "thinking",
          text: "Hadde hun bare stått opp da vekkerklokka ringte, ville hun ha rukket flyet. Hun angrer på at hun trykket på slumreknappen tre ganger.",
          tr: "Keşke çalar saat çaldığında kalksaydı, o zaman uçağa yetişirdi. Erteleme düğmesine üç kez bastığına pişman.",
          en: "If only she had got up when the alarm clock rang, she would have caught the plane. She regrets pressing the snooze button three times." },
        { place: "airport", mood: "thinking",
          text: "Om hun hadde tatt en taxi i stedet for toget, kunne hun kanskje ha kommet fram i tide. Men det nytter ikke å gråte over spilt melk.",
          tr: "Tren yerine taksiye binseydi belki zamanında varabilirdi. Ama olan olmuş, ağlamanın faydası yok.",
          en: "If she had taken a taxi instead of the train, she might have arrived in time. But there's no use crying over spilt milk." },
        { place: "airport", mood: "proud",
          text: "Heldigvis fant hun et nytt fly samme kveld. Hun kom fram akkurat tidsnok til å synge bursdagssangen.",
          tr: "Neyse ki aynı akşam başka bir uçak buldu. Doğum günü şarkısını söylemeye tam zamanında yetişti.",
          en: "Luckily, she found another flight the same evening. She arrived just in time to sing the birthday song." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Zorlu pazarlık", en: "A tough negotiation" },
      scenes: [
        { place: "boardroom", mood: "thinking",
          text: "Emil har fått ansvaret for å forhandle fram en ny avtale med en leverandør. Leverandøren vil øke prisene med femten prosent.",
          tr: "Emil'e bir tedarikçiyle yeni bir anlaşma için müzakere yapma sorumluluğu verildi. Tedarikçi fiyatları yüzde on beş artırmak istiyor.",
          en: "Emil has been given responsibility for negotiating a new agreement with a supplier. The supplier wants to raise prices by fifteen per cent." },
        { place: "boardroom", mood: "worried",
          text: "I møtet holder motparten hardt på kravet sitt. Emil foreslår et kompromiss, men de vil ikke gi seg.",
          tr: "Toplantıda karşı taraf talebinden vazgeçmiyor. Emil bir uzlaşma öneriyor ama onlar geri adım atmıyor.",
          en: "In the meeting, the other side holds firmly to its demand. Emil suggests a compromise, but they won't back down." },
        { place: "boardroom", mood: "thinking",
          text: "Da påpeker Emil at de har vært kunder i ti år og kan tenke seg en lengre avtale. Hvis de får fem prosent, binder firmaet seg i tre år.",
          tr: "Bunun üzerine Emil, on yıldır müşteri olduklarını ve daha uzun bir anlaşmaya açık olduklarını belirtiyor. Yüzde beş verirlerse firma kendini üç yıllığına bağlayacak.",
          en: "Then Emil points out that they have been customers for ten years and would consider a longer agreement. If they get five per cent, the company will commit for three years." },
        { place: "boardroom", mood: "proud",
          text: "Etter en kort pause sier leverandøren seg enig. De møtes på midten med sju prosent, og begge parter går fornøyde fra bordet.",
          tr: "Kısa bir aradan sonra tedarikçi kabul ediyor. Ortada, yüzde yedide buluşuyorlar ve iki taraf da masadan memnun kalkıyor.",
          en: "After a short break, the supplier agrees. They meet halfway at seven per cent, and both parties leave the table satisfied." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Canlı yayında", en: "Live on air" },
      scenes: [
        { place: "tvstudio", mood: "surprised",
          text: "Mira blir invitert til en TV-debatt om falske nyheter i sosiale medier. Hun har nemlig skrevet en kronikk om temaet som har fått mye oppmerksomhet.",
          tr: "Mira, sosyal medyadaki sahte haberlerle ilgili bir televizyon tartışmasına davet ediliyor. Çünkü bu konuda çok ilgi gören bir köşe yazısı yazdı.",
          en: "Mira is invited to a TV debate on fake news on social media. She has, you see, written an opinion piece on the subject that has attracted a lot of attention." },
        { place: "tvstudio", mood: "worried",
          text: "Programlederen spør om ikke staten burde regulere plattformene strengere. En annen gjest mener at det vil true ytringsfriheten.",
          tr: "Program sunucusu, devletin platformları daha sıkı denetlemesi gerekip gerekmediğini soruyor. Başka bir konuk bunun ifade özgürlüğünü tehdit edeceğini düşünüyor.",
          en: "The presenter asks whether the state shouldn't regulate the platforms more strictly. Another guest thinks that would threaten freedom of expression." },
        { place: "tvstudio", mood: "thinking",
          text: "Mira svarer at kildekritikk er viktigere enn forbud. Hun mener at skolen må lære barna å skille mellom fakta og propaganda.",
          tr: "Mira, kaynak eleştirisinin yasaklardan daha önemli olduğunu söylüyor. Okulun çocuklara gerçeklerle propagandayı ayırt etmeyi öğretmesi gerektiğini düşünüyor.",
          en: "Mira replies that critical evaluation of sources is more important than bans. She believes that schools must teach children to distinguish between facts and propaganda." },
        { place: "tvstudio", mood: "proud",
          text: "Etter sendingen får hun hundrevis av meldinger. De fleste er positive, selv om noen kaller henne naiv.",
          tr: "Yayından sonra yüzlerce mesaj alıyor. Bazıları ona saf dese de çoğu olumlu.",
          en: "After the broadcast she receives hundreds of messages. Most are positive, even though some call her naive." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Batı Norveç lehçesi", en: "A dialect in western Norway" },
      scenes: [
        { place: "fjord", mood: "happy",
          text: "I sommerferien tar Emil ferja over Sognefjorden for å besøke en kollega. Skiltene på kaia er skrevet på nynorsk.",
          tr: "Yaz tatilinde Emil bir iş arkadaşını ziyaret etmek için feribotla Sognefjord'u geçiyor. İskeledeki tabelalar nynorsk ile yazılmış.",
          en: "In the summer holidays, Emil takes the ferry across the Sognefjord to visit a colleague. The signs on the quay are written in Nynorsk." },
        { place: "fjord", mood: "surprised",
          text: "Kollegaen snakker sognedialekt, og Emil forstår nesten ingenting. Hun sier kor i stedet for hvor og eg i stedet for jeg.",
          tr: "İş arkadaşı Sogn lehçesiyle konuşuyor ve Emil neredeyse hiçbir şey anlamıyor. Hvor yerine kor, jeg yerine eg diyor.",
          en: "His colleague speaks the Sogn dialect, and Emil understands almost nothing. She says kor instead of hvor and eg instead of jeg." },
        { place: "fjord", mood: "thinking",
          text: "Etter noen dager begynner Emil å venne seg til uttalen. Han plukker også opp litt slang fra ungdommene i bygda, som sier at alt er sykt bra.",
          tr: "Birkaç gün sonra Emil telaffuza alışmaya başlıyor. Köydeki gençlerden biraz argo da kapıyor; onlar her şeye sykt bra diyor.",
          en: "After a few days, Emil starts to get used to the pronunciation. He also picks up some slang from the young people in the village, who say that everything is sykt bra." },
        { place: "fjord", mood: "proud",
          text: "Da han reiser hjem, kan han si takk for no på ekte sognedialekt. Han skjønner at det ikke finnes én riktig måte å snakke norsk på.",
          tr: "Eve dönerken gerçek Sogn lehçesiyle takk for no diyebiliyor. Norveççe konuşmanın tek bir doğru yolu olmadığını anlıyor.",
          en: "When he travels home, he can say takk for no in genuine Sogn dialect. He realises that there is no single correct way of speaking Norwegian." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Yatırımcılara sunum", en: "The pitch" },
      scenes: [
        { place: "stage", mood: "worried",
          text: "Mira og to venner har laget en app som kobler eldre med frivillige. I kveld skal de pitche ideen for investorer, og Mira har sommerfugler i magen.",
          tr: "Mira ve iki arkadaşı, yaşlıları gönüllülerle buluşturan bir uygulama geliştirdi. Bu akşam fikirlerini yatırımcılara sunacaklar ve Mira'nın midesinde kelebekler uçuşuyor.",
          en: "Mira and two friends have made an app that connects older people with volunteers. Tonight they are pitching the idea to investors, and Mira has butterflies in her stomach." },
        { place: "stage", mood: "thinking",
          text: "Den første versjonen floppet, så de måtte tilbake til tegnebrettet. Nå har de tenkt nytt og satser alt på brukervennlighet.",
          tr: "İlk sürüm başarısız oldu, bu yüzden en baştan başlamak zorunda kaldılar. Şimdi yeniden düşündüler ve her şeyi kullanım kolaylığına yatırıyorlar.",
          en: "The first version flopped, so they had to go back to the drawing board. Now they have rethought everything and are betting everything on user-friendliness." },
        { place: "stage", mood: "happy",
          text: "Mira snakker engasjert, og hun treffer spikeren på hodet når hun forklarer behovet. En investor sier at de har gode kort på hånden.",
          tr: "Mira tutkuyla konuşuyor ve ihtiyacı anlatırken tam üstüne basıyor. Bir yatırımcı ellerinde güçlü kozlar olduğunu söylüyor.",
          en: "Mira speaks passionately, and she hits the nail on the head when she explains the need. One investor says that they hold a strong hand." },
        { place: "stage", mood: "proud",
          text: "Etter pitchen får de et tilbud på to millioner kroner. Nå er det bare å brette opp ermene!",
          tr: "Sunumdan sonra iki milyon kronluk bir teklif alıyorlar. Artık tek yapmaları gereken kolları sıvamak!",
          en: "After the pitch, they get an offer of two million kroner. Now it's just a matter of rolling up their sleeves!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Ingrid'in atasözleri", en: "Ingrid's proverbs" },
      scenes: [
        { place: "garden", mood: "happy",
          text: "Om våren hjelper Emil naboen sin, Ingrid, i hagen. Hun er åtti år og har et ordtak for enhver anledning.",
          tr: "Baharda Emil komşusu Ingrid'e bahçede yardım ediyor. Ingrid seksen yaşında ve her duruma uygun bir atasözü var.",
          en: "In spring, Emil helps his neighbour, Ingrid, in her garden. She is eighty and has a proverb for every occasion." },
        { place: "garden", mood: "thinking",
          text: "Da Emil vil plante alt på én dag, minner hun ham på at Roma ikke ble bygd på én dag. Når han klager over regnet, svarer hun at det ikke finnes dårlig vær, bare dårlige klær.",
          tr: "Emil her şeyi bir günde dikmek isteyince Ingrid ona Roma'nın bir günde kurulmadığını hatırlatıyor. Yağmurdan şikâyet ettiğinde ise kötü hava diye bir şey olmadığını, sadece kötü giysiler olduğunu söylüyor.",
          en: "When Emil wants to plant everything in one day, she reminds him that Rome wasn't built in a day. When he complains about the rain, she replies that there's no such thing as bad weather, only bad clothes." },
        { place: "garden", mood: "surprised",
          text: "Om sommeren er hagen full av tomater og bær. Ingrid smiler og sier at den som venter på noe godt, ikke venter forgjeves.",
          tr: "Yazın bahçe domates ve meyvelerle dolu. Ingrid gülümseyip güzel bir şey bekleyenin boşuna beklemediğini söylüyor.",
          en: "In summer, the garden is full of tomatoes and berries. Ingrid smiles and says that good things come to those who wait." },
        { place: "garden", mood: "proud",
          text: "Emil tar med seg en kurv med grønnsaker hjem. Han tenker at ordtakene inneholder mye livsvisdom.",
          tr: "Emil eve bir sepet sebze götürüyor. Atasözlerinin çok fazla hayat bilgeliği içerdiğini düşünüyor.",
          en: "Emil takes a basket of vegetables home. He thinks that the proverbs contain a lot of wisdom about life." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Kütüphanede köşe yazısı", en: "An opinion piece at the library" },
      scenes: [
        { place: "library", mood: "thinking",
          text: "Mira skal skrive en kronikk om klimatilpasning for en stor avis. Hun tilbringer hele lørdagen på Deichman for å finne gode kilder.",
          tr: "Mira büyük bir gazete için iklime uyum üzerine bir köşe yazısı yazacak. İyi kaynaklar bulmak için bütün cumartesiyi Deichman kütüphanesinde geçiriyor.",
          en: "Mira is going to write an opinion piece on climate adaptation for a major newspaper. She spends all of Saturday at the Deichman library to find good sources." },
        { place: "library", mood: "thinking",
          text: "Hun leser forskningsrapporter og noterer hovedpunktene. Det er viktig å skille mellom egne meninger og det forskningen faktisk viser.",
          tr: "Araştırma raporlarını okuyup ana noktaları not ediyor. Kendi görüşleriyle araştırmanın gerçekte gösterdiğini birbirinden ayırmak önemli.",
          en: "She reads research reports and notes down the main points. It is important to distinguish between her own opinions and what the research actually shows." },
        { place: "library", mood: "worried",
          text: "Det som er vanskeligst, er å forklare komplekse sammenhenger på en enkel måte. Hun skriver innledningen fem ganger før hun er fornøyd.",
          tr: "En zor olan, karmaşık ilişkileri basit bir şekilde açıklamak. Memnun kalana kadar girişi beş kez yazıyor.",
          en: "What is hardest is explaining complex connections in a simple way. She writes the introduction five times before she is satisfied." },
        { place: "library", mood: "proud",
          text: "Kronikken blir publisert på mandag og delt flere tusen ganger. Flere politikere henviser til den i debatten.",
          tr: "Köşe yazısı pazartesi günü yayımlanıyor ve binlerce kez paylaşılıyor. Birçok politikacı tartışmada ona atıfta bulunuyor.",
          en: "The opinion piece is published on Monday and shared several thousand times. Several politicians refer to it in the debate." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Düğün konuşması", en: "The wedding speech" },
      scenes: [
        { place: "wedding", mood: "happy",
          text: "Emils beste venn, Jonas, gifter seg med Sofie, og Emil skal holde tale. Han har øvd foran speilet i en hel uke.",
          tr: "Emil'in en iyi arkadaşı Jonas, Sofie ile evleniyor ve Emil konuşma yapacak. Bir hafta boyunca aynanın karşısında prova yaptı.",
          en: "Emil's best friend, Jonas, is marrying Sofie, and Emil is giving a speech. He has practised in front of the mirror for a whole week." },
        { place: "wedding", mood: "thinking",
          text: "Det var faktisk Emil som introduserte dem for hverandre for fem år siden. Hvis han ikke hadde invitert dem på den samme festen, hadde de kanskje aldri møttes.",
          tr: "Aslında onları beş yıl önce birbiriyle tanıştıran Emil'di. Onları aynı partiye davet etmeseydi belki de hiç tanışmayacaklardı.",
          en: "In fact, it was Emil who introduced them to each other five years ago. If he hadn't invited them to the same party, they might never have met." },
        { place: "wedding", mood: "happy",
          text: "Gjestene ler når han forteller om den første daten, da Jonas gikk seg vill og kom en time for sent. Sofie ventet likevel, for der det er vilje, er det vei.",
          tr: "İlk buluşmayı, Jonas'ın kaybolup bir saat geç kaldığını anlattığında konuklar gülüyor. Sofie yine de bekledi, çünkü isteyen her şeyi başarır.",
          en: "The guests laugh when he tells them about the first date, when Jonas got lost and arrived an hour late. Sofie waited anyway, because where there's a will, there's a way." },
        { place: "wedding", mood: "proud",
          text: "Til slutt løfter Emil glasset og ønsker brudeparet lykke til. Alle reiser seg og skåler for kjærligheten.",
          tr: "Sonunda Emil kadehini kaldırıp gelin ve damada mutluluklar diliyor. Herkes ayağa kalkıp aşk için kadeh kaldırıyor.",
          en: "Finally, Emil raises his glass and wishes the bride and groom good luck. Everyone stands up and drinks a toast to love." }
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
