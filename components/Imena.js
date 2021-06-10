import React, { Component, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
//import { ScrollView } from 'react-native-gesture-handler';
import colors from "../assets/colors/colors";
import Icon from "react-native-vector-icons/Feather";
import silsilaData from "../assets/data/silsilaData";
import ProgressSlider from "../assets/player/ProgressSlider";
import TrackPlayer, {
  State as TrackPlayerState,
  STATE_PAUSED,
  STATE_PLAYING,
  STATE_STOPPED,
  Track,
} from "react-native-track-player";
import AsyncStorage from "@react-native-community/async-storage";
import { Box } from "react-native-design-utility";
import firebase from "@react-native-firebase/app";
import {
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
} from "@react-native-firebase/admob";

import Fon from "../assets/images/Fon.png";
const adUnitId = "ca-app-pub-3940256099942544/6300978111";

var isPaused;
isPaused === STATE_PAUSED;

var isPlaying;
isPlaying === STATE_PLAYING;

const Imena = () => {
  const ad = <BannerAd unitId={adUnitId} size={"SMART_BANNER"} />;
  const [subscription, setSubscription] = useState();
  useEffect(() => {
    const storage = async () => {
      let subs = await AsyncStorage.getItem("subscription");

      setSubscription(subs);
    };
    storage();
  }, []);
  React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log("Player is setup");
      });
      TrackPlayer.registerPlaybackService(() =>
        require("../services/trackPlayerServices")
      );
      await TrackPlayer.add(track);
    })();
  }, []);

  //const {id, titleTop } = route.params;
  

  return (
    <View style={styles.container}>
      <ImageBackground source={Fon} style={styles.ImBackground}>
        <View style={styles.player}>
          <TouchableOpacity onPress={() => TrackPlayer.play()}>
            <Icon name="play-circle" size={40} color="#19534d" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => TrackPlayer.pause()}>
            <Icon name="pause-circle" size={40} color="#19534d" />
          </TouchableOpacity>

          <View style={styles.slider}>
            <ProgressSlider />
          </View>

          <TouchableOpacity onPress={() => TrackPlayer.stop()}>
            <Icon name="stop-circle" size={40} color="#19534d" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.containerScroll}>
          <TouchableOpacity onPress={() => TrackPlayer.stop()}>
            <ImageBackground
              style={styles.image}
              source={require("../assets/Imena/001.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => TrackPlayer.stop()}>
            <ImageBackground
              style={styles.image}
              source={require("../assets/Imena/001.png")}
            />
          </TouchableOpacity>
        </ScrollView>
        {!(subscription == "valid") ? ad : null}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  player: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
  },

  slider: {
    flex: 2,
  },

  image: {
    width: "100%",
    aspectRatio: 12 / 2,
    marginTop: 10,
  },
  containerScroll: {
    margin: 10,
  },

  ImBackground: {
    marginTop: 5,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Imena;
