import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Point({onTouchablePress}:any){


    const handlePress = (text:string) => {
        onTouchablePress(text);
    }
    return(
            <TouchableOpacity style={styles.contentToutchs}
                                                onPress={() => handlePress('.')}>
                <Text style={styles.btnTxt} >.</Text>
            </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({

    contentToutchs:{
        bottom:0,
        width: 73,
        height: 73,
        borderColor:'#FFF',
        borderWidth: 2,
        borderRadius:50,
        justifyContent: 'center',
    },


    btnTxt:{
        color:'#FFF',
        fontSize: 40,
        textAlign:'center',
        // borderColor:'#FFF',
        // borderWidth: 2,
        height:'100%'
    },
})