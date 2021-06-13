import React from 'react';
import { Text, View, ScrollView, SafeAreaView, Image } from 'react-native';
import global from "../styles/Global";
import Container from "../styles/Container";
import CardFour from '../component/cardFour';

/*
Med route så kan vi ta emot objektet som vi skickat 
från Cities sidan
*/
function CitiesDetail({ route }) {
    return (
        <View style={global.container}>
            <Container>
            <CardFour>
                <ScrollView>
                    {
                        /*
                        Det skickade objektets indivduella 
                        poster
                        */
                    }
                    <SafeAreaView>
                        <Image 
                            style={global.img}
                            source={{
                                uri: `${route.params.img}`
                            }}
                        />
                        <Text style={[global.cityNameText, global.detailText]}>
                        {route.params.cityname}
                        </Text>
                        <Text style={global.detailText}>
                        {route.params.population}
                        </Text>
                        <Text style={global.detailText}>
                        {route.params.country}
                        </Text>
                        <Text style={global.detailText}>
                        {route.params.information}
                        </Text>
                    </SafeAreaView>
                </ScrollView>
            </CardFour>
            </Container>
        </View>
    )
}

export default CitiesDetail
