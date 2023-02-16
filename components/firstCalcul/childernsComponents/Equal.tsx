import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Equal({onTouchablePress}:any){

    const handlePress = () => {
        onTouchablePress('=');
    }


    return(
        <View>
            <TouchableOpacity style={styles.contentToutchs} onPress={() => handlePress()}>
                <Text style={styles.btnTxt}>=</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    contentToutchs:{
        position:'absolute',
        bottom:0,
    },

    btnTxt:{
        borderColor:'#FFF',
        borderWidth: 2,
        borderRadius:10,
        color:'#FFF',
        fontSize: 40,
        width: 73,
        height: 73,
        marginVertical: 10,
        marginHorizontal: 3,
        textAlign:'center',
    },
})