import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default function OperatorSymbol({onTouchablePress }:any) {

    const handlePress = (text:string) => {
        onTouchablePress(text);
    }

    return(

            <View style={styles.contentOperatorSymbol}>
                <TouchableOpacity style={styles.contentToutchs} onPress={() => handlePress('+')}>
                    <Text style={styles.btnTxt}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentToutchs} onPress={() => handlePress('*')}>
                    <Text style={styles.btnTxt}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentToutchs} onPress={() => handlePress('/')}>
                    <Text style={styles.btnTxt}>÷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentToutchs} onPress={() => handlePress('-')}>
                    <Text style={styles.btnTxt}>-</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({

    contentOperatorSymbol:{
        display: 'flex',
        flexDirection:'column',
        // backgroundColor:'pink',

    },

    contentToutchs:{
        // backgroundColor:'pink',
        borderWidth:3,
        borderRadius:50,
        borderColor:'#FFF',
        width: 73,
        height: 73,
        marginBottom:15,
        bottom:0,
        justifyContent: 'center',
    },

    btnTxt:{
        color:'#FFF',
        fontSize: 40,
        textAlign:'center',
        // borderColor:'#FFF',
        // borderWidth:3,
    },
})