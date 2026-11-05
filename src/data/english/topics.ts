import { Q, W, asExtra } from "../helpers";
import type { LessonDef } from "../../types";
import { itStory } from "./itStories";

const B1: LessonDef[] = [
{
  id: "en-b1-health", title: "Sağlık: hastane ve doktor", no: "Health: doctors and hospitals", icon: "health",
  intro: "Doktordan randevu almak, şikâyetini anlatmak ve hastanede yolunu bulmak. İngiltere'deki sağlık terimlerini de öğreniyoruz.",
  notes: [
    { h: "Nereye gidilir?", p: "İngiltere'de önce GP'ye (aile hekimi) gidilir; hastaneye genellikle onun sevkiyle (referral) gidersin. Çok acil durumda A&E'ye (acil servis) gidilir veya 999 aranır. ABD'de acil servise ER, acil numarasına 911 denir.",
      table: [["Durum", "İngiltere", "ABD"], ["Aile hekimi", "GP", "family doctor"], ["Acil servis", "A&E", "ER"], ["Acil numara", "999", "911"], ["Eczane", "chemist's / pharmacy", "drugstore / pharmacy"]] },
    { h: "for ve since", p: "Hâlâ süren şikâyet için present perfect kullanılır: I've had a headache since Monday. (Pazartesiden beri başım ağrıyor.) I've had a cough for three days. (Üç gündür öksürüyorum.) for + süre, since + başlangıç." },
    { h: "Ağrı kalıpları", p: "have + a + ağrı: I have a headache, a sore throat, a temperature. Vücut bölümüyle: My back hurts. / I have a pain in my chest." }
  ],
  tip: "Türkçede \"Üç gündür hastayım\" şimdiki zamanla söylenir, bu yüzden \"I am ill for three days\" hatası yapılır. Doğrusu: \"I have been ill for three days\". Ayrıca \"I have headache\" değil, \"I have a headache\" denir.",
  words: [
    W("GP", "aile hekimi", "", "I need to see my GP.", "Aile hekimimi görmem gerekiyor."),
    W("A&E", "acil servis", "", "They took him to A&E.", "Onu acil servise götürdüler.", { tts: "A and E", note: "Accident and Emergency" }),
    W("make an appointment", "randevu almak", "", "I'd like to make an appointment.", "Randevu almak istiyorum."),
    W("referral", "sevk", "", "My GP gave me a referral.", "Aile hekimim bana sevk verdi."),
    W("prescription", "reçete", "", "You need a prescription for this.", "Bunun için reçete gerekiyor."),
    W("symptom", "belirti", "", "What are your symptoms?", "Belirtileriniz neler?"),
    W("a sore throat", "boğaz ağrısı", "", "I have a sore throat.", "Boğazım ağrıyor."),
    W("a temperature", "ateş", "", "My son has a temperature.", "Oğlumun ateşi var."),
    W("blood test", "kan tahlili", "", "You need a blood test.", "Kan tahlili yaptırmanız gerekiyor."),
    W("X-ray", "röntgen", "", "The X-ray shows a broken bone.", "Röntgen kırık bir kemik gösteriyor."),
    W("examine", "muayene etmek", "", "The doctor examined my leg.", "Doktor bacağımı muayene etti."),
    W("sick note", "doktor raporu", "", "My employer needs a sick note.", "İşverenim doktor raporu istiyor."),
    W("ambulance", "ambulans", "", "Please call an ambulance!", "Lütfen ambulans çağırın!"),
    W("hurt", "ağrımak, acımak", "", "My back hurts.", "Sırtım ağrıyor.", { note: "V2/V3: hurt" })
  ],
  dialogue: [["A", "Good morning. What seems to be the problem?", "Günaydın. Sorun nedir?"], ["B", "I've had a sore throat for a week, and I have a temperature.", "Bir haftadır boğazım ağrıyor ve ateşim var."], ["A", "Let me examine you. Open your mouth, please.", "Sizi muayene edeyim. Ağzınızı açın, lütfen."], ["B", "Do I need a blood test?", "Kan tahlili gerekiyor mu?"], ["A", "No, it's an infection. I'll give you a prescription.", "Hayır, bu bir enfeksiyon. Size reçete vereceğim."]],
  quiz: [
    Q("\"Üç gündür hastayım.\"", ["I have been ill for three days.", "I am ill for three days.", "I am ill since three days.", "I was ill for three days now."], "Hâlâ süren durum: present perfect + for."),
    Q("\"Pazartesiden beri başım ağrıyor.\"", ["I've had a headache since Monday.", "I have headache since Monday.", "I've had a headache for Monday.", "My head has a pain from Monday."], "since + başlangıç; headache a alır."),
    Q("İngiltere'de acil servis nasıl yazılır?", ["A&E", "GP", "ER", "NHS"], "A&E = Accident and Emergency. ABD'de ER."),
    Q("\"referral\" ne demek?", ["sevk", "reçete", "muayene", "rapor"], "referral = başka doktora veya hastaneye sevk."),
    Q("Hangisi doğru?", ["My back hurts.", "My back is hurt me.", "I hurt my back now pain.", "My back hurting me."], "Vücut bölümü + hurts.")
  ],
  review: ["GP → referral → hospital; çok acilse A&E / 999.", "I've had ... for / since ...: hâlâ süren şikâyet.", "have a headache / sore throat / temperature."]
},
{
  id: "en-b1-it", title: "IT: bilgisayar ve yazılım", no: "IT: computers and software", icon: "code", story: itStory("b1", "tr"),
  intro: "Bilgisayar sorunlarını anlatmak, IT desteğinden yardım istemek ve temel yazılım kelimelerini öğrenmek.",
  notes: [
    { h: "Emir kipi", p: "Talimatlar fiilin yalın haliyle verilir: Click the button. Save the file. Olumsuzu: Don't close the window. Nazik istekte: Could you restart it, please?" },
    { h: "Fiil mi, isim mi?", p: "İki kelimelik fiil, bitişik yazılınca isim olur: log in (giriş yapmak) ↔ login (giriş bilgisi); back up (yedeklemek) ↔ backup (yedek); set up (kurmak) ↔ setup (kurulum).",
      table: [["Fiil", "İsim", "Örnek"], ["log in", "login", "I can't log in. / Your login is wrong."], ["back up", "backup", "Back up your files. / Make a backup."], ["set up", "setup", "Set up the app. / The setup is easy."]] },
    { h: "Çalışmıyor demek", p: "It doesn't work. / It isn't working. I keep getting an error message. (Sürekli hata mesajı alıyorum.) keep + -ing, tekrarlanan sorun için kullanılır." }
  ],
  tip: "Türkçedeki \"yüklemek\" iki farklı fiile denk gelir: programı bilgisayara kurmak install, internetten indirmek download, internete göndermek upload. \"Bilgisayarı açmak\" da \"open\" değil, \"turn on\" olur.",
  words: [
    W("software", "yazılım", "", "We use new software at work.", "İşte yeni yazılım kullanıyoruz.", { note: "sayılamaz: softwares denmez" }),
    W("password", "şifre", "", "I forgot my password.", "Şifremi unuttum."),
    W("file", "dosya", "", "Where did you save the file?", "Dosyayı nereye kaydettin?"),
    W("update", "güncelleme; güncellemek", "", "The update takes ten minutes.", "Güncelleme on dakika sürüyor."),
    W("error message", "hata mesajı", "", "I keep getting an error message.", "Sürekli hata mesajı alıyorum."),
    W("screen", "ekran", "", "The screen is completely black.", "Ekran tamamen siyah."),
    W("network", "ağ", "", "Are you connected to the network?", "Ağa bağlı mısın?"),
    W("server", "sunucu", "", "The server is down right now.", "Sunucu şu anda çalışmıyor."),
    W("database", "veri tabanı", "", "Customer data is stored in a database.", "Müşteri verileri veri tabanında saklanıyor."),
    W("download", "indirmek", "", "You can download the app here.", "Uygulamayı buradan indirebilirsin."),
    W("install", "kurmak (program)", "", "I need to install the program again.", "Programı yeniden kurmam gerekiyor."),
    W("save", "kaydetmek", "", "Don't forget to save your work.", "Çalışmanı kaydetmeyi unutma."),
    W("log in", "giriş yapmak", "", "I can't log in to my account.", "Hesabıma giriş yapamıyorum."),
    W("restart", "yeniden başlatmak", "", "Try to restart your computer.", "Bilgisayarını yeniden başlatmayı dene.")
  ],
  dialogue: [["A", "IT support, how can I help you?", "IT destek, nasıl yardımcı olabilirim?"], ["B", "I can't log in. I keep getting an error message.", "Giriş yapamıyorum. Sürekli hata mesajı alıyorum."], ["A", "Have you tried to restart your computer?", "Bilgisayarınızı yeniden başlatmayı denediniz mi?"], ["B", "Yes, but it still doesn't work.", "Evet ama hâlâ çalışmıyor."], ["A", "OK. I'll reset your password. Please wait a moment.", "Tamam. Şifrenizi sıfırlayacağım. Lütfen biraz bekleyin."]],
  quiz: [
    Q("\"Giriş yapamıyorum.\"", ["I can't log in.", "I can't login in.", "I don't log.", "I can't enter me."], "Fiil iki kelime: log in."),
    Q("\"Programı bilgisayarıma kurdum.\"", ["I installed the program on my computer.", "I loaded up my computer program.", "I set the program in computer.", "I uploaded the program to my computer."], "Program kurmak: install."),
    Q("\"Sürekli hata mesajı alıyorum.\"", ["I keep getting an error message.", "I keep get an error message.", "I always am getting error.", "I take error message always."], "keep + -ing: tekrarlanan sorun."),
    Q("Hangisi isim olarak doğru?", ["Make a backup of your files.", "Make a back up of your files.", "Backup your files make.", "Make backing up a file."], "İsim bitişik yazılır: backup."),
    Q("\"The server is down.\" ne demek?", ["Sunucu çalışmıyor.", "Sunucu alt katta.", "Sunucu yavaş ama çalışıyor."], "down = devre dışı.")
  ],
  review: ["log in (fiil) / login (isim); back up / backup.", "download = indirmek, install = kurmak, upload = yüklemek.", "It doesn't work; I keep getting an error message."]
}
];

const B2: LessonDef[] = [
{
  id: "en-b2-health", title: "Sağlık: hastalıklar ve tedavi", no: "Health: illnesses and treatment", icon: "health",
  intro: "Yaygın hastalıkları, teşhis ve tedaviyi konuşmak; doktorun anlattıklarını anlamak ve doğru sorular sormak.",
  notes: [
    { h: "Hastalık kalıpları", p: "Her hastalık aynı fiille kullanılmaz. Süreğen olanlarda have veya suffer from; ani olaylarda have a; bulaşıcılarda catch denir.",
      table: [["Kalıp", "Örnek", "Türkçe"], ["have", "She has diabetes.", "Şeker hastası."], ["suffer from", "He suffers from asthma.", "Astımı var."], ["have a", "He had a heart attack.", "Kalp krizi geçirdi."], ["catch", "I caught the flu.", "Grip oldum."], ["be diagnosed with", "She was diagnosed with cancer.", "Kanser teşhisi kondu."]] },
    { h: "Edilgen yapı", p: "Tıpta edilgen yaygındır: The patient was treated with antibiotics. The tumour was removed. Teşhis için kalıp be diagnosed with'tir: He was diagnosed with cancer." },
    { h: "Doktora sorular", p: "What's the diagnosis? Are there any side effects? How long will the treatment last? Is it hereditary? Will I need surgery?" }
  ],
  tip: "\"Ameliyat oldum\" için \"I did surgery\" denmez; bu ameliyatı senin yaptığın anlamına gelir. Doğrusu \"I had surgery\" veya \"I had an operation\". \"Kalp krizi geçirdim\" de \"I passed a heart attack\" değil, \"I had a heart attack\".",
  words: [
    W("illness", "hastalık", "", "It's a serious illness.", "Ciddi bir hastalık."),
    W("diagnosis", "teşhis", "", "The doctor made a quick diagnosis.", "Doktor hızlıca teşhis koydu.", { note: "çoğulu: diagnoses" }),
    W("treatment", "tedavi", "", "The treatment lasts six months.", "Tedavi altı ay sürüyor."),
    W("side effect", "yan etki", "", "This medicine has few side effects.", "Bu ilacın az yan etkisi var."),
    W("surgery", "ameliyat", "", "She had surgery on her knee.", "Dizinden ameliyat oldu.", { note: "sayılamaz: a surgery denmez" }),
    W("infection", "enfeksiyon", "", "He has a lung infection.", "Akciğer enfeksiyonu var."),
    W("high blood pressure", "yüksek tansiyon", "", "My father has high blood pressure.", "Babamın yüksek tansiyonu var."),
    W("diabetes", "şeker hastalığı", "", "She has had diabetes for years.", "Yıllardır şeker hastası."),
    W("heart attack", "kalp krizi", "", "He had a heart attack at work.", "İş yerinde kalp krizi geçirdi."),
    W("stroke", "inme, felç", "", "A stroke needs urgent treatment.", "İnme acil tedavi gerektirir."),
    W("cancer", "kanser", "", "The cancer was found early.", "Kanser erken bulundu."),
    W("chronic", "kronik", "", "Asthma is a chronic disease.", "Astım kronik bir hastalıktır."),
    W("hereditary", "kalıtsal", "", "Is this disease hereditary?", "Bu hastalık kalıtsal mı?"),
    W("be diagnosed with", "teşhisi konmak", "", "He was diagnosed with diabetes.", "Ona şeker hastalığı teşhisi kondu."),
    W("recover", "iyileşmek", "", "She recovered quickly after surgery.", "Ameliyattan sonra hızlı iyileşti.", { note: "recover from + hastalık" })
  ],
  dialogue: [["A", "Your test results are back. You have type 2 diabetes.", "Tahlil sonuçlarınız geldi. Tip 2 şeker hastalığınız var."], ["B", "Is it serious? Will I need to stay in hospital?", "Ciddi mi? Hastanede kalmam gerekecek mi?"], ["A", "No. It's chronic, but it can be treated very well.", "Hayır. Kronik ama çok iyi tedavi edilebilir."], ["B", "Are there any side effects from the medicine?", "İlacın yan etkileri var mı?"], ["A", "Some people get stomach pain, but it usually goes away.", "Bazı insanların midesi ağrır ama genellikle geçer."]],
  quiz: [
    Q("\"Geçen yıl ameliyat oldum.\"", ["I had surgery last year.", "I did surgery last year.", "I was surgery last year.", "I made an operation last year."], "Ameliyat olmak: have surgery / an operation."),
    Q("\"Babam kalp krizi geçirdi.\"", ["My father had a heart attack.", "My father passed a heart attack.", "My father did a heart attack.", "My father took heart attack."], "have a heart attack."),
    Q("\"Ona kanser teşhisi kondu.\"", ["She was diagnosed with cancer.", "She diagnosed cancer.", "She was diagnosed from cancer.", "Her cancer diagnosed."], "be diagnosed with: edilgen kalıp."),
    Q("\"side effect\" ne demek?", ["yan etki", "belirti", "tedavi", "teşhis"], "side effect = ilacın yan etkisi."),
    Q("Boşluğa ne gelir: He suffers ___ asthma.", ["from", "with", "of", "by"], "suffer from + hastalık.")
  ],
  review: ["have diabetes; have a heart attack; catch the flu; suffer from asthma.", "be diagnosed with; recover from; have surgery.", "diagnosis, treatment, side effect, chronic, hereditary."]
},
{
  id: "en-b2-it", title: "IT: yazılım geliştirme", no: "IT: software development", icon: "code", story: itStory("b2", "tr"),
  intro: "Yazılım ekibinde çalışmak: gereksinimler, test, kod incelemesi ve yayına alma. Toplantılarda durum bildirmek için gereken İngilizce.",
  notes: [
    { h: "Durum bildirmek", p: "Günlük toplantılarda (stand-up) üç zaman birlikte kullanılır. Biten iş: I've fixed the login bug. Süren iş: I'm working on the tests. Plan: I'm going to deploy it today. Engel: I'm blocked by the database issue.",
      table: [["Zaman", "Kullanım", "Örnek"], ["Present perfect", "Biten iş", "I've merged the branch."], ["Present continuous", "Süren iş", "I'm working on the API."], ["be going to", "Plan", "I'm going to write the tests."], ["be blocked by", "Engel", "I'm blocked by the bug."]] },
    { h: "Yazılım fiilleri", p: "Doğru eşleşmeler önemlidir: fix a bug, write code, run the tests, review code, merge a branch, deploy a release, roll back a change." },
    { h: "Edilgen yapı", p: "Süreçte kişi önemli değilse: The change has been deployed. The bug was fixed yesterday. The tests are being run." }
  ],
  tip: "Türkçede \"testi koştum\" gibi birebir çeviriler doğru çıkabilir: \"run the tests\" gerçekten kullanılır. Ama \"bug'ı çözdüm\" için \"fix a bug\" denir, \"code yazmak\" için \"write code\"; \"make code\" denmez.",
  words: [
    W("developer", "yazılım geliştirici", "", "She works as a developer.", "Yazılım geliştirici olarak çalışıyor."),
    W("source code", "kaynak kod", "", "The source code is on GitHub.", "Kaynak kod GitHub'da."),
    W("requirement", "gereksinim", "", "The client changed the requirements.", "Müşteri gereksinimleri değiştirdi."),
    W("code review", "kod incelemesi", "", "We do a code review before merging.", "Birleştirmeden önce kod incelemesi yapıyoruz."),
    W("version control", "sürüm kontrolü", "", "We use Git for version control.", "Sürüm kontrolü için Git kullanıyoruz."),
    W("branch", "dal (kodda)", "", "Create a new branch for this feature.", "Bu özellik için yeni bir dal oluştur."),
    W("merge", "birleştirmek", "", "Can you merge my branch?", "Dalımı birleştirebilir misin?"),
    W("deploy", "yayına almak", "", "We deploy the change tonight.", "Değişikliği bu gece yayına alıyoruz."),
    W("release", "sürüm; yayımlamak", "", "The new release comes out in May.", "Yeni sürüm mayısta çıkıyor."),
    W("fix a bug", "hata düzeltmek", "", "She fixed the bug in an hour.", "Hatayı bir saatte düzeltti."),
    W("feature", "özellik", "", "We are adding a new feature.", "Yeni bir özellik ekliyoruz."),
    W("user interface", "kullanıcı arayüzü", "", "The user interface must be simpler.", "Kullanıcı arayüzü daha basit olmalı."),
    W("run the tests", "testleri çalıştırmak", "", "Did you run the tests?", "Testleri çalıştırdın mı?"),
    W("be blocked by", "tarafından engellenmek", "", "I'm blocked by a database issue.", "Bir veri tabanı sorunu beni engelliyor."),
    W("roll back", "geri almak (sürüm)", "", "We had to roll back the release.", "Sürümü geri almak zorunda kaldık.")
  ],
  dialogue: [["A", "What's your status?", "Durumun ne?"], ["B", "I've fixed the login bug, and I'm working on the tests now.", "Giriş hatasını düzelttim, şimdi testler üzerinde çalışıyorum."], ["A", "Are you blocked by anything?", "Seni engelleyen bir şey var mı?"], ["B", "Two tests are failing because the database isn't responding.", "Veri tabanı yanıt vermediği için iki test başarısız oluyor."], ["A", "Can we still deploy tonight?", "Yine de bu gece yayına alabilir miyiz?"], ["B", "Yes, if the code review is finished by four.", "Evet, kod incelemesi dörde kadar biterse."]],
  quiz: [
    Q("\"Hatayı düzelttim.\" (az önce, sonuç önemli)", ["I've fixed the bug.", "I fix the bug.", "I've solved up the bug.", "I am fixed the bug."], "Biten iş: present perfect."),
    Q("Hangi eşleşme doğru?", ["write code", "make code", "do a code", "build a code up"], "Kod yazmak: write code."),
    Q("\"Değişiklik yayına alındı.\"", ["The change has been deployed.", "The change has deployed itself.", "The change is deploy.", "The change has been deploy."], "Edilgen: has been + V3."),
    Q("\"roll back\" ne demek?", ["önceki sürüme geri dönmek", "yayına almak", "test etmek", "birleştirmek"], "roll back = geri almak."),
    Q("Stand-up'ta \"bir sorun beni engelliyor\":", ["I'm blocked by an issue.", "An issue is stopping at me.", "I'm blocking an issue.", "I have block from issue."], "be blocked by + engel.")
  ],
  review: ["Stand-up: I've fixed ...; I'm working on ...; I'm blocked by ...", "write code, run tests, fix a bug, merge a branch, deploy a release.", "Edilgen: has been deployed, was fixed."]
}
];

const C1: LessonDef[] = [
{
  id: "en-c1-health", title: "Sağlık: hastane ve tıp dili", no: "Health: hospital language", icon: "health",
  intro: "Hastaneye yatış, taburcu, onam ve tıbbi raporların dili. Klinik metinleri okumak ve doktorlarla ayrıntılı konuşmak için.",
  notes: [
    { h: "Rapor dili", p: "Klinik metinler kısa ve edilgendir: The patient presented with chest pain. (Hasta göğüs ağrısıyla başvurdu.) He was admitted for observation. (Gözlem için yatırıldı.) No abnormalities were detected. (Anormallik saptanmadı.) present with = şikâyetiyle başvurmak." },
    { h: "Sonuçları yumuşatmak", p: "Doktorlar kesin konuşmaktan kaçınır: It is likely that ..., We cannot rule out ..., The results are inconclusive. (Sonuçlar kesin değil.) The prognosis is guarded. (Seyir belirsiz, temkinli.) The tumour appears to be benign." },
    { h: "Hasta hakları", p: "informed consent (aydınlatılmış onam): hastanın riskleri anladıktan sonra verdiği izin. patient confidentiality: hasta bilgilerinin gizliliği. next of kin: resmî olarak en yakın akraba." }
  ],
  tip: "\"Hasta yattı\" için \"The patient lay\" denmez; hastaneye yatış \"be admitted to hospital\", taburcu \"be discharged\" olur. \"Consultant\" da İngiltere'de danışman değil, kıdemli uzman doktordur.",
  words: [
    W("consultant", "kıdemli uzman doktor", "", "The consultant will see you at nine.", "Uzman doktor sizi dokuzda görecek.", { note: "İngiltere; ABD: attending physician" }),
    W("ward", "hastane servisi", "", "She was moved to another ward.", "Başka bir servise taşındı."),
    W("be admitted", "hastaneye yatırılmak", "", "He was admitted to hospital last night.", "Dün gece hastaneye yatırıldı."),
    W("be discharged", "taburcu olmak", "", "The patient will be discharged tomorrow.", "Hasta yarın taburcu olacak."),
    W("discharge summary", "taburcu özeti", "", "Your GP will receive the discharge summary.", "Aile hekiminiz taburcu özetini alacak."),
    W("informed consent", "aydınlatılmış onam", "", "Surgery requires informed consent.", "Ameliyat aydınlatılmış onam gerektirir."),
    W("prognosis", "beklenen seyir", "", "The prognosis is good.", "Beklenen seyir iyi."),
    W("next of kin", "en yakın akraba", "", "We have informed your next of kin.", "En yakın akrabanızı bilgilendirdik."),
    W("patient confidentiality", "hasta gizliliği", "", "Doctors must respect patient confidentiality.", "Doktorlar hasta gizliliğine uymalıdır."),
    W("benign", "iyi huylu", "", "Fortunately, the tumour was benign.", "Neyse ki tümör iyi huyluydu."),
    W("malignant", "kötü huylu", "", "The biopsy showed a malignant tumour.", "Biyopsi kötü huylu bir tümör gösterdi."),
    W("present with", "şikâyetiyle başvurmak", "", "She presented with severe headaches.", "Şiddetli baş ağrılarıyla başvurdu."),
    W("follow-up", "kontrol, takip", "", "You will need a follow-up appointment.", "Kontrol randevusuna ihtiyacınız olacak."),
    W("palliative care", "palyatif bakım", "", "He is receiving palliative care.", "Palyatif bakım alıyor."),
    W("rule out", "dışlamak (olasılık)", "", "We can't rule out an infection.", "Enfeksiyon ihtimalini dışlayamayız.")
  ],
  dialogue: [["A", "I'm the patient's daughter. Can you tell me about the prognosis?", "Hastanın kızıyım. Beklenen seyir hakkında bilgi verebilir misiniz?"], ["B", "Your father has given his consent, so yes.", "Babanız onay verdi, yani evet."], ["B", "The tumour appears to be benign, but we can't rule out complications.", "Tümör iyi huylu görünüyor ama komplikasyonları dışlayamayız."], ["A", "When will he be discharged?", "Ne zaman taburcu olacak?"], ["B", "Probably on Friday. His GP will receive a discharge summary and arrange a follow-up.", "Muhtemelen cuma. Aile hekimi taburcu özetini alıp kontrol ayarlayacak."]],
  quiz: [
    Q("Rapor üslubuna en uygun cümle hangisi?", ["The patient presented with chest pain.", "The guy came in because his chest really hurt.", "He said his chest hurts a lot."], "Klinik dil: present with."),
    Q("\"Hasta dün gece yatırıldı.\"", ["The patient was admitted last night.", "The patient lay last night.", "The patient was slept last night.", "The patient admitted last night."], "be admitted: edilgen."),
    Q("\"benign\" kelimesinin zıttı?", ["malignant", "chronic", "inconclusive", "hereditary"], "benign = iyi huylu; malignant = kötü huylu."),
    Q("İngiltere'de \"consultant\" kimdir?", ["kıdemli uzman doktor", "hasta danışmanı", "sigorta görevlisi"], "Hastanede consultant kıdemli uzman hekimdir."),
    Q("\"We can't rule out an infection.\"", ["Enfeksiyon ihtimalini dışlayamayız.", "Enfeksiyon kesinlikle var.", "Enfeksiyon kuralını bilmiyoruz."], "rule out = bir ihtimali dışlamak.")
  ],
  review: ["be admitted → treatment → be discharged → discharge summary → follow-up.", "present with; no abnormalities were detected; we can't rule out ...", "informed consent, next of kin, prognosis, benign / malignant."]
},
{
  id: "en-c1-it", title: "IT: mimari ve güvenlik", no: "IT: architecture and security", icon: "code", story: itStory("c1", "tr"),
  intro: "Teknik kararları savunmak, kesintileri raporlamak ve güvenliği konuşmak. Kıdemli mühendislerin kullandığı dil.",
  notes: [
    { h: "Teknik karar savunmak", p: "Karşılaştırmalı konuşma kalıpları: The trade-off is that ... (Ödünleşim şu ki ...). The benefits outweigh the costs. (Faydalar maliyetlerden ağır basıyor.) In the long run, it pays off. (Uzun vadede karşılığını verir.) This assumes that ... (Bu, ... varsayımına dayanıyor.)" },
    { h: "Kesinti raporu", p: "Blameless postmortem'de kişi suçlanmaz; edilgen ve sebep bildiren dil kullanılır: The outage was caused by a misconfiguration. The root cause has been identified. Measures have been put in place to prevent a recurrence." },
    { h: "Veri koruma", p: "AB'de GDPR geçerlidir. personal data (kişisel veri), data breach (veri ihlali), access control (erişim denetimi), encrypted at rest / in transit (depoda / aktarımda şifreli)." }
  ],
  tip: "\"Teknik borç\" için \"technical debt\" denir, \"debit\" değil; debt'teki b okunmaz. \"Security\" ve \"safety\" Türkçede tek kelimedir (güvenlik): saldırılara karşı olan security, kazaya ve hataya karşı olan safety'dir.",
  words: [
    W("architecture", "mimari", "", "The architecture must handle more traffic.", "Mimari daha fazla trafiği karşılamalı."),
    W("scalable", "ölçeklenebilir", "", "The solution is easily scalable.", "Çözüm kolayca ölçeklenebilir."),
    W("technical debt", "teknik borç", "", "We have to pay down technical debt.", "Teknik borcu azaltmamız gerekiyor."),
    W("refactor", "kodu yeniden düzenlemek", "", "We should refactor this module.", "Bu modülü yeniden düzenlemeliyiz."),
    W("legacy system", "eski sistem", "", "The legacy system is hard to maintain.", "Eski sistemin bakımı zor."),
    W("trade-off", "ödünleşim", "", "It's a trade-off between cost and speed.", "Maliyet ile hız arasında bir ödünleşim."),
    W("vulnerability", "güvenlik açığı", "", "We found a serious vulnerability.", "Ciddi bir güvenlik açığı bulduk."),
    W("encryption", "şifreleme", "", "All traffic uses encryption.", "Tüm trafik şifreleme kullanıyor."),
    W("outage", "kesinti", "", "The outage lasted two hours.", "Kesinti iki saat sürdü."),
    W("root cause", "kök neden", "", "The root cause is still unknown.", "Kök neden hâlâ bilinmiyor."),
    W("latency", "gecikme", "", "Latency increased under heavy load.", "Yoğun yük altında gecikme arttı."),
    W("access control", "erişim denetimi", "", "We need stricter access control.", "Daha sıkı erişim denetimine ihtiyacımız var."),
    W("data breach", "veri ihlali", "", "The data breach was reported immediately.", "Veri ihlali hemen bildirildi."),
    W("backup", "yedek", "", "We take a backup every night.", "Her gece yedek alıyoruz."),
    W("outweigh", "ağır basmak", "", "The benefits outweigh the costs.", "Faydalar maliyetlerden ağır basıyor.")
  ],
  dialogue: [["A", "What caused last night's outage?", "Dün geceki kesintiye ne sebep oldu?"], ["B", "The root cause was a misconfiguration. Measures have already been put in place.", "Kök neden hatalı yapılandırmaydı. Önlemler alındı bile."], ["A", "Was any personal data affected?", "Kişisel veriler etkilendi mi?"], ["B", "No, it's all encrypted, and the backup is intact.", "Hayır, hepsi şifreli ve yedek sağlam."], ["A", "Good. In the long run, we should refactor that module. The technical debt is growing.", "İyi. Uzun vadede o modülü yeniden düzenlemeliyiz. Teknik borç büyüyor."]],
  quiz: [
    Q("Kesinti raporuna en uygun cümle hangisi?", ["The outage was caused by a misconfiguration.", "John broke everything last night.", "Someone messed up the server."], "Postmortem tarafsızdır, kişi suçlanmaz."),
    Q("\"Faydalar maliyetlerden ağır basıyor.\"", ["The benefits outweigh the costs.", "The benefits are heavier the costs.", "The benefits overweight the costs.", "The costs outweigh on the benefits."], "outweigh: ağır basmak."),
    Q("Saldırıya karşı koruma için hangi kelime?", ["security", "safety", "insurance", "protectment"], "security = saldırıya karşı; safety = kazaya karşı."),
    Q("\"trade-off\" ne demek?", ["ödünleşim", "ticaret", "indirim", "kesinti"], "Bir şeyi kazanırken başka bir şeyden vazgeçmek."),
    Q("\"latency\" ne demek?", ["gecikme", "güvenlik", "yedek", "şifreleme"], "latency = yanıtın gecikmesi.")
  ],
  review: ["The trade-off is that ...; The benefits outweigh the costs.", "The outage was caused by ...; The root cause has been identified.", "vulnerability, encryption, data breach, technical debt, scalable."]
}
];

export default [...asExtra("B1", B1), ...asExtra("B2", B2), ...asExtra("C1", C1)];
