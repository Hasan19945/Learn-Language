export function Emphasis({ text, part }: { text: string; part: string }) {
  let i = text.indexOf(part);
  if (i < 0) i = text.toLowerCase().indexOf(part.toLowerCase());
  if (i < 0) return <>{text}</>;
  const end = i + part.length;
  return <>{text.slice(0, i)}<b>{text.slice(i, end)}</b>{text.slice(end)}</>;
}
