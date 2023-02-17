import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const colors = {
    ShadowColorLightTop: '#ffffff',
    ShadowColorLightBottom: '#afafaf',
    ShadowColorDarkTop: '#4a4a4a',
    ShadowColorDarkBottom: '#363636',
    textColorLightBTN: '#ffffff',
    textColorDarkBTN: '#000',
    BORDERColorLIGHT: '#e8e8e8',
};

export default function OperatorSymbol({onTouchablePress, darkTheme }:any) {
    
    const themeStyles = darkTheme ? darkThemeStyle : lightThemeStyle;

    const linearColors = {
        backgroundLinearLigthBTN: ['#f0f0f0','#cacaca'],
        backgroundLinearDarkBTN: ['#353434','#3f3e3e'],  
    }
    const handlePress = (text:string) => {
        onTouchablePress(text);
    }

    return(

            <View style={styles.contentOperatorSymbol}>
                <View style={[styles.morphTop, themeStyles.morphTop]}>
                    <LinearGradient colors={darkTheme ? linearColors.backgroundLinearDarkBTN : linearColors.backgroundLinearLigthBTN} style={styles.boxLinearGradient}>
                        <TouchableOpacity style={[styles.morphBottom, themeStyles.morphBottom]} onPress={() => handlePress('+')}>
                            <Text style={[styles.btnTxt, themeStyles.btnTxt]}>+</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={[styles.morphTop, themeStyles.morphTop]}>
                    <LinearGradient colors={darkTheme ? linearColors.backgroundLinearDarkBTN : linearColors.backgroundLinearLigthBTN} style={styles.boxLinearGradient}>
                        <TouchableOpacity style={[styles.morphBottom, themeStyles.morphBottom]} onPress={() => handlePress('*')}>
                            <Text style={[styles.btnTxt, themeStyles.btnTxt]}>x</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={[styles.morphTop, themeStyles.morphTop]}>
                    <LinearGradient colors={darkTheme ? linearColors.backgroundLinearDarkBTN : linearColors.backgroundLinearLigthBTN} style={styles.boxLinearGradient}>
                        <TouchableOpacity style={[styles.morphBottom, themeStyles.morphBottom]} onPress={() => handlePress('/')}>
                            <Text style={[styles.btnTxt, themeStyles.btnTxt]}>÷</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={[styles.morphTop, themeStyles.morphTop]}>
                    <LinearGradient colors={darkTheme ? linearColors.backgroundLinearDarkBTN : linearColors.backgroundLinearLigthBTN} style={styles.boxLinearGradient}>
                        <TouchableOpacity style={[styles.morphBottom, themeStyles.morphBottom]} onPress={() => handlePress('-')}>
                            <Text style={[styles.btnTxt, themeStyles.btnTxt]}>-</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    contentOperatorSymbol:{
        display:'flex',
        flexDirection:'column',
        // borderColor:'green', 
        // borderWidth: 5, 
    },    
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
        // borderColor:'red',   
        // borderWidth: 5,   
        height: '100%',
        width: '100%',
        shadowOffset:{width:6, height:6},
        shadowRadius: 7,
        shadowOpacity:1,
        blurRadius:17,
        borderRadius:50,
        marginTop:10,
    },

    boxLinearGradient:{
        height: '100%',
        width: '100%',
        borderRadius:50,
    },

    btnTxt:{
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