import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Context from './API/Context';
import TabNavigation from './Components/TabNavigation';

//To remove all warnings appearing in our app during development
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


function App() {

  const Stack = createNativeStackNavigator();

  return (
  
      // <NavigationContainer>
      //   <Stack.Navigator>
         
      //     <Stack.Screen name = "HomeScreen" component={HomeScreen} options = {{headerShown: false}} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      <SafeAreaView style = {styles.container}>
        <TabNavigation />
      </SafeAreaView>
    
      
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default () => {
  return(
    <Context>
      <App />
    </Context>
  )
}