import { W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const EN_A2: LessonDef[] = [
{
  id: "en-a2-1", title: "Geçmiş zaman", no: "Past simple", icon: "clock",
  intro: "Dün, geçen hafta ya da yıllar önce olan şeyleri anlatmayı öğreniyoruz: was / were, düzenli ve düzensiz fiiller.",
  notes: [
    { h: "was / were", p: "\"be\" fiilinin geçmişi: I / he / she / it was, you / we / they were. I was at home yesterday. (Dün evdeydim.) Olumsuz: wasn't, weren't. Soru: Were you at work?" },
    { h: "Düzenli fiiller: -ed", p: "Çoğu fiil geçmişte -ed alır ve bütün kişilerde aynıdır: work → worked, live → lived, visit → visited. Okunuş üç türlüdür: worked [vörkt], lived [livd], visited [vizitid]. -ed, ancak fiil t ya da d ile bitiyorsa ayrı hece olarak okunur." },
    { h: "Düzensiz fiiller", p: "En sık kullanılan fiiller düzensizdir ve ezberlenmelidir.",
      table: [["Fiil", "Geçmiş", "Türkçe"], ["go", "went", "gitti"], ["have", "had", "vardı, yedi"], ["see", "saw", "gördü"], ["do", "did", "yaptı"], ["buy", "bought", "satın aldı"], ["come", "came", "geldi"], ["eat", "ate", "yedi"]] },
    { h: "Olumsuz ve soru: did", p: "Olumsuz ve soruda did kullanılır ve fiil yalın haline döner: I didn't go. Did you see the film? \"I didn't went\" yanlıştır." }
  ],
  tip: "Türkçede geçmiş ek tek bir yerde durur: gitmedim. İngilizcede did geçmişi taşır, fiil yalın kalır: I didn't go (I didn't went değil). Ayrıca \"ago\" zaman ifadesinden sonra gelir: iki yıl önce = two years ago.",
  words: [
    W("was", "idi (I/he/she/it)", "voz", "I was tired yesterday.", "Dün yorgundum."),
    W("were", "idi (you/we/they)", "vör", "Were you at home?", "Evde miydin?"),
    W("went", "gitti", "vent", "We went to the cinema.", "Sinemaya gittik.", { note: "go – went" }),
    W("had", "vardı, yedi", "hed", "I had a good weekend.", "Güzel bir hafta sonu geçirdim.", { note: "have – had" }),
    W("saw", "gördü", "soo", "I saw Ali in town.", "Ali'yi şehirde gördüm.", { note: "see – saw" }),
    W("bought", "satın aldı", "boot", "She bought a new phone.", "Yeni bir telefon aldı.", { note: "buy – bought" }),
    W("came", "geldi", "keym", "He came to England in 2019.", "2019'da İngiltere'ye geldi.", { note: "come – came" }),
    W("did", "yaptı; (soru/olumsuz yardımcısı)", "did", "What did you do yesterday?", "Dün ne yaptın?", { note: "do – did" }),
    W("didn't", "-medi, -madı", "didınt", "I didn't sleep well.", "İyi uyumadım."),
    W("visited", "ziyaret etti", "vizitid", "We visited my parents.", "Annemlerle babamı ziyaret ettik."),
    W("yesterday", "dün", "yestırdey", "It rained yesterday.", "Dün yağmur yağdı."),
    W("last", "geçen, son", "laast", "Last week I was ill.", "Geçen hafta hastaydım."),
    W("ago", "önce", "ıgou", "I came here two years ago.", "Buraya iki yıl önce geldim."),
    W("born", "doğmuş", "boon", "I was born in Ankara.", "Ankara'da doğdum.", { note: "be born" })
  ],
  dialogue: [["A", "What did you do at the weekend?", "Hafta sonu ne yaptın?"], ["B", "I visited my parents. We had dinner together.", "Annemlerle babamı ziyaret ettim. Birlikte akşam yemeği yedik."], ["A", "Nice! Did you go to the cinema?", "Güzel! Sinemaya gittin mi?"], ["B", "No, I didn't. I was very tired. And you?", "Hayır, gitmedim. Çok yorgundum. Ya sen?"], ["A", "I went to the market and bought some fruit.", "Pazara gittim ve biraz meyve aldım."], ["B", "When did you come to London?", "Londra'ya ne zaman geldin?"], ["A", "Three years ago.", "Üç yıl önce."]],
  quiz: [
    { q: "\"Dün sinemaya gittim.\"", o: ["I went to the cinema yesterday.", "I go to the cinema yesterday.", "I goed to the cinema yesterday.", "I did went to the cinema yesterday."], a: 0, e: "go düzensizdir: go – went." },
    { q: "\"Filmi gördün mü?\"", o: ["Did you see the film?", "Did you saw the film?", "Saw you the film?", "Do you saw the film?"], a: 0, e: "Soruda did + yalın fiil: Did you see ...?" },
    { q: "\"İki yıl önce\"", o: ["two years ago", "ago two years", "before two years", "two years before ago"], a: 0, e: "ago zaman ifadesinden sonra gelir: two years ago." },
    { q: "Boşluğu doldur: \"They ___ at home last night.\"", o: ["were", "was", "are"], a: 0, e: "they ile geçmişte were: They were at home." },
    { q: "\"visited\" nasıl okunur?", o: ["[vizitid] – -ed ayrı hece", "[vizitd]", "[vizited]"], a: 0, e: "t ya da d ile biten fiillerde -ed ayrı hece olarak okunur: [id]." },
    { q: "\"buy\" fiilinin geçmişi?", o: ["bought", "buyed", "brought", "boughted"], a: 0, e: "buy – bought. Dikkat: brought, bring (getirmek) fiilinin geçmişidir." }
  ],
  review: ["was (I/he/she/it), were (you/we/they).", "Düzenli: -ed. Düzensiz: go–went, see–saw, buy–bought.", "Olumsuz ve soru: did + yalın fiil: I didn't go."]
},
{
  id: "en-a2-2", title: "Doktorda", no: "At the doctor's", icon: "heart",
  intro: "Doktora derdini anlatmayı, randevu almayı ve tavsiye vermeyi (should) öğreniyoruz.",
  notes: [
    { h: "Ağrıyı anlatmak", p: "İki yol var: have + ağrı adı: I have a headache (baş ağrısı), I have a stomach ache (mide ağrısı). Ya da vücut bölümü + hurts: My back hurts. (Sırtım ağrıyor.)",
      table: [["İngilizce", "Türkçe"], ["I have a headache.", "Başım ağrıyor."], ["I have a sore throat.", "Boğazım ağrıyor."], ["I have a temperature.", "Ateşim var."], ["I have a cough.", "Öksürüğüm var."], ["My leg hurts.", "Bacağım ağrıyor."]] },
    { h: "should / shouldn't", p: "Tavsiye için should + yalın fiil: You should rest. (Dinlenmelisin.) Olumsuz: You shouldn't go to work. Soru: Should I take this medicine?" },
    { h: "İngiltere'de sağlık", p: "İngiltere'de önce aile hekimine (GP) gidilir: I'd like to make an appointment with my GP. Acil durumda 999, acil olmayan durumlar için 111 aranır. Eczane: pharmacy ya da chemist's." }
  ],
  tip: "Türkçede \"Başım ağrıyor\" deriz. İngilizcede \"My head hurts\" da doğrudur ama en doğal söyleyiş \"I have a headache\" (bir baş ağrım var). \"I have headache\" yanlıştır; a unutulmamalı.",
  words: [
    W("doctor", "doktor", "doktır", "I need to see a doctor.", "Doktora görünmem lazım."),
    W("appointment", "randevu", "ıpoyntmınt", "I'd like to make an appointment.", "Randevu almak istiyorum."),
    W("headache", "baş ağrısı", "hedeyk", "I have a terrible headache.", "Başım çok kötü ağrıyor.", { note: "ch burada k okunur" }),
    W("hurt", "acımak, ağrımak", "hört", "My back hurts.", "Sırtım ağrıyor."),
    W("sore throat", "boğaz ağrısı", "soor throut", "I have a sore throat.", "Boğazım ağrıyor."),
    W("temperature", "ateş; sıcaklık", "tempırıçır", "Do you have a temperature?", "Ateşin var mı?"),
    W("cough", "öksürük, öksürmek", "kof", "I have a bad cough.", "Kötü bir öksürüğüm var.", { note: "gh burada f okunur" }),
    W("ill", "hasta", "il", "I feel ill.", "Kendimi hasta hissediyorum.", { note: "ABD: sick" }),
    W("medicine", "ilaç", "medsın", "Take this medicine twice a day.", "Bu ilacı günde iki kez al."),
    W("prescription", "reçete", "priskripşın", "Here is your prescription.", "Reçeteniz burada."),
    W("pharmacy", "eczane", "faamısi", "The pharmacy is open until ten.", "Eczane ona kadar açık.", { note: "İngiltere: chemist's" }),
    W("should", "-meli, -malı (tavsiye)", "şud", "You should drink more water.", "Daha fazla su içmelisin.", { note: "l okunmaz" }),
    W("rest", "dinlenmek", "rest", "You should rest for two days.", "İki gün dinlenmelisin."),
    W("better", "daha iyi", "betır", "I hope you feel better soon.", "Umarım yakında iyileşirsin.")
  ],
  dialogue: [["A", "Good morning. What's the problem?", "Günaydın. Sorun ne?"], ["B", "I have a headache and a sore throat.", "Başım ve boğazım ağrıyor."], ["A", "Do you have a temperature?", "Ateşiniz var mı?"], ["B", "Yes, a little. And I have a cough.", "Evet, biraz. Bir de öksürüğüm var."], ["A", "It's a cold. You should rest and drink a lot of water. Here is a prescription.", "Soğuk algınlığı. Dinlenmeli ve bol su içmelisiniz. İşte reçete."], ["B", "Should I stay at home?", "Evde mi kalmalıyım?"], ["A", "Yes, you shouldn't go to work for two days.", "Evet, iki gün işe gitmemelisiniz."]],
  quiz: [
    { q: "\"Başım ağrıyor.\" (en doğal söyleyiş)", o: ["I have a headache.", "I have headache.", "My head is ache.", "I am headache."], a: 0, e: "have a + ağrı: I have a headache." },
    { q: "\"Dinlenmelisin.\"", o: ["You should rest.", "You should to rest.", "You should resting.", "You rest should."], a: 0, e: "should + yalın fiil: should rest." },
    { q: "\"My back hurts.\" ne demek?", o: ["Sırtım ağrıyor.", "Sırtımı incittim.", "Sırtım iyi.", "Sırtıma bak."], a: 0, e: "vücut bölümü + hurts = ... ağrıyor." },
    { q: "\"cough\" nasıl okunur?", o: ["[kof]", "[kouğ]", "[kauç]"], a: 0, e: "gh bu kelimede f gibi okunur: [kof]." },
    { q: "\"Randevu almak istiyorum.\"", o: ["I'd like to make an appointment.", "I'd like to take a date.", "I want an appointment do.", "I'd like make appointment."], a: 0, e: "make an appointment = randevu almak." }
  ],
  review: ["I have a headache / a sore throat / a temperature.", "Vücut bölümü + hurts: My back hurts.", "should + yalın fiil: You should rest."]
},
{
  id: "en-a2-3", title: "Deneyimler", no: "Present perfect", icon: "check",
  intro: "\"Hiç ... yaptın mı?\" sorusu, deneyimler ve \"... yıldır\" yapısı: present perfect (have + V3).",
  notes: [
    { h: "have / has + V3", p: "Present perfect, geçmişte olmuş ama zamanı belli olmayan ya da hâlâ etkisi süren olaylar içindir. Fiilin üçüncü hali (V3) kullanılır: I have seen, she has been. Kısa hali: I've, she's.",
      table: [["Fiil", "Geçmiş (V2)", "V3"], ["be", "was / were", "been"], ["see", "saw", "seen"], ["eat", "ate", "eaten"], ["do", "did", "done"], ["go", "went", "gone / been"], ["work", "worked", "worked"]] },
    { h: "Ne zaman past simple, ne zaman present perfect?", p: "Zaman belliyse past simple: I went to Paris in 2020. Zaman belli değilse ya da önemli değilse present perfect: I've been to Paris. (Paris'e gittim / bulundum.) \"yesterday, last week, ago\" ile present perfect kullanılmaz." },
    { h: "for / since", p: "Hâlâ süren durum için present perfect + for (süre) ya da since (başlangıç): I've lived here for three years. I've lived here since 2021. Türkçede \"üç yıldır burada yaşıyorum\" şimdiki zamanla söylenir; İngilizcede \"I live here for three years\" yanlıştır." },
    { h: "ever, never, just, already, yet", p: "Have you ever...? = Hiç ... yaptın mı? I've never... = Hiç ... yapmadım. just = az önce, already = çoktan, yet = henüz (soru ve olumsuzda, cümle sonunda): I haven't finished yet." }
  ],
  tip: "Türkçede \"Üç yıldır İngiltere'de yaşıyorum\" deriz (şimdiki zaman). İngilizcede süren durum present perfect ile söylenir: \"I have lived in England for three years.\" Bu, Türkçe konuşanların en sık yaptığı hatalardan biridir.",
  words: [
    W("been", "bulunmuş, olmuş (be V3)", "biin", "Have you been to London?", "Hiç Londra'ya gittin mi?", { note: "be – was/were – been" }),
    W("seen", "görmüş (see V3)", "siin", "I've seen this film twice.", "Bu filmi iki kez izledim.", { note: "see – saw – seen" }),
    W("eaten", "yemiş (eat V3)", "iitın", "Have you ever eaten sushi?", "Hiç suşi yedin mi?", { note: "eat – ate – eaten" }),
    W("done", "yapmış (do V3)", "dan", "I've done my homework.", "Ödevimi yaptım.", { note: "do – did – done" }),
    W("ever", "hiç (soruda)", "evır", "Have you ever been to Scotland?", "Hiç İskoçya'ya gittin mi?"),
    W("never", "hiç, asla", "nevır", "I've never seen snow.", "Hiç kar görmedim."),
    W("just", "az önce, yeni", "cast", "I've just arrived.", "Az önce geldim."),
    W("already", "zaten, çoktan", "oolredi", "She has already left.", "O çoktan gitti."),
    W("yet", "henüz (soru, olumsuz)", "yet", "I haven't finished yet.", "Henüz bitirmedim."),
    W("for", "-dir (süre)", "foo", "I've lived here for two years.", "İki yıldır burada yaşıyorum."),
    W("since", "-den beri", "sins", "I've worked here since 2020.", "2020'den beri burada çalışıyorum."),
    W("once", "bir kez", "uans", "I've been to Paris once.", "Paris'e bir kez gittim."),
    W("twice", "iki kez", "tuays", "We've met twice.", "İki kez görüştük."),
    W("How long ...?", "Ne zamandır ...? Ne kadar süre ...?", "hau long", "How long have you lived here?", "Ne zamandır burada yaşıyorsun?", { tts: "How long have you lived here?" })
  ],
  dialogue: [["A", "How long have you lived in England?", "Ne zamandır İngiltere'de yaşıyorsun?"], ["B", "I've lived here for four years. Since 2021.", "Dört yıldır burada yaşıyorum. 2021'den beri."], ["A", "Have you ever been to Scotland?", "Hiç İskoçya'ya gittin mi?"], ["B", "Yes, I've been there once. I went to Edinburgh last summer.", "Evet, bir kez gittim. Geçen yaz Edinburgh'a gittim."], ["A", "I've never been there. Is it nice?", "Ben hiç gitmedim. Güzel mi?"], ["B", "Beautiful! But I haven't seen the Highlands yet.", "Çok güzel! Ama İskoç dağlarını henüz görmedim."]],
  quiz: [
    { q: "\"Üç yıldır burada yaşıyorum.\"", o: ["I have lived here for three years.", "I live here for three years.", "I lived here since three years.", "I am living here since three years."], a: 0, e: "Süren durum: present perfect + for + süre." },
    { q: "\"Hiç suşi yedin mi?\"", o: ["Have you ever eaten sushi?", "Did you ever ate sushi?", "Have you ever ate sushi?", "Are you ever eaten sushi?"], a: 0, e: "Deneyim: Have you ever + V3 (eaten)." },
    { q: "Hangisi doğru?", o: ["I went to Paris last year.", "I have been to Paris last year.", "I have gone to Paris last year."], a: 0, e: "Zaman belli (last year): past simple." },
    { q: "Boşluğu doldur: \"I've worked here ___ 2020.\"", o: ["since", "for", "ago"], a: 0, e: "Başlangıç noktası (2020) ile since; süre ile for." },
    { q: "\"Henüz bitirmedim.\"", o: ["I haven't finished yet.", "I haven't finished already.", "I didn't finish yet never.", "I yet haven't finish."], a: 0, e: "yet olumsuz cümlede sonda gelir: I haven't finished yet." },
    { q: "\"see\" fiilinin V3 hali?", o: ["seen", "saw", "seed", "seeing"], a: 0, e: "see – saw – seen." }
  ],
  review: ["have/has + V3: I've seen, she's been.", "Süren durum: I've lived here for 3 years / since 2021.", "Zaman belliyse past simple: I went there last year."]
},
{
  id: "en-a2-4", title: "İş yerinde", no: "At work", icon: "briefcase",
  intro: "İş yerinde kibar rica etmeyi (Could you...?), işini anlatmayı ve geçici durumları (present continuous) öğreniyoruz.",
  notes: [
    { h: "Kibar ricalar", p: "İngilizcede doğrudan emir kaba gelebilir. Rica ederken Could you ...? ya da Would you mind + -ing? kullanılır. İzin isterken: Can I ...? / Could I ...?",
      table: [["Daha az kibar", "Kibar"], ["Send me the file.", "Could you send me the file, please?"], ["Help me.", "Could you help me with this?"], ["Close the window.", "Would you mind closing the window?"], ["I want a day off.", "Could I take a day off on Friday?"]] },
    { h: "Geçici durumlar", p: "Şu dönemde olan ama kalıcı olmayan işler için present continuous: I'm working on a new project this month. Kalıcı durum için geniş zaman: I work in IT." },
    { h: "İşini anlatmak", p: "I work as a nurse. (Hemşire olarak çalışıyorum.) I work for a big company. (Büyük bir şirkette çalışıyorum.) I'm responsible for ... (... sorumluyum.)" }
  ],
  tip: "Türkçede \"Dosyayı gönderir misin?\" kibar bir sorudur. İngilizcede \"Do you send me the file?\" yanlış ve anlamsızdır. Rica için \"Could you send me the file?\" kullan. please eklemek daha da kibar yapar.",
  words: [
    W("office", "ofis", "ofis", "I work in an office.", "Bir ofiste çalışıyorum."),
    W("manager", "müdür, yönetici", "menicır", "My manager is very nice.", "Müdürüm çok iyi biri."),
    W("work as", "... olarak çalışmak", "vörk ez", "I work as a nurse.", "Hemşire olarak çalışıyorum."),
    W("work for", "... şirketinde çalışmak", "vörk foo", "She works for a bank.", "Bir bankada çalışıyor."),
    W("Could you ...?", "... -bilir misiniz? (kibar)", "kud yu", "Could you help me, please?", "Bana yardım edebilir misiniz, lütfen?", { tts: "Could you help me, please?" }),
    W("Would you mind ...?", "... sakıncası var mı?", "vud yu maynd", "Would you mind opening the window?", "Pencereyi açar mısınız?", { tts: "Would you mind opening the window?" }),
    W("send", "göndermek", "send", "I'll send you an email.", "Sana bir e-posta göndereceğim.", { note: "send – sent – sent" }),
    W("busy", "meşgul, yoğun", "bizi", "I'm very busy today.", "Bugün çok yoğunum."),
    W("break", "mola", "breyk", "Let's have a coffee break.", "Kahve molası verelim."),
    W("shift", "vardiya", "şift", "I work the night shift.", "Gece vardiyasında çalışıyorum."),
    W("day off", "izin günü", "dey of", "Could I take a day off?", "Bir gün izin alabilir miyim?"),
    W("project", "proje", "procekt", "We're working on a new project.", "Yeni bir proje üzerinde çalışıyoruz."),
    W("finish", "bitirmek", "finiş", "I finish work at five.", "İşi beşte bitiririm."),
    W("call", "aramak (telefonla)", "kool", "Could you call me back?", "Beni geri arayabilir misiniz?")
  ],
  dialogue: [["A", "Hi Tom, are you busy?", "Selam Tom, meşgul müsün?"], ["B", "A little. I'm working on the new project this week.", "Biraz. Bu hafta yeni proje üzerinde çalışıyorum."], ["A", "Could you send me the report, please?", "Raporu bana gönderebilir misin, lütfen?"], ["B", "Of course. I'll send it after lunch.", "Tabii. Öğle yemeğinden sonra gönderirim."], ["A", "Thanks. And could I take a day off on Friday?", "Teşekkürler. Bir de cuma günü izin alabilir miyim?"], ["B", "You should ask the manager. She's in her office.", "Müdüre sormalısın. Ofisinde."]],
  quiz: [
    { q: "Kibarca dosya istemek için hangisi?", o: ["Could you send me the file, please?", "Do you send me the file?", "Send file me.", "You send me the file?"], a: 0, e: "Rica: Could you + yalın fiil + please?" },
    { q: "\"Hemşire olarak çalışıyorum.\"", o: ["I work as a nurse.", "I work like nurse.", "I am work as nurse.", "I work for a nurse."], a: 0, e: "work as + a/an + meslek." },
    { q: "\"Would you mind ___ the door?\"", o: ["closing", "close", "to close", "closed"], a: 0, e: "Would you mind + -ing: closing." },
    { q: "Bu ay geçici olarak yaptığın bir iş için hangisi?", o: ["I'm working on a new project this month.", "I work on a new project this month now.", "I working on a new project."], a: 0, e: "Geçici durum: present continuous." },
    { q: "\"day off\" ne demek?", o: ["izin günü", "kötü gün", "son gün"], a: 0, e: "day off = izinli gün." }
  ],
  review: ["Kibar rica: Could you ...? Would you mind + -ing?", "I work as a nurse / for a bank.", "Geçici durum: I'm working on ... this week."]
},
{
  id: "en-a2-5", title: "Ev kiralamak", no: "Renting a flat", icon: "key",
  intro: "Ev sahibiyle konuşmayı, kira ve depozito kelimelerini ve karşılaştırma yapmayı öğreniyoruz.",
  notes: [
    { h: "Karşılaştırma (comparative)", p: "Kısa sıfatlar -er + than alır: cheap → cheaper than. Uzun sıfatlar more ... than: more expensive than. Düzensizler: good → better, bad → worse.",
      table: [["Sıfat", "Daha ...", "En ..."], ["cheap", "cheaper", "the cheapest"], ["big", "bigger", "the biggest"], ["quiet", "quieter", "the quietest"], ["expensive", "more expensive", "the most expensive"], ["good", "better", "the best"], ["bad", "worse", "the worst"]] },
    { h: "too / enough", p: "too = fazla, aşırı (sıfattan önce): It's too expensive. enough = yeterli (sıfattan sonra): It isn't big enough. (Yeterince büyük değil.)" },
    { h: "Kiralık ev kelimeleri", p: "landlord (ev sahibi), tenant (kiracı), rent (kira), deposit (depozito), bills included (faturalar dahil), furnished (eşyalı). İngiltere'de kira genellikle aylık (per month, pcm) yazılır." }
  ],
  tip: "Türkçede \"daha\" her zaman sıfatın önüne gelir: daha ucuz. İngilizcede kısa sıfatlarda \"more\" kullanılmaz: \"more cheap\" yanlış, doğrusu \"cheaper\". Ayrıca \"-den\" yerine than: cheaper than the other flat.",
  words: [
    W("landlord", "ev sahibi", "lendlood", "I called the landlord.", "Ev sahibini aradım.", { note: "kadın: landlady" }),
    W("tenant", "kiracı", "tenınt", "The tenant pays the rent.", "Kirayı kiracı öder."),
    W("rent", "kira; kiralamak", "rent", "The rent is nine hundred pounds a month.", "Kira ayda dokuz yüz sterlin."),
    W("deposit", "depozito", "dipozit", "Do I get my deposit back?", "Depozitomu geri alır mıyım?"),
    W("bills", "faturalar", "bilz", "Are the bills included?", "Faturalar dahil mi?"),
    W("furnished", "eşyalı", "förnişt", "Is the flat furnished?", "Daire eşyalı mı?"),
    W("available", "müsait, boş", "ıveylıbıl", "Is the flat still available?", "Daire hâlâ boş mu?"),
    W("broken", "bozuk, kırık", "broukın", "The washing machine is broken.", "Çamaşır makinesi bozuk."),
    W("fix", "tamir etmek", "fiks", "Can you fix the heating?", "Kaloriferi tamir edebilir misiniz?"),
    W("heating", "ısıtma, kalorifer", "hiiting", "The heating doesn't work.", "Kalorifer çalışmıyor."),
    W("cheaper", "daha ucuz", "çiipır", "This flat is cheaper than the other one.", "Bu daire diğerinden daha ucuz."),
    W("more expensive", "daha pahalı", "moor ikspensiv", "London is more expensive than Leeds.", "Londra Leeds'ten daha pahalı."),
    W("quiet", "sessiz, sakin", "kuayıt", "The street is very quiet.", "Sokak çok sakin."),
    W("too", "fazla, aşırı", "tuu", "It's too expensive for me.", "Benim için fazla pahalı.")
  ],
  dialogue: [["A", "Hello, I'm calling about the flat. Is it still available?", "Merhaba, daire için arıyorum. Hâlâ boş mu?"], ["B", "Yes, it is. The rent is eight hundred pounds a month.", "Evet. Kira ayda sekiz yüz sterlin."], ["A", "Are the bills included?", "Faturalar dahil mi?"], ["B", "No, but it's furnished. The deposit is one month's rent.", "Hayır ama eşyalı. Depozito bir aylık kira."], ["A", "It's a bit more expensive than the other flats, but it's quieter.", "Diğer dairelerden biraz daha pahalı ama daha sakin."], ["B", "And it's bigger! Would you like to see it?", "Ve daha büyük! Görmek ister misiniz?"]],
  quiz: [
    { q: "\"Bu daire diğerinden daha ucuz.\"", o: ["This flat is cheaper than the other one.", "This flat is more cheap than the other one.", "This flat is cheaper from the other one.", "This flat is cheap than the other one."], a: 0, e: "Kısa sıfat: -er + than." },
    { q: "\"expensive\" sıfatının karşılaştırması?", o: ["more expensive", "expensiver", "most expensive", "more expensiver"], a: 0, e: "Uzun sıfatlar: more + sıfat." },
    { q: "\"Benim için fazla pahalı.\"", o: ["It's too expensive for me.", "It's very expensive enough.", "It's expensive too much.", "It's too much expensive."], a: 0, e: "too + sıfat: too expensive." },
    { q: "\"good\" sıfatının karşılaştırması?", o: ["better", "gooder", "more good", "best"], a: 0, e: "Düzensiz: good – better – the best." },
    { q: "\"Are the bills included?\" ne demek?", o: ["Faturalar dahil mi?", "Faturalar ödendi mi?", "Fatura nerede?"], a: 0, e: "included = dahil." }
  ],
  review: ["Kısa sıfat -er than (cheaper than); uzun sıfat more ... than.", "too expensive (fazla pahalı); big enough (yeterince büyük).", "landlord, rent, deposit, bills included, furnished."]
},
{
  id: "en-a2-6", title: "Gelecek ve planlar", no: "Future plans", icon: "arrow",
  intro: "Gelecekten bahsetmenin üç yolunu öğreniyoruz: will, be going to ve present continuous.",
  notes: [
    { h: "Üç gelecek yapısı", p: "Türkçede tek bir gelecek zaman var (-ecek). İngilizcede anlam ve duruma göre farklı yapılar kullanılır.",
      table: [["Yapı", "Ne zaman?", "Örnek"], ["will", "Anlık karar, söz, tahmin", "I'll help you. It will rain."], ["be going to", "Önceden verilmiş karar, plan", "I'm going to visit my parents."], ["present continuous", "Kesinleşmiş randevu, ayarlanmış plan", "I'm meeting Tom at six."]] },
    { h: "will", p: "will bütün kişilerde aynıdır ve yalın fiil alır: I'll call you. (Seni ararım.) Olumsuz: won't [vount]: I won't be late." },
    { h: "Önerilerde Let's", p: "Birlikte bir şey yapmayı önerirken: Let's go to the cinema! (Hadi sinemaya gidelim!) Soru olarak: Shall we go? (Gidelim mi?)" }
  ],
  tip: "Türkçede \"Yarın annemi ziyaret edeceğim\" her durumda aynıdır. İngilizcede önceden karar verdiysen \"I'm going to visit my mother\" daha doğaldır. \"I will visit\" daha çok o an verilen karar gibi durur.",
  words: [
    W("will", "-ecek, -acak", "vil", "I think it will rain tomorrow.", "Sanırım yarın yağmur yağacak.", { note: "kısa: I'll" }),
    W("won't", "-meyecek, -mayacak", "vount", "Don't worry, I won't be late.", "Merak etme, geç kalmayacağım.", { note: "= will not" }),
    W("going to", "-ecek (plan)", "gouing tu", "I'm going to learn to drive.", "Araba sürmeyi öğreneceğim."),
    W("tomorrow", "yarın", "tımorou", "See you tomorrow!", "Yarın görüşürüz!"),
    W("next", "gelecek, sonraki", "nekst", "Next week we're going to Spain.", "Gelecek hafta İspanya'ya gidiyoruz."),
    W("plan", "plan, planlamak", "plen", "Do you have any plans for the weekend?", "Hafta sonu için planın var mı?"),
    W("holiday", "tatil", "holıdey", "We're going on holiday in July.", "Temmuzda tatile gidiyoruz.", { note: "ABD: vacation" }),
    W("maybe", "belki", "meybi", "Maybe I'll stay at home.", "Belki evde kalırım."),
    W("probably", "muhtemelen", "probıbli", "It will probably snow.", "Muhtemelen kar yağacak."),
    W("hope", "ummak", "houp", "I hope you can come.", "Umarım gelebilirsin."),
    W("invite", "davet etmek", "invayt", "I'm going to invite all my friends.", "Bütün arkadaşlarımı davet edeceğim."),
    W("meet", "buluşmak, tanışmak", "miit", "I'm meeting Tom at six.", "Saat altıda Tom'la buluşuyorum.", { note: "meet – met – met" }),
    W("Let's", "Hadi ... -elim", "lets", "Let's go to the beach!", "Hadi sahile gidelim!"),
    W("Shall we ...?", "... -elim mi?", "şel vi", "Shall we eat out tonight?", "Bu akşam dışarıda yiyelim mi?", { tts: "Shall we eat out tonight?" })
  ],
  dialogue: [["A", "Do you have any plans for the weekend?", "Hafta sonu için planın var mı?"], ["B", "Yes, I'm going to visit my sister in Manchester. I'm taking the train on Saturday morning.", "Evet, Manchester'daki kız kardeşimi ziyaret edeceğim. Cumartesi sabahı trene biniyorum."], ["A", "Nice! I think it will rain, though.", "Güzel! Ama sanırım yağmur yağacak."], ["B", "Probably. What about you?", "Muhtemelen. Ya sen?"], ["A", "Nothing special. Maybe I'll go to the cinema.", "Özel bir şey yok. Belki sinemaya giderim."], ["B", "Let's go together next week!", "Gelecek hafta birlikte gidelim!"]],
  quiz: [
    { q: "Telefon çalıyor. Anlık karar: \"Ben bakarım!\"", o: ["I'll get it!", "I'm going to get it!", "I get it tomorrow!", "I'm getting it next week!"], a: 0, e: "Anlık karar: will." },
    { q: "Önceden verdiğin karar: \"Araba sürmeyi öğreneceğim.\"", o: ["I'm going to learn to drive.", "I'll learning to drive.", "I going to learn to drive.", "I'm go to learn to drive."], a: 0, e: "Plan: am/is/are + going to + yalın fiil." },
    { q: "\"Geç kalmayacağım.\"", o: ["I won't be late.", "I willn't be late.", "I don't will be late.", "I won't late."], a: 0, e: "will not = won't + yalın fiil (be)." },
    { q: "\"Hadi sahile gidelim!\"", o: ["Let's go to the beach!", "Let go to the beach!", "Let's to go to the beach!", "Lets going to the beach!"], a: 0, e: "Let's + yalın fiil." },
    { q: "Ajandada yazılı randevu: \"Altıda Tom'la buluşuyorum.\"", o: ["I'm meeting Tom at six.", "I meet Tom at six o'clock now.", "I will meeting Tom at six."], a: 0, e: "Ayarlanmış plan: present continuous." }
  ],
  review: ["will: anlık karar, söz, tahmin. won't = will not.", "be going to: önceden verilmiş karar.", "Present continuous: ayarlanmış randevu (I'm meeting Tom at six)."]
}
];
export default atLevel("A2", EN_A2);
