import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default function Clear({onTouchablePress}:any){
    

    return (
        <View style={styles.contentBtnClears}>
            <TouchableOpacity style={styles.btnContentClear} onPress={() => onTouchablePress('AC')}>
                <Text style={styles.btnClear}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContentClear} onPress={() => onTouchablePress('C')}>
                <Text style={styles.btnClear}>C</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({

    contentBtnClears:{
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        // borderColor:'purple',
        // borderWidth: 4,
        height:'20%',
        marginVertical:10,
    },
    btnContentClear:{
        // borderColor:'yellow',
        // borderWidth: 4,
        width:'45%',
        height:'100%',
        },

    btnClear:{
        borderColor:'#FFF',
        borderWidth: 2,
        borderRadius:10,
        color:'#FFF',
        fontSize: 40,
        width: '100%',
        height: '100%',
        textAlign:'center',
        margin:5,
    },
})