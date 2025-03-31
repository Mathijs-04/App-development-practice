import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from 'react';

export default function DataScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState('');

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('name');
            const nameData = jsonValue != null ? JSON.parse(jsonValue) : false;
            setName(nameData);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

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

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Gegevens:</Text>
            <View>
                {name ? (
                    <Text>Hallo {name}, jij bent [LEEFTIJD] jaar oud</Text>
                ) : (
                    <Text>Nog niet alle gegevens zijn bekend</Text>
                )}
            </View>
            <Button title={'Settings'} onPress={() => navigation.navigate('Detail')} />
            <StatusBar style="auto"/>
        </View>
    );
}
