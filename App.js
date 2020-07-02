import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';
import Activities from './screens/Activities';
import HomeScreen from './screens/HomeScreen';
import * as firebase from 'firebase';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import AddActivityScreen from './screens/AddActivityScreen';
import Entypo from 'react-native-vector-icons/Entypo'

var firebaseConfig = {
  apiKey: "AIzaSyBhfrUIddlhsSxGBg8jMXysh1y3MbGjqYs",
  authDomain: "expense-tracker-debd9.firebaseapp.com",
  databaseURL: "https://expense-tracker-debd9.firebaseio.com",
  projectId: "expense-tracker-debd9",
  storageBucket: "expense-tracker-debd9.appspot.com",
  messagingSenderId: "1068108800646",
  appId: "1:1068108800646:web:b68af1f0e396d1b732a707",
  measurementId: "G-CWY8J9EDJY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


const App = () => {
  
  const [isSignedIn, setIsSignedIn] = React.useState(null)

  React.useEffect(() => checkSignIn(), [])


  const checkSignIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null ) {
          setIsSignedIn(true)
      } else {
        setIsSignedIn(false)
      }
    })
  }
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  
  return(
    <NavigationContainer>
      
       {!isSignedIn ? 
            <Tab.Navigator>
                <Tab.Screen name = "Sign In" component = {SignInScreen}/>
                <Tab.Screen name = "Sign up" component = {SignUpScreen}/>
            </Tab.Navigator>
              :
          <Tab.Navigator>
            <Tab.Screen name = {'Home'}  component = {HomeScreen} />
            <Tab.Screen name = {'Activities'}  component = {Activities}/>
            <Tab.Screen name = {'Add Activities'}  component = {AddActivityScreen}/>
          </Tab.Navigator>
        
          }

    </NavigationContainer>
  );
}

export default App;