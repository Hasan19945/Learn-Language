import type { Lang, Story, StoryHero, StoryMood, StoryPlace } from "../../types";

export interface StorySource {
  title: Record<Lang, string>;
  scenes: { place: StoryPlace; mood: StoryMood; text: string; tr: string; nb: string }[];
}

export const localizeStory = (s: StorySource, hero: StoryHero, lang: Lang, casual?: boolean): Story => ({
  hero,
  casual,
  title: s.title[lang],
  scenes: s.scenes.map(({ place, mood, text, tr, nb }) => ({ place, mood, text, tr: lang === "tr" ? tr : nb }))
});

const STORIES: Record<"b1" | "b2" | "c1", StorySource> = {
  b1: {
    title: { tr: "Mira'nın ilk iş günü", nb: "Miras første arbeidsdag" },
    scenes: [
      { place: "desk", mood: "happy",
        text: "It is Mira's first day in IT support. She opens her laptop and tries to log in. But she has already forgotten her new password!",
        tr: "Mira'nın IT destekteki ilk günü. Dizüstü bilgisayarını açıp giriş yapmayı deniyor. Ama yeni şifresini şimdiden unutmuş!",
        nb: "Det er Miras første dag i IT-support. Hun åpner den bærbare maskinen og prøver å logge inn. Men hun har allerede glemt det nye passordet sitt!" },
      { place: "desk", mood: "worried",
        text: "Then a customer calls. The screen on his computer is black, and he keeps getting an error message. Mira asks him to restart it. He is sad because he did not save his file.",
        tr: "Sonra bir müşteri arıyor. Bilgisayarının ekranı siyah ve sürekli hata mesajı alıyor. Mira ondan bilgisayarı yeniden başlatmasını istiyor. Müşteri üzgün, çünkü dosyasını kaydetmemiş.",
        nb: "Så ringer en kunde. Skjermen på datamaskinen hans er svart, og han får feilmelding hele tiden. Mira ber ham om å starte den på nytt. Han er lei seg fordi han ikke lagret filen sin." },
      { place: "servers", mood: "surprised",
        text: "Suddenly, nobody in the office can open the app. Mira runs to the server room. The server is down, and a network cable is lying on the floor!",
        tr: "Birden ofiste kimse uygulamayı açamıyor. Mira sunucu odasına koşuyor. Sunucu çalışmıyor ve bir ağ kablosu yerde duruyor!",
        nb: "Plutselig får ingen på kontoret åpnet appen. Mira løper til serverrommet. Serveren er nede, og en nettverkskabel ligger på gulvet!" },
      { place: "servers", mood: "thinking",
        text: "She connects the cable and checks the database. All the customer data is safe. Now she must download the latest update and install it.",
        tr: "Kabloyu takıp veri tabanını kontrol ediyor. Bütün müşteri verileri güvende. Şimdi son güncellemeyi indirip kurması gerekiyor.",
        nb: "Hun kobler til kabelen og sjekker databasen. Alle kundedataene er trygge. Nå må hun laste ned den siste oppdateringen og installere den." },
      { place: "desk", mood: "proud",
        text: "An hour later, the software works again. Everyone smiles, and Mira finally gets a new password. She has learned one thing today: always save your work!",
        tr: "Bir saat sonra yazılım yeniden çalışıyor. Herkes gülümsüyor ve Mira sonunda yeni bir şifre alıyor. Bugün tek bir şey öğrendi: Çalışmanı her zaman kaydet!",
        nb: "En time senere virker programvaren igjen. Alle smiler, og Mira får endelig et nytt passord. Hun har lært én ting i dag: Lagre alltid arbeidet ditt!" }
    ]
  },
  b2: {
    title: { tr: "Mira'nın ilk büyük görevi", nb: "Miras første store oppgave" },
    scenes: [
      { place: "desk", mood: "happy",
        text: "Two years later, Mira works as a developer. The client wants a new feature for the May release. The requirement is simple: the user interface must be easier to use.",
        tr: "İki yıl sonra Mira yazılım geliştirici olarak çalışıyor. Müşteri, mayıs sürümü için yeni bir özellik istiyor. Gereksinim basit: Kullanıcı arayüzü daha kolay kullanılmalı.",
        nb: "To år senere jobber Mira som utvikler. Kunden vil ha en ny funksjon til versjonen i mai. Kravet er enkelt: Brukergrensesnittet må bli lettere å bruke." },
      { place: "desk", mood: "thinking",
        text: "Mira opens the source code and creates a new branch. Thanks to version control, her changes cannot hurt the main code. She writes all day, and then she has to run the tests.",
        tr: "Mira kaynak kodu açıp yeni bir dal oluşturuyor. Sürüm kontrolü sayesinde değişiklikleri ana koda zarar veremez. Bütün gün yazıyor, sonra testleri çalıştırması gerekiyor.",
        nb: "Mira åpner kildekoden og lager en ny gren. Takket være versjonskontroll kan ikke endringene hennes skade hovedkoden. Hun skriver hele dagen, og så må hun kjøre testene." },
      { place: "meeting", mood: "worried",
        text: "At the morning meeting, she sounds nervous. She doesn't want to be blocked by a database issue. Her colleague Jonas offers to help her fix a bug in the login code.",
        tr: "Sabah toplantısında sesi gergin çıkıyor. Bir veri tabanı sorununun onu engellemesini istemiyor. İş arkadaşı Jonas, giriş kodundaki bir hatayı düzeltmesine yardım etmeyi öneriyor.",
        nb: "På morgenmøtet høres hun nervøs ut. Hun vil ikke bli hindret av et databaseproblem. Kollegaen Jonas tilbyr seg å hjelpe henne med å rette en feil i innloggingskoden." },
      { place: "meeting", mood: "happy",
        text: "After the code review, Jonas smiles and says it looks good. Mira can now merge her work. That evening, they deploy the new version.",
        tr: "Kod incelemesinden sonra Jonas gülümseyip iyi göründüğünü söylüyor. Mira artık çalışmasını birleştirebilir. O akşam yeni sürümü yayına alıyorlar.",
        nb: "Etter kodegjennomgangen smiler Jonas og sier at det ser bra ut. Nå kan Mira slå sammen arbeidet sitt. Den kvelden ruller de ut den nye versjonen." },
      { place: "servers", mood: "surprised",
        text: "Ten minutes later, the site becomes very slow! They quickly roll back the change. Then they find the problem and try again.",
        tr: "On dakika sonra site çok yavaşlıyor! Değişikliği hızla geri alıyorlar. Sonra sorunu bulup yeniden deniyorlar.",
        nb: "Ti minutter senere blir nettstedet veldig tregt! De ruller raskt tilbake endringen. Så finner de problemet og prøver igjen." },
      { place: "desk", mood: "proud",
        text: "The next day, everything works perfectly. The client is happy with the result. Mira has learned that a good team can solve almost anything.",
        tr: "Ertesi gün her şey kusursuz çalışıyor. Müşteri sonuçtan memnun. Mira, iyi bir ekibin neredeyse her şeyi çözebileceğini öğrendi.",
        nb: "Neste dag virker alt perfekt. Kunden er fornøyd med resultatet. Mira har lært at et godt team kan løse nesten alt." }
    ]
  },
  c1: {
    title: { tr: "Gece üçteki kesinti", nb: "Utfallet klokka tre om natten" },
    scenes: [
      { place: "home", mood: "worried",
        text: "At three in the morning, Mira's phone wakes her up. She is a senior engineer now, and the company has a major outage. Customers cannot reach the site, and latency has been rising for hours.",
        tr: "Gece saat üçte Mira'yı telefonu uyandırıyor. Artık kıdemli bir mühendis ve şirkette büyük bir kesinti var. Müşteriler siteye ulaşamıyor ve gecikme saatlerdir artıyor.",
        nb: "Klokka tre om natten vekker telefonen Mira. Hun er seniorutvikler nå, og firmaet har et stort utfall. Kundene kommer ikke inn på nettstedet, og forsinkelsen har økt i flere timer." },
      { place: "servers", mood: "thinking",
        text: "The team traces the root cause to an old legacy system. It carries years of technical debt, and nobody dares to touch it. Worse still, they find a vulnerability on its login page.",
        tr: "Ekip kök nedeni eski bir sisteme kadar izliyor. Sistem yılların teknik borcunu taşıyor ve kimse ona dokunmaya cesaret edemiyor. Daha da kötüsü, giriş sayfasında bir güvenlik açığı buluyorlar.",
        nb: "Teamet sporer rotårsaken til et gammelt system. Det bærer på mange års teknisk gjeld, og ingen tør å røre det. Enda verre er at de finner en sårbarhet på innloggingssiden." },
      { place: "servers", mood: "surprised",
        text: "Was there a data breach? Mira checks the logs with her heart racing. Luckily, the encryption held, strict access control stopped the attackers, and the latest backup is safe.",
        tr: "Veri ihlali oldu mu? Mira kalbi hızla çarparak kayıtları kontrol ediyor. Neyse ki şifreleme dayandı, sıkı erişim denetimi saldırganları durdurdu ve son yedek güvende.",
        nb: "Har det skjedd et brudd på datasikkerheten? Mira sjekker loggene med hjertet i halsen. Heldigvis holdt krypteringen, streng tilgangskontroll stoppet angriperne, og den siste sikkerhetskopien er trygg." },
      { place: "meeting", mood: "thinking",
        text: "The next week, Mira presents a plan to the managers. She wants to refactor the worst parts and change the architecture. The new design will be scalable, but it will cost time and money.",
        tr: "Sonraki hafta Mira yöneticilere bir plan sunuyor. En kötü kısımları yeniden düzenlemek ve mimariyi değiştirmek istiyor. Yeni tasarım ölçeklenebilir olacak ama zaman ve para gerektirecek.",
        nb: "Uken etter legger Mira fram en plan for lederne. Hun vil refaktorere de verste delene og endre arkitekturen. Den nye løsningen blir skalerbar, men den koster tid og penger." },
      { place: "meeting", mood: "proud",
        text: "This is a trade-off, she explains, but the benefits outweigh the costs. The director nods and approves the plan. That night, for the first time in weeks, Mira sleeps well.",
        tr: "Bunun bir ödünleşim olduğunu, ama faydaların maliyetlerden ağır bastığını anlatıyor. Direktör başını sallayıp planı onaylıyor. O gece, haftalar sonra ilk kez, Mira iyi uyuyor.",
        nb: "Dette er en avveining, forklarer hun, men fordelene veier opp for kostnadene. Direktøren nikker og godkjenner planen. Den natten sover Mira godt for første gang på flere uker." }
    ]
  }
};

export const itStory = (level: keyof typeof STORIES, lang: Lang) => localizeStory(STORIES[level], "mira", lang);
