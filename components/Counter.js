import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";
import firebase from "@react-native-firebase/app";
import AsyncStorage from "@react-native-community/async-storage";
import LinearGradient from "react-native-linear-gradient";
import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';


const adUnitId = "ca-app-pub-3940256099942544/6300978111";

//let subscription;
const ad = (
  <BannerAd unitId={adUnitId}  size={'SMART_BANNER'}/>
);
class Counter extends React.Component {
  state = { count: 0 ,subscription:"valid"};

  setCount = () =>
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count  + 1,
    }));

  setNull = () =>
    this.setState((prevState) => ({
      ...prevState,
      count: (this.state.count = 0),
    }));


  componentDidMount() {
   // console.log("mount")
    const storage = async () => {
      let subs= await AsyncStorage.getItem("subscription");
      this.setState({
        subscription: subs
      })
    };
    storage();

  }

  render() {
    const { count } = this.state;
          //console.log("counter",subscription)

    return (
      <View style={styles.bg}>
        <View style={styles.view2}>

          <View style={styles.count}>
           <LinearGradient 
              colors={["#441DFC", "#9E4BF9"]}
              style={styles.countBack}
            >
            <Text style={styles.less}>{count} </Text>
            </LinearGradient>
          </View>

          <View style={styles.sbros}>
            <TouchableOpacity style={styles.buttonReset} onPress={this.setNull}>
              <Text style={styles.buttonTextReset}>СБРОС</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.view3}>
          <TouchableOpacity onPress={this.setCount}>
            <LinearGradient
              colors={["#15B084", "#46E04E"]}
              style={styles.buttonBig}
            ></LinearGradient>
          </TouchableOpacity>
        </View>
        {!(this.state.subscription == "valid") ? ad : null}
      </View>
    );
  }
}

const counter = () => <Counter />;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.black,
    
  },

  view2: {
    flex: 3,
    //backgroundColor: colors.blue,
    
  },

  view3: {
    flex: 5,
    justifyContent: "center",
  },

  less: {
    fontSize: 70,
    color: "#fff",
  marginLeft: 15,
    alignSelf: "center",
    fontFamily: "Exo2-Medium",
   // marginTop: "5%"
   
  },

  greater: {
    fontSize: 50,
    color: colors.creem,
    fontWeight: "bold",
    
  },

  buttonBig: {
    height: "90%",
    width: "90%",
     alignSelf: "center",
    borderRadius: 25,
    borderColor: colors.shadow,
    borderWidth: 0.5,
  },



  buttonReset: {
    backgroundColor: "#EA8B7A",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 80,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: "10%"
  },

  buttonTextReset: {
    fontSize: 16,
    color: colors.creem,
  },

 

  count: {
    flex: 3,
  },

  countBack:{
      borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    
  }


});

export default counter;
