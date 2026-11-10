import type { Story, StoryHero, StoryMood, StoryPlace } from "../../types";
import type { HelpLang } from "./itStories";

interface Source {
  hero: StoryHero;
  casual?: boolean;
  title: Record<HelpLang, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; nb: string }[];
}

const STORIES: Record<"a0" | "a1" | "a2" | "b1" | "b2" | "c1", Source[]> = {
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
  ],
  a2: [
    {
      hero: "mira",
      title: { tr: "Mira'nın hafta sonu", nb: "Helgen til Mira" },
      scenes: [
        { place: "desk", mood: "happy",
          text: "Last weekend Mira was in Brighton. On Saturday she went to the cinema with a friend.",
          tr: "Geçen hafta sonu Mira Brighton'daydı. Cumartesi bir arkadaşıyla sinemaya gitti.",
          nb: "Forrige helg var Mira i Brighton. På lørdag gikk hun på kino med en venn." },
        { place: "desk", mood: "happy",
          text: "Afterwards they ate pizza and talked for a long time.",
          tr: "Sonra pizza yediler ve uzun uzun konuştular.",
          nb: "Etterpå spiste de pizza og snakket lenge." },
        { place: "home", mood: "thinking",
          text: "On Sunday it rained all day, so she stayed at home and read.",
          tr: "Pazar günü bütün gün yağmur yağdı, bu yüzden evde kalıp kitap okudu.",
          nb: "På søndag regnet det hele dagen, så hun ble hjemme og leste." },
        { place: "home", mood: "proud",
          text: "Yesterday she came home to London. It was a great weekend.",
          tr: "Dün Londra'ya döndü. Harika bir hafta sonuydu.",
          nb: "I går kom hun hjem til London. Det var en flott helg." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in İngiltere'deki iki yılı", nb: "Emils to år i England" },
      scenes: [
        { place: "home", mood: "happy",
          text: "Emil has lived in Bristol for two years. He has learned a lot of English.",
          tr: "Emil iki yıldır Bristol'da yaşıyor. Çok İngilizce öğrendi.",
          nb: "Emil har bodd i Bristol i to år. Han har lært mye engelsk." },
        { place: "home", mood: "thinking",
          text: "He has seen the sea many times, but he has never been to Scotland.",
          tr: "Denizi birçok kez gördü ama İskoçya'ya hiç gitmedi.",
          nb: "Han har sett havet mange ganger, men han har aldri vært i Skottland." },
        { place: "home", mood: "happy",
          text: "Last year he was in Wales with his family.",
          tr: "Geçen yıl ailesiyle Galler'deydi.",
          nb: "I fjor var han i Wales med familien." },
        { place: "home", mood: "proud",
          text: "Next year he is going to travel to Edinburgh.",
          tr: "Gelecek yıl Edinburgh'a gidecek.",
          nb: "Neste år skal han reise til Edinburgh." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira doktorda", nb: "Mira hos legen" },
      scenes: [
        { place: "home", mood: "worried",
          text: "Yesterday Mira woke up with a sore throat. She also had a fever.",
          tr: "Dün Mira boğaz ağrısıyla uyandı. Ateşi de vardı.",
          nb: "I går våknet Mira med vondt i halsen. Hun hadde også feber." },
        { place: "home", mood: "thinking",
          text: "She called the doctor and made an appointment.",
          tr: "Doktoru arayıp randevu aldı.",
          nb: "Hun ringte legen og bestilte time." },
        { place: "clinic", mood: "thinking",
          text: "The doctor said that she had to rest for three days.",
          tr: "Doktor üç gün dinlenmesi gerektiğini söyledi.",
          nb: "Legen sa at hun måtte hvile i tre dager." },
        { place: "home", mood: "proud",
          text: "Now she feels much better.",
          tr: "Şimdi kendini çok daha iyi hissediyor.",
          nb: "Nå føler hun seg mye bedre." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in yeni işi", nb: "Den nye jobben til Emil" },
      scenes: [
        { place: "meeting", mood: "happy",
          text: "Emil has a new job in an office. His boss is nice.",
          tr: "Emil'in bir ofiste yeni bir işi var. Patronu nazik biri.",
          nb: "Emil har en ny jobb på et kontor. Sjefen hans er hyggelig." },
        { place: "meeting", mood: "happy",
          text: "He likes the job because he learns a lot.",
          tr: "İşi seviyor, çünkü çok şey öğreniyor.",
          nb: "Han liker jobben fordi han lærer mye." },
        { place: "meeting", mood: "worried",
          text: "But he is often tired, because he doesn't get many breaks.",
          tr: "Ama sık sık yoruluyor, çünkü fazla molası olmuyor.",
          nb: "Men han er ofte sliten, fordi han ikke får mange pauser." },
        { place: "meeting", mood: "proud",
          text: "He tells his boss that he needs a break every day. His boss agrees.",
          tr: "Patronuna her gün bir molaya ihtiyacı olduğunu söylüyor. Patronu da aynı fikirde.",
          nb: "Han sier til sjefen at han trenger en pause hver dag. Sjefen er enig." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira daire arıyor", nb: "Mira leter etter leilighet" },
      scenes: [
        { place: "home", mood: "thinking",
          text: "Mira is looking for a new flat. She sees an advert online.",
          tr: "Mira yeni bir daire arıyor. İnternette bir ilan görüyor.",
          nb: "Mira leter etter en ny leilighet. Hun ser en annonse på nettet." },
        { place: "home", mood: "happy",
          text: "She calls and asks if the flat is available.",
          tr: "Arayıp dairenin boş olup olmadığını soruyor.",
          nb: "Hun ringer og spør om leiligheten er ledig." },
        { place: "home", mood: "surprised",
          text: "She has to pay eight hundred pounds in rent, and electricity is included.",
          tr: "Kira olarak sekiz yüz sterlin ödemesi gerekiyor ve elektrik dahil.",
          nb: "Hun må betale åtte hundre pund i husleie, og strøm er inkludert." },
        { place: "home", mood: "proud",
          text: "She moves in in March.",
          tr: "Martta taşınıyor.",
          nb: "Hun flytter inn i mars." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in yaz planları", nb: "Sommerplanene til Emil" },
      scenes: [
        { place: "home", mood: "happy",
          text: "This summer Emil is going to travel to Cornwall with his family.",
          tr: "Bu yaz Emil ailesiyle Cornwall'a gidecek.",
          nb: "I sommer skal Emil reise til Cornwall med familien." },
        { place: "home", mood: "thinking",
          text: "He hopes it will be sunny, but it is going to rain a little.",
          tr: "Güneşli olmasını umuyor ama biraz yağmur yağacak.",
          nb: "Han håper at det blir sol, men det kommer til å regne litt." },
        { place: "home", mood: "worried",
          text: "If it rains, they are going to read books and play cards.",
          tr: "Yağmur yağarsa kitap okuyup kart oynayacaklar.",
          nb: "Hvis det regner, skal de lese bøker og spille kort." },
        { place: "home", mood: "proud",
          text: "Emil is looking forward to the holiday!",
          tr: "Emil tatili dört gözle bekliyor!",
          nb: "Emil gleder seg til ferien!" }
      ]
    }
  ],
  b1: [
    {
      hero: "mira",
      title: { tr: "Mira iş ve işçi bulma kurumunda", nb: "Mira på jobbsenteret" },
      scenes: [
        { place: "office", mood: "worried",
          text: "Mira lost her job last month. So she went to the Jobcentre to get help.",
          tr: "Mira geçen ay işini kaybetti. Bu yüzden yardım almak için iş ve işçi bulma kurumuna gitti.",
          nb: "Mira mistet jobben sin forrige måned. Derfor gikk hun til jobbsenteret for å få hjelp." },
        { place: "office", mood: "thinking",
          text: "She took a ticket and waited for twenty minutes. The adviser who helped her was very friendly.",
          tr: "Sıra numarası aldı ve yirmi dakika bekledi. Ona yardım eden danışman çok nazikti.",
          nb: "Hun trakk en kølapp og ventet i tjue minutter. Rådgiveren som hjalp henne, var veldig vennlig." },
        { place: "office", mood: "surprised",
          text: "She had to fill in a long form online. Although it was difficult, she didn't give up.",
          tr: "İnternette uzun bir form doldurması gerekti. Zor olmasına rağmen pes etmedi.",
          nb: "Hun måtte fylle ut et langt skjema på nettet. Selv om det var vanskelig, ga hun ikke opp." },
        { place: "office", mood: "proud",
          text: "Two weeks later, she got an answer to her application. It was approved!",
          tr: "İki hafta sonra başvurusuna cevap aldı. Başvurusu onaylandı!",
          nb: "To uker senere fikk hun svar på søknaden. Den ble godkjent!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in iş görüşmesi", nb: "Jobbintervjuet til Emil" },
      scenes: [
        { place: "interview", mood: "worried",
          text: "Emil had applied for a position as a teacher at a school in Bristol. Today he has an interview.",
          tr: "Emil Bristol'daki bir okulda öğretmenlik pozisyonuna başvurmuştu. Bugün mülakatı var.",
          nb: "Emil hadde søkt på en stilling som lærer ved en skole i Bristol. I dag skal han på intervju." },
        { place: "interview", mood: "thinking",
          text: "The head teacher asked why he wanted to work there. Emil answered that he enjoys working with children.",
          tr: "Müdür neden orada çalışmak istediğini sordu. Emil çocuklarla çalışmaktan keyif aldığını söyledi.",
          nb: "Rektoren spurte hvorfor han ville jobbe der. Emil svarte at han liker å jobbe med barn." },
        { place: "interview", mood: "happy",
          text: "He also talked about his experience. He has worked as a teacher for five years.",
          tr: "Deneyiminden de bahsetti. Beş yıldır öğretmen olarak çalışıyor.",
          nb: "Han fortalte også om erfaringen sin. Han har jobbet som lærer i fem år." },
        { place: "interview", mood: "proud",
          text: "Three days later, the head teacher called. Emil got the job!",
          tr: "Üç gün sonra müdür aradı. Emil işi aldı!",
          nb: "Tre dager senere ringte rektoren. Emil fikk jobben!" }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Mira bankada", nb: "Mira i banken" },
      scenes: [
        { place: "bank", mood: "thinking",
          text: "Mira wants to save money for a long trip. She goes to the bank to get some advice.",
          tr: "Mira uzun bir yolculuk için para biriktirmek istiyor. Tavsiye almak için bankaya gidiyor.",
          nb: "Mira vil spare penger til en lang reise. Hun går i banken for å få råd." },
        { place: "bank", mood: "happy",
          text: "The adviser explains that a savings account pays more interest than a normal account.",
          tr: "Danışman, birikim hesabının normal bir hesaptan daha fazla faiz verdiğini açıklıyor.",
          nb: "Rådgiveren forklarer at en sparekonto gir mer rente enn en vanlig konto." },
        { place: "bank", mood: "worried",
          text: "But Mira spends too much money on food and clothes. She needs to make a budget.",
          tr: "Ama Mira yemeğe ve kıyafete çok fazla para harcıyor. Bir bütçe yapması gerekiyor.",
          nb: "Men Mira bruker for mye penger på mat og klær. Hun må lage et budsjett." },
        { place: "bank", mood: "proud",
          text: "Now she saves two hundred pounds every month. The more she saves, the happier she feels.",
          tr: "Artık her ay iki yüz sterlin biriktiriyor. Ne kadar çok biriktirirse kendini o kadar mutlu hissediyor.",
          nb: "Nå sparer hun to hundre pund hver måned. Jo mer hun sparer, jo gladere blir hun." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil'in İngilizce sınavı", nb: "Engelskeksamenen til Emil" },
      scenes: [
        { place: "classroom", mood: "worried",
          text: "Emil is taking an English exam next week. He is nervous because he hasn't practised enough.",
          tr: "Emil gelecek hafta bir İngilizce sınavına girecek. Gergin, çünkü yeterince çalışmadı.",
          nb: "Emil skal ta en engelskeksamen neste uke. Han er nervøs, fordi han ikke har øvd nok." },
        { place: "classroom", mood: "thinking",
          text: "His teacher says that he should read the news and speak English every day. While the children are sleeping, he reads and writes.",
          tr: "Öğretmeni her gün haberleri okuması ve İngilizce konuşması gerektiğini söylüyor. Çocuklar uyurken o okuyor ve yazıyor.",
          nb: "Læreren hans sier at han bør lese nyhetene og snakke engelsk hver dag. Mens barna sover, leser han og skriver." },
        { place: "classroom", mood: "surprised",
          text: "The exam was easier than he had expected. The speaking part went especially well.",
          tr: "Sınav beklediğinden daha kolaydı. Konuşma bölümü özellikle iyi geçti.",
          nb: "Eksamenen var lettere enn han hadde trodd. Den muntlige delen gikk spesielt bra." },
        { place: "classroom", mood: "proud",
          text: "A month later, he got the result. He had passed!",
          tr: "Bir ay sonra sonucu aldı. Sınavı geçmişti!",
          nb: "En måned senere fikk han resultatet. Han hadde bestått!" }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Tren rötarlı", nb: "Toget er forsinket" },
      scenes: [
        { place: "station", mood: "happy",
          text: "Mira was going to visit a friend in Edinburgh. The train was supposed to leave at seven in the morning.",
          tr: "Mira Edinburgh'daki bir arkadaşını ziyaret edecekti. Trenin sabah saat yedide kalkması gerekiyordu.",
          nb: "Mira skulle besøke en venn i Edinburgh. Toget skulle gå klokka sju om morgenen." },
        { place: "station", mood: "worried",
          text: "When she arrived at the station, the train was delayed. There was a signal problem, and nobody knew how long it would take.",
          tr: "İstasyona vardığında tren rötarlıydı. Sinyal sorunu vardı ve kimse bunun ne kadar süreceğini bilmiyordu.",
          nb: "Da hun kom til stasjonen, var toget forsinket. Det var signalfeil, og ingen visste hvor lenge det ville ta." },
        { place: "station", mood: "thinking",
          text: "Mira thinks that British trains should be more punctual. However, trains are better for the environment than planes.",
          tr: "Mira, İngiltere'deki trenlerin daha dakik olması gerektiğini düşünüyor. Yine de tren çevre için uçaktan daha iyi.",
          nb: "Mira synes at britiske tog burde være mer punktlige. Likevel er tog bedre for miljøet enn fly." },
        { place: "station", mood: "proud",
          text: "Two hours later, the train finally came. She got her money back for the ticket.",
          tr: "İki saat sonra tren sonunda geldi. Biletinin parasını geri aldı.",
          nb: "To timer senere kom toget endelig. Hun fikk pengene for billetten tilbake." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil mutfakta", nb: "Emil på kjøkkenet" },
      scenes: [
        { place: "kitchen", mood: "happy",
          text: "On Saturday, Emil is going to cook dinner for his neighbours. He has found a recipe for fish soup.",
          tr: "Cumartesi Emil komşularına akşam yemeği yapacak. Balık çorbası için bir tarif buldu.",
          nb: "På lørdag skal Emil lage middag til naboene sine. Han har funnet en oppskrift på fiskesuppe." },
        { place: "kitchen", mood: "thinking",
          text: "First he chops the vegetables, and then he cooks the fish for twenty minutes. The soup has to be stirred all the time.",
          tr: "Önce sebzeleri doğruyor, sonra balığı yirmi dakika pişiriyor. Çorbanın sürekli karıştırılması gerekiyor.",
          nb: "Først skjærer han grønnsakene, og så koker han fisken i tjue minutter. Suppen må røres hele tiden." },
        { place: "kitchen", mood: "surprised",
          text: "Suddenly the doorbell rings, and the soup boils over! Emil had forgotten to turn down the heat.",
          tr: "Birden kapı çalıyor ve çorba taşıyor! Emil ocağı kısmayı unutmuştu.",
          nb: "Plutselig ringer det på døra, og suppen koker over! Emil hadde glemt å skru ned varmen." },
        { place: "kitchen", mood: "proud",
          text: "Luckily, the soup tasted delicious. The neighbours asked for the recipe.",
          tr: "Neyse ki çorbanın tadı harikaydı. Komşular tarifi istedi.",
          nb: "Heldigvis smakte suppen nydelig. Naboene ba om oppskriften." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Dağda kar", nb: "Snø på fjellet" },
      scenes: [
        { place: "mountain", mood: "happy",
          text: "During the autumn break, Mira went hiking in Wales with two colleagues. They walked up to a cabin which is next to a lake.",
          tr: "Sonbahar tatilinde Mira iki iş arkadaşıyla Galler'de yürüyüşe çıktı. Bir gölün yanındaki bir kulübeye kadar yürüdüler.",
          nb: "I høstferien dro Mira på fjelltur i Wales med to kolleger. De gikk opp til ei hytte som ligger ved et vann." },
        { place: "mountain", mood: "worried",
          text: "After an hour, it started to snow, and it became hard to see the path. Mira was afraid of getting lost.",
          tr: "Bir saat sonra kar yağmaya başladı ve patikayı görmek zorlaştı. Mira kaybolmaktan korkuyordu.",
          nb: "Etter en time begynte det å snø, og det ble vanskelig å se stien. Mira var redd for å gå seg vill." },
        { place: "mountain", mood: "thinking",
          text: "Luckily, they had a map and a compass in their backpack. They decided to follow the red marks on the stones.",
          tr: "Neyse ki sırt çantalarında harita ve pusula vardı. Taşların üzerindeki kırmızı işaretleri takip etmeye karar verdiler.",
          nb: "Heldigvis hadde de kart og kompass i sekken. De bestemte seg for å følge de røde merkene på steinene." },
        { place: "mountain", mood: "proud",
          text: "When they reached the cabin, they lit a fire and drank hot chocolate. The trip became an adventure which she will never forget.",
          tr: "Kulübeye vardıklarında ateş yaktılar ve sıcak çikolata içtiler. Bu yürüyüş, asla unutmayacağı bir macera oldu.",
          nb: "Da de kom fram til hytta, tente de bål og drakk varm sjokolade. Turen ble et eventyr som hun aldri kommer til å glemme." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Emil şikâyet ediyor", nb: "Emil klager" },
      scenes: [
        { place: "shop", mood: "worried",
          text: "Emil bought a winter jacket two weeks ago. Now the zip has broken.",
          tr: "Emil iki hafta önce bir kış montu aldı. Şimdi fermuarı bozuldu.",
          nb: "Emil kjøpte en vinterjakke for to uker siden. Nå har glidelåsen gått i stykker." },
        { place: "shop", mood: "thinking",
          text: "He takes the receipt and goes back to the shop. He wants to complain and exchange the jacket.",
          tr: "Fişi yanına alıp mağazaya geri gidiyor. Şikâyet edip montu değiştirmek istiyor.",
          nb: "Han tar med kvitteringen og går tilbake til butikken. Han vil klage og bytte jakken." },
        { place: "shop", mood: "surprised",
          text: "The shop assistant says that the jacket has a two-year guarantee. Emil can choose between a new jacket and a refund.",
          tr: "Satış görevlisi montun iki yıl garantisi olduğunu söylüyor. Emil yeni bir mont ile para iadesi arasında seçim yapabilir.",
          nb: "Ekspeditøren sier at jakken har to års garanti. Emil kan velge mellom en ny jakke og å få pengene tilbake." },
        { place: "shop", mood: "proud",
          text: "He chooses a new jacket which is both warmer and lighter. He is satisfied with the service.",
          tr: "Hem daha sıcak hem daha hafif olan yeni bir mont seçiyor. Hizmetten memnun.",
          nb: "Han velger en ny jakke som er både varmere og lettere. Han er fornøyd med servicen." }
      ]
    }
  ],
  b2: [
    {
      hero: "mira",
      title: { tr: "Ev sahibine resmî e-posta", nb: "En formell e-post til utleieren" },
      scenes: [
        { place: "study", mood: "worried",
          text: "Mira's bathroom has been damp for months, and now mould has appeared on the wall. Her landlord hasn't replied to any of her messages.",
          tr: "Mira'nın banyosu aylardır nemli ve artık duvarda küf oluştu. Ev sahibi mesajlarının hiçbirine cevap vermedi.",
          nb: "Det har vært fuktig på badet til Mira i flere måneder, og nå har det kommet mugg på veggen. Utleieren har ikke svart på noen av meldingene hennes." },
        { place: "study", mood: "thinking",
          text: "So she decides to write a formal email. She sticks to the facts and attaches photos of the wall.",
          tr: "Bu yüzden resmî bir e-posta yazmaya karar veriyor. Sadece gerçeklere bağlı kalıyor ve duvarın fotoğraflarını ekliyor.",
          nb: "Derfor bestemmer hun seg for å skrive en formell e-post. Hun holder seg til fakta og legger ved bilder av veggen." },
        { place: "study", mood: "thinking",
          text: "In the email, she asks for the matter to be dealt with as soon as possible. If she does not receive a reply within fourteen days, she will contact the council.",
          tr: "E-postada konunun en kısa sürede ele alınmasını rica ediyor. On dört gün içinde cevap alamazsa belediyeye başvuracak.",
          nb: "I e-posten ber hun om at saken blir behandlet så snart som mulig. Dersom hun ikke får svar innen fjorten dager, vil hun kontakte kommunen." },
        { place: "study", mood: "proud",
          text: "The very next day, the landlord calls and apologises. A builder is coming next week to sort out the problem.",
          tr: "Daha ertesi gün ev sahibi arayıp özür diliyor. Gelecek hafta sorunu çözmek için bir usta gelecek.",
          nb: "Allerede dagen etter ringer utleieren og beklager. En håndverker kommer neste uke for å ordne problemet." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Halk toplantısı", nb: "Folkemøtet" },
      scenes: [
        { place: "townhall", mood: "happy",
          text: "The council wants to build a new road through the park in Emil's neighbourhood. Tonight there is a public meeting about it.",
          tr: "Belediye, Emil'in mahallesindeki parkın içinden yeni bir yol yapmak istiyor. Bu akşam konuyla ilgili bir halk toplantısı var.",
          nb: "Kommunen vil bygge en ny vei gjennom parken i nabolaget til Emil. I kveld er det folkemøte om saken." },
        { place: "townhall", mood: "thinking",
          text: "On the one hand, the road would make it easier to get into town. On the other hand, children would lose an important place to play.",
          tr: "Bir yandan yol, şehre ulaşmayı kolaylaştıracak. Öte yandan çocuklar oyun oynayabilecekleri önemli bir yeri kaybedecek.",
          nb: "På den ene siden ville veien gjøre det lettere å komme seg til byen. På den andre siden ville barna miste et viktig sted å leke." },
        { place: "townhall", mood: "worried",
          text: "Emil is nervous, but he speaks up anyway. He argues that the council should invest in better buses instead, since that would benefit both the environment and public health.",
          tr: "Emil gergin ama yine de söz alıyor. Belediyenin bunun yerine daha iyi otobüslere yatırım yapması gerektiğini savunuyor, çünkü bu hem çevreye hem de halk sağlığına yarar.",
          nb: "Emil er nervøs, men han tar ordet likevel. Han argumenterer for at kommunen heller bør satse på bedre busser, ettersom det ville være bra både for miljøet og for folkehelsen." },
        { place: "townhall", mood: "proud",
          text: "Many people in the hall clap and agree with him. The politicians promise to consider his proposal carefully.",
          tr: "Salondaki birçok kişi alkışlıyor ve ona katılıyor. Politikacılar önerisini dikkatle değerlendirmeye söz veriyor.",
          nb: "Mange i salen klapper og er enige med ham. Politikerne lover å vurdere forslaget hans nøye." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Kafede deyimler", nb: "Faste uttrykk på kafeen" },
      scenes: [
        { place: "cafe", mood: "happy",
          text: "Mira has started working part-time at a café in the city centre. Her colleague, Ollie, loves idioms.",
          tr: "Mira şehir merkezindeki bir kafede yarı zamanlı çalışmaya başladı. İş arkadaşı Ollie deyimlere bayılıyor.",
          nb: "Mira har begynt å jobbe deltid på en kafé i sentrum. Kollegaen hennes, Ollie, elsker faste uttrykk." },
        { place: "cafe", mood: "surprised",
          text: "On the first day, the queue goes right out of the door, and Mira spills coffee on a customer. Ollie smiles and says it's not the end of the world.",
          tr: "İlk gün kuyruk kapının dışına kadar uzanıyor ve Mira bir müşterinin üstüne kahve döküyor. Ollie gülümseyip bunun dünyanın sonu olmadığını söylüyor.",
          nb: "Den første dagen går køen helt ut døra, og Mira søler kaffe på en gjest. Ollie smiler og sier at det ikke er verdens undergang." },
        { place: "cafe", mood: "thinking",
          text: "After a week, everything is running like clockwork. Mira realises that the expression means that everything is going very smoothly.",
          tr: "Bir hafta sonra her şey saat gibi işliyor. Mira bu deyimin her şeyin çok sorunsuz gittiği anlamına geldiğini anlıyor.",
          nb: "Etter en uke går alt som smurt. Mira skjønner at uttrykket betyr at alt går veldig greit." },
        { place: "cafe", mood: "proud",
          text: "Now she uses idioms herself. When her boss asks if she would like more shifts, she says it would suit her down to the ground!",
          tr: "Artık deyimleri kendisi de kullanıyor. Patronu daha fazla vardiya isteyip istemediğini sorunca, bunun ona tam uyacağını söylüyor!",
          nb: "Nå bruker hun faste uttrykk selv. Da sjefen spør om hun vil ha flere vakter, svarer hun at det passer midt i blinken!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Taşınma günü", nb: "Flyttedagen" },
      scenes: [
        { place: "moving", mood: "happy",
          text: "Emil and his family are going to move into a bigger house on Saturday. All week they have been packing things into boxes.",
          tr: "Emil ve ailesi cumartesi günü daha büyük bir eve taşınacak. Bütün hafta eşyaları kolilere yerleştirdiler.",
          nb: "Emil og familien skal flytte inn i et større hus på lørdag. Hele uka har de pakket ting ned i esker." },
        { place: "moving", mood: "worried",
          text: "On Saturday morning, the company that was supposed to provide the van calls to cancel. Emil has to sort out the problem quickly.",
          tr: "Cumartesi sabahı aracı sağlaması gereken firma arayıp iptal ediyor. Emil'in sorunu hemen çözmesi gerekiyor.",
          nb: "På lørdag morgen ringer firmaet som skulle skaffe flyttebilen, og avlyser. Emil må finne ut av problemet i en fart." },
        { place: "moving", mood: "thinking",
          text: "He calls his neighbour, who offers to lend them his trailer. Together they manage to carry the sofa out and set up the beds in the new house.",
          tr: "Komşusunu arıyor; komşusu onlara römorkunu ödünç vermeyi teklif ediyor. Birlikte koltuğu dışarı taşımayı ve yeni evde yatakları kurmayı başarıyorlar.",
          nb: "Han ringer naboen, som tilbyr seg å låne dem tilhengeren sin. Sammen klarer de å bære ut sofaen og sette opp sengene i det nye huset." },
        { place: "moving", mood: "proud",
          text: "In the evening, they are exhausted but happy. It will probably take weeks to unpack everything, but at last they are in their new home.",
          tr: "Akşam bitkinler ama mutlular. Her şeyi açmak muhtemelen haftalar sürecek ama sonunda yeni evlerindeler.",
          nb: "Om kvelden er de utslitte, men glade. Det tar nok flere uker å pakke ut alt, men endelig er de i det nye hjemmet sitt." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Fazla mesai hakkı", nb: "Retten til overtidsbetaling" },
      scenes: [
        { place: "reception", mood: "worried",
          text: "Mira works on the reception desk of a hotel in London. Over the past few months, she has worked a lot of overtime without being paid for it.",
          tr: "Mira Londra'daki bir otelin resepsiyonunda çalışıyor. Son birkaç ayda karşılığını almadan çok fazla mesai yaptı.",
          nb: "Mira jobber i resepsjonen på et hotell i London. De siste månedene har hun jobbet mye overtid uten å få betalt for det." },
        { place: "reception", mood: "thinking",
          text: "She reads her employment contract carefully. It states that overtime must be paid at one and a half times the normal rate.",
          tr: "İş sözleşmesini dikkatle okuyor. Sözleşmede fazla mesainin normal ücretin bir buçuk katı üzerinden ödenmesi gerektiği yazıyor.",
          nb: "Hun leser arbeidskontrakten sin nøye. Der står det at overtid skal betales med halvannen gang vanlig lønn." },
        { place: "reception", mood: "thinking",
          text: "She contacts her union representative, who explains what rights she has. Together they raise the issue with the manager.",
          tr: "Sendika temsilcisiyle iletişime geçiyor; temsilci ona hangi haklara sahip olduğunu açıklıyor. Birlikte konuyu müdüre açıyorlar.",
          nb: "Hun tar kontakt med den tillitsvalgte, som forklarer hvilke rettigheter hun har. Sammen tar de opp saken med lederen." },
        { place: "reception", mood: "proud",
          text: "The manager admits that a mistake has been made. Mira receives the money she is owed, and the hotel promises to follow the rules in future.",
          tr: "Müdür bir hata yapıldığını kabul ediyor. Mira alacağı parayı alıyor ve otel gelecekte kurallara uyacağına söz veriyor.",
          nb: "Lederen innrømmer at det har skjedd en feil. Mira får pengene hun har krav på, og hotellet lover å følge reglene i framtiden." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Kate'te akşam yemeği", nb: "Middag hos Kate" },
      scenes: [
        { place: "dinner", mood: "happy",
          text: "Emil has been invited to dinner at his colleague Kate's house. He brings flowers and a cake that he has baked himself.",
          tr: "Emil iş arkadaşı Kate'in evine akşam yemeğine davet edildi. Yanında çiçek ve kendi yaptığı bir pasta getiriyor.",
          nb: "Emil er invitert på middag hjemme hos kollegaen sin, Kate. Han har med seg blomster og en kake som han har bakt selv." },
        { place: "dinner", mood: "surprised",
          text: "Kate tells him that he really shouldn't have brought anything. Emil knows that this is just a polite way of saying thank you.",
          tr: "Kate ona aslında hiçbir şey getirmemesi gerektiğini söylüyor. Emil bunun teşekkür etmenin kibar bir yolu olduğunu biliyor.",
          nb: "Kate sier at han egentlig ikke burde ha tatt med noe. Emil vet at dette bare er en høflig måte å si takk på." },
        { place: "dinner", mood: "thinking",
          text: "During dinner, they chat about all sorts of things. Kate says that Emil has lived in England for ages, so he probably speaks better English than he thinks.",
          tr: "Yemek boyunca her şeyden sohbet ediyorlar. Kate, Emil'in yıllardır İngiltere'de yaşadığını, bu yüzden muhtemelen sandığından daha iyi İngilizce konuştuğunu söylüyor.",
          nb: "Under middagen prater de om alt mulig. Kate sier at Emil har bodd i England i evigheter, så han snakker nok bedre engelsk enn han tror." },
        { place: "dinner", mood: "proud",
          text: "When he leaves, he thanks her for a lovely evening. Next time, he is going to invite Kate and her family round to his place.",
          tr: "Giderken güzel akşam için ona teşekkür ediyor. Bir dahaki sefere Kate'i ve ailesini kendi evine davet edecek.",
          nb: "Da han går, takker han for en hyggelig kveld. Neste gang skal han invitere Kate og familien hennes hjem til seg." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Yarı maraton", nb: "Halvmaratonet" },
      scenes: [
        { place: "stadium", mood: "happy",
          text: "Mira has been training for the London Half Marathon for six months. Her goal is to run it in under two hours.",
          tr: "Mira altı aydır Londra Yarı Maratonu için antrenman yapıyor. Hedefi yarışı iki saatin altında koşmak.",
          nb: "Mira har trent til London Halvmaraton i et halvt år. Målet hennes er å løpe det på under to timer." },
        { place: "stadium", mood: "worried",
          text: "Two weeks before the race, her knee starts to hurt. The physiotherapist advises her to take it easy, otherwise the injury could get worse.",
          tr: "Yarıştan iki hafta önce dizi ağrımaya başlıyor. Fizyoterapist ona yavaşlamasını tavsiye ediyor, yoksa sakatlık kötüleşebilir.",
          nb: "To uker før løpet får hun vondt i kneet. Fysioterapeuten råder henne til å ta det med ro, ellers kan skaden bli verre." },
        { place: "stadium", mood: "thinking",
          text: "Mira is disappointed, but she follows the advice. Instead of running, she cycles and swims to stay in shape.",
          tr: "Mira hayal kırıklığına uğruyor ama tavsiyeye uyuyor. Koşmak yerine formunu korumak için bisiklete biniyor ve yüzüyor.",
          nb: "Mira er skuffet, men hun følger rådet. I stedet for å løpe sykler og svømmer hun for å holde seg i form." },
        { place: "stadium", mood: "proud",
          text: "On race day, her knee is fine again. She crosses the finish line in one hour and fifty-eight minutes, and she is over the moon!",
          tr: "Yarış günü dizi yine iyi. Bitiş çizgisini bir saat elli sekiz dakikada geçiyor ve havalara uçuyor!",
          nb: "På løpsdagen er kneet bra igjen. Hun krysser målstreken på én time og femtiåtte minutter, og hun er i den sjuende himmel!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Sahil temizliği", nb: "Strandryddingen" },
      scenes: [
        { place: "beach", mood: "happy",
          text: "One Saturday in May, Emil joins a beach clean-up with an environmental charity. The weather is glorious, and there are lots of volunteers.",
          tr: "Mayıs ayında bir cumartesi günü Emil bir çevre derneğiyle sahil temizliğine katılıyor. Hava muhteşem ve çok sayıda gönüllü var.",
          nb: "En lørdag i mai blir Emil med på strandrydding sammen med en miljøorganisasjon. Været er strålende, og det er mange frivillige." },
        { place: "beach", mood: "surprised",
          text: "After just an hour, they have filled twenty bags with rubbish. Most of it is plastic that has washed up from the sea.",
          tr: "Sadece bir saat sonra yirmi torbayı çöple doldurmuşlar. Çoğu denizden kıyıya vurmuş plastik.",
          nb: "Etter bare en time har de fylt tjue sekker med søppel. Mesteparten er plast som har drevet i land fra havet." },
        { place: "beach", mood: "worried",
          text: "One volunteer explains that the plastic breaks down into microplastics, which end up in the fish we eat. For Emil, it is a real eye-opener.",
          tr: "Bir gönüllü, plastiğin mikroplastiğe dönüştüğünü ve yediğimiz balıklara karıştığını anlatıyor. Bu, Emil'in gözlerini açan bir şey oluyor.",
          nb: "En av de frivillige forteller at plasten brytes ned til mikroplast, som havner i fisken vi spiser. For Emil er det en real tankevekker." },
        { place: "beach", mood: "proud",
          text: "After that day, he decides to cut down on single-use plastic. He believes that everyone can make a difference, even if it is only through small changes.",
          tr: "O günden sonra tek kullanımlık plastiği azaltmaya karar veriyor. Küçük değişikliklerle de olsa herkesin bir fark yaratabileceğine inanıyor.",
          nb: "Etter den dagen bestemmer han seg for å kutte ned på engangsplast. Han mener at alle kan gjøre en forskjell, selv om det bare er med små endringer." }
      ]
    }
  ],
  c1: [
    {
      hero: "mira",
      title: { tr: "Mira tezini savunuyor", nb: "Mira forsvarer masteroppgaven" },
      scenes: [
        { place: "lecture", mood: "worried",
          text: "Today Mira is defending her master's thesis on integration in the labour market. The hall is packed, and the examiners are sitting in the front row.",
          tr: "Bugün Mira, işgücü piyasasında entegrasyon üzerine yazdığı yüksek lisans tezini savunacak. Salon tıklım tıklım ve jüri üyeleri ön sırada oturuyor.",
          nb: "I dag skal Mira forsvare masteroppgaven sin om integrering på arbeidsmarkedet. Salen er stappfull, og sensorene sitter på første rad." },
        { place: "lecture", mood: "thinking",
          text: "She outlines her research question and gives an account of her methodology. The findings indicate that language skills play a crucial role in how quickly migrants find employment.",
          tr: "Araştırma sorusunu ana hatlarıyla sunuyor ve yöntemini açıklıyor. Bulgular, dil becerilerinin göçmenlerin ne kadar hızlı iş bulduğunda kritik bir rol oynadığını gösteriyor.",
          nb: "Hun legger fram problemstillingen og redegjør for metoden. Funnene tyder på at språkkunnskaper spiller en avgjørende rolle for hvor raskt innvandrere får jobb." },
        { place: "lecture", mood: "surprised",
          text: "One of the examiners raises a critical point about the sample. Mira acknowledges that the sample is limited, but argues that the findings are nonetheless significant.",
          tr: "Jüri üyelerinden biri örneklemle ilgili eleştirel bir noktaya değiniyor. Mira örneklemin sınırlı olduğunu kabul ediyor ama bulguların yine de önemli olduğunu savunuyor.",
          nb: "En av sensorene tar opp et kritisk poeng om utvalget. Mira innrømmer at utvalget er begrenset, men argumenterer for at funnene likevel er viktige." },
        { place: "lecture", mood: "proud",
          text: "After an hour of discussion, she is told that her thesis has been awarded a distinction. It was worth all those late nights in the reading room!",
          tr: "Bir saatlik tartışmanın ardından tezinin üstün başarıyla kabul edildiği bildiriliyor. Okuma salonundaki onca geç geceye değdi!",
          nb: "Etter en time med diskusjon får hun beskjed om at oppgaven har fått toppkarakter. Det var verdt alle de sene kveldene på lesesalen!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Çalınan bisiklet", nb: "Den stjålne sykkelen" },
      scenes: [
        { place: "police", mood: "worried",
          text: "When Emil came out of work yesterday, his bike had vanished. Never before had anything like that happened to him.",
          tr: "Emil dün işten çıktığında bisikleti ortadan kaybolmuştu. Daha önce başına hiç böyle bir şey gelmemişti.",
          nb: "Da Emil kom ut fra jobben i går, var sykkelen hans forsvunnet. Aldri før hadde noe sånt skjedd ham." },
        { place: "police", mood: "thinking",
          text: "He went to the police station to report the theft. The officer asked whether the bike had been locked, and Emil said that was precisely what was so strange.",
          tr: "Hırsızlığı bildirmek için karakola gitti. Polis memuru bisikletin kilitli olup olmadığını sordu, Emil de tuhaf olanın tam olarak bu olduğunu söyledi.",
          nb: "Han dro til politistasjonen for å anmelde tyveriet. Betjenten spurte om sykkelen hadde vært låst, og Emil sa at det var nettopp det som var så rart." },
        { place: "police", mood: "surprised",
          text: "What made it worse was that he had bought a brand-new lock only the week before. Not only are those locks expensive, but thieves can also cut through them in seconds, the officer explained.",
          tr: "Daha da kötüsü, sadece bir hafta önce yepyeni bir kilit almıştı. Bu kilitler hem pahalı hem de hırsızlar onları saniyeler içinde kesebiliyor, diye açıkladı memur.",
          nb: "Det som gjorde det verre, var at han hadde kjøpt en splitter ny lås bare uka før. Ikke bare er slike låser dyre, men tyvene kan også klippe dem opp på sekunder, forklarte betjenten." },
        { place: "police", mood: "proud",
          text: "Three days later, the police called. It was his neighbour who had spotted the bike behind a shopping centre!",
          tr: "Üç gün sonra polis aradı. Bisikleti bir alışveriş merkezinin arkasında fark eden, komşusuydu!",
          nb: "Tre dager senere ringte politiet. Det var naboen hans som hadde sett sykkelen bak et kjøpesenter!" }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Kaçan uçak", nb: "Flyet som gikk" },
      scenes: [
        { place: "airport", mood: "worried",
          text: "Mira was supposed to fly to Istanbul to celebrate her mother's birthday. But by the time she got to Heathrow, the plane had already left.",
          tr: "Mira annesinin doğum gününü kutlamak için İstanbul'a uçacaktı. Ama Heathrow'a vardığında uçak çoktan kalkmıştı.",
          nb: "Mira skulle fly til Istanbul for å feire bursdagen til mora. Men da hun kom til Heathrow, hadde flyet allerede gått." },
        { place: "airport", mood: "thinking",
          text: "If only she had got up when the alarm went off, she would have caught the plane. She regrets pressing the snooze button three times.",
          tr: "Keşke çalar saat çaldığında kalksaydı, o zaman uçağa yetişirdi. Erteleme düğmesine üç kez bastığına pişman.",
          nb: "Hadde hun bare stått opp da vekkerklokka ringte, ville hun ha rukket flyet. Hun angrer på at hun trykket på slumreknappen tre ganger." },
        { place: "airport", mood: "thinking",
          text: "Had she not been so stubborn, she could have taken a taxi instead of the train. But there's no point crying over spilt milk.",
          tr: "O kadar inatçı olmasaydı tren yerine taksiye binebilirdi. Ama olan olmuş, ağlamanın anlamı yok.",
          nb: "Hadde hun ikke vært så sta, kunne hun ha tatt en taxi i stedet for toget. Men det nytter ikke å gråte over spilt melk." },
        { place: "airport", mood: "proud",
          text: "Fortunately, she found another flight that evening. She arrived just in time to sing happy birthday.",
          tr: "Neyse ki o akşam başka bir uçak buldu. Doğum günü şarkısını söylemeye tam zamanında yetişti.",
          nb: "Heldigvis fant hun et annet fly samme kveld. Hun kom fram akkurat tidsnok til å synge bursdagssangen." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Zorlu pazarlık", nb: "En tøff forhandling" },
      scenes: [
        { place: "boardroom", mood: "thinking",
          text: "Emil has been put in charge of negotiating a new contract with a supplier. The supplier wants to raise its prices by fifteen per cent.",
          tr: "Emil bir tedarikçiyle yeni bir sözleşme için müzakereden sorumlu tutuldu. Tedarikçi fiyatlarını yüzde on beş artırmak istiyor.",
          nb: "Emil har fått ansvaret for å forhandle fram en ny kontrakt med en leverandør. Leverandøren vil øke prisene med femten prosent." },
        { place: "boardroom", mood: "worried",
          text: "In the meeting, the other side refuses to budge. Emil proposes a compromise, but they won't back down.",
          tr: "Toplantıda karşı taraf yerinden kıpırdamıyor. Emil bir uzlaşma öneriyor ama onlar geri adım atmıyor.",
          nb: "I møtet nekter motparten å rikke seg. Emil foreslår et kompromiss, men de vil ikke gi seg." },
        { place: "boardroom", mood: "thinking",
          text: "Emil then points out that they have been loyal customers for ten years and would consider a longer deal. If they settle for five per cent, the company will commit for three years.",
          tr: "Bunun üzerine Emil, on yıldır sadık müşteri olduklarını ve daha uzun bir anlaşmaya açık olduklarını belirtiyor. Yüzde beşe razı olurlarsa firma kendini üç yıllığına bağlayacak.",
          nb: "Da påpeker Emil at de har vært lojale kunder i ti år og kan tenke seg en lengre avtale. Hvis de nøyer seg med fem prosent, binder firmaet seg i tre år." },
        { place: "boardroom", mood: "proud",
          text: "After a short break, the supplier agrees. They meet halfway at seven per cent, and both parties walk away satisfied.",
          tr: "Kısa bir aradan sonra tedarikçi kabul ediyor. Ortada, yüzde yedide buluşuyorlar ve iki taraf da memnun ayrılıyor.",
          nb: "Etter en kort pause sier leverandøren seg enig. De møtes på midten med sju prosent, og begge parter går fornøyde derfra." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Canlı yayında", nb: "Direkte på TV" },
      scenes: [
        { place: "tvstudio", mood: "surprised",
          text: "Mira is invited to a TV debate on fake news on social media. She has written an opinion piece on the subject that has attracted a great deal of attention.",
          tr: "Mira, sosyal medyadaki sahte haberlerle ilgili bir televizyon tartışmasına davet ediliyor. Bu konuda çok büyük ilgi gören bir köşe yazısı yazdı.",
          nb: "Mira blir invitert til en TV-debatt om falske nyheter i sosiale medier. Hun har skrevet en kronikk om temaet som har fått mye oppmerksomhet." },
        { place: "tvstudio", mood: "worried",
          text: "The presenter asks whether the government should regulate the platforms more strictly. Another guest claims that this would threaten freedom of speech.",
          tr: "Program sunucusu, hükümetin platformları daha sıkı denetlemesi gerekip gerekmediğini soruyor. Başka bir konuk bunun ifade özgürlüğünü tehdit edeceğini iddia ediyor.",
          nb: "Programlederen spør om regjeringen burde regulere plattformene strengere. En annen gjest hevder at det vil true ytringsfriheten." },
        { place: "tvstudio", mood: "thinking",
          text: "Mira responds that media literacy matters more than bans. In her view, schools must teach children to distinguish between facts and propaganda.",
          tr: "Mira, medya okuryazarlığının yasaklardan daha önemli olduğunu söylüyor. Ona göre okullar çocuklara gerçeklerle propagandayı ayırt etmeyi öğretmeli.",
          nb: "Mira svarer at mediekompetanse er viktigere enn forbud. Etter hennes syn må skolen lære barna å skille mellom fakta og propaganda." },
        { place: "tvstudio", mood: "proud",
          text: "After the broadcast, she receives hundreds of messages. Most of them are positive, although a few people call her naive.",
          tr: "Yayından sonra yüzlerce mesaj alıyor. Birkaç kişi ona saf dese de çoğu olumlu.",
          nb: "Etter sendingen får hun hundrevis av meldinger. De fleste er positive, selv om noen få kaller henne naiv." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "İskoç aksanı", nb: "Skotsk aksent" },
      scenes: [
        { place: "fjord", mood: "happy",
          text: "During the summer holidays, Emil takes the ferry across a loch in the Scottish Highlands to visit a colleague. The signs on the pier are written in both English and Gaelic.",
          tr: "Yaz tatilinde Emil bir iş arkadaşını ziyaret etmek için İskoç Dağlık Bölgesi'ndeki bir gölü feribotla geçiyor. İskeledeki tabelalar hem İngilizce hem de Galce yazılmış.",
          nb: "I sommerferien tar Emil ferja over en innsjø i Det skotske høylandet for å besøke en kollega. Skiltene på brygga er skrevet både på engelsk og gælisk." },
        { place: "fjord", mood: "surprised",
          text: "His colleague has a strong Glaswegian accent, and at first Emil understands almost nothing. She says wee instead of small and aye instead of yes.",
          tr: "İş arkadaşının güçlü bir Glasgow aksanı var ve Emil başta neredeyse hiçbir şey anlamıyor. Small yerine wee, yes yerine aye diyor.",
          nb: "Kollegaen har en sterk Glasgow-aksent, og først forstår Emil nesten ingenting. Hun sier wee i stedet for small og aye i stedet for yes." },
        { place: "fjord", mood: "thinking",
          text: "After a few days, Emil starts to get used to the accent. He also manages to pick up some slang from the local teenagers, who describe everything as pure dead brilliant.",
          tr: "Birkaç gün sonra Emil aksana alışmaya başlıyor. Her şeye pure dead brilliant diyen yerel gençlerden biraz argo da kapmayı başarıyor.",
          nb: "Etter noen dager begynner Emil å venne seg til aksenten. Han klarer også å plukke opp litt slang fra ungdommene der, som kaller alt pure dead brilliant." },
        { place: "fjord", mood: "proud",
          text: "When he leaves, he can say cheers, pal like a real Scot. He realises that there is no single correct way to speak English.",
          tr: "Ayrılırken gerçek bir İskoç gibi cheers, pal diyebiliyor. İngilizce konuşmanın tek bir doğru yolu olmadığını anlıyor.",
          nb: "Da han reiser, kan han si cheers, pal som en ekte skotte. Han skjønner at det ikke finnes én riktig måte å snakke engelsk på." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Yatırımcılara sunum", nb: "Pitchen" },
      scenes: [
        { place: "stage", mood: "worried",
          text: "Mira and two friends have launched an app that connects older people with volunteers. Tonight they are pitching the idea to investors, and Mira has butterflies in her stomach.",
          tr: "Mira ve iki arkadaşı, yaşlıları gönüllülerle buluşturan bir uygulama başlattı. Bu akşam fikirlerini yatırımcılara sunacaklar ve Mira'nın midesinde kelebekler uçuşuyor.",
          nb: "Mira og to venner har lansert en app som kobler eldre med frivillige. I kveld skal de pitche ideen for investorer, og Mira har sommerfugler i magen." },
        { place: "stage", mood: "thinking",
          text: "The first version flopped, so they had to go back to the drawing board. Now they have rethought everything and are focusing on user-friendliness.",
          tr: "İlk sürüm başarısız oldu, bu yüzden en baştan başlamak zorunda kaldılar. Şimdi her şeyi yeniden düşündüler ve kullanım kolaylığına odaklanıyorlar.",
          nb: "Den første versjonen floppet, så de måtte tilbake til tegnebrettet. Nå har de tenkt nytt og satser på brukervennlighet." },
        { place: "stage", mood: "happy",
          text: "Mira speaks with passion, and she hits the nail on the head when she explains the need for the app. One investor says that they are onto a winner.",
          tr: "Mira tutkuyla konuşuyor ve uygulamaya duyulan ihtiyacı anlatırken tam üstüne basıyor. Bir yatırımcı, ellerinde kazanan bir fikir olduğunu söylüyor.",
          nb: "Mira snakker engasjert, og hun treffer spikeren på hodet når hun forklarer behovet for appen. En investor sier at de har en vinner på hånden." },
        { place: "stage", mood: "proud",
          text: "After the pitch, they receive an offer of two hundred thousand pounds. Now it is time to roll up their sleeves!",
          tr: "Sunumdan sonra iki yüz bin sterlinlik bir teklif alıyorlar. Artık kolları sıvama zamanı!",
          nb: "Etter pitchen får de et tilbud på to hundre tusen pund. Nå er det på tide å brette opp ermene!" }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Margaret'ın atasözleri", nb: "Ordtakene til Margaret" },
      scenes: [
        { place: "garden", mood: "happy",
          text: "In spring, Emil helps his elderly neighbour, Margaret, in her garden. She is eighty and has a proverb for every occasion.",
          tr: "Baharda Emil yaşlı komşusu Margaret'a bahçede yardım ediyor. Margaret seksen yaşında ve her duruma uygun bir atasözü var.",
          nb: "Om våren hjelper Emil den eldre naboen sin, Margaret, i hagen. Hun er åtti år og har et ordtak for enhver anledning." },
        { place: "garden", mood: "thinking",
          text: "When Emil wants to plant everything in one day, she reminds him that Rome wasn't built in a day. When he complains about the rain, she says that every cloud has a silver lining.",
          tr: "Emil her şeyi bir günde dikmek isteyince Margaret ona Roma'nın bir günde kurulmadığını hatırlatıyor. Yağmurdan şikâyet ettiğinde ise her işte bir hayır olduğunu söylüyor.",
          nb: "Da Emil vil plante alt på én dag, minner hun ham på at Roma ikke ble bygd på én dag. Når han klager over regnet, sier hun at ingen skyer er uten en sølvkant." },
        { place: "garden", mood: "surprised",
          text: "By summer, the garden is full of tomatoes and strawberries. Margaret smiles and says that good things come to those who wait.",
          tr: "Yaz geldiğinde bahçe domates ve çileklerle dolu. Margaret gülümseyip sabrın sonunun selamet olduğunu söylüyor.",
          nb: "Til sommeren er hagen full av tomater og jordbær. Margaret smiler og sier at den som venter på noe godt, ikke venter forgjeves." },
        { place: "garden", mood: "proud",
          text: "Emil takes a basket of vegetables home. He thinks that proverbs contain a great deal of wisdom.",
          tr: "Emil eve bir sepet sebze götürüyor. Atasözlerinin çok fazla bilgelik içerdiğini düşünüyor.",
          nb: "Emil tar med seg en kurv med grønnsaker hjem. Han tenker at ordtak inneholder mye visdom." }
      ]
    },
    {
      hero: "mira",
      title: { tr: "Kütüphanede köşe yazısı", nb: "En kronikk på biblioteket" },
      scenes: [
        { place: "library", mood: "thinking",
          text: "Mira is going to write an opinion piece on climate adaptation for a national newspaper. She spends the whole of Saturday at the British Library looking for reliable sources.",
          tr: "Mira ulusal bir gazete için iklime uyum üzerine bir köşe yazısı yazacak. Güvenilir kaynaklar aramak için bütün cumartesiyi British Library'de geçiriyor.",
          nb: "Mira skal skrive en kronikk om klimatilpasning for en riksavis. Hun tilbringer hele lørdagen på British Library for å finne pålitelige kilder." },
        { place: "library", mood: "thinking",
          text: "She reads research reports and notes down the key points. It is essential to distinguish between her own opinions and what the research actually shows.",
          tr: "Araştırma raporlarını okuyup ana noktaları not ediyor. Kendi görüşleriyle araştırmanın gerçekte gösterdiğini birbirinden ayırmak çok önemli.",
          nb: "Hun leser forskningsrapporter og noterer hovedpunktene. Det er helt nødvendig å skille mellom egne meninger og det forskningen faktisk viser." },
        { place: "library", mood: "worried",
          text: "What she finds hardest is explaining complex relationships in simple terms. She rewrites the introduction five times before she is satisfied.",
          tr: "En zor bulduğu şey, karmaşık ilişkileri basit bir dille açıklamak. Memnun kalana kadar girişi beş kez yeniden yazıyor.",
          nb: "Det hun synes er vanskeligst, er å forklare komplekse sammenhenger på en enkel måte. Hun skriver innledningen om fem ganger før hun er fornøyd." },
        { place: "library", mood: "proud",
          text: "The article is published on Monday and shared thousands of times. Several politicians refer to it during the debate.",
          tr: "Yazı pazartesi günü yayımlanıyor ve binlerce kez paylaşılıyor. Birçok politikacı tartışma sırasında ona atıfta bulunuyor.",
          nb: "Kronikken blir publisert på mandag og delt flere tusen ganger. Flere politikere henviser til den i debatten." }
      ]
    },
    {
      hero: "emil",
      casual: true,
      title: { tr: "Düğün konuşması", nb: "Brudgommens beste venn" },
      scenes: [
        { place: "wedding", mood: "happy",
          text: "Emil's best friend, Jonas, is marrying Sophie, and Emil is the best man. He has been practising his speech in front of the mirror for a whole week.",
          tr: "Emil'in en iyi arkadaşı Jonas, Sophie ile evleniyor ve Emil sağdıç. Bir hafta boyunca aynanın karşısında konuşmasının provasını yaptı.",
          nb: "Emils beste venn, Jonas, gifter seg med Sophie, og Emil er forlover. Han har øvd på talen foran speilet i en hel uke." },
        { place: "wedding", mood: "thinking",
          text: "It was actually Emil who introduced them to each other five years ago. Had he not invited them both to the same party, they might never have met.",
          tr: "Aslında onları beş yıl önce birbiriyle tanıştıran Emil'di. İkisini de aynı partiye davet etmeseydi belki de hiç tanışmayacaklardı.",
          nb: "Det var faktisk Emil som introduserte dem for hverandre for fem år siden. Hadde han ikke invitert dem begge på den samme festen, hadde de kanskje aldri møttes." },
        { place: "wedding", mood: "happy",
          text: "The guests laugh when he describes their first date, when Jonas got lost and turned up an hour late. Sophie waited anyway, because where there's a will, there's a way.",
          tr: "İlk buluşmalarını, Jonas'ın kaybolup bir saat geç geldiğini anlattığında konuklar gülüyor. Sophie yine de bekledi, çünkü isteyen her şeyi başarır.",
          nb: "Gjestene ler når han forteller om den første daten, da Jonas gikk seg vill og dukket opp en time for sent. Sophie ventet likevel, for der det er vilje, er det vei." },
        { place: "wedding", mood: "proud",
          text: "Finally, Emil raises his glass and wishes the happy couple all the best. Everyone stands up and drinks a toast to love.",
          tr: "Sonunda Emil kadehini kaldırıp mutlu çifte her şeyin en iyisini diliyor. Herkes ayağa kalkıp aşk için kadeh kaldırıyor.",
          nb: "Til slutt løfter Emil glasset og ønsker brudeparet alt godt. Alle reiser seg og skåler for kjærligheten." }
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
