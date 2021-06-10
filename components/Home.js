import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  StatusBar,
  ScrollView,
} from "react-native";

import {createAppContainer} from '@react-navigation/native';
import {createStackContainer} from "@react-navigation/stack";

import colors from "../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import discoverData from "../assets/data/discoverData";
import Timer from "../components/Timer";
import Silsila from "../components/Silsila";
import ImenaP from "../components/Imena";
import SalavatM from "../components/Salavat";


import Fon from "../assets/images/Fon.png";
import TopArabic from "../assets/images/TopArabic.png";
import SilsilaPhoto from "../assets/images/Silsila.png";
import Imena from "../assets/images/Imena.png";
import Salavat from "../assets/images/Salavat.png";
import Dua from "../assets/images/Dua.png";
import Tavbu from "../assets/images/Tavbu.png";
import Hizbu from "../assets/images/Hizbu.png";
import Nastavleniya from "../assets/images/Nastavleniya.png";
import Adabi from "../assets/images/Adabi.png";
import Istihara from "../assets/images/Istihara.png";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "@react-native-firebase/app";
import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';


const adUnitId = "ca-app-pub-3940256099942544/6300978111";

import AsyncStorage from "@react-native-community/async-storage";
import LinearGradient from "react-native-linear-gradient";

//import Exo2 from '../assets/fonts/Exo2';

MaterialCommunityIcons.loadFont();
Entypo.loadFont();
//Exo2.loadFont(),
 const ad = (

    <BannerAd unitId={adUnitId}   size={'SMART_BANNER'}/>

  );
Home = ({ navigation }) => {
  

  Home.navigationOptions = {
    headerTitle: 'Мюрид'
  }


  const [subscription, setSubscription] = useState();
  useEffect(() => {
    const storage = async () => {
      let subs = await AsyncStorage.getItem("subscription");  
      //console.log("sub",subs)

      setSubscription(subs);
    };
    storage();
  });
  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
        <ImageBackground
          source={item.image}
          style={styles.discoverItem}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.containerFon} backgroundColor={colors.black}>
      <ImageBackground source={Fon} style={styles.ImBackground}>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo
              name="menu"
              size={32}
              color={colors.creem}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Image source={TopArabic} style={styles.TopArabic} />
          <Entypo
            name="bell"
            size={32}
            color={colors.creem}
            style={styles.menuIcon}
          />
        </View>

        <View style={styles.main}>
          <ScrollView style={styles.containerScroll}>
            <View style={styles.main2}>
              <View styles={styles.right}>
                <TouchableOpacity onPress={() => navigation.navigate("Silsila")}>
                  <LinearGradient
                    colors={["#15B084", "#46E04E"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Сильсиля</Text>
                    <Image source={SilsilaPhoto} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
                  <LinearGradient
                    colors={["#441DFC", "#9E4BF9"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Тавбу</Text>
                    <Image source={Tavbu} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
                  <LinearGradient
                    colors={["#EA8B7A", "#FADF40"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Дуа</Text>
                    <Image source={Dua} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
                  <LinearGradient
                    colors={["#15B084", "#46E04E"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Адабы</Text>
                    <Image source={Adabi} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("SalavatM")}>
                  <LinearGradient
                    colors={["#441DFC", "#9E4BF9"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Салават2</Text>
                    <Image source={Salavat} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View styles={styles.left}>
                <TouchableOpacity onPress={() => navigation.navigate("Imena")}>
                  <LinearGradient
                    colors={["#15B084", "#46E04E"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>99 Имён</Text>
                    <Image source={Imena} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("SalavatM")}>
                  <LinearGradient
                    colors={["#441DFC", "#9E4BF9"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Салават</Text>
                    <Image source={Salavat} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("SalavatM")}>
                  <LinearGradient
                    colors={["#EA8B7A", "#FADF40"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Хизбу</Text>
                    <Image source={Hizbu} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
                  <LinearGradient
                    colors={["#15B084", "#46E04E"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Настав</Text>
                    <Image source={Nastavleniya} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
                  <LinearGradient
                    colors={["#441DFC", "#9E4BF9"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>2</Text>
                    <Image source={SilsilaPhoto} style={styles.buttonMain} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
   
      {!(subscription == "valid") ? ad : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.gold,
  },

  menuWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10%",
  },

  discoverItem: {
    width: 170,
    height: 170,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  discoverItemImage: {
    marginTop: 10,
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontSize: 27,
    color: colors.creem,
    paddingHorizontal: 15,
    justifyContent: "flex-start",
    paddingVertical: 15,
    fontFamily: "Exo2-Regular",
  },

  discoverWrapper: {
    alignItems: "center",
  },

  ImBackground: {
    marginTop: 5,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  TopArabic: {
    width: 200,
    height: 80,
  },

  textFon: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },

  containerFon: {
    flex: 1,
  },

  textDate: {
    fontSize: 35,
    color: colors.green,
    justifyContent: "flex-start",
    fontFamily: "Exo2-Medium",
  },

  textDateGrig: {
    fontSize: 25,
    color: colors.white,
    justifyContent: "flex-start",
    fontFamily: "Exo2-Regular",
  },

  textGorod: {
    fontSize: 25,
    color: colors.white,
    justifyContent: "flex-end",
    fontFamily: "Exo2-Regular",
  },

  textGradus: {
    fontSize: 27,
    color: colors.white,
    paddingRight: 15,
    fontFamily: "Exo2-Regular",
  },

  menuNeblago: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: colors.creem,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    height: 30,
  },

  textNeblago: {
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: "Exo2-Medium",
    color: colors.black,
    justifyContent: "flex-start",
    fontFamily: "Exo2-Regular",
  },

  menuIconNeblago: {
    marginHorizontal: 10,
  },

  containerScroll: {
    flex: 1,
    alignContent: "center",
  },

  main: {
    flex: 1,

    // alignItems: "center",
  },

  main2: {
    // flex: 1,
    // justifyContent: "space-between",
    marginLeft: "3%",
    marginRight: "3%",
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    //justifyContent: "space-around",
  },

  right: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  left: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  button2: {
    minHeight: 130,
    minWidth: "45%",
    opacity: 0.8,
    margin: 7,
    borderRadius: 10,
    paddingRight: 10,
    justifyContent: "space-around",
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
    marginLeft: "8%",
    marginTop: "2%",
    fontFamily: "Exo2-Medium",
  },

  buttonMain: {
    height: 70,
    width: 70,
    alignSelf: "flex-end",
    // resizeMode: 'stretch'
    resizeMode: "cover",
  },

  ad1: {
    justifyContent: "flex-end",
  },
});

export default Home;
