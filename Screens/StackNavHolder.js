import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import HeadlineSingleNews from './HeadlineSingleNews';
import TopNavigationBar from '../Components/TopNavigationBar';
import SearchScreen from './SearchScreen';
import Bookmarks from './Bookmarks';

const StackNavHolder = () => {
 
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
            <Stack.Screen name = "HomeScreen" component={HomeScreen} />
            <Stack.Screen name = "HeadlineSingleNews" component={HeadlineSingleNews} />
            <Stack.Screen name = "SearchScreen" component={SearchScreen} />
            <Stack.Screen name = "Bookmarks" component={Bookmarks} />

          
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavHolder