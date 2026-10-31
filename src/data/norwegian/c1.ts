import { I, N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const C1: LessonDef[] = [
{
  id: "c1-1", title: "Akademik dil", no: "Fagspråk og akademisk stil", icon: "school",
  intro: "Raporlar, ödevler ve resmî metinler için akademik Norveççe: isimleştirme, resmî bağlaçlar ve temkinli ifadeler.",
  notes: [
    { h: "İsimleştirme (nominalisering)", p: "Akademik metinde fiil yerine isim kullanılır: \"Vi analyserte dataene\" → \"Analysen av dataene viser ...\". Metni yoğun ve nesnel yapar, ama aşırısı okumayı zorlaştırır." },
    { h: "imidlertid ve følgelig", p: "Bu bağlaçlar cümle başına gelebilir (o zaman fiil ikinci sırada kalır: Imidlertid viser resultatene ...) ama çoğu zaman fiilden sonra yer alır: Resultatene viser imidlertid at ..." },
    { h: "Temkinli ifade (hedging)", p: "Akademik Norveççede kesin iddialardan kaçınılır: Det kan tyde på at ... (... işaret ediyor olabilir), Dette kan forklares med ... (Bu ... ile açıklanabilir), i stor grad (büyük ölçüde)." }
  ],
  tip: "Türkçe akademik metinlerde uzun ve iç içe cümleler yaygındır. Norveç akademik üslubu (klarspråk) kısa, net cümleleri ödüllendirir. Bir cümlede bir fikir.",
  words: [
    W("imidlertid", "ancak, bununla birlikte", "", "Resultatene viser imidlertid store forskjeller.", "Ancak sonuçlar büyük farklar gösteriyor."),
    W("følgelig", "dolayısıyla, bu nedenle", "", "Utvalget er lite. Følgelig må vi være forsiktige.", "Örneklem küçük. Dolayısıyla dikkatli olmalıyız."),
    W("dermed", "böylece, bu sayede", "", "Kostnadene gikk ned, og dermed økte overskuddet.", "Maliyetler düştü ve böylece kâr arttı."),
    W("med hensyn til", "... açısından, ... ile ilgili olarak", "", "Med hensyn til økonomien er prosjektet risikabelt.", "Ekonomi açısından proje riskli."),
    W("i henhold til", "... uyarınca, ... göre", "", "I henhold til loven må alle ansatte ha kontrakt.", "Kanun uyarınca tüm çalışanların sözleşmesi olmalı."),
    N("en", "forutsetning", "forutsetningen", "forutsetninger", "ön koşul, varsayım", "", "God planlegging er en forutsetning for suksess.", "İyi planlama başarının ön koşuludur."),
    N("en", "problemstilling", "problemstillingen", "problemstillinger", "araştırma sorusu", "", "Oppgavens problemstilling er klar.", "Ödevin araştırma sorusu net."),
    W("drøfte", "tartışmak, irdelemek", "", "I kapittel 4 drøfter jeg funnene.", "4. bölümde bulguları tartışıyorum."),
    W("redegjøre for", "açıklamak, ortaya koymak", "", "Redegjør for begrepet velferdsstat.", "Refah devleti kavramını açıklayın."),
    W("belyse", "aydınlatmak, ele almak", "", "Artikkelen belyser saken fra flere sider.", "Makale konuyu birçok açıdan ele alıyor."),
    N("en", "vurdering", "vurderingen", "vurderinger", "değerlendirme", "", "Etter en grundig vurdering valgte vi alternativ B.", "Ayrıntılı bir değerlendirmeden sonra B seçeneğini seçtik."),
    W("det tyder på at", "... işaret ediyor, görünüşe göre", "", "Det tyder på at tiltaket virker.", "Önlemin işe yaradığı görülüyor."),
    W("i stor grad", "büyük ölçüde", "", "Resultatet skyldes i stor grad flaks.", "Sonuç büyük ölçüde şansa bağlı."),
    N("en", "kilde", "kilden", "kilder", "kaynak", "", "Husk å oppgi kilder.", "Kaynakları belirtmeyi unutma.")
  ],
  dialogue: [["A", "Hvordan går det med masteroppgaven?", "Yüksek lisans tezin nasıl gidiyor?"], ["B", "Problemstillingen er klar, men jeg strever med drøftingen.", "Araştırma sorusu net ama tartışma bölümünde zorlanıyorum."], ["A", "Prøv å redegjøre for teorien først, og drøft deretter funnene.", "Önce teoriyi ortaya koy, sonra bulguları tartış."], ["B", "Funnene tyder imidlertid på noe annet enn teorien.", "Ancak bulgular teoriden farklı bir şeye işaret ediyor."], ["A", "Det er en styrke! Belys forskjellen og vær tydelig på forutsetningene.", "Bu bir güç! Farkı ele al ve varsayımlarını net belirt."]],
  quiz: [
    { q: "\"Ancak sonuçlar ... gösteriyor.\" (imidlertid fiilden sonra)", o: ["Resultatene viser imidlertid ...", "Resultatene imidlertid viser ...", "Imidlertid resultatene viser ..."], a: 0, e: "imidlertid fiilden sonra gelir; başa gelirse fiil ikinci sırada kalır: Imidlertid viser resultatene ..." },
    { q: "\"Analysen av dataene\" hangi tekniğin örneği?", o: ["isimleştirme", "edilgen yapı", "dolaylı anlatım"], a: 0, e: "analysere (fiil) → analysen (isim): nominalisering." },
    { q: "Temkinli bir akademik ifade hangisi?", o: ["Det kan tyde på at ...", "Det er helt sikkert at ...", "Alle vet at ..."], a: 0, e: "Det kan tyde på at = ... işaret ediyor olabilir. Akademik metinlerde kesin iddialardan kaçınılır." },
    { q: "\"i henhold til\" ne demek?", o: ["... uyarınca", "... rağmen", "... yerine"], a: 0, e: "i henhold til loven = kanun uyarınca." },
    { q: "\"redegjøre for\" ne demek?", o: ["açıklamak, ortaya koymak", "itiraz etmek", "özetlemek"], a: 0, e: "Sınav sorularında sık geçer: Redegjør for ... = ... açıklayın." }
  ],
  review: ["İsimleştirme: analysere → analysen av ...", "imidlertid genellikle fiilden sonra: viser imidlertid.", "Temkinli dil: det kan tyde på at, i stor grad."]
},
{
  id: "c1-2", title: "Vurgu ve söz dizimi", no: "Utbrytning og trykk", icon: "arrow",
  intro: "Cümlede vurguyu değiştirmek: \"Det var Ali som ringte\", dolaylı sorularda som ve çift bağlaçlar.",
  notes: [
    { h: "Utbrytning: Det er/var ... som", p: "Bir öğeyi öne çıkarmak için: Ali ringte i går. → Det var Ali som ringte i går. (Dün arayan Ali'ydi.) → Det var i går Ali ringte. (Ali'nin aradığı gün dündü.)" },
    { h: "Dolaylı soruda som", p: "Soru kelimesi yan cümlenin öznesiyse som eklenir: Hvem kommer? → Jeg vet ikke hvem som kommer. Hva skjedde? → Ingen vet hva som skjedde. Özne değilse som yok: Jeg vet ikke hvem du mener." },
    { h: "Çift bağlaçlar", p: "både ... og (hem ... hem), verken ... eller (ne ... ne), enten ... eller (ya ... ya), ikke bare ... men også (sadece ... değil, aynı zamanda), jo ... desto (ne kadar ... o kadar; desto'dan sonra fiil önce gelir)." }
  ],
  tip: "Türkçede vurgu ekle ve sırayla yapılır: \"Arayan Ali'ydi.\" Norveççede bunun karşılığı utbrytning'dir: \"Det var Ali som ringte.\" C1 düzeyinde bu yapıyı kullanmak konuşmanı çok doğal yapar.",
  words: [
    W("Det var ... som", "... olan ... idi (vurgu)", "", "Det var Ali som ringte.", "Arayan Ali'ydi."),
    W("hvem som", "kimin (özne, dolaylı soru)", "", "Jeg vet ikke hvem som har ansvaret.", "Sorumluluğun kimde olduğunu bilmiyorum."),
    W("hva som", "neyin (özne, dolaylı soru)", "", "Ingen vet hva som skjedde.", "Ne olduğunu kimse bilmiyor."),
    W("både ... og", "hem ... hem", "", "Hun snakker både tyrkisk og norsk.", "Hem Türkçe hem Norveççe konuşuyor."),
    W("verken ... eller", "ne ... ne", "", "Jeg har verken tid eller lyst.", "Ne vaktim ne de isteğim var."),
    W("enten ... eller", "ya ... ya", "", "Enten tar vi toget, eller så kjører vi.", "Ya trene bineriz ya da arabayla gideriz."),
    W("ikke bare ... men også", "sadece ... değil, aynı zamanda", "", "Det er ikke bare dyrt, men også upraktisk.", "Sadece pahalı değil, aynı zamanda kullanışsız."),
    W("jo ... desto", "ne kadar ... o kadar", "", "Jo mer jeg leser, desto mer forstår jeg.", "Ne kadar çok okursam o kadar çok anlıyorum."),
    W("nettopp", "tam da, işte", "", "Det er nettopp det jeg mener.", "Tam da kastettiğim bu."),
    W("selve", "... in kendisi, asıl", "", "Selve problemet er mangel på tid.", "Asıl sorun zaman eksikliği."),
    W("snarere", "daha ziyade, aksine", "", "Det er ikke et problem, snarere en mulighet.", "Bu bir sorun değil, daha ziyade bir fırsat."),
    W("i det hele tatt", "genel olarak; hiç (olumsuzda)", "", "Har du lest boka i det hele tatt?", "Kitabı hiç okudun mu ki?"),
    W("for øvrig", "ayrıca, bu arada (resmî)", "", "For øvrig minner vi om fristen.", "Ayrıca son tarihi hatırlatırız.")
  ],
  dialogue: [["A", "Var det du som sendte e-posten til kunden?", "Müşteriye e-postayı gönderen sen miydin?"], ["B", "Nei, det var Ola som sendte den. Jeg vet ikke hva som stod i den.", "Hayır, gönderen Ola'ydı. İçinde ne yazdığını bilmiyorum."], ["A", "Kunden er verken fornøyd med prisen eller med leveringstiden.", "Müşteri ne fiyattan ne de teslim süresinden memnun."], ["B", "Jo lenger vi venter, desto verre blir det.", "Ne kadar beklersek o kadar kötüleşir."], ["A", "Nettopp. Selve problemet er kommunikasjonen.", "Aynen. Asıl sorun iletişim."]],
  quiz: [
    { q: "\"Kimin geldiğini bilmiyorum.\"", o: ["Jeg vet ikke hvem som kommer.", "Jeg vet ikke hvem kommer.", "Jeg vet ikke hvem kommer som."], a: 0, e: "hvem yan cümlenin öznesi olduğu için som gerekir." },
    { q: "\"Arayan Ali'ydi.\" (vurgu)", o: ["Det var Ali som ringte.", "Ali var som ringte.", "Det ringte Ali som."], a: 0, e: "Utbrytning: Det var + vurgulanan öğe + som + cümlenin geri kalanı." },
    { q: "\"Ne kadar çok okursam o kadar çok anlıyorum.\"", o: ["Jo mer jeg leser, desto mer forstår jeg.", "Jo mer jeg leser, desto mer jeg forstår.", "Jo mer leser jeg, desto mer forstår jeg."], a: 0, e: "jo-cümlesi yan cümle (jeg leser), desto'dan sonra fiil önce gelir (forstår jeg)." },
    { q: "\"Ne vaktim ne isteğim var.\"", o: ["Jeg har verken tid eller lyst.", "Jeg har enten tid eller lyst.", "Jeg har både tid og lyst."], a: 0, e: "verken ... eller = ne ... ne." },
    { q: "\"Jeg vet ikke hvem du mener.\" cümlesinde neden som yok?", o: ["hvem burada özne değil (du özne)", "Bu cümle yanlış", "mener fiiliyle som kullanılmaz"], a: 0, e: "som yalnızca soru kelimesi yan cümlenin öznesiyse eklenir. Burada özne du." }
  ],
  review: ["Vurgu: Det var Ali som ringte.", "Dolaylı soruda özne ise som: hvem som kommer, hva som skjedde.", "jo ... desto: desto'dan sonra fiil önce gelir."]
},
{
  id: "c1-3", title: "Varsayımlar ve pişmanlıklar", no: "Hypotetiske setninger", icon: "clock",
  intro: "Gerçek olmayan durumlar, pişmanlıklar ve dilekler: \"Bilseydim gelirdim\", \"Keşke ...\"",
  notes: [
    { h: "Şimdiki zamanda gerçek dışı", p: "Hvis + preteritum, ville + mastar: Hvis jeg hadde mer tid, ville jeg lært spansk. (Daha çok vaktim olsa İspanyolca öğrenirdim.)" },
    { h: "Geçmişte gerçek dışı", p: "Hvis + hadde + partisip, ville ha + partisip: Hvis jeg hadde visst det, ville jeg ha kommet. Konuşma dilinde hvis düşer ve fiil başa gelir: Hadde jeg visst det, hadde jeg kommet." },
    { h: "Pişmanlık ve eleştiri", p: "skulle ha (yapmalıydı / yapacaktı): Jeg skulle ha sagt noe. burde ha (yapmalıydı): Du burde ha ringt. kunne ha (yapabilirdi): Det kunne ha gått verre." },
    { h: "Keşke", p: "Jeg skulle ønske (at) ... : Jeg skulle ønske jeg kunne fly. (Keşke uçabilsem.)" }
  ],
  tip: "Türkçede \"-saydı, -irdi\" ekleri tek kelimede birleşir: \"bilseydim gelirdim\". Norveççede yardımcı fiillerle kurulur: \"Hadde jeg visst det, hadde jeg kommet.\" Hvis düşünce fiilin başa geçtiğine dikkat et.",
  words: [
    W("hadde jeg visst", "bilseydim", "", "Hadde jeg visst det, hadde jeg sagt fra.", "Bilseydim haber verirdim."),
    W("ville ha", "-ecekti, -irdi (geçmişte)", "", "Hun ville ha klart det.", "O başarırdı."),
    W("skulle ha", "-meliydi; -ecekti", "", "Jeg skulle ha spurt først.", "Önce sormalıydım."),
    W("burde ha", "-meliydi (eleştiri)", "", "Du burde ha sagt det tidligere.", "Bunu daha önce söylemeliydin."),
    W("kunne ha", "-ebilirdi", "", "Det kunne ha gått mye verre.", "Çok daha kötü olabilirdi."),
    W("jeg skulle ønske", "keşke", "", "Jeg skulle ønske jeg hadde mer tid.", "Keşke daha çok vaktim olsa."),
    W("dersom", "eğer (resmî)", "", "Dersom du har spørsmål, ta kontakt.", "Sorunuz olursa iletişime geçin."),
    W("i så fall", "o takdirde, öyleyse", "", "Regner det? I så fall blir vi inne.", "Yağmur mu yağıyor? O takdirde içeride kalırız."),
    W("i motsatt fall", "aksi takdirde", "", "Betal innen fredag, i motsatt fall påløper gebyr.", "Cumaya kadar ödeyin, aksi takdirde ücret eklenir."),
    W("angre på", "pişman olmak", "", "Jeg angrer på at jeg ikke søkte.", "Başvurmadığıma pişmanım."),
    W("i ettertid", "sonradan bakınca", "", "I ettertid ser jeg at det var feil.", "Sonradan bakınca yanlış olduğunu görüyorum."),
    W("forutsatt at", "... şartıyla", "", "Vi kommer, forutsatt at været er bra.", "Hava iyi olması şartıyla geliriz.")
  ],
  dialogue: [["A", "Hørte du at Mehmet fikk jobben i Bergen?", "Mehmet'in Bergen'deki işi aldığını duydun mu?"], ["B", "Ja! Jeg skulle ønske jeg hadde søkt også.", "Evet! Keşke ben de başvursaydım."], ["A", "Hvorfor gjorde du ikke det?", "Neden başvurmadın?"], ["B", "Jeg trodde ikke jeg var kvalifisert. Hadde jeg visst at de ville ha norsk på B2, hadde jeg søkt.", "Yeterli olduğumu düşünmedim. B2 Norveççe istediklerini bilseydim başvururdum."], ["A", "Du burde ha spurt meg! Men det kommer flere stillinger, forutsatt at budsjettet går gjennom.", "Bana sormalıydın! Ama bütçe onaylanırsa başka pozisyonlar da gelecek."]],
  quiz: [
    { q: "\"Bilseydim gelirdim.\"", o: ["Hadde jeg visst det, hadde jeg kommet.", "Hvis jeg visste det, kommer jeg.", "Hadde jeg visst det, jeg hadde kommet."], a: 0, e: "Geçmişte gerçek dışı: Hadde jeg visst, hadde jeg kommet. İkinci cümlede de fiil önce gelir." },
    { q: "\"Bunu daha önce söylemeliydin.\" (eleştiri)", o: ["Du burde ha sagt det tidligere.", "Du burde si det tidligere.", "Du har burde sagt det tidligere."], a: 0, e: "burde ha + partisip = -meliydi." },
    { q: "\"Keşke daha çok vaktim olsa.\"", o: ["Jeg skulle ønske jeg hadde mer tid.", "Jeg ønsker jeg har mer tid.", "Jeg skal ønske mer tid."], a: 0, e: "Keşke = jeg skulle ønske; dilek cümlesinde preteritum (hadde)." },
    { q: "\"i motsatt fall\" ne demek?", o: ["aksi takdirde", "o takdirde", "her durumda"], a: 0, e: "i motsatt fall = aksi takdirde; i så fall = o takdirde." },
    { q: "\"Det kunne ha gått verre.\" ne demek?", o: ["Daha kötü olabilirdi.", "Daha kötü gidecek.", "Kötü gitmeliydi."], a: 0, e: "kunne ha + partisip = -ebilirdi." }
  ],
  review: ["Şimdi gerçek dışı: Hvis jeg hadde tid, ville jeg ...", "Geçmiş gerçek dışı: Hadde jeg visst det, hadde jeg kommet.", "skulle ha / burde ha / kunne ha + partisip; keşke = jeg skulle ønske."]
},
{
  id: "c1-4", title: "Toplantı ve müzakere", no: "Møter og forhandlinger", icon: "briefcase",
  intro: "Toplantı yönetmek, itiraz etmek, uzlaşmak. Norveç iş kültüründe kararlar nasıl alınır?",
  notes: [
    { h: "Uzlaşma kültürü", p: "Norveç iş yerinde kararlar genellikle tartışılarak ve herkesin katılımıyla alınır. \"Forankring\" (karara herkesin desteğini almak) çok önemlidir; yukarıdan dayatılan kararlar zayıf görülür." },
    { h: "Kibar itiraz", p: "Doğrudan \"Nei, det er feil\" yerine: Jeg forstår synspunktet ditt, men ... / Jeg vil gjerne komme med en innvending. / Har vi vurdert ...?" },
    { h: "Toplantı akışı", p: "saksliste (gündem) → diskusjon → vedtak (karar) → referat (tutanak) → oppfølging (takip). \"Eventuelt\" gündemin son maddesidir: diğer konular." }
  ],
  tip: "Türk iş kültüründe hiyerarşi ve hızlı karar daha yaygındır. Norveç'te yönetici de dahil herkes görüş bildirir; sessiz kalmak \"onaylıyorum\" anlamına gelir. Fikrin varsa toplantıda söyle.",
  words: [
    N("ei", "saksliste", "sakslista", "sakslister", "gündem", "", "Har alle fått sakslista?", "Herkes gündemi aldı mı?"),
    N("et", "referat", "referatet", "referater", "toplantı tutanağı", "", "Hvem skriver referat i dag?", "Bugün tutanağı kim yazıyor?"),
    W("vedta", "karara bağlamak", "", "Forslaget ble vedtatt enstemmig.", "Öneri oybirliğiyle kabul edildi."),
    N("en", "innvending", "innvendingen", "innvendinger", "itiraz", "", "Jeg vil gjerne komme med en innvending.", "Bir itirazda bulunmak istiyorum."),
    N("et", "kompromiss", "kompromisset", "kompromisser", "uzlaşma, orta yol", "", "Vi kom fram til et kompromiss.", "Bir orta yol bulduk."),
    W("forankre", "(karara) destek sağlamak; temellendirmek", "", "Beslutningen må forankres hos de ansatte.", "Kararın çalışanlar tarafından benimsenmesi gerekiyor."),
    N("en", "tillitsvalgt", "den tillitsvalgte", "tillitsvalgte", "sendika temsilcisi", "", "Den tillitsvalgte deltar på møtet.", "Sendika temsilcisi toplantıya katılıyor."),
    W("gjennomføre", "uygulamak, hayata geçirmek", "", "Vi gjennomfører endringene i mars.", "Değişiklikleri martta hayata geçiriyoruz."),
    N("en", "oppfølging", "oppfølgingen", "oppfølginger", "takip", "", "Hvem har ansvaret for oppfølgingen?", "Takipten kim sorumlu?"),
    W("prioritere", "önceliklendirmek", "", "Vi må prioritere de viktigste oppgavene.", "En önemli görevlere öncelik vermeliyiz."),
    W("Hvis jeg kan få skyte inn noe ...", "Araya bir şey ekleyebilirsem ...", "", "Hvis jeg kan få skyte inn noe: fristen er urealistisk.", "Araya bir şey ekleyebilirsem: son tarih gerçekçi değil."),
    W("Jeg forstår synspunktet ditt, men ...", "Bakış açını anlıyorum ama ...", "", "Jeg forstår synspunktet ditt, men kostnadene er for høye.", "Bakış açını anlıyorum ama maliyetler çok yüksek."),
    W("Skal vi oppsummere?", "Özetleyelim mi?", "", "Skal vi oppsummere hva vi har blitt enige om?", "Neyde anlaştığımızı özetleyelim mi?")
  ],
  dialogue: [["A", "Neste sak på sakslista er den nye turnusordningen.", "Gündemdeki sonraki madde yeni vardiya düzeni."], ["B", "Hvis jeg kan få skyte inn noe: de ansatte er ikke blitt hørt.", "Araya bir şey ekleyebilirsem: çalışanların görüşü alınmadı."], ["A", "Jeg forstår synspunktet ditt, men vi må gjennomføre endringen før sommeren.", "Bakış açını anlıyorum ama değişikliği yazdan önce hayata geçirmeliyiz."], ["C", "Som tillitsvalgt foreslår jeg et kompromiss: en prøveperiode på tre måneder.", "Sendika temsilcisi olarak bir orta yol öneriyorum: üç aylık deneme süresi."], ["A", "Godt forslag. Skal vi oppsummere og vedta det?", "İyi öneri. Özetleyip karara bağlayalım mı?"]],
  quiz: [
    { q: "Kibar bir itiraz hangisi?", o: ["Jeg forstår synspunktet ditt, men ...", "Det er helt feil.", "Nei, slutt."], a: 0, e: "Norveç toplantı kültüründe itiraz yumuşatılarak yapılır." },
    { q: "\"referat\" nedir?", o: ["toplantı tutanağı", "gündem", "rapor özeti"], a: 0, e: "referat = toplantı tutanağı; saksliste = gündem." },
    { q: "\"Forslaget ble vedtatt.\"", o: ["Öneri kabul edildi.", "Öneri ertelendi.", "Öneri reddedildi."], a: 0, e: "vedta = karara bağlamak, kabul etmek." },
    { q: "\"forankring\" Norveç iş kültüründe ne demek?", o: ["Kararın ilgililerce benimsenmesini sağlamak", "Kararı yöneticinin tek başına alması", "Toplantıyı ertelemek"], a: 0, e: "Kararlar herkesin katılımıyla ve desteğiyle (forankring) alınır." },
    { q: "Toplantıda sessiz kalmak Norveç'te genellikle nasıl yorumlanır?", o: ["Onay olarak", "Saygı olarak, fikir bildirmemek beklenir", "Kabalık olarak"], a: 0, e: "Fikrin varsa söylemen beklenir; sessizlik çoğu zaman onay sayılır." }
  ],
  review: ["saksliste → vedtak → referat → oppfølging.", "Kibar itiraz: Jeg forstår synspunktet ditt, men ...", "forankring: kararın herkesçe benimsenmesi."]
},
{
  id: "c1-5", title: "Toplum ve medya", no: "Samfunn og medier", icon: "globe",
  intro: "Haberleri ve gazete yazılarını anlamak için gereken kelimeler, ayrıca Norveç toplumunu anlamanın anahtarı olan kavramlar.",
  notes: [
    { h: "Devlet yapısı", p: "Stortinget (parlamento) yasaları çıkarır, regjeringen (hükümet) yürütür. Ülke kommuner (belediyeler) ve fylker (iller) olarak bölünür. Okul, sağlık merkezi ve NAV ofisi gibi birçok hizmet belediye düzeyindedir." },
    { h: "Kültürel kavramlar", p: "dugnad: komşuların ya da derneklerin birlikte gönüllü iş yapması (ör. bahçe temizliği). janteloven: kendini başkalarından üstün görmemeyi öğütleyen yazılı olmayan norm. likestilling: kadın-erkek ve genel eşitlik." },
    { h: "Gazete türleri", p: "nyhetsartikkel (haber), kronikk (uzman görüş yazısı), debattinnlegg (okur görüşü), leder (başyazı). Kaynak eleştirisi (kildekritikk) Norveç okullarında önemli bir beceridir." }
  ],
  tip: "Türkçedeki \"imece\" kavramı Norveççedeki \"dugnad\"a çok yakındır. Bir dugnad'a çağrılmak topluluğa dahil olmanın işaretidir; katılmak komşularla ilişkiyi güçlendirir.",
  words: [
    W("Stortinget", "Norveç parlamentosu", "", "Stortinget vedtok loven i går.", "Parlamento yasayı dün kabul etti."),
    W("regjeringen", "hükümet", "", "Regjeringen foreslår høyere barnetrygd.", "Hükümet daha yüksek çocuk yardımı öneriyor."),
    N("en", "kommune", "kommunen", "kommuner", "belediye", "", "Kommunen har ansvar for skolene.", "Okullardan belediye sorumlu."),
    W("velferdsstaten", "refah devleti", "", "Velferdsstaten bygger på høye skatter.", "Refah devleti yüksek vergilere dayanır."),
    N("en", "likestilling", "likestillingen", "", "eşitlik", "", "Norge er kjent for likestilling.", "Norveç eşitlikle tanınır."),
    N("en", "dugnad", "dugnaden", "dugnader", "imece, ortak gönüllü çalışma", "", "Det er dugnad i borettslaget på lørdag.", "Cumartesi site sakinlerinin imecesi var."),
    W("janteloven", "Jante yasası (kendini üstün görmeme normu)", "", "Janteloven sier: Du skal ikke tro du er noe.", "Jante yasası der ki: Kendini bir şey sanma."),
    N("en", "ytringsfrihet", "ytringsfriheten", "", "ifade özgürlüğü", "", "Ytringsfrihet er en grunnleggende rettighet.", "İfade özgürlüğü temel bir haktır."),
    N("en", "kronikk", "kronikken", "kronikker", "görüş yazısı (köşe)", "", "Hun skrev en kronikk i Aftenposten.", "Aftenposten'da bir görüş yazısı yazdı."),
    N("et", "debattinnlegg", "debattinnlegget", "debattinnlegg", "okur / tartışma yazısı", "", "Debattinnlegget skapte mye diskusjon.", "Tartışma yazısı çok tartışma yarattı."),
    N("en", "kildekritikk", "kildekritikken", "", "kaynak eleştirisi", "", "Bruk kildekritikk når du leser på nett.", "İnternette okurken kaynak eleştirisi yap."),
    W("påstå", "iddia etmek", "", "Han påstår at tallene er feil.", "Rakamların yanlış olduğunu iddia ediyor."),
    N("et", "valg", "valget", "valg", "seçim", "", "Det er kommunevalg i september.", "Eylülde yerel seçim var."),
    N("en", "høring", "høringen", "høringer", "kamuoyu görüşü alma süreci", "", "Lovforslaget er sendt på høring.", "Yasa tasarısı görüşe açıldı.")
  ],
  dialogue: [["A", "Har du lest kronikken om skolemat i dag?", "Bugün okul yemeği hakkındaki görüş yazısını okudun mu?"], ["B", "Ja. Forfatteren påstår at kommunen sparer på feil sted.", "Evet. Yazar belediyenin yanlış yerden tasarruf ettiğini iddia ediyor."], ["A", "Men hvor kommer tallene fra? Litt kildekritikk skader ikke.", "Ama rakamlar nereden geliyor? Biraz kaynak eleştirisi zarar vermez."], ["B", "Fra en høring i Stortinget, visstnok.", "Söylenene göre parlamentodaki bir görüş alma sürecinden."], ["A", "Da blir det nok en sak i valgkampen.", "O zaman muhtemelen seçim kampanyasında bir konu olur."]],
  quiz: [
    { q: "\"dugnad\" Türkçedeki hangi kavrama en yakın?", o: ["imece", "bayram", "nöbet"], a: 0, e: "dugnad: topluluk olarak birlikte gönüllü çalışmak." },
    { q: "Norveç'te yasaları kim çıkarır?", o: ["Stortinget", "kommunen", "regjeringen"], a: 0, e: "Stortinget = parlamento; regjeringen = hükümet (yürütme)." },
    { q: "\"kronikk\" nedir?", o: ["Uzman görüş yazısı", "Kısa haber", "Gazetenin spor sayfası"], a: 0, e: "kronikk = uzman ya da tanınmış birinin görüş yazısı." },
    { q: "\"janteloven\" neyi ifade eder?", o: ["Kendini başkalarından üstün görmeme normu", "Bir trafik yasası", "Kadın-erkek eşitliği yasası"], a: 0, e: "janteloven yazılı bir yasa değil, kültürel bir normdur." },
    { q: "\"Lovforslaget er sendt på høring.\"", o: ["Yasa tasarısı görüşe açıldı.", "Yasa tasarısı reddedildi.", "Yasa tasarısı mahkemeye gitti."], a: 0, e: "høring = ilgili kurum ve kişilerin görüşünün alındığı süreç." }
  ],
  review: ["Stortinget (parlamento), regjeringen (hükümet), kommune (belediye).", "dugnad ≈ imece; janteloven; likestilling.", "kronikk, debattinnlegg, kildekritikk."]
},
{
  id: "c1-6", title: "Lehçeler, nynorsk ve argo", no: "Språkvariasjon", icon: "chat",
  intro: "Norveç'te herkes Bokmål konuşmaz. Lehçeleri, ikinci yazı dili nynorsk'u ve gençlerin argosunu tanımak.",
  notes: [
    { h: "İki yazı dili", p: "Norveççenin iki resmî yazı dili vardır: bokmål (çoğunluk) ve nynorsk (özellikle Batı Norveç'te). Okulda herkes ikisini de öğrenir. Resmî kurumlar iki dilde de yazmak zorundadır." },
    { h: "Lehçeler saygı görür", p: "Norveç'te lehçe konuşmak normaldir; televizyonda, mecliste, iş yerinde herkes kendi lehçesini konuşur. Örneğin \"jeg\": eg (batı), æ (kuzey, Trøndelag), je (doğu). \"ikke\": ikkje, itj, ikkje." },
    { h: "Nynorsk'ta sık kelimeler", p: "eg (jeg), ikkje (ikke), kva (hva), kvar (hvor), korleis (hvordan), ho (hun), dei (de), me / vi (vi)." }
  ],
  tip: "Lehçeyi anlamadığında utanma: \"Unnskyld, kan du si det en gang til?\" demek tamamen normaldir. Norveçliler de birbirlerinin lehçesini her zaman anlamaz.",
  words: [
    W("eg", "ben (nynorsk / batı lehçeleri)", "", "Eg kjem frå Bergen.", "Bergen'liyim."),
    W("ikkje", "değil (nynorsk)", "", "Eg veit ikkje.", "Bilmiyorum."),
    W("kva", "ne (nynorsk)", "", "Kva heiter du?", "Adın ne?"),
    W("korleis", "nasıl (nynorsk)", "", "Korleis har du det?", "Nasılsın?"),
    W("ho", "o (kadın, nynorsk)", "", "Ho bur i Voss.", "O Voss'ta oturuyor."),
    W("digg", "harika, çok güzel (argo)", "", "Maten var skikkelig digg!", "Yemek gerçekten harikaydı!"),
    W("kjipt", "berbat, kötü (argo)", "", "Så kjipt at du er syk.", "Hasta olman çok kötü."),
    W("sykt", "aşırı, çok (argo)", "", "Konserten var sykt bra.", "Konser aşırı iyiydi."),
    W("gidde", "üşenmemek, zahmet etmek", "", "Jeg gidder ikke å lage mat i dag.", "Bugün yemek yapmaya üşeniyorum."),
    W("orke", "gücü / mecali olmak", "", "Jeg orker ikke mer i dag.", "Bugün artık mecalim kalmadı."),
    W("chille", "takılmak, rahatlamak", "", "Vi bare chiller hjemme i kveld.", "Bu akşam evde takılıyoruz."),
    W("kjempe-", "çok, kocaman (ön ek)", "", "Det var kjempehyggelig å se deg!", "Seni görmek çok güzeldi!"),
    W("Skjer'a?", "N'aber? (çok samimi)", "", "Hei, skjer'a?", "Selam, n'aber?")
  ],
  dialogue: [["A", "Skjer'a? Var du på festen i går?", "N'aber? Dün partide miydin?"], ["B", "Nei, jeg orket ikke. Jeg var sykt sliten.", "Hayır, mecalim yoktu. Aşırı yorgundum."], ["A", "Kjipt! Maten var digg. Og verten snakket nynorsk hele kvelden: \"Kva vil du ha?\"", "Yazık! Yemek harikaydı. Ev sahibi bütün akşam nynorsk konuştu: \"Ne istersin?\""], ["B", "Hehe, han er fra Voss. Der sier de \"eg\" og \"ikkje\".", "Hehe, Voss'lu. Orada \"eg\" ve \"ikkje\" derler."], ["A", "Jeg forsto nesten alt. Neste gang må du bli med!", "Neredeyse her şeyi anladım. Bir dahaki sefere gelmelisin!"]],
  quiz: [
    { q: "Nynorsk \"Eg veit ikkje.\" Bokmål'da?", o: ["Jeg vet ikke.", "Jeg vil ikke.", "Jeg var ikke."], a: 0, e: "eg = jeg, veit = vet, ikkje = ikke." },
    { q: "\"Jeg gidder ikke.\" ne demek?", o: ["Üşeniyorum, zahmet etmeyeceğim.", "Gidemiyorum.", "Hatırlamıyorum."], a: 0, e: "gidde = üşenmemek; olumsuzda \"üşenmek\"." },
    { q: "\"sykt bra\" ne demek?", o: ["aşırı iyi", "hastalıklı ama iyi", "biraz iyi"], a: 0, e: "Argoda sykt = çok, aşırı." },
    { q: "Norveç'te lehçeler hakkında hangisi doğru?", o: ["Lehçe konuşmak her ortamda normaldir.", "Resmî ortamda sadece Bokmål konuşulur.", "Lehçeler yasaktır."], a: 0, e: "Norveç'te lehçeler saygı görür ve her yerde konuşulur." },
    { q: "Nynorsk \"korleis\" Bokmål'da?", o: ["hvordan", "hvorfor", "hvor"], a: 0, e: "korleis = hvordan (nasıl)." }
  ],
  review: ["İki yazı dili: bokmål ve nynorsk.", "Nynorsk: eg, ikkje, kva, korleis, ho.", "Argo: digg, kjipt, sykt, gidde, orke."]
},
{
  id: "c1-7", title: "İş hayatında deyimler", no: "Uttrykk i arbeidslivet", icon: "spark",
  intro: "Toplantılarda, e-postalarda ve iş arkadaşlarıyla sohbette sık duyulan 12 deyim, her biri bir resimle.",
  notes: [
    { h: "Resimle hatırla", p: "Her deyimin kelimesi kelimesine anlamını gösteren bir resmi var. Resme bak ve sahneyi hayal et: kürek çekip karaya ulaşmak (ro i land), havada birçok top (mange baller i lufta). Sonra gerçek anlamı söyle." },
    { h: "Türkçe karşılıklar", p: "Bazılarının birebir Türkçe karşılığı var: \"selge skinnet før bjørnen er skutt\" ≈ dereyi görmeden paçaları sıvamak; \"smi mens jernet er varmt\" = demir tavında dövülür." }
  ],
  tip: "İş yerinde deyim kullanmak seni daha doğal gösterir ama anlamından emin değilsen önce dinle. \"Ro i land\" ve \"mange baller i lufta\" toplantılarda en sık duyacakların.",
  words: [
    I("ha mange baller i lufta", "aynı anda birçok işle uğraşmak", "havada birçok top olmak", "🤹", "Jeg har mange baller i lufta for tiden.", "Bu aralar aynı anda birçok işle uğraşıyorum."),
    I("ro i land", "bir işi başarıyla bitirmek", "kürek çekip karaya ulaşmak", "🚣🏝️", "Vi klarte å ro prosjektet i land.", "Projeyi başarıyla bitirmeyi başardık."),
    I("legge lista høyt", "çıtayı yüksek tutmak", "çıtayı yükseğe koymak", "📏⬆️", "Sjefen legger lista høyt.", "Yönetici çıtayı yüksek tutuyor."),
    I("trekke i trådene", "perde arkasından yönetmek", "ipleri çekmek", "🧵✋", "Det er hun som trekker i trådene.", "İpleri elinde tutan o."),
    I("ha bein i nesa", "kararlı ve dik duruşlu olmak", "burnunda kemik olmak", "🦴👃", "Du må ha bein i nesa for å lede et team.", "Bir ekibi yönetmek için dik duruşlu olmalısın."),
    I("ta noen på senga", "birini hazırlıksız yakalamak", "birini yatakta yakalamak", "🛏️😳", "Spørsmålet tok meg helt på senga.", "Soru beni tamamen hazırlıksız yakaladı."),
    I("henge i en tynn tråd", "pamuk ipliğine bağlı olmak", "ince bir ipte asılı olmak", "🧵⚠️", "Avtalen henger i en tynn tråd.", "Anlaşma pamuk ipliğine bağlı."),
    I("slå seg på brystet", "övünmek, böbürlenmek", "göğsüne vurmak", "💪😤", "Han slår seg på brystet over resultatene.", "Sonuçlarla övünüyor."),
    I("selge skinnet før bjørnen er skutt", "dereyi görmeden paçaları sıvamak", "ayı vurulmadan postunu satmak", "🐻💰", "Ikke selg skinnet før bjørnen er skutt – kontrakten er ikke signert.", "Dereyi görmeden paçaları sıvama, sözleşme imzalanmadı."),
    I("smi mens jernet er varmt", "fırsat varken değerlendirmek", "demir sıcakken dövmek", "🔨🔥", "Kunden er interessert, så la oss smi mens jernet er varmt.", "Müşteri ilgili, demir tavındayken dövelim."),
    I("gå over bekken etter vann", "gereksiz zahmete girmek", "su almak için dereyi geçmek", "🏞️🪣", "Hvorfor ansette konsulenter? Det er å gå over bekken etter vann.", "Neden danışman tutalım? Bu gereksiz zahmet."),
    I("skyte seg selv i foten", "kendi kendine zarar vermek", "kendi ayağına ateş etmek", "🦶💥", "Med den e-posten skjøt han seg selv i foten.", "O e-postayla kendi ayağına sıktı.")
  ],
  dialogue: [["A", "Gratulerer! Dere klarte å ro avtalen i land.", "Tebrikler! Anlaşmayı başarıyla bitirdiniz."], ["B", "Takk, men den hang i en tynn tråd lenge. Kunden tok oss på senga med nye krav.", "Teşekkürler ama uzun süre pamuk ipliğine bağlıydı. Müşteri yeni taleplerle bizi hazırlıksız yakaladı."], ["A", "Du hadde bein i nesa og sa nei til de verste kravene.", "Sen dik durdun ve en kötü taleplere hayır dedin."], ["B", "Nå bør vi smi mens jernet er varmt og tilby flere tjenester.", "Şimdi demir tavındayken daha fazla hizmet sunmalıyız."], ["A", "Enig, men ikke selg skinnet før bjørnen er skutt!", "Katılıyorum ama dereyi görmeden paçaları sıvama!"]],
  quiz: [
    { q: "\"ro i land\" ne demek?", o: ["bir işi başarıyla bitirmek", "tatile çıkmak", "işi bırakmak"], a: 0, e: "Kelimesi kelimesine \"kürek çekip karaya ulaşmak\"." },
    { q: "\"Demir tavında dövülür.\" Norveççesi?", o: ["smi mens jernet er varmt", "legge lista høyt", "trekke i trådene"], a: 0, e: "smi mens jernet er varmt = fırsat varken değerlendir." },
    { q: "\"Spørsmålet tok meg på senga.\"", o: ["Soru beni hazırlıksız yakaladı.", "Soru beni uyuttu.", "Soruyu yatakta düşündüm."], a: 0, e: "ta noen på senga = birini hazırlıksız yakalamak." },
    { q: "\"dereyi görmeden paçaları sıvamak\"", o: ["selge skinnet før bjørnen er skutt", "gå over bekken etter vann", "slå seg på brystet"], a: 0, e: "Ayı vurulmadan postunu satmak." },
    { q: "\"ha bein i nesa\" ne demek?", o: ["kararlı, dik duruşlu olmak", "burnu kırık olmak", "kibirli olmak"], a: 0, e: "Burnunda kemik olmak = karakter sahibi, kolay boyun eğmeyen." }
  ],
  review: ["ro i land = başarıyla bitirmek; mange baller i lufta = çok işle uğraşmak.", "smi mens jernet er varmt = demir tavında dövülür.", "selge skinnet før bjørnen er skutt = dereyi görmeden paçaları sıvamak."]
},
{
  id: "c1-8", title: "Atasözleri ve günlük deyimler", no: "Ordtak og hverdagsuttrykk", icon: "spark",
  intro: "Norveççede günlük konuşmada ve yazıda geçen atasözleri ve deyimler. Birçoğunun Türkçede şaşırtıcı derecede yakın bir karşılığı var.",
  notes: [
    { h: "Ordtak (atasözü)", p: "Atasözleri genellikle tam cümle olarak kullanılır ve değişmez: \"Det er ikke gull alt som glimrer.\" Deyimler ise cümleye uyar: \"Han hoppet over der gjerdet var lavest.\"" },
    { h: "Ortak Avrupa mirası", p: "\"Det var dråpen som fikk begeret til å renne over\" (bardağı taşıran son damla) ve \"ha en finger med i spillet\" (işin içinde parmağı olmak) Türkçedekiyle neredeyse aynıdır." }
  ],
  tip: "Türkçede \"bardağı taşıran son damla\" deriz; Norveççe de aynı resmi kullanır ama kadeh (beger) ile: \"Det var dråpen som fikk begeret til å renne over.\" Türkçe karşılığı olan deyimleri ilk öğren; en kolay onlar.",
  words: [
    I("Det er ugler i mosen.", "İşin içinde bir bit yeniği var.", "yosunda baykuşlar var", "🦉🌿", "Tallene stemmer ikke. Det er ugler i mosen.", "Rakamlar tutmuyor. İşin içinde bir bit yeniği var."),
    I("stikke fingeren i jorda", "ayakları yere basmak, durup düşünmek", "parmağını toprağa sokmak", "👉🌍", "Nå må vi stikke fingeren i jorda og tenke oss om.", "Şimdi durup ayaklarımızı yere basarak düşünmeliyiz."),
    I("snu kappa etter vinden", "rüzgâra göre yön değiştirmek, dönek olmak", "pelerini rüzgâra göre çevirmek", "🧥💨", "Politikeren snur kappa etter vinden.", "Politikacı rüzgâra göre yön değiştiriyor."),
    I("ta sorgene på forskudd", "olmadan dertlenmek", "üzüntüleri peşin almak", "😟⏩", "Ikke ta sorgene på forskudd, vi vet ikke svaret ennå.", "Olmadan dertlenme, cevabı henüz bilmiyoruz."),
    I("kaste perler for svin", "kıymet bilmeyene emek vermek", "domuzlara inci atmak", "📿🐖", "Å gi ham gode råd er å kaste perler for svin.", "Ona iyi tavsiye vermek boşa emek."),
    I("ikke se skogen for bare trær", "ayrıntılardan bütünü görememek", "ağaçlardan ormanı görememek", "🌳🌲🌳", "Du ser ikke skogen for bare trær.", "Ayrıntılara takılıp bütünü göremiyorsun."),
    I("Det var dråpen som fikk begeret til å renne over.", "Bardağı taşıran son damla oldu.", "kadehi taşıran damla oldu", "💧🍷", "Den siste e-posten var dråpen som fikk begeret til å renne over.", "Son e-posta bardağı taşıran son damla oldu."),
    I("Det er ikke gull alt som glimrer.", "Parlayan her şey altın değildir.", "parlayan her şey altın değildir", "🥇✨", "Jobben ser fin ut, men det er ikke gull alt som glimrer.", "İş güzel görünüyor ama parlayan her şey altın değildir."),
    I("Man skal ikke skue hunden på hårene.", "Görünüşe aldanmamalı.", "köpeği tüylerine bakarak değerlendirmemeli", "🐕👀", "Han ser streng ut, men man skal ikke skue hunden på hårene.", "Sert görünüyor ama görünüşe aldanmamalı."),
    I("hoppe over der gjerdet er lavest", "işin kolayına kaçmak", "çitin en alçak yerinden atlamak", "🏃🚧", "Han hopper alltid over der gjerdet er lavest.", "Hep işin kolayına kaçıyor."),
    I("på stående fot", "hemen, anında, hazırlıksız", "ayakta durur halde", "🧍⚡", "Hun svarte på stående fot.", "Hemen, düşünmeden cevap verdi."),
    I("ha en finger med i spillet", "işin içinde parmağı olmak", "oyunda bir parmağı olmak", "☝️🎲", "Jeg tror sjefen hadde en finger med i spillet.", "Bence yöneticinin bu işte parmağı vardı.")
  ],
  dialogue: [["A", "Har du hørt at Lars sa opp i går – på stående fot?", "Lars'ın dün anında istifa ettiğini duydun mu?"], ["B", "Ja. Det var visst dråpen som fikk begeret til å renne over.", "Evet. Görünüşe göre bardağı taşıran son damla olmuş."], ["A", "Jeg tror det er ugler i mosen. Noen hadde en finger med i spillet.", "Bence işin içinde bir bit yeniği var. Birinin parmağı vardı."], ["B", "Ikke ta sorgene på forskudd. La oss stikke fingeren i jorda.", "Olmadan dertlenme. Durup bir düşünelim."], ["A", "Du har rett. Det er ikke gull alt som glimrer i ryktene heller.", "Haklısın. Dedikodularda da parlayan her şey altın değil."]],
  quiz: [
    { q: "\"Bardağı taşıran son damla.\"", o: ["Det var dråpen som fikk begeret til å renne over.", "Det er ugler i mosen.", "Det er ikke gull alt som glimrer."], a: 0, e: "Norveççe resim de aynı: kadehi taşıran damla." },
    { q: "\"Det er ugler i mosen.\" ne demek?", o: ["İşin içinde bir bit yeniği var.", "Ormanda baykuş var.", "Her şey yolunda."], a: 0, e: "Kelimesi kelimesine \"yosunda baykuşlar var\" = bir terslik var." },
    { q: "\"hoppe over der gjerdet er lavest\"", o: ["işin kolayına kaçmak", "engelleri aşmak", "spor yapmak"], a: 0, e: "Çitin en alçak yerinden atlamak = en az zahmetli yolu seçmek." },
    { q: "\"på stående fot\" ne demek?", o: ["hemen, anında", "ayakta durarak çalışmak", "yürüyerek"], a: 0, e: "Hun svarte på stående fot = hemen cevap verdi." },
    { q: "\"Görünüşe aldanmamalı.\"", o: ["Man skal ikke skue hunden på hårene.", "Man skal ikke kaste perler for svin.", "Man skal ikke snu kappa etter vinden."], a: 0, e: "Köpeği tüyüne bakarak değerlendirme = görünüşe aldanma." }
  ],
  review: ["Det er ugler i mosen = bit yeniği var.", "dråpen som fikk begeret til å renne over = bardağı taşıran son damla.", "hoppe over der gjerdet er lavest = işin kolayına kaçmak."]
}
];

export default atLevel("C1", C1);
