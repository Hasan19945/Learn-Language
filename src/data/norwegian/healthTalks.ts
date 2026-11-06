import type { StoryMood, StoryPlace, Talk, TalkLine } from "../../types";

const L = (who: 0 | 1, mood: StoryMood, text: string, tr: string, place?: StoryPlace): TalkLine => ({ who, mood, text, tr, place });

export const HEALTH_TALKS: Record<"b1" | "b2" | "c1", Talk> = {
  b1: {
    cast: ["emil", "sara"],
    place: "clinic",
    lines: [
      L(1, "happy", "God morgen, Emil. Jeg er vikar for fastlegen din i dag. Hva er problemet?", "Günaydın Emil. Bugün aile hekimine vekâlet ediyorum. Sorun nedir?"),
      L(0, "worried", "Jeg begynte å ha vondt i halsen i går, og nå har jeg feber.", "Dün boğazım ağrımaya başladı ve şimdi ateşim var."),
      L(1, "thinking", "Har du andre smerter?", "Başka ağrıların var mı?"),
      L(0, "worried", "Ja, i ryggen. Det er ikke lett å føle seg dårlig når man bor alene.", "Evet, sırtımda. Tek başına yaşarken kendini kötü hissetmek kolay değil."),
      L(1, "thinking", "Da gjør vi en undersøkelse. Åpne munnen, er du snill.", "O zaman bir muayene yapalım. Ağzını aç lütfen."),
      L(0, "worried", "Burde jeg dra til legevakten eller akuttmottaket?", "Nöbetçi doktora ya da acil servise gitmeli miyim?"),
      L(1, "happy", "Nei, det er ikke nødvendig. Du trenger ikke sykehus for dette.", "Hayır, gerek yok. Bunun için hastaneye ihtiyacın yok."),
      L(0, "thinking", "Trenger jeg en henvisning til en spesialist?", "Bir uzmana sevk gerekiyor mu?"),
      L(1, "thinking", "Nei, ingen henvisning. Men vi tar en blodprøve.", "Hayır, sevk yok. Ama bir kan tahlili yapacağız."),
      L(0, "thinking", "Kan jeg få noe for halsen?", "Boğazım için bir şey alabilir miyim?"),
      L(1, "happy", "Du får en resept på antibiotika. Du henter medisinen på apoteket.", "Sana antibiyotik reçetesi veriyorum. İlacı eczaneden alırsın."),
      L(0, "worried", "Arbeidsgiveren min trenger også en sykmelding.", "İşverenim doktor raporu da istiyor."),
      L(1, "happy", "Her er sykmeldingen din for tre dager. Hvil deg og drikk mye vann.", "İşte üç günlük raporun. Dinlen ve bol su iç."),
      L(0, "thinking", "Hvordan kan jeg bestille time hvis det blir verre?", "Kötüleşirse nasıl randevu alabilirim?"),
      L(1, "proud", "Du kan bestille time på nettet eller ringe oss.", "İnternetten randevu alabilir ya da bizi arayabilirsin."),
      L(0, "proud", "Tusen takk. Jeg føler meg allerede litt bedre!", "Çok teşekkürler. Şimdiden biraz daha iyi hissediyorum!")
    ]
  },
  b2: {
    cast: ["hansen", "emil"],
    place: "clinic",
    lines: [
      L(1, "happy", "God dag, Hansen. Prøvesvarene er kommet, og jeg har en diagnose.", "İyi günler Hansen. Tahlil sonuçları geldi ve bir teşhisim var."),
      L(0, "worried", "Si at det ikke er kreft!", "Kanser olmadığını söyleyin!"),
      L(1, "happy", "Nei, det er ikke kreft. Du har høyt blodtrykk og diabetes type 2.", "Hayır, kanser değil. Yüksek tansiyonunuz ve tip 2 şeker hastalığınız var."),
      L(0, "worried", "Er det en alvorlig sykdom?", "Bu ciddi bir hastalık mı?"),
      L(1, "thinking", "Begge er kroniske, så de går ikke over. Men vi kan holde dem godt under kontroll.", "İkisi de kronik, yani geçmeyecek. Ama onları iyi kontrol altında tutabiliriz."),
      L(0, "worried", "Faren min fikk hjerneslag, og broren min fikk hjerteinfarkt. Er det arvelig?", "Babam inme, kardeşim kalp krizi geçirdi. Kalıtsal mı?"),
      L(1, "thinking", "Delvis, ja. Derfor vil vi starte behandlingen nå.", "Kısmen evet. Bu yüzden tedaviye hemen başlamak istiyoruz."),
      L(0, "thinking", "Har medisinen noen bivirkning?", "İlacın yan etkisi var mı?"),
      L(1, "happy", "Du kan bli trøtt i begynnelsen. Si fra hvis det skjer.", "Başta yorgun hissedebilirsiniz. Olursa bana söyleyin."),
      L(0, "worried", "Og dette såret på foten vil ikke gro. Se her.", "Bir de ayağımdaki bu yara iyileşmiyor. Bakın."),
      L(1, "surprised", "Det ser ut som en infeksjon. Med diabetes må vi handle raskt.", "Bu bir enfeksiyona benziyor. Şeker hastalığında hızlı davranmalıyız."),
      L(0, "surprised", "Må jeg bli operert?", "Ameliyat olmam gerekecek mi?"),
      L(1, "thinking", "Kanskje, men det blir i så fall en liten operasjon.", "Belki, ama olursa küçük bir ameliyat olur."),
      L(0, "happy", "Hvor lang tid tar det å bli frisk?", "İyileşmek ne kadar sürer?"),
      L(1, "proud", "Følger du planen, kan du bli frisk på noen uker.", "Plana uyarsanız birkaç haftada iyileşebilirsiniz.")
    ]
  },
  c1: {
    cast: ["berg", "emil"],
    place: "ward",
    lines: [
      L(1, "happy", "God kveld, Berg. Jeg er Emil, overlege på denne sengeposten.", "İyi akşamlar Berg. Ben Emil, bu servisin sorumlu uzman hekimiyim."),
      L(0, "worried", "Hvorfor må jeg bli her? Jeg besvimte jo bare.", "Neden burada kalmak zorundayım? Sadece bayıldım."),
      L(1, "thinking", "Plutselig besvimelse krever innleggelse for undersøkelser.", "Ani bayılma, tetkik için hastaneye yatışı gerektirir."),
      L(1, "thinking", "Bildene viser en liten svulst. Vi kan ikke utelukke noe før biopsien.", "Görüntülerde küçük bir tümör var. Biyopsiden önce hiçbir şeyi dışlayamayız."),
      L(0, "surprised", "En svulst! Er den ondartet?", "Tümör mü! Kötü huylu mu?"),
      L(1, "happy", "Den kan godt være godartet. Biopsien vil vise det.", "İyi huylu olması çok mümkün. Biyopsi gösterecek."),
      L(0, "worried", "Sønnen min ringer hele tiden. Forteller du ham alt?", "Oğlum sürekli arıyor. Ona her şeyi anlatacak mısınız?"),
      L(1, "thinking", "Jeg har taushetsplikt, med mindre du sier ja. Er han din nærmeste pårørende?", "Siz kabul etmedikçe sır saklama yükümlülüğüm var. En yakın hasta yakınınız o mu?"),
      L(0, "thinking", "Ja, det er han. Du kan snakke med ham.", "Evet, o. Onunla konuşabilirsiniz."),
      L(1, "thinking", "Takk. Før operasjonen trenger jeg ditt samtykke, så jeg forklarer risikoen.", "Teşekkürler. Ameliyattan önce onamınız gerekiyor, o yüzden riskleri anlatıyorum."),
      L(1, "proud", "Gode nyheter, Berg. Svulsten er godartet, og prognosen er svært god.", "İyi haber Berg. Tümör iyi huylu ve beklenen seyir çok iyi.", "clinic"),
      L(0, "happy", "Gudskjelov! Jeg var redd for at jeg ville trenge lindrende behandling.", "Çok şükür! Palyatif bakıma ihtiyacım olacak diye korkuyordum.", "clinic"),
      L(1, "happy", "Nei, ikke i det hele tatt. Du kan bli utskrevet neste uke.", "Hayır, hiç de değil. Gelecek hafta taburcu olabilirsiniz.", "clinic"),
      L(0, "thinking", "Og hva med fastlegen min?", "Peki ya aile hekimim?", "clinic"),
      L(1, "proud", "Fastlegen får epikrisen og står for oppfølgingen.", "Aile hekimi epikrizi alacak ve takibi üstlenecek.", "clinic")
    ]
  }
};
