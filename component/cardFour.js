import React from 'react';
import { View } from 'react-native';
import global from "../styles/Global";


function cardFour(props) {
    return (
        <View style={global.fourthCard}>
        <View style={global.cardContent}>
            {props.children}
        </View>
    </View>
    )
}

export default cardFour
