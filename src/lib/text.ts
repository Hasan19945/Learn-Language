export const normalize = (s: string) => s.toLowerCase().normalize("NFC")
  .replace(/[’‘]/g, "'")
  .replace(/[.,!?;:«»"“”¿¡]/g, "")
  .replace(/\s+/g, " ")
  .trim();

const SHORT_FORMS: Record<string, string> = {
  im: "i am", dont: "do not", doesnt: "does not", didnt: "did not", isnt: "is not", arent: "are not",
  wasnt: "was not", werent: "were not", cant: "can not", cannot: "can not", wont: "will not",
  youre: "you are", theyre: "they are", ive: "i have", youve: "you have", weve: "we have", theyve: "they have",
  whats: "what is", thats: "that is", hes: "he is", shes: "she is", theres: "there is"
};

export const canonical = (s: string) => normalize(s)
  .replace(/\bwon't\b/g, "will not")
  .replace(/\bcan't\b/g, "can not")
  .replace(/n't\b/g, " not")
  .replace(/'m\b/g, " am")
  .replace(/'re\b/g, " are")
  .replace(/'ve\b/g, " have")
  .replace(/'ll\b/g, " will")
  .replace(/'d\b/g, " would")
  .replace(/\b(it|he|she|that|what|there|here|where|how|who)'s\b/g, "$1 is")
  .replace(/'/g, "")
  .split(" ")
  .map(w => SHORT_FORMS[w] || w)
  .join(" ")
  .replace(/\bthank you\b/g, "thanks");

export function editDistance(a: string, b: string) {
  const d = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = d[0];
    d[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const t = d[j];
      d[j] = Math.min(d[j] + 1, d[j - 1] + 1, prev + (a[i - 1] !== b[j - 1] ? 1 : 0));
      prev = t;
    }
  }
  return d[b.length];
}

export function emojiCount(text: string) {
  try {
    return [...new Intl.Segmenter().segment(text)].length;
  } catch {
    return Math.ceil([...text].length / 2);
  }
}
