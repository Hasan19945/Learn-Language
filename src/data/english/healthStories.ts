import { healthTalk } from "./healthTalks";
import { localizeStory, type HelpLang, type StorySource } from "./itStories";

const STORIES: Record<"b1" | "b2" | "c1", StorySource> = {
  b1: {
    title: { tr: "Emil'in zor haftası", nb: "Emils tøffe uke" },
    scenes: [
      { place: "home", mood: "worried",
        text: "Emil is a young medical student, but this week he is the patient. He wakes up with a sore throat and a temperature. Even his back hurts.",
        tr: "Emil genç bir tıp öğrencisi ama bu hafta hasta olan kendisi. Boğaz ağrısı ve ateşle uyanıyor. Sırtı bile ağrıyor.",
        nb: "Emil er en ung medisinstudent, men denne uken er han selv pasient. Han våkner med vondt i halsen og feber. Til og med ryggen gjør vondt." },
      { place: "clinic", mood: "thinking",
        text: "He phones his GP to make an appointment. The doctor asks about his symptoms and examines him carefully. Emil needs a blood test, and he gets a prescription.",
        tr: "Randevu almak için aile hekimini arıyor. Doktor belirtilerini soruyor ve onu dikkatle muayene ediyor. Emil'in kan tahliline ihtiyacı var ve bir reçete alıyor.",
        nb: "Han ringer fastlegen for å bestille time. Legen spør om symptomene hans og undersøker ham nøye. Emil trenger en blodprøve, og han får en resept." },
      { place: "clinic", mood: "happy",
        text: "The doctor also writes a sick note, so he can rest at home. Three days later, he feels much better.",
        tr: "Doktor bir de rapor yazıyor, böylece evde dinlenebiliyor. Üç gün sonra kendini çok daha iyi hissediyor.",
        nb: "Legen skriver også en sykmelding, så han kan hvile hjemme. Tre dager senere føler han seg mye bedre." },
      { place: "emergency", mood: "surprised",
        text: "On his way home, he sees an old man fall on the ice! Emil calls an ambulance and stays with him. They take the man to A&E.",
        tr: "Eve dönerken yaşlı bir adamın buzda düştüğünü görüyor! Emil ambulans çağırıyor ve adamın yanında kalıyor. Adamı acil servise götürüyorlar.",
        nb: "På vei hjem ser han en gammel mann falle på isen! Emil ringer etter ambulanse og blir hos ham. De tar mannen til akuttmottaket." },
      { place: "ward", mood: "thinking",
        text: "An X-ray shows a broken leg. The hospital doctor writes a referral to a specialist.",
        tr: "Röntgen kırık bir bacak gösteriyor. Hastane doktoru bir uzmana sevk yazıyor.",
        nb: "Et røntgenbilde viser et brukket bein. Sykehuslegen skriver en henvisning til en spesialist." },
      { place: "ward", mood: "proud",
        text: "The old man thanks Emil with tears in his eyes. Emil smiles. Now he knows exactly why he wants to be a doctor.",
        tr: "Yaşlı adam gözleri dolu dolu Emil'e teşekkür ediyor. Emil gülümsüyor. Artık neden doktor olmak istediğini çok iyi biliyor.",
        nb: "Den gamle mannen takker Emil med tårer i øynene. Emil smiler. Nå vet han nøyaktig hvorfor han vil bli lege." }
    ]
  },
  b2: {
    title: { tr: "Emil'in ilk hastası", nb: "Emils første pasient" },
    scenes: [
      { place: "ward", mood: "happy",
        text: "Two years later, Emil is a junior doctor. His first patient, Mr Hansen, has high blood pressure and diabetes. He is worried about his chronic illness.",
        tr: "İki yıl sonra Emil genç bir doktor. İlk hastası Bay Hansen'in yüksek tansiyonu ve şeker hastalığı var. Kronik hastalığı için endişeleniyor.",
        nb: "To år senere er Emil en ung lege. Den første pasienten hans, Hansen, har høyt blodtrykk og diabetes. Han er bekymret for den kroniske sykdommen sin." },
      { place: "clinic", mood: "thinking",
        text: "Mr Hansen asks if his problems are hereditary. His father had a stroke, and his brother had a heart attack. Emil explains that a healthy life can lower the risk.",
        tr: "Bay Hansen sorunlarının kalıtsal olup olmadığını soruyor. Babası inme, kardeşi kalp krizi geçirmiş. Emil sağlıklı bir yaşamın riski azaltabileceğini anlatıyor.",
        nb: "Hansen spør om problemene er arvelige. Faren fikk hjerneslag, og broren fikk hjerteinfarkt. Emil forklarer at et sunt liv kan redusere risikoen." },
      { place: "emergency", mood: "surprised",
        text: "One night, Mr Hansen suddenly gets very ill. He has a serious infection in his foot, and he needs urgent surgery.",
        tr: "Bir gece Bay Hansen aniden çok kötüleşiyor. Ayağında ciddi bir enfeksiyon var ve acil ameliyat olması gerekiyor.",
        nb: "En natt blir Hansen plutselig veldig syk. Han har en alvorlig infeksjon i foten, og han må opereres med en gang." },
      { place: "ward", mood: "worried",
        text: "The doctors do more tests because they fear cancer. Emil waits nervously for the diagnosis. Luckily, Mr Hansen will not be diagnosed with anything new.",
        tr: "Doktorlar kanserden korktukları için daha fazla tetkik yapıyor. Emil teşhisi gergin bir şekilde bekliyor. Neyse ki Bay Hansen'e yeni bir teşhis konmayacak.",
        nb: "Legene tar flere prøver fordi de frykter kreft. Emil venter nervøst på diagnosen. Heldigvis får ikke Hansen noen ny diagnose." },
      { place: "clinic", mood: "thinking",
        text: "The new treatment works, but it has one side effect: he feels very tired. Emil changes the dose and checks on him every day.",
        tr: "Yeni tedavi işe yarıyor ama bir yan etkisi var: Kendini çok yorgun hissediyor. Emil dozu değiştiriyor ve onu her gün kontrol ediyor.",
        nb: "Den nye behandlingen virker, men den har én bivirkning: Han blir veldig trøtt. Emil endrer dosen og ser til ham hver dag." },
      { place: "ward", mood: "proud",
        text: "Three weeks later, Mr Hansen goes home to recover. He shakes Emil's hand and promises to take his medicine.",
        tr: "Üç hafta sonra Bay Hansen iyileşmek için eve gidiyor. Emil'in elini sıkıp ilaçlarını içeceğine söz veriyor.",
        nb: "Tre uker senere drar Hansen hjem for å bli helt frisk. Han trykker Emil i hånden og lover å ta medisinene sine." }
    ]
  },
  c1: {
    title: { tr: "Uzman doktorun uzun gecesi", nb: "Overlegens lange natt" },
    scenes: [
      { place: "emergency", mood: "worried",
        text: "Emil is now a consultant, and tonight the hospital is full. A woman has come in because she fainted. Patients who present with these symptoms must be admitted at once.",
        tr: "Emil artık kıdemli bir uzman ve bu gece hastane dolu. Bir kadın bayıldığı için gelmiş. Bu belirtilerle başvuran hastalar hemen yatırılmalı.",
        nb: "Emil er nå overlege, og i natt er sykehuset fullt. En kvinne har kommet inn fordi hun besvimte. Pasienter som kommer med slike symptomer, må legges inn med en gang." },
      { place: "ward", mood: "thinking",
        text: "On the ward, the team finds a tumour. Is it benign or malignant? Emil cannot rule out the worst before the biopsy.",
        tr: "Serviste ekip bir tümör buluyor. İyi huylu mu, kötü huylu mu? Emil biyopsiden önce en kötü ihtimali dışlayamıyor.",
        nb: "På sengeposten finner teamet en svulst. Er den godartet eller ondartet? Emil kan ikke utelukke det verste før biopsien." },
      { place: "clinic", mood: "thinking",
        text: "He explains every risk first, because the operation requires informed consent. Her son calls and asks for details, but patient confidentiality comes first. Only when she names him as her next of kin can Emil speak to him.",
        tr: "Önce bütün riskleri anlatıyor, çünkü ameliyat aydınlatılmış onam gerektiriyor. Oğlu arayıp ayrıntı istiyor ama hasta gizliliği önce geliyor. Emil ancak kadın onu en yakın akrabası olarak gösterince oğluyla konuşabiliyor.",
        nb: "Først forklarer han alle risikoene, for operasjonen krever informert samtykke. Sønnen hennes ringer og vil ha detaljer, men taushetsplikten kommer først. Først når hun oppgir ham som nærmeste pårørende, kan Emil snakke med ham." },
      { place: "clinic", mood: "happy",
        text: "The result arrives: the tumour is benign, and the prognosis is excellent. Emil goes to tell her himself.",
        tr: "Sonuç geliyor: Tümör iyi huylu ve beklenen seyir çok iyi. Emil bunu ona kendisi söylemeye gidiyor.",
        nb: "Svaret kommer: Svulsten er godartet, og prognosen er svært god. Emil går selv for å fortelle henne det." },
      { place: "ward", mood: "thinking",
        text: "In the next bed lies an old man who is receiving palliative care. Emil sits with him for a moment, because good medicine also means listening.",
        tr: "Yandaki yatakta palyatif bakım alan yaşlı bir adam yatıyor. Emil bir süre yanında oturuyor, çünkü iyi hekimlik dinlemek demektir.",
        nb: "I sengen ved siden av ligger en gammel mann som får lindrende behandling. Emil sitter hos ham en stund, for god medisin handler også om å lytte." },
      { place: "ward", mood: "proud",
        text: "A week later, the woman is ready to be discharged. Her GP will receive a discharge summary and arrange a follow-up. At the door, she smiles and says thank you.",
        tr: "Bir hafta sonra kadın taburcu olmaya hazır. Aile hekimi taburcu özetini alacak ve kontrol ayarlayacak. Kapıda gülümseyip teşekkür ediyor.",
        nb: "En uke senere er kvinnen klar til å bli utskrevet. Fastlegen får epikrisen og sørger for oppfølging. I døra smiler hun og sier takk." }
    ]
  }
};

export const healthStory = (level: keyof typeof STORIES, lang: HelpLang) => ({
  ...localizeStory(STORIES[level], "emil", lang, level === "b1"),
  talk: healthTalk(level, lang)
});
