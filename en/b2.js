const EN_B2 = [
{
  id: "en-b2-1", title: "Resmî e-posta", no: "Formal emails", icon: "mail",
  intro: "İş yerine, okula ya da kurumlara resmî e-posta yazmayı öğreniyoruz: açılış, kalıp ifadeler ve kapanış.",
  notes: [
    { h: "Açılış ve kapanış", p: "Adını bilmiyorsan: Dear Sir or Madam → kapanış: Yours faithfully. Adını biliyorsan: Dear Ms Smith → kapanış: Yours sincerely. Daha yarı resmî: Kind regards / Best regards.",
      table: [["Açılış", "Kapanış", "Ne zaman?"], ["Dear Sir or Madam,", "Yours faithfully,", "Alıcının adı bilinmiyor"], ["Dear Mr Brown,", "Yours sincerely,", "Alıcının adı biliniyor"], ["Dear Anna,", "Kind regards,", "Tanıdık, yarı resmî"]] },
    { h: "Kalıp ifadeler", p: "I am writing to enquire about ... (... hakkında bilgi almak için yazıyorum.) Further to our conversation, ... (Görüşmemize istinaden ...) Please find attached ... (Ekte ... bulabilirsiniz.) I would be grateful if you could ... (... yapabilirseniz minnettar olurum.) I look forward to hearing from you. (Yanıtınızı bekliyorum.)" },
    { h: "Resmî üslup", p: "Resmî e-postada kısaltma kullanılmaz: I'm değil I am, don't değil do not. Doğrudan emir yerine kibar yapılar: Send me değil, Could you please send me ... ya da I would appreciate it if ..." }
  ],
  tip: "Türkçe resmî yazışmada \"Saygılarımla\" her durumda kullanılır. İngilizcede kapanış açılışa bağlıdır: \"Dear Sir or Madam\" ile \"Yours faithfully\", isimle açtıysan \"Yours sincerely\". Ayrıca \"I look forward to hear\" yanlış; doğrusu \"I look forward to hearing from you\" (to'dan sonra -ing).",
  words: [
    W("Dear Sir or Madam", "Sayın Yetkili", "", "Dear Sir or Madam, I am writing to complain about ...", "Sayın Yetkili, ... hakkında şikâyette bulunmak için yazıyorum."),
    W("I am writing to", "... için yazıyorum", "", "I am writing to apply for the position of nurse.", "Hemşire pozisyonuna başvurmak için yazıyorum."),
    W("enquiry", "bilgi talebi, soru", "", "Thank you for your enquiry.", "Bilgi talebiniz için teşekkür ederiz.", { note: "ABD: inquiry" }),
    W("regarding", "ile ilgili olarak", "", "I am writing regarding my invoice.", "Faturamla ilgili olarak yazıyorum."),
    W("Please find attached", "Ekte ... bulabilirsiniz", "", "Please find attached my CV.", "Ekte özgeçmişimi bulabilirsiniz."),
    W("I would be grateful if", "... minnettar olurum", "", "I would be grateful if you could reply by Friday.", "Cumaya kadar yanıt verebilirseniz minnettar olurum."),
    W("further to", "-e istinaden, ... devamı olarak", "", "Further to our phone call, I attach the contract.", "Telefon görüşmemize istinaden sözleşmeyi ekliyorum."),
    W("apologise for", "... için özür dilemek", "", "We apologise for any inconvenience.", "Yaşanan aksaklık için özür dileriz.", { note: "ABD: apologize" }),
    W("inconvenience", "rahatsızlık, aksaklık", "", "Sorry for the inconvenience.", "Rahatsızlık için özür dileriz."),
    W("reminder", "hatırlatma", "", "This is a reminder that your payment is due.", "Bu, ödemenizin vadesinin geldiğine dair bir hatırlatmadır."),
    W("in advance", "şimdiden, önceden", "", "Thank you in advance for your help.", "Yardımınız için şimdiden teşekkürler."),
    W("I look forward to hearing from you", "Yanıtınızı bekliyorum", "", "I look forward to hearing from you.", "Yanıtınızı bekliyorum."),
    W("Yours sincerely", "Saygılarımla (isim biliniyorsa)", "", "Yours sincerely, Ayşe Demir", "Saygılarımla, Ayşe Demir"),
    W("Yours faithfully", "Saygılarımla (isim bilinmiyorsa)", "", "Yours faithfully, Mehmet Kaya", "Saygılarımla, Mehmet Kaya")
  ],
  dialogue: [["A", "Dear Sir or Madam,", "Sayın Yetkili,"], ["A", "I am writing regarding my order no. 4521, which I placed on 3 May.", "3 Mayıs'ta verdiğim 4521 numaralı siparişimle ilgili olarak yazıyorum."], ["A", "Unfortunately, the item has not arrived yet. Please find attached a copy of the receipt.", "Maalesef ürün henüz ulaşmadı. Ekte makbuzun bir kopyasını bulabilirsiniz."], ["A", "I would be grateful if you could look into this matter as soon as possible.", "Bu konuyu en kısa sürede incelerseniz minnettar olurum."], ["A", "I look forward to hearing from you.", "Yanıtınızı bekliyorum."], ["A", "Yours faithfully, Ayşe Demir", "Saygılarımla, Ayşe Demir"]],
  quiz: [
    { q: "\"Dear Sir or Madam\" ile başlayan e-posta nasıl biter?", o: ["Yours faithfully,", "Yours sincerely,", "Love,", "Cheers,"], a: 0, e: "Alıcının adı bilinmiyorsa: Yours faithfully." },
    { q: "Doğru kapanış cümlesi hangisi?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I look forward hearing you.", "I am looking forward hear from you."], a: 0, e: "look forward to + -ing: hearing." },
    { q: "Resmî e-postada \"Ekte ... bulabilirsiniz\":", o: ["Please find attached ...", "Look at the attach ...", "Here is attach ...", "Find the attached please me ..."], a: 0, e: "Kalıp: Please find attached ..." },
    { q: "Resmî e-postada hangisi daha uygun?", o: ["I would be grateful if you could send it.", "Send it to me.", "You must send it.", "Gimme the file."], a: 0, e: "Resmî ve kibar rica: I would be grateful if you could ..." },
    { q: "\"in advance\" ne demek?", o: ["şimdiden, önceden", "ilerlemiş", "ekte"], a: 0, e: "Thank you in advance = Şimdiden teşekkürler." }
  ],
  review: ["Dear Sir or Madam → Yours faithfully; Dear Mr X → Yours sincerely.", "Please find attached / I would be grateful if you could ...", "look forward to + -ing; resmî yazıda kısaltma yok."]
},
{
  id: "en-b2-2", title: "Tartışma ve bağlaçlar", no: "Linking ideas", icon: "scale",
  intro: "Fikirlerini bağlaçlarla düzenli ve ikna edici şekilde anlatmayı öğreniyoruz: although, despite, however, therefore ...",
  notes: [
    { h: "Zıtlık bağlaçları", p: "Aynı anlam, farklı yapı. Hangi kelimenin ardından ne geldiğine dikkat et.",
      table: [["Bağlaç", "Ardından", "Örnek"], ["although / even though", "cümle", "Although it was cold, we went out."], ["despite / in spite of", "isim ya da -ing", "Despite the cold, we went out."], ["however", "yeni cümle, virgülle", "It was cold. However, we went out."], ["whereas / while", "karşılaştırma", "I like tea, whereas my wife prefers coffee."]] },
    { h: "Sonuç ve ekleme", p: "Sonuç: therefore, as a result, consequently: Prices rose. As a result, sales fell. Ekleme: moreover, furthermore, in addition: The flat is cheap. Moreover, it's near the station." },
    { h: "Tartışma dili", p: "It could be argued that ... (... öne sürülebilir.) Some people claim that ... (Bazıları ... iddia ediyor.) On balance, ... (Her şey düşünüldüğünde ...) To sum up, ... (Özetle ...)" }
  ],
  tip: "Türkçede \"-e rağmen\" hem isimle hem cümleyle kullanılır. İngilizcede ayrılır: \"despite the rain\" (isim) ama \"although it was raining\" (cümle). \"Despite it was raining\" ve \"despite of\" yanlıştır.",
  words: [
    W("although", "-e rağmen, -se de", "", "Although he was tired, he finished the report.", "Yorgun olmasına rağmen raporu bitirdi."),
    W("even though", "-diği halde", "", "Even though I left early, I missed the train.", "Erken çıktığım halde treni kaçırdım."),
    W("despite", "-e rağmen (isimle)", "", "Despite the rain, the match continued.", "Yağmura rağmen maç devam etti.", { note: "despite of yanlış" }),
    W("in spite of", "-e rağmen (isimle)", "", "In spite of the cost, we bought it.", "Maliyetine rağmen aldık."),
    W("however", "ancak, bununla birlikte", "", "The plan is good. However, it is expensive.", "Plan iyi. Ancak pahalı."),
    W("therefore", "bu nedenle", "", "He was ill; therefore, he stayed at home.", "Hastaydı; bu nedenle evde kaldı."),
    W("as a result", "sonuç olarak", "", "Prices rose. As a result, sales fell.", "Fiyatlar arttı. Sonuç olarak satışlar düştü."),
    W("whereas", "oysa, -iken", "", "I live in a city, whereas my brother lives in the country.", "Ben şehirde yaşıyorum, oysa kardeşim kırsalda yaşıyor."),
    W("moreover", "üstelik", "", "The hotel was cheap. Moreover, the staff were friendly.", "Otel ucuzdu. Üstelik personel güler yüzlüydü."),
    W("claim", "iddia etmek; iddia", "", "Some people claim that money brings happiness.", "Bazıları paranın mutluluk getirdiğini iddia ediyor."),
    W("argue", "savunmak, tartışmak", "", "I would argue that education is the key.", "Eğitimin anahtar olduğunu savunurum."),
    W("on balance", "her şey düşünüldüğünde", "", "On balance, I think it's a good idea.", "Her şey düşünüldüğünde bence iyi bir fikir."),
    W("to sum up", "özetle", "", "To sum up, there are more advantages than disadvantages.", "Özetle, avantajlar dezavantajlardan fazla."),
    W("nevertheless", "yine de", "", "It was difficult. Nevertheless, we succeeded.", "Zordu. Yine de başardık.")
  ],
  dialogue: [["A", "Should the city ban cars from the centre?", "Şehir, merkezde arabaları yasaklamalı mı?"], ["B", "I'd argue it should. Although some shops might lose customers, the air would be cleaner.", "Bence yasaklamalı. Bazı dükkânlar müşteri kaybedebilir ama hava daha temiz olur."], ["A", "However, many older people depend on their cars.", "Ancak birçok yaşlı insan arabasına bağımlı."], ["B", "That's true. Therefore, we'd need better public transport.", "Doğru. Bu nedenle daha iyi bir toplu taşımaya ihtiyacımız olur."], ["A", "Despite the costs?", "Maliyetine rağmen mi?"], ["B", "Yes. On balance, I think the benefits are bigger.", "Evet. Her şey düşünüldüğünde, bence faydaları daha büyük."]],
  quiz: [
    { q: "\"Yağmura rağmen dışarı çıktık.\"", o: ["Despite the rain, we went out.", "Despite of the rain, we went out.", "Although the rain, we went out.", "Despite it was raining, we went out."], a: 0, e: "despite + isim (of yok)." },
    { q: "\"Yorgun olmasına rağmen çalışmaya devam etti.\"", o: ["Although she was tired, she kept working.", "Despite she was tired, she kept working.", "However she was tired, she kept working.", "In spite she was tired, she kept working."], a: 0, e: "although + cümle." },
    { q: "Boşluğu doldur: \"It was expensive. ___, we bought it.\"", o: ["However", "Although", "Despite", "Because"], a: 0, e: "however yeni cümle başlatır ve virgül alır." },
    { q: "\"therefore\" ne demek?", o: ["bu nedenle", "ancak", "üstelik", "oysa"], a: 0, e: "therefore = bu nedenle, dolayısıyla." },
    { q: "Karşılaştırma için hangisi? \"I like tea, ___ my wife prefers coffee.\"", o: ["whereas", "therefore", "moreover", "despite"], a: 0, e: "whereas iki şeyi karşılaştırır: oysa, -iken." }
  ],
  review: ["although + cümle; despite / in spite of + isim (despite of yok).", "However, ... / Therefore, ... / Moreover, ...", "It could be argued that ... / On balance ... / To sum up ..."]
},
{
  id: "en-b2-3", title: "Deyimler", no: "Idioms", icon: "spark",
  intro: "Günlük konuşmada çok sık duyacağın 12 deyim. Her deyimin resmi kelimesi kelimesine anlamını gösteriyor; önce resmi hatırla, sonra anlamı.",
  notes: [
    { h: "Resimle hatırla", p: "Deyimler kelimesi kelimesine çevrilince tuhaf bir sahne çıkar: kediyi çantadan çıkarmak, kedi köpek yağması. Bu tuhaf sahne hafızaya en iyi tutunan şeydir. Resme bak, sahneyi hayal et, sonra gerçek anlamı söyle." },
    { h: "Türkçede de var", p: "Bazıları Türkçeyle neredeyse aynı: \"break the ice\" = buzları eritmek, \"kill two birds with one stone\" = bir taşla iki kuş vurmak. Bunları hemen kullanabilirsin." },
    { h: "Ne zaman kullanmalı?", p: "Deyimler gündelik konuşmada, dizilerde ve gazetelerde çok yaygındır. Resmî e-postalarda ve akademik yazılarda daha seyrek kullanılır." }
  ],
  tip: "Deyimlerin kelimelerini değiştirme: \"It's raining dogs and cats\" ya da \"a piece of a cake\" yanlıştır. Deyimler kalıp halinde öğrenilir.",
  words: [
    I("a piece of cake", "çok kolay", "bir dilim pasta", "🍰👌", "The exam was a piece of cake.", "Sınav çocuk oyuncağıydı."),
    I("break the ice", "buzları eritmek, ortamı yumuşatmak", "buzu kırmak", "🧊🔨", "He told a joke to break the ice.", "Buzları eritmek için bir şaka yaptı."),
    I("cost an arm and a leg", "çok pahalı olmak", "bir kola ve bir bacağa mal olmak", "💪🦵💰", "The new phone cost an arm and a leg.", "Yeni telefon servet değerindeydi."),
    I("under the weather", "keyifsiz, biraz hasta", "havanın altında", "🌧️🤒", "I'm feeling a bit under the weather today.", "Bugün biraz keyifsizim."),
    I("once in a blue moon", "çok nadiren, kırk yılda bir", "mavi ayda bir", "🔵🌕", "I only see him once in a blue moon.", "Onu kırk yılda bir görüyorum."),
    I("let the cat out of the bag", "ağzından kaçırmak", "kediyi çantadan çıkarmak", "🐈👜", "Who let the cat out of the bag about the party?", "Partiyi kim ağzından kaçırdı?"),
    I("hit the nail on the head", "tam üstüne basmak", "çiviyi tam başından vurmak", "🔨📌🎯", "You hit the nail on the head with that comment.", "O yorumla tam üstüne bastın."),
    I("It's raining cats and dogs.", "Bardaktan boşanırcasına yağıyor.", "kedi ve köpek yağıyor", "🐈🐕🌧️", "Take an umbrella, it's raining cats and dogs.", "Şemsiye al, bardaktan boşanırcasına yağıyor."),
    I("kill two birds with one stone", "bir taşla iki kuş vurmak", "bir taşla iki kuş öldürmek", "🪨🐦🐦", "I'll visit my parents and see the dentist – killing two birds with one stone.", "Hem annemlere uğrayıp hem dişçiye gideceğim: bir taşla iki kuş."),
    I("The ball is in your court.", "Karar sende, sıra sende.", "top senin sahanda", "🎾👉", "I've made my offer. Now the ball is in your court.", "Teklifimi yaptım. Şimdi karar sende."),
    I("bite off more than you can chew", "boyundan büyük işe kalkışmak", "çiğneyebileceğinden fazlasını ısırmak", "🍔😮", "I bit off more than I could chew with three jobs.", "Üç işle boyumdan büyük işe kalkıştım."),
    I("spill the beans", "sırrı açık etmek", "fasulyeleri dökmek", "🫘💦", "Come on, spill the beans! What happened?", "Hadi, anlat artık! Ne oldu?")
  ],
  dialogue: [["A", "You look terrible. Are you OK?", "Berbat görünüyorsun. İyi misin?"], ["B", "I'm a bit under the weather. I've bitten off more than I can chew this month.", "Biraz keyifsizim. Bu ay boyumdan büyük işlere kalkıştım."], ["A", "Is it the new job? I heard the training is a piece of cake.", "Yeni iş mi? Eğitimin çok kolay olduğunu duydum."], ["B", "The training, yes. But I'm also studying, and the course cost an arm and a leg.", "Eğitim evet. Ama bir de okuyorum ve kurs servet değerindeydi."], ["A", "Well, you can't do everything. The ball is in your court.", "Her şeyi yapamazsın. Karar senin."], ["B", "You've hit the nail on the head. I need to choose.", "Tam üstüne bastın. Seçim yapmam lazım."]],
  quiz: [
    { q: "\"a piece of cake\" ne demek?", o: ["çok kolay", "tatlı bir şey", "küçük bir parça"], a: 0, e: "Kelimesi kelimesine \"bir dilim pasta\" = çok kolay iş." },
    { q: "\"under the weather\" olan biri ...", o: ["kendini biraz hasta, keyifsiz hissediyor", "yağmurda kalmış", "çok mutlu"], a: 0, e: "under the weather = biraz hasta, keyifsiz." },
    { q: "\"Kırk yılda bir\" İngilizcede?", o: ["once in a blue moon", "once upon a time", "over the moon"], a: 0, e: "once in a blue moon = çok nadiren." },
    { q: "Biri sırrı ağzından kaçırdı:", o: ["He let the cat out of the bag.", "He broke the ice.", "He hit the nail on the head."], a: 0, e: "let the cat out of the bag = ağzından kaçırmak." },
    { q: "\"It's raining cats and dogs.\" ne demek?", o: ["Bardaktan boşanırcasına yağıyor.", "Hayvanlar ıslanıyor.", "Hava çok güzel."], a: 0, e: "Çok şiddetli yağmur." }
  ],
  review: ["Önce resmi hatırla (bir dilim pasta), sonra anlamı (çok kolay).", "break the ice, kill two birds with one stone: Türkçeyle neredeyse aynı.", "Deyimlerin kelimeleri değiştirilmez."]
},
{
  id: "en-b2-4", title: "Phrasal verbs", no: "Phrasal verbs", icon: "arrow",
  intro: "Fiil + edat birleşimleri (phrasal verbs) günlük İngilizcenin temelidir. Anlamları çoğu zaman tahmin edilemez, bu yüzden ayrı ayrı öğrenilmelidir.",
  notes: [
    { h: "Ne demek?", p: "Phrasal verb, bir fiil ile bir ya da iki küçük kelimenin (up, off, out, on ...) birleşimidir ve yeni bir anlam kazanır: give = vermek ama give up = vazgeçmek, bırakmak." },
    { h: "Ayrılabilen ve ayrılamayan", p: "Bazı phrasal verb'lerde nesne ortaya girebilir: turn off the light / turn the light off. Nesne zamir ise (it, them, him) mutlaka ortaya girer: turn it off (turn off it yanlış). Bazıları ayrılmaz: look after the children → look after them.",
      table: [["Tür", "İsim nesne", "Zamir nesne"], ["Ayrılabilir", "put off the meeting / put the meeting off", "put it off"], ["Ayrılabilir", "find out the truth / find the truth out", "find it out"], ["Ayrılamaz", "look after the baby", "look after her"], ["Üç parçalı", "run out of milk", "run out of it"]] },
    { h: "Resmî karşılıkları", p: "Phrasal verb'ler daha günlük konuşmaya aittir. Resmî yazıda tek kelimelik karşılıkları tercih edilir: put off → postpone, find out → discover, carry on → continue." }
  ],
  tip: "Türkçede \"onu ertele\" deriz; nesne fiilden önce gelir. İngilizcede zamir nesne phrasal verb'ün ortasına girer: \"Put it off.\" (\"Put off it\" yanlış). İsim nesne ise iki yerde de olabilir.",
  words: [
    W("give up", "bırakmak, vazgeçmek", "", "I gave up smoking last year.", "Geçen yıl sigarayı bıraktım."),
    W("look after", "bakmak (çocuk, hasta)", "", "Can you look after the kids tonight?", "Bu akşam çocuklara bakabilir misin?"),
    W("look forward to", "dört gözle beklemek", "", "I'm looking forward to the holiday.", "Tatili dört gözle bekliyorum."),
    W("put off", "ertelemek", "", "We put the meeting off until Monday.", "Toplantıyı pazartesiye erteledik."),
    W("find out", "öğrenmek, ortaya çıkarmak", "", "I found out that he was lying.", "Yalan söylediğini öğrendim."),
    W("turn down", "reddetmek; sesini kısmak", "", "She turned down the job offer.", "İş teklifini reddetti."),
    W("carry on", "devam etmek", "", "Carry on, I'm listening.", "Devam et, dinliyorum."),
    W("get on with", "biriyle iyi geçinmek", "", "I get on well with my colleagues.", "İş arkadaşlarımla iyi geçinirim."),
    W("run out of", "tükenmek, bitmek", "", "We've run out of milk.", "Sütümüz bitti."),
    W("set up", "kurmak (şirket, sistem)", "", "She set up her own business.", "Kendi işini kurdu."),
    W("come across", "rastlamak", "", "I came across an old photo.", "Eski bir fotoğrafa rastladım."),
    W("bring up", "yetiştirmek; konuyu açmak", "", "She was brought up in Bursa.", "Bursa'da yetişti."),
    W("take up", "(hobi) başlamak", "", "I've taken up yoga.", "Yogaya başladım."),
    W("figure out", "çözmek, anlamak", "", "I can't figure out this form.", "Bu formu çözemiyorum.")
  ],
  dialogue: [["A", "How's the new business going?", "Yeni iş nasıl gidiyor?"], ["B", "It's hard. When I set it up, I didn't know how much work it would be.", "Zor. Kurduğumda bu kadar iş olacağını bilmiyordum."], ["A", "Are you thinking of giving up?", "Bırakmayı düşünüyor musun?"], ["B", "No way! I'll carry on. But I've put off my holiday again.", "Asla! Devam edeceğim. Ama tatilimi yine erteledim."], ["A", "Who's looking after the kids?", "Çocuklara kim bakıyor?"], ["B", "My mum. Luckily we get on really well.", "Annem. Neyse ki çok iyi anlaşıyoruz."]],
  quiz: [
    { q: "\"Onu ertele.\" (it = toplantı)", o: ["Put it off.", "Put off it.", "It put off.", "Off it put."], a: 0, e: "Zamir nesne phrasal verb'ün ortasına girer." },
    { q: "\"give up\" ne demek?", o: ["bırakmak, vazgeçmek", "yukarı vermek", "geri vermek"], a: 0, e: "give up smoking = sigarayı bırakmak." },
    { q: "\"Sütümüz bitti.\"", o: ["We've run out of milk.", "We've run off milk.", "We've run milk out.", "We've out run milk."], a: 0, e: "run out of + isim = tükenmek." },
    { q: "\"Patronumla iyi geçinirim.\"", o: ["I get on well with my boss.", "I get well on my boss.", "I get along my boss well with.", "I get on my boss well."], a: 0, e: "get on (well) with + kişi." },
    { q: "\"put off\" fiilinin resmî karşılığı?", o: ["postpone", "continue", "discover", "refuse"], a: 0, e: "put off = postpone (ertelemek)." },
    { q: "\"She turned down the offer.\" ne demek?", o: ["Teklifi reddetti.", "Teklifi kabul etti.", "Teklifi açıkladı."], a: 0, e: "turn down = reddetmek." }
  ],
  review: ["Phrasal verb anlamı tahmin edilemez: give up = bırakmak.", "Zamir nesne ortaya girer: put it off.", "Resmî yazıda tek kelime: postpone, continue, discover."]
},
{
  id: "en-b2-5", title: "Çalışma hayatı ve haklar", no: "Work and employment rights", icon: "doc",
  intro: "İş sözleşmesi, izin, ihbar süresi gibi haklarla ilgili kelimeleri ve başkasının sözünü aktarmayı (reported speech) öğreniyoruz.",
  notes: [
    { h: "Dolaylı anlatım (reported speech)", p: "Birinin söylediğini aktarırken zaman genellikle bir adım geriye gider: \"I am tired.\" → She said (that) she was tired.",
      table: [["Doğrudan", "Dolaylı"], ["\"I work here.\"", "He said he worked there."], ["\"I'm leaving.\"", "She said she was leaving."], ["\"I have finished.\"", "He said he had finished."], ["\"I will call you.\"", "She said she would call me."], ["\"Can you help?\"", "He asked if I could help."]] },
    { h: "say mi, tell mi?", p: "tell'den sonra kişi gelir: He told me (that) ... say'den sonra kişi gelmez: He said (that) ... Kişi söylenecekse: He said to me ... \"He said me\" yanlıştır." },
    { h: "İngiltere'de çalışan hakları", p: "Çoğu çalışan en az 28 günlük ücretli yıllık izin (annual leave), asgari ücret (minimum wage) ve yazılı iş sözleşmesi (contract) hakkına sahiptir. İşten ayrılırken ihbar süresi (notice period) sözleşmede yazar." }
  ],
  tip: "Türkçede \"Bana yorgun olduğunu söyledi\" deriz. İngilizcede \"He said me he is tired\" iki hata içerir. Doğrusu: \"He told me he was tired.\" (tell + kişi, zaman geri kayar.)",
  words: [
    W("contract", "sözleşme", "", "Read your contract carefully.", "Sözleşmeni dikkatle oku."),
    W("notice period", "ihbar süresi", "", "My notice period is one month.", "İhbar sürem bir ay."),
    W("annual leave", "yıllık izin", "", "I have 28 days of annual leave.", "28 günlük yıllık iznim var."),
    W("sick pay", "hastalık ödeneği", "", "Are you entitled to sick pay?", "Hastalık ödeneği hakkın var mı?"),
    W("minimum wage", "asgari ücret", "", "The minimum wage went up in April.", "Asgari ücret nisanda arttı."),
    W("overtime", "fazla mesai", "", "Do you get paid for overtime?", "Fazla mesai için ödeme alıyor musun?"),
    W("payslip", "maaş bordrosu", "", "Check your payslip every month.", "Maaş bordronu her ay kontrol et."),
    W("resign", "istifa etmek", "", "She resigned after ten years.", "On yıl sonra istifa etti."),
    W("be made redundant", "(kadro azaltmadan) işten çıkarılmak", "", "Fifty workers were made redundant.", "Elli işçi kadro azaltma nedeniyle işten çıkarıldı."),
    W("dismiss", "işten çıkarmak", "", "He was dismissed for misconduct.", "Kötü davranış nedeniyle işten çıkarıldı.", { note: "günlük dilde: sack, fire" }),
    W("union", "sendika", "", "I'm a member of a union.", "Bir sendika üyesiyim."),
    W("be entitled to", "... hakkı olmak", "", "You are entitled to a break after six hours.", "Altı saatten sonra mola hakkın var."),
    W("probation", "deneme süresi", "", "The probation period is three months.", "Deneme süresi üç ay."),
    W("told", "söyledi (tell)", "", "My boss told me I was doing well.", "Patronum iyi gittiğimi söyledi.", { note: "tell – told – told" })
  ],
  dialogue: [["A", "I've decided to resign.", "İstifa etmeye karar verdim."], ["B", "Really? What did your manager say?", "Gerçekten mi? Müdürün ne dedi?"], ["A", "She told me she was sorry, but she understood.", "Üzgün olduğunu ama anladığını söyledi."], ["B", "How long is your notice period?", "İhbar süren ne kadar?"], ["A", "One month. And I'm entitled to five days of annual leave, so I'll use them.", "Bir ay. Bir de beş gün yıllık izin hakkım var, onları kullanacağım."], ["B", "Good idea. Check your last payslip too.", "İyi fikir. Son maaş bordronu da kontrol et."]],
  quiz: [
    { q: "\"I am tired.\" → She said ...", o: ["that she was tired", "that she is tired was", "me that she was tired", "that was she tired"], a: 0, e: "Dolaylı anlatımda am → was." },
    { q: "Hangisi doğru?", o: ["He told me he was leaving.", "He said me he was leaving.", "He told he was leaving me.", "He said to me he leaving."], a: 0, e: "tell + kişi. say'den sonra doğrudan kişi gelmez." },
    { q: "\"I will call you.\" → She said she ___ call me.", o: ["would", "will", "was", "had"], a: 0, e: "will → would." },
    { q: "\"notice period\" nedir?", o: ["işten ayrılmadan önceki ihbar süresi", "deneme süresi", "yıllık izin", "fazla mesai"], a: 0, e: "notice period = ihbar süresi." },
    { q: "\"be entitled to\" ne demek?", o: ["... hakkı olmak", "... başlıklı olmak", "... zorunda olmak"], a: 0, e: "You are entitled to = ... hakkın var." }
  ],
  review: ["Dolaylı anlatım: zaman bir adım geri (am → was, will → would).", "tell + kişi (told me); say + that (said that).", "contract, notice period, annual leave, entitled to."]
},
{
  id: "en-b2-6", title: "Konuşmanın incelikleri", no: "Question tags and fillers", icon: "chat",
  intro: "Doğal konuşmanın küçük kelimeleri: soru ekleri (..., isn't it?), actually, anyway, I mean, kind of ...",
  notes: [
    { h: "Soru ekleri (question tags)", p: "Onay beklerken cümlenin sonuna kısa bir soru eklenir. Olumlu cümleye olumsuz ek, olumsuz cümleye olumlu ek gelir. Türkçedeki \"..., değil mi?\" karşılığıdır.",
      table: [["Cümle", "Ek"], ["It's cold,", "isn't it?"], ["You live here,", "don't you?"], ["She can drive,", "can't she?"], ["They didn't come,", "did they?"], ["You've been there,", "haven't you?"], ["I'm right,", "aren't I?"]] },
    { h: "Dolgu kelimeleri", p: "well (şey, yani), I mean (yani, demek istediğim), you know (bilirsin), kind of / sort of (biraz, gibi), basically (temelde, kısacası). Konuşmaya zaman kazandırır ve daha doğal yapar ama yazıda kullanılmaz." },
    { h: "Konu değiştirmek", p: "by the way (bu arada) yeni konu açar. anyway (neyse, her neyse) asıl konuya döner ya da konuşmayı bitirir. actually (aslında) beklenmedik ya da düzeltici bilgi verir." }
  ],
  tip: "Türkçe konuşanlar \"actually\" kelimesini \"şu anda\" sanabilir; ama actually = aslında. \"Şu anda\" için at the moment ya da currently kullan. Ayrıca soru eki her zaman \"isn't it?\" değildir; cümlenin fiiline uyar: You like tea, don't you?",
  words: [
    W("isn't it?", "değil mi? (is ile)", "", "It's a lovely day, isn't it?", "Güzel bir gün, değil mi?"),
    W("don't you?", "değil mi? (geniş zaman)", "", "You work here, don't you?", "Burada çalışıyorsun, değil mi?"),
    W("actually", "aslında", "", "Actually, I'm from Turkey, not Greece.", "Aslında Türkiyeliyim, Yunan değil."),
    W("anyway", "neyse, her neyse", "", "Anyway, I have to go now.", "Neyse, şimdi gitmem lazım."),
    W("by the way", "bu arada", "", "By the way, did you call Mum?", "Bu arada, annemi aradın mı?"),
    W("I mean", "yani, demek istediğim", "", "It's good. I mean, it's not perfect, but it's good.", "İyi. Yani mükemmel değil ama iyi."),
    W("kind of", "biraz, bir nevi", "", "I'm kind of tired.", "Biraz yorgunum."),
    W("basically", "temelde, kısacası", "", "Basically, we need more money.", "Kısacası daha fazla paraya ihtiyacımız var."),
    W("to be honest", "açıkçası", "", "To be honest, I didn't like the film.", "Açıkçası filmi beğenmedim."),
    W("fair enough", "makul, haklısın", "", "– I can't come, I'm working. – Fair enough.", "– Gelemem, çalışıyorum. – Anlaşılır."),
    W("I suppose", "sanırım, herhalde", "", "I suppose you're right.", "Sanırım haklısın."),
    W("Really?", "Gerçekten mi?", "", "– I got the job! – Really? Congratulations!", "– İşi aldım! – Gerçekten mi? Tebrikler!"),
    W("no way", "olamaz; asla", "", "No way! That's amazing.", "Olamaz! Bu inanılmaz."),
    W("at the moment", "şu anda", "", "I'm busy at the moment.", "Şu anda meşgulüm.")
  ],
  dialogue: [["A", "You're new here, aren't you?", "Burada yenisin, değil mi?"], ["B", "Well, sort of. I started last month, actually.", "Şey, sayılır. Aslında geçen ay başladım."], ["A", "Really? How are you finding it?", "Gerçekten mi? Nasıl buluyorsun?"], ["B", "To be honest, it's kind of hard. I mean, everyone is nice, but there's a lot to learn.", "Açıkçası biraz zor. Yani herkes iyi ama öğrenecek çok şey var."], ["A", "Fair enough. By the way, are you coming to the party on Friday?", "Anlaşılır. Bu arada, cuma günkü partiye geliyor musun?"], ["B", "I suppose so. Anyway, I'd better get back to work.", "Sanırım. Neyse, işime dönsem iyi olur."]],
  quiz: [
    { q: "\"You live in London, ___?\"", o: ["don't you", "isn't it", "aren't you", "do you"], a: 0, e: "Olumlu geniş zaman (live) → olumsuz ek: don't you?" },
    { q: "\"She can't swim, ___?\"", o: ["can she", "can't she", "does she", "isn't it"], a: 0, e: "Olumsuz cümle → olumlu ek: can she?" },
    { q: "\"actually\" ne demek?", o: ["aslında", "şu anda", "gerçekten mi", "neyse"], a: 0, e: "actually = aslında. Şu anda = at the moment." },
    { q: "Asıl konuya dönmek ya da konuşmayı bitirmek için:", o: ["Anyway, ...", "By the way, ...", "Actually, ...", "Kind of ..."], a: 0, e: "anyway = neyse; by the way yeni konu açar." },
    { q: "\"They didn't come, ___?\"", o: ["did they", "didn't they", "do they", "were they"], a: 0, e: "Olumsuz geçmiş → olumlu ek: did they?" }
  ],
  review: ["Soru eki: olumlu cümle + olumsuz ek (It's cold, isn't it?).", "actually = aslında (şu anda değil!).", "by the way = bu arada; anyway = neyse."]
},
{
  id: "en-b2-7", title: "Deyimler 2", no: "More idioms", icon: "spark",
  intro: "İş yerinde ve günlük hayatta sık duyacağın 12 deyim daha. Önce resmi hatırla, sonra anlamı.",
  notes: [
    { h: "Resimle hatırla", p: "Deyimin kelimesi kelimesine sahnesini hayal et: çalının etrafında dövmek, dökülen süt için ağlamak. Sahne ne kadar tuhafsa o kadar kolay hatırlanır." },
    { h: "Türkçede de var", p: "\"in the same boat\" = aynı gemide olmak, \"put your cards on the table\" = kartları açık oynamak, \"cry over spilt milk\" = olan oldu, ağlamanın faydası yok." },
    { h: "Ne zaman kullanmalı?", p: "Bu deyimler iş toplantılarında bile kullanılır ama çok resmî yazılarda daha az yer alır." }
  ],
  tip: "\"When pigs fly\" (domuzlar uçunca) Türkçedeki \"balık kavağa çıkınca\" ile aynı anlamdadır. Deyimlerin Türkçe karşılığını bulmak onları hatırlamanın en kolay yoludur.",
  words: [
    I("in the same boat", "aynı durumda olmak", "aynı teknede", "⛵👫", "Don't worry, we're all in the same boat.", "Merak etme, hepimiz aynı gemideyiz."),
    I("beat around the bush", "lafı dolandırmak", "çalının etrafını dövmek", "🥁🌳", "Stop beating around the bush and tell me!", "Lafı dolandırmayı bırak da söyle!"),
    I("get cold feet", "son anda korkup vazgeçmek", "ayakları üşümek", "🦶🥶", "He got cold feet before the wedding.", "Düğünden önce son anda korktu."),
    I("put your cards on the table", "açık oynamak, her şeyi söylemek", "kartlarını masaya koymak", "🃏🃏⬇️", "Let's put our cards on the table.", "Açık konuşalım."),
    I("on cloud nine", "havalara uçmak, çok mutlu", "dokuzuncu bulutta", "☁️9️⃣😊", "She's been on cloud nine since she got the job.", "İşi aldığından beri havalara uçuyor."),
    I("see eye to eye", "aynı fikirde olmak", "göz göze görmek", "👁️👁️", "We don't always see eye to eye.", "Her zaman aynı fikirde değiliz."),
    I("the last straw", "bardağı taşıran son damla", "son saman çöpü", "🌾🐫", "Being late again was the last straw.", "Yine geç kalması bardağı taşıran son damla oldu."),
    I("a blessing in disguise", "her işte bir hayır var", "kılık değiştirmiş bir nimet", "🎁🎭", "Losing that job was a blessing in disguise.", "O işi kaybetmek hayırlı oldu."),
    I("cut corners", "işi baştan savma yapmak", "köşeleri kesmek", "✂️📐", "Don't cut corners on safety.", "Güvenlikte kestirmeden gitme."),
    I("cry over spilt milk", "olmuşa ağlamak", "dökülen süte ağlamak", "🥛😢", "It's done. There's no use crying over spilt milk.", "Olan oldu. Ağlamanın faydası yok."),
    I("when pigs fly", "balık kavağa çıkınca", "domuzlar uçunca", "🐖✈️", "He'll clean his room when pigs fly.", "Odasını balık kavağa çıkınca toplar."),
    I("burn the midnight oil", "sabahlara kadar çalışmak", "gece yarısı yağını yakmak", "🕯️🌙", "I burned the midnight oil before the exam.", "Sınavdan önce sabahlara kadar çalıştım.")
  ],
  dialogue: [["A", "Why is the project late? Let's put our cards on the table.", "Proje neden gecikti? Açık konuşalım."], ["B", "To be honest, the supplier got cold feet at the last minute.", "Açıkçası tedarikçi son anda korkup vazgeçti."], ["A", "And nobody told me? That's the last straw.", "Ve kimse bana söylemedi mi? Bu bardağı taşıran son damla."], ["B", "I know, but there's no use crying over spilt milk. We're all in the same boat.", "Biliyorum ama olmuşa ağlamanın faydası yok. Hepimiz aynı gemideyiz."], ["A", "Fine. But we can't cut corners now.", "Peki. Ama şimdi işi baştan savma yapamayız."], ["B", "Agreed. Maybe the new supplier will be a blessing in disguise.", "Katılıyorum. Belki yeni tedarikçi hayırlı olur."]],
  quiz: [
    { q: "\"beat around the bush\" ne demek?", o: ["lafı dolandırmak", "bahçede çalışmak", "kavga etmek"], a: 0, e: "Kelimesi kelimesine \"çalının etrafını dövmek\" = konuya doğrudan girmemek." },
    { q: "\"Balık kavağa çıkınca\"", o: ["when pigs fly", "on cloud nine", "once in a blue moon"], a: 0, e: "when pigs fly = asla olmayacak." },
    { q: "Çok mutlu biri için hangisi?", o: ["She's on cloud nine.", "She's under the weather.", "She got cold feet."], a: 0, e: "on cloud nine = havalara uçmak." },
    { q: "\"We don't see eye to eye.\"", o: ["Aynı fikirde değiliz.", "Birbirimizi görmüyoruz.", "Göz göze gelmiyoruz."], a: 0, e: "see eye to eye = aynı fikirde olmak." },
    { q: "\"cut corners\" ne demek?", o: ["işi baştan savma yapmak", "kestirmeden gitmek (yol)", "masraf yapmak"], a: 0, e: "cut corners = işi ucuza, özensiz yapmak." }
  ],
  review: ["in the same boat, put your cards on the table: Türkçeyle neredeyse aynı.", "when pigs fly = balık kavağa çıkınca.", "the last straw = bardağı taşıran son damla."]
}
];
EN_B2.forEach(L => (L.level = "B2"));
COURSES.en.lessons.push(...EN_B2);
