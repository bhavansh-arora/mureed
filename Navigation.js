//SHA256 fa:c6:17:45:dc:09:03:78:6f:b9:ed:e6:2a:96:2b:39:9f:73:48:f0:bb:6f:89:9b:83:32:66:75:91:03:3b:9c
//SHA1 5e:8f:16:06:2e:a3:cd:2c:4a:0d:54:78:76:ba:a6:f3:8c:ab:f6:25

import {createAppContainer} from '@react-navigation/native';
import {createStackContainer} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet,Button,TouchableOpacity } from "react-native";
import Home from "./components/Home";
import Timer from "./components/Timer";
import Imena from "./components/Imena";
import SalavatM from "./components/Salavat";
import SalavatFat from "./components/SalavatFat";
//import salavatF from './components/SalavatFat'
import Calendars from "./components/Calendars";
import Countaer from "./components/Counter";
import colors from "./assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";//
import Verification from "./components/Verification";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Settings from "./components/Settings";
import Calendar from "./components/Calendars";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import firebase from "@react-native-firebase/app";
import messaging from '@react-native-firebase/messaging'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import axios from "axios";

import Silsila from "./components/Silsila";
import SilsilaNA from "./components/SilsilaNA";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
const url = "https://simolmusic.ru/api/usersub";
let logged = "false";


Entypo.loadFont();
MaterialIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

 function getHeaderTitle(route){
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
        switch(routeName) {
             case 'Home':
             return 'Home Screen';
             case 'Countaer':
             return 'Counter Screen';
             case 'Timers':
             return 'Timer Screen';
             case 'Calendars':
             return 'Calendar Screen';
        }
    }
const Tabnavigator = () => {
    
    
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.creem,
        inactiveTintColor: colors.shadow,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Countaer"
        component={Countaer}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="touch-app" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="time-slot" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendars"
        component={Calendars}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" size={32} color={color} />
          ),
        }}
      />

  
    </Tab.Navigator>
  );
};
function Draw({navigation}) {
 
  const getItems = async () => {
    logged = await AsyncStorage.getItem("logged");
    console.log(logged);
  };
  getItems();

  return (
    <Drawer.Navigator initialRouteName="Tab">
      <Drawer.Screen name="Homescreen" component={Tabnavigator} options={{ headerTitle:"Homescreen",
           headerRight: () => (
             <TouchableOpacity >
            <Entypo
              name="menu"
              size={32}
              color={colors.green}
              style={styles.menuIcon}
            />
            </TouchableOpacity>
          ),}}/>
 
 <Drawer.Screen name="Calendar" component={Calendar}  options={{ headerTitle:"Calenadr",
           headerRight: () => (
             <TouchableOpacity>
            <Entypo
              name="menu"
              size={32}
              color={colors.green}
              style={styles.menuIcon}
            />
            </TouchableOpacity>
          ),}} />
      {logged == "true" ? (
        <Drawer.Screen name="Logout" component={Logout} />
      ) : (
        <Drawer.Screen name="Login" component={Login} />
      )}
      
     
    </Drawer.Navigator>
  );
}

function App({navigation}) {
  useEffect(() => {
    async function initializeApp() {
      if (!firebase.apps.length) {
        await firebase.initializeApp(firebaseConfig);
        requestUserPermission();
      } else {
        await firebase.app();
      }
    }
    initializeApp();
  }, []);

  async function checkPermission() {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  }

  async function getToken() {
    var token = await Util.getFirebaseToken();
    console.log('token >>>>>>>>>>>>>> ', token);
  }

  async function requestPermission() {
    try {
      var permission = await messaging().requestPermission();
      if (permission) {
        getToken();
      }
    } catch (error) {
      console.log('permission rejected');
    }
  }
         
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      checkPermission();
    }
  }

  useEffect(() => {
    const get_phone = async () => {
      let phone = await AsyncStorage.getItem("phone");

      if (phone != null) { 
        const formData = new FormData()
        formData.append('phone', phone)
        
        let formatted_url = url ;
        console.log(formatted_url);
        axios
          .post(formatted_url, formData, {
        })
          .then((res) => {
            //console.log(res)
            const storage = async () => {
              let items = await AsyncStorage.getItem("subscription");
              console.log(items);
             console.log(items)
            };
            storage();

            try {
              AsyncStorage.setItem("subscription", res.data.subscription);
            } catch (error) {
              console.log(error);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      else{
        try {
              AsyncStorage.setItem("subscription", "not_valid");
            } catch (error) {
              console.log(error);
            }
      }
    };
    get_phone();
  });
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Draw"
          component={Draw}
          options={({route}) => ({
            headerTitle:getHeaderTitle(route),
          })}
          
        />
        <Stack.Screen
          name="Imena"
          component={Imena}
          options={{
            headerTitle: "Imena",
            headerRight: () => (
              <Entypo
                name="menu"
                size={32}
                color={colors.green}
                style={styles.menuIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Silsila"
          component={Silsila}
          options={{
            headerTitle: "Silsila",
            headerRight: () => (
              <Entypo
                name="menu"
                size={32}
                color={colors.green}
                style={styles.menuIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="SilsilaNA"
          component={SilsilaNA}
          options={{
            headerTitle: "SilsilaNA",
            headerRight: () => (
              <Entypo
                name="menu"
                size={32}
                color={colors.green}
                style={styles.menuIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="SalavatM"
          component={SalavatM}
          options={{
            headerTitle: "SalavatM",
            headerRight: () => (
              <Entypo
                name="menu"
                size={32}
                color={colors.green}
                style={styles.menuIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            headerTitle: "Verification",
            headerRight: () => (
              <Entypo
                name="menu"
                size={32}
                color={colors.green}
                style={styles.menuIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="SalavatFat"
          component={SalavatFat}
          options={{
            headerTitle: "Salavat Fat",
            headerRight: () => (
              <Entypo
                name="menu"
                size={32}
                color={colors.green}
                style={styles.menuIcon}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
  },
});

export default App;
