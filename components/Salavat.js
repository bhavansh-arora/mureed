
import React, {Component,useState,useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import firebase from '@react-native-firebase/app';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fon from "../assets/images/Fon.png";
import SalavatFat from "../components/SalavatFat";

import LinearGradient from "react-native-linear-gradient";

import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';
const adUnitId = 'ca-app-pub-3940256099942544/6300978111';
 import AsyncStorage from '@react-native-community/async-storage';

 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
let subscription;
const ad = <BannerAd unitId={adUnitId} s size={"SMART_BANNER"} />;

const Salavat = ({ navigation }) => {
  const ad = <BannerAd unitId={adUnitId} size={"SMART_BANNER"} />;
  const [subscription, setSubscription] = useState();
  useEffect(() => {
    const storage = async () => {
      let subs = await AsyncStorage.getItem("subscription");

      setSubscription(subs);
    };
    storage();
  }, []);

  return (
    <View style={styles.containerV}>
      <ImageBackground source={Fon} style={styles.ImBackground}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("SalavatFat")}>
              <LinearGradient
                colors={["#15B084", "#46E04E"]}
                style={styles.button2}
              >
                <Text style={styles.buttonText}>Сильсиля</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {!(subscription == "valid") ? ad : null}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerV: {
    flex: 1,
    backgroundColor: colors.black,
  },

  button2: {
    minHeight: 75,
    minWidth: "45%",
    opacity: 0.8,
    margin: 7,
    borderRadius: 10,
    paddingRight: 10,
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Exo2-Medium",
    alignSelf: "center",
  },

  buttonMain: {
    height: 70,
    width: 70,
    alignSelf: "center",
    // resizeMode: 'stretch'
    resizeMode: "cover",
  },

  ImBackground: {
    marginTop: 5,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Salavat;
