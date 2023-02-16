import * as React from 'react';
import {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Switch } from 'react-native';

import OperatorSymbol from './childernsComponents/operatorSymbol';
import BtnNumber from './childernsComponents/BtnNumber';
import Clear from './childernsComponents/Clear';
import Equal from './childernsComponents/Equal';
import Point from './childernsComponents/Point';
import Screen from './childernsComponents/Screen';



export default function Calculator(){

    const [isDarckTheme, setIsDarckTheme] = useState(false);
    const numbers= [1,2,3,4,5,6,7,8,9,0];
    const [currentValue, setCurrentValue] = useState('');
    const [resultText, setResultText] = useState('0');
    const themesStyle = isDarckTheme ? darkModeStyle : lightModeStyle;


    const handleTouchablePress = (val: string) => {
        const operatorList = ['+', '-', '*', '/', '%'];

        if(val === '='){
            return handleEqualClick()
        }
        if(operatorList.includes(val) ){
            const lastChar = currentValue[currentValue.length -1];
            if(operatorList.includes(lastChar)){
                return;
            }
        }
        setCurrentValue(currentValue + val);
    }

    const handleEqualClick = () => {
        const result = eval(currentValue);
        setResultText(result);
        // onResultChange(result);
    }

    const onClearClick = (text:string) => {

        if(text === 'AC'){
            setCurrentValue('');
            setResultText('');
            return;
        }else if(text === ''){
            if(currentValue.length > 0){
                setCurrentValue(currentValue.substring(0, currentValue.length -1));
            }
        }
        setResultText(resultText + text);
    };

    const handleSetDisplayCurrentValue = (num: string) => {
        if(!currentValue.includes('.') || num !== '.'){
            setCurrentValue(`${(currentValue + num).replace(/^0+/, '')}`);
        }
    };


    return(

        <SafeAreaView style={[styles.contentAll, themesStyle.contentClavier]}>
            <Switch style={styles.Switchthem} 
                    value={isDarckTheme} 
                    onValueChange={() => setIsDarckTheme(!isDarckTheme)}
            />
            <Screen darkTheme={isDarckTheme} currentValue={currentValue} resultText={resultText}/>

            <View style={styles.contentClavier}>
                <Clear darkTheme={isDarckTheme} text={currentValue} onTouchablePress={onClearClick} />
                <View style={styles.contentSybolNumbers}>
                    <View style={styles.contentBtnAllNumbers}>
                        {numbers.map((number) => ( 
                            <BtnNumber darkTheme={isDarckTheme} key={number} currentValue={number} onTouchablePress={handleTouchablePress} />
                        ))}                            
                    </View>
                    <OperatorSymbol style={styles.operators} onTouchablePress={handleTouchablePress} />


                <Point  onTouchablePress={handleSetDisplayCurrentValue}/>
                <Equal  onTouchablePress={handleTouchablePress}/>
            </View>
        </View>
    </SafeAreaView>

        

    )
}

const styles = StyleSheet.create({

    
    contentAll:{
        width: '100%',
        justifyContent: 'center',
        // borderColor:'red',
        borderWidth: 4,
        alignItems:'flex-end',
        paddingHorizontal:200
    },
    Switchthem:{
        marginTop:80,
        // marginRight:25
    },
    contentClavier:{
        height:'80%',
        width:'100%',
        // borderColor:'yellow',
        // borderWidth: 4,
    },

    btnContentClear:{
        // borderColor:'yellow',
        // borderWidth: 4,
        width:'50%',
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
        marginHorizontal:5,
    },

        contentSybolNumbers:{
            display: 'flex',
            flexDirection:'row',
            // borderColor:'purple',
            // borderWidth: 4,
            height:'50%',
        },



        contentBtnAllNumbers:{
            // borderColor:'orange',   
            // borderWidth: 5, 
            height:'100%',
            width:'80%', 
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'wrap',  
        },

        contentAllSymbol:{
            display: 'flex',
            flexDirection:'row',
            borderColor:'blue',   
            borderWidth: 5,
            right: 0,
            width:'20%',
            height:'100%',
            justifyContent:'space-between'
        },

        operators:{

        },


        contentToutchs:{
            // borderColor:'green',   
            // borderWidth: 2,
        },


});

const darkModeStyle = StyleSheet.create({

    contentClavier:{
        backgroundColor:'#353434',

    },
});

const lightModeStyle = StyleSheet.create({

    contentClavier:{
        backgroundColor:'#d8d8d8',

    },
})



