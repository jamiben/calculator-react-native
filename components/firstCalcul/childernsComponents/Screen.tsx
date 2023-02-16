import react from 'react';
import {View, Text, StyleSheet} from 'react-native';


const colors = {
    backgroundScreenDark: '#555555',
    backgroundScreenLight: '#FFFFFF',
    colorTxtDark: '#FFFFFF',
    colorTxtLight:'#000',
    
}

type ScreenProps = {
    currentValue: string;
    resultText: string;
    darkTheme: boolean;
    };

export default function Screen(props:ScreenProps){

    const stylesThemes = props.darkTheme ? stylesDark : stylesLight;

    return(

    <View style={[styles.contentDispCalcul, stylesThemes.contentDispCalcul]} >
        <Text style={[styles.textData, stylesThemes.textData]}>{props.currentValue}</Text>         
        <Text style={[styles.textResult, stylesThemes.textResult]}>{props.resultText}</Text>         
    </View> 
    )

}

const styles = StyleSheet.create({

    contentDispCalcul:{
        width: '100%',
        justifyContent: 'space-between',
        height:'25%',
        padding:40,
        borderBottomEndRadius:30,
        borderRadius :30,
        top: 0,

        // borderWidth:3,
        // borderColor:'orange',
    },
    textData:{
        // borderWidth:3,
        // borderColor:'orange',
        textAlignVertical:'center',
        width: '100%',
        fontSize:30,
        textAlign:'right',
    },
    textResult:{
        // borderWidth:3,
        // borderColor:'orange',
        textAlignVertical:'center',
        width: '100%',
        fontSize:50,
        padding:0,
        textAlign:'right',
    },
});

const stylesDark = StyleSheet.create({
    contentDispCalcul:{
        backgroundColor:colors.backgroundScreenDark,
    },
    textData:{
        color:colors.colorTxtDark,
    },
    textResult:{
        color:colors.colorTxtDark,
    }
});
const stylesLight = StyleSheet.create({
    contentDispCalcul:{
        backgroundColor:colors.backgroundScreenLight,
    },
    textData:{
        color:colors.colorTxtLight,
    },
    textResult:{
        color:colors.colorTxtLight,
    }
});