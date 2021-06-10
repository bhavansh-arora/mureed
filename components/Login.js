import React,{useState,useRef,useEffect} from 'react'
import {View,Text,StatusBar,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView, TextInput} from 'react-native'
import colors from '../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import ProgressDialog from 'react-native-progress-dialog';
 import AsyncStorage from '@react-native-community/async-storage';
 import axios from "axios";

import firebase from '@react-native-firebase/app'
import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';

const adUnitId = 'ca-app-pub-3940256099942544/6300978111';


function Login({navigation}) {
    const ad =   <BannerAd unitId={adUnitId}  size={'SMART_BANNER'}/>
  const [subscription,setSubscription] = useState()
  useEffect(()=>{
     const storage = async()=>{
        let subs = await AsyncStorage.getItem("subscription");

    setSubscription(subs)

  }
  storage()
  },[])
 const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [visible, setVisible] = useState(false);
  const phoneInput = useRef(null);
  const [password, onChangePassword] = useState("");

useEffect(()=>{
  
})
    




function login() {
  const checkValid = phoneInput.current?.isValidNumber(value);
              if(checkValid){
if(password.length==0)
  alert("Please enter a valid password.")
else{
  setVisible(true)

  var bodyFormData = new FormData();
  bodyFormData.append('phone', formattedValue);
  bodyFormData.append('pass', password); 

  const url="https://simolmusic.ru/api/sign"
 // const formatted_url = url + password + "&phone=" + formattedValue
  axios({
    method: "post",
    url: url,
    data: bodyFormData,
  })
  .then((res) => {
   console.log(res.data)
   setVisible(false)
   if(res.data.array.error=="Wrong password"){
alert("Wrong Password")
   }
   else{
      try {
        AsyncStorage.setItem("subscription", res.data.subscription);
        AsyncStorage.setItem('logged',"true" )
        AsyncStorage.setItem('phone',formattedValue )
        navigation.navigate("Homescreen")
      } catch (error) {
        console.log(error);
      }
             
   }
   /* try {
      AsyncStorage.setItem("subscription", res.data.subscription);
    } catch (error) {
      console.log(error);
    } */
  })
  .catch((err) => {
    console.log(err.message);
    alert(err.message)
    setVisible(false)

  });
}
              }
              else{
                alert("Please enter a valid phone number.")
              }
}



function sendCode() {
   const checkValid = phoneInput.current?.isValidNumber(value);
              if(checkValid){
                setVisible(true)
console.log(formattedValue)
              
 // alert("hey")
 firebase.auth()
 .signInWithPhoneNumber(formattedValue)
      .then(confirmResult => {
        setVisible(false)
         navigation.navigate("Verification",{result:confirmResult,
        phone:formattedValue})
         console.log(confirmResult)
              })
      .catch(error => {
        alert(error.message)
setVisible(false)
        console.log(error)
      })
    }
    else{
      alert("Invalid Phone Number")
    }
  } 





    return (
     <SafeAreaView style={{flex:1,backgroundColor:colors.green}}>
    <ProgressDialog visible={visible}/>
     <View style={{backgroundColor:colors.green,flex:1}}>
     </View>
     <View style={{backgroundColor:"#fff",height:"80%",borderTopLeftRadius:50,alignItems:"center"}}>

     <Text style={{fontSize:27,marginTop:20,fontWeight:"600"}}>Login</Text>
          <Text style={{fontSize:15,marginTop:20,fontWeight:"100",width:"90%",textAlign:"center",fontStyle:"italic"}}>Please enter your Mobile Number so that we can verify that its you.</Text>

     <View style={{ 
       backgroundColor:"#fff",
   
    alignSelf:"center",
  marginTop:30,
    shadowColor: "#eee",
shadowOffset: {
	width: 0,
	height: 0,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 5,
}}>
     
      <PhoneInput
            ref={phoneInput}
            defaultValue={value}
                  defaultCode="RU"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            
            autoFocus
          />
    

     </View>
     <TextInput
        style={{ 
          margin: 12,
          borderWidth: 1,width:"80%",borderColor:colors.green,borderRadius:5,marginTop:20}}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter password"
      />
     <TouchableOpacity style={{width:"90%"}} onPress={()=>{login()
          }}>
     <LinearGradient  colors={[colors.green,'#fff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Next
  </Text>
</LinearGradient>
</TouchableOpacity>


     </View>
   {!(subscription=="valid")?
         ad:null
       }
     </SafeAreaView>

    )
}

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginTop:50,
    width:"100%"
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight:"bold"
  },
});

export default Login
