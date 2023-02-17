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
export default function Equal({onTouchablePress, darkTheme}:any){

    const themeStyles = darkTheme ? darkThemeStyle : lightThemeStyle;

    const colorsLinear = {
        backgroundLinearLigthBTN: ['#f0f0f0','#cacaca'],
        backgroundLinearDarkBTN: ['#353434','#3f3e3e'],  
    }

    const handlePress = () => {
        onTouchablePress('=');
    }


    return(
        <View style={[styles.morphTop, themeStyles.morphTop]}>
            <TouchableOpacity  style={[styles.morphBottom, themeStyles.morphBottom]}  onPress={() => handlePress()}>
                <LinearGradient colors={darkTheme ? colorsLinear.backgroundLinearDarkBTN : colorsLinear.backgroundLinearLigthBTN } end={{x:0.1, y:0.9}} style={styles.boxLinearGradient}>
                    <Text style={[styles.btnTxt, themeStyles.btnTxt]}>=</Text>
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
            marginLeft:'12%',
            marginVertical:10,
            shadowOffset: {width: -6, height: -6},
            shadowRadius:7,
            shadowOpacity:1,
            blurRadius:17,
    },
    
    morphBottom:{
        // borderColor:'red',   
        // borderWidth: 5,   
        height: '100%',
        width: '100%',
        shadowOffset:{width:6, height:6},
        shadowRadius: 7,
        shadowOpacity:1,
        blurRadius:17,
    },

    boxLinearGradient:{
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        borderRadius:50,
    },

    btnTxt:{
        borderRadius:10,
        color:'#FFF',
        fontSize: 40, 
        textAlign:'center',
        // borderWidth: 2,
    },
}); 

const darkThemeStyle = StyleSheet.create({

    morphTop:{
        shadowColor: colors.ShadowColorDarkTop, 
    },  
    morphBottom:{
        shadowColor:colors.ShadowColorDarkBottom,
    },

    btnTxt:{
        color:'#FFF',
    }

});
const lightThemeStyle = StyleSheet.create({
    
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
})

