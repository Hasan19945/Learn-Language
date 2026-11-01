export const dayKey = (d: Date) => d.toLocaleDateString("sv");

export const today = () => dayKey(new Date());

export function addDays(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return dayKey(d);
}

export const formatDayMonth = (day: string, locale: string) =>
  new Date(day + "T00:00").toLocaleDateString(locale, { day: "numeric", month: "long" });
