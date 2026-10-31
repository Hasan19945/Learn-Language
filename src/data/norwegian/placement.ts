import { Q } from "../helpers";
import type { CourseDef } from "../../types";

export const placement: CourseDef["placement"] = {
  A0: [
    Q("\"Teşekkürler\" Norveççe nasıl söylenir?", ["takk", "hei", "unnskyld", "ja"], "takk = teşekkürler."),
    Q("\"Jeg ___ student.\"", ["er", "har", "bor", "heter"], "er = -dir (olmak): Jeg er student."),
    Q("\"Hvor kommer du fra?\" ne demek?", ["Nerelisin?", "Nerede oturuyorsun?", "Nasılsın?", "Adın ne?"], "Hvor ... fra = nereden."),
    Q("\"o (kadın)\" hangisi?", ["hun", "han", "de", "du"], "hun = o (kadın), han = o (erkek)."),
    Q("\"et hus\" kelimesinin belirli hali?", ["huset", "husen", "hus", "husa"], "et-kelimeleri belirli halde -et alır."),
    Q("\"Anlamıyorum.\"", ["Jeg forstår ikke.", "Jeg ikke forstår.", "Ikke jeg forstår.", "Jeg forstår nei."], "ikke fiilden sonra gelir."),
    Q("8 sayısı hangisi?", ["åtte", "atten", "otte", "seks"], "8 = åtte."),
    Q("\"Bugün çalışıyorum.\" (i dag ile başla)", ["I dag jobber jeg.", "I dag jeg jobber.", "Jobber i dag jeg.", "I dag jobbe jeg."], "Fiil ikinci sırada: I dag jobber jeg.")
  ],
  A1: [
    Q("\"halv fire\" saat kaçtır?", ["3:30", "4:30", "4:15", "3:45"], "halv fire = dörde yarım var = 3:30."),
    Q("\"benim babam\"", ["faren min", "min far min", "faren mitt", "far min"], "İyelik belirli isimden sonra: faren min."),
    Q("\"et stort hus\" — çoğul?", ["store hus", "stort hus", "stor hus", "storer hus"], "Çoğulda sıfat -e alır: store hus."),
    Q("\"Otobüse binmem lazım.\"", ["Jeg må ta bussen.", "Jeg må tar bussen.", "Jeg må gå bussen.", "Jeg tar må bussen."], "må + mastar; taşıta binmek = ta."),
    Q("\"Okumayı severim.\"", ["Jeg liker å lese.", "Jeg liker lese.", "Jeg liker leser.", "Jeg å liker lese."], "liker å + mastar."),
    Q("57 sayısı?", ["femtisju", "syttifem", "femogsytti", "femtiseks"], "Önce onlar: femti + sju."),
    Q("\"Det regner.\" ne demek?", ["Yağmur yağıyor.", "Kar yağıyor.", "Hava soğuk.", "Güneşli."], "regne = yağmur yağmak."),
    Q("\"Mutfakta\"", ["på kjøkkenet", "i kjøkkenet", "til kjøkkenet", "ved kjøkken"], "Mutfak ve banyo için på: på kjøkkenet.")
  ],
  A2: [
    Q("\"Dün sinemaya gittim.\"", ["I går gikk jeg på kino.", "I går jeg gikk på kino.", "I går går jeg på kino.", "I går har jeg gått på kino."], "Belirli geçmiş: preteritum (gikk); fiil ikinci sırada."),
    Q("\"Üç yıldır Norveç'te yaşıyorum.\"", ["Jeg har bodd i Norge i tre år.", "Jeg bor i Norge i tre år.", "Jeg bodde i Norge for tre år.", "Jeg har bo i Norge tre år."], "Süren durum: perfektum + i + süre."),
    Q("\"... çünkü vaktim yok.\"", ["fordi jeg ikke har tid", "fordi jeg har ikke tid", "fordi har jeg ikke tid", "fordi ikke har jeg tid"], "Yan cümlede ikke fiilden önce."),
    Q("\"Jeg har vondt i hodet.\" ne demek?", ["Başım ağrıyor.", "Başımı vurdum.", "Kafam karıştı.", "Hastayım."], "ha vondt i = ... ağrımak."),
    Q("Tahmin: \"Yağmur yağacak.\"", ["Det kommer til å regne.", "Det vil regne.", "Det skal regner.", "Det har regnet."], "Tahmin için kommer til å."),
    Q("\"se\" fiilinin perfektum biçimi?", ["har sett", "har så", "har sedd", "har seet"], "se – så – har sett."),
    Q("\"Acaba daire boş mu?\"", ["Jeg lurer på om leiligheten er ledig.", "Jeg lurer på er leiligheten ledig.", "Jeg lurer om leiligheten ledig er.", "Jeg lurer på at leiligheten ledig."], "Dolaylı evet/hayır sorusu: om + özne + fiil."),
    Q("\"bestille time hos legen\" ne demek?", ["doktordan randevu almak", "doktorda bir saat beklemek", "doktora saat sormak", "doktoru aramak"], "time = randevu.")
  ],
  B1: [
    Q("\"Formun cumaya kadar gönderilmesi gerekiyor.\"", ["Skjemaet må sendes innen fredag.", "Skjemaet må sender innen fredag.", "Skjemaet må sendt innen fredag.", "Skjemaet sendes må innen fredag."], "Yardımcı fiil + s-passiv: må sendes."),
    Q("Filmi izledin ve beğendin:", ["Jeg synes filmen var bra.", "Jeg tror filmen var bra.", "Jeg mener filmen bra.", "Jeg tenker filmen var bra."], "Deneyime dayalı görüş: synes."),
    Q("\"Norveç'e geldiğimde Norveççe bilmiyordum.\"", ["Da jeg kom til Norge, kunne jeg ikke norsk.", "Når jeg kom til Norge, kunne jeg ikke norsk.", "Da jeg kom til Norge, jeg kunne ikke norsk.", "Da kom jeg til Norge, kunne jeg ikke norsk."], "Geçmişte bir kez: da. Ana cümlede fiil önce."),
    Q("\"başvurduğum iş\"", ["jobben jeg søkte på", "jobben på jeg søkte", "jeg søkte jobben på", "på jobben jeg søkte"], "İlgi cümlesi isimden sonra, edat sonda."),
    Q("\"Giriş yapmak için BankID gerekiyor.\"", ["Du trenger BankID for å logge inn.", "Du trenger BankID for logge inn.", "Du trenger BankID å for logge inn.", "Du trenger BankID til logge inn."], "Amaç: for å + mastar."),
    Q("\"Vardığımda tren çoktan gitmişti.\"", ["Da jeg kom, hadde toget allerede gått.", "Da jeg kom, har toget allerede gått.", "Da jeg kom, toget hadde allerede gått.", "Da jeg kom, gikk toget allerede hadde."], "hadde + partisip; ana cümlede fiil önce."),
    Q("god → daha iyi?", ["bedre", "godere", "mer god", "best"], "god – bedre – best."),
    Q("\"vedtak\" ne demek?", ["resmî karar", "başvuru", "son tarih", "form"], "vedtak = resmî karar.")
  ],
  B2: [
    Q("\"Bu yüzden trene biniyorum.\"", ["Derfor tar jeg toget.", "Derfor jeg tar toget.", "Derfor toget tar jeg.", "Jeg derfor tar toget."], "Zarf başta: fiil ikinci sırada."),
    Q("\"Soğuk olmasına rağmen Norveç'i seviyorum.\"", ["Jeg liker Norge selv om det er kaldt.", "Jeg liker Norge likevel det er kaldt.", "Jeg liker Norge derimot det er kaldt.", "Jeg liker Norge selv om er det kaldt."], "selv om yan cümle başlatır: özne + fiil."),
    Q("\"Jeg er syk.\" → Hun sa ...", ["at hun var syk", "at hun er syk var", "om hun var syk", "at var hun syk"], "Dolaylı anlatım: sa → var."),
    Q("\"ha is i magen\" ne demek?", ["soğukkanlı kalmak", "midesi ağrımak", "üşümek", "aç olmak"], "ha is i magen = sakin, soğukkanlı olmak."),
    Q("\"Onu öğrendim.\" (det = onu)", ["Jeg fant det ut.", "Jeg fant ut det.", "Jeg ut fant det.", "Jeg det fant ut."], "Zamir nesne edattan önce: fant det ut."),
    Q("\"Du kommer vel?\" ne ifade eder?", ["Geliyorsun, değil mi?", "Kesin gel!", "Gelmiyorsun.", "Nasıl geliyorsun?"], "vel onay bekleyen soru yapar."),
    Q("Resmî e-postada \"Ekte ... bulunmaktadır\":", ["Vedlagt følger ...", "Viser til ...", "Med vennlig hilsen ...", "Ta gjerne kontakt ..."], "Vedlagt følger = ekte sunulmuştur."),
    Q("\"sykemelding\" nedir?", ["doktorun verdiği hastalık raporu", "kendi beyanınla hastalık izni", "işten çıkarma bildirimi", "hastane randevusu"], "sykemelding = doktor raporu; egenmelding = kendi beyanın.")
  ],
  C1: [
    Q("\"Kimin geldiğini bilmiyorum.\"", ["Jeg vet ikke hvem som kommer.", "Jeg vet ikke hvem kommer.", "Jeg vet ikke hvem kommer som.", "Jeg vet ikke som hvem kommer."], "Soru kelimesi yan cümlenin öznesiyse som gerekir."),
    Q("\"Bilseydim gelirdim.\"", ["Hadde jeg visst det, hadde jeg kommet.", "Hvis jeg vet det, kommer jeg.", "Hadde jeg visst det, jeg hadde kommet.", "Visste jeg det, kommer jeg."], "Geçmişte gerçek dışı: Hadde jeg visst, hadde jeg kommet."),
    Q("\"Jo mer jeg leser, desto mer ___.\"", ["forstår jeg", "jeg forstår", "forstå jeg", "jeg forstå"], "desto'dan sonra fiil önce gelir."),
    Q("\"Prosjektet ble rodd i land.\" ne demek?", ["Proje başarıyla tamamlandı.", "Proje suya düştü.", "Proje karaya taşındı.", "Proje ertelendi."], "ro i land = bir işi başarıyla bitirmek."),
    Q("\"Resultatene viser imidlertid ...\" — imidlertid ne demek?", ["ancak, bununla birlikte", "dolayısıyla", "örneğin", "kesinlikle"], "imidlertid = ancak; følgelig = dolayısıyla."),
    Q("Nynorsk \"Eg veit ikkje.\" Bokmål'da?", ["Jeg vet ikke.", "Jeg vil ikke.", "Jeg var ikke.", "Jeg ser ikke."], "eg = jeg, veit = vet, ikkje = ikke."),
    Q("\"Det er ugler i mosen.\"", ["İşin içinde bir bit yeniği var.", "Ormanda kuş var.", "Her şey yolunda.", "Hava değişiyor."], "Yosunda baykuşlar var = bir terslik var."),
    Q("\"Du burde ha sagt det.\" ne ifade eder?", ["Söylemeliydin (eleştiri).", "Söyleyebilirsin.", "Söyleyeceksin.", "Söyledin."], "burde ha + partisip = -meliydi.")
  ]
};
