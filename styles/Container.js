import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native';
import global from "../styles/Global";

/*
Bakgrundsfärg i gradient. Komponenten är dynamisk och den
kompoenent som omsluts av denna komponent kommer bli ett barn komponent 
till denna komponent.
*/
function Container({children}) {
    return (
        <LinearGradient 
        colors={['#5581c2', '#84a7db', '#d5e3f7']}
        style={global.gradient}
        >
            <SafeAreaView style={global.gradientContainer}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};


export default Container
