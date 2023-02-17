import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const colors = {
    ShadowColorLightTop: '#ffffff',
    ShadowColorLightBottom: '#afafaf',
    ShadowColorDarkTop: '#575555',
    ShadowColorDarkBottom: '#1f1f1f',
    borderColorLight: '#e8e8e8',
    colorTxtDark: '#FFF',
    colorTxtLight: '#000',
}


export default function Clear({onTouchablePress, darkTheme}:any){
    
    const styleTheme = darkTheme ? styleDark : styleLight;

    const colorsLinear = {

        backgroundLinearLigthBTN: ['#f0f0f0','#cacaca'],
        backgroundLinearDarkBTN: ['#373737','#2e2e2e'],   
    }



    return (

        <View style={styles.contentToutchs}>
            
                <View style={[styles.morphTop, styleTheme.morphTop]}>
                    <TouchableOpacity style={[styles.morphBottom, styleTheme.morphBottom]} onPress={() => onTouchablePress('AC')}>
                        <LinearGradient colors={darkTheme ? colorsLinear.backgroundLinearDarkBTN : colorsLinear.backgroundLinearLigthBTN } end={{x:0.1, y:0.9}} style={styles.boxLinearGradient}>
                            <Text style={[styles.btnTxt, styleTheme.btnTxt]}>AC</Text>
                        </LinearGradient> 
                    </TouchableOpacity>
                </View>



                <View style={[styles.morphTop, styleTheme.morphTop]}>
                    <TouchableOpacity style={[styles.morphBottom, styleTheme.morphBottom]} onPress={() => onTouchablePress('')}>
                        <LinearGradient colors={darkTheme ? colorsLinear.backgroundLinearDarkBTN : colorsLinear.backgroundLinearLigthBTN}  end={{x:0.1, y:0.9}} style={styles.boxLinearGradient}>
                                <Text style={[styles.btnTxt, styleTheme.btnTxt]}>C</Text>
                        </LinearGradient> 
                    </TouchableOpacity>
                </View>
        </View>


    )
}

const styles = StyleSheet.create({

    contentToutchs:{
    // borderColor:'purple',
    // borderWidth: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:'15%',
        marginVertical:15,
    },

    morphTop:{
        // borderColor:'purple',
        // borderWidth: 4,
        borderRadius:10,
        width:'48%',
        height:'100%',
        shadowRadius: 9,
        shadowOffset: {width: -8, height: -8},
        shadowOpacity:1.3,
        blurRadius: 12,
    },
    morphBottom:{
        borderRadius:10,
        // borderColor:'red',
        shadowOffset: {width:8, height:8},
        shadowRadius: 9,
        shadowOpacity:1,
        height: '100%', 
        width:'100%',
        blurRadius: 12,      
        },

        boxLinearGradient:{
            height:'100%',
            justifyContent: 'center',
            borderRadius:10,
            width: '100%',
        },

    btnTxt:{
        // borderColor:'#FFF',
        // borderWidth: 2,
        fontSize: 40,
        textAlign:'center',
        margin:5,
    },

});

const styleLight = StyleSheet.create({
    morphTop:{
        borderColor: colors.borderColorLight,
        shadowColor: colors.ShadowColorLightTop,
    },
    morphBottom:{
        shadowColor: colors.ShadowColorLightBottom,
    },
    btnTxt:{
        color:colors.colorTxtLight,
    }
});

const styleDark = StyleSheet.create({
    morphTop:{
        shadowColor: colors.ShadowColorDarkTop
    },
    morphBottom:{
        shadowColor: colors.ShadowColorDarkBottom,
    },
    btnTxt:{
        color:colors.colorTxtDark,
    }
})