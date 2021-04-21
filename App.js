import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
 


import HomePage from './Home';
import BillingPage from './billing';
import PaymentPage from './payment';

export default function App() {

  
  return (
<SafeAreaProvider >
<AppNavigation />
</SafeAreaProvider>
    
      );
}

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Billing" component={BillingPage} />
        <Stack.Screen name="Payment" component={PaymentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
