export const normalize = (s: string) => s.toLowerCase().normalize("NFC")
  .replace(/[’‘]/g, "'")
  .replace(/[.,!?;:«»"“”¿¡]/g, "")
  .replace(/\s+/g, " ")
  .trim();

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
