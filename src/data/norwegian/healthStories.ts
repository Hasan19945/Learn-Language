import type { Story } from "../../types";
import { HEALTH_TALKS } from "./healthTalks";

export const HEALTH_STORIES: Record<"b1" | "b2" | "c1", Story> = {
  b1: {
    hero: "emil",
    casual: true,
    talk: HEALTH_TALKS.b1,
    title: "Emil'in zor haftası",
    scenes: [
      { place: "home", mood: "worried",
        text: "Emil er en ung medisinstudent, men denne uken er han selv pasient. Det er ikke morsomt å ha vondt i halsen. Han begynner å føle seg dårlig, og smertene blir verre.",
        tr: "Emil genç bir tıp öğrencisi ama bu hafta hasta olan kendisi. Boğazının ağrıması hiç eğlenceli değil. Kendini kötü hissetmeye başlıyor ve ağrılar artıyor." },
      { place: "clinic", mood: "thinking",
        text: "Han ringer for å bestille time hos fastlegen. Legen gjør en grundig undersøkelse og tar en blodprøve. Etterpå får han en resept, og han henter medisinen på apoteket.",
        tr: "Aile hekiminden randevu almak için arıyor. Doktor ayrıntılı bir muayene yapıyor ve kan tahlili alıyor. Sonra bir reçete alıyor ve ilacı eczaneden alıyor." },
      { place: "clinic", mood: "happy",
        text: "Legen skriver også en sykmelding, så han kan hvile hjemme. Tre dager senere føler han seg mye bedre.",
        tr: "Doktor bir de rapor yazıyor, böylece evde dinlenebiliyor. Üç gün sonra kendini çok daha iyi hissediyor." },
      { place: "emergency", mood: "surprised",
        text: "På vei hjem ser han en gammel mann falle på isen! Emil ringer 113 og blir hos ham. Ambulansen kjører mannen til akuttmottaket.",
        tr: "Eve dönerken yaşlı bir adamın buzda düştüğünü görüyor! Emil 113'ü arıyor ve adamın yanında kalıyor. Ambulans adamı acil servise götürüyor." },
      { place: "ward", mood: "thinking",
        text: "Mannen må ligge på sykehuset i flere dager. Kona hans sier at hun først prøvde å ringe legevakten. Legen skriver en henvisning til en spesialist.",
        tr: "Adamın birkaç gün hastanede yatması gerekiyor. Karısı önce nöbetçi doktoru aramayı denediğini söylüyor. Doktor bir uzmana sevk yazıyor." },
      { place: "ward", mood: "proud",
        text: "Den gamle mannen takker Emil med tårer i øynene. Emil smiler. Nå vet han nøyaktig hvorfor han vil bli lege.",
        tr: "Yaşlı adam gözleri dolu dolu Emil'e teşekkür ediyor. Emil gülümsüyor. Artık neden doktor olmak istediğini çok iyi biliyor." }
    ]
  },
  b2: {
    hero: "emil",
    talk: HEALTH_TALKS.b2,
    title: "Emil'in ilk hastası",
    scenes: [
      { place: "ward", mood: "happy",
        text: "To år senere er Emil en ung lege. Den første pasienten hans, Hansen, har høyt blodtrykk og diabetes. Han er bekymret for den kroniske sykdommen sin.",
        tr: "İki yıl sonra Emil genç bir doktor. İlk hastası Hansen'in yüksek tansiyonu ve şeker hastalığı var. Kronik hastalığı için endişeleniyor." },
      { place: "clinic", mood: "thinking",
        text: "Hansen spør om problemene er arvelige. Faren fikk hjerneslag, og broren fikk hjerteinfarkt. Emil forklarer at et sunt liv kan redusere risikoen.",
        tr: "Hansen sorunlarının kalıtsal olup olmadığını soruyor. Babası inme, kardeşi kalp krizi geçirmiş. Emil sağlıklı bir yaşamın riski azaltabileceğini anlatıyor." },
      { place: "emergency", mood: "surprised",
        text: "En natt blir Hansen plutselig veldig syk. Han har en alvorlig infeksjon i foten, og han må bli operert med en gang.",
        tr: "Bir gece Hansen aniden çok kötüleşiyor. Ayağında ciddi bir enfeksiyon var ve hemen ameliyat olması gerekiyor." },
      { place: "ward", mood: "worried",
        text: "Operasjonen går bra, men legene tar flere prøver fordi de frykter kreft. Emil venter nervøst på diagnosen. Heldigvis viser svaret at det ikke er noe nytt.",
        tr: "Ameliyat iyi geçiyor ama doktorlar kanserden korktukları için daha fazla tetkik yapıyor. Emil teşhisi gergin bir şekilde bekliyor. Neyse ki sonuç yeni bir şey olmadığını gösteriyor." },
      { place: "clinic", mood: "thinking",
        text: "Den nye behandlingen virker, men den har én bivirkning: Han blir veldig trøtt. Emil endrer dosen og ser til ham hver dag.",
        tr: "Yeni tedavi işe yarıyor ama bir yan etkisi var: Çok yoruluyor. Emil dozu değiştiriyor ve onu her gün kontrol ediyor." },
      { place: "ward", mood: "proud",
        text: "Tre uker senere kan Hansen reise hjem for å bli frisk. Han takker Emil og lover å ta medisinene sine.",
        tr: "Üç hafta sonra Hansen iyileşmek için eve dönebiliyor. Emil'e teşekkür ediyor ve ilaçlarını içeceğine söz veriyor." }
    ]
  },
  c1: {
    hero: "emil",
    talk: HEALTH_TALKS.c1,
    title: "Uzman doktorun uzun gecesi",
    scenes: [
      { place: "emergency", mood: "worried",
        text: "Emil er nå overlege, og i natt er sykehuset fullt. En kvinne kommer inn fordi hun har besvimt. Hun trenger rask innleggelse.",
        tr: "Emil artık sorumlu uzman hekim ve bu gece hastane dolu. Bir kadın bayıldığı için geliyor. Hemen yatırılması gerekiyor." },
      { place: "ward", mood: "thinking",
        text: "På sengeposten finner teamet en svulst. Er den godartet eller ondartet? Emil kan ikke utelukke det verste før biopsien.",
        tr: "Serviste ekip bir tümör buluyor. İyi huylu mu, kötü huylu mu? Emil biyopsiden önce en kötü ihtimali dışlayamıyor." },
      { place: "clinic", mood: "thinking",
        text: "Han forklarer alle risikoene først, for operasjonen krever skriftlig samtykke. Sønnen hennes ringer og vil ha detaljer, men Emil har taushetsplikt. Først når hun gir tillatelse, kan han snakke med de pårørende.",
        tr: "Önce bütün riskleri anlatıyor, çünkü ameliyat yazılı onam gerektiriyor. Oğlu arayıp ayrıntı istiyor ama Emil'in sır saklama yükümlülüğü var. Hasta yakınlarıyla ancak kadın izin verince konuşabiliyor." },
      { place: "clinic", mood: "happy",
        text: "Svaret kommer: Svulsten er godartet, og prognosen er svært god. Emil går selv for å fortelle henne det.",
        tr: "Sonuç geliyor: Tümör iyi huylu ve beklenen seyir çok iyi. Emil bunu ona kendisi söylemeye gidiyor." },
      { place: "ward", mood: "thinking",
        text: "I sengen ved siden av ligger en gammel mann som får lindrende behandling. Emil sitter hos ham en stund, for god medisin handler også om å lytte.",
        tr: "Yandaki yatakta palyatif bakım alan yaşlı bir adam yatıyor. Emil bir süre yanında oturuyor, çünkü iyi hekimlik dinlemek demektir." },
      { place: "ward", mood: "proud",
        text: "En uke senere kan kvinnen bli utskrevet. Fastlegen får epikrisen og står for oppfølgingen. I døra smiler hun og sier takk.",
        tr: "Bir hafta sonra kadın taburcu olabiliyor. Aile hekimi epikrizi alıyor ve takibi üstleniyor. Kapıda gülümseyip teşekkür ediyor." }
    ]
  }
};
