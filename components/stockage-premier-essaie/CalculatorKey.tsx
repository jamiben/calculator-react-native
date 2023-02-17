import Rect from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, SafeAreaView } from 'react-native';

import CalculatorKey from './CalculatorKey'

export default function Calculator(props:any){
    return(
        <TouchableOpacity onPress={() => props.onPress(props.keyValue)}>
            <Text>{props.keyValue}{""}</Text>
        </TouchableOpacity>
    )
}