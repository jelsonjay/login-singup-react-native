import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SinginScreen from '../screens/SinginScreen';
import SingupScreen from '../screens/SingupScreen';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SingIn"
          component={SinginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SingupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
