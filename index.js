/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Platform specific consts
global.OS_IOS = Platform.OS === 'ios'
global.OS_ANDROID = Platform.OS === 'android'

AppRegistry.registerComponent(appName, () => App);
