import produce from "immer";

interface SettingState {
  currentLang: string;
  isFirstLaunch: boolean;
}

interface SettingModel {
  state: SettingState;
  reducers: {
    setLanguage: (state: SettingState, payload: string) => SettingState;
  };
}

export const settingModel: SettingModel = {
  state: {
    currentLang: "vi",
    isFirstLaunch: true,
  },
  reducers: {
    setLanguage: produce((state: SettingState, payload: string) => {
      state.currentLang = payload;
    }),
    setIsFirstLaunch: produce((state: SettingState, payload: string) => {
      state.isFirstLaunch = payload;
    }),
  },
};
