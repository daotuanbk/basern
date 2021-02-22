import React from 'react';
import {View} from 'react-native';
import {styles} from './HomeScreen.styles';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screen} from '@app/constants';
import {TestScreen} from '@app/screens';
interface Props {}
const Tab = createBottomTabNavigator();
export const HomeScreen = (props: Props): JSX.Element => {
  const {t} = useTranslation('');
  return (
    <Tab.Navigator>
      <Tab.Screen name={screen.TEST} component={TestScreen} />
    </Tab.Navigator>
  );
};
