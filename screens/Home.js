import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import global from "../styles/Global";
import Container from "../styles/Container";
import CardTwo from "../component/CardTwo";


/*
Navigation prop från man genom navigation konfigurationen.
Navigationen konfigurerades i MainStack.js
*/
function Home({ navigation }) {

    // navigate metoden används för att navigera till Cities sidan
    const goToCity = () => {
        navigation.navigate('Cities');
    }

    return (
        <View style={global.container}>
        <Container>
            <CardTwo>
                <Image 
                style={global.img}
                source={require('../assets/5564ffcec1534361b20b7e20427231fc.png')}
                />
                <TouchableOpacity 
                    style={global.btn}
                    onPress={goToCity}
                >
                    <Text style={global.btnText}>Get Started</Text>
                </TouchableOpacity>
            </CardTwo>
        </Container>
        </View>
    )
}

export default Home
