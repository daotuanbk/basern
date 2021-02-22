/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {store, persistor, RootState} from '@app/store';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import i18n from './i18n';
import {screen} from '@app/constants';
import {TestScreen} from '@app/screens';
import {Navigation} from '@app/navigation';
declare const global: {HermesInternal: null | {}};

const BaseApp = (): JSX.Element => {
  const navStackItems: any = [
    {
      name: screen.TEST,
      title: screen.TEST,
      component: TestScreen,
      icon: '',
      iconFocused: '',
      headerLeft: null,
      // headerTitle: () => <WelcomeScreenHeader />,
      headerTransparent: true,
    },
  ];
  const lang = useSelector(
    (state: RootState) => state.settingModel.currentLang,
  );
  useEffect(() => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [i18n, lang]);
  return <Navigation navStackItems={navStackItems} />;
};
const LoadingScreen = (): JSX.Element => {
  return <Text>Loading</Text>;
};
export const App = (): JSX.Element => {
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    (async () => {
      setIsBootstrapping(false);
    })();
  }, []);
  if (isBootstrapping) {
    return <LoadingScreen />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingScreen />}>
        <BaseApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
