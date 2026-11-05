import { N, Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";

const B1: LessonDef[] = [
{
  id: "b1-health", title: "Sağlık: hastane ve doktor", no: "Helse: lege og sykehus", icon: "health",
  intro: "Norveç sağlık sisteminde yolunu bulmak: aile hekimi, nöbetçi doktor, hastane; şikâyetini anlatmak ve randevu almak.",
  notes: [
    { h: "Nereye başvurulur?", p: "Norveç'te önce fastlege'ye (aile hekimi) gidilir. Hastaneye genellikle onun sevkiyle (henvisning) gidersin. Mesai dışında acil ama hayati olmayan durumlarda legevakt (116 117) aranır. Hayati tehlikede 113 aranır.",
      table: [["Durum", "Nereye?", "Telefon"], ["Normal şikâyet", "fastlege", "kendi doktorun"], ["Acil, mesai dışı", "legevakt", "116 117"], ["Hayati tehlike", "ambulanse / akuttmottak", "113"]] },
    { h: "Şikâyet anlatmak", p: "Jeg har vondt i ... (... ağrıyor). Jeg har hatt feber i tre dager. (Üç gündür ateşim var.) Süre için har hatt + i: Türkçedeki \"-dır\" burada şimdiki zamanla değil, perfektum ile söylenir." },
    { h: "Refleksif fiil", p: "føle seg (kendini hissetmek) dönüşlüdür: Jeg føler meg dårlig. Hun føler seg bedre. Du føler deg sliten." }
  ],
  tip: "\"Üç gündür hastayım\" derken Türkçedeki gibi şimdiki zaman kullanılmaz: \"Jeg er syk i tre dager\" değil, \"Jeg har vært syk i tre dager\" denir. Ayrıca \"time\" burada saat değil, randevu demektir: bestille time.",
  words: [
    N("en", "fastlege", "fastlegen", "fastleger", "aile hekimi", "", "Jeg må ringe fastlegen min.", "Aile hekimimi aramam gerekiyor."),
    N("en", "legevakt", "legevakten", "legevakter", "nöbetçi doktor (mesai dışı)", "", "Legevakten er åpen hele natten.", "Nöbetçi doktor bütün gece açık."),
    N("et", "sykehus", "sykehuset", "sykehus", "hastane", "", "Moren min ligger på sykehuset.", "Annem hastanede yatıyor."),
    N("et", "akuttmottak", "akuttmottaket", "akuttmottak", "acil servis", "", "Ambulansen kjørte ham til akuttmottaket.", "Ambulans onu acil servise götürdü."),
    W("bestille time", "randevu almak", "", "Jeg vil bestille time hos legen.", "Doktordan randevu almak istiyorum."),
    N("en", "henvisning", "henvisningen", "henvisninger", "sevk (başka doktora)", "", "Legen skrev en henvisning til sykehuset.", "Doktor hastaneye sevk yazdı."),
    N("en", "resept", "resepten", "resepter", "reçete", "", "Du får resept på antibiotika.", "Antibiyotik reçetesi alacaksın."),
    W("ha vondt i", "-i ağrımak", "", "Jeg har vondt i ryggen.", "Sırtım ağrıyor."),
    W("føle seg dårlig", "kendini kötü hissetmek", "", "Jeg føler meg dårlig i dag.", "Bugün kendimi kötü hissediyorum."),
    N("en", "smerte", "smerten", "smerter", "ağrı", "", "Smertene startet i går kveld.", "Ağrılar dün akşam başladı."),
    N("en", "undersøkelse", "undersøkelsen", "undersøkelser", "muayene, tetkik", "", "Undersøkelsen tar en halv time.", "Muayene yarım saat sürüyor."),
    N("en", "blodprøve", "blodprøven", "blodprøver", "kan tahlili", "", "Vi må ta en blodprøve.", "Kan tahlili yapmamız gerekiyor."),
    N("en", "sykmelding", "sykmeldingen", "sykmeldinger", "doktor raporu (işe gidememe)", "", "Legen ga meg sykmelding i en uke.", "Doktor bana bir haftalık rapor verdi."),
    W("apotek", "eczane", "", "Du henter medisinen på apoteket.", "İlacı eczaneden alıyorsun.", { g: "et", def: "apoteket", pl: "apotek" })
  ],
  dialogue: [["A", "Legekontoret, hva kan jeg hjelpe deg med?", "Doktor muayenehanesi, size nasıl yardımcı olabilirim?"], ["B", "Jeg vil gjerne bestille time. Jeg har hatt vondt i magen i en uke.", "Randevu almak istiyorum. Bir haftadır karnım ağrıyor."], ["A", "Har du feber?", "Ateşiniz var mı?"], ["B", "Nei, men jeg føler meg veldig dårlig.", "Hayır ama kendimi çok kötü hissediyorum."], ["A", "Du kan komme i morgen klokka ni. Da tar vi en blodprøve.", "Yarın saat dokuzda gelebilirsiniz. O zaman kan tahlili yaparız."]],
  quiz: [
    Q("Gece çocuğunun yüksek ateşi var ama hayati tehlike yok. Nereyi ararsın?", ["legevakt (116 117)", "fastlege", "apotek", "NAV"], "Mesai dışı acil durum: legevakt."),
    Q("\"Üç gündür hastayım.\"", ["Jeg har vært syk i tre dager.", "Jeg er syk i tre dager.", "Jeg var syk siden tre dager.", "Jeg blir syk tre dager."], "Hâlâ süren durum: har vært + i + süre."),
    Q("\"bestille time\" ne demek?", ["randevu almak", "saat satın almak", "zaman ayırmak"], "time burada randevu demektir."),
    Q("\"Kendimi kötü hissediyorum.\"", ["Jeg føler meg dårlig.", "Jeg føler dårlig.", "Jeg føler seg dårlig.", "Meg føler jeg dårlig."], "Dönüşlü fiil: jeg føler meg, han føler seg."),
    Q("\"henvisning\" ne demek?", ["başka doktora sevk", "reçete", "doktor raporu", "randevu"], "Hastaneye genellikle fastlege'nin henvisning'i ile gidilir.")
  ],
  review: ["fastlege → henvisning → sykehus; mesai dışı legevakt; hayati tehlikede 113.", "Süre: Jeg har hatt feber i tre dager.", "Jeg har vondt i ..., Jeg føler meg dårlig, bestille time."]
},
{
  id: "b1-it", title: "IT: bilgisayar ve yazılım", no: "IT: data og programvare", icon: "code",
  intro: "İş yerinde ve evde bilgisayar konuşmak: dosya, şifre, güncelleme, hata mesajı ve IT desteğinden yardım istemek.",
  notes: [
    { h: "Emir kipi", p: "Talimatlarda emir kipi kullanılır. Mastarın sonundaki -e düşer: å installere → Installer! å starte → Start! å laste ned → Last ned! Sonu tek heceli olanlarda değişmez: å gå → Gå!",
      table: [["Mastar", "Emir", "Türkçe"], ["å lagre", "Lagre filen!", "Dosyayı kaydet!"], ["å starte på nytt", "Start på nytt!", "Yeniden başlat!"], ["å laste ned", "Last ned appen!", "Uygulamayı indir!"]] },
    { h: "Çalışmıyor demek", p: "Det virker ikke. (Çalışmıyor.) Jeg får ikke logget inn. (Giriş yapamıyorum.) Jeg får en feilmelding. (Hata mesajı alıyorum.) få + ikke + partisip, \"yapamıyorum\" anlamında çok yaygındır." },
    { h: "Norveççede data", p: "data hem \"bilgi\" hem günlük dilde \"bilgisayar\" demektir: Jeg sitter på data. Resmî kelime datamaskin, taşınabilir olan bærbar PC'dir." }
  ],
  tip: "\"Şifre\" için kode değil, passord denir (kode kart şifresi veya PIN için kullanılabilir). Yazılımı kurmak installere, indirmek laste ned, yüklemek (internete göndermek) laste opp olur.",
  words: [
    N("en", "programvare", "programvaren", "programvarer", "yazılım", "", "Vi bruker ny programvare på jobben.", "İş yerinde yeni yazılım kullanıyoruz."),
    N("et", "passord", "passordet", "passord", "şifre", "", "Jeg har glemt passordet mitt.", "Şifremi unuttum."),
    N("en", "fil", "filen", "filer", "dosya", "", "Hvor lagret du filen?", "Dosyayı nereye kaydettin?"),
    N("en", "oppdatering", "oppdateringen", "oppdateringer", "güncelleme", "", "Oppdateringen tar ti minutter.", "Güncelleme on dakika sürüyor."),
    N("en", "feilmelding", "feilmeldingen", "feilmeldinger", "hata mesajı", "", "Jeg får en feilmelding på skjermen.", "Ekranda hata mesajı alıyorum."),
    N("en", "skjerm", "skjermen", "skjermer", "ekran", "", "Skjermen er helt svart.", "Ekran tamamen siyah."),
    N("et", "nettverk", "nettverket", "nettverk", "ağ (bilgisayar)", "", "Er du koblet til nettverket?", "Ağa bağlı mısın?"),
    N("en", "server", "serveren", "servere", "sunucu", "", "Serveren er nede akkurat nå.", "Sunucu şu anda çalışmıyor."),
    N("en", "database", "databasen", "databaser", "veri tabanı", "", "Kundene ligger i databasen.", "Müşteriler veri tabanında duruyor."),
    W("laste ned", "indirmek", "", "Du kan laste ned appen her.", "Uygulamayı buradan indirebilirsin."),
    W("installere", "kurmak (program)", "", "Jeg må installere programmet på nytt.", "Programı yeniden kurmam gerekiyor."),
    W("lagre", "kaydetmek", "", "Husk å lagre dokumentet.", "Belgeyi kaydetmeyi unutma."),
    W("logge inn", "giriş yapmak", "", "Jeg får ikke logget inn.", "Giriş yapamıyorum."),
    W("starte på nytt", "yeniden başlatmak", "", "Prøv å starte maskinen på nytt.", "Makineyi yeniden başlatmayı dene.")
  ],
  dialogue: [["A", "IT-support, hva er problemet?", "IT destek, sorun nedir?"], ["B", "Jeg får ikke logget inn. Jeg får en feilmelding.", "Giriş yapamıyorum. Hata mesajı alıyorum."], ["A", "Har du prøvd å starte maskinen på nytt?", "Makineyi yeniden başlatmayı denediniz mi?"], ["B", "Ja, men det virker ikke.", "Evet ama işe yaramıyor."], ["A", "Da må vi endre passordet ditt. Vent litt.", "O zaman şifrenizi değiştirmemiz gerekiyor. Bir dakika bekleyin."]],
  quiz: [
    Q("\"Dosyayı kaydet!\"", ["Lagre filen!", "Lagrer filen!", "Å lagre filen!", "Filen lagre!"], "Emir kipi: lagre filen. -r eklenmez."),
    Q("\"Giriş yapamıyorum.\"", ["Jeg får ikke logget inn.", "Jeg ikke får logge inn.", "Jeg kan ikke logget inn.", "Jeg logger ikke får inn."], "få + ikke + partisip: får ikke logget inn."),
    Q("\"laste ned\" ne demek?", ["indirmek", "yüklemek", "silmek", "kapatmak"], "laste ned = indirmek, laste opp = yüklemek."),
    Q("\"Şifremi unuttum.\"", ["Jeg har glemt passordet mitt.", "Jeg har glemt koden min av data.", "Jeg glemmer passordet meg."], "şifre = passord."),
    Q("\"Serveren er nede\" ne demek?", ["Sunucu çalışmıyor.", "Sunucu aşağı katta.", "Sunucu yeni."], "nede burada \"devre dışı\" anlamındadır.")
  ],
  review: ["Emir: Lagre! Start på nytt! Last ned!", "Jeg får ikke logget inn; Det virker ikke; Jeg får en feilmelding.", "programvare, passord, fil, oppdatering, server, database."]
}
];

const B2: LessonDef[] = [
{
  id: "b2-health", title: "Sağlık: hastalıklar ve tedavi", no: "Helse: sykdommer og behandling", icon: "health",
  intro: "Yaygın hastalıkların adları, teşhis ve tedavi konuşmak; doktorun anlattığını anlamak ve doğru sorular sormak.",
  notes: [
    { h: "Hastalık adları", p: "Çoğu hastalık adı artikelsiz kullanılır: Han har diabetes. Hun har astma. Jeg har høyt blodtrykk. Ani olaylarda artikel gelir: Han fikk et hjerteinfarkt. Hun fikk hjerneslag.",
      table: [["Norveççe", "Türkçe", "Kalıp"], ["diabetes", "şeker hastalığı", "ha diabetes"], ["høyt blodtrykk", "yüksek tansiyon", "ha høyt blodtrykk"], ["hjerteinfarkt", "kalp krizi", "få hjerteinfarkt"], ["hjerneslag", "felç, inme", "få hjerneslag"], ["kreft", "kanser", "få kreft"]] },
    { h: "Edilgen: bli", p: "Hastane anlatımında bli-passiv çok yaygındır: Han ble operert i går. (Dün ameliyat edildi.) Hun blir behandlet med antibiotika. (Antibiyotikle tedavi ediliyor.)" },
    { h: "Doktora sorular", p: "Hva er diagnosen? Finnes det bivirkninger? Hvor lenge varer behandlingen? Er sykdommen arvelig? Må jeg bli innlagt?" }
  ],
  tip: "Türkçedeki \"ameliyat oldum\" kalıbı Norveççede edilgendir: \"Jeg ble operert\". \"Jeg gjorde operasjon\" denirse ameliyatı senin yaptığın anlaşılır. \"Kalp krizi geçirdi\" de \"Han fikk hjerteinfarkt\" olur.",
  words: [
    N("en", "sykdom", "sykdommen", "sykdommer", "hastalık", "", "Sykdommen er ikke farlig.", "Hastalık tehlikeli değil."),
    N("en", "diagnose", "diagnosen", "diagnoser", "teşhis", "", "Legen stilte diagnosen raskt.", "Doktor teşhisi hızlıca koydu."),
    N("en", "behandling", "behandlingen", "behandlinger", "tedavi", "", "Behandlingen varer i seks måneder.", "Tedavi altı ay sürüyor."),
    N("en", "bivirkning", "bivirkningen", "bivirkninger", "yan etki", "", "Medisinen har få bivirkninger.", "İlacın az yan etkisi var."),
    N("en", "operasjon", "operasjonen", "operasjoner", "ameliyat", "", "Operasjonen gikk bra.", "Ameliyat iyi geçti."),
    W("bli operert", "ameliyat olmak", "", "Jeg skal bli operert i kneet.", "Dizimden ameliyat olacağım."),
    N("en", "infeksjon", "infeksjonen", "infeksjoner", "enfeksiyon", "", "Hun har en infeksjon i lungene.", "Akciğerlerinde enfeksiyon var."),
    W("høyt blodtrykk", "yüksek tansiyon", "", "Faren min har høyt blodtrykk.", "Babamın yüksek tansiyonu var."),
    W("diabetes", "şeker hastalığı", "", "Hun har hatt diabetes i mange år.", "Yıllardır şeker hastası."),
    N("et", "hjerteinfarkt", "hjerteinfarktet", "hjerteinfarkt", "kalp krizi", "", "Han fikk hjerteinfarkt på jobben.", "İş yerinde kalp krizi geçirdi."),
    N("et", "hjerneslag", "hjerneslaget", "hjerneslag", "inme, felç", "", "Hjerneslag krever rask hjelp.", "İnme hızlı yardım gerektirir."),
    W("kreft", "kanser", "", "Kreften ble oppdaget tidlig.", "Kanser erken fark edildi."),
    W("kronisk", "kronik", "", "Astma er en kronisk sykdom.", "Astım kronik bir hastalıktır."),
    W("arvelig", "kalıtsal", "", "Er denne sykdommen arvelig?", "Bu hastalık kalıtsal mı?"),
    W("bli frisk", "iyileşmek", "", "Du blir snart frisk igjen.", "Yakında yine iyileşeceksin.")
  ],
  dialogue: [["A", "Vi har fått svar på prøvene. Du har diabetes type 2.", "Tahlil sonuçları geldi. Tip 2 şeker hastalığınız var."], ["B", "Er det farlig? Må jeg bli innlagt?", "Tehlikeli mi? Hastaneye yatmam gerekiyor mu?"], ["A", "Nei, sykdommen er kronisk, men den kan behandles godt.", "Hayır, hastalık kronik ama iyi tedavi edilebilir."], ["B", "Har medisinen bivirkninger?", "İlacın yan etkileri var mı?"], ["A", "Noen får vondt i magen, men det går vanligvis over.", "Bazılarının karnı ağrır ama genellikle geçer."]],
  quiz: [
    Q("\"Dün ameliyat oldum.\"", ["Jeg ble operert i går.", "Jeg gjorde operasjon i går.", "Jeg opererte i går.", "Jeg har operasjon i går."], "Ameliyat olan edilgendir: ble operert."),
    Q("\"Babam kalp krizi geçirdi.\"", ["Faren min fikk hjerteinfarkt.", "Faren min passerte hjerteinfarkt.", "Faren min gjorde hjerteinfarkt."], "Ani hastalıklarla få kullanılır."),
    Q("\"bivirkning\" ne demek?", ["yan etki", "teşhis", "enfeksiyon", "iyileşme"], "bi- = yan, virkning = etki."),
    Q("\"Bu hastalık kalıtsal mı?\"", ["Er denne sykdommen arvelig?", "Er denne sykdom arvelig?", "Har denne sykdommen arv?"], "denne + belirli isim: denne sykdommen."),
    Q("Hangisi \"kronik\" bir hastalık için doğru?", ["Uzun süre devam eder.", "Birkaç günde geçer.", "Sadece çocuklarda görülür."], "kronisk = uzun süreli, sürekli.")
  ],
  review: ["ha diabetes / astma; få hjerteinfarkt / hjerneslag.", "bli-passiv: ble operert, blir behandlet.", "diagnose, behandling, bivirkning, kronisk, arvelig."]
},
{
  id: "b2-it", title: "IT: yazılım geliştirme", no: "IT: programvareutvikling", icon: "code",
  intro: "Yazılım ekibinde konuşmak: gereksinimler, test, kod incelemesi, sürüm. Norveççe teknik konuşmada İngilizce kelimelerin nasıl kullanıldığını da görüyoruz.",
  notes: [
    { h: "İngilizce kelimeler", p: "Norveç'te yazılımcılar pek çok İngilizce terimi aynen kullanır ve Norveççe çekimler: å deploye – deployer – deployet; å merge – merger – merget. Cinsiyet çoğunlukla en'dir: en bug, en pull request. Yazılı belgelerde Norveççe karşılığı tercih edilebilir: feil, kodegjennomgang.",
      table: [["Günlük", "Resmî", "Türkçe"], ["en bug", "en feil", "hata"], ["å deploye", "å rulle ut", "yayına almak"], ["code review", "kodegjennomgang", "kod incelemesi"]] },
    { h: "Durum bildirmek", p: "Bir iş bitince perfektum veya bli-passiv kullanılır: Jeg har fikset feilen. Feilen er rettet. Endringen ble rullet ut i går. Süren iş için holde på med: Jeg holder på med testene." },
    { h: "Yan cümlede ikke", p: "Yan cümlede ikke fiilden önce gelir: Testen feiler fordi databasen ikke svarer. (Veri tabanı yanıt vermediği için test başarısız oluyor.)" }
  ],
  tip: "Türkçedeki \"-iyor\" için Norveççede ayrı ek yoktur. \"Testleri yazıyorum\" derken süreci vurgulamak istersen \"Jeg holder på med å skrive testene\" de. Ve yan cümlede sıra değişir: \"fordi den ikke virker\", \"fordi den virker ikke\" değil.",
  words: [
    N("en", "utvikler", "utvikleren", "utviklere", "yazılım geliştirici", "", "Hun jobber som utvikler i Oslo.", "Oslo'da yazılım geliştirici olarak çalışıyor."),
    N("en", "kildekode", "kildekoden", "kildekoder", "kaynak kod", "", "Kildekoden ligger på GitHub.", "Kaynak kod GitHub'da duruyor."),
    N("et", "krav", "kravet", "krav", "gereksinim", "", "Kunden har endret kravene.", "Müşteri gereksinimleri değiştirdi."),
    N("en", "kodegjennomgang", "kodegjennomgangen", "kodegjennomganger", "kod incelemesi", "", "Vi gjør kodegjennomgang før vi slår sammen.", "Birleştirmeden önce kod incelemesi yapıyoruz."),
    N("en", "versjon", "versjonen", "versjoner", "sürüm", "", "Den nye versjonen kommer i mai.", "Yeni sürüm mayısta çıkıyor."),
    N("en", "versjonskontroll", "versjonskontrollen", "versjonskontroller", "sürüm kontrolü", "", "Vi bruker Git til versjonskontroll.", "Sürüm kontrolü için Git kullanıyoruz."),
    N("et", "brukergrensesnitt", "brukergrensesnittet", "brukergrensesnitt", "kullanıcı arayüzü", "", "Brukergrensesnittet må bli enklere.", "Kullanıcı arayüzü daha basit olmalı."),
    N("en", "lansering", "lanseringen", "lanseringer", "yayına çıkış", "", "Lanseringen er utsatt til neste uke.", "Yayına çıkış gelecek haftaya ertelendi."),
    N("en", "oppgave", "oppgaven", "oppgaver", "görev", "", "Jeg tar den neste oppgaven.", "Bir sonraki görevi ben alıyorum."),
    W("rulle ut", "yayına almak", "", "Vi ruller ut endringen i kveld.", "Değişikliği bu akşam yayına alıyoruz."),
    W("rette en feil", "hata düzeltmek", "", "Hun rettet feilen på en time.", "Hatayı bir saatte düzeltti."),
    W("slå sammen", "birleştirmek (kod)", "", "Kan du slå sammen koden min?", "Kodumu birleştirebilir misin?"),
    W("holde på med", "... ile uğraşmak, yapmakta olmak", "", "Jeg holder på med testene nå.", "Şu anda testlerle uğraşıyorum."),
    W("feile", "başarısız olmak (test)", "", "To av testene feiler.", "Testlerden ikisi başarısız oluyor."),
    W("frist", "son tarih (teslim)", "", "Klarer vi fristen på fredag?", "Cumaki son tarihe yetişebilir miyiz?", { g: "en", def: "fristen", pl: "frister" })
  ],
  dialogue: [["A", "Hvordan går det med oppgaven din?", "Görevin nasıl gidiyor?"], ["B", "Jeg holder på med testene, men to av dem feiler.", "Testlerle uğraşıyorum ama ikisi başarısız oluyor."], ["A", "Hvorfor det?", "Neden?"], ["B", "Fordi databasen ikke svarer i testmiljøet.", "Çünkü veri tabanı test ortamında yanıt vermiyor."], ["A", "Klarer vi å rulle ut i kveld?", "Bu akşam yayına alabilir miyiz?"], ["B", "Ja, hvis kodegjennomgangen er ferdig før fire.", "Evet, kod incelemesi dörtten önce biterse."]],
  quiz: [
    Q("\"Çalışmadığı için\" (yan cümle)", ["fordi den ikke virker", "fordi den virker ikke", "fordi ikke den virker", "fordi virker den ikke"], "Yan cümlede ikke fiilden önce gelir."),
    Q("\"Şu anda testlerle uğraşıyorum.\"", ["Jeg holder på med testene nå.", "Jeg holder testene nå på.", "Jeg er holdende testene.", "Jeg gjør på testene med."], "holde på med = yapmakta olmak."),
    Q("\"rulle ut\" ne demek?", ["yayına almak", "silmek", "test etmek", "indirmek"], "rulle ut = deploy etmek, yayına almak."),
    Q("\"Hata düzeltildi.\" (resmî)", ["Feilen er rettet.", "Feilen er rette.", "Feilen retter.", "Feilen har rettet."], "er + partisip: durum bildirir."),
    Q("Bir ekipte \"en bug\" demek için ne söylenebilir?", ["Günlük dilde normaldir; yazıda feil de kullanılır.", "Norveççede hiç kullanılmaz.", "Sadece et bug doğrudur."], "İngilizce terimler yaygındır, resmî karşılık feil.")
  ],
  review: ["Jeg holder på med ...; Feilen er rettet; Endringen ble rullet ut.", "Yan cümle: fordi den ikke virker.", "krav, kodegjennomgang, versjonskontroll, lansering, rulle ut."]
}
];

const C1: LessonDef[] = [
{
  id: "c1-health", title: "Sağlık: hastane ve tıp dili", no: "Helse: sykehusspråk", icon: "health",
  intro: "Hastanede yatış, taburcu, hasta hakları ve tıbbi raporların dili. Epikriz okumak ve yakın olarak doktorla konuşmak için.",
  notes: [
    { h: "Rapor dili", p: "Tıbbi metinlerde özne çoğu kez düşer, edilgen ve isimleşmiş yapı kullanılır: Pasienten ble innlagt med brystsmerter. (Hasta göğüs ağrısıyla yatırıldı.) Det ble besluttet å operere. (Ameliyat kararı alındı.) Innleggelse skjedde via legevakten. (Yatış nöbetçi doktor üzerinden gerçekleşti.)" },
    { h: "Hasta hakları", p: "Norveç'te pasient- og brukerrettighetsloven hastaya bilgi alma ve tedaviye onay verme hakkı tanır. Sağlık personelinin taushetsplikt'i (sır saklama yükümlülüğü) vardır; bilgi ancak hastanın izniyle pårørende'ye verilir." },
    { h: "Olasılığı yumuşatmak", p: "Doktorlar kesin konuşmaktan kaçınır: Det er sannsynlig at ... (... olması muhtemel), Vi kan ikke utelukke ... (... ihtimalini dışlayamayız), Prognosen er usikker. (Seyri belirsiz.) Svulsten viser seg å være godartet. (Tümörün iyi huylu olduğu görülüyor.)" }
  ],
  tip: "\"pårørende\" tek kelimeyle hem tekil hem çoğul kullanılır ve Türkçedeki \"hasta yakını\" demektir; \"slektning\" ise sadece akraba. Hasta yakının akraba olmayabilir. \"Taburcu olmak\" da edilgendir: \"bli utskrevet\".",
  words: [
    N("en", "overlege", "overlegen", "overleger", "sorumlu uzman hekim", "", "Overlegen går visitt klokka ni.", "Uzman hekim saat dokuzda vizite çıkıyor."),
    N("en", "sengepost", "sengeposten", "sengeposter", "yatan hasta servisi", "", "Hun ble flyttet til en annen sengepost.", "Başka bir servise taşındı."),
    N("en", "innleggelse", "innleggelsen", "innleggelser", "hastaneye yatış", "", "Innleggelsen varte i fem dager.", "Yatış beş gün sürdü."),
    W("bli utskrevet", "taburcu olmak", "", "Pasienten blir utskrevet i morgen.", "Hasta yarın taburcu oluyor."),
    N("en", "epikrise", "epikrisen", "epikriser", "taburcu raporu, epikriz", "", "Fastlegen får epikrisen etter utskrivning.", "Aile hekimi taburcudan sonra epikrizi alır."),
    N("et", "samtykke", "samtykket", "samtykker", "onam, rıza", "", "Operasjonen krever skriftlig samtykke.", "Ameliyat yazılı onam gerektirir."),
    N("en", "prognose", "prognosen", "prognoser", "hastalığın beklenen seyri", "", "Prognosen er god.", "Beklenen seyir iyi."),
    W("pårørende", "hasta yakını", "", "Pårørende kan ringe sengeposten.", "Hasta yakınları servisi arayabilir."),
    N("en", "taushetsplikt", "taushetsplikten", "", "sır saklama yükümlülüğü", "", "Legen har taushetsplikt.", "Doktorun sır saklama yükümlülüğü var."),
    W("godartet", "iyi huylu", "", "Svulsten var heldigvis godartet.", "Tümör neyse ki iyi huyluydu."),
    W("ondartet", "kötü huylu", "", "Prøven viser en ondartet svulst.", "Örnek kötü huylu bir tümör gösteriyor."),
    N("en", "svulst", "svulsten", "svulster", "tümör", "", "Svulsten må fjernes.", "Tümörün çıkarılması gerekiyor."),
    N("en", "oppfølging", "oppfølgingen", "oppfølginger", "kontrol, takip", "", "Du trenger oppfølging hos fastlegen.", "Aile hekiminde takibe ihtiyacın var."),
    W("lindrende behandling", "palyatif bakım", "", "Pasienten får lindrende behandling.", "Hasta palyatif bakım alıyor."),
    W("utelukke", "dışlamak (olasılık)", "", "Vi kan ikke utelukke infeksjon.", "Enfeksiyon ihtimalini dışlayamayız.")
  ],
  dialogue: [["A", "Jeg er datteren til pasienten. Kan du si noe om prognosen?", "Hastanın kızıyım. Beklenen seyir hakkında bir şey söyleyebilir misiniz?"], ["B", "Faren din har gitt samtykke, så jeg kan snakke med deg.", "Babanız onay verdi, bu yüzden sizinle konuşabilirim."], ["B", "Svulsten viste seg å være godartet, men vi kan ikke utelukke komplikasjoner.", "Tümörün iyi huylu olduğu görüldü, ancak komplikasyonları dışlayamayız."], ["A", "Når blir han utskrevet?", "Ne zaman taburcu olacak?"], ["B", "Trolig på fredag. Fastlegen får epikrisen og står for oppfølgingen.", "Muhtemelen cuma günü. Aile hekimi epikrizi alacak ve takibi yapacak."]],
  quiz: [
    Q("Doktor neden bilgi vermeden önce onay ister?", ["Taushetsplikt: bilgi hastanın izniyle paylaşılır.", "Hastane ücret aldığı için.", "Yakınların bilgi alması yasak olduğu için."], "taushetsplikt = sır saklama yükümlülüğü."),
    Q("\"Hasta yarın taburcu oluyor.\"", ["Pasienten blir utskrevet i morgen.", "Pasienten utskriver i morgen.", "Pasienten taburkulerer i morgen.", "Pasienten skriver ut i morgen."], "bli utskrevet: edilgen."),
    Q("\"godartet\" kelimesinin zıttı?", ["ondartet", "arvelig", "kronisk", "lindrende"], "godartet = iyi huylu; ondartet = kötü huylu."),
    Q("Rapor üslubuna en uygun cümle hangisi?", ["Pasienten ble innlagt med brystsmerter.", "Han hadde så vondt, så han dro inn.", "Vi tok ham inn fordi det var ille."], "Rapor dili: edilgen ve tarafsız."),
    Q("\"Vi kan ikke utelukke infeksjon.\"", ["Enfeksiyon ihtimalini dışlayamayız.", "Enfeksiyon kesinlikle var.", "Enfeksiyon tedavi edilemez."], "utelukke = bir olasılığı dışlamak.")
  ],
  review: ["Rapor dili: Pasienten ble innlagt ...; Det ble besluttet ...", "innleggelse → behandling → utskrivning → epikrise → oppfølging.", "samtykke, taushetsplikt, pårørende, prognose, godartet/ondartet."]
},
{
  id: "c1-it", title: "IT: mimari ve güvenlik", no: "IT: arkitektur og sikkerhet", icon: "code",
  intro: "Teknik kararları tartışmak: mimari, teknik borç, güvenlik açıkları, kesintiler ve Norveç'te önemli olan kişisel veri koruması.",
  notes: [
    { h: "Teknik karar savunmak", p: "Bir kararı gerekçelendirirken: Avveiningen er at ... (Ödünleşim şu ki ...). Fordelen veier opp for ulempen. (Avantaj dezavantajı dengeliyor.) På sikt lønner det seg. (Uzun vadede karşılığını verir.) Det forutsetter at ... (... şartıyla geçerli.)" },
    { h: "Kesinti raporu", p: "Olay sonrası değerlendirme tarafsız ve edilgen yazılır; kişi suçlanmaz: Nedetiden skyldtes en feilkonfigurasjon. (Kesinti hatalı yapılandırmadan kaynaklandı.) Rotårsaken ble identifisert. (Kök neden belirlendi.) Tiltak er iverksatt. (Önlem alındı.)" },
    { h: "Personvern", p: "Norveç GDPR'ye tabidir; denetleyen kurum Datatilsynet'tir. Kişisel veri (personopplysninger) ihlali 72 saat içinde bildirilmelidir. personvern = gizlilik ve kişisel verilerin korunması." }
  ],
  tip: "\"skyldes\" (kaynaklanmak) yapısına dikkat: \"Feilen skyldes X\". \"på grunn av\" ile karıştırma; \"Feilen er på grunn av X\" de doğru ama resmî raporda skyldes daha yerleşiktir. Ayrıca \"sikkerhet\" hem güvenlik hem emniyet anlamına gelir.",
  words: [
    N("en", "arkitektur", "arkitekturen", "arkitekturer", "mimari", "", "Arkitekturen må tåle mer trafikk.", "Mimari daha fazla trafiği karşılamalı."),
    W("skalerbar", "ölçeklenebilir", "", "Løsningen er lett skalerbar.", "Çözüm kolayca ölçeklenebilir."),
    W("teknisk gjeld", "teknik borç", "", "Vi må betale ned teknisk gjeld.", "Teknik borcu azaltmamız gerekiyor."),
    W("refaktorere", "kodu yeniden düzenlemek", "", "Vi refaktorerer modulen før lansering.", "Yayından önce modülü yeniden düzenliyoruz."),
    N("en", "avveining", "avveiningen", "avveininger", "ödünleşim", "", "Dette er en avveining mellom pris og ytelse.", "Bu fiyat ile performans arasında bir ödünleşim."),
    N("en", "sårbarhet", "sårbarheten", "sårbarheter", "güvenlik açığı", "", "Vi fant en alvorlig sårbarhet.", "Ciddi bir güvenlik açığı bulduk."),
    N("en", "kryptering", "krypteringen", "krypteringer", "şifreleme", "", "All trafikk bruker kryptering.", "Tüm trafik şifreleme kullanıyor."),
    N("en", "nedetid", "nedetiden", "", "kesinti süresi", "", "Nedetiden varte i to timer.", "Kesinti iki saat sürdü."),
    N("en", "rotårsak", "rotårsaken", "rotårsaker", "kök neden", "", "Rotårsaken er fortsatt ukjent.", "Kök neden hâlâ bilinmiyor."),
    N("en", "responstid", "responstiden", "responstider", "yanıt süresi", "", "Responstiden økte under lasten.", "Yük altında yanıt süresi arttı."),
    N("en", "tilgangskontroll", "tilgangskontrollen", "tilgangskontroller", "erişim denetimi", "", "Tilgangskontrollen må strammes inn.", "Erişim denetimi sıkılaştırılmalı."),
    N("en", "sikkerhetskopi", "sikkerhetskopien", "sikkerhetskopier", "yedek (veri)", "", "Vi tar sikkerhetskopi hver natt.", "Her gece yedek alıyoruz."),
    N("et", "personvern", "personvernet", "", "kişisel veri koruması", "", "Personvern må vurderes fra starten.", "Kişisel veri koruması baştan değerlendirilmeli."),
    N("et", "avvik", "avviket", "avvik", "olay, sapma (bildirilen)", "", "Vi meldte avviket til Datatilsynet.", "Olayı Datatilsynet'e bildirdik."),
    W("skyldes", "-den kaynaklanmak", "", "Feilen skyldes en gammel versjon.", "Hata eski bir sürümden kaynaklanıyor.")
  ],
  dialogue: [["A", "Hva skyldtes nedetiden i natt?", "Dün geceki kesinti neden kaynaklandı?"], ["B", "Rotårsaken var en feilkonfigurasjon. Tiltak er allerede iverksatt.", "Kök neden hatalı yapılandırmaydı. Önlemler alındı bile."], ["A", "Ble personopplysninger berørt?", "Kişisel veriler etkilendi mi?"], ["B", "Nei, alt er kryptert, og sikkerhetskopien er intakt.", "Hayır, hepsi şifreli ve yedek sağlam."], ["A", "Bra. Men vi bør refaktorere modulen på sikt. Den tekniske gjelden vokser.", "İyi. Ama uzun vadede modülü yeniden düzenlemeliyiz. Teknik borç büyüyor."]],
  quiz: [
    Q("\"Hata eski bir sürümden kaynaklanıyor.\"", ["Feilen skyldes en gammel versjon.", "Feilen skylder en gammel versjon.", "Feilen kommer fra å være gammel versjon.", "Feilen er skyld gammel versjon."], "skyldes + neden."),
    Q("Olay raporuna en uygun cümle hangisi?", ["Rotårsaken ble identifisert, og tiltak er iverksatt.", "Ola gjorde en dum feil.", "Noen rotet til alt i natt."], "Rapor tarafsız olur ve kişiyi suçlamaz."),
    Q("\"sårbarhet\" ne demek?", ["güvenlik açığı", "şifreleme", "yedek", "yanıt süresi"], "sårbar = kırılgan; sårbarhet = güvenlik açığı."),
    Q("\"På sikt lønner det seg.\"", ["Uzun vadede karşılığını verir.", "Şimdi çok pahalı.", "Kısa sürede biter."], "på sikt = uzun vadede; lønne seg = değmek."),
    Q("Norveç'te kişisel veri ihlalleri hangi kuruma bildirilir?", ["Datatilsynet", "NAV", "Skatteetaten", "Legevakten"], "Datatilsynet kişisel verileri denetleyen kurumdur.")
  ],
  review: ["Avveiningen er at ...; Fordelen veier opp for ulempen.", "Rapor: skyldes, rotårsak, tiltak er iverksatt.", "sårbarhet, kryptering, personvern, teknisk gjeld, skalerbar."]
}
];

export default [...asExtra("B1", B1), ...asExtra("B2", B2), ...asExtra("C1", C1)];
