import React,{useState,useEffect} from 'react'
import {StyleSheet,SafeAreaView,View,Text} from 'react-native'
import {Agenda} from 'react-native-calendars';
import firebase from '@react-native-firebase/app'
import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';

import {LocaleConfig} from 'react-native-calendars';
 import AsyncStorage from '@react-native-community/async-storage';
import data from './Data'
const adUnitId = 'ca-app-pub-3940256099942544/6300978111';


LocaleConfig.locales ['ru'] = {
   monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
   monthNamesShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя.', 'Дек . '],
   dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
   dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
   today: "Сегодня"
};
LocaleConfig.defaultLocale = 'ru';

type Item = {
  month: string;
  special_day:array;
  day:int;
};

function Calendars() {
   const ad =   <BannerAd unitId={adUnitId}   size={'SMART_BANNER'}/>
  const [subscription,setSubscription] = useState()
  const [jsondata,setJsonData] = useState()
  useEffect(()=>{
     const storage = async()=>{
        let subs = await AsyncStorage.getItem("subscription");

    setSubscription(subs)


  }
  storage()
  //setJsonData(data)
  
  //alert("data "+JSON.stringify(jsonDa))
  })
   const [items, setItems] = useState({})
   useEffect(() => {
            const reduced = data.reduce(
        (acc: {[key: string]: Post[]}, currentItem) => {
          const {date, ...coolItem} = currentItem;

          acc[date] = [coolItem];

          return acc;
        },
        {},
      );
     // console.log(reduced)
      setItems(reduced)
      },[]) 
  const renderItem = (item: Item) => {
    return (
      <View style={styles.itemContainer}>
      <Text>{item.day}</Text>
        <Text>{item.month}</Text>
        <Text style={{textAlign:"center",marginTop:5}}>{item.special_day}</Text>
      </View>
      
    );
  };

    return (
      <SafeAreaView style={styles.safe}>
      <Agenda items={items} renderItem={renderItem} />
         {!(subscription=="valid")?
         ad:null
       }
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Calendars
