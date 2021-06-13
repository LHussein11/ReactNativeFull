import React from 'react';
import { View } from 'react-native';
import global from "../styles/Global";


function CardThree(props) {
    return (
        <View style={global.thirdCard}>
            <View style={global.cardContentThird}>
                {props.children}
            </View>
        </View>
    )
}

export default CardThree
