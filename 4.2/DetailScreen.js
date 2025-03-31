import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

export default function DataScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState('');

    const storeData = async () => {
        try {
            const jsonValue = JSON.stringify(name);
            await AsyncStorage.setItem('name', jsonValue);
        } catch (e) {
            console.log(e);
        }
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: '#222'
        },
    });

    const test = true;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings:</Text>
            <View>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="Enter name:"
                    keyboardType="default"
                />
            </View>
            <Button title={'Save'} onPress={() => { storeData(); navigation.navigate('Data'); }} />
            <StatusBar style="auto"/>
        </View>
    );
}
