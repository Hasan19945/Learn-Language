import type { StoryHero, StoryMood, StoryPlace, Talk } from "../../types";
import type { HelpLang } from "./itStories";

type Line = [who: 0 | 1, mood: StoryMood, text: string, tr: string, nb: string, place?: StoryPlace];

interface TalkSource {
  cast: [StoryHero, StoryHero];
  place: StoryPlace;
  lines: Line[];
}

const TALKS: Record<"b1" | "b2" | "c1", TalkSource> = {
  b1: {
    cast: ["emil", "sara"],
    place: "clinic",
    lines: [
      [1, "happy", "Good morning, Emil. I'm your GP today. What are your symptoms?", "Günaydın Emil. Bugün aile hekimin benim. Belirtilerin neler?", "God morgen, Emil. Jeg er fastlegen din i dag. Hvilke symptomer har du?"],
      [0, "worried", "I have a sore throat and a temperature. My back hurts too.", "Boğazım ağrıyor ve ateşim var. Sırtım da ağrıyor.", "Jeg har vondt i halsen og feber. Ryggen gjør også vondt."],
      [1, "thinking", "Let me examine you. Open your mouth, please.", "Seni muayene edeyim. Ağzını aç lütfen.", "La meg undersøke deg. Åpne munnen, er du snill."],
      [0, "worried", "Is it serious? Should I go to A&E?", "Ciddi mi? Acil servise gitmeli miyim?", "Er det alvorlig? Bør jeg dra til akuttmottaket?"],
      [1, "happy", "No, A&E and an ambulance are for real emergencies. This looks like a throat infection.", "Hayır, acil servis ve ambulans gerçek acil durumlar içindir. Bu bir boğaz enfeksiyonuna benziyor.", "Nei, akuttmottak og ambulanse er for virkelige nødstilfeller. Dette ser ut som en halsinfeksjon."],
      [0, "thinking", "Do I need a blood test or an X-ray?", "Kan tahliline ya da röntgene ihtiyacım var mı?", "Trenger jeg en blodprøve eller et røntgenbilde?"],
      [1, "thinking", "A blood test, yes, but no X-ray. Your lungs sound fine.", "Kan tahlili evet, ama röntgen hayır. Akciğerlerin iyi görünüyor.", "En blodprøve, ja, men ikke røntgen. Lungene høres fine ut."],
      [0, "thinking", "Do I need a referral to a specialist?", "Bir uzmana sevk gerekiyor mu?", "Trenger jeg en henvisning til en spesialist?"],
      [1, "happy", "No referral is needed. I'll give you a prescription for antibiotics.", "Sevke gerek yok. Sana antibiyotik reçetesi vereceğim.", "Det trengs ingen henvisning. Jeg gir deg en resept på antibiotika."],
      [0, "worried", "My employer needs a sick note. Can you write one?", "İşverenim doktor raporu istiyor. Yazabilir misiniz?", "Arbeidsgiveren min trenger en sykmelding. Kan du skrive en?"],
      [1, "happy", "Here is your sick note for three days. Rest and drink a lot of water.", "İşte üç günlük raporun. Dinlen ve bol su iç.", "Her er sykmeldingen din for tre dager. Hvil deg og drikk mye vann."],
      [0, "thinking", "What if it gets worse? How do I make an appointment?", "Ya kötüleşirse? Nasıl randevu alırım?", "Hva om det blir verre? Hvordan bestiller jeg time?"],
      [1, "proud", "Just call us, and we can make an appointment for the same day.", "Bizi araman yeterli, aynı gün için randevu verebiliriz.", "Bare ring oss, så kan vi bestille time samme dag."],
      [0, "proud", "Thank you, doctor. I feel better already!", "Teşekkürler doktor. Şimdiden daha iyi hissediyorum!", "Tusen takk, doktor. Jeg føler meg allerede bedre!"]
    ]
  },
  b2: {
    cast: ["hansen", "emil"],
    place: "clinic",
    lines: [
      [1, "happy", "Good afternoon, Mr Hansen. Your tests are back, and I have a diagnosis.", "İyi günler Bay Hansen. Tahlilleriniz geldi ve bir teşhisim var.", "God dag, Hansen. Prøvesvarene er kommet, og jeg har en diagnose."],
      [0, "worried", "Please tell me it isn't cancer!", "Lütfen kanser olmadığını söyleyin!", "Si at det ikke er kreft!"],
      [1, "happy", "No, it isn't cancer. You have high blood pressure and type 2 diabetes.", "Hayır, kanser değil. Yüksek tansiyonunuz ve tip 2 şeker hastalığınız var.", "Nei, det er ikke kreft. Du har høyt blodtrykk og diabetes type 2."],
      [0, "worried", "Is that a serious illness?", "Bu ciddi bir hastalık mı?", "Er det en alvorlig sykdom?"],
      [1, "thinking", "Both are chronic, so they won't go away. But we can control them well.", "İkisi de kronik, yani geçmeyecek. Ama onları iyi kontrol edebiliriz.", "Begge er kroniske, så de går ikke over. Men vi kan holde dem godt under kontroll."],
      [0, "worried", "My father had a stroke, and my brother had a heart attack. Is it hereditary?", "Babam inme, kardeşim kalp krizi geçirdi. Kalıtsal mı?", "Faren min fikk hjerneslag, og broren min fikk hjerteinfarkt. Er det arvelig?"],
      [1, "thinking", "Partly, yes. That's why we want to start treatment now.", "Kısmen evet. Bu yüzden tedaviye hemen başlamak istiyoruz.", "Delvis, ja. Derfor vil vi starte behandlingen nå."],
      [0, "thinking", "Will the medicine have a side effect?", "İlacın yan etkisi olacak mı?", "Vil medisinen ha noen bivirkning?"],
      [1, "happy", "You may feel tired at first. Tell me if that happens.", "Başta yorgun hissedebilirsiniz. Olursa bana söyleyin.", "Du kan bli trøtt i begynnelsen. Si fra hvis det skjer."],
      [0, "worried", "Also, this wound on my foot won't heal. Look.", "Bir de ayağımdaki bu yara iyileşmiyor. Bakın.", "Og dette såret på foten vil ikke gro. Se her."],
      [1, "surprised", "That looks like an infection. With diabetes, we must act fast.", "Bu bir enfeksiyona benziyor. Şeker hastalığında hızlı davranmalıyız.", "Det ser ut som en infeksjon. Med diabetes må vi handle raskt."],
      [0, "surprised", "Will I need surgery?", "Ameliyat olmam gerekecek mi?", "Må jeg opereres?"],
      [1, "thinking", "Perhaps, but it would be minor. We'll know more tomorrow.", "Belki, ama küçük olur. Yarın daha fazlasını öğreneceğiz.", "Kanskje, men det blir i så fall et lite inngrep. Vi vet mer i morgen."],
      [0, "thinking", "Am I the only one with all these problems?", "Bütün bu sorunlar bir tek bende mi var?", "Er jeg den eneste med alle disse problemene?"],
      [1, "happy", "Not at all. Thousands of people will be diagnosed with diabetes this year, and most of them live well.", "Hiç de değil. Bu yıl binlerce kişiye şeker hastalığı teşhisi konacak ve çoğu iyi yaşıyor.", "Slett ikke. Tusenvis av mennesker får diagnosen diabetes i år, og de fleste lever godt."],
      [0, "happy", "How long will it take me to recover?", "İyileşmem ne kadar sürer?", "Hvor lang tid tar det før jeg blir frisk?"],
      [1, "proud", "If you follow the plan, your foot should recover in a few weeks.", "Plana uyarsanız ayağınız birkaç haftada iyileşir.", "Hvis du følger planen, bør foten bli frisk på noen uker."]
    ]
  },
  c1: {
    cast: ["berg", "emil"],
    place: "ward",
    lines: [
      [1, "happy", "Good evening, Ms Berg. I'm Dr Emil, the consultant on this ward.", "İyi akşamlar Bayan Berg. Ben Dr. Emil, bu servisin kıdemli uzman doktoruyum.", "God kveld, Berg. Jeg er doktor Emil, overlegen på denne sengeposten."],
      [0, "worried", "Why do I have to stay here? I only fainted.", "Neden burada kalmak zorundayım? Sadece bayıldım.", "Hvorfor må jeg bli her? Jeg besvimte jo bare."],
      [1, "thinking", "Patients who present with sudden fainting must be admitted for tests.", "Ani bayılma şikâyetiyle başvuran hastalar tetkik için yatırılmalıdır.", "Pasienter som kommer med plutselig besvimelse, må legges inn for undersøkelser."],
      [1, "thinking", "The scan shows a small tumour. We can't rule out anything before the biopsy.", "Görüntülemede küçük bir tümör var. Biyopsiden önce hiçbir şeyi dışlayamayız.", "Bildene viser en liten svulst. Vi kan ikke utelukke noe før biopsien."],
      [0, "surprised", "A tumour! Is it malignant?", "Tümör mü! Kötü huylu mu?", "En svulst! Er den ondartet?"],
      [1, "happy", "It may well be benign. The biopsy will tell us.", "İyi huylu olması çok mümkün. Biyopsi bize söyleyecek.", "Den kan godt være godartet. Biopsien vil vise det."],
      [0, "worried", "My son keeps calling. Will you tell him everything?", "Oğlum sürekli arıyor. Ona her şeyi söyleyecek misiniz?", "Sønnen min ringer hele tiden. Forteller du ham alt?"],
      [1, "thinking", "Patient confidentiality means I can't, unless you agree. Is he your next of kin?", "Hasta gizliliği yüzünden, siz kabul etmedikçe söyleyemem. En yakın akrabanız o mu?", "Taushetsplikten gjør at jeg ikke kan det uten ditt samtykke. Er han din nærmeste pårørende?"],
      [0, "thinking", "Yes, he is. You may speak to him.", "Evet, o. Onunla konuşabilirsiniz.", "Ja, det er han. Du kan snakke med ham."],
      [1, "thinking", "Thank you. Before the operation, I need your informed consent, so let me explain the risks.", "Teşekkürler. Ameliyattan önce aydınlatılmış onamınız gerekiyor, o yüzden riskleri anlatayım.", "Takk. Før operasjonen trenger jeg ditt informerte samtykke, så la meg forklare risikoen."],
      [1, "proud", "Good news, Ms Berg. The tumour is benign, and the prognosis is excellent.", "İyi haber Bayan Berg. Tümör iyi huylu ve beklenen seyir mükemmel.", "Gode nyheter, Berg. Svulsten er godartet, og prognosen er svært god.", "clinic"],
      [0, "happy", "Thank goodness! I was afraid I would need palliative care.", "Çok şükür! Palyatif bakıma ihtiyacım olacak diye korkuyordum.", "Gudskjelov! Jeg var redd for at jeg ville trenge lindrende behandling.", "clinic"],
      [1, "happy", "No, nothing like that. You should be discharged next week.", "Hayır, öyle bir şey yok. Gelecek hafta taburcu olmanız gerekir.", "Nei, ikke i det hele tatt. Du bør bli utskrevet neste uke.", "clinic"],
      [0, "thinking", "And what about my own doctor?", "Peki ya kendi doktorum?", "Og hva med fastlegen min?", "clinic"],
      [1, "proud", "Your GP will get a discharge summary and arrange a follow-up.", "Aile hekiminiz taburcu özetini alacak ve kontrol ayarlayacak.", "Fastlegen din får epikrisen og sørger for oppfølging.", "clinic"]
    ]
  }
};

export function healthTalk(level: keyof typeof TALKS, lang: HelpLang): Talk {
  const { cast, place, lines } = TALKS[level];
  return {
    cast,
    place,
    lines: lines.map(([who, mood, text, tr, nb, at]) => ({ who, mood, text, tr: lang === "tr" ? tr : nb, place: at }))
  };
}
