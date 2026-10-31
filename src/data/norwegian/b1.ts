import { N, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const B1: LessonDef[] = [
{
  id: "b1-1", title: "NAV ve resmî işler", no: "NAV og offentlige tjenester", icon: "doc",
  intro: "NAV, Skatteetaten ve resmî yazışmaların dili: başvuru, form, karar. Bu metinlerde edilgen yapı (passiv) çok kullanılır.",
  notes: [
    { h: "s-passiv", p: "Mastar + s: Skjemaet må sendes inn innen fredag. (Formun cuma gününe kadar gönderilmesi gerekiyor.) Genellikle yardımcı fiilden sonra ve kurallarda, talimatlarda kullanılır." },
    { h: "bli-passiv", p: "bli + partisip: Søknaden ble behandlet i går. (Başvuru dün işleme alındı.) Tek bir olay ya da süreç için, özellikle geçmişte." },
    { h: "Resmî kelimeler", p: "søknad (başvuru), søke om (... için başvurmak), vedtak (karar), saksbehandler (dosya sorumlusu), frist (son tarih), innen (... tarihine kadar), dokumentasjon (belge)." }
  ],
  tip: "Türkçedeki edilgen (-ıl, -ın: \"gönderilmeli\") Norveççede iki şekilde kurulur: må sendes (s-passiv) ya da ble sendt (bli-passiv). Resmî mektuplarda ikisini de göreceksin.",
  words: [
    N("en", "søknad", "søknaden", "søknader", "başvuru", "", "Søknaden din er mottatt.", "Başvurun alındı."),
    W("søke om", "... için başvurmak", "", "Jeg vil søke om dagpenger.", "İşsizlik ödeneği için başvurmak istiyorum."),
    W("dagpenger", "işsizlik ödeneği", "", "Du kan ha rett til dagpenger.", "İşsizlik ödeneği hakkın olabilir."),
    N("et", "vedtak", "vedtaket", "vedtak", "(resmî) karar", "", "Du får vedtaket i posten.", "Kararı posta ile alacaksın."),
    N("en", "saksbehandler", "saksbehandleren", "saksbehandlere", "dosya sorumlusu", "", "Saksbehandleren ringer deg.", "Dosya sorumlusu seni arayacak."),
    N("et", "skjema", "skjemaet", "skjemaer", "form", "", "Skjemaet må fylles ut.", "Formun doldurulması gerekiyor."),
    N("en", "frist", "fristen", "frister", "son tarih", "", "Fristen er 1. mars.", "Son tarih 1 Mart."),
    W("innen", "... tarihine kadar", "", "Send dokumentasjonen innen fredag.", "Belgeleri cumaya kadar gönder."),
    W("logge inn med BankID", "BankID ile giriş yapmak", "", "Du må logge inn med BankID.", "BankID ile giriş yapmalısın."),
    W("ha rett til", "... hakkı olmak", "", "Har jeg rett til sykepenger?", "Hastalık ödeneği hakkım var mı?"),
    W("ble behandlet", "işleme alındı", "", "Saken ble behandlet raskt.", "Dosya hızlıca işleme alındı."),
    W("fylle ut", "doldurmak (form)", "", "Kan du hjelpe meg å fylle ut skjemaet?", "Formu doldurmama yardım edebilir misin?")
  ],
  dialogue: [["A", "NAV, du snakker med Kari.", "NAV, Kari ile konuşuyorsunuz."], ["B", "Hei, jeg har mistet jobben og lurer på om jeg har rett til dagpenger.", "Merhaba, işimi kaybettim ve işsizlik ödeneği hakkım olup olmadığını merak ediyorum."], ["A", "Du må sende en søknad på nav.no. Du logger inn med BankID.", "nav.no'dan başvuru göndermelisin. BankID ile giriş yapıyorsun."], ["B", "Hvor lang tid tar det?", "Ne kadar sürüyor?"], ["A", "Søknaden blir vanligvis behandlet innen fire uker.", "Başvuru genellikle dört hafta içinde işleme alınır."]],
  quiz: [
    { q: "\"Formun doldurulması gerekiyor.\"", o: ["Skjemaet må fylles ut.", "Skjemaet må fyller ut.", "Skjemaet må fylt ut.", "Skjemaet fylles må ut."], a: 0, e: "Yardımcı fiilden sonra s-passiv: må fylles ut." },
    { q: "\"Başvuru dün işleme alındı.\"", o: ["Søknaden ble behandlet i går.", "Søknaden behandles i går.", "Søknaden ble behandle i går."], a: 0, e: "Geçmişteki tek olay: bli-passiv (ble + partisip)." },
    { q: "\"vedtak\" ne demek?", o: ["resmî karar", "başvuru", "son tarih", "form"], a: 0, e: "vedtak = karar. søknad = başvuru, frist = son tarih." },
    { q: "\"innen fredag\" ne demek?", o: ["cumaya kadar", "cuma günü içinde", "cumadan sonra"], a: 0, e: "innen = belirtilen zamana kadar (son tarih)." },
    { q: "\"Hastalık ödeneği hakkım var mı?\"", o: ["Har jeg rett til sykepenger?", "Er jeg rett til sykepenger?", "Har jeg riktig sykepenger?"], a: 0, e: "ha rett til = ... hakkı olmak." }
  ],
  review: ["s-passiv: må sendes, kan fylles ut.", "bli-passiv: ble behandlet, blir sendt.", "søknad, vedtak, frist, innen, saksbehandler."]
},
{
  id: "b1-2", title: "İş görüşmesi", no: "Jobbintervju", icon: "briefcase",
  intro: "Kendini tanıtmak, deneyim ve eğitimini anlatmak; \"som\" ile ilgi cümleleri.",
  notes: [
    { h: "som ile ilgi cümlesi", p: "som = ki, -an/-en: en jobb som passer meg (bana uyan bir iş). som özne değilse düşebilir: jobben (som) jeg søkte på (başvurduğum iş)." },
    { h: "Klasik sorular", p: "Fortell litt om deg selv. (Biraz kendinden bahset.) Hvorfor søker du denne stillingen? (Bu pozisyona neden başvuruyorsun?) Hva er dine sterke sider? (Güçlü yönlerin neler?)" },
    { h: "Norveç iş kültürü", p: "Görüşmelerde alçakgönüllülük ve somut örnekler önemlidir. Hiyerarşi düzdür; yöneticiye de \"du\" denir. Geç kalmamak çok önemlidir." }
  ],
  tip: "Türkçede ilgi cümlesi ismin önüne gelir (\"başvurduğum iş\"). Norveççede sonra gelir: \"jobben jeg søkte på\". Edat (på) cümlenin sonunda kalır!",
  words: [
    N("en", "stilling", "stillingen", "stillinger", "pozisyon, kadro", "", "Jeg søker på stillingen som kokk.", "Aşçı pozisyonuna başvuruyorum."),
    N("en", "erfaring", "erfaringen", "erfaringer", "deneyim", "", "Jeg har fem års erfaring fra butikk.", "Mağazacılıkta beş yıllık deneyimim var."),
    N("en", "utdanning", "utdanningen", "utdanninger", "eğitim (öğrenim)", "", "Jeg har utdanning som ingeniør.", "Mühendislik eğitimim var."),
    W("sterke sider", "güçlü yönler", "", "Mine sterke sider er at jeg er nøyaktig.", "Güçlü yönüm titiz olmam."),
    N("en", "arbeidsgiver", "arbeidsgiveren", "arbeidsgivere", "işveren", "", "Arbeidsgiveren ga meg en god attest.", "İşveren bana iyi bir referans mektubu verdi."),
    W("fast stilling", "kadrolu iş", "", "Er dette en fast stilling?", "Bu kadrolu bir iş mi?"),
    W("heltid / deltid", "tam zamanlı / yarı zamanlı", "", "Stillingen er 80 prosent deltid.", "Pozisyon yüzde 80 yarı zamanlı."),
    N("en", "lønn", "lønnen", "lønninger", "maaş", "", "Hva er lønnen?", "Maaş ne kadar?"),
    W("passer", "uyar, uygun düşer", "", "Jeg tror jobben passer meg godt.", "Bu işin bana çok uyduğunu düşünüyorum.", { note: "mastar: passe" }),
    W("samarbeide", "iş birliği yapmak", "", "Jeg liker å samarbeide med andre.", "Başkalarıyla iş birliği yapmayı severim."),
    W("ta ansvar", "sorumluluk almak", "", "Jeg er vant til å ta ansvar.", "Sorumluluk almaya alışkınım."),
    N("en", "attest", "attesten", "attester", "referans/bonservis yazısı", "", "Har du attest fra forrige jobb?", "Önceki işinden referans yazın var mı?")
  ],
  dialogue: [["A", "Velkommen! Fortell litt om deg selv.", "Hoş geldiniz! Biraz kendinizden bahsedin."], ["B", "Jeg heter Elif og har jobbet som regnskapsfører i seks år.", "Adım Elif, altı yıldır muhasebeci olarak çalışıyorum."], ["A", "Hvorfor søker du denne stillingen?", "Bu pozisyona neden başvuruyorsunuz?"], ["B", "Fordi det er en jobb som passer erfaringen min, og jeg vil utvikle meg.", "Çünkü deneyimime uyan bir iş ve kendimi geliştirmek istiyorum."], ["A", "Hva er dine sterke sider?", "Güçlü yönleriniz neler?"], ["B", "Jeg er nøyaktig og liker å samarbeide med andre.", "Titizimdir ve başkalarıyla iş birliği yapmayı severim."]],
  quiz: [
    { q: "\"bana uyan bir iş\"", o: ["en jobb som passer meg", "en som passer meg jobb", "en meg passer jobb", "en jobb passer som meg"], a: 0, e: "İlgi cümlesi isimden sonra som ile gelir." },
    { q: "\"başvurduğum iş\"", o: ["jobben jeg søkte på", "jobben på jeg søkte", "jeg søkte på jobben som", "på jobben jeg søkte"], a: 0, e: "som düşebilir (özne değil) ve edat sonda kalır: jobben (som) jeg søkte på." },
    { q: "\"deltid\" ne demek?", o: ["yarı zamanlı", "tam zamanlı", "geçici", "fazla mesai"], a: 0, e: "deltid = yarı zamanlı, heltid = tam zamanlı." },
    { q: "\"Fortell litt om deg selv.\"", o: ["Biraz kendinden bahset.", "Kendini anlat ve git.", "Kendin hakkında yaz."], a: 0, e: "Görüşmelerin klasik ilk sorusu." },
    { q: "Norveç iş görüşmesinde hangisi doğru?", o: ["Somut örneklerle alçakgönüllü konuşmak iyi karşılanır.", "Yöneticiye \"De\" (siz) demek gerekir.", "Birkaç dakika geç kalmak normaldir."], a: 0, e: "Norveç'te hiyerarşi düzdür, herkese du denir ve dakiklik önemlidir." }
  ],
  review: ["İlgi cümlesi: en jobb som passer meg.", "som düşebilir; edat sonda: jobben jeg søkte på.", "stilling, erfaring, utdanning, heltid/deltid, lønn."]
},
{
  id: "b1-3", title: "Fikir bildirmek", no: "Meninger og sammenligning", icon: "scale",
  intro: "synes, tror, mener farkı ve karşılaştırma (daha büyük, en iyi).",
  notes: [
    { h: "synes / tror / mener", p: "synes = kişisel izlenim, deneyime dayalı görüş: Jeg synes filmen var god. tror = emin olmadan inanmak/tahmin: Jeg tror bussen er forsinket. mener = bir konuda net görüş: Jeg mener at skatten er for høy." },
    { h: "Karşılaştırma", p: "-ere / -est: stor – større – størst; billig – billigere – billigst. Uzun sıfatlar: interessant – mer interessant – mest interessant.",
      table: [["Sıfat", "Daha", "En"], ["god (iyi)", "bedre", "best"], ["stor", "større", "størst"], ["liten", "mindre", "minst"], ["gammel", "eldre", "eldst"], ["mange", "flere", "flest"], ["mye", "mer", "mest"]] },
    { h: "enn ve som", p: "enn = -den daha: Oslo er større enn Bergen. like ... som = kadar: Bergen er like pen som Oslo." }
  ],
  tip: "Türkçede \"bence\" ve \"sanırım\" hepsini karşılar. Norveççede yanlış seçim anlamı değiştirir: \"Jeg tror maten er god\" (henüz tatmadım, sanırım iyi) ↔ \"Jeg synes maten er god\" (tattım, beğendim).",
  words: [
    W("synes", "(deneyime dayanarak) bence, beğenmek", "", "Jeg synes norsk er vanskelig.", "Bence Norveççe zor."),
    W("tror", "sanmak, inanmak", "", "Jeg tror det blir regn.", "Sanırım yağmur yağacak."),
    W("mener", "(bir konuda) görüşünde olmak", "", "Hun mener at alle bør lære norsk.", "Herkesin Norveççe öğrenmesi gerektiği görüşünde."),
    W("enig / uenig", "aynı / farklı görüşte", "", "Jeg er enig med deg.", "Sana katılıyorum."),
    W("bedre", "daha iyi", "", "Det er bedre å ta toget.", "Trenle gitmek daha iyi."),
    W("større enn", "-den daha büyük", "", "Oslo er større enn Bergen.", "Oslo Bergen'den daha büyük."),
    W("like ... som", "... kadar ...", "", "Toget er like raskt som bilen.", "Tren araba kadar hızlı."),
    W("mer / mest", "daha / en (uzun sıfatlarla)", "", "Denne boka er mer interessant.", "Bu kitap daha ilginç."),
    W("fordel / ulempe", "avantaj / dezavantaj", "", "En fordel er at det er billig.", "Bir avantajı ucuz olması."),
    W("etter min mening", "bence, benim görüşüme göre", "", "Etter min mening er det for dyrt.", "Bence çok pahalı."),
    W("kommer an på", "-e bağlı", "", "Det kommer an på været.", "Havaya bağlı.")
  ],
  dialogue: [["A", "Hva synes du om Bergen?", "Bergen hakkında ne düşünüyorsun?"], ["B", "Jeg synes byen er vakker, men det regner mer enn i Oslo.", "Şehri güzel buluyorum ama Oslo'dan daha çok yağmur yağıyor."], ["A", "Tror du at du vil flytte dit?", "Oraya taşınacağını düşünüyor musun?"], ["B", "Det kommer an på jobben. Jeg mener at jobb er viktigere enn vær.", "İşe bağlı. Bence iş havadan daha önemli."], ["A", "Der er jeg enig med deg.", "Orada sana katılıyorum."]],
  quiz: [
    { q: "Filmi izledin ve beğendin. Hangisi?", o: ["Jeg synes filmen var god.", "Jeg tror filmen var god.", "Jeg mener filmen god."], a: 0, e: "Kişisel deneyime dayalı görüş: synes." },
    { q: "Emin değilsin: \"Sanırım otobüs gecikti.\"", o: ["Jeg tror bussen er forsinket.", "Jeg synes bussen er forsinket.", "Jeg mener bussen er forsinket."], a: 0, e: "Emin olmayan tahmin: tror." },
    { q: "god → daha iyi?", o: ["bedre", "godere", "mer god", "best"], a: 0, e: "god düzensizdir: god – bedre – best." },
    { q: "\"Oslo Bergen'den daha büyük.\"", o: ["Oslo er større enn Bergen.", "Oslo er større som Bergen.", "Oslo er mer stor enn Bergen."], a: 0, e: "stor – større; karşılaştırmada enn." },
    { q: "\"Det kommer an på.\" ne demek?", o: ["Duruma bağlı.", "Geliyor.", "Önemli değil."], a: 0, e: "komme an på = -e bağlı olmak." }
  ],
  review: ["synes = deneyimle görüş, tror = tahmin, mener = net görüş.", "god–bedre–best, stor–større–størst, liten–mindre–minst.", "enn = -den daha; like ... som = kadar."]
},
{
  id: "b1-4", title: "Banka ve para", no: "Bank og økonomi", icon: "bank",
  intro: "Banka hesabı, faturalar, vergi kartı. Ayrıca amaç bildiren \"for å\".",
  notes: [
    { h: "for å + mastar", p: "Amaç: Jeg trenger BankID for å logge inn. (Giriş yapmak için BankID'ye ihtiyacım var.) Türkçedeki \"-mek için\"." },
    { h: "Norveç'te temel finans", p: "skattekort (vergi kartı; işverene otomatik gider), lønnsslipp (maaş bordrosu), regning / faktura (fatura), forfallsdato (son ödeme tarihi), eFaktura ve AvtaleGiro (otomatik ödeme)." },
    { h: "Faiz ve kredi", p: "lån (kredi), rente (faiz), boliglån (konut kredisi), nedbetale (borcu ödemek)." }
  ],
  tip: "Türkçede \"-mek için\" fiile eklenir. Norveççede iki kelimedir: for å. \"for logge inn\" ya da \"å logge inn\" tek başına yanlıştır; \"for å logge inn\" olmalı.",
  words: [
    N("en", "konto", "kontoen", "kontoer", "hesap", "", "Jeg vil åpne en konto.", "Hesap açmak istiyorum."),
    W("overføre penger", "para transfer etmek", "", "Jeg overførte penger til kontoen din.", "Hesabına para gönderdim."),
    N("en", "regning", "regningen", "regninger", "fatura", "", "Regningen må betales innen den 15.", "Faturanın 15'ine kadar ödenmesi gerekiyor."),
    N("en", "forfallsdato", "forfallsdatoen", "forfallsdatoer", "son ödeme tarihi", "", "Hva er forfallsdatoen?", "Son ödeme tarihi ne?"),
    N("et", "skattekort", "skattekortet", "skattekort", "vergi kartı", "", "Du må bestille skattekort.", "Vergi kartı sipariş etmelisin."),
    N("en", "lønnsslipp", "lønnsslippen", "lønnsslipper", "maaş bordrosu", "", "Sjekk lønnsslippen din.", "Maaş bordronu kontrol et."),
    N("et", "lån", "lånet", "lån", "kredi, borç", "", "Vi har tatt opp lån i banken.", "Bankadan kredi çektik."),
    N("en", "rente", "renten", "renter", "faiz", "", "Renten har gått opp.", "Faiz yükseldi."),
    W("for å", "-mek için", "", "Jeg sparer for å kjøpe bolig.", "Ev almak için para biriktiriyorum."),
    W("spare", "biriktirmek, tasarruf etmek", "", "Vi sparer penger hver måned.", "Her ay para biriktiriyoruz."),
    W("nettbank", "internet bankacılığı", "", "Jeg betaler regninger i nettbanken.", "Faturaları internet bankacılığından ödüyorum.")
  ],
  dialogue: [["A", "Hei, jeg er ny i Norge og vil åpne en konto.", "Merhaba, Norveç'e yeni geldim, hesap açmak istiyorum."], ["B", "Velkommen! Har du norsk personnummer?", "Hoş geldiniz! Norveç kimlik numaranız var mı?"], ["A", "Ja, og jeg har fått skattekort.", "Evet, vergi kartım da geldi."], ["B", "Fint. Du trenger BankID for å bruke nettbanken.", "Güzel. İnternet bankacılığını kullanmak için BankID'ye ihtiyacınız var."], ["A", "Kan jeg betale regninger automatisk?", "Faturaları otomatik ödeyebilir miyim?"], ["B", "Ja, med AvtaleGiro.", "Evet, AvtaleGiro ile."]],
  quiz: [
    { q: "\"Giriş yapmak için BankID'ye ihtiyacım var.\"", o: ["Jeg trenger BankID for å logge inn.", "Jeg trenger BankID for logge inn.", "Jeg trenger BankID å for logge inn."], a: 0, e: "Amaç: for å + mastar." },
    { q: "\"forfallsdato\" ne demek?", o: ["son ödeme tarihi", "fatura tarihi", "doğum tarihi"], a: 0, e: "forfall = vade; forfallsdato = son ödeme tarihi." },
    { q: "\"rente\" ne demek?", o: ["faiz", "kira", "kredi", "vergi"], a: 0, e: "rente = faiz, lån = kredi, skatt = vergi, husleie = kira." },
    { q: "\"Faturanın ödenmesi gerekiyor.\"", o: ["Regningen må betales.", "Regningen må betaler.", "Regningen må betalt."], a: 0, e: "Yardımcı fiil + s-passiv: må betales." },
    { q: "Maaş bordrosu hangisi?", o: ["lønnsslipp", "skattekort", "regning"], a: 0, e: "lønnsslipp = maaş bordrosu." }
  ],
  review: ["for å + mastar = -mek için.", "regning, forfallsdato, skattekort, lønnsslipp.", "lån, rente, spare, nettbank."]
},
{
  id: "b1-5", title: "Okul ve koşullar", no: "Skole og utdanning", icon: "school",
  intro: "Okul, anaokulu, veli toplantısı. Koşul ve zaman cümleleri: hvis, når, da.",
  notes: [
    { h: "når mı da mı?", p: "da = geçmişte BİR KEZ olan: Da jeg kom til Norge, kunne jeg ikke norsk. når = tekrar eden geçmiş, şimdiki ya da gelecek: Når det regner, tar jeg bussen. Når jeg var liten, lekte jeg ute hver dag." },
    { h: "hvis = eğer", p: "Hvis du har spørsmål, kan du ringe meg. Koşul yoksa ve kesin olacaksa når kullanılır: Når du kommer hjem, ringer du meg." },
    { h: "Yan cümle önce gelirse", p: "Ana cümlenin fiili hemen virgülden sonra gelir: Når jeg kommer hjem, lager jeg middag." }
  ],
  tip: "Türkçede \"-dığında\" tek ektir. Norveççede geçmişteki tek olay için da, diğer durumlar için når kullanılır. \"Når jeg kom til Norge...\" yaygın bir hatadır; doğrusu \"Da jeg kom til Norge...\"",
  words: [
    N("en", "barnehage", "barnehagen", "barnehager", "anaokulu, kreş", "", "Datteren min går i barnehage.", "Kızım anaokuluna gidiyor."),
    N("et", "foreldremøte", "foreldremøtet", "foreldremøter", "veli toplantısı", "", "Det er foreldremøte på torsdag.", "Perşembe veli toplantısı var."),
    N("en", "karakter", "karakteren", "karakterer", "not", "", "Han fikk gode karakterer.", "İyi notlar aldı."),
    N("et", "vitnemål", "vitnemålet", "vitnemål", "diploma", "", "Du må legge ved vitnemålet.", "Diplomanı eklemelisin."),
    W("godkjenning", "denklik, onay", "", "Jeg har søkt om godkjenning av utdanningen min.", "Eğitimimin denkliği için başvurdum."),
    W("da", "-dığında (geçmişte bir kez)", "", "Da jeg var 20, flyttet jeg.", "20 yaşındayken taşındım."),
    W("når", "-dığında (tekrar / gelecek)", "", "Når jeg er ferdig, ringer jeg deg.", "Bitirdiğimde seni ararım."),
    W("hvis", "eğer", "", "Hvis barnet er sykt, må det være hjemme.", "Çocuk hastaysa evde kalmalı."),
    W("lekser", "ev ödevi", "", "Har du gjort leksene?", "Ödevlerini yaptın mı?"),
    W("ungdomsskole / videregående", "ortaokul / lise", "", "Sønnen min begynner på videregående.", "Oğlum liseye başlıyor."),
    W("melde seg på", "kaydolmak", "", "Jeg har meldt meg på norskkurs.", "Norveççe kursuna kaydoldum.")
  ],
  dialogue: [["A", "Da jeg kom til Norge, gikk barna rett i barnehage.", "Norveç'e geldiğimde çocuklar hemen anaokuluna başladı."], ["B", "Hvordan var det for dem?", "Onlar için nasıldı?"], ["A", "Vanskelig først, men når de leker med andre barn, lærer de norsk fort.", "Önce zordu, ama diğer çocuklarla oynadıklarında Norveççeyi çabuk öğreniyorlar."], ["B", "Skal du på foreldremøtet i morgen?", "Yarınki veli toplantısına gidecek misin?"], ["A", "Ja, hvis jeg får fri fra jobben.", "Evet, işten izin alabilirsem."]],
  quiz: [
    { q: "\"Norveç'e geldiğimde Norveççe bilmiyordum.\"", o: ["Da jeg kom til Norge, kunne jeg ikke norsk.", "Når jeg kom til Norge, kunne jeg ikke norsk.", "Da jeg kom til Norge, jeg kunne ikke norsk."], a: 0, e: "Geçmişte tek olay: da. Ana cümlede fiil önce: kunne jeg." },
    { q: "\"Yağmur yağdığında otobüse binerim.\" (her zaman)", o: ["Når det regner, tar jeg bussen.", "Da det regner, tar jeg bussen.", "Hvis det regner, jeg tar bussen."], a: 0, e: "Tekrar eden durum: når." },
    { q: "\"Sorun olursa beni arayabilirsin.\"", o: ["Hvis du har spørsmål, kan du ringe meg.", "Da du har spørsmål, kan du ringe meg.", "Hvis du har spørsmål, du kan ringe meg."], a: 0, e: "Koşul: hvis. Yan cümleden sonra fiil önce: kan du." },
    { q: "\"barnehage\" ne demek?", o: ["anaokulu", "çocuk bahçesi (park)", "ilkokul"], a: 0, e: "barnehage = anaokulu / kreş." },
    { q: "Hangisinde \"når\" kullanılır?", o: ["Gelecekteki bir olay", "Geçmişte bir kez olan olay", "İkisi de değil"], a: 0, e: "når: gelecek, şimdiki zaman ve tekrar eden geçmiş. da: geçmişte bir kez." }
  ],
  review: ["da = geçmişte bir kez; når = tekrar / şimdi / gelecek.", "hvis = eğer (koşul).", "Yan cümle önce: Når jeg kommer hjem, lager jeg middag."]
},
{
  id: "b1-6", title: "Geçmişi anlatmak", no: "Å fortelle", icon: "chat",
  intro: "Bir hikâye anlatmak: preteritum, perfektum ve pluskvamperfektum (hadde + partisip) birlikte.",
  notes: [
    { h: "Pluskvamperfektum", p: "hadde + partisip: geçmişteki bir olaydan DAHA ÖNCE olan. Da jeg kom til stasjonen, hadde toget allerede gått. (İstasyona vardığımda tren çoktan gitmişti.)" },
    { h: "Zaman bağlaçları", p: "først (önce), så / deretter (sonra), etterpå (ardından), til slutt (sonunda), mens (iken), før (-den önce), etter at (-dikten sonra)." },
    { h: "etter at / før", p: "Etter at jeg hadde spist, gikk jeg en tur. Før jeg flyttet til Norge, jobbet jeg i Ankara." }
  ],
  tip: "Türkçedeki \"-mıştı\" Norveççede \"hadde + partisip\" ile karşılanır: \"gitmişti\" = hadde gått. \"Bitirmiştim\" = hadde gjort ferdig.",
  words: [
    W("hadde gått", "gitmişti", "", "Toget hadde allerede gått.", "Tren çoktan gitmişti."),
    W("hadde glemt", "unutmuştu", "", "Jeg hadde glemt nøkkelen.", "Anahtarı unutmuştum."),
    W("først", "önce, ilk olarak", "", "Først studerte jeg, så begynte jeg å jobbe.", "Önce okudum, sonra çalışmaya başladım."),
    W("etterpå", "sonra, ardından", "", "Etterpå drakk vi kaffe.", "Ardından kahve içtik."),
    W("til slutt", "sonunda", "", "Til slutt fant vi en leilighet.", "Sonunda bir daire bulduk."),
    W("mens", "-iken", "", "Mens jeg ventet, leste jeg avisen.", "Beklerken gazete okudum."),
    W("før", "-meden önce", "", "Før jeg flyttet, jobbet jeg i Ankara.", "Taşınmadan önce Ankara'da çalışıyordum."),
    W("etter at", "-dikten sonra", "", "Etter at kurset var ferdig, tok jeg prøven.", "Kurs bittikten sonra sınava girdim."),
    W("plutselig", "aniden", "", "Plutselig begynte det å snø.", "Aniden kar yağmaya başladı."),
    W("heldigvis / dessverre", "neyse ki / maalesef", "", "Heldigvis hadde jeg paraply.", "Neyse ki şemsiyem vardı."),
    W("oppleve", "yaşamak, deneyimlemek", "", "Jeg har opplevd mye i Norge.", "Norveç'te çok şey yaşadım.")
  ],
  dialogue: [["A", "Hvordan var din første dag i Norge?", "Norveç'teki ilk günün nasıldı?"], ["B", "Kaotisk! Da jeg kom til Gardermoen, hadde jeg glemt adressen.", "Kaotik! Gardermoen'e vardığımda adresi unutmuştum."], ["A", "Å nei! Hva gjorde du?", "Eyvah! Ne yaptın?"], ["B", "Først ringte jeg broren min. Mens jeg ventet, kjøpte jeg kaffe.", "Önce kardeşimi aradım. Beklerken kahve aldım."], ["A", "Og til slutt?", "Ve sonunda?"], ["B", "Til slutt kom han og hentet meg. Heldigvis!", "Sonunda gelip beni aldı. Neyse ki!"]],
  quiz: [
    { q: "\"Vardığımda tren çoktan gitmişti.\"", o: ["Da jeg kom, hadde toget allerede gått.", "Da jeg kom, har toget allerede gått.", "Da jeg kom, toget hadde allerede gått.", "Når jeg kom, gikk toget allerede."], a: 0, e: "Daha önceki olay: hadde + partisip; ana cümlede fiil önce: hadde toget." },
    { q: "\"mens\" ne demek?", o: ["-iken", "-den sonra", "çünkü"], a: 0, e: "mens = iken: Mens jeg ventet ..." },
    { q: "\"Taşınmadan önce Ankara'da çalışıyordum.\"", o: ["Før jeg flyttet, jobbet jeg i Ankara.", "Før jeg flyttet, jeg jobbet i Ankara.", "Etter jeg flyttet, jobbet jeg i Ankara."], a: 0, e: "før = -meden önce; yan cümleden sonra fiil önce gelir." },
    { q: "\"glemme\" (unutmak) pluskvamperfektum?", o: ["hadde glemt", "hadde glemte", "har glemt", "hadde glemmet"], a: 0, e: "glemme – glemte – har glemt → hadde glemt." },
    { q: "Hikâyeyi bitirirken hangisi kullanılır?", o: ["til slutt", "først", "mens"], a: 0, e: "til slutt = sonunda." }
  ],
  review: ["hadde + partisip = -mıştı: hadde gått, hadde glemt.", "først → så/etterpå → til slutt.", "mens, før, etter at ile yan cümleler."]
}
];

export default atLevel("B1", B1);
