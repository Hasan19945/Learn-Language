const EN_B1 = [
{
  id: "en-b1-1", title: "Resmî işler", no: "Forms and official matters", icon: "doc",
  intro: "Belediye, devlet daireleri ve resmî formlarla uğraşırken gereken dili ve edilgen yapıyı (passive) öğreniyoruz.",
  notes: [
    { h: "Edilgen yapı (passive)", p: "Kimin yaptığı önemli değilse ya da belli değilse edilgen yapı kullanılır: be + V3. Resmî metinlerde çok yaygındır.",
      table: [["Etken", "Edilgen", "Türkçe"], ["They send the letter.", "The letter is sent.", "Mektup gönderilir."], ["They sent the letter.", "The letter was sent.", "Mektup gönderildi."], ["You must fill in the form.", "The form must be filled in.", "Formun doldurulması gerekir."], ["They will check it.", "It will be checked.", "Kontrol edilecek."]] },
    { h: "Yapan kişi: by", p: "Yapanı söylemek gerekirse by kullanılır: The form must be signed by both parents. (Form her iki ebeveyn tarafından imzalanmalı.)" },
    { h: "Son tarih: by", p: "by + tarih = en geç ... kadar: Please send the documents by Friday. until ise süreklilik bildirir: The office is open until five." },
    { h: "Belgeler", p: "Resmî işlerde sık istenenler: proof of identity (kimlik belgesi), proof of address (adres belgesi, örneğin fatura), National Insurance number (İngiltere'de sosyal güvenlik numarası)." }
  ],
  tip: "Türkçede \"doldurulmalı\" tek kelimedir. İngilizcede üç parça: must + be + filled in. \"The form must fill in\" yanlıştır; bu \"form bir şeyi doldurmalı\" demek olur.",
  words: [
    W("fill in", "doldurmak (form)", "", "Please fill in this form.", "Lütfen bu formu doldurun.", { note: "ABD: fill out" }),
    W("sign", "imzalamak", "", "Sign here, please.", "Buraya imza atın, lütfen.", { note: "g okunmaz" }),
    W("apply for", "başvurmak", "", "I applied for a residence permit.", "Oturma izni için başvurdum."),
    W("application", "başvuru", "", "Your application has been received.", "Başvurunuz alındı."),
    W("deadline", "son tarih", "", "The deadline is 30 June.", "Son tarih 30 Haziran."),
    W("proof of address", "adres belgesi", "", "A bank statement can be used as proof of address.", "Banka dökümü adres belgesi olarak kullanılabilir."),
    W("council", "belediye", "", "Contact the council about your rubbish collection.", "Çöp toplama için belediyeyle iletişime geçin."),
    W("reference number", "referans numarası", "", "Please quote your reference number.", "Lütfen referans numaranızı belirtin."),
    W("is required", "gereklidir", "", "Photo ID is required.", "Fotoğraflı kimlik gereklidir."),
    W("was sent", "gönderildi", "", "The letter was sent last week.", "Mektup geçen hafta gönderildi."),
    W("be approved", "onaylanmak", "", "Your application will be approved within two weeks.", "Başvurunuz iki hafta içinde onaylanacak."),
    W("submit", "teslim etmek, sunmak", "", "Submit the form online.", "Formu internetten gönderin."),
    W("by", "en geç (tarih); tarafından", "", "Send it by Friday.", "En geç cumaya kadar gönderin."),
    W("on behalf of", "adına", "", "I'm calling on behalf of my father.", "Babam adına arıyorum.")
  ],
  dialogue: [["A", "Good morning. I'd like to apply for a parking permit.", "Günaydın. Park izni için başvurmak istiyorum."], ["B", "You need to fill in this form. Proof of address is required.", "Bu formu doldurmanız gerekiyor. Adres belgesi gereklidir."], ["A", "Is a gas bill OK?", "Doğalgaz faturası olur mu?"], ["B", "Yes, if it was sent in the last three months.", "Evet, son üç ay içinde gönderildiyse."], ["A", "When will the permit be sent?", "İzin ne zaman gönderilecek?"], ["B", "It will be posted to you within ten days. Please sign here.", "On gün içinde size postalanacak. Lütfen buraya imza atın."]],
  quiz: [
    { q: "\"Form cumaya kadar gönderilmeli.\"", o: ["The form must be sent by Friday.", "The form must send by Friday.", "The form must sent by Friday.", "The form must be send until Friday."], a: 0, e: "must + be + V3; son tarih by ile." },
    { q: "\"Mektup geçen hafta gönderildi.\"", o: ["The letter was sent last week.", "The letter is sent last week.", "The letter sent last week.", "The letter was send last week."], a: 0, e: "Geçmişte edilgen: was + V3 (sent)." },
    { q: "\"by Friday\" ne demek?", o: ["en geç cumaya kadar", "cuma günü boyunca", "cumadan sonra"], a: 0, e: "by + tarih = son tarih. until = o zamana kadar süreklilik." },
    { q: "\"fill in\" ne demek?", o: ["(form) doldurmak", "içeri girmek", "imzalamak"], a: 0, e: "fill in a form = form doldurmak." },
    { q: "Edilgen yapı ne zaman kullanılır?", o: ["Yapan kişi önemli ya da belli olmadığında", "Sadece geçmiş zamanda", "Sadece soru cümlelerinde"], a: 0, e: "Edilgen: işi kimin yaptığı önemli değilken. Resmî dilde yaygın." }
  ],
  review: ["Edilgen: be + V3 (is sent, was sent, must be signed).", "by + tarih = en geç; by + kişi = tarafından.", "fill in, sign, apply for, submit, deadline."]
},
{
  id: "en-b1-2", title: "İş görüşmesi", no: "Job interview", icon: "briefcase",
  intro: "İş başvurusu ve iş görüşmesinde kendini anlatmayı, deneyimlerini ve güçlü yanlarını söylemeyi öğreniyoruz.",
  notes: [
    { h: "Deneyimi anlatmak", p: "Süren deneyim için present perfect: I've worked in sales for five years. Bitmiş iş için past simple: I worked at a hotel from 2018 to 2020. Hâlâ süren ve devam eden etkinlik için present perfect continuous: I've been studying English for two years." },
    { h: "Sık sorulan sorular", p: "Tell me about yourself. (Kendinizden bahsedin.) What are your strengths? (Güçlü yanlarınız neler?) Why do you want this job? Where do you see yourself in five years? Cevaplarda somut örnek ver: For example, in my last job I ..." },
    { h: "Önemli ifadeler", p: "I'm good at + -ing / isim: I'm good at solving problems. I'm interested in + -ing / isim: I'm interested in working with people. I have experience in + isim: I have experience in customer service." }
  ],
  tip: "Türkçe konuşanlar sık sık \"I am working here since 2020\" der. Doğrusu: \"I have worked here since 2020\" ya da \"I have been working here since 2020.\" Ayrıca \"I'm good in\" değil \"I'm good at\".",
  words: [
    W("CV", "özgeçmiş", "", "Please send your CV and a cover letter.", "Lütfen özgeçmişinizi ve ön yazınızı gönderin.", { note: "ABD: résumé" }),
    W("cover letter", "ön yazı", "", "My cover letter is one page long.", "Ön yazım bir sayfa."),
    W("position", "pozisyon", "", "I'm applying for the position of nurse.", "Hemşire pozisyonu için başvuruyorum."),
    W("experience", "deneyim", "", "I have experience in customer service.", "Müşteri hizmetlerinde deneyimim var.", { note: "sayılamaz: a lot of experience" }),
    W("skills", "beceriler", "", "What skills do you have?", "Hangi becerileriniz var?"),
    W("strength", "güçlü yan", "", "My biggest strength is teamwork.", "En büyük güçlü yanım takım çalışması."),
    W("weakness", "zayıf yan", "", "My weakness is that I'm sometimes too careful.", "Zayıf yanım bazen fazla dikkatli olmam."),
    W("salary", "maaş", "", "What is the starting salary?", "Başlangıç maaşı ne kadar?"),
    W("full-time", "tam zamanlı", "", "It's a full-time job.", "Tam zamanlı bir iş."),
    W("part-time", "yarı zamanlı", "", "I'm looking for part-time work.", "Yarı zamanlı iş arıyorum."),
    W("be good at", "-de iyi olmak", "", "I'm good at working under pressure.", "Baskı altında çalışmakta iyiyim."),
    W("reliable", "güvenilir", "", "My manager says I'm very reliable.", "Müdürüm çok güvenilir olduğumu söylüyor."),
    W("references", "referanslar", "", "Can you provide two references?", "İki referans verebilir misiniz?"),
    W("hire", "işe almak", "", "They hired me after the second interview.", "İkinci görüşmeden sonra beni işe aldılar.")
  ],
  dialogue: [["A", "So, tell me about yourself.", "Evet, kendinizden bahseder misiniz?"], ["B", "I'm a nurse. I've worked in hospitals for six years, and I've been living in the UK since 2022.", "Hemşireyim. Altı yıldır hastanelerde çalışıyorum ve 2022'den beri İngiltere'de yaşıyorum."], ["A", "What are your strengths?", "Güçlü yanlarınız neler?"], ["B", "I'm good at staying calm. For example, in my last job I worked in A&E.", "Sakin kalmakta iyiyim. Örneğin son işimde acil serviste çalıştım."], ["A", "Why do you want this position?", "Bu pozisyonu neden istiyorsunuz?"], ["B", "I'm interested in working with children, and your hospital has a great reputation.", "Çocuklarla çalışmakla ilgileniyorum ve hastanenizin çok iyi bir ünü var."]],
  quiz: [
    { q: "\"2020'den beri burada çalışıyorum.\"", o: ["I have worked here since 2020.", "I am working here since 2020.", "I work here since 2020.", "I worked here since 2020."], a: 0, e: "Süren durum: present perfect + since." },
    { q: "\"Problem çözmekte iyiyim.\"", o: ["I'm good at solving problems.", "I'm good in solving problems.", "I'm good at solve problems.", "I'm good for solving problems."], a: 0, e: "good at + -ing." },
    { q: "\"experience\" ile hangisi doğru?", o: ["I have a lot of experience in sales.", "I have an experience in sales.", "I have experiences many in sales."], a: 0, e: "İş deneyimi anlamında experience sayılamaz: a lot of experience." },
    { q: "\"part-time\" ne demek?", o: ["yarı zamanlı", "tam zamanlı", "geçici"], a: 0, e: "part-time = yarı zamanlı, full-time = tam zamanlı." },
    { q: "\"Tell me about yourself.\" sorusuna en uygun başlangıç?", o: ["I'm a nurse with six years of experience.", "Yes, I tell.", "My name is good."], a: 0, e: "Kısaca meslek ve deneyimle başla." }
  ],
  review: ["Süren deneyim: I've worked ... for/since ...", "good at, interested in, experience in.", "CV, cover letter, salary, full-time, part-time."]
},
{
  id: "en-b1-3", title: "Fikir bildirmek", no: "Opinions and comparisons", icon: "scale",
  intro: "Fikrini söylemeyi, katılmayı ve katılmamayı, şeyleri karşılaştırmayı öğreniyoruz.",
  notes: [
    { h: "Fikir bildirmek", p: "I think ... / I believe ... / In my opinion, ... / As far as I'm concerned, ... Daha temkinli: I'm not sure, but I think ... Fikir sormak: What do you think about ...?" },
    { h: "Katılmak, katılmamak", p: "I agree (with you). Katılıyorum. I don't agree / I disagree. Katılmıyorum. Kibar karşı çıkış: I see your point, but ... (Ne demek istediğini anlıyorum ama ...) Kısmen: I agree up to a point." },
    { h: "Karşılaştırma", p: "En üstün derece (superlative): the + -est / the most: the cheapest, the most interesting. Eşitlik: as ... as: London is not as cheap as Leeds. (Londra Leeds kadar ucuz değil.)",
      table: [["Yapı", "Örnek", "Türkçe"], ["-er than", "Trains are faster than buses.", "Trenler otobüslerden hızlı."], ["more ... than", "It's more comfortable than a bus.", "Otobüsten daha rahat."], ["the -est", "It's the fastest way.", "En hızlı yol."], ["as ... as", "It's as expensive as a taxi.", "Taksi kadar pahalı."], ["not as ... as", "It isn't as fast as a train.", "Tren kadar hızlı değil."]] }
  ],
  tip: "Türkçede \"Bence\" ya da \"Katılıyorum\" deriz. İngilizcede \"I am agree\" çok yaygın bir hatadır; agree bir fiildir: \"I agree.\" Olumsuzu: \"I don't agree\" (I am not agree değil).",
  words: [
    W("opinion", "fikir, görüş", "", "In my opinion, it's too expensive.", "Bence fazla pahalı."),
    W("agree", "katılmak", "", "I agree with you.", "Sana katılıyorum."),
    W("disagree", "katılmamak", "", "I'm afraid I disagree.", "Korkarım katılmıyorum."),
    W("I see your point, but ...", "Ne demek istediğini anlıyorum ama ...", "", "I see your point, but it's not that simple.", "Ne demek istediğini anlıyorum ama o kadar basit değil."),
    W("believe", "inanmak, düşünmek", "", "I believe education should be free.", "Eğitimin ücretsiz olması gerektiğine inanıyorum."),
    W("prefer", "tercih etmek", "", "I prefer trains to buses.", "Treni otobüse tercih ederim.", { note: "prefer A to B" }),
    W("as ... as", "... kadar", "", "This phone is as good as the expensive one.", "Bu telefon pahalı olan kadar iyi."),
    W("the most", "en (uzun sıfatla)", "", "It's the most beautiful city in England.", "İngiltere'nin en güzel şehri."),
    W("advantage", "avantaj", "", "One advantage of living in the city is transport.", "Şehirde yaşamanın bir avantajı ulaşım."),
    W("disadvantage", "dezavantaj", "", "The main disadvantage is the noise.", "Asıl dezavantaj gürültü."),
    W("on the other hand", "öte yandan", "", "On the other hand, the rent is lower.", "Öte yandan kira daha düşük."),
    W("depend on", "-e bağlı olmak", "", "It depends on the price.", "Fiyata bağlı."),
    W("worse", "daha kötü", "", "The traffic is worse than last year.", "Trafik geçen yıldan daha kötü.", { note: "bad – worse – the worst" }),
    W("convince", "ikna etmek", "", "You haven't convinced me.", "Beni ikna etmedin.")
  ],
  dialogue: [["A", "What do you think about living in London?", "Londra'da yaşamak hakkında ne düşünüyorsun?"], ["B", "In my opinion, it's the most exciting city in the world.", "Bence dünyanın en heyecan verici şehri."], ["A", "I see your point, but it's much more expensive than other cities.", "Ne demek istediğini anlıyorum ama diğer şehirlerden çok daha pahalı."], ["B", "That's true. On the other hand, salaries are higher.", "Doğru. Öte yandan maaşlar daha yüksek."], ["A", "Maybe, but they aren't as high as the rents!", "Belki ama kiralar kadar yüksek değil!"], ["B", "OK, I agree with you on that.", "Tamam, bu konuda sana katılıyorum."]],
  quiz: [
    { q: "\"Sana katılıyorum.\"", o: ["I agree with you.", "I am agree with you.", "I agree to you.", "I'm agreeing you."], a: 0, e: "agree bir fiildir: I agree with you." },
    { q: "\"Londra Leeds kadar ucuz değil.\"", o: ["London isn't as cheap as Leeds.", "London isn't cheap like Leeds as.", "London isn't so cheap than Leeds.", "London isn't as cheaper as Leeds."], a: 0, e: "not as + sıfat + as." },
    { q: "\"İngiltere'nin en güzel şehri\"", o: ["the most beautiful city in England", "the beautifulest city of England", "the more beautiful city in England", "most beautiful city at England"], a: 0, e: "Uzun sıfat: the most + sıfat; yer için in." },
    { q: "\"Treni otobüse tercih ederim.\"", o: ["I prefer trains to buses.", "I prefer trains than buses.", "I prefer trains from buses.", "I more prefer trains."], a: 0, e: "prefer A to B." },
    { q: "\"It depends on the price.\" ne demek?", o: ["Fiyata bağlı.", "Fiyat çok yüksek.", "Fiyatı sordum."], a: 0, e: "depend on = -e bağlı olmak." }
  ],
  review: ["In my opinion / I think / I believe.", "I agree / I don't agree (I am agree değil).", "the most + uzun sıfat; as ... as = ... kadar."]
},
{
  id: "en-b1-4", title: "Banka ve para", no: "Banking and money", icon: "bank",
  intro: "Banka hesabı açmayı, para transferini, borç almayı ve günlük para ifadelerini öğreniyoruz.",
  notes: [
    { h: "borrow mu, lend mi?", p: "Türkçede \"borç almak\" ve \"borç vermek\" farklı fiillerle söylenir; İngilizcede de iki ayrı fiil var ama sık karıştırılır.",
      table: [["Fiil", "Anlam", "Örnek"], ["borrow (from)", "ödünç almak", "Can I borrow ten pounds from you?"], ["lend (to)", "ödünç vermek", "Can you lend me ten pounds?"], ["owe", "borçlu olmak", "I owe you ten pounds."], ["pay back", "geri ödemek", "I'll pay you back tomorrow."]] },
    { h: "Banka kelimeleri", p: "current account (vadesiz hesap), savings account (birikim hesabı), balance (bakiye), statement (hesap dökümü), overdraft (ek hesap), interest (faiz), cash machine / ATM (bankamatik), PIN (şifre)." },
    { h: "Para ve sayılar", p: "£1,500 = one thousand five hundred pounds ya da fifteen hundred pounds. £2.50 = two pounds fifty. Binlik ayırıcı virgül, ondalık ayırıcı noktadır (Türkçenin tersi)." }
  ],
  tip: "Türkçe konuşanlar sık sık \"Can you borrow me money?\" der. Bu yanlış! Karşındaki kişi parayı veriyorsa lend: \"Can you lend me some money?\" Sen alıyorsan borrow: \"Can I borrow some money?\" Ayrıca İngilizcede 1,500 = bin beş yüz; 1.5 = bir buçuk.",
  words: [
    W("open an account", "hesap açmak", "", "I'd like to open an account.", "Hesap açmak istiyorum."),
    W("current account", "vadesiz hesap", "", "My salary goes into my current account.", "Maaşım vadesiz hesabıma yatıyor.", { note: "ABD: checking account" }),
    W("savings account", "birikim hesabı", "", "I put £100 a month into my savings account.", "Her ay birikim hesabıma 100 sterlin koyuyorum."),
    W("balance", "bakiye", "", "I'd like to check my balance.", "Bakiyemi kontrol etmek istiyorum."),
    W("transfer", "havale, transfer etmek", "", "I transferred the money yesterday.", "Parayı dün havale ettim."),
    W("withdraw", "(para) çekmek", "", "I need to withdraw some cash.", "Biraz nakit çekmem lazım.", { note: "withdraw – withdrew – withdrawn" }),
    W("borrow", "ödünç almak", "", "Can I borrow your pen?", "Kalemini ödünç alabilir miyim?"),
    W("lend", "ödünç vermek", "", "Can you lend me £20?", "Bana 20 sterlin borç verebilir misin?", { note: "lend – lent – lent" }),
    W("owe", "borçlu olmak", "", "How much do I owe you?", "Sana ne kadar borçluyum?"),
    W("loan", "kredi, borç", "", "We took out a loan to buy a car.", "Araba almak için kredi çektik."),
    W("interest", "faiz", "", "The interest rate is 5%.", "Faiz oranı yüzde 5."),
    W("statement", "hesap dökümü", "", "You can download your statement online.", "Hesap dökümünüzü internetten indirebilirsiniz."),
    W("afford", "(parası) yetmek", "", "We can't afford a new car.", "Yeni bir arabaya paramız yetmez."),
    W("save", "biriktirmek; kurtarmak", "", "I'm saving for a holiday.", "Tatil için para biriktiriyorum.")
  ],
  dialogue: [["A", "Good afternoon. I'd like to open a current account.", "İyi günler. Vadesiz hesap açmak istiyorum."], ["B", "Of course. Do you have photo ID and proof of address?", "Tabii. Fotoğraflı kimliğiniz ve adres belgeniz var mı?"], ["A", "Yes, here's my passport and a council tax bill.", "Evet, işte pasaportum ve belediye vergisi faturam."], ["B", "Thank you. Would you also like a savings account? The interest rate is 4%.", "Teşekkürler. Birikim hesabı da ister misiniz? Faiz oranı yüzde 4."], ["A", "Not now, thanks. I can't afford to save much at the moment.", "Şimdilik değil, teşekkürler. Şu an çok para biriktirecek durumum yok."], ["B", "No problem. Your card will be sent to you in five days.", "Sorun değil. Kartınız beş gün içinde size gönderilecek."]],
  quiz: [
    { q: "Arkadaşından para istiyorsun:", o: ["Can you lend me £20?", "Can you borrow me £20?", "Can you owe me £20?", "Can I lend £20 from you?"], a: 0, e: "Karşındaki veriyorsa lend: lend me." },
    { q: "\"Kalemini ödünç alabilir miyim?\"", o: ["Can I borrow your pen?", "Can I lend your pen?", "Can you borrow me your pen?"], a: 0, e: "Sen alıyorsan borrow." },
    { q: "\"Sana ne kadar borçluyum?\"", o: ["How much do I owe you?", "How much do I borrow you?", "How much I owe to you?", "How many do I owe you?"], a: 0, e: "owe = borçlu olmak." },
    { q: "\"We can't afford it.\" ne demek?", o: ["Buna paramız yetmez.", "Bunu istemiyoruz.", "Bunu bulamıyoruz."], a: 0, e: "afford = (bir şeye) parası yetmek." },
    { q: "İngilizcede \"£1,500\" nasıl okunur?", o: ["one thousand five hundred pounds", "one point five pounds", "fifteen pounds"], a: 0, e: "İngilizcede virgül binlik ayırıcıdır: bin beş yüz." }
  ],
  review: ["borrow = ödünç almak, lend = ödünç vermek, owe = borçlu olmak.", "balance, statement, interest, loan, withdraw.", "İngilizcede 1,500 = bin beş yüz; 1.5 = bir buçuk."]
},
{
  id: "en-b1-5", title: "Eğitim ve koşullar", no: "Education and conditionals", icon: "school",
  intro: "Okul ve eğitim kelimelerini ve koşul cümlelerini (if) öğreniyoruz: gerçek ve hayalî durumlar.",
  notes: [
    { h: "Birinci koşul: gerçek olasılık", p: "Gelecekte olabilecek bir durum: If + geniş zaman, will + fiil. If I pass the exam, I'll go to university. (Sınavı geçersem üniversiteye gideceğim.) if'li kısımda will kullanılmaz." },
    { h: "İkinci koşul: hayalî durum", p: "Şu an gerçek olmayan ya da pek olası olmayan durum: If + past simple, would + fiil. If I had more time, I would study Spanish. (Daha fazla vaktim olsa İspanyolca çalışırdım.) be fiili için resmî dilde hep were: If I were you, I'd apply. (Senin yerinde olsam başvururdum.)",
      table: [["Tür", "if kısmı", "Ana cümle", "Türkçe"], ["1.", "If it rains,", "we'll stay home.", "Yağmur yağarsa evde kalırız."], ["2.", "If I won the lottery,", "I'd buy a house.", "Piyango çıksa ev alırdım."], ["2.", "If I were you,", "I'd take the course.", "Senin yerinde olsam kursa yazılırdım."]] },
    { h: "unless", p: "unless = if ... not (-medikçe, -mazsa): You won't pass unless you study. (Çalışmazsan geçemezsin.)" }
  ],
  tip: "Türkçede \"-ırsa\" ekinde gelecek anlamı vardır. İngilizcede if'ten sonra will gelmez: \"If I will pass\" yanlış, doğrusu \"If I pass the exam, I'll celebrate.\"",
  words: [
    W("course", "kurs, ders", "", "I'm doing an English course.", "İngilizce kursuna gidiyorum."),
    W("degree", "üniversite diploması", "", "She has a degree in engineering.", "Mühendislik diploması var."),
    W("exam", "sınav", "", "The exam is in June.", "Sınav haziranda."),
    W("pass", "(sınavı) geçmek", "", "If I pass the exam, I'll celebrate.", "Sınavı geçersem kutlama yapacağım."),
    W("fail", "(sınavdan) kalmak", "", "He failed his driving test.", "Ehliyet sınavından kaldı."),
    W("revise", "(sınava) tekrar çalışmak", "", "I need to revise for the exam.", "Sınav için tekrar yapmam lazım.", { note: "ABD: review" }),
    W("enrol", "kaydolmak", "", "I enrolled on an evening course.", "Bir akşam kursuna kaydoldum.", { note: "ABD: enroll" }),
    W("certificate", "sertifika", "", "You get a certificate at the end.", "Sonunda sertifika alırsın."),
    W("grade", "not", "", "She got good grades.", "İyi notlar aldı."),
    W("if", "eğer, -se, -sa", "", "If it rains, we'll stay home.", "Yağmur yağarsa evde kalırız."),
    W("unless", "-medikçe, -mazsa", "", "You won't pass unless you revise.", "Tekrar yapmazsan geçemezsin."),
    W("would", "-erdi, -ardı (koşul)", "", "I would travel more if I had money.", "Param olsa daha çok seyahat ederdim.", { note: "kısa: I'd" }),
    W("If I were you", "Senin yerinde olsam", "", "If I were you, I'd apply.", "Senin yerinde olsam başvururdum."),
    W("scholarship", "burs", "", "She got a scholarship to study in London.", "Londra'da okumak için burs aldı.")
  ],
  dialogue: [["A", "Are you going to do the advanced course?", "İleri seviye kursa yazılacak mısın?"], ["B", "If I pass the exam in June, I'll enrol in September.", "Haziranda sınavı geçersem eylülde kaydolacağım."], ["A", "Do you think you'll pass?", "Geçeceğini düşünüyor musun?"], ["B", "Not unless I revise more! If I had more time, I'd study every evening.", "Daha çok tekrar yapmazsam geçemem! Daha fazla vaktim olsa her akşam çalışırdım."], ["A", "If I were you, I'd study at the weekends.", "Senin yerinde olsam hafta sonları çalışırdım."], ["B", "Good idea. And if I get a good grade, I might get a scholarship.", "İyi fikir. İyi not alırsam belki burs da alırım."]],
  quiz: [
    { q: "\"Sınavı geçersem kutlama yapacağım.\"", o: ["If I pass the exam, I'll celebrate.", "If I will pass the exam, I'll celebrate.", "If I passed the exam, I'll celebrate.", "If I pass the exam, I celebrate will."], a: 0, e: "1. koşul: If + geniş zaman, will + fiil." },
    { q: "\"Daha fazla param olsa ev alırdım.\"", o: ["If I had more money, I would buy a house.", "If I have more money, I would buy a house.", "If I would have more money, I bought a house.", "If I had more money, I will buy a house."], a: 0, e: "2. koşul: If + past, would + fiil." },
    { q: "\"Senin yerinde olsam ...\"", o: ["If I were you, ...", "If I am you, ...", "If I would be you, ...", "If I was being you, ..."], a: 0, e: "Kalıp: If I were you, I'd ..." },
    { q: "\"Çalışmazsan geçemezsin.\" (unless ile)", o: ["You won't pass unless you study.", "You won't pass unless you don't study.", "You don't pass unless you will study."], a: 0, e: "unless zaten olumsuz anlamlıdır: unless you study = if you don't study." },
    { q: "\"revise\" İngiltere'de ne anlama gelir?", o: ["sınava tekrar çalışmak", "bir şeyi düzeltmek", "ziyaret etmek"], a: 0, e: "revise for an exam = sınava hazırlanmak, tekrar yapmak." }
  ],
  review: ["1. koşul: If + geniş zaman, will (if'ten sonra will yok).", "2. koşul: If + past, would. If I were you, I'd ...", "unless = if ... not."]
},
{
  id: "en-b1-6", title: "Geçmişi anlatmak", no: "Telling stories", icon: "chat",
  intro: "Geçmişte yaşananları hikâye gibi anlatmayı öğreniyoruz: past continuous, past perfect ve used to.",
  notes: [
    { h: "Past continuous", p: "Geçmişte bir anda süren eylem: was / were + -ing. Genellikle başka bir olayın arka planıdır: I was cooking when the phone rang. (Yemek yapıyordum, telefon çaldı.) while + süren eylem: While I was walking home, it started to rain." },
    { h: "Past perfect", p: "Geçmişteki bir olaydan daha önce olan olay: had + V3. When I arrived, the film had already started. (Vardığımda film çoktan başlamıştı.) Türkçedeki \"-mişti\" ekine benzer." },
    { h: "used to", p: "Geçmişte olan ama artık olmayan alışkanlık ve durumlar: I used to smoke. (Eskiden sigara içerdim.) We used to live in Izmir. Olumsuz: didn't use to. Soru: Did you use to ...?" },
    { h: "Hikâye bağlaçları", p: "First, ... Then, ... After that, ... Suddenly, ... In the end, ... (Sonunda) Anlatımı düzenli ve akıcı yapar." }
  ],
  tip: "Türkçedeki \"-ıyordum\" ve \"-mıştı\" eklerinin İngilizcede karşılıkları var: was doing ve had done. \"I was used to smoke\" yanlış; \"eskiden ...rdım\" için: I used to smoke. (be used to + -ing ise \"alışkın olmak\" demektir.)",
  words: [
    W("used to", "eskiden ...rdı", "", "I used to play football every day.", "Eskiden her gün futbol oynardım."),
    W("while", "-ırken", "", "While I was cooking, he called.", "Ben yemek yaparken o aradı."),
    W("suddenly", "aniden", "", "Suddenly the lights went out.", "Aniden ışıklar söndü."),
    W("in the end", "sonunda", "", "In the end, we found the hotel.", "Sonunda oteli bulduk."),
    W("after that", "ondan sonra", "", "After that, we went home.", "Ondan sonra eve gittik."),
    W("happen", "olmak, meydana gelmek", "", "What happened?", "Ne oldu?"),
    W("had already", "çoktan ...mıştı", "", "The train had already left.", "Tren çoktan gitmişti."),
    W("remember", "hatırlamak", "", "I remember my first day in London.", "Londra'daki ilk günümü hatırlıyorum."),
    W("childhood", "çocukluk", "", "I had a happy childhood.", "Mutlu bir çocukluğum oldu."),
    W("grow up", "büyümek", "", "I grew up in a small village.", "Küçük bir köyde büyüdüm.", { note: "grow – grew – grown" }),
    W("decide", "karar vermek", "", "We decided to move to England.", "İngiltere'ye taşınmaya karar verdik."),
    W("finally", "nihayet, en sonunda", "", "We finally arrived at midnight.", "Nihayet gece yarısı vardık."),
    W("realise", "fark etmek", "", "I realised I had lost my keys.", "Anahtarlarımı kaybettiğimi fark ettim.", { note: "ABD: realize" }),
    W("be used to", "-e alışkın olmak", "", "I'm used to the cold weather now.", "Artık soğuk havaya alışkınım.")
  ],
  dialogue: [["A", "What happened to your arm?", "Koluna ne oldu?"], ["B", "I fell off my bike last week. I was riding to work when it started to rain.", "Geçen hafta bisikletten düştüm. İşe gidiyordum, yağmur başladı."], ["A", "Oh no! Were you going fast?", "Eyvah! Hızlı mı gidiyordun?"], ["B", "Not really. Suddenly a car stopped in front of me. By the time I braked, I had already hit it.", "Pek değil. Aniden önümde bir araba durdu. Fren yaptığımda çoktan çarpmıştım."], ["A", "I used to cycle to work too, but I stopped. It's too dangerous.", "Eskiden ben de işe bisikletle giderdim ama bıraktım. Çok tehlikeli."], ["B", "In the end, it wasn't too bad. Only my arm.", "Sonunda o kadar kötü olmadı. Sadece kolum."]],
  quiz: [
    { q: "\"Yemek yapıyordum, telefon çaldı.\"", o: ["I was cooking when the phone rang.", "I cooked when the phone was ringing.", "I was cooking when the phone was rang.", "I am cooking when the phone rang."], a: 0, e: "Süren arka plan: was cooking; araya giren olay: rang." },
    { q: "\"Vardığımda film çoktan başlamıştı.\"", o: ["When I arrived, the film had already started.", "When I arrived, the film has already started.", "When I had arrived, the film already started.", "When I arrive, the film had started already."], a: 0, e: "Daha önceki olay: had + V3." },
    { q: "\"Eskiden İzmir'de yaşardık.\"", o: ["We used to live in Izmir.", "We are used to live in Izmir.", "We use to live in Izmir.", "We used to living in Izmir."], a: 0, e: "used to + yalın fiil." },
    { q: "\"I'm used to the cold.\" ne demek?", o: ["Soğuğa alışkınım.", "Eskiden üşürdüm.", "Soğuğu kullanırım."], a: 0, e: "be used to + isim/-ing = alışkın olmak." },
    { q: "\"in the end\" ne demek?", o: ["sonunda", "sonuna kadar", "başlangıçta"], a: 0, e: "in the end = sonunda. at the end of = ...nin sonunda." }
  ],
  review: ["Past continuous: was/were + -ing (arka plan).", "Past perfect: had + V3 (daha önceki olay).", "used to + fiil = eskiden ...rdı; be used to = alışkın olmak."]
}
];
EN_B1.forEach(L => (L.level = "B1"));
COURSES.en.lessons.push(...EN_B1);
