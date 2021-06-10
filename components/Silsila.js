import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import silsilaData from '../assets/data/silsilaData';
import firebase from '@react-native-firebase/app';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import tab from '../components/Tabnavigator';



import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';
const adUnitId = 'ca-app-pub-3940256099942544/6300978111';
 import AsyncStorage from '@react-native-community/async-storage';

 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//let subscription;
const ad= <BannerAd unitId={adUnitId} s  size={'SMART_BANNER'}/>
export class Silsila extends Component {
  //const Silsila = ({navigation}) => {
 state = { subscription:"valid"};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
       const storage = async()=>{
 let subs= await AsyncStorage.getItem("subscription");
      this.setState({
        subscription: subs
      })

  }
  storage()
  }
  render() {
    
    return (

      
      <View style={styles.containerV} >
      
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SilsilaNA', {
                  id: 1,
                   titleTopArab: 'سِلْسِلَةُ الطَّرِيقَةِ النقشبندية',
                   textSilsilaArab:'مُحَمَّدْ صَلَّى اللّهُ تَعٔالٔى عَلَيْهِ وَسَلَّمْ * اَبُو بَكْرْ * سَلْمٔانْ * قٔاسِمْ * جَعْفَرْ * أَبُويَزٕيدْ * اَبُو الْحَسَنْ * اَبُو عَلٕي * يُوسُفْ * عَبْدُ الْخٔالِقْ * عٔارِفْ * مَحْمُودْ * عَلٕي * مُحَمَّدْ بٔابٔا * اَمٕيرْكُلٔالِ * مُحَمَّدْ نَقْشُبَنْدِي * عَلٔاءُ الدّٕينْ * يَعْقُوبْ * عُبَيْدُ اللّهْ * مُحَمَّدْ زٔاهِدْ * دَرْوٕيشْ مُحَمَّدْ * خُواجَكِي اْلاِمْكَنَكِي * مُحَمَّدُ الْبٔاقٕي * اَحْمَدُ الْفٔارُوقِي * مُحَمَّدْ مَعْصُومْ * سَيْفُ الدّٕينْ * نُورْ مُحَمَّدْ * حَبٕيبُ اللّهْ * عَبْدُ اللّهْ * خٔالِدْ شٔاهْ * اِسْمٔاعٕيلْ * مُحَمَّدْ صٔالِحْ * اِبْرٔاهٕيمْ * يُونُسْ * مَحْمُودْ اَفَنْدِي * جَبْرٔائٕيلْ اَفَنْدِي * عَبْدُ الرَّحْمٔنِ الْعَسَوٕي * زَيْنُ اللّهِ الشَّرٕيفٕي * سَيْفُ اللّهِ الْحُسَيْنِي * حَسَنْ اَفَنْدِي * مُحَمَّدْ يَعْسُوبْ * حُمَيْدْ اَفَنْدِي * مُحَمَّدُ الْعُورٕي * مُحَمَّدْ عٔارِفْ اَفَنْدِي * مُحَمَّدُ الْبَقْلُخِيِّ * عَبْدُ الْحَمٕيدْ اَفَنْدِي * حَمْزَةْ اَفَنْدِي * مُحَمَّدُ الْخُچَدٕي * سَعٕيدْ اَفَنْدِي',
                   titleBottomArab:'قَدَّسَ اللّهُ أَسْرٔارَهُمْ وَ أَفَاضَ عَلَيْنَا مِنْ فُيُوضَاتِهِمِ آمِينْ',
                     
                   track: {
                    id: '1111',
                    url: require('../assets/audio/Nakshubandi.mp3'),
                    title: 'Longing',
                    artist: 'David Chavez',
                    artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
                    duration: 143
                     },
                })
              }
              style={styles.ButtonS}>
              <Text style={styles.titleA}>سلسلة النقشبندية</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SilsilaNA', {
                  id: 2,
                 titleTopArab: 'سِلْسِلَةُ الطَّرِيقَةِ الشَّاذِلِيَّةِ',
                  textSilsilaArab:'مُحَمَّدْ صَلَّى اللّهُ عَلَيْهِ وَسَلَّمْ ، عَلِي ، حَسَنْ ، جَابِرْ ، سَعِيدْ ، فَتْحُ السُّعُودْ ، سَعْدُ، سَعِيدْ ، أَحْمَدْ ، إِبْرَاهِيمْ ، زَيْنُ الدِّينْ ، شَمْسُ الدِّيْن ، تَاجُ الدِّينْ ، نُورُ الدِّينْ ، فَخْرُ الدِّينْ ، تُقَيُّ الدِّينْ ، عَبْدُ الرَّحْمَنْ ، عَبْدُ السَّلاَمْ ، أَبُو الْحَسَنْ عَلِي الشَّاذِلِي ، أَبُو الْعَبَّاسْ ، اِبْنُ عَطَاءِ اللّهْ ، دَاوُودْ ، مُحَمَّدُ وَفَا ، عَلِي ، يَحْيَى ، أَحْمَدْ ، أَحْمَدْ زَرُّوقْ ، إِبْرَاهِيمْ ، عَلِي الصَّنْهَاجِي ، عَبْدُ الرَّحْمَنِ اْلـمَـجْذُوبْ ، يُوسُفْ ، عَبْدُ الرَّحْمَنْ ، مُحَمَّدْ ، قَاسِمْ ، أَحْمَدْ ، مُحَمَّدُ الْعَرَبِي ، عَلِي ، مَوْلاَيَ الْعَرَبـِي ، مُحَمَّدْ فَنْجِيرُ ، حَبِيبُ الرَّحْمَنْ ، مُحَمَّدْ عَلِي اِبْنُ ظَاهِرْ ، مُحَمَّدْ صَالِحْ ، زَيْنُ اللّه ِالشَّرِيفِي ، سَيْفُ اللّهِ الْحُسَيْنِى ، حَسَنْ حِلْمِي ، مُحَمَّدْ يَعْسُوبْ ، حُمَيْدْ أَفَنْدِي ، مُحَمَّدُ الْعُورِي ، مُحَمَّدْ عَارِفْ أَفَنْدِي ، مُحَمَّدُ الْبَقْلُخِي ، عَبْدُ الْحَمِيدْ أَفَنْدِي ، حَمْزَةْ أَفَنْدِي ، مُحَمَّدُ الْخُجَدِي ، سَعِيدْ أَفَنْدِي.',
                  titleBottomArab:'قَدَّسَ اللّهُ أَسْرٔارَهُمْ وَ أَفَاضَ عَلَيْنَا مِنْ فُيُوضَاتِهِمِ آمِينْ',
                     track: {
                    id: '1111',
                    url: require('../assets/audio/Longing.mp3'),
                    title: 'Longing',
                    artist: 'David Chavez',
                    artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
                    duration: 143
                     },
                })
              }
              style={styles.ButtonS}>
              <Text style={styles.titleA}>سلسلة الشاذلية</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SilsilaNA', {
                  id: 3,
                  titleTop: 'Сильсиля Накшубандийская',
                  textSilsila:
                    'МухIаммад саллаЛлáгьу гIалайгьи ва саллам, Абубакр, Салман, Къасим, ЖагIфар, Абу Язид, АбульхIасан, Абу ГIали, Юсуф, ГIабдулхаликъ, ГIариф, МахIмуд, ГIали, МухIаммад Баба, Амир Кулали, МухIаммад Накъшубанди, ГIалауддин, ЯгIкъуб, ГIубайдуллагь, МухIаммадзагьид, Дарвиш МухIаммад, МухIаммадул Имканаки, МухIаммадул Бакъи, АхIмадул Фарукъи, МухIаммад МагIсум, Сайфуддин, Нур МухIаммад, ХIабибуллагь, ГIабдуллагь, Халидшагь, ИсмагIил, МухIаммадсалихI, Ибрагьим, Юнус, МахIмуд-Афанди, Жабраил- Афанди, ГIабдуррахIманил ГIасави, Зайнуллагь Ашшарифи, Сайфуллагь аль ХIусейни, ХIасан-ХIильми, МухIаммад ЯгIсуб, ХIумайд-Афанди, МухIаммадул ГIури, МухIаммадгIариф-Афанди, МухIаммадул Бакълъухъи, ГIабдулхIамид- Афанди, ХIамзат-Афанди, МухIаммадул Хучади, СагIид-Афанди',
                  titleBottom:
                    'КъаддасаЛлагьу асрарагьум ва афаза гIаляйна мин фуюзатигьим áмúн',
                  track: {
                    id: '1111',
                    url: require('../assets/audio/Nakshubandi.mp3'),
                    title: 'Longing',
                    artist: 'David Chavez',
                    artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
                    duration: 143
                  },
                })
              }
              style={styles.ButtonS}>
              <Text style={styles.title}>Накшубандийская</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SilsilaNA', {
                  id: 4,
                  titleTop: 'Сильсиля Шазалийская',
                  textSilsila:
                    'МухӀаммад салляЛлагьу гӀаляйгьи ва саллям, ГӀали, ХӀасан, Жабир, СагӀид, ФатхӀуссугӀуд, СагӀду, СагӀид, АхӀмад, Ибрагьим, Зайнуддин, Шамсуддин, Тажуддин, Нуруддин, Фахруддин, Тукъаййюддин, ГӀабдуррахӀман, ГӀабдуссалам, Абул ХӀасан ГӀали Шазали, Абул ГӀаббас, Ибну ГӀатӀаиЛлагь, Давуд, МухӀаммад Вафа, ГӀали, ЯхӀя, АхӀмад, АхӀмад Зарукъ, Ибрагьим, ГӀали Ссангьажи, ГӀабдуррахӀманил Мажзуб, Юсуф, ГӀабдуррахӀман, МухӀаммад, Къасим, АхӀмад, МухӀаммадул ГӀараби, ГӀали, Мавлаял ГӀараби, МухӀаммад Фанжиро, ХӀабибуррахӀман, МухӀаммадгӀали ибну Загьир, МухӀаммадсалихӀ, ЗайнуЛлагь Ашшарифи, СайфуЛлагь аль ХӀусайни, ХӀасан-ХӀильми, МухӀаммад ЯгӀсуб, ХӀумайд-Афанди, МухӀаммадул ГIури, МухӀаммадгIариф-Афанди, МухӀаммадул Бакълъухъи, ГIабдулхӀамид-Афанди, ХӀамзат-Афанди, МухӀаммадул Хучади, СагIид-Афанди',
                  titleBottom:
                    'КъаддасаЛлагьу асрарагьум ва афаза гIаляйна мин фуюзатигьим áмúн',
                     track: {
                    id: '1111',
                    url: require('../assets/audio/Longing.mp3'),
                    title: 'Longing',
                    artist: 'David Chavez',
                    artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
                    duration: 143
                     },
                })
              }
              style={styles.ButtonS}>
              <Text style={styles.title}>Шазалийская</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
            {!(this.state.subscription=="valid")?
         ad:null
       }
      </View>

      
    );
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

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: 'Exo2-Medium',
    fontSize: 22,
    color: colors.green,
  },

  titleA: {
    textAlign: 'center',
    fontFamily: 'AdobeArabic-Regular',
    fontSize: 28,
    color: colors.green,
  },

  ButtonS: {
    justifyContent: 'center',
    height: 80,
    backgroundColor: colors.creem,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  containerV: {
    flex: 1,
    backgroundColor: colors.blue,
  },

  



});

export default Silsila;
