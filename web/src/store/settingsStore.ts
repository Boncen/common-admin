import { Setting } from "#/setting";
import { LocalEnum, StorageEnum } from "#/enum";
import { getItem, getStringItem, setItem } from "@/utils/storage";
import { create } from "zustand";

type settingsStore = {
  settings: Setting;
  i18n: string | null;
  updateSettings: (setting: Setting) => void;
  toggleDarkMode: (isDarkMode: boolean) => void;
  updateLanguage: (lang: string) => void;
  toggleMultiTab: (val: boolean) => void;
};

export const useSettingsStore = create<settingsStore>((set, get) => ({
  settings: getItem<Setting>(StorageEnum.Settings) || ({} as Setting),
  i18n: getStringItem(StorageEnum.I18N), // || LocalEnum["en-US"],
  updateSettings: (setting: Setting) => {
    set(() => ({
      settings: setting,
    }));
    setItem(StorageEnum.Settings, setting);
  },
  toggleDarkMode: (isDarkMode: boolean) => {
    const setting = { ...get().settings, isDarkMode: isDarkMode };
    set(() => ({
      settings: setting,
    }));
    setItem(StorageEnum.Settings, setting);
  },
  updateLanguage: (lang: string) => {
    const setting = { ...get().settings, lang: lang };
    set(() => ({
      settings: setting,
    }));
    setItem(StorageEnum.Settings, setting);
  },
  // updateLanguage: (lang: string) => {
  //   set({ i18n: lang });
  //   setItem(StorageEnum.I18N, lang);
  // },
  toggleMultiTab: (val: boolean) => {
    const setting = { ...get().settings, isUseMultitab: val };
    set(() => ({
      settings: setting,
    }));
    setItem(StorageEnum.Settings, setting);
  },
}));

export const useDarkMode = () =>
  useSettingsStore((state) => state.settings.isDarkMode);
export const useToggleDarkMode = () =>
  useSettingsStore((state) => state.toggleDarkMode);
export const useLanguage = () =>
  useSettingsStore((state) => {
    if (state.settings.lang) {
      return state.settings.lang;
    }
    if (!state.i18n) {
      const valFromStorage = getStringItem(StorageEnum.I18N);
      state.i18n = valFromStorage;
      return valFromStorage;
    }
    return state.i18n;
  });
export const useUpdateLang = () =>
  useSettingsStore((state) => state.updateLanguage);

export const useToggleMultiTab = () =>
  useSettingsStore((state) => state.toggleMultiTab);
