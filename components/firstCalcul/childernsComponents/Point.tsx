import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const colors = {
    ShadowColorLightTop: '#ffffff',
    ShadowColorLightBottom: '#afafaf',
    ShadowColorDarkTop: '#4a4a4a',
    ShadowColorDarkBottom: '#363636',
    textColorLightBTN: '#ffffff',
    textColorDarkBTN: '#000',
    BORDERColorLIGHT: '#e8e8e8',
}

export default function Point({onTouchablePress, darkTheme}:any){

    const stylesThemes = darkTheme ?  styleDark : styleLight;

    const linearColors = {
        lightsLinearBackground : ['#f0f0f0','#cacaca'],
        darksLinearBackground : ['#353434','#3f3e3e'],
    };

    const handlePress = (text:string) => {
        onTouchablePress(text);
    };



    return(

        <View style={[styles.morphTop, stylesThemes.morphTop]}>
            <TouchableOpacity style={[styles.morphBottom, stylesThemes.morphBottom]} onPress={() => handlePress('.')}>
                <LinearGradient colors={darkTheme ? linearColors.darksLinearBackground : linearColors.lightsLinearBackground} style={styles.boxLinearGradient}>
                    <Text style={[styles.btnTxt, stylesThemes.btnTxt]} >.</Text>
                </LinearGradient>
            </TouchableOpacity> 
        </View>
            
    )
}

const styles = StyleSheet.create({

    morphTop:{
        // borderColor:'green', 
        // borderWidth: 5, 
        height: 73,
        width: 73,
        borderRadius:50,
        marginVertical:10,
        shadowOffset: {width: -6, height: -6},
        shadowRadius:7,
        shadowOpacity:1,
        blurRadius:17,
},

    morphBottom:{
        // borderColor:'#FFF',
        // borderWidth: 2,
        height: '100%',
        width: '100%',
        shadowOffset:{width:6, height:6},
        shadowRadius: 7,
        shadowOpacity:1,
        blurRadius:17,
    },
    boxLinearGradient:{
        height: '100%',
        width: '100%',
        borderRadius:50,
    },
    btnTxt:{
        fontSize: 40,
        textAlign:'center',
        // borderColor:'#000',
        // borderWidth: 2,
    },
});

const styleLight = StyleSheet.create({
    morphTop: {
        shadowColor: colors.ShadowColorLightTop,
        borderColor: '#e8e8e8',
    },
    morphBottom:{
        shadowColor:colors.ShadowColorLightBottom,
    },

    btnTxt:{
        color:'#000',
    }, 
});

const styleDark = StyleSheet.create({
    morphTop:{
        shadowColor: colors.ShadowColorDarkTop, 
    },  
    morphBottom:{
        shadowColor:colors.ShadowColorDarkBottom,
    },

    btnTxt:{
        color:'#FFF',
    }
})