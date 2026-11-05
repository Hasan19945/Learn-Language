import type { Story } from "../../types";

export const IT_STORIES: Record<"b1" | "b2" | "c1", Story> = {
  b1: {
    title: "Mira'nın ilk iş günü",
    scenes: [
      { place: "desk", mood: "happy",
        text: "Det er Miras første dag i IT-support. Hun åpner maskinen og prøver å logge inn. Men hun har allerede glemt det nye passordet sitt!",
        tr: "Mira'nın IT destekteki ilk günü. Bilgisayarını açıp giriş yapmayı deniyor. Ama yeni şifresini şimdiden unutmuş!" },
      { place: "desk", mood: "worried",
        text: "Så ringer en kunde. Skjermen hans er helt svart, og han får en feilmelding. Mira ber ham om å starte på nytt. Han er lei seg fordi han ikke rakk å lagre filen.",
        tr: "Sonra bir müşteri arıyor. Ekranı tamamen siyah ve bir hata mesajı alıyor. Mira ondan yeniden başlatmasını istiyor. Müşteri üzgün, çünkü dosyayı kaydetmeye fırsat bulamamış." },
      { place: "servers", mood: "surprised",
        text: "Plutselig får ingen på kontoret åpnet appen. Mira løper til serverrommet. Serveren er nede, og en nettverkskabel ligger på gulvet!",
        tr: "Birden ofiste kimse uygulamayı açamıyor. Mira sunucu odasına koşuyor. Sunucu çalışmıyor ve bir ağ kablosu yerde duruyor!" },
      { place: "servers", mood: "thinking",
        text: "Hun kobler til kabelen og sjekker databasen. Alle kundedataene er trygge. Nå må hun laste ned den siste oppdateringen og installere den.",
        tr: "Kabloyu takıp veri tabanını kontrol ediyor. Bütün müşteri verileri güvende. Şimdi son güncellemeyi indirip kurması gerekiyor." },
      { place: "desk", mood: "proud",
        text: "En time senere virker programvaren igjen. Alle smiler, og Mira får endelig et nytt passord. Hun har lært én ting i dag: Husk alltid å lagre arbeidet ditt!",
        tr: "Bir saat sonra yazılım yeniden çalışıyor. Herkes gülümsüyor ve Mira sonunda yeni bir şifre alıyor. Bugün tek bir şey öğrendi: Çalışmanı kaydetmeyi hiç unutma!" }
    ]
  },
  b2: {
    title: "Mira'nın ilk büyük görevi",
    scenes: [
      { place: "desk", mood: "happy",
        text: "To år senere jobber Mira som utvikler. Kunden vil ha en ny versjon til lanseringen i mai. Kravet er enkelt: Brukergrensesnittet må bli lettere å bruke.",
        tr: "İki yıl sonra Mira yazılım geliştirici olarak çalışıyor. Müşteri, mayıstaki yayına çıkış için yeni bir sürüm istiyor. Gereksinim basit: Kullanıcı arayüzü daha kolay kullanılmalı." },
      { place: "desk", mood: "thinking",
        text: "Mira åpner kildekoden og tar den første oppgaven. Takket være versjonskontroll kan hun ikke ødelegge hovedkoden. Hun jobber hele dagen, men fristen er kort.",
        tr: "Mira kaynak kodu açıp ilk görevi alıyor. Sürüm kontrolü sayesinde ana kodu bozamaz. Bütün gün çalışıyor ama son tarih yakın." },
      { place: "meeting", mood: "worried",
        text: "På morgenmøtet høres hun nervøs ut. Hun sier at hun må holde på med testene, og at to av dem kan feile. Kollegaen Jonas tilbyr seg å rette en feil i innloggingskoden.",
        tr: "Sabah toplantısında sesi gergin çıkıyor. Testlerle uğraşması gerektiğini ve ikisinin başarısız olabileceğini söylüyor. İş arkadaşı Jonas, giriş kodundaki bir hatayı düzeltmeyi öneriyor." },
      { place: "meeting", mood: "happy",
        text: "Etter kodegjennomgangen smiler Jonas og sier at alt ser bra ut. Nå kan Mira slå sammen koden sin. Samme kveld skal de rulle ut endringen.",
        tr: "Kod incelemesinden sonra Jonas gülümseyip her şeyin iyi göründüğünü söylüyor. Mira artık kodunu birleştirebilir. Aynı akşam değişikliği yayına alacaklar." },
      { place: "servers", mood: "surprised",
        text: "Ti minutter senere blir nettstedet veldig tregt! De ruller raskt tilbake endringen. Så finner de problemet og prøver igjen.",
        tr: "On dakika sonra site çok yavaşlıyor! Değişikliği hızla geri alıyorlar. Sonra sorunu bulup yeniden deniyorlar." },
      { place: "desk", mood: "proud",
        text: "Neste dag virker alt perfekt. Kunden er fornøyd med resultatet. Mira har lært at et godt team kan løse nesten alt.",
        tr: "Ertesi gün her şey kusursuz çalışıyor. Müşteri sonuçtan memnun. Mira, iyi bir ekibin neredeyse her şeyi çözebileceğini öğrendi." }
    ]
  },
  c1: {
    title: "Gece üçteki kesinti",
    scenes: [
      { place: "home", mood: "worried",
        text: "Klokka tre om natten vekker telefonen Mira. Hun er seniorutvikler nå, og firmaet har lang nedetid. Kundene kommer ikke inn på nettstedet, og responstiden har økt i flere timer.",
        tr: "Gece saat üçte Mira'yı telefonu uyandırıyor. Artık kıdemli bir geliştirici ve şirkette uzun bir kesinti var. Müşteriler siteye giremiyor ve yanıt süresi saatlerdir artıyor." },
      { place: "servers", mood: "thinking",
        text: "Teamet finner rotårsaken i et gammelt system. Problemet skyldes mange års teknisk gjeld. Enda verre er at de finner en sårbarhet på innloggingssiden.",
        tr: "Ekip kök nedeni eski bir sistemde buluyor. Sorun yılların teknik borcundan kaynaklanıyor. Daha da kötüsü, giriş sayfasında bir güvenlik açığı buluyorlar." },
      { place: "servers", mood: "surprised",
        text: "Er personvernet til kundene truet? Mira sjekker loggene med hjertet i halsen. Heldigvis holdt krypteringen, tilgangskontrollen stoppet angriperne, og den siste sikkerhetskopien er trygg.",
        tr: "Müşterilerin kişisel verileri tehlikede mi? Mira kalbi ağzında kayıtları kontrol ediyor. Neyse ki şifreleme dayandı, erişim denetimi saldırganları durdurdu ve son yedek güvende." },
      { place: "meeting", mood: "thinking",
        text: "De melder likevel avviket til Datatilsynet. Uken etter legger Mira fram en plan for lederne. Hun vil refaktorere de verste delene og endre arkitekturen.",
        tr: "Yine de olayı Datatilsynet'e bildiriyorlar. Sonraki hafta Mira yöneticilere bir plan sunuyor. En kötü kısımları yeniden düzenlemek ve mimariyi değiştirmek istiyor." },
      { place: "meeting", mood: "proud",
        text: "Den nye løsningen blir skalerbar, men den koster tid og penger. Dette er en avveining, forklarer hun, men fordelene veier opp for kostnadene. Direktøren nikker og godkjenner planen. Den natten sover Mira godt for første gang på flere uker.",
        tr: "Yeni çözüm ölçeklenebilir olacak ama zaman ve para gerektirecek. Bunun bir ödünleşim olduğunu, ama avantajların maliyetleri dengelediğini anlatıyor. Direktör başını sallayıp planı onaylıyor. O gece, haftalar sonra ilk kez, Mira iyi uyuyor." }
    ]
  }
};
