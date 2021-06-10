/**
 * @format
 */
import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';


import {AppRegistry} from 'react-native';
import App from './App';
import Navigation from './Navigation'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./services/trackPlayerServices'));