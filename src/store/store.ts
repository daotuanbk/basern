import persistPlugin, {getPersistor} from '@rematch/persist';
import {init, RematchRootState} from '@rematch/core';
import storage from '@react-native-async-storage/async-storage';
import {testModel, settingModel} from '@app/store';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['testModel', 'settingModel'],
};

const models = {testModel, settingModel};

export const store = init({
  plugins: [persistPlugin(persistConfig)],
  models,
});
export const {getState, dispatch} = store;
export const persistor = getPersistor();
export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type RootState = RematchRootState<typeof models>;
