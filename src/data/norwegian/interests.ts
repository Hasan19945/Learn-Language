import { N } from "../helpers";
import type { InterestDef } from "../../types";

export const interests: Record<string, InterestDef> = {
  tech: { label: "Teknoloji", words: [
    N("en", "datamaskin", "datamaskinen", "datamaskiner", "bilgisayar", "datamaşin", "Jeg har en datamaskin.", "Bir bilgisayarım var."),
    N("en", "app", "appen", "apper", "uygulama", "ap", "Det er en app.", "Bu bir uygulama."),
    N("et", "program", "programmet", "programmer", "program", "program", "Programmet er bra.", "Program iyi."),
    N("en", "utvikler", "utvikleren", "utviklere", "geliştirici", "ütvikler", "Han er utvikler.", "O geliştirici.")],
    sentences: [["Jeg er utvikler.", "Ben geliştiriciyim."], ["Hun jobber med appen.", "O, uygulama üzerinde çalışıyor."]] },
  football: { label: "Futbol", words: [
    N("en", "kamp", "kampen", "kamper", "maç", "kamp", "Kampen er i dag.", "Maç bugün."),
    N("et", "lag", "laget", "lag", "takım", "lag", "Laget er fra Bergen.", "Takım Bergen'den."),
    N("en", "spiller", "spilleren", "spillere", "oyuncu", "spiller", "Han er spiller.", "O oyuncu."),
    N("et", "mål", "målet", "mål", "gol, hedef", "mol", "Det er mål!", "Gol!")],
    sentences: [["Jeg ser kampen i kveld.", "Bu akşam maçı izliyorum."], ["Han spiller på laget.", "O, takımda oynuyor."]] },
  business: { label: "İş hayatı", words: [
    N("et", "møte", "møtet", "møter", "toplantı", "möte", "Jeg har et møte.", "Bir toplantım var."),
    N("en", "kollega", "kollegaen", "kolleger", "iş arkadaşı", "kolega", "Hun er en kollega.", "O bir iş arkadaşı."),
    N("en", "kunde", "kunden", "kunder", "müşteri", "künne", "Kunden er fra Tyrkia.", "Müşteri Türkiye'den."),
    N("et", "firma", "firmaet", "firmaer", "şirket", "firma", "Firmaet er i Oslo.", "Şirket Oslo'da.")],
    sentences: [["Jeg har et møte i dag.", "Bugün bir toplantım var."], ["Vi har en ny kunde.", "Yeni bir müşterimiz var."]] },
  finance: { label: "Finans", words: [
    N("en", "bank", "banken", "banker", "banka", "bank", "Banken er der.", "Banka orada."),
    N("en", "konto", "kontoen", "kontoer", "hesap", "kontu", "Jeg har en konto.", "Bir hesabım var."),
    N("en", "regning", "regningen", "regninger", "fatura", "rayning", "Det er en regning.", "Bu bir fatura."),
    N("en", "krone", "kronen", "kroner", "kron (para birimi)", "krune", "Det er ti kroner.", "On kron.")],
    sentences: [["Jeg har en konto i banken.", "Bankada bir hesabım var."], ["Jeg betaler regningen.", "Faturayı ödüyorum."]] },
  travel: { label: "Seyahat", words: [
    N("et", "tog", "toget", "tog", "tren", "tog", "Toget er her.", "Tren burada."),
    N("en", "billett", "billetten", "billetter", "bilet", "bilet", "Jeg har en billett.", "Bir biletim var."),
    N("en", "flyplass", "flyplassen", "flyplasser", "havalimanı", "flüplas", "Flyplassen er der.", "Havalimanı orada."),
    N("et", "hotell", "hotellet", "hoteller", "otel", "hutel", "Hotellet er fint.", "Otel güzel.")],
    sentences: [["Jeg kjøper en billett.", "Bir bilet alıyorum."], ["Toget går nå.", "Tren şimdi kalkıyor."]] },
  everyday: { label: "Günlük hayat", words: [
    N("en", "butikk", "butikken", "butikker", "dükkân, market", "bütik", "Butikken er der.", "Market orada."),
    N("en", "leilighet", "leiligheten", "leiligheter", "daire, apartman dairesi", "leylihet", "Jeg har en leilighet.", "Bir dairem var."),
    N("et", "brød", "brødet", "brød", "ekmek", "brö", "Brødet er godt.", "Ekmek güzel."),
    N("en", "kopp", "koppen", "kopper", "fincan", "kop", "En kopp kaffe, takk.", "Bir fincan kahve, lütfen.")],
    sentences: [["Jeg kjøper brød i butikken.", "Marketten ekmek alıyorum."], ["Vi bor i en leilighet.", "Bir dairede oturuyoruz."]] }
};
