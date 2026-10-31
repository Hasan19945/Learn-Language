export interface Account {
  id: string;
  name: string;
  hash: string;
}

export const ACCOUNTS: Account[] = [
  { id: "h1", name: "Hesap 1", hash: "dd3d68b295ab4dfcc55fb032381630d2267138d145537d5e093749c565190e02" },
  { id: "h2", name: "Hesap 2", hash: "21bc95fc92d5a8fd5653e6a213c8a1b42bb2a13a58dab44916b6a1c864033080" },
  { id: "h3", name: "Hesap 3", hash: "4b398183c36f16f200ba60e2ccf249bd1658e39ad5b9d541a879a5c5a067441a" },
  { id: "h4", name: "Hesap 4", hash: "212ec0ca9aa68949c66ea593671ddeffd4a9bd7b473f47b5325b22c47d855d87" },
  { id: "h5", name: "Hesap 5", hash: "6d2cce9ab76700abe31e1cff00d9921751cb9afa83e327434e21525522204bd5" }
];

export const accountName = (id: string | null) => ACCOUNTS.find(a => a.id === id)?.name || "";

export const isAccountId = (id: string | null) => ACCOUNTS.some(a => a.id === id);

async function sha256(text: string) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("adim-norsk:" + text));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
}

export async function checkPassword(id: string, password: string) {
  const a = ACCOUNTS.find(x => x.id === id);
  return !!a && (await sha256(password.trim())) === a.hash;
}
