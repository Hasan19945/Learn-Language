import { I, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const EN_C1: LessonDef[] = [
{
  id: "en-c1-1", title: "Akademik dil", no: "Academic English", icon: "school",
  intro: "Raporlar, ödevler ve resmî metinler için akademik İngilizce: isimleştirme, temkinli ifadeler ve resmî bağlaçlar.",
  notes: [
    { h: "İsimleştirme (nominalisation)", p: "Akademik metinlerde fiiller yerine isimler tercih edilir. Metin daha nesnel ve yoğun olur.",
      table: [["Günlük", "Akademik"], ["Prices increased quickly.", "There was a rapid increase in prices."], ["We analysed the data.", "An analysis of the data was carried out."], ["People are worried that ...", "There is growing concern that ..."]] },
    { h: "Temkinli dil (hedging)", p: "Akademik yazıda kesin iddialardan kaçınılır: may, might, appear to, seem to, tend to, it is likely that, to some extent. The results suggest that ... (Sonuçlar ... olduğunu gösteriyor.) proves (kanıtlar) yerine suggests ya da indicates daha güvenlidir." },
    { h: "Resmî bağlaçlar", p: "furthermore (ayrıca), consequently (sonuç olarak), thus (böylece), in contrast (buna karşın), with regard to (... ile ilgili olarak), in terms of (... açısından)." }
  ],
  tip: "Türkçe akademik metinlerde \"... olduğu görülmektedir\" gibi edilgen yapılar yaygındır; İngilizcede de öyle. Ama \"I think\" ve \"we can say\" gibi kişisel ifadeler yerine \"It appears that\" ya da \"The evidence suggests that\" kullan.",
  words: [
    W("significant", "önemli, anlamlı", "", "There was a significant increase in costs.", "Maliyetlerde önemli bir artış oldu."),
    W("suggest", "göstermek, işaret etmek", "", "The data suggest that the policy has failed.", "Veriler politikanın başarısız olduğunu gösteriyor."),
    W("indicate", "göstermek", "", "Recent studies indicate a link between sleep and memory.", "Son çalışmalar uyku ve hafıza arasında bir bağ olduğunu gösteriyor."),
    W("evidence", "kanıt", "", "There is little evidence to support this claim.", "Bu iddiayı destekleyen kanıt az.", { note: "sayılamaz" }),
    W("appear to", "... gibi görünmek", "", "The results appear to confirm the theory.", "Sonuçlar teoriyi doğruluyor gibi görünüyor."),
    W("tend to", "... eğiliminde olmak", "", "Younger people tend to use public transport more.", "Gençler toplu taşımayı daha çok kullanma eğiliminde."),
    W("it is likely that", "muhtemelen", "", "It is likely that prices will rise further.", "Fiyatların daha da artması muhtemel."),
    W("to some extent", "bir ölçüde", "", "This is true to some extent.", "Bu bir ölçüde doğru."),
    W("consequently", "sonuç olarak", "", "Funding was cut. Consequently, the project stopped.", "Fon kesildi. Sonuç olarak proje durdu."),
    W("thus", "böylece, bu yüzden", "", "The sample was small; thus, the results are limited.", "Örneklem küçüktü; bu yüzden sonuçlar sınırlı."),
    W("in terms of", "... açısından", "", "In terms of cost, the second option is better.", "Maliyet açısından ikinci seçenek daha iyi."),
    W("with regard to", "... ile ilgili olarak", "", "With regard to your question, more research is needed.", "Sorunuzla ilgili olarak daha fazla araştırma gerekiyor."),
    W("carry out", "yürütmek, yapmak", "", "The study was carried out in 2023.", "Çalışma 2023'te yürütüldü."),
    W("conclude", "sonuca varmak", "", "We can conclude that the method works.", "Yöntemin işe yaradığı sonucuna varabiliriz.")
  ],
  dialogue: [["A", "How should I start the conclusion of my essay?", "Makalemin sonuç bölümüne nasıl başlamalıyım?"], ["B", "Avoid \"I think\". Try: \"The evidence suggests that ...\"", "\"I think\" kullanma. Şunu dene: \"Kanıtlar ... olduğunu gösteriyor.\""], ["A", "Can I say the results prove my theory?", "Sonuçların teorimi kanıtladığını söyleyebilir miyim?"], ["B", "It's safer to say they appear to support it, at least to some extent.", "En azından bir ölçüde onu destekliyor gibi göründüğünü söylemek daha güvenli."], ["A", "And instead of \"Prices went up a lot\"?", "Peki \"Fiyatlar çok arttı\" yerine?"], ["B", "\"There was a significant increase in prices.\"", "\"Fiyatlarda önemli bir artış oldu.\""]],
  quiz: [
    { q: "Akademik metne en uygun hangisi?", o: ["The results suggest that the method is effective.", "I think the method is good.", "The method is super good.", "Everybody knows the method works."], a: 0, e: "Nesnel ve temkinli: The results suggest that ..." },
    { q: "\"Prices increased quickly.\" cümlesinin isimleştirilmiş hali?", o: ["There was a rapid increase in prices.", "Prices were increasing quickly.", "Quick prices increased.", "Increasing prices quick."], a: 0, e: "Fiil (increased) isim olur: a rapid increase." },
    { q: "\"consequently\" ne demek?", o: ["sonuç olarak", "buna rağmen", "örneğin", "ayrıca"], a: 0, e: "consequently = sonuç olarak." },
    { q: "Hangisi temkinli (hedging) bir ifadedir?", o: ["It is likely that ...", "It is certain that ...", "Everyone agrees that ...", "It is a fact that ..."], a: 0, e: "it is likely that = muhtemelen; kesin iddiadan kaçınır." },
    { q: "\"evidence\" ile hangisi doğru?", o: ["There is little evidence.", "There are few evidences.", "There is an evidence."], a: 0, e: "evidence sayılamaz: little evidence, a piece of evidence." }
  ],
  review: ["İsimleştirme: prices increased → an increase in prices.", "Temkinli dil: suggest, appear to, tend to, it is likely that.", "consequently, thus, in terms of, with regard to."]
},
{
  id: "en-c1-2", title: "Vurgu ve devrik yapı", no: "Emphasis and inversion", icon: "arrow",
  intro: "Cümlenin bir bölümünü öne çıkarmayı öğreniyoruz: \"What I need is ...\", \"It was ... who ...\" ve devrik yapılar (Never have I ...).",
  notes: [
    { h: "Yarık cümleler (cleft sentences)", p: "Vurgulanacak bölüm öne alınır. It was ... that/who ...: It was my brother who called. (Arayan kardeşimdi.) What ... is ...: What I need is a holiday. (İhtiyacım olan şey bir tatil.)" },
    { h: "Devrik yapı (inversion)", p: "Olumsuz ya da kısıtlayıcı bir zarfla başlayan cümlede soru düzeni kullanılır. Resmî ve vurgulu bir üsluptur.",
      table: [["Normal", "Devrik (vurgulu)"], ["I have never seen such a mess.", "Never have I seen such a mess."], ["He not only sings but also dances.", "Not only does he sing, but he also dances."], ["I had just arrived when it started.", "No sooner had I arrived than it started."], ["You must not open this door.", "Under no circumstances must you open this door."], ["I didn't know what would happen.", "Little did I know what would happen."]] },
    { h: "Vurgulu do", p: "Olumlu cümlede vurgu için do/does/did eklenir: I do like your dress! (Elbiseni gerçekten beğendim!) He did call, I promise. (Gerçekten aradı, söz veriyorum.)" }
  ],
  tip: "Türkçede vurgu için kelime sırası serbestçe değişir: \"Kardeşimdi arayan.\" İngilizcede sıra katıdır; vurgu için kalıplar kullanılır: \"It was my brother who called.\" Devrik yapıda yardımcı fiili unutma: \"Never I have seen\" yanlış, \"Never have I seen\" doğru.",
  words: [
    W("What I need is", "İhtiyacım olan şey", "", "What I need is a long holiday.", "İhtiyacım olan şey uzun bir tatil."),
    W("It was ... who", "... olan ...ydı", "", "It was Sarah who found the mistake.", "Hatayı bulan Sarah'ydı."),
    W("Never have I", "Hiç ... -medim (vurgulu)", "", "Never have I seen such a beautiful view.", "Hiç böyle güzel bir manzara görmedim."),
    W("Not only ... but also", "Sadece ... değil, aynı zamanda", "", "Not only is it cheap, but it's also fast.", "Sadece ucuz değil, aynı zamanda hızlı."),
    W("No sooner ... than", "... -er -mez", "", "No sooner had I sat down than the phone rang.", "Oturur oturmaz telefon çaldı."),
    W("Hardly ... when", "Henüz ... -mişti ki", "", "Hardly had we started when it began to rain.", "Henüz başlamıştık ki yağmur başladı."),
    W("Under no circumstances", "Hiçbir koşulda", "", "Under no circumstances should you share your password.", "Hiçbir koşulda şifreni paylaşmamalısın."),
    W("Little did I know", "Hiç bilmiyordum ki", "", "Little did I know that I would live here one day.", "Bir gün burada yaşayacağımı hiç bilmiyordum."),
    W("Rarely", "Nadiren (vurgulu)", "", "Rarely do we see such talent.", "Böyle bir yeteneği nadiren görürüz."),
    W("Only then", "Ancak o zaman", "", "Only then did I understand the problem.", "Sorunu ancak o zaman anladım."),
    W("the thing is", "mesele şu ki", "", "The thing is, I don't have enough time.", "Mesele şu ki yeterince vaktim yok."),
    W("do (vurgu)", "gerçekten, cidden", "", "I do appreciate your help.", "Yardımını gerçekten takdir ediyorum.", { tts: "I do appreciate your help." }),
    W("The reason why ... is", "... nedeni ...", "", "The reason why I left is the salary.", "Ayrılma nedenim maaş.")
  ],
  dialogue: [["A", "So, why did you leave your last job?", "Peki, son işinden neden ayrıldın?"], ["B", "The thing is, it wasn't the work. It was the manager who made it difficult.", "Mesele şu ki iş değildi. Zorlaştıran müdürdü."], ["A", "Really? What happened?", "Gerçekten mi? Ne oldu?"], ["B", "No sooner had I started than he changed all my tasks. Never have I felt so confused.", "Başlar başlamaz bütün görevlerimi değiştirdi. Hiç bu kadar şaşkın hissetmemiştim."], ["A", "And now?", "Ya şimdi?"], ["B", "What I love about this job is the team. I do feel valued here.", "Bu işte sevdiğim şey ekip. Burada gerçekten değer gördüğümü hissediyorum."]],
  quiz: [
    { q: "\"Hiç böyle bir şey görmemiştim.\" (vurgulu)", o: ["Never had I seen such a thing.", "Never I had seen such a thing.", "Never I have seen such thing.", "Had never I seen such a thing."], a: 0, e: "Olumsuz zarfla başlayınca devrik: Never had I seen." },
    { q: "\"Hatayı bulan Sarah'ydı.\"", o: ["It was Sarah who found the mistake.", "It was Sarah found the mistake who.", "Sarah was it who found the mistake.", "Who found the mistake was it Sarah."], a: 0, e: "It was + vurgulanan + who + cümle." },
    { q: "\"Oturur oturmaz telefon çaldı.\"", o: ["No sooner had I sat down than the phone rang.", "No sooner I had sat down when the phone rang.", "No sooner had I sat down that the phone rang.", "No sooner did I sat down than the phone rang."], a: 0, e: "No sooner had + özne + V3 + than." },
    { q: "\"I do like it.\" cümlesinde do ne işe yarar?", o: ["Vurgu yapar: gerçekten seviyorum.", "Soru yapar.", "Olumsuz yapar."], a: 0, e: "Olumlu cümlede do vurgu ekler." },
    { q: "\"Not only ___ cheap, but it's also fast.\"", o: ["is it", "it is", "it's", "does it"], a: 0, e: "Not only ile başlayınca devrik: is it." }
  ],
  review: ["It was ... who/that ...; What I need is ...", "Devrik yapı: Never have I ..., No sooner had I ... than ...", "Vurgulu do: I do like it."]
},
{
  id: "en-c1-3", title: "Varsayımlar ve pişmanlıklar", no: "Hypotheticals and regrets", icon: "clock",
  intro: "Geçmişle ilgili varsayımları ve pişmanlıkları anlatmayı öğreniyoruz: üçüncü koşul, I wish, should have ve tahmin bildiren must have.",
  notes: [
    { h: "Üçüncü koşul ve karışık koşul", p: "Geçmişte olmamış bir durum: If + had + V3, would have + V3. If I had known, I would have come. (Bilseydim gelirdim.) Karışık: geçmişteki koşul, şimdiki sonuç: If I had studied medicine, I would be a doctor now.",
      table: [["Yapı", "Örnek", "Türkçe"], ["3. koşul", "If you had asked, I would have helped.", "Sorsaydın yardım ederdim."], ["Devrik 3. koşul", "Had I known, I would have come.", "Bilseydim gelirdim."], ["Karışık", "If I had taken the job, I'd be rich now.", "O işi alsaydım şimdi zengin olurdum."]] },
    { h: "I wish / If only", p: "Şimdi için: I wish + past: I wish I had more time. (Keşke daha çok vaktim olsa.) Geçmiş için: I wish + past perfect: I wish I had studied harder. (Keşke daha çok çalışsaydım.) If only daha vurguludur." },
    { h: "Modal + have + V3", p: "should have: -meliydi (eleştiri, pişmanlık). could have: -ebilirdi (olmayan olasılık). might have: -miş olabilir. must have: -miş olmalı (güçlü tahmin). can't have: -miş olamaz.",
      table: [["Yapı", "Örnek", "Türkçe"], ["should have", "You should have told me.", "Bana söylemeliydin."], ["could have", "It could have been worse.", "Daha kötü olabilirdi."], ["must have", "She must have forgotten.", "Unutmuş olmalı."], ["can't have", "He can't have seen us.", "Bizi görmüş olamaz."]] }
  ],
  tip: "Türkçedeki \"-seydi, -irdi\" yapısında iki parçanın da geçmiş olduğu hissedilir. İngilizcede if kısmına would gelmez: \"If I would have known\" yanlış, doğrusu \"If I had known\". Ayrıca \"Keşke\" için \"I wish I would\" değil, \"I wish I had ...\".",
  words: [
    W("If I had known", "Bilseydim", "", "If I had known, I would have called you.", "Bilseydim seni arardım."),
    W("would have", "-erdi (geçmişte)", "", "I would have helped you.", "Sana yardım ederdim."),
    W("Had I known", "Bilseydim (resmî, devrik)", "", "Had I known about the delay, I would have taken a taxi.", "Gecikmeyi bilseydim taksiye binerdim."),
    W("I wish", "keşke", "", "I wish I had more free time.", "Keşke daha çok boş vaktim olsa."),
    W("If only", "keşke (vurgulu)", "", "If only I had listened to you!", "Keşke seni dinleseydim!"),
    W("should have", "-meliydi", "", "You should have told me earlier.", "Bana daha önce söylemeliydin."),
    W("could have", "-ebilirdi", "", "We could have won the match.", "Maçı kazanabilirdik."),
    W("might have", "-miş olabilir", "", "He might have missed the bus.", "Otobüsü kaçırmış olabilir."),
    W("must have", "-miş olmalı", "", "She must have been tired.", "Yorgun olmalıydı."),
    W("can't have", "-miş olamaz", "", "They can't have finished already.", "Çoktan bitirmiş olamazlar."),
    W("regret", "pişmanlık; pişman olmak", "", "I regret not learning English earlier.", "İngilizceyi daha önce öğrenmediğime pişmanım.", { note: "regret + -ing" }),
    W("otherwise", "aksi halde", "", "Leave now, otherwise you'll be late.", "Şimdi çık, aksi halde geç kalırsın."),
    W("in case", "... ihtimaline karşı", "", "Take an umbrella in case it rains.", "Yağmur yağma ihtimaline karşı şemsiye al."),
    W("I'd rather", "-meyi tercih ederim", "", "I'd rather stay at home tonight.", "Bu akşam evde kalmayı tercih ederim.")
  ],
  dialogue: [["A", "You look upset. What happened?", "Üzgün görünüyorsun. Ne oldu?"], ["B", "I missed my flight. If I had left an hour earlier, I would have caught it.", "Uçağımı kaçırdım. Bir saat erken çıksaydım yetişirdim."], ["A", "Oh no. The traffic must have been terrible.", "Eyvah. Trafik berbat olmalıydı."], ["B", "It was. I should have taken the train. I wish I had listened to you!", "Öyleydi. Trene binmeliydim. Keşke seni dinleseydim!"], ["A", "Well, it could have been worse. At least you can get another flight.", "Daha kötü olabilirdi. En azından başka bir uçağa binebilirsin."], ["B", "True. Next time I'll leave early, in case there's traffic.", "Doğru. Bir dahaki sefere trafik ihtimaline karşı erken çıkacağım."]],
  quiz: [
    { q: "\"Bilseydim gelirdim.\"", o: ["If I had known, I would have come.", "If I would have known, I had come.", "If I knew, I would come yesterday.", "If I have known, I would come."], a: 0, e: "3. koşul: If + had + V3, would have + V3." },
    { q: "\"Keşke daha çok çalışsaydım.\"", o: ["I wish I had studied harder.", "I wish I would study harder.", "I wish I studied harder yesterday.", "I wish I have studied harder."], a: 0, e: "Geçmişle ilgili pişmanlık: I wish + had + V3." },
    { q: "\"Unutmuş olmalı.\" (güçlü tahmin)", o: ["She must have forgotten.", "She should have forgotten.", "She must forgot.", "She can't have forgotten."], a: 0, e: "must have + V3 = -miş olmalı." },
    { q: "\"You should have told me.\" ne ifade eder?", o: ["Bana söylemeliydin (eleştiri).", "Bana söyleyebilirsin.", "Bana söyleyeceksin.", "Bana söyledin."], a: 0, e: "should have + V3 = -meliydin." },
    { q: "\"Had I known\" neyin devrik halidir?", o: ["If I had known", "I had known", "If I have known"], a: 0, e: "Resmî üslup: if düşer, had başa geçer." }
  ],
  review: ["If + had + V3, would have + V3 (if'ten sonra would yok).", "I wish + past (şimdi) / past perfect (geçmiş).", "should have, could have, must have, can't have + V3."]
},
{
  id: "en-c1-4", title: "Toplantı ve müzakere", no: "Meetings and negotiations", icon: "briefcase",
  intro: "Toplantı yönetmeyi, söz almayı, teklif sunmayı ve pazarlık yapmayı öğreniyoruz.",
  notes: [
    { h: "Toplantıyı yönetmek", p: "Let's get started. (Başlayalım.) The main item on the agenda is ... (Gündemin ana maddesi ...) Let's move on to the next point. (Sonraki maddeye geçelim.) Is there any other business? (Başka konu var mı?) Let's wrap up. (Toparlayalım.)" },
    { h: "Söz almak ve karşı çıkmak", p: "Söz almak: Can I just come in here? / If I could add something ... Kibar karşı çıkış: I take your point, but ... / I'm not sure I agree with that. / With respect, ... (\"With respect\" aslında güçlü bir itirazın habercisidir.)" },
    { h: "Pazarlık dili", p: "Koşullu teklif: If you can deliver by May, we could offer a 5% discount. Uzlaşma: Would you be willing to ...? / Let's meet halfway. (Ortada buluşalım.) Sonuç: So, do we have a deal?" }
  ],
  tip: "İngilizce iş kültüründe doğrudan \"Hayır\" demek kaba bulunabilir. \"That's not possible\" yerine \"That might be difficult for us\" ya da \"I'm afraid we can't go that far\" gibi yumuşak ifadeler tercih edilir. Türkçede doğal olan dolaysızlık İngilizcede sert gelebilir.",
  words: [
    W("agenda", "gündem", "", "Let's look at the agenda.", "Gündeme bakalım."),
    W("chair", "toplantıyı yönetmek; başkan", "", "Who's chairing the meeting?", "Toplantıyı kim yönetiyor?"),
    W("minutes", "toplantı tutanağı", "", "Could you take the minutes?", "Tutanağı tutabilir misin?"),
    W("move on", "geçmek (sonraki konuya)", "", "Let's move on to the budget.", "Bütçeye geçelim."),
    W("I take your point, but", "Haklısın ama", "", "I take your point, but the cost is too high.", "Haklısın ama maliyet çok yüksek."),
    W("proposal", "teklif, öneri", "", "We've looked at your proposal.", "Teklifinizi inceledik."),
    W("compromise", "uzlaşma; uzlaşmak", "", "We need to find a compromise.", "Bir uzlaşma bulmamız gerekiyor."),
    W("meet halfway", "ortada buluşmak", "", "Let's meet halfway on the price.", "Fiyatta ortada buluşalım."),
    W("deal", "anlaşma", "", "Do we have a deal?", "Anlaştık mı?"),
    W("reach an agreement", "anlaşmaya varmak", "", "We finally reached an agreement.", "Sonunda anlaşmaya vardık."),
    W("concession", "taviz", "", "Both sides made concessions.", "Her iki taraf da taviz verdi."),
    W("bottom line", "son fiyat; asıl önemli nokta", "", "What's your bottom line?", "Son fiyatınız ne?"),
    W("follow up", "takip etmek", "", "I'll follow up with an email.", "Bir e-postayla takip edeceğim."),
    W("I'm afraid", "korkarım, maalesef", "", "I'm afraid we can't accept that.", "Maalesef bunu kabul edemeyiz.")
  ],
  dialogue: [["A", "Right, let's get started. The main item on the agenda is the new contract.", "Evet, başlayalım. Gündemin ana maddesi yeni sözleşme."], ["B", "We've looked at your proposal. I'm afraid the price is a bit high for us.", "Teklifinizi inceledik. Maalesef fiyat bizim için biraz yüksek."], ["A", "I take your point. If you sign for two years, we could offer a 5% discount.", "Haklısınız. İki yıllığına imzalarsanız yüzde 5 indirim yapabiliriz."], ["B", "Would you be willing to go to 8%?", "Yüzde 8'e çıkmaya razı olur musunuz?"], ["A", "That might be difficult. Let's meet halfway: 6.5%.", "Bu zor olabilir. Ortada buluşalım: yüzde 6,5."], ["B", "OK, I think we have a deal. I'll follow up with an email.", "Tamam, sanırım anlaştık. Bir e-postayla takip edeceğim."]],
  quiz: [
    { q: "Toplantıda sonraki konuya geçmek için:", o: ["Let's move on to the next point.", "Let's move off the next point.", "Go next now.", "Point next we go."], a: 0, e: "move on to = (sonraki konuya) geçmek." },
    { q: "Kibarca karşı çıkmak için hangisi?", o: ["I take your point, but ...", "You're wrong.", "No. Never.", "That's stupid."], a: 0, e: "I take your point, but ... kibar bir itiraz kalıbıdır." },
    { q: "\"minutes\" toplantıda ne demek?", o: ["toplantı tutanağı", "dakikalar", "küçük konular"], a: 0, e: "take the minutes = tutanak tutmak." },
    { q: "\"Let's meet halfway.\" ne demek?", o: ["Ortada buluşalım (uzlaşalım).", "Yolun yarısında görüşelim.", "Toplantıyı yarıda keselim."], a: 0, e: "meet halfway = karşılıklı taviz vererek uzlaşmak." },
    { q: "\"concession\" ne demek?", o: ["taviz", "sonuç", "itiraz"], a: 0, e: "make a concession = taviz vermek." }
  ],
  review: ["agenda, minutes, move on, any other business.", "I take your point, but ... / I'm afraid ...", "compromise, meet halfway, reach an agreement, deal."]
},
{
  id: "en-c1-5", title: "Toplum ve medya", no: "Society and the media", icon: "globe",
  intro: "Haberleri, siyaseti ve toplumsal konuları tartışmak için gereken kelimeleri ve ifadeleri öğreniyoruz.",
  notes: [
    { h: "Haber dili", p: "Haber başlıklarında dil kısaltılır: \"PM to visit Turkey\" = The Prime Minister is going to visit Turkey. Başlıklarda to + fiil gelecek, şimdiki zaman ise yakın geçmiş anlamı taşır: \"Minister resigns\" = Bakan istifa etti." },
    { h: "Kaynak değerlendirmek", p: "reliable source (güvenilir kaynak), biased (taraflı), misinformation (yanlış bilgi), fact-check (doğruluğunu kontrol etmek). According to ... (... göre) ifadesiyle kaynak gösterilir." },
    { h: "Fikir ve eğilim", p: "There is growing concern about ... (... konusunda artan bir endişe var.) The issue has sparked debate. (Konu tartışma yarattı.) Public opinion is divided. (Kamuoyu bölünmüş durumda.)" }
  ],
  tip: "Türkçede \"gündem\" hem toplantı gündemi hem de haber gündemi anlamına gelir. İngilizcede haber gündemi için \"agenda\" değil, \"the news\" ya da \"current affairs\" kullanılır. \"political agenda\" ise \"siyasi amaç/hedef\" demektir.",
  words: [
    W("government", "hükümet", "", "The government announced new measures.", "Hükümet yeni önlemler açıkladı."),
    W("election", "seçim", "", "The election will be held in May.", "Seçim mayısta yapılacak."),
    W("policy", "politika, plan", "", "The new housing policy is controversial.", "Yeni konut politikası tartışmalı."),
    W("controversial", "tartışmalı", "", "It's a controversial decision.", "Tartışmalı bir karar."),
    W("headline", "manşet, başlık", "", "The story made the headlines.", "Haber manşetlere çıktı."),
    W("coverage", "haber yapma, yayın", "", "The media coverage was unfair.", "Medyanın haberleri adil değildi."),
    W("biased", "taraflı", "", "This newspaper is biased.", "Bu gazete taraflı."),
    W("misinformation", "yanlış bilgi", "", "Misinformation spreads quickly online.", "Yanlış bilgi internette hızla yayılır."),
    W("according to", "-e göre", "", "According to the report, crime has fallen.", "Rapora göre suç oranı düştü."),
    W("inequality", "eşitsizlik", "", "Inequality has increased in recent years.", "Son yıllarda eşitsizlik arttı."),
    W("public opinion", "kamuoyu", "", "Public opinion is divided on this issue.", "Kamuoyu bu konuda bölünmüş durumda."),
    W("raise awareness", "farkındalık yaratmak", "", "The campaign aims to raise awareness of mental health.", "Kampanya ruh sağlığı konusunda farkındalık yaratmayı amaçlıyor."),
    W("spark debate", "tartışma başlatmak", "", "The film sparked a national debate.", "Film ulusal bir tartışma başlattı."),
    W("current affairs", "güncel olaylar", "", "I listen to a current affairs podcast.", "Güncel olaylarla ilgili bir podcast dinliyorum.")
  ],
  dialogue: [["A", "Did you see the headlines this morning?", "Bu sabahki manşetleri gördün mü?"], ["B", "About the new housing policy? It's quite controversial.", "Yeni konut politikasıyla ilgili olanı mı? Epey tartışmalı."], ["A", "According to the government, it'll make homes cheaper.", "Hükümete göre evleri ucuzlatacak."], ["B", "Maybe, but the coverage I read was very biased.", "Belki ama okuduğum haberler çok taraflıydı."], ["A", "That's the problem. There's so much misinformation online.", "Sorun da bu. İnternette o kadar çok yanlış bilgi var ki."], ["B", "True. I always check a reliable source before sharing anything.", "Doğru. Bir şey paylaşmadan önce her zaman güvenilir bir kaynağa bakarım."]],
  quiz: [
    { q: "Başlık: \"Minister resigns\" ne demek?", o: ["Bakan istifa etti.", "Bakan istifa edecek.", "Bakan istifa etmeli."], a: 0, e: "Başlıklarda geniş zaman yakın geçmişi anlatır." },
    { q: "\"biased\" ne demek?", o: ["taraflı", "tarafsız", "güvenilir", "yanlış"], a: 0, e: "biased = taraflı; unbiased = tarafsız." },
    { q: "\"Rapora göre ...\"", o: ["According to the report, ...", "According the report, ...", "By the report, ...", "As the report says to, ..."], a: 0, e: "according to + kaynak." },
    { q: "\"Haber gündemi\" İngilizcede?", o: ["current affairs / the news", "the agenda", "the minutes"], a: 0, e: "Haber gündemi = current affairs; agenda toplantı gündemidir." },
    { q: "\"raise awareness\" ne demek?", o: ["farkındalık yaratmak", "maaş artırmak", "uyandırmak"], a: 0, e: "raise awareness of something = bir konuda farkındalık yaratmak." }
  ],
  review: ["Başlık dili: \"PM to visit\" = ziyaret edecek; \"Minister resigns\" = istifa etti.", "biased, reliable source, misinformation, according to.", "controversial, spark debate, public opinion."]
},
{
  id: "en-c1-6", title: "İngiliz ve Amerikan İngilizcesi, argo", no: "Varieties and slang", icon: "chat",
  intro: "İngiliz ve Amerikan İngilizcesi arasındaki farkları ve günlük konuşmada duyacağın argo kelimeleri öğreniyoruz.",
  notes: [
    { h: "Kelime farkları", p: "İngiltere ve ABD'de bazı günlük şeyler farklı kelimelerle söylenir. İkisi de doğrudur; tutarlı olmak önemlidir.",
      table: [["İngiliz (BrE)", "Amerikan (AmE)", "Türkçe"], ["flat", "apartment", "daire"], ["lift", "elevator", "asansör"], ["queue", "line", "kuyruk"], ["rubbish", "trash / garbage", "çöp"], ["holiday", "vacation", "tatil"], ["mobile", "cell phone", "cep telefonu"], ["chips", "fries", "patates kızartması"], ["crisps", "chips", "cips"]] },
    { h: "Yazım ve dilbilgisi farkları", p: "Yazım: colour / color, centre / center, organise / organize. Dilbilgisi: BrE \"Have you got a car?\" – AmE \"Do you have a car?\" BrE \"at the weekend\" – AmE \"on the weekend\"." },
    { h: "Günlük argo", p: "İngiltere: mate (dostum), cheers (teşekkürler; şerefe), knackered (çok yorgun), gutted (çok üzgün, hayal kırıklığına uğramış), quid (sterlin), sorted (halloldu). ABD: awesome (harika), dude (dostum). Her iki tarafta: gonna (going to), wanna (want to)." }
  ],
  tip: "İngiltere'de \"chips\" patates kızartmasıdır; ABD'de ise cips! Benzer şekilde \"pants\" İngiltere'de iç çamaşırı, ABD'de pantolon demektir. Yanlış anlaşılmamak için hangi ülkede olduğuna dikkat et.",
  words: [
    W("lift", "asansör (BrE)", "", "Let's take the lift.", "Asansöre binelim.", { note: "AmE: elevator" }),
    W("queue", "kuyruk (BrE)", "", "There's a long queue at the post office.", "Postanede uzun bir kuyruk var.", { note: "AmE: line" }),
    W("rubbish", "çöp; saçmalık (BrE)", "", "Can you take the rubbish out?", "Çöpü çıkarabilir misin?", { note: "AmE: trash" }),
    W("mobile", "cep telefonu (BrE)", "", "What's your mobile number?", "Cep numaran ne?", { note: "AmE: cell phone" }),
    W("chips", "patates kızartması (BrE)", "", "Fish and chips, please.", "Balık ve patates kızartması, lütfen.", { note: "AmE: fries" }),
    W("mate", "dostum, arkadaş (BrE argo)", "", "Cheers, mate!", "Sağ ol dostum!"),
    W("cheers", "sağ ol; şerefe", "", "Cheers for the help!", "Yardım için sağ ol!"),
    W("knackered", "çok yorgun, bitkin (BrE argo)", "", "I'm absolutely knackered.", "Tamamen bitkinim."),
    W("gutted", "çok üzgün, yıkılmış (BrE argo)", "", "I was gutted when we lost.", "Kaybettiğimizde yıkıldım."),
    W("quid", "sterlin (argo)", "", "It cost twenty quid.", "Yirmi sterlin tuttu.", { note: "çoğulu da quid" }),
    W("sorted", "halloldu (BrE argo)", "", "Don't worry, it's sorted.", "Merak etme, halloldu."),
    W("awesome", "harika (AmE)", "", "That's awesome!", "Bu harika!"),
    W("gonna", "-ecek (going to, konuşma dili)", "", "I'm gonna be late.", "Geç kalacağım."),
    W("brilliant", "harika (BrE)", "", "That's brilliant news!", "Bu harika bir haber!")
  ],
  dialogue: [["A", "Cheers for waiting, mate. The queue at the shop was massive.", "Beklediğin için sağ ol dostum. Dükkândaki kuyruk çok uzundu."], ["B", "No worries. You look knackered.", "Sorun değil. Bitkin görünüyorsun."], ["A", "I am. And I'm gutted – they'd run out of chips!", "Öyleyim. Bir de yıkıldım: patates kızartması bitmiş!"], ["B", "In America they'd say \"fries\", wouldn't they?", "Amerika'da \"fries\" derlerdi, değil mi?"], ["A", "Yeah, and \"chips\" are crisps there. Confusing!", "Evet, orada \"chips\" cips demek. Kafa karıştırıcı!"], ["B", "Anyway, I've ordered a pizza. Twenty quid. Sorted!", "Neyse, pizza sipariş ettim. Yirmi sterlin. Halloldu!"]],
  quiz: [
    { q: "İngiliz İngilizcesi \"lift\" Amerikan İngilizcesinde?", o: ["elevator", "escalator", "ride", "stairs"], a: 0, e: "lift (BrE) = elevator (AmE) = asansör." },
    { q: "İngiltere'de \"chips\" nedir?", o: ["patates kızartması", "cips", "çikolata"], a: 0, e: "BrE chips = AmE fries. AmE chips = BrE crisps." },
    { q: "\"I'm knackered.\" ne demek?", o: ["Çok yorgunum.", "Çok mutluyum.", "Çok açım."], a: 0, e: "knackered (BrE argo) = bitkin." },
    { q: "\"twenty quid\" ne kadardır?", o: ["yirmi sterlin", "yirmi dolar", "yirmi peni"], a: 0, e: "quid = sterlin (argo)." },
    { q: "Amerikan İngilizcesinde \"Have you got a car?\" yerine?", o: ["Do you have a car?", "Are you having a car?", "Got you a car?"], a: 0, e: "AmE: Do you have ...? daha yaygındır." }
  ],
  review: ["flat/apartment, lift/elevator, queue/line, rubbish/trash.", "BrE chips = AmE fries; colour/color.", "mate, cheers, knackered, gutted, quid, sorted."]
},
{
  id: "en-c1-7", title: "İş hayatında deyimler", no: "Business idioms", icon: "spark",
  intro: "Toplantılarda ve iş e-postalarında sık geçen 12 deyim. Önce resmi hatırla, sonra anlamı.",
  notes: [
    { h: "İş dünyasının dili", p: "İngilizce konuşulan iş ortamlarında deyimler çok yaygındır: \"Let's touch base next week\" ya da \"We're back to the drawing board\". Bunları bilmeden toplantıları takip etmek zor olabilir." },
    { h: "Spor deyimleri", p: "Birçok iş deyimi spordan, özellikle beyzbol ve futboldan gelir: ballpark figure (kabaca bir rakam), get the ball rolling (işe başlamak), a level playing field (eşit şartlar)." },
    { h: "Dikkatli kullan", p: "Çok fazla deyim kullanmak yapay ya da klişe görünebilir. Anlamak önemli; kullanırken ölçülü ol." }
  ],
  tip: "\"think outside the box\" Türkçede de \"kutunun dışında düşünmek\" diye kullanılmaya başlandı. Ama çoğu iş deyiminin Türkçede birebir karşılığı yok; anlamı öğrenip kendi cümlelerinde dene.",
  words: [
    I("back to the drawing board", "en baştan başlamak", "çizim masasına geri dönmek", "✏️📋🔄", "The client hated the design, so it's back to the drawing board.", "Müşteri tasarımı beğenmedi, en baştan başlıyoruz."),
    I("on the back burner", "ikinci plana atılmış, ertelenmiş", "arka ocakta", "🍳🔥⏸️", "The project has been put on the back burner.", "Proje ikinci plana atıldı."),
    I("think outside the box", "yaratıcı düşünmek", "kutunun dışında düşünmek", "📦💡", "We need to think outside the box.", "Yaratıcı düşünmemiz lazım."),
    I("touch base", "kısaca görüşmek, haberleşmek", "üsse dokunmak", "⚾🤝", "Let's touch base on Monday.", "Pazartesi kısaca görüşelim."),
    I("the elephant in the room", "herkesin bildiği ama konuşmadığı sorun", "odadaki fil", "🐘🛋️", "The budget cut is the elephant in the room.", "Bütçe kesintisi herkesin bildiği ama konuşmadığı sorun."),
    I("get the ball rolling", "işi başlatmak", "topu yuvarlamak", "⚽➡️", "Let's get the ball rolling with a quick introduction.", "Kısa bir tanıtımla başlayalım."),
    I("cut to the chase", "sadede gelmek", "kovalamaca sahnesine geçmek", "✂️🏃", "Let me cut to the chase: we need more money.", "Sadede geleyim: daha fazla paraya ihtiyacımız var."),
    I("a ballpark figure", "kabaca bir rakam", "beyzbol sahası rakamı", "⚾🔢", "Can you give me a ballpark figure?", "Bana kabaca bir rakam verebilir misin?"),
    I("call it a day", "günü bitirmek, paydos etmek", "ona bir gün demek", "📞🌅", "It's six o'clock. Let's call it a day.", "Saat altı. Paydos edelim."),
    I("go the extra mile", "fazlasını yapmak, elinden gelenin fazlası", "fazladan bir mil gitmek", "🛣️➕", "She always goes the extra mile for her clients.", "Müşterileri için her zaman fazlasını yapar."),
    I("learn the ropes", "işin inceliklerini öğrenmek", "halatları öğrenmek", "🪢🎓", "It takes a few weeks to learn the ropes.", "İşin inceliklerini öğrenmek birkaç hafta sürer."),
    I("a level playing field", "eşit şartlar", "düz bir oyun sahası", "⚖️🏟️", "New rules should create a level playing field.", "Yeni kurallar eşit şartlar yaratmalı.")
  ],
  dialogue: [["A", "Let's get the ball rolling. Can you give me a ballpark figure for the project?", "Başlayalım. Proje için kabaca bir rakam verebilir misin?"], ["B", "Around fifty thousand. But let me cut to the chase: the client wants changes.", "Elli bin civarı. Ama sadede geleyim: müşteri değişiklik istiyor."], ["A", "Big changes? Are we back to the drawing board?", "Büyük değişiklikler mi? En baştan mı başlıyoruz?"], ["B", "Not quite. But we need to think outside the box.", "Tam değil. Ama yaratıcı düşünmemiz lazım."], ["A", "OK. Let's put the website on the back burner for now.", "Tamam. Web sitesini şimdilik ikinci plana atalım."], ["B", "Agreed. Let's touch base tomorrow and call it a day.", "Katılıyorum. Yarın kısaca görüşelim, bugünlük paydos edelim."]],
  quiz: [
    { q: "\"The project was put on the back burner.\" ne demek?", o: ["Proje ertelendi, ikinci plana atıldı.", "Proje yandı.", "Proje başarıyla bitti.", "Proje mutfakta yapıldı."], a: 0, e: "on the back burner = öncelik dışı kalmış." },
    { q: "\"Sadede gel!\"", o: ["Cut to the chase!", "Call it a day!", "Touch base!", "Learn the ropes!"], a: 0, e: "cut to the chase = sadede gelmek." },
    { q: "\"a ballpark figure\" nedir?", o: ["kabaca bir rakam", "kesin bir fiyat", "bir maç skoru"], a: 0, e: "ballpark figure = yaklaşık rakam." },
    { q: "Herkesin bildiği ama kimsenin konuşmadığı sorun:", o: ["the elephant in the room", "a level playing field", "back to the drawing board"], a: 0, e: "the elephant in the room = odadaki fil." },
    { q: "\"Let's call it a day.\"", o: ["Bugünlük paydos edelim.", "Bir günü planlayalım.", "Yarın arayalım."], a: 0, e: "call it a day = günü bitirmek." }
  ],
  review: ["back to the drawing board = en baştan; on the back burner = ertelenmiş.", "cut to the chase = sadede gelmek; ballpark figure = kabaca rakam.", "touch base, call it a day, learn the ropes."]
},
{
  id: "en-c1-8", title: "Atasözleri ve günlük sözler", no: "Proverbs and sayings", icon: "spark",
  intro: "İngilizcede sık duyulan 12 atasözü ve kalıp söz. Çoğunun Türkçede yakın bir karşılığı var; onları birlikte öğrenmek hatırlamayı kolaylaştırır.",
  notes: [
    { h: "Türkçe karşılıklar", p: "Atasözleri kültürden kültüre benzer fikirleri anlatır: \"Don't count your chickens before they hatch\" = Dereyi görmeden paçaları sıvama. \"Rome wasn't built in a day\" = Sabırla koruk helva olur." },
    { h: "Kısaltılmış kullanım", p: "Anadili İngilizce olanlar atasözlerini çoğu zaman yarım söyler: \"Well, when in Rome ...\" ya da \"Every cloud ...\" Karşındaki kişinin devamını bildiği varsayılır." },
    { h: "Ne zaman kullanmalı?", p: "Atasözleri sohbette, tavsiye verirken ve yazılarda vurgu için kullanılır. Resmî iş yazışmalarında pek kullanılmaz." }
  ],
  tip: "\"It's not my cup of tea\" (benim çay fincanım değil) kibar bir \"sevmiyorum\" demektir. Türkçedeki \"bana göre değil\" ile aynı: \"Opera isn't really my cup of tea.\"",
  words: [
    I("Don't count your chickens before they hatch.", "Dereyi görmeden paçaları sıvama.", "civcivler çıkmadan saymaya başlama", "🥚🐣🔢", "I might get the job, but I won't count my chickens.", "İşi alabilirim ama dereyi görmeden paçaları sıvamayacağım."),
    I("The early bird catches the worm.", "Erken kalkan yol alır.", "erken kalkan kuş solucanı yakalar", "🐦🪱🌅", "Get there at eight – the early bird catches the worm!", "Sekizde orada ol, erken kalkan yol alır!"),
    I("Actions speak louder than words.", "Söz değil, iş önemli.", "eylemler sözlerden yüksek sesle konuşur", "🏃📢", "He promises a lot, but actions speak louder than words.", "Çok söz veriyor ama önemli olan icraat."),
    I("Every cloud has a silver lining.", "Her işte bir hayır vardır.", "her bulutun gümüş bir kenarı vardır", "☁️✨", "I lost my job, but every cloud has a silver lining.", "İşimi kaybettim ama her işte bir hayır var."),
    I("Better late than never.", "Geç olsun, güç olmasın.", "hiç olmamasından geç olması iyidir", "⏰👍", "You finally called! Better late than never.", "Sonunda aradın! Geç olsun, güç olmasın."),
    I("When in Rome, do as the Romans do.", "Gittiğin yerin adetlerine uy.", "Roma'dayken Romalılar gibi davran", "🏛️👥", "In England everyone queues – when in Rome!", "İngiltere'de herkes sıraya girer; gittiğin yerin adetine uy!"),
    I("It's not my cup of tea.", "Bana göre değil, tarzım değil.", "benim çay fincanım değil", "☕🙅", "Horror films aren't my cup of tea.", "Korku filmleri bana göre değil."),
    I("Rome wasn't built in a day.", "Sabırla koruk helva olur.", "Roma bir günde kurulmadı", "🏛️⏳", "Learning English takes time. Rome wasn't built in a day.", "İngilizce öğrenmek zaman alır. Sabırla koruk helva olur."),
    I("Don't judge a book by its cover.", "Görünüşe aldanma.", "bir kitabı kapağına göre yargılama", "📕👀", "He looks strict, but don't judge a book by its cover.", "Sert görünüyor ama görünüşe aldanma."),
    I("The grass is always greener on the other side.", "Komşunun tavuğu komşuya kaz görünür.", "çimen diğer tarafta hep daha yeşildir", "🌱🏡👀", "Don't quit yet. The grass is always greener on the other side.", "Hemen bırakma. Komşunun tavuğu komşuya kaz görünür."),
    I("Two heads are better than one.", "Bir elin nesi var, iki elin sesi var.", "iki kafa birinden iyidir", "🧠🧠", "Let's solve it together. Two heads are better than one.", "Birlikte çözelim. Bir elin nesi var, iki elin sesi var."),
    I("Practice makes perfect.", "İşleyen demir ışıldar.", "pratik mükemmelleştirir", "🔁🏆", "Keep speaking English every day. Practice makes perfect!", "Her gün İngilizce konuşmaya devam et. İşleyen demir ışıldar!")
  ],
  dialogue: [["A", "How's your English going?", "İngilizcen nasıl gidiyor?"], ["B", "Slowly. Sometimes I want to give up.", "Yavaş. Bazen bırakmak istiyorum."], ["A", "Rome wasn't built in a day! Practice makes perfect.", "Sabırla koruk helva olur! İşleyen demir ışıldar."], ["B", "I know. I've got a job interview in English next week.", "Biliyorum. Gelecek hafta İngilizce bir iş görüşmem var."], ["A", "That's great! But don't count your chickens – prepare well.", "Harika! Ama dereyi görmeden paçaları sıvama, iyi hazırlan."], ["B", "I will. I'll start tomorrow at six. The early bird catches the worm!", "Hazırlanacağım. Yarın altıda başlayacağım. Erken kalkan yol alır!"]],
  quiz: [
    { q: "\"Dereyi görmeden paçaları sıvama.\"", o: ["Don't count your chickens before they hatch.", "The early bird catches the worm.", "Better late than never.", "Practice makes perfect."], a: 0, e: "Civcivler çıkmadan saymaya başlama = sonucu görmeden sevinme." },
    { q: "\"It's not my cup of tea.\"", o: ["Bana göre değil, tarzım değil.", "Çayımı içmedim.", "Çok güzel bir fikir.", "Hiç umurumda değil."], a: 0, e: "not my cup of tea = hoşlandığım bir şey değil." },
    { q: "\"Geç olsun, güç olmasın.\"", o: ["Better late than never.", "Rome wasn't built in a day.", "Actions speak louder than words."], a: 0, e: "Better late than never = hiç olmamasından geç olması iyidir." },
    { q: "\"Don't judge a book by its cover.\" ne demek?", o: ["Görünüşe aldanma.", "Kitapları kapağından seç.", "Okumadan yorum yapma."], a: 0, e: "Bir şeyi dış görünüşüne göre yargılama." },
    { q: "\"Komşunun tavuğu komşuya kaz görünür.\"", o: ["The grass is always greener on the other side.", "Every cloud has a silver lining.", "Two heads are better than one."], a: 0, e: "Başkalarının durumu hep daha iyi görünür." }
  ],
  review: ["Atasözünü Türkçe karşılığıyla birlikte öğren.", "Rome wasn't built in a day = Sabırla koruk helva olur.", "not my cup of tea = bana göre değil."]
}
];
export default atLevel("C1", EN_C1);
