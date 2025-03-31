import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DataScreen from "./DataScreen";
import {Button} from "react-native";
import DetailScreen from "./DetailScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator id={0} initialRouteName="Data">
          <Stack.Screen name="Data" component={DataScreen} options={({ navigation }) => ({
            // headerRight: () => (
            //     <Button
            //         onPress={() => navigation.navigate('Detail')}
            //         title="Details"
            //         color="#000"
            //     />
            // ),
          })} />
          <Stack.Screen name={"Detail"} component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
