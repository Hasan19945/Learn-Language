import { N } from "../helpers";
import type { InterestDef } from "../../types";

export const interests: Record<string, InterestDef> = {
  tech: { label: "Technology", words: [
    N("en", "datamaskin", "datamaskinen", "datamaskiner", "computer", "DAH-ta-mah-sheen", "Jeg har en datamaskin.", "I have a computer."),
    N("en", "app", "appen", "apper", "app", "ahp", "Det er en app.", "It's an app."),
    N("et", "program", "programmet", "programmer", "program", "proo-GRAHM", "Programmet er bra.", "The program is good."),
    N("en", "utvikler", "utvikleren", "utviklere", "developer", "OOT-vik-ler", "Han er utvikler.", "He is a developer.")],
    sentences: [["Jeg er utvikler.", "I am a developer."], ["Hun jobber med appen.", "She is working on the app."]] },
  football: { label: "Football", words: [
    N("en", "kamp", "kampen", "kamper", "match", "kahmp", "Kampen er i dag.", "The match is today."),
    N("et", "lag", "laget", "lag", "team", "lahg", "Laget er fra Bergen.", "The team is from Bergen."),
    N("en", "spiller", "spilleren", "spillere", "player", "SPIL-ler", "Han er spiller.", "He is a player."),
    N("et", "mål", "målet", "mål", "goal", "mawl", "Det er mål!", "It's a goal!")],
    sentences: [["Jeg ser kampen i kveld.", "I'm watching the match tonight."], ["Han spiller på laget.", "He plays on the team."]] },
  business: { label: "Business", words: [
    N("et", "møte", "møtet", "møter", "meeting", "MUR-teh", "Jeg har et møte.", "I have a meeting."),
    N("en", "kollega", "kollegaen", "kolleger", "colleague", "koo-LEH-gah", "Hun er en kollega.", "She is a colleague."),
    N("en", "kunde", "kunden", "kunder", "customer", "KOON-neh", "Kunden er fra England.", "The customer is from England."),
    N("et", "firma", "firmaet", "firmaer", "company", "FEER-mah", "Firmaet er i Oslo.", "The company is in Oslo.")],
    sentences: [["Jeg har et møte i dag.", "I have a meeting today."], ["Vi har en ny kunde.", "We have a new customer."]] },
  finance: { label: "Finance", words: [
    N("en", "bank", "banken", "banker", "bank", "bahnk", "Banken er der.", "The bank is there."),
    N("en", "konto", "kontoen", "kontoer", "account", "KON-too", "Jeg har en konto.", "I have an account."),
    N("en", "regning", "regningen", "regninger", "bill", "RAY-ning", "Det er en regning.", "It's a bill."),
    N("en", "krone", "kronen", "kroner", "krone (currency)", "KROO-neh", "Det er ti kroner.", "That's ten kroner.")],
    sentences: [["Jeg har en konto i banken.", "I have an account at the bank."], ["Jeg betaler regningen.", "I'm paying the bill."]] },
  travel: { label: "Travel", words: [
    N("et", "tog", "toget", "tog", "train", "tawg", "Toget er her.", "The train is here."),
    N("en", "billett", "billetten", "billetter", "ticket", "bi-LET", "Jeg har en billett.", "I have a ticket."),
    N("en", "flyplass", "flyplassen", "flyplasser", "airport", "FLEW-plahss", "Flyplassen er der.", "The airport is there."),
    N("et", "hotell", "hotellet", "hoteller", "hotel", "hoo-TEL", "Hotellet er fint.", "The hotel is nice.")],
    sentences: [["Jeg kjøper en billett.", "I'm buying a ticket."], ["Toget går nå.", "The train is leaving now."]] },
  everyday: { label: "Everyday life", words: [
    N("en", "butikk", "butikken", "butikker", "shop", "boo-TIK", "Butikken er der.", "The shop is there."),
    N("en", "leilighet", "leiligheten", "leiligheter", "flat, apartment", "LAY-li-het", "Jeg har en leilighet.", "I have a flat."),
    N("et", "brød", "brødet", "brød", "bread", "brur", "Brødet er godt.", "The bread is good."),
    N("en", "kopp", "koppen", "kopper", "cup", "kop", "En kopp kaffe, takk.", "A cup of coffee, please.")],
    sentences: [["Jeg kjøper brød i butikken.", "I'm buying bread at the shop."], ["Vi bor i en leilighet.", "We live in a flat."]] }
};
