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
import ProgressSlider from '../assets/player/ProgressSlider';
import TrackPlayer, {
  State as TrackPlayerState,
  STATE_PAUSED,
  STATE_PLAYING,
  STATE_STOPPED,
  Track,
} from 'react-native-track-player';

import colors from '../assets/colors/colors';
import Fon from "../assets/images/Fon.png";
import Icon from 'react-native-vector-icons/Feather';
import firebase from '@react-native-firebase/app';
import LinearGradient from "react-native-linear-gradient";


import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';
const adUnitId = 'ca-app-pub-3940256099942544/6300978111';
 import AsyncStorage from '@react-native-community/async-storage';



var isPaused;
isPaused === STATE_PAUSED;

var isPlaying;
isPlaying === STATE_PLAYING;



const SalavatFat = () => {
  const ad =    <BannerAd unitId={adUnitId}   size={'SMART_BANNER'}/>
  const [subscription,setSubscription] = useState()
  useEffect(()=>{
     const storage = async()=>{
        let subs = await AsyncStorage.getItem("subscription");

    setSubscription(subs)

  }
  storage()
  },[])
React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('Player is setup');
      });
      TrackPlayer.registerPlaybackService(() =>
        require('../services/trackPlayerServices'),
      );
      await TrackPlayer.add(track);
    })();    
  }, []);



    
    return (

      
      <View style={styles.containerV} >
      <ImageBackground source={Fon} style={styles.ImBackground}>
        <View style={styles.player}>
          <TouchableOpacity onPress={() => TrackPlayer.play()}>
            <Icon name="play-circle" size={40} color='#19534d'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => TrackPlayer.pause()}>
            <Icon name="pause-circle" size={40} color='#19534d'/>
          </TouchableOpacity>

          <View style={styles.slider}>
            <ProgressSlider />
          </View>

          <TouchableOpacity onPress={() => TrackPlayer.stop()}>
            <Icon name="stop-circle" size={40} color='#19534d'/>
          </TouchableOpacity>


        </View >
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity >
                  <LinearGradient
                    colors={["#15B084", "#46E04E"]}
                    style={styles.button2}
                  >
                    <Text style={styles.buttonText}>Сильсиля</Text>
                  
                  </LinearGradient>
                </TouchableOpacity>
                
          </View>
        </ScrollView>
            {!(subscription=="valid")?
         ad:null
       }
       </ImageBackground>
      </View>

      
    );
  }


const styles = StyleSheet.create({

     player: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  slider: {
    flex: 2,
  },
 

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

export default SalavatFat;
