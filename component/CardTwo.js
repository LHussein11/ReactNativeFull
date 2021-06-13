import React from 'react';
import { View } from 'react-native';
import global from "../styles/Global";

function CardTwo(props) {
    return (
        <View style={global.secondCard}> 
            <View style={global.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default CardTwo
