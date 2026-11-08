export const store = {
  get(key: string) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string | null) {
    try {
      if (value == null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch {
      return;
    }
  }
};

export const CURRENT_ACCOUNT_KEY = "adim-adim-norsk-v1:current";
export const CURRENT_COURSE_KEY = "adim-adim:course";
export const UI_LANG_KEY = "adim-adim:ui";
export const EMAIL_KEY = "adim-adim:email";
export const SOUND_KEY = "adim-adim:sound";
