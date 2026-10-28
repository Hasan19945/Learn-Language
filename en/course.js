COURSES.en = {
  id: "en", name: "English", lang: "İngilizce", yourLang: "İngilizcen", key: "adim-adim-english-v1", doc: "english",
  voice: /^en([-_]|$)/i, voiceName: "English",
  hero: "İngilizceyi sıfırdan, adım adım öğren.",
  sub: "Açıklamalar Türkçe, örnekler İngilizce",
  about: "Bu sürüm Türkçe konuşanlar için hazırlandı. Dersler Türkçe ile İngilizce arasındaki farkları özellikle gösteriyor.",
  sentenceNote: "Yeni fiiller: watch (izlemek), play (oynamak), pay (ödemek), buy (satın almak). he/she/it ile hepsi -s alır: he watches, she plays.",
  lessons: [],
  levels: [
    { id: "A0", title: "Başlangıç", d: "Alfabe, selamlaşma, temel cümleler" },
    { id: "A1", title: "Temel", d: "Aile, alışveriş, saat, ev, ulaşım" },
    { id: "A2", title: "Temel üstü", d: "Geçmiş zaman, doktor, iş, kiralık ev, planlar" },
    { id: "B1", title: "Orta", d: "Resmî işler, iş görüşmesi, fikir bildirme, banka" },
    { id: "B2", title: "Orta üstü", d: "Resmî yazışma, tartışma, deyimler, iş hayatı" },
    { id: "C1", title: "İleri", d: "Akademik dil, müzakere, varsayımlar, toplum, aksanlar, deyimler" }
  ],
  interests: {
    tech: { label: "Teknoloji", words: [
      W("computer", "bilgisayar", "kımpyutır", "I have a computer.", "Bir bilgisayarım var."),
      W("app", "uygulama", "ep", "It's a good app.", "Bu iyi bir uygulama."),
      W("software", "yazılım", "softver", "The software is new.", "Yazılım yeni."),
      W("developer", "geliştirici", "dıvelıpır", "She is a developer.", "O bir geliştirici.")],
      sentences: [["I am a developer.", "Ben geliştiriciyim."], ["She works on the app.", "O, uygulama üzerinde çalışıyor."]] },
    football: { label: "Futbol", words: [
      W("match", "maç", "meç", "The match is today.", "Maç bugün."),
      W("team", "takım", "tiim", "The team is from London.", "Takım Londra'dan."),
      W("player", "oyuncu", "pleyır", "He is a player.", "O bir oyuncu."),
      W("goal", "gol, hedef", "goul", "It's a goal!", "Gol!")],
      sentences: [["I watch the match tonight.", "Bu akşam maçı izliyorum."], ["He plays for the team.", "O, takımda oynuyor."]] },
    business: { label: "İş hayatı", words: [
      W("meeting", "toplantı", "miiting", "I have a meeting.", "Bir toplantım var."),
      W("colleague", "iş arkadaşı", "kaliig", "She is a colleague.", "O bir iş arkadaşı."),
      W("customer", "müşteri", "kastımır", "The customer is from Turkey.", "Müşteri Türkiye'den."),
      W("company", "şirket", "kampıni", "The company is in London.", "Şirket Londra'da.")],
      sentences: [["I have a meeting today.", "Bugün bir toplantım var."], ["We have a new customer.", "Yeni bir müşterimiz var."]] },
    finance: { label: "Finans", words: [
      W("bank", "banka", "benk", "The bank is there.", "Banka orada."),
      W("account", "hesap", "ıkaunt", "I have an account.", "Bir hesabım var."),
      W("bill", "fatura", "bil", "It's a bill.", "Bu bir fatura."),
      W("pound", "sterlin", "paund", "It's ten pounds.", "On sterlin.")],
      sentences: [["I have an account at the bank.", "Bankada bir hesabım var."], ["I pay the bill.", "Faturayı ödüyorum."]] },
    travel: { label: "Seyahat", words: [
      W("train", "tren", "treyn", "The train is here.", "Tren burada."),
      W("ticket", "bilet", "tikit", "I have a ticket.", "Bir biletim var."),
      W("airport", "havalimanı", "eırport", "The airport is there.", "Havalimanı orada."),
      W("hotel", "otel", "houtel", "The hotel is nice.", "Otel güzel.")],
      sentences: [["I buy a ticket.", "Bir bilet alıyorum."], ["The train leaves now.", "Tren şimdi kalkıyor."]] },
    everyday: { label: "Günlük hayat", words: [
      W("shop", "dükkân, market", "şop", "The shop is there.", "Market orada."),
      W("flat", "daire (İngiltere)", "flet", "I have a flat.", "Bir dairem var.", { note: "Amerikan İngilizcesi: apartment" }),
      W("bread", "ekmek", "bred", "The bread is good.", "Ekmek güzel."),
      W("cup", "fincan", "kap", "A cup of coffee, please.", "Bir fincan kahve, lütfen.")],
      sentences: [["I buy bread at the shop.", "Marketten ekmek alıyorum."], ["We live in a flat.", "Bir dairede oturuyoruz."]] }
  },
  placement: {
    A0: [
      Q("\"Teşekkürler\" İngilizce nasıl söylenir?", ["thank you", "hello", "sorry", "yes"], "thank you = teşekkürler."),
      Q("\"I ___ a student.\"", ["am", "is", "are", "be"], "I ile am kullanılır: I am a student."),
      Q("\"Where are you from?\" ne demek?", ["Nerelisin?", "Nerede oturuyorsun?", "Nasılsın?", "Adın ne?"], "Where ... from = nereden."),
      Q("\"o (kadın)\" hangisi?", ["she", "he", "it", "they"], "she = o (kadın), he = o (erkek), it = o (nesne, hayvan)."),
      Q("\"bir elma\"", ["an apple", "a apple", "apple", "the apple an"], "Ünlüyle başlayan kelimeden önce an: an apple."),
      Q("\"Anlamıyorum.\"", ["I don't understand.", "I not understand.", "I understand not.", "I doesn't understand."], "Olumsuz: don't + fiil."),
      Q("8 sayısı hangisi?", ["eight", "eighteen", "eighty", "height"], "8 = eight."),
      Q("\"O İngilizce konuşur.\" (he)", ["He speaks English.", "He speak English.", "He speaking English.", "He is speak English."], "he/she/it ile fiil -s alır: speaks.")
    ],
    A1: [
      Q("\"half past three\" saat kaçtır?", ["3:30", "2:30", "3:15", "3:45"], "half past three = üçü yarım geçiyor = 3:30."),
      Q("\"Ali'nin babası\"", ["Ali's father", "father Ali's", "Ali father", "the father of Ali's"], "İyelik: isim + 's + sahip olunan."),
      Q("\"Masada iki kitap var.\"", ["There are two books on the table.", "There is two books on the table.", "It has two books on the table.", "Two books is on the table."], "Çoğul için there are."),
      Q("\"Şu an otobüsü bekliyorum.\"", ["I'm waiting for the bus now.", "I wait for the bus now.", "I'm wait the bus now.", "I waiting for the bus now."], "Şu an olan iş: am/is/are + -ing."),
      Q("\"Okumayı severim.\"", ["I like reading.", "I like read.", "I am like reading.", "I likes reading."], "like + -ing (ya da like to read)."),
      Q("57 sayısı?", ["fifty-seven", "seventy-five", "fifteen-seven", "fifty-six"], "fifty + seven."),
      Q("\"It's raining.\" ne demek?", ["Yağmur yağıyor.", "Kar yağıyor.", "Hava soğuk.", "Güneşli."], "rain = yağmur yağmak."),
      Q("\"Pazartesi günü\"", ["on Monday", "in Monday", "at Monday", "Monday on"], "Günlerle on kullanılır.")
    ],
    A2: [
      Q("\"Dün sinemaya gittim.\"", ["I went to the cinema yesterday.", "I go to the cinema yesterday.", "I have gone to the cinema yesterday.", "I goed to the cinema yesterday."], "Belirli geçmiş zaman: past simple (went)."),
      Q("\"Üç yıldır Londra'da yaşıyorum.\"", ["I have lived in London for three years.", "I live in London since three years.", "I lived in London for three years now.", "I am living in London since three years."], "Süren durum: present perfect + for + süre."),
      Q("\"Paris'e hiç gittin mi?\"", ["Have you ever been to Paris?", "Did you ever go to Paris ever?", "Are you ever been to Paris?", "Have you ever went to Paris?"], "Deneyim: Have you ever + V3."),
      Q("\"I have a headache.\" ne demek?", ["Başım ağrıyor.", "Başımı vurdum.", "Kafam karıştı.", "Hastayım."], "headache = baş ağrısı."),
      Q("Plan: \"Yarın annemi ziyaret edeceğim.\" (önceden karar verilmiş)", ["I'm going to visit my mother tomorrow.", "I visit my mother tomorrow will.", "I will visiting my mother tomorrow.", "I going to visit my mother tomorrow."], "Önceden verilmiş karar: be going to."),
      Q("\"see\" fiilinin üçüncü hali (V3)?", ["seen", "saw", "seed", "sawn"], "see – saw – seen."),
      Q("\"Doktora gitmelisin.\"", ["You should see a doctor.", "You should to see a doctor.", "You should seeing a doctor.", "You must to see a doctor."], "should + yalın fiil."),
      Q("\"Londra, Bristol'den daha büyük.\"", ["London is bigger than Bristol.", "London is more big than Bristol.", "London is big than Bristol.", "London is biggest than Bristol."], "Kısa sıfat: -er + than.")
    ],
    B1: [
      Q("\"Formun cumaya kadar gönderilmesi gerekiyor.\"", ["The form must be sent by Friday.", "The form must send by Friday.", "The form must sent by Friday.", "The form must be send by Friday."], "Edilgen: must be + V3."),
      Q("\"Zengin olsaydım bir ev alırdım.\"", ["If I were rich, I would buy a house.", "If I am rich, I would buy a house.", "If I would be rich, I buy a house.", "If I were rich, I will buy a house."], "Gerçek dışı şimdi: If + past, would + fiil."),
      Q("\"Eskiden sigara içerdim.\"", ["I used to smoke.", "I use to smoking.", "I am used to smoke.", "I used smoking."], "Geçmişteki alışkanlık: used to + fiil."),
      Q("\"başvurduğum iş\"", ["the job I applied for", "the job I applied", "the job for I applied", "the job which I applied it for"], "İlgi cümlesi isimden sonra gelir, edat sona kalır."),
      Q("\"Ben vardığımda tren çoktan gitmişti.\"", ["When I arrived, the train had already left.", "When I arrived, the train has already left.", "When I had arrived, the train already left.", "When I arrive, the train had already left."], "Geçmişte daha önceki olay: had + V3."),
      Q("\"Kitap okuyordum, o sırada telefon çaldı.\"", ["I was reading when the phone rang.", "I read when the phone was ringing.", "I was reading when the phone was rung.", "I am reading when the phone rang."], "Süren eylem past continuous, araya giren olay past simple."),
      Q("good → daha iyi?", ["better", "gooder", "more good", "best"], "good – better – best."),
      Q("\"deadline\" ne demek?", ["son tarih", "ölüm tarihi", "başvuru", "form"], "deadline = son teslim tarihi.")
    ],
    B2: [
      Q("\"Yorgun olmasına rağmen çalışmaya devam etti.\"", ["Although she was tired, she kept working.", "Despite she was tired, she kept working.", "However she was tired, she kept working.", "Although tired was she, she kept working."], "although + cümle; despite + isim."),
      Q("\"Yağmura rağmen dışarı çıktık.\"", ["We went out despite the rain.", "We went out although the rain.", "We went out despite of the rain.", "We went out in spite the rain."], "despite + isim (of yok)."),
      Q("\"I'm tired.\" → She said ...", ["that she was tired", "that she is tired was", "if she was tired", "that was she tired"], "Dolaylı anlatım: am → was."),
      Q("\"break the ice\" ne demek?", ["buzları eritmek, ortamı yumuşatmak", "bir şeyi kırmak", "üşümek", "kavga etmek"], "break the ice = tanışma gerginliğini gidermek."),
      Q("\"Onu ertele.\" (it = onu, put off)", ["Put it off.", "Put off it.", "It put off.", "Off put it."], "Zamir nesne phrasal verb'ün ortasına girer: put it off."),
      Q("\"You're coming, aren't you?\" ne ifade eder?", ["Geliyorsun, değil mi?", "Kesin gel!", "Gelmiyorsun.", "Nasıl geliyorsun?"], "Soru eki (question tag) onay bekler."),
      Q("Resmî e-postada \"Ekte ... bulunmaktadır\":", ["Please find attached ...", "Further to ...", "Yours sincerely ...", "Don't hesitate ..."], "Please find attached = ekte bulabilirsiniz."),
      Q("\"notice period\" nedir?", ["işten ayrılmadan önceki ihbar süresi", "deneme süresi", "yıllık izin", "maaş artışı"], "notice period = ihbar süresi.")
    ],
    C1: [
      Q("\"Bilseydim gelirdim.\"", ["If I had known, I would have come.", "If I knew, I would come yesterday.", "If I would have known, I had come.", "If I have known, I would come."], "Geçmişte gerçek dışı: If + had + V3, would have + V3."),
      Q("\"Asla böyle bir şey görmemiştim.\" (vurgulu)", ["Never had I seen such a thing.", "Never I had seen such a thing.", "Never I have seen such thing.", "Had never I seen such a thing."], "Olumsuz zarfla başlayınca devrik yapı: Never had I seen."),
      Q("\"The more I read, the more ___.\"", ["I understand", "understand I", "do I understand", "I understanding"], "The more ..., the more + özne + fiil."),
      Q("\"The project was put on the back burner.\" ne demek?", ["Proje ertelendi, öncelik dışı kaldı.", "Proje yandı.", "Proje başarıyla bitti.", "Proje mutfakta yapıldı."], "on the back burner = ikinci plana atılmış."),
      Q("\"The results, however, suggest ...\" — however ne demek?", ["ancak, bununla birlikte", "dolayısıyla", "örneğin", "kesinlikle"], "however = ancak; therefore = dolayısıyla."),
      Q("İngiliz İngilizcesi \"lift\" Amerikan İngilizcesinde?", ["elevator", "escalator", "ride", "stairs"], "lift (BrE) = elevator (AmE) = asansör."),
      Q("\"It's not my cup of tea.\"", ["Bana göre değil, tarzım değil.", "Çayımı içmedim.", "Çok güzel bir fikir.", "Hiç umurumda değil."], "not my cup of tea = hoşlandığım bir şey değil."),
      Q("\"You should have told me.\" ne ifade eder?", ["Bana söylemeliydin (eleştiri).", "Bana söyleyebilirsin.", "Bana söyleyeceksin.", "Bana söyledin."], "should have + V3 = -meliydin.")
    ]
  }
};
