import React from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Provider, connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {screen} from '@app/constants';
const Stack = createStackNavigator();
const Test = (props: any): JSX.Element => {
  const {t} = useTranslation('test');
  const onPressTestButton = () => {
    props.increment(1);
  };
  const onPressLanguage = () => {
    if (props.currentLang === 'en') {
      props.setLanguage('vi');
    } else {
      props.setLanguage('en');
    }
  };
  return (
    <SafeAreaView>
      <Text>Count {props.count}</Text>
      <TouchableOpacity style={styles.button} onPress={onPressTestButton}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressLanguage}>
        <Text>Change Language</Text>
      </TouchableOpacity>
      <Text>{`Current Lang ${props.currentLang}`}</Text>
      <Text>{`Lang ${t('language')}`}</Text>
    </SafeAreaView>
  );
};

const TestStack = (props: any): JSX.Element => {
  const renderTest = () => {
    return <Test {...props} />;
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.TEST} component={renderTest} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const mapState = (rootState: any) => ({
  ...rootState.testModel,
  ...rootState.settingModel,
});

const mapDispatch = (rootReducer: any) => ({
  ...rootReducer.testModel,
  ...rootReducer.settingModel,
});

const TestScreen = connect(mapState, mapDispatch)(TestStack);

export {TestScreen};
