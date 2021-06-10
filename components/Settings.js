import React,{useState} from 'react'
import {View,StatusBar,SafeAreaView,Text,StyleSheet,Switch} from 'react-native'
import colors from '../assets/colors/colors';
import firebase from '@react-native-firebase/app';
import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';
const adUnitId = 'ca-app-pub-3940256099942544/6300978111';
 
function Settings() {
     const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
       <SafeAreaView style={styles.container}>
   <Text style={styles.header}>Notifications</Text>
   <View style={{flex:1}}> 
 <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end"}}>
   <Text style={styles.items}>SPECIAL DAY</Text>
<Switch
        trackColor={{ false: "#767577", true:colors.green }}
        thumbColor={isEnabled ? colors.greenDark2 : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
   </View>
    <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end"}}>
   <Text style={styles.items}>THURSDAY</Text>
<Switch
        trackColor={{ false: "#767577", true:colors.green }}
        thumbColor={isEnabled ? colors.greenDark2 : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
   </View>
   
    <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end"}}>
   <Text style={styles.items}>SUNDAY</Text>
 <Switch
        trackColor={{ false: "#767577", true:colors.green }}
        thumbColor={isEnabled ? colors.greenDark2 : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
   </View>
   </View>
   <BannerAd unitId={adUnitId}  size={'SMART_BANNER'}/>

       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
                    flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        },
        header:{
            color:colors.green,
            fontSize:25,
            marginTop:10,
            fontWeight:"bold"
        },
        items:{
            color:colors.green,
            fontSize:25,
            marginTop:10,
        }
})
export default Settings
