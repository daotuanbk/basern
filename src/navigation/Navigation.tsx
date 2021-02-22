import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Navigation.styles';
// import {useTranslation} from 'react-i18next';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '@app/screens';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
interface Props {}
const NavigationComponent = (props: Props): JSX.Element => {
  // const {t} = useTranslation('');
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const Navigation = React.memo(NavigationComponent);
export {Navigation};
