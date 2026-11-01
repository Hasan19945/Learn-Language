import { I, W, atLevel } from "../helpers";
import type { LessonDef } from "../../types";

const C1: LessonDef[] = [
{
  id: "nb-c1-1", title: "Akademisk språk", no: "Academic English", icon: "school",
  intro: "Vi lærer å skrive og snakke i akademisk stil: forsiktige formuleringer, presise ord og typiske falske venner.",
  notes: [
    { h: "Forsiktige formuleringer", p: "Akademisk engelsk unngår skråsikre påstander. I stedet for «This proves that ...» skriver man «This suggests that ...», «The results indicate ...», «It appears that ...», «may / might / could»." },
    { h: "Falske venner i akademia", p: "Disse ordene ser norske ut, men betyr noe annet.",
      table: [["Norsk", "Engelsk", "Falsk venn"], ["fornuftig", "sensible", "sensitive = følsom"], ["aktuell", "relevant, topical", "actual = faktisk"], ["konsekvent", "consistent", "consequent = påfølgende"], ["eventuelt", "possibly", "eventual = endelig"], ["argumentere for", "argue for", "argue (også) = krangle"]] },
    { h: "Nominalisering og passiv", p: "Akademisk tekst bruker ofte substantiv og passiv: «We analysed the data» → «The data were analysed» / «An analysis of the data shows ...». Norske akademiske tekster bruker ofte «vi»; engelske tekster bruker det også, men sjeldnere i naturvitenskap." }
  ],
  tip: "«This is a sensible topic» betyr at emnet er fornuftig, ikke følsomt. Følsomt = sensitive. Og «The results are actual» betyr ingenting; si «The results are relevant».",
  words: [
    W("suggest", "tyde på, foreslå", "", "The data suggest a link between sleep and memory.", "Dataene tyder på en sammenheng mellom søvn og hukommelse."),
    W("indicate", "indikere, vise", "", "The results indicate a clear trend.", "Resultatene viser en tydelig trend."),
    W("significant", "betydelig, signifikant", "", "There was a significant increase.", "Det var en betydelig økning."),
    W("consistent", "konsekvent, i samsvar med", "", "The findings are consistent with earlier studies.", "Funnene er i samsvar med tidligere studier.", { note: "ikke «consequent»" }),
    W("relevant", "relevant, aktuell", "", "This is highly relevant to our research.", "Dette er svært relevant for forskningen vår."),
    W("sensible", "fornuftig", "", "That is a sensible approach.", "Det er en fornuftig tilnærming.", { note: "sensitive = følsom" }),
    W("sensitive", "følsom, sensitiv", "", "This is a sensitive issue.", "Dette er et sensitivt tema."),
    W("hypothesis", "hypotese", "", "The hypothesis was rejected.", "Hypotesen ble forkastet.", { note: "flertall: hypotheses" }),
    W("evidence", "belegg, empiri", "", "There is strong evidence for this.", "Det finnes sterkt belegg for dette."),
    W("approach", "tilnærming", "", "We used a qualitative approach.", "Vi brukte en kvalitativ tilnærming."),
    W("thesis", "avhandling, masteroppgave", "", "My thesis is about climate policy.", "Masteroppgaven min handler om klimapolitikk."),
    W("findings", "funn", "", "Our findings are surprising.", "Funnene våre er overraskende."),
    W("in contrast", "derimot, i motsetning", "", "In contrast, the second group improved.", "Den andre gruppen ble derimot bedre."),
    W("to a large extent", "i stor grad", "", "This is, to a large extent, a political question.", "Dette er i stor grad et politisk spørsmål."),
    W("data", "data", "", "The data were collected in 2023.", "Dataene ble samlet inn i 2023.", { note: "formelt flertall: the data were" })
  ],
  dialogue: [["A", "What did your study find?", "Hva fant studien din?"], ["B", "The results indicate that sleep affects memory to a large extent.", "Resultatene viser at søvn i stor grad påvirker hukommelsen."], ["A", "Does that prove your hypothesis?", "Beviser det hypotesen din?"], ["B", "Not exactly. It suggests a link, but we need more evidence.", "Ikke helt. Det tyder på en sammenheng, men vi trenger mer belegg."], ["A", "Are the findings consistent with earlier research?", "Er funnene i samsvar med tidligere forskning?"], ["B", "Mostly. In contrast, one study found no effect.", "Stort sett. En studie fant derimot ingen effekt."]],
  quiz: [
    { q: "«Det er en fornuftig løsning.»", o: ["It is a sensible solution.", "It is a sensitive solution.", "It is a reasonable sensitive solution."], a: 0, e: "fornuftig = sensible; sensitive = følsom." },
    { q: "Hva er mest akademisk?", o: ["The results suggest that ...", "The results prove 100% that ...", "Everybody knows that ..."], a: 0, e: "Akademisk språk er forsiktig: suggest, indicate, may." },
    { q: "«Funnene er i samsvar med tidligere studier.»", o: ["The findings are consistent with earlier studies.", "The findings are consequent with earlier studies.", "The findings are actual with earlier studies."], a: 0, e: "i samsvar med = consistent with." },
    { q: "Flertall av «hypothesis»?", o: ["hypotheses", "hypothesises", "hypothesis", "hypothesi"], a: 0, e: "Gresk flertall: hypotheses." },
    { q: "Hva betyr «approach» i en akademisk tekst?", o: ["tilnærming", "nærme seg en dør", "avslutning"], a: 0, e: "approach = tilnærming, metode." }
  ],
  review: ["Vær forsiktig: suggest, indicate, may.", "sensible = fornuftig; sensitive = følsom; consistent = konsekvent.", "Passiv og substantiv er vanlig: The data were analysed."]
},
{
  id: "nb-c1-2", title: "Trykk og inversjon", no: "Emphasis and inversion", icon: "arrow",
  intro: "Vi legger trykk på deler av setningen med inversjon og utbrytning. Her har nordmenn en fordel, men også en felle.",
  notes: [
    { h: "Inversjon bare etter nektende uttrykk", p: "På norsk inverterer vi i alle setninger som begynner med noe annet enn subjektet: I dag jobber jeg. På engelsk skjer det bare etter nektende eller begrensende uttrykk, og da med hjelpeverb: Never have I seen such a thing. Rarely does he complain. Not only did she win, but she also broke the record.",
      table: [["Uttrykk", "Eksempel"], ["Never", "Never have I been so happy."], ["Rarely / Seldom", "Rarely do we see such talent."], ["Not only", "Not only is it cheap, but it's also good."], ["Hardly ... when", "Hardly had I arrived when it started to rain."], ["Only then", "Only then did I understand."]] },
    { h: "Fellen", p: "Fordi inversjon er normalt på norsk, inverterer nordmenn også der engelsk ikke gjør det: «Yesterday went I to the cinema» er feil. Uten nektende uttrykk: Yesterday I went to the cinema." },
    { h: "Utbrytning", p: "Som norsk «Det var Ola som ...»: It was Ola who called. «What I need is ...» (Det jeg trenger, er ...): What I need is a holiday. «The thing is, ...» (Saken er den at ...)." }
  ],
  tip: "Bruk inversjon bare etter never, rarely, not only, hardly, only then osv. og husk do/does/did når det ikke finnes et annet hjelpeverb: «Rarely he complains» er feil; det skal være «Rarely does he complain».",
  words: [
    W("never have I", "aldri har jeg", "", "Never have I seen such a beautiful view.", "Aldri har jeg sett en så vakker utsikt."),
    W("rarely", "sjelden", "", "Rarely do we get such good weather.", "Sjelden får vi så fint vær."),
    W("not only ... but also", "ikke bare ... men også", "", "Not only is it cheap, but it's also delicious.", "Det er ikke bare billig, men også deilig."),
    W("hardly ... when", "knapt ... før", "", "Hardly had we left when it started to rain.", "Knapt hadde vi gått før det begynte å regne."),
    W("only then", "først da", "", "Only then did I understand the problem.", "Først da forsto jeg problemet."),
    W("under no circumstances", "under ingen omstendigheter", "", "Under no circumstances should you open this door.", "Under ingen omstendigheter skal du åpne denne døra."),
    W("It was ... who", "Det var ... som", "", "It was my sister who found the solution.", "Det var søsteren min som fant løsningen.", { tts: "It was" }),
    W("What I need is", "Det jeg trenger, er", "", "What I need is a long holiday.", "Det jeg trenger, er en lang ferie."),
    W("The thing is", "Saken er den at", "", "The thing is, we don't have enough money.", "Saken er den at vi ikke har nok penger."),
    W("do (for emphasis)", "virkelig (trykk)", "", "I do like your new haircut!", "Jeg liker virkelig den nye frisyren din!", { tts: "I do like" }),
    W("indeed", "ganske riktig, virkelig", "", "It was indeed a difficult decision.", "Det var virkelig en vanskelig avgjørelse."),
    W("by no means", "på ingen måte", "", "It is by no means certain.", "Det er på ingen måte sikkert."),
    W("seldom", "sjelden (mer formelt)", "", "Seldom have I heard such nonsense.", "Sjelden har jeg hørt slikt tull."),
    W("little did I know", "lite visste jeg", "", "Little did I know that she was his sister.", "Lite visste jeg at hun var søsteren hans."),
    W("no sooner ... than", "ikke før ... før", "", "No sooner had I sat down than the phone rang.", "Jeg hadde ikke før satt meg før telefonen ringte.")
  ],
  dialogue: [["A", "How was the concert?", "Hvordan var konserten?"], ["B", "Amazing! Never have I heard such a voice.", "Fantastisk! Aldri har jeg hørt en sånn stemme."], ["A", "Was it the singer from Bergen?", "Var det sangeren fra Bergen?"], ["B", "Yes, it was her who won the competition last year.", "Ja, det var hun som vant konkurransen i fjor."], ["A", "I do wish I had come with you.", "Jeg skulle virkelig ønske jeg hadde blitt med."], ["B", "Not only was she brilliant, but the tickets were cheap too!", "Ikke bare var hun strålende, billettene var billige også!"]],
  quiz: [
    { q: "«I går dro jeg på kino.»", o: ["Yesterday I went to the cinema.", "Yesterday went I to the cinema.", "Yesterday did I go to the cinema.", "Went I yesterday to the cinema."], a: 0, e: "Ingen inversjon uten nektende uttrykk." },
    { q: "«Han klager sjelden.» (med trykk, setningen begynner med Rarely)", o: ["Rarely does he complain.", "Rarely he complains.", "Rarely complains he.", "Rarely is he complain."], a: 0, e: "Etter rarely: hjelpeverb + subjekt + verb." },
    { q: "«Aldri har jeg sett noe lignende.»", o: ["Never have I seen anything like it.", "Never I have seen anything like it.", "Never I saw anything like it.", "Have never I seen anything like it."], a: 0, e: "Etter never: inversjon med hjelpeverbet: Never have I ..." },
    { q: "«Det jeg trenger, er søvn.»", o: ["What I need is sleep.", "That I need is sleep.", "What I need it is sleep.", "It I need is sleep."], a: 0, e: "Utbrytning: What I need is ..." },
    { q: "«Først da forsto jeg.»", o: ["Only then did I understand.", "Only then I understood.", "First then understood I.", "Only then I did understand."], a: 0, e: "Only then + inversjon med did." }
  ],
  review: ["Inversjon bare etter never, rarely, not only, only then ...", "Ellers ingen inversjon: Yesterday I went (ikke went I).", "Utbrytning: It was X who ... / What I need is ..."]
},
{
  id: "nb-c1-3", title: "Hypotetiske situasjoner og anger", no: "Hypotheticals and regrets", icon: "clock",
  intro: "Vi snakker om det som kunne ha skjedd, og det vi angrer på: tredje kondisjonal, wish og should have.",
  notes: [
    { h: "Tredje kondisjonal", p: "Om fortiden som ikke skjedde: If + had + partisipp, would have + partisipp. If I had known, I would have come. Norsk: Hvis jeg hadde visst det, ville jeg ha kommet. Den vanligste feilen er would i if-leddet: «If I would have known» er feil." },
    { h: "wish", p: "Ønske om nåtid: I wish I had more time (jeg skulle ønske jeg hadde mer tid). Anger om fortid: I wish I had studied harder (jeg skulle ønske jeg hadde lest mer). Irritasjon: I wish you would stop (jeg skulle ønske du sluttet).",
      table: [["Norsk", "Engelsk"], ["Jeg skulle ønske jeg var rik.", "I wish I were rich."], ["Jeg skulle ønske jeg hadde visst det.", "I wish I had known."], ["Hvis bare jeg hadde lyttet!", "If only I had listened!"]] },
    { h: "should have / could have / might have", p: "Du burde ha sagt det = You should have told me. Det kunne ha gått galt = It could have gone wrong. Han kan ha glemt det = He might have forgotten." }
  ],
  tip: "«If I would have known, I would have come» høres naturlig ut for nordmenn, men regnes som feil. Si «If I had known, I would have come». Og «I wish I would have» er også feil; det heter «I wish I had».",
  words: [
    W("If I had known", "Hvis jeg hadde visst", "", "If I had known, I would have helped.", "Hvis jeg hadde visst det, ville jeg ha hjulpet."),
    W("would have", "ville ha", "", "We would have won with more time.", "Vi ville ha vunnet med mer tid."),
    W("should have", "burde ha", "", "You should have told me.", "Du burde ha sagt det til meg."),
    W("could have", "kunne ha", "", "It could have been worse.", "Det kunne ha vært verre."),
    W("might have", "kan ha", "", "She might have missed the train.", "Hun kan ha gått glipp av toget."),
    W("I wish", "jeg skulle ønske", "", "I wish I had more time.", "Jeg skulle ønske jeg hadde mer tid."),
    W("If only", "Hvis bare", "", "If only I had listened!", "Hvis bare jeg hadde hørt etter!"),
    W("regret", "angre", "", "I regret selling my car.", "Jeg angrer på at jeg solgte bilen.", { note: "regret + -ing" }),
    W("in hindsight", "i etterpåklokskapens lys", "", "In hindsight, it was a mistake.", "Sett i ettertid var det en feil."),
    W("otherwise", "ellers", "", "I left early; otherwise I would have missed the bus.", "Jeg dro tidlig; ellers ville jeg ha mistet bussen."),
    W("but for", "hvis ikke det hadde vært for", "", "But for your help, we would have failed.", "Hvis ikke det hadde vært for hjelpen din, ville vi ha mislyktes."),
    W("suppose", "anta, tenk om", "", "Suppose you had won the lottery?", "Tenk om du hadde vunnet i lotto?"),
    W("missed opportunity", "tapt mulighet", "", "It was a missed opportunity.", "Det var en tapt mulighet."),
    W("had I known", "hadde jeg visst", "", "Had I known, I would have called.", "Hadde jeg visst det, ville jeg ha ringt."),
    W("let alone", "for ikke å snakke om", "", "I can't afford a car, let alone a house.", "Jeg har ikke råd til bil, for ikke å snakke om hus.")
  ],
  dialogue: [["A", "You look upset. What happened?", "Du ser lei deg ut. Hva skjedde?"], ["B", "I didn't apply for the job in London. Now I regret it.", "Jeg søkte ikke på jobben i London. Nå angrer jeg."], ["A", "If you had applied, you would have got it.", "Hvis du hadde søkt, ville du ha fått den."], ["B", "I know. I wish I had been braver.", "Jeg vet. Jeg skulle ønske jeg hadde vært modigere."], ["A", "Well, in hindsight everything is easy.", "Vel, i ettertid er alt lett."], ["B", "True. Next time I won't miss the opportunity.", "Sant. Neste gang går jeg ikke glipp av sjansen."]],
  quiz: [
    { q: "«Hvis jeg hadde visst det, ville jeg ha kommet.»", o: ["If I had known, I would have come.", "If I would have known, I would have come.", "If I knew, I would come yesterday.", "If I have known, I would come."], a: 0, e: "Tredje kondisjonal: If + had + partisipp. Ikke would i if-leddet." },
    { q: "«Jeg skulle ønske jeg hadde lest mer.»", o: ["I wish I had studied more.", "I wish I would have studied more.", "I wish I studied more yesterday.", "I wish to have study more."], a: 0, e: "Anger om fortid: wish + had + partisipp." },
    { q: "«Du burde ha sagt det til meg.»", o: ["You should have told me.", "You should told me.", "You should to have told me.", "You must have told me."], a: 0, e: "burde ha = should have + partisipp." },
    { q: "«Jeg angrer på at jeg solgte bilen.»", o: ["I regret selling my car.", "I regret to sell my car.", "I am regret selling my car.", "I regret that sell my car."], a: 0, e: "regret + -ing om fortiden." },
    { q: "Hva betyr «let alone»?", o: ["for ikke å snakke om", "la være", "alene"], a: 0, e: "let alone = for ikke å snakke om." }
  ],
  review: ["If I had known, I would have come (ikke If I would have known).", "I wish I had ... (anger om fortid).", "should have / could have / might have + partisipp."]
},
{
  id: "nb-c1-4", title: "Møter og forhandlinger", no: "Meetings and negotiations", icon: "briefcase",
  intro: "Vi leder møter og forhandler på engelsk: å foreslå, være uenig på en høflig måte og komme fram til en avtale.",
  notes: [
    { h: "Møteord", p: "Noen norske møteord oversettes ikke direkte.",
      table: [["Norsk", "Engelsk"], ["dagsorden", "agenda"], ["referat", "minutes"], ["eventuelt (sak på agenda)", "any other business (AOB)"], ["møteleder", "chair"], ["vedtak", "decision, resolution"]] },
    { h: "Høflig uenighet", p: "Norsk møtekultur er ofte direkte: «Det er feil.» På engelsk myker man ned: I see your point, but ... I'm not sure I agree. With respect, I think ... That's an interesting idea; however, ... Britisk «with respect» kan bety at man er sterkt uenig." },
    { h: "Forhandling", p: "Foreslå: How about ...? What if we ...? Kompromiss: Could we meet halfway? Betingelse: We could accept that, provided that ... Avslutte: So, to sum up, we've agreed that ..." }
  ],
  tip: "«Eventuelt» på dagsordenen heter «any other business» (AOB), ikke «eventually». Og «referat» er «minutes», ikke «report» eller «referee».",
  words: [
    W("agenda", "dagsorden", "", "Let's look at the agenda.", "La oss se på dagsordenen."),
    W("minutes", "referat", "", "Who is taking the minutes?", "Hvem skriver referat?"),
    W("any other business", "eventuelt (på dagsorden)", "", "Is there any other business?", "Er det noe under eventuelt?", { note: "forkortet AOB" }),
    W("chair", "lede (møte), møteleder", "", "Anna will chair the meeting.", "Anna leder møtet."),
    W("proposal", "forslag", "", "I'd like to make a proposal.", "Jeg vil gjerne komme med et forslag."),
    W("I see your point, but", "Jeg forstår hva du mener, men", "", "I see your point, but the cost is too high.", "Jeg forstår hva du mener, men kostnaden er for høy."),
    W("With respect", "Med all respekt", "", "With respect, I disagree.", "Med all respekt, jeg er uenig."),
    W("compromise", "kompromiss", "", "We need to find a compromise.", "Vi må finne et kompromiss."),
    W("meet halfway", "møtes på halvveien", "", "Could we meet halfway on the price?", "Kan vi møtes på halvveien når det gjelder prisen?"),
    W("provided that", "forutsatt at", "", "We agree, provided that delivery is free.", "Vi er enige, forutsatt at leveringen er gratis."),
    W("deal", "avtale, handel", "", "It's a deal!", "Da har vi en avtale!"),
    W("terms", "vilkår", "", "We accept the terms.", "Vi godtar vilkårene."),
    W("bottom line", "smertegrense, det avgjørende", "", "Our bottom line is ten per cent.", "Smertegrensen vår er ti prosent."),
    W("follow up", "følge opp", "", "I'll follow up with an email.", "Jeg følger opp med en e-post."),
    W("action points", "oppfølgingspunkter", "", "Let's go through the action points.", "La oss gå gjennom oppfølgingspunktene.")
  ],
  dialogue: [["A", "Shall we start? Ola is taking the minutes today.", "Skal vi begynne? Ola skriver referat i dag."], ["B", "Thank you. First on the agenda is the new contract.", "Takk. Første sak på dagsordenen er den nye kontrakten."], ["A", "Our proposal is a two-year deal at the current price.", "Vårt forslag er en toårsavtale til dagens pris."], ["B", "I see your point, but we need a lower price. Could we meet halfway?", "Jeg forstår hva du mener, men vi trenger en lavere pris. Kan vi møtes på halvveien?"], ["A", "We could accept five per cent, provided that you sign for three years.", "Vi kan godta fem prosent, forutsatt at dere signerer for tre år."], ["B", "It's a deal. Is there any other business?", "Da har vi en avtale. Noe under eventuelt?"]],
  quiz: [
    { q: "Hva heter «referat» fra et møte på engelsk?", o: ["minutes", "report", "referee", "resume"], a: 0, e: "referat = minutes." },
    { q: "Siste punkt på dagsordenen, «eventuelt»:", o: ["any other business", "eventually", "possibly", "the rest"], a: 0, e: "eventuelt = any other business (AOB)." },
    { q: "Hva er høfligst?", o: ["I see your point, but I'm not sure I agree.", "That's wrong.", "No, that's stupid."], a: 0, e: "Engelsk møtekultur myker ned uenighet." },
    { q: "«forutsatt at»", o: ["provided that", "providing for", "if that so", "as long time"], a: 0, e: "forutsatt at = provided that (eller as long as)." },
    { q: "Hva betyr «chair the meeting»?", o: ["lede møtet", "sette fram stoler", "sitte i møtet"], a: 0, e: "chair = lede (et møte)." }
  ],
  review: ["referat = minutes; eventuelt = any other business.", "Høflig uenighet: I see your point, but ...", "Kompromiss: meet halfway; provided that ..."]
},
{
  id: "nb-c1-5", title: "Samfunn og medier", no: "Society and the media", icon: "globe",
  intro: "Vi diskuterer samfunn, politikk og medier og lærer ord der norsk bare har ett ord, mens engelsk har flere.",
  notes: [
    { h: "politikk: politics og policy", p: "Norsk «politikk» dekker to engelske ord. politics = det politiske spillet, partier og valg. policy = en konkret politikk eller strategi: climate policy (klimapolitikk), company policy (firmaets retningslinjer).",
      table: [["Norsk", "Engelsk"], ["Jeg er interessert i politikk.", "I'm interested in politics."], ["regjeringens klimapolitikk", "the government's climate policy"], ["økonomisk vekst", "economic growth"], ["en økonomisk bil (sparsom)", "an economical car"]] },
    { h: "økonomisk: economic og economical", p: "economic = som har med økonomien å gjøre: economic growth. economical = sparsom, rimelig i drift: an economical car." },
    { h: "Mediespråk", p: "headline (overskrift), coverage (dekning), bias (skjevhet), source (kilde), fake news, the press (pressen). Merk: «the news» er entall." }
  ],
  tip: "«The government's climate politics» er en vanlig feil; det heter «climate policy». Og «an economic car» betyr en bil som har med økonomien å gjøre; si «an economical car» om en bil som bruker lite drivstoff.",
  words: [
    W("politics", "politikk (det politiske spillet)", "", "I'm not interested in politics.", "Jeg er ikke interessert i politikk."),
    W("policy", "politikk (konkret), retningslinje", "", "The new tax policy is controversial.", "Den nye skattepolitikken er omstridt."),
    W("economic", "økonomisk (om økonomien)", "", "Economic growth has slowed.", "Den økonomiske veksten har avtatt."),
    W("economical", "økonomisk (sparsom)", "", "This car is very economical.", "Denne bilen er veldig økonomisk i drift."),
    W("welfare state", "velferdsstat", "", "Norway is a welfare state.", "Norge er en velferdsstat."),
    W("inequality", "ulikhet", "", "Inequality is growing.", "Ulikheten øker."),
    W("immigration", "innvandring", "", "Immigration is a key topic in the election.", "Innvandring er et sentralt tema i valget."),
    W("election", "valg", "", "The election is in September.", "Valget er i september."),
    W("the government", "regjeringen", "", "The government has announced new measures.", "Regjeringen har kunngjort nye tiltak."),
    W("headline", "overskrift", "", "The story made the headlines.", "Saken havnet på forsidene."),
    W("coverage", "dekning (i media)", "", "The media coverage was huge.", "Mediedekningen var enorm."),
    W("bias", "skjevhet, partiskhet", "", "The article shows a clear bias.", "Artikkelen viser en tydelig partiskhet."),
    W("source", "kilde", "", "Always check your sources.", "Sjekk alltid kildene dine."),
    W("controversial", "omstridt, kontroversiell", "", "It's a controversial decision.", "Det er en omstridt avgjørelse."),
    W("public opinion", "opinionen", "", "Public opinion has changed.", "Opinionen har snudd.")
  ],
  dialogue: [["A", "Did you see the headlines today?", "Så du overskriftene i dag?"], ["B", "Yes, the government's new climate policy is very controversial.", "Ja, regjeringens nye klimapolitikk er svært omstridt."], ["A", "I think the coverage was biased.", "Jeg synes dekningen var partisk."], ["B", "Maybe. But the economic arguments are strong.", "Kanskje. Men de økonomiske argumentene er sterke."], ["A", "Public opinion seems divided before the election.", "Opinionen virker delt før valget."]],
  quiz: [
    { q: "«regjeringens klimapolitikk»", o: ["the government's climate policy", "the government's climate politics", "the government's climate politic", "the regime's climate politics"], a: 0, e: "Konkret politikk = policy." },
    { q: "«Jeg er interessert i politikk.»", o: ["I'm interested in politics.", "I'm interested in policy.", "I'm interested in politic.", "I'm interesting in politics."], a: 0, e: "Politikk som felt = politics." },
    { q: "En bil som bruker lite drivstoff er ...", o: ["economical", "economic", "economist", "economy"], a: 0, e: "economical = sparsom." },
    { q: "Hva betyr «coverage» i mediesammenheng?", o: ["dekning", "omslag", "forsikring"], a: 0, e: "media coverage = mediedekning." },
    { q: "«Regjeringen har bestemt ...»", o: ["The government has decided ...", "The regime has decided ...", "The governing has decided ..."], a: 0, e: "regjeringen = the government." }
  ],
  review: ["politics = politikk som felt; policy = konkret politikk.", "economic = om økonomien; economical = sparsom.", "headline, coverage, bias, source."]
},
{
  id: "nb-c1-6", title: "Britisk, amerikansk og slang", no: "Varieties and slang", icon: "chat",
  intro: "Engelsk snakkes ulikt i Storbritannia, USA, Irland og Australia. Vi lærer de viktigste forskjellene i ord og stavemåte, og litt slang.",
  notes: [
    { h: "Ord", p: "Norsk skole lærer ofte britisk engelsk, mens TV og spill er amerikansk. Begge er riktige, men vær konsekvent i skrift.",
      table: [["Britisk", "Amerikansk", "Norsk"], ["flat", "apartment", "leilighet"], ["lift", "elevator", "heis"], ["queue", "line", "kø"], ["autumn", "fall", "høst"], ["pavement", "sidewalk", "fortau"], ["mobile (phone)", "cell phone", "mobil"], ["trousers", "pants", "bukser"]] },
    { h: "Stavemåte", p: "Britisk: colour, centre, organise, travelled. Amerikansk: color, center, organize, traveled. Velg én variant og hold deg til den i samme tekst." },
    { h: "Pass på «pants»", p: "I USA betyr pants bukser. I Storbritannia betyr pants underbukser. «I like your pants» kan altså bli pinlig i London." }
  ],
  tip: "Bland ikke britisk og amerikansk stavemåte i samme tekst: «I travelled to the center» blander begge. Og «Can I borrow your rubber?» betyr viskelær i Storbritannia, men noe helt annet i USA.",
  words: [
    W("lift", "heis (britisk)", "", "Take the lift to the third floor.", "Ta heisen til tredje etasje.", { note: "amerikansk: elevator" }),
    W("pavement", "fortau (britisk)", "", "Walk on the pavement.", "Gå på fortauet.", { note: "amerikansk: sidewalk" }),
    W("autumn", "høst (britisk)", "", "Autumn in Norway is beautiful.", "Høsten i Norge er vakker.", { note: "amerikansk: fall" }),
    W("trousers", "bukser (britisk)", "", "I need new trousers.", "Jeg trenger nye bukser.", { note: "amerikansk: pants" }),
    W("rubbish", "søppel (britisk); tull", "", "That's rubbish!", "Det er tull!", { note: "amerikansk: garbage, trash" }),
    W("cheers", "skål; takk (britisk, uformelt)", "", "Cheers for your help!", "Takk for hjelpen!"),
    W("mate", "kompis (britisk, australsk)", "", "Thanks, mate!", "Takk, kompis!"),
    W("brilliant", "supert (britisk)", "", "That's brilliant news!", "Det er supre nyheter!"),
    W("gonna", "skal (uformelt: going to)", "", "I'm gonna be late.", "Jeg kommer til å bli sen."),
    W("wanna", "vil (uformelt: want to)", "", "Do you wanna come?", "Vil du bli med?"),
    W("awesome", "kjempebra (amerikansk)", "", "The concert was awesome!", "Konserten var helt rå!"),
    W("I reckon", "jeg tror, jeg regner med", "", "I reckon it'll rain later.", "Jeg tror det blir regn senere."),
    W("knackered", "helt utslitt (britisk)", "", "I'm absolutely knackered.", "Jeg er helt utslitt."),
    W("y'all", "dere alle (sørstatene)", "", "Are y'all coming tonight?", "Kommer dere i kveld?"),
    W("No way!", "Ikke tale om! / Nei, ikke si det!", "", "You won the lottery? No way!", "Vant du i lotto? Det er ikke sant!")
  ],
  dialogue: [["A", "Cheers for the coffee, mate!", "Takk for kaffen, kompis!"], ["B", "No worries. You look knackered.", "Null problem. Du ser helt utslitt ut."], ["A", "I am! The lift was broken, so I took the stairs to the tenth floor.", "Det er jeg! Heisen var ødelagt, så jeg tok trappa til tiende etasje."], ["B", "No way! I reckon you need a holiday.", "Seriøst? Jeg tror du trenger ferie."], ["A", "I'm gonna book one tonight.", "Jeg skal bestille en i kveld."]],
  quiz: [
    { q: "Hva er «heis» på amerikansk engelsk?", o: ["elevator", "lift", "escalator", "stairs"], a: 0, e: "lift (britisk) = elevator (amerikansk)." },
    { q: "Hva betyr «pants» i London?", o: ["underbukser", "bukser", "sokker"], a: 0, e: "Britisk pants = underbukser; amerikansk pants = bukser." },
    { q: "Hvilken setning er konsekvent britisk?", o: ["I travelled to the city centre.", "I traveled to the city centre.", "I travelled to the city center."], a: 0, e: "Britisk: travelled og centre." },
    { q: "Hva betyr «I'm knackered»?", o: ["Jeg er helt utslitt.", "Jeg er sint.", "Jeg er full."], a: 0, e: "knackered = svært sliten (britisk slang)." },
    { q: "«Cheers!» kan bety ...", o: ["takk eller skål", "bare skål", "unnskyld"], a: 0, e: "I Storbritannia betyr cheers ofte takk." }
  ],
  review: ["lift/elevator, flat/apartment, autumn/fall.", "Britisk colour, centre; amerikansk color, center. Vær konsekvent.", "pants = underbukser i Storbritannia!"]
},
{
  id: "nb-c1-7", title: "Idiomer i arbeidslivet", no: "Business idioms", icon: "spark",
  intro: "12 idiomer du hører i møter, e-poster og presentasjoner. Bildet viser den bokstavelige scenen.",
  notes: [
    { h: "Hvorfor lære dem?", p: "Engelskspråklige kolleger bruker idiomer hele tiden: «Let's touch base next week», «We're back to square one». Forstår du dem ikke, mister du poenget i møtet." },
    { h: "Tallord og sport", p: "Mange forretningsidiomer kommer fra sport og spill: get the ball rolling (få ballen til å rulle), a ballpark figure (et overslag, fra baseball), back to square one (tilbake til start)." },
    { h: "Ikke overdriv", p: "Bruker du for mange slike uttrykk, kan du høres ut som en parodi på en konsulent. Lær å forstå dem alle, men bruk dem med måte." }
  ],
  tip: "Norsk «tilbake til start» blir «back to square one», og «et overslag» blir «a ballpark figure». Ikke oversett direkte: «a guessed number» høres rart ut.",
  words: [
    I("think outside the box", "tenke nytt, utenfor boksen", "tenke utenfor boksen", "📦💡", "We need to think outside the box.", "Vi må tenke nytt."),
    I("get the ball rolling", "sette i gang", "få ballen til å rulle", "⚽➡️", "Let's get the ball rolling with a quick update.", "La oss sette i gang med en kort oppdatering."),
    I("back to square one", "tilbake til start", "tilbake til rute én", "🔙1️⃣", "The client said no, so we're back to square one.", "Kunden sa nei, så vi er tilbake til start."),
    I("on the same page", "enige, samkjørte", "på samme side", "📄🤝", "Let's make sure we're all on the same page.", "La oss sørge for at vi er samkjørte."),
    I("cut corners", "slurve, ta snarveier", "kutte hjørner", "✂️📐", "Don't cut corners on safety.", "Ikke slurv med sikkerheten."),
    I("in the red", "i minus", "i det røde", "🔴📉", "The company has been in the red for two years.", "Selskapet har gått i minus i to år."),
    I("a ballpark figure", "et overslag", "et tall fra ballbanen", "⚾🔢", "Can you give me a ballpark figure?", "Kan du gi meg et overslag?"),
    I("call it a day", "si seg ferdig for i dag", "kalle det en dag", "🌇👋", "It's six o'clock. Let's call it a day.", "Klokka er seks. La oss si oss ferdige for i dag."),
    I("touch base", "ta kontakt, høre med", "berøre basen", "⚾🤚", "I'll touch base with you next week.", "Jeg tar kontakt med deg neste uke."),
    I("go the extra mile", "gjøre litt ekstra", "gå den ekstra mila", "🏃➕", "She always goes the extra mile for customers.", "Hun gjør alltid litt ekstra for kundene."),
    I("bite the bullet", "bite tennene sammen", "bite i kula", "😬🔫", "We'll have to bite the bullet and cut costs.", "Vi må bite tennene sammen og kutte kostnader."),
    I("the ball is in their court", "det er deres trekk", "ballen er på deres banehalvdel", "🎾👉", "We've sent the offer. The ball is in their court.", "Vi har sendt tilbudet. Nå er det deres trekk.")
  ],
  dialogue: [["A", "Let's get the ball rolling. Where are we with the client?", "La oss sette i gang. Hvor står vi med kunden?"], ["B", "They rejected the design, so we're back to square one.", "De avviste designet, så vi er tilbake til start."], ["A", "OK. We need to think outside the box this time.", "Ok. Denne gangen må vi tenke nytt."], ["B", "Agreed. But we can't cut corners on quality.", "Enig. Men vi kan ikke slurve med kvaliteten."], ["A", "Can you give me a ballpark figure for the new budget?", "Kan du gi meg et overslag over det nye budsjettet?"], ["B", "I'll touch base with finance and get back to you.", "Jeg hører med økonomi og kommer tilbake til deg."]],
  quiz: [
    { q: "«Vi er tilbake til start.»", o: ["We're back to square one.", "We're back to the start line one.", "We're back at box one.", "We're back to first."], a: 0, e: "tilbake til start = back to square one." },
    { q: "Hva er «a ballpark figure»?", o: ["et overslag", "et nøyaktig tall", "et sportsresultat"], a: 0, e: "a ballpark figure = et grovt anslag." },
    { q: "«La oss si oss ferdige for i dag.»", o: ["Let's call it a day.", "Let's finish the day.", "Let's say us ready.", "Let's end today it."], a: 0, e: "call it a day = avslutte arbeidsdagen." },
    { q: "Hva betyr «in the red»?", o: ["i minus", "sint", "i fare"], a: 0, e: "in the red = går med underskudd; in the black = i pluss." },
    { q: "«Ikke slurv!»", o: ["Don't cut corners!", "Don't cut the box!", "Don't bite the bullet!"], a: 0, e: "cut corners = slurve, ta snarveier." }
  ],
  review: ["back to square one = tilbake til start.", "a ballpark figure = et overslag; touch base = ta kontakt.", "cut corners = slurve; call it a day = gi seg for i dag."]
},
{
  id: "nb-c1-8", title: "Ordtak og faste uttrykk", no: "Proverbs and sayings", icon: "spark",
  intro: "12 engelske ordtak og deres norske slektninger. Noen er nesten like, andre bruker helt andre bilder.",
  notes: [
    { h: "Like ordtak", p: "Mange ordtak deler bilde med norsk: «Don't put all your eggs in one basket» = Ikke legg alle eggene i én kurv. «Practice makes perfect» = Øvelse gjør mester. «Rome wasn't built in a day» = Rom ble ikke bygget på én dag." },
    { h: "Ulike bilder", p: "Andre ordtak har samme betydning, men et annet bilde: «Don't count your chickens before they hatch» (ikke tell kyllingene før de klekkes) = Ikke selg skinnet før bjørnen er skutt. «The early bird catches the worm» = Morgenstund har gull i munn. «When in Rome, do as the Romans do» = Skikk følge eller land fly." },
    { h: "Bruk i samtale", p: "Ordtak brukes ofte forkortet når alle kjenner dem: «Well, when in Rome ...» eller «Too many cooks ...». Det er nok til at lytteren forstår resten." }
  ],
  tip: "Ikke oversett norske ordtak ord for ord: «Don't sell the skin before the bear is shot» forstår mange, men det naturlige engelske ordtaket er «Don't count your chickens before they hatch».",
  words: [
    I("Don't count your chickens before they hatch.", "Ikke selg skinnet før bjørnen er skutt.", "ikke tell kyllingene før de klekkes", "🐣🐔🔢", "We haven't won yet. Don't count your chickens before they hatch.", "Vi har ikke vunnet ennå. Ikke selg skinnet før bjørnen er skutt."),
    I("The early bird catches the worm.", "Morgenstund har gull i munn.", "den tidlige fuglen fanger marken", "🐦🌅🪱", "Get up early – the early bird catches the worm!", "Stå opp tidlig – morgenstund har gull i munn!"),
    I("Too many cooks spoil the broth.", "Jo flere kokker, jo mer søl.", "for mange kokker ødelegger suppa", "👨‍🍳👨‍🍳🍲", "Let's keep the team small. Too many cooks spoil the broth.", "La oss holde teamet lite. Jo flere kokker, jo mer søl."),
    I("When in Rome, do as the Romans do.", "Skikk følge eller land fly.", "når du er i Roma, gjør som romerne", "🏛️🙋", "In Norway you take off your shoes indoors. When in Rome ...", "I Norge tar man av seg skoene innendørs. Skikk følge ..."),
    I("Better safe than sorry.", "Bedre føre var enn etter snar.", "bedre trygg enn lei seg", "🦺🙂", "Take an umbrella. Better safe than sorry.", "Ta med paraply. Bedre føre var enn etter snar."),
    I("Don't put all your eggs in one basket.", "Ikke legg alle eggene i én kurv.", "ikke legg alle eggene i én kurv", "🥚🧺", "Invest in different funds. Don't put all your eggs in one basket.", "Invester i ulike fond. Ikke legg alle eggene i én kurv."),
    I("Every cloud has a silver lining.", "Det er en mening med alt / ingen ulykke uten at det er en lykke med.", "hver sky har en sølvkant", "☁️✨", "I lost my job, but every cloud has a silver lining – now I can study.", "Jeg mistet jobben, men ingen ulykke uten at det er en lykke med – nå kan jeg studere."),
    I("Out of sight, out of mind.", "Ute av øye, ute av sinn.", "ute av syne, ute av sinn", "🙈💭", "He forgot to call his friends. Out of sight, out of mind.", "Han glemte å ringe vennene sine. Ute av øye, ute av sinn."),
    I("Where there's a will, there's a way.", "Der det er vilje, er det vei.", "der det er vilje, er det vei", "💪🛣️", "It's difficult, but where there's a will, there's a way.", "Det er vanskelig, men der det er vilje, er det vei."),
    I("Practice makes perfect.", "Øvelse gjør mester.", "øvelse gjør perfekt", "🎻🔁", "Keep speaking English every day. Practice makes perfect!", "Fortsett å snakke engelsk hver dag. Øvelse gjør mester!"),
    I("Rome wasn't built in a day.", "Rom ble ikke bygget på én dag.", "Roma ble ikke bygget på én dag", "🏛️🧱", "Learning a language takes time. Rome wasn't built in a day.", "Det tar tid å lære et språk. Rom ble ikke bygget på én dag."),
    I("Actions speak louder than words.", "Handling teller mer enn ord.", "handlinger snakker høyere enn ord", "🎬📢", "Don't just promise. Actions speak louder than words.", "Ikke bare lov. Handling teller mer enn ord.")
  ],
  dialogue: [["A", "I think we'll get the contract!", "Jeg tror vi får kontrakten!"], ["B", "Don't count your chickens before they hatch.", "Ikke selg skinnet før bjørnen er skutt."], ["A", "True. Better safe than sorry. Should we contact other clients too?", "Sant. Bedre føre var. Skal vi kontakte andre kunder også?"], ["B", "Yes. Don't put all your eggs in one basket.", "Ja. Ikke legg alle eggene i én kurv."], ["A", "This is a lot of work. But Rome wasn't built in a day!", "Dette er mye arbeid. Men Rom ble ikke bygget på én dag!"]],
  quiz: [
    { q: "«Ikke selg skinnet før bjørnen er skutt.»", o: ["Don't count your chickens before they hatch.", "Don't sell the bear before the skin.", "Don't put all your eggs in one basket.", "Better safe than sorry."], a: 0, e: "Engelsk bruker kyllinger som ikke er klekket." },
    { q: "«Morgenstund har gull i munn.»", o: ["The early bird catches the worm.", "Morning hour has gold in mouth.", "Early to bed, early to rise.", "Every cloud has a silver lining."], a: 0, e: "Den tidlige fuglen fanger marken." },
    { q: "«Skikk følge eller land fly.»", o: ["When in Rome, do as the Romans do.", "Rome wasn't built in a day.", "Follow the custom or fly the land."], a: 0, e: "Tilpass deg skikkene der du er: When in Rome ..." },
    { q: "«Øvelse gjør mester.»", o: ["Practice makes perfect.", "Exercise makes master.", "Training is master.", "Practice makes the master."], a: 0, e: "Practice makes perfect." },
    { q: "«Jo flere kokker, jo mer søl.»", o: ["Too many cooks spoil the broth.", "More chefs, more mess.", "Many cooks make good food."], a: 0, e: "Too many cooks spoil the broth." }
  ],
  review: ["Like: Don't put all your eggs in one basket; Practice makes perfect.", "Annerledes: Don't count your chickens = Ikke selg skinnet før bjørnen er skutt.", "Forkort gjerne: «When in Rome ...», «Too many cooks ...»."]
}
];

export default atLevel("C1", C1);
