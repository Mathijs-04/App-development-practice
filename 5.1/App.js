import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function App() {
    const [region, setRegion] = useState(null);

    useEffect(() => {
        let subscription;

        async function getCurrentLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        }

        getCurrentLocation();

        (async () => {
            subscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 2000
                },
                (location) => {
                    const newLocation = {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    };
                    setRegion(newLocation);
                }
            );
        })();

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                showsUserLocation={true}
                followsUserLocation={true}
            >
                {/*{region && (*/}
                {/*    <Marker*/}
                {/*        coordinate={{*/}
                {/*            latitude: region.latitude,*/}
                {/*            longitude: region.longitude,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*)}*/}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
