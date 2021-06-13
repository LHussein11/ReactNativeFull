import React from 'react';
import { View } from 'react-native';
import global from "../styles/Global";

/*
Kort stil, kort komponenten exporteras 
och det som den omsluter blir ett barn komponent.
*/
function Card(props) {
    return (
        <View style={global.card}>
            <View style={global.cardContent}>
                {props.children}
            </View>
        </View>
    )
}


export default Card





