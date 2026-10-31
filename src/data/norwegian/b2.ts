import { I, N, W, atLevel } from "../helpers";
import type { LessonDef, WordDef } from "../../types";

const B2: LessonDef[] = [
{
  id: "b2-1", title: "Resmî e-posta", no: "Formell e-post", icon: "mail",
  intro: "İş yerinde ve kurumlarla e-posta: açılış, referans verme, rica ve kapanış kalıpları.",
  notes: [
    { h: "Norveç'te e-posta tonu", p: "Resmî e-postalar bile genellikle \"Hei [isim],\" ile başlar. \"Kjære\" daha kişiseldir. Kapanış: \"Med vennlig hilsen\" (Saygılarımla), kısaltması \"Mvh\"." },
    { h: "Kalıplar", p: "Viser til ... (... ile ilgili olarak / ... atfen), Jeg tar kontakt angående ... (... hakkında yazıyorum), Vedlagt følger ... (Ekte ... bulunmaktadır), Ta gjerne kontakt hvis ... (... olursa çekinmeden yazın), Jeg ser fram til å høre fra deg." },
    { h: "İsimleştirme", p: "Resmî dilde fiil yerine isim sık kullanılır: behandle → behandlingen av søknaden (başvurunun işleme alınması), endre → en endring (bir değişiklik)." }
  ],
  tip: "Türkçe resmî yazışmalardaki uzun kalıplar (\"Saygılarımla arz ederim\") Norveççede çok ağır kaçar. Norveç tarzı: kısa, net, samimi ama kibar. Doğrudan konuya gir.",
  words: [
    W("Viser til ...", "... ile ilgili olarak / ... atfen", "", "Viser til samtalen vår i går.", "Dünkü görüşmemize istinaden."),
    W("angående", "hakkında, ile ilgili", "", "Jeg tar kontakt angående fakturaen.", "Fatura hakkında yazıyorum."),
    W("Vedlagt følger ...", "Ekte ... sunulmuştur", "", "Vedlagt følger CV og attester.", "Ekte özgeçmiş ve referans yazıları bulunmaktadır."),
    W("Med vennlig hilsen", "Saygılarımla", "", "Med vennlig hilsen, Mehmet Yılmaz", "Saygılarımla, Mehmet Yılmaz"),
    W("Ta gjerne kontakt", "Çekinmeden iletişime geçin", "", "Ta gjerne kontakt hvis du har spørsmål.", "Sorunuz olursa çekinmeden yazın."),
    W("Jeg ser fram til ...", "... dört gözle bekliyorum", "", "Jeg ser fram til å høre fra deg.", "Haberinizi bekliyorum."),
    W("dessverre", "maalesef", "", "Dessverre kan jeg ikke delta på møtet.", "Maalesef toplantıya katılamıyorum."),
    W("bekrefte", "onaylamak", "", "Kan du bekrefte at du har mottatt dokumentene?", "Belgeleri aldığınızı onaylayabilir misiniz?"),
    W("snarest", "en kısa sürede", "", "Vennligst svar snarest.", "Lütfen en kısa sürede yanıtlayın."),
    W("utsette", "ertelemek", "", "Kan vi utsette møtet til fredag?", "Toplantıyı cumaya erteleyebilir miyiz?"),
    N("et", "vedlegg", "vedlegget", "vedlegg", "ek (e-posta)", "", "Se vedlegg.", "Eke bakınız."),
    W("i forkant / i etterkant", "önceden / sonradan", "", "Send gjerne agendaen i forkant.", "Gündemi önceden gönderirseniz sevinirim.")
  ],
  dialogue: [["E-post", "Hei Kari,", "Merhaba Kari,"], ["E-post", "Viser til møtet vårt på tirsdag.", "Salı günkü toplantımıza istinaden yazıyorum."], ["E-post", "Dessverre må jeg be om å utsette fristen for rapporten til fredag.", "Maalesef rapor için son tarihin cumaya ertelenmesini rica etmek zorundayım."], ["E-post", "Vedlagt følger et utkast. Ta gjerne kontakt hvis du har innspill.", "Ekte bir taslak bulunuyor. Önerin olursa çekinmeden yaz."], ["E-post", "Med vennlig hilsen, Ayşe", "Saygılarımla, Ayşe"]],
  quiz: [
    { q: "Norveç'te resmî bir e-posta genellikle nasıl başlar?", o: ["Hei Kari,", "Sayın Bayan Kari,", "Kjære høyt ærede Kari,"], a: 0, e: "Resmî yazışmalarda bile \"Hei + isim\" normaldir." },
    { q: "\"Dünkü görüşmemize istinaden\"", o: ["Viser til samtalen vår i går.", "Jeg viser samtalen i går.", "Angående i går samtale."], a: 0, e: "Viser til ... resmî referans kalıbıdır." },
    { q: "\"Vedlagt følger CV.\" ne demek?", o: ["Ekte özgeçmiş bulunuyor.", "Özgeçmiş takip ediliyor.", "Özgeçmişi gönderin."], a: 0, e: "vedlagt = ekli; følger = takip eder / sunulur." },
    { q: "\"Mvh\" neyin kısaltmasıdır?", o: ["Med vennlig hilsen", "Mange vennlige hilsener", "Min venn har"], a: 0, e: "Mvh = Med vennlig hilsen (Saygılarımla)." },
    { q: "\"utsette\" ne demek?", o: ["ertelemek", "göndermek", "iptal etmek"], a: 0, e: "utsette = ertelemek. Kan vi utsette møtet?" }
  ],
  review: ["Açılış: Hei + isim. Kapanış: Med vennlig hilsen (Mvh).", "Viser til ... / Jeg tar kontakt angående ...", "Vedlagt følger ... / Ta gjerne kontakt hvis ..."]
},
{
  id: "b2-2", title: "Tartışma ve bağlaçlar", no: "Argumentasjon", icon: "scale",
  intro: "Bir görüşü savunmak ve karşı çıkmak: likevel, derimot, dessuten, selv om ve sıra kuralları.",
  notes: [
    { h: "Zarf bağlaçları: ters çevirme", p: "derfor, likevel, dessuten, derimot gibi zarflar cümle başına gelirse fiil ikinci sırada kalır, özne fiilden sonra gelir: Derfor tar jeg toget. Likevel bestemte hun seg for å flytte." },
    { h: "Yan cümle bağlaçları", p: "selv om (-e rağmen), fordi (çünkü), slik at (böylece) yan cümle başlatır: özne + ikke + fiil sırası: selv om det ikke er billig." },
    { h: "Tartışma kalıpları", p: "På den ene siden ... på den andre siden (Bir yandan ... öte yandan), Ifølge ... (... göre), Det kan diskuteres om ... (... tartışmaya açık), Jeg er ikke helt enig i det." }
  ],
  tip: "Türkçede \"Bu yüzden ben trene binerim\" sırası değişmez. Norveççede \"Derfor\" ile başlarsa fiil öne kayar: \"Derfor tar jeg toget\". \"Derfor jeg tar toget\" B2 düzeyinde bile çok yaygın bir hatadır.",
  words: [
    W("derfor", "bu yüzden", "", "Det er dyrt. Derfor tar jeg bussen.", "Pahalı. Bu yüzden otobüse biniyorum."),
    W("likevel", "yine de", "", "Det regnet. Likevel gikk vi på tur.", "Yağmur yağıyordu. Yine de yürüyüşe çıktık."),
    W("derimot", "buna karşın, öte yandan", "", "Oslo er dyrt. Trondheim er derimot billigere.", "Oslo pahalı. Trondheim ise daha ucuz."),
    W("dessuten", "üstelik, ayrıca", "", "Leiligheten er stor. Dessuten er den sentral.", "Daire büyük. Üstelik merkezi."),
    W("selv om", "-e rağmen, -se bile", "", "Jeg liker Norge selv om det er kaldt.", "Soğuk olmasına rağmen Norveç'i seviyorum."),
    W("ifølge", "-e göre", "", "Ifølge SSB har befolkningen økt.", "SSB'ye göre nüfus arttı."),
    W("på den ene siden", "bir yandan", "", "På den ene siden er det praktisk, på den andre siden er det dyrt.", "Bir yandan pratik, öte yandan pahalı."),
    W("med andre ord", "başka bir deyişle", "", "Med andre ord må vi spare.", "Başka bir deyişle tasarruf etmeliyiz."),
    W("i tillegg", "ek olarak", "", "I tillegg må du betale depositum.", "Ek olarak depozito ödemelisin."),
    W("konsekvens", "sonuç", "", "Det kan få store konsekvenser.", "Bunun büyük sonuçları olabilir."),
    W("argumentere for / mot", "lehinde / aleyhinde savunmak", "", "Hun argumenterte for bompenger.", "Köprü-yol ücretlerini savundu.")
  ],
  dialogue: [["A", "Bør det bli gratis kollektivtransport i byene?", "Şehirlerde toplu taşıma ücretsiz olmalı mı?"], ["B", "På den ene siden vil flere la bilen stå. Dessuten blir lufta renere.", "Bir yandan daha çok kişi arabasını bırakır. Üstelik hava temizlenir."], ["A", "Derimot koster det mye penger. Hvem skal betale?", "Öte yandan çok pahalı. Kim ödeyecek?"], ["B", "Det er et godt poeng. Likevel mener jeg at fordelene er større.", "İyi bir nokta. Yine de avantajların daha büyük olduğunu düşünüyorum."], ["A", "Jeg er ikke helt enig, selv om jeg forstår argumentet.", "Argümanı anlasam da tam katılmıyorum."]],
  quiz: [
    { q: "\"Bu yüzden trene biniyorum.\"", o: ["Derfor tar jeg toget.", "Derfor jeg tar toget.", "Derfor toget tar jeg."], a: 0, e: "Zarf başta → fiil ikinci sırada: Derfor tar jeg." },
    { q: "\"Pahalı olmasa bile\" — doğru sıra?", o: ["selv om det ikke er dyrt", "selv om det er ikke dyrt", "selv om er det ikke dyrt"], a: 0, e: "selv om yan cümle başlatır: özne + ikke + fiil." },
    { q: "\"likevel\" ne demek?", o: ["yine de", "üstelik", "bu yüzden", "-e göre"], a: 0, e: "likevel = yine de / buna rağmen." },
    { q: "\"Ifølge rapporten ...\" ne demek?", o: ["Rapora göre ...", "Rapordan sonra ...", "Rapor yüzünden ..."], a: 0, e: "ifølge = -e göre." },
    { q: "Hangisi yan cümle bağlacıdır (ana cümle sırasını değiştirmez ama kendi içinde özne+ikke+fiil sırası ister)?", o: ["selv om", "derfor", "dessuten", "likevel"], a: 0, e: "selv om bir yan cümle bağlacıdır; diğerleri zarftır." }
  ],
  review: ["Zarf başta → fiil ikinci: Derfor tar jeg toget.", "selv om / fordi → özne + ikke + fiil.", "på den ene siden ... på den andre siden; ifølge; dessuten; derimot."]
},
{
  id: "b2-3", title: "Deyimler", no: "Faste uttrykk", icon: "spark",
  intro: "Norveçlilerin her gün kullandığı deyimler. Anlamları kelimelerden tahmin edilemez.",
  notes: [
    { h: "Neden önemli?", p: "B2 düzeyinde konuşmayı doğal yapan şey deyimlerdir. Ama yanlış yerde kullanmak tuhaf kaçar; önce anlamayı, sonra kullanmayı hedefle." },
    { h: "Türkçeyle benzerlikler", p: "Bazıları Türkçeye çok yakındır: \"bite i det sure eplet\" ≈ acı ilacı yutmak / mecburen katlanmak; \"snakke rett fra levra\" ≈ lafı dolandırmadan konuşmak." }
  ],
  tip: "\"Takk!\" sözüne Norveççede genellikle \"Ingen årsak\" ya da \"Bare hyggelig\" ile karşılık verilir. \"Ikke for det\" de duyulur. Türkçedeki \"Rica ederim\" karşılığıdır.",
  words: [
    I("bite i det sure eplet", "mecburen katlanmak, acı ilacı yutmak", "ekşi elmayı ısırmak", "🍏😖", "Jeg måtte bite i det sure eplet og betale boten.", "Mecburen cezayı ödedim."),
    I("ha is i magen", "soğukkanlı kalmak", "midede buz olmak", "🧊😌", "Ha is i magen, det ordner seg.", "Sakin ol, hallolur."),
    I("snakke rett fra levra", "açık sözlü konuşmak", "doğrudan ciğerden konuşmak", "🗣️➡️", "Hun snakker alltid rett fra levra.", "Her zaman lafı dolandırmadan konuşur."),
    I("være på bærtur", "tamamen yanılmak, konudan sapmak", "böğürtlen toplamaya çıkmış olmak", "🌲🫐🤷", "Nå er du helt på bærtur!", "Şimdi tamamen yanılıyorsun!"),
    I("det går på skinner", "her şey yolunda gidiyor", "raylar üzerinde gidiyor", "🚆🛤️", "Prosjektet går på skinner.", "Proje tıkırında gidiyor."),
    I("ta det med ro", "sakin ol, acele etme", "onu sükûnetle al", "🧘", "Ta det med ro, vi har god tid.", "Acele etme, vaktimiz bol."),
    I("Bare hyggelig", "Rica ederim (memnuniyetle)", "sadece hoş(tu)", "😊🤝", "– Takk for hjelpen! – Bare hyggelig!", "– Yardımın için teşekkürler! – Rica ederim!"),
    I("Ingen årsak", "Bir şey değil", "hiçbir sebep yok", "🙂👌", "– Tusen takk! – Ingen årsak.", "– Çok teşekkürler! – Bir şey değil."),
    I("få det travelt", "acele etmek zorunda kalmak", "işi sıkışık hale gelmek", "⏰🏃", "Nå må vi få det travelt!", "Şimdi acele etmemiz lazım!"),
    I("koste skjorta", "çok pahalı olmak, servet ödemek", "gömleğe mal olmak", "👕💸", "Den bilen kostet skjorta.", "O araba bir servete mal oldu."),
    I("slå to fluer i en smekk", "bir taşla iki kuş vurmak", "bir şaplakta iki sinek vurmak", "🪰🪰👋", "Vi slår to fluer i en smekk.", "Bir taşla iki kuş vuruyoruz.")
  ],
  dialogue: [["A", "Jeg er så nervøs for intervjuet i morgen.", "Yarınki görüşme için çok gerginim."], ["B", "Ha is i magen! Du er godt forberedt.", "Soğukkanlı ol! Çok iyi hazırlandın."], ["A", "Men lønnen jeg ba om, var kanskje for høy?", "Ama istediğim maaş belki çok yüksekti?"], ["B", "Nei, da er du på bærtur. Det er helt normalt.", "Hayır, orada yanılıyorsun. Gayet normal."], ["A", "Takk for at du snakker rett fra levra.", "Açık sözlü olduğun için teşekkürler."], ["B", "Bare hyggelig!", "Rica ederim!"]],
  quiz: [
    { q: "\"ha is i magen\" ne demek?", o: ["soğukkanlı kalmak", "karnı ağrımak", "üşümek"], a: 0, e: "Kelimesi kelimesine \"midede buz olmak\" = soğukkanlı kalmak." },
    { q: "\"Takk!\" sözüne uygun karşılık?", o: ["Bare hyggelig!", "Ha det!", "Ta det med ro!"], a: 0, e: "Bare hyggelig / Ingen årsak = Rica ederim." },
    { q: "\"Prosjektet går på skinner.\"", o: ["Proje tıkırında gidiyor.", "Proje raydan çıktı.", "Proje trenle ilgili."], a: 0, e: "gå på skinner = sorunsuz ilerlemek." },
    { q: "\"bir taşla iki kuş vurmak\"", o: ["slå to fluer i en smekk", "bite i det sure eplet", "koste skjorta"], a: 0, e: "Norveççede kuş değil sinek: to fluer i en smekk (bir şaplakta iki sinek)." },
    { q: "\"Den bilen kostet skjorta.\" ne demek?", o: ["O araba çok pahalıydı.", "Araba gömlek kadar ucuzdu.", "Arabayı gömlekle değiştirdi."], a: 0, e: "koste skjorta = bir servete mal olmak." }
  ],
  review: ["ha is i magen = soğukkanlı kal; ta det med ro = acele etme.", "Takk! → Bare hyggelig / Ingen årsak.", "slå to fluer i en smekk = bir taşla iki kuş."]
},
{
  id: "b2-4", title: "Edatlı fiiller", no: "Partikkelverb", icon: "arrow",
  intro: "finne ut, gi opp, se fram til... Edatla birlikte anlamı değişen fiiller.",
  notes: [
    { h: "Vurgu edatta", p: "Edatlı fiillerde vurgu genellikle edata düşer: finne UT, gi OPP. Bu, anlamın değiştiğini gösterir." },
    { h: "Nesne ve ikke'nin yeri", p: "İsim nesne edattan sonra gelir: Jeg fant ut svaret. Zamir nesne genellikle edattan önce gelir: Jeg fant det ut. ikke fiil ile edat arasına girer: Jeg gir ikke opp." },
    { h: "Aynı fiil, farklı anlam", p: "slå opp et ord (sözlükte kelime bakmak) ↔ slå opp med kjæresten (sevgilisinden ayrılmak). ta opp et problem (bir sorunu gündeme getirmek) ↔ ta opp et lån (kredi çekmek)." }
  ],
  tip: "Türkçede anlam fiilin kökünden gelir. Norveççede küçük bir edat anlamı tamamen değiştirir: gi = vermek, gi opp = vazgeçmek. Bunları tek kelime gibi ezberle.",
  words: [
    W("finne ut", "öğrenmek, bulmak (bilgi)", "", "Jeg må finne ut når toget går.", "Trenin ne zaman kalktığını öğrenmeliyim."),
    W("gi opp", "vazgeçmek", "", "Ikke gi opp! Du klarer det.", "Pes etme! Başaracaksın."),
    W("se fram til", "dört gözle beklemek", "", "Jeg ser fram til ferien.", "Tatili dört gözle bekliyorum."),
    W("legge merke til", "fark etmek", "", "La du merke til at hun var lei seg?", "Üzgün olduğunu fark ettin mi?"),
    W("slå opp", "(sözlükte) bakmak; ayrılmak", "", "Slå opp ordet i ordboka.", "Kelimeye sözlükte bak."),
    W("ta opp", "gündeme getirmek; (kredi) çekmek", "", "Jeg vil ta opp dette på møtet.", "Bunu toplantıda gündeme getirmek istiyorum."),
    W("holde på med", "... ile meşgul olmak", "", "Hva holder du på med?", "Ne ile uğraşıyorsun?"),
    W("komme fram til", "(sonuca) varmak", "", "Vi kom fram til en løsning.", "Bir çözüme vardık."),
    W("sette pris på", "takdir etmek, değer vermek", "", "Jeg setter pris på hjelpen din.", "Yardımını takdir ediyorum."),
    W("passe på", "dikkat etmek, göz kulak olmak", "", "Kan du passe på barna?", "Çocuklara göz kulak olabilir misin?"),
    W("gå ut på", "... ile ilgili olmak, ... içermek", "", "Hva går jobben ut på?", "İş neleri kapsıyor?"),
    W("bli kjent med", "tanışmak, tanımak", "", "Jeg ble kjent med naboene.", "Komşularla tanıştım.")
  ],
  dialogue: [["A", "Hva holder du på med?", "Ne ile uğraşıyorsun?"], ["B", "Jeg prøver å finne ut hva den nye jobben går ut på.", "Yeni işin neleri kapsadığını anlamaya çalışıyorum."], ["A", "Gleder du deg?", "Heyecanlı mısın?"], ["B", "Ja, jeg ser fram til å bli kjent med kollegaene.", "Evet, iş arkadaşlarımla tanışmayı dört gözle bekliyorum."], ["A", "Jeg setter pris på at du alltid tar opp problemer med en gang.", "Sorunları hep hemen gündeme getirmeni takdir ediyorum."]],
  quiz: [
    { q: "\"Pes etme!\"", o: ["Ikke gi opp!", "Ikke gi!", "Gi ikke ut!", "Opp ikke gi!"], a: 0, e: "gi opp = vazgeçmek." },
    { q: "\"Onu öğrendim.\" (det = onu)", o: ["Jeg fant det ut.", "Jeg fant ut det.", "Jeg ut fant det."], a: 0, e: "Zamir nesne genellikle edattan önce: fant det ut." },
    { q: "\"Tatili dört gözle bekliyorum.\"", o: ["Jeg ser fram til ferien.", "Jeg ser ferien fram.", "Jeg venter fram ferien."], a: 0, e: "se fram til + isim." },
    { q: "\"Hun slo opp med kjæresten.\" ne demek?", o: ["Sevgilisinden ayrıldı.", "Sevgilisini sözlükte aradı.", "Sevgilisine vurdu."], a: 0, e: "slå opp med noen = biriyle ilişkiyi bitirmek." },
    { q: "\"Hva går jobben ut på?\" ne demek?", o: ["İş neyi kapsıyor?", "İş ne zaman bitiyor?", "İşten ne zaman çıkıyorsun?"], a: 0, e: "gå ut på = ... içermek, ... ile ilgili olmak." }
  ],
  review: ["Edat anlamı değiştirir: gi → gi opp.", "Zamir nesne edattan önce: fant det ut. ikke fiil ile edat arasında.", "se fram til, legge merke til, sette pris på, passe på."]
},
{
  id: "b2-5", title: "Çalışma hayatı ve haklar", no: "Arbeidsliv og rettigheter", icon: "doc",
  intro: "Sözleşme, hastalık izni, fazla mesai, sendika. Dolaylı anlatım: \"Han sa at ...\"",
  notes: [
    { h: "Dolaylı anlatım", p: "Ana fiil geçmiş zamandaysa yan cümle de genellikle geçmişe kayar: \"Jeg er syk.\" → Hun sa at hun var syk. Soru: \"Kommer du?\" → Han spurte om jeg kom." },
    { h: "Hastalık izni", p: "egenmelding = kendi beyanınla kısa hastalık izni (birkaç gün), sykemelding = doktor raporu. Sykepenger: hastalık ödeneği." },
    { h: "Önemli haklar", p: "arbeidsavtale (yazılı iş sözleşmesi zorunludur), overtid (fazla mesai, ek ücretli), oppsigelse (işten çıkarma / istifa bildirimi), oppsigelsestid (ihbar süresi), fagforening (sendika), permisjon (izin, ör. foreldrepermisjon)." }
  ],
  tip: "Türkçede dolaylı anlatımda zaman değişmez: \"Hasta olduğunu söyledi.\" Norveççede ana fiil sa (dedi) ise yan cümle de genellikle geçmişe kayar: \"Hun sa at hun var syk.\"",
  words: [
    N("en", "arbeidsavtale", "arbeidsavtalen", "arbeidsavtaler", "iş sözleşmesi", "", "Du har rett på skriftlig arbeidsavtale.", "Yazılı iş sözleşmesi hakkın var."),
    N("en", "egenmelding", "egenmeldingen", "egenmeldinger", "kendi beyanıyla hastalık izni", "", "Jeg leverer egenmelding for tre dager.", "Üç gün için kendi beyanımla hastalık izni veriyorum."),
    N("en", "sykemelding", "sykemeldingen", "sykemeldinger", "doktor raporu (hastalık)", "", "Legen ga meg sykemelding i to uker.", "Doktor bana iki haftalık rapor verdi."),
    N("en", "overtid", "overtiden", "", "fazla mesai", "", "Jobber du mye overtid?", "Çok fazla mesai yapıyor musun?"),
    N("en", "oppsigelse", "oppsigelsen", "oppsigelser", "işten çıkarma / istifa", "", "Hun leverte oppsigelse i går.", "Dün istifasını verdi."),
    N("en", "oppsigelsestid", "oppsigelsestiden", "", "ihbar süresi", "", "Oppsigelsestiden er tre måneder.", "İhbar süresi üç ay."),
    N("en", "fagforening", "fagforeningen", "fagforeninger", "sendika", "", "Er du medlem av en fagforening?", "Bir sendikaya üye misin?"),
    N("en", "permisjon", "permisjonen", "permisjoner", "izin (uzun süreli)", "", "Han har foreldrepermisjon.", "Ebeveyn izninde."),
    W("Hun sa at ...", "... dediğini söyledi", "", "Hun sa at hun var syk.", "Hasta olduğunu söyledi."),
    W("Han spurte om ...", "... diye sordu", "", "Han spurte om jeg kunne jobbe lørdag.", "Cumartesi çalışıp çalışamayacağımı sordu."),
    W("ha krav på", "... hak etmek, talep hakkı olmak", "", "Du har krav på overtidsbetaling.", "Fazla mesai ücreti hakkın var.")
  ],
  dialogue: [["A", "Sjefen spurte om jeg kunne jobbe overtid i helgen.", "Patron hafta sonu fazla mesai yapıp yapamayacağımı sordu."], ["B", "Får du betalt for det?", "Bunun parasını alıyor musun?"], ["A", "Han sa at det sto i arbeidsavtalen.", "İş sözleşmesinde yazdığını söyledi."], ["B", "Du har krav på overtidstillegg. Spør fagforeningen hvis du er usikker.", "Fazla mesai zammı hakkın var. Emin değilsen sendikaya sor."], ["A", "Godt tips. Jeg er forresten syk i dag, så jeg leverer egenmelding.", "İyi tavsiye. Bu arada bugün hastayım, kendi beyanımla izin vereceğim."]],
  quiz: [
    { q: "\"Jeg er syk.\" → dolaylı (geçmiş)", o: ["Hun sa at hun var syk.", "Hun sa at hun er syk var.", "Hun sa om hun var syk."], a: 0, e: "sa ile yan cümle geçmişe kayar: var." },
    { q: "\"Kommer du?\" → dolaylı soru", o: ["Han spurte om jeg kom.", "Han spurte at jeg kom.", "Han spurte kommer jeg."], a: 0, e: "Evet/hayır sorusu dolaylı olarak om ile kurulur." },
    { q: "Doktorun verdiği hastalık raporu?", o: ["sykemelding", "egenmelding", "permisjon"], a: 0, e: "sykemelding = doktor raporu; egenmelding = kendi beyanın." },
    { q: "\"oppsigelsestid\" ne demek?", o: ["ihbar süresi", "mesai saati", "deneme süresi"], a: 0, e: "oppsigelse = işten çıkarma/istifa; -tid = süre." },
    { q: "\"ha krav på\" ne demek?", o: ["... hakkı olmak", "... talep etmek zorunda olmak", "... borçlu olmak"], a: 0, e: "Du har krav på = ... hakkın var." }
  ],
  review: ["Dolaylı: Hun sa at hun var syk. Han spurte om jeg kom.", "egenmelding ↔ sykemelding.", "arbeidsavtale, overtid, oppsigelse, fagforening, permisjon."]
},
{
  id: "b2-6", title: "Konuşmanın incelikleri", no: "Småord: jo, vel, nok, da", icon: "chat",
  intro: "Norveççeyi doğal yapan küçük kelimeler: jo, vel, nok, da. Ders kitaplarında az, günlük konuşmada her yerde.",
  notes: [
    { h: "jo – \"biliyorsun ya\"", p: "Dinleyenin de bildiği bir şeyi hatırlatır: Det er jo søndag i dag. (Bugün pazar ya.)" },
    { h: "vel – \"herhalde, değil mi?\"", p: "Varsayım ya da onay arayan soru: Du kommer vel? (Geliyorsun, değil mi?) Det går vel bra. (Herhalde iyi gider.)" },
    { h: "nok – \"muhtemelen\"", p: "Kişinin tahmini: Det går nok bra. (Muhtemelen iyi gider.) Han er nok syk. (Herhalde hasta.)" },
    { h: "da – yumuşatıcı ya da vurgulayıcı", p: "Cümle sonunda yumuşatır ya da sabırsızlık katar: Kom igjen, da! (Hadi ama!) Ha det, da! (Hoşça kal o zaman!)" }
  ],
  tip: "Bu kelimeler Türkçedeki \"ya\", \"işte\", \"herhalde\", \"hani\" gibidir. Çevirisi tam olmaz, tonu değiştirirler. Önce dinlerken fark et; zamanla kendi konuşmana kat.",
  words: [
    W("jo", "ya, biliyorsun (ortak bilgi)", "", "Vi kan ikke handle, butikken er jo stengt.", "Alışveriş yapamayız, market kapalı ya."),
    W("vel", "değil mi?, herhalde", "", "Du har vel fått e-posten?", "E-postayı almışsındır, değil mi?"),
    W("nok", "muhtemelen, herhalde", "", "Det ordner seg nok.", "Muhtemelen hallolur."),
    W("da", "o zaman; hadi (ton)", "", "Kom igjen, da!", "Hadi ama!"),
    W("altså", "yani", "", "Møtet er altså avlyst?", "Yani toplantı iptal mi?"),
    W("liksom", "güya, sanki; şey (dolgu)", "", "Han var liksom syk.", "Güya hastaydı."),
    W("egentlig", "aslında", "", "Egentlig har jeg ikke tid.", "Aslında vaktim yok."),
    W("forresten", "bu arada", "", "Forresten, har du sett Ali?", "Bu arada, Ali'yi gördün mü?"),
    W("i hvert fall", "en azından, her halükarda", "", "Det er i hvert fall billig.", "En azından ucuz."),
    W("sikkert", "kesin, muhtemelen", "", "Du har sikkert rett.", "Muhtemelen haklısın."),
    W("Det skal godt gjøres.", "Zor iş, kolay değil.", "", "Bli ferdig i dag? Det skal godt gjøres!", "Bugün bitirmek mi? Kolay değil!")
  ],
  dialogue: [["A", "Du kommer vel på julebordet?", "Yılbaşı yemeğine geliyorsun, değil mi?"], ["B", "Egentlig vet jeg ikke. Jeg er jo ny på jobben.", "Aslında bilmiyorum. İşte yeniyim ya."], ["A", "Nettopp derfor! Det blir nok veldig hyggelig.", "Tam da bu yüzden! Muhtemelen çok keyifli olacak."], ["B", "Ok, da. Forresten, hva har man på seg?", "Tamam o zaman. Bu arada, ne giyiliyor?"], ["A", "Pent, men ikke for pent. I hvert fall ikke dress.", "Şık ama çok değil. En azından takım elbise değil."]],
  quiz: [
    { q: "\"Geliyorsun, değil mi?\"", o: ["Du kommer vel?", "Du kommer jo?", "Du kommer nok?"], a: 0, e: "vel onay bekleyen sorularda kullanılır." },
    { q: "\"Det er jo søndag.\" — jo burada ne ifade ediyor?", o: ["Herkesin bildiği bir şeyi hatırlatma (pazar ya)", "Emin olmama", "Soru"], a: 0, e: "jo ortak bilgiyi hatırlatır: biliyorsun, pazar ya." },
    { q: "\"Muhtemelen iyi gider.\"", o: ["Det går nok bra.", "Det går jo bra.", "Det går da bra?"], a: 0, e: "nok = muhtemelen (konuşanın tahmini)." },
    { q: "\"egentlig\" ne demek?", o: ["aslında", "sonunda", "gerçekten mi?"], a: 0, e: "egentlig = aslında." },
    { q: "\"forresten\" ne demek?", o: ["bu arada", "her neyse", "bunun yerine"], a: 0, e: "forresten = bu arada (konu değiştirirken)." }
  ],
  review: ["jo = biliyorsun ya; vel = değil mi?/herhalde; nok = muhtemelen.", "da cümle sonunda tonu yumuşatır ya da sabırsızlık katar.", "egentlig, forresten, altså, i hvert fall."]
}
];
const addWords = (id: string, ...ws: WordDef[]) => B2.find(L => L.id === id)!.words.push(...ws);

addWords("b2-1",
  N("en", "henvendelse", "henvendelsen", "henvendelser", "başvuru, talep (yazılı)", "", "Takk for henvendelsen din.", "Talebiniz için teşekkürler."),
  N("en", "purring", "purringen", "purringer", "hatırlatma (ödeme / yanıt)", "", "Vi har ikke mottatt svar og sender derfor en purring.", "Yanıt alamadığımız için bir hatırlatma gönderiyoruz."),
  W("på forhånd takk", "şimdiden teşekkürler", "", "På forhånd takk for hjelpen.", "Yardımınız için şimdiden teşekkürler."),
  W("beklage", "özür dilemek, üzüntüsünü bildirmek", "", "Vi beklager ulempen.", "Yaşanan aksaklık için özür dileriz.")
);
addWords("b2-2",
  N("en", "påstand", "påstanden", "påstander", "iddia", "", "Det er en påstand uten dokumentasjon.", "Bu belgesiz bir iddia."),
  W("begrunne", "gerekçelendirmek", "", "Kan du begrunne svaret ditt?", "Cevabını gerekçelendirebilir misin?"),
  N("et", "motargument", "motargumentet", "motargumenter", "karşı argüman", "", "Et viktig motargument er prisen.", "Önemli bir karşı argüman fiyat."),
  W("til tross for", "-e rağmen (isimle)", "", "Til tross for regnet gikk vi ut.", "Yağmura rağmen dışarı çıktık.")
);
addWords("b2-4",
  W("gå ut fra", "varsaymak", "", "Jeg går ut fra at du kommer.", "Geleceğini varsayıyorum."),
  W("legge fram", "sunmak", "", "Hun la fram rapporten på møtet.", "Raporu toplantıda sundu."),
  W("sette i gang", "başlatmak, başlamak", "", "Vi setter i gang prosjektet i januar.", "Projeyi ocakta başlatıyoruz."),
  W("komme overens med", "biriyle iyi geçinmek", "", "Jeg kommer godt overens med sjefen.", "Yöneticimle iyi geçiniyorum.")
);
addWords("b2-5",
  N("en", "prøvetid", "prøvetiden", "", "deneme süresi", "", "Prøvetiden er seks måneder.", "Deneme süresi altı ay."),
  N("en", "turnus", "turnusen", "turnuser", "vardiya düzeni", "", "Jeg jobber turnus på sykehuset.", "Hastanede vardiyalı çalışıyorum."),
  N("en", "lønnsforhandling", "lønnsforhandlingen", "lønnsforhandlinger", "maaş görüşmesi", "", "Lønnsforhandlingene starter i mai.", "Maaş görüşmeleri mayısta başlıyor."),
  N("et", "verneombud", "verneombudet", "verneombud", "iş güvenliği temsilcisi", "", "Snakk med verneombudet om arbeidsmiljøet.", "Çalışma ortamı hakkında iş güvenliği temsilcisiyle konuş.")
);
addWords("b2-6",
  W("jaså", "öyle mi?", "", "– Jeg har fått ny jobb. – Jaså? Gratulerer!", "– Yeni iş buldum. – Öyle mi? Tebrikler!"),
  W("nemlig", "çünkü (bilindiği üzere); aynen", "", "Jeg kan ikke komme. Jeg er nemlig syk.", "Gelemem. Çünkü hastayım."),
  W("ellers", "bunun dışında; yoksa", "", "Ellers alt bra?", "Bunun dışında her şey yolunda mı?"),
  W("uansett", "her neyse, ne olursa olsun", "", "Uansett, vi ses i morgen.", "Her neyse, yarın görüşürüz.")
);

const B2X: LessonDef[] = [{
  id: "b2-7", title: "Deyimler 2", no: "Flere faste uttrykk", icon: "spark",
  intro: "Günlük hayatta ve iş yerinde sık duyacağın 12 deyim daha. Her deyimin resmi, kelimesi kelimesine anlamını gösteriyor; önce resmi hatırla, sonra anlamı.",
  notes: [
    { h: "Resimle hatırla", p: "Deyimler kelimesi kelimesine çevrilince tuhaf bir sahne çıkar: salataya basmak, kedinin sıcak lapanın etrafında dönmesi. Bu tuhaf sahne hafızaya en iyi tutunan şeydir. Resme bak, sahneyi hayal et, sonra gerçek anlamı söyle." },
    { h: "Türkçede de var", p: "Bazıları Türkçeyle neredeyse aynı: \"sitte i samme båt\" = aynı gemide olmak, \"legge kortene på bordet\" = kartları açık oynamak. Bunları hemen kullanabilirsin." },
    { h: "Ne zaman kullanmalı?", p: "Deyimler gündelik konuşmada ve gazetelerde çok yaygındır. Resmî e-postalarda daha seyrek kullanılır." }
  ],
  tip: "\"Det er ikke mitt bord\" (benim masam değil) iş yerinde çok sık duyulur: \"bu benim sorumluluğum değil\" demektir. Kaba değildir ama dikkatli kullan; yardım etmeye isteksiz görünebilir.",
  words: [
    I("Det er ikke mitt bord.", "Bu benim sorumluluğum değil.", "benim masam değil", "🍽️🙅", "Budsjettet er ikke mitt bord, spør økonomisjefen.", "Bütçe benim sorumluluğum değil, mali müdüre sor."),
    I("sitte i samme båt", "aynı durumda olmak", "aynı teknede oturmak", "⛵👫", "Vi sitter alle i samme båt.", "Hepimiz aynı gemideyiz."),
    I("gå som katten rundt den varme grøten", "lafı dolandırmak", "kedi gibi sıcak lapanın etrafında dolaşmak", "🐈🥣♨️", "Ikke gå som katten rundt den varme grøten, si det rett ut!", "Lafı dolandırma, açıkça söyle!"),
    I("få kalde føtter", "son anda korkup vazgeçmek", "ayakları üşümek", "🦶🥶", "Han fikk kalde føtter og trakk søknaden.", "Son anda korktu ve başvurusunu geri çekti."),
    I("legge kortene på bordet", "açık oynamak, her şeyi söylemek", "kartları masaya koymak", "🃏🃏⬇️", "La oss legge kortene på bordet.", "Açık konuşalım."),
    I("ha det som plommen i egget", "çok rahat ve mutlu yaşamak", "yumurtadaki sarısı gibi olmak", "🥚💛😌", "Katten vår har det som plommen i egget.", "Kedimiz bir dediği iki edilmeden yaşıyor."),
    I("midt i blinken", "tam isabet, tam yerinde", "hedefin tam ortası", "🎯", "Gaven var midt i blinken!", "Hediye tam isabet oldu!"),
    I("tråkke i salaten", "pot kırmak, gaf yapmak", "salataya basmak", "👞🥗", "Jeg tråkket i salaten da jeg spurte om alderen hennes.", "Yaşını sorunca pot kırdım."),
    I("komme som julekvelden på kjerringa", "beklenen bir şeye hazırlıksız yakalanmak", "Noel akşamının yaşlı kadına (habersizce) gelmesi gibi gelmek", "🎄👵😲", "Eksamen kom som julekvelden på kjerringa.", "Sınav, hazırlıksız yakaladı (gelmesi belliydi ama)."),
    I("være ute og kjøre", "kafası karışık / yanlış yolda olmak", "dışarıda araba sürüyor olmak", "🚗💨❓", "Han er helt ute og kjøre i denne saken.", "Bu konuda tamamen yanlış yolda."),
    I("Det er hipp som happ.", "Fark etmez.", "(kafiyeli söz) hipp de happ da aynı", "⚖️🤷", "Kaffe eller te? Det er hipp som happ for meg.", "Kahve mi çay mı? Benim için fark etmez."),
    I("skjære alle over én kam", "herkesi aynı kefeye koymak", "herkesi tek bir tarakla kesmek", "✂️👥", "Man kan ikke skjære alle nordmenn over én kam.", "Bütün Norveçlileri aynı kefeye koyamazsın.")
  ],
  dialogue: [["A", "Hvorfor er prosjektet forsinket? Kan vi legge kortene på bordet?", "Proje neden gecikti? Açık konuşabilir miyiz?"], ["B", "Ærlig talt: leverandøren fikk kalde føtter i siste liten.", "Açıkçası: tedarikçi son anda korkup çekildi."], ["A", "Og ingen sa noe? Det kom som julekvelden på kjerringa.", "Ve kimse bir şey demedi mi? Hazırlıksız yakalandık."], ["B", "Budsjettet er ikke mitt bord, men vi sitter jo i samme båt.", "Bütçe benim sorumluluğum değil ama hepimiz aynı gemideyiz."], ["A", "Riktig. Forslaget ditt om ny leverandør er midt i blinken.", "Doğru. Yeni tedarikçi önerin tam isabet."]],
  quiz: [
    { q: "\"tråkke i salaten\" ne demek?", o: ["pot kırmak, gaf yapmak", "sağlıklı beslenmek", "bahçede çalışmak"], a: 0, e: "Kelimesi kelimesine \"salataya basmak\" = yanlış bir şey söyleyip ortamı germek." },
    { q: "\"Aynı gemideyiz.\"", o: ["Vi sitter i samme båt.", "Vi er på bærtur.", "Vi går på skinner."], a: 0, e: "sitte i samme båt = aynı durumda olmak." },
    { q: "\"plomme\" bu deyimde ne demek? (ha det som plommen i egget)", o: ["yumurta sarısı", "erik", "tüy"], a: 0, e: "Günlük dilde plomme hem erik hem yumurta sarısıdır; bu deyimde yumurta sarısı." },
    { q: "Son anda korkup vazgeçen biri için hangisi?", o: ["Han fikk kalde føtter.", "Han har is i magen.", "Han er midt i blinken."], a: 0, e: "få kalde føtter = son anda cesaretini kaybetmek." },
    { q: "\"Det er hipp som happ.\"", o: ["Fark etmez.", "Çok eğlenceli.", "Acele et."], a: 0, e: "hipp som happ = hangisi olsa aynı." }
  ],
  review: ["Önce resmi hatırla (salataya basmak), sonra anlamı (pot kırmak).", "sitte i samme båt, legge kortene på bordet: Türkçeyle neredeyse aynı.", "Det er ikke mitt bord = benim sorumluluğum değil."]
}];

export default atLevel("B2", [...B2, ...B2X]);
