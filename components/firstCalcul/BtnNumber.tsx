import React from "react";
import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, SafeAreaView } from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import { Neomorph } from "react-native-neomorph-shadows";


export default function BtnNumber({value, onTouchablePress}:any){


    const handlePress = () =>{
        onTouchablePress(value)
    }
    return(

        <View style={styles.wrapContentAllBtnNumbers}>
            <TouchableOpacity  style={styles.contentBtnAllNumbers} onPress={() => handlePress('AC')}>
                <Text style={styles.btnTxt}>{value}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    wrapContentAllBtnNumbers:{
        // borderColor:'green', 
        // borderWidth: 5, 
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap',  
        justifyContent: 'center',
    },
    
    contentBtnAllNumbers:{
        // borderColor:'red',   
        // borderWidth: 5,  
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center',
    },

    btnTxt:{
        shadowOffset:{width:10, height:10},
        shadowOpacity: 1,
        shadowColor: '#4f4f4f',
        backgroundColor: '#424242',
        borderRadius:10,
        borderWidth: 2,
        color:'#FFF',
        fontSize: 40,
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap', 
        width:73,
        marginHorizontal: 7,
        height:73,
        marginBottom:12,
        textAlign:'center',
    },
})




