import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen";
import {createStaticNavigation} from "@react-navigation/native";
import ListScreen from "./ListScreen";
import DetailScreen from "./DetailScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Home',
      },
    },
    List: {
      screen: DataScreen,
      options: {
        title: 'Data',
      },
    },
    Detail: {
      screen: DetailScreen,
      options: {
        title: 'Detail',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation/>;
}
