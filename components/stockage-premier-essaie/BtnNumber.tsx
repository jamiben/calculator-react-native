import * as React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, SafeAreaView } from 'react-native';



export default function BtnNumbers(){


    const [calcule, setCalcule] = useState('');
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState(['+', 'x','÷', '%','-', '/','.']);
    const [initialData, setInitialData] = useState('0');
    const [data, setData] = useState('');
    const [btns, setBtns] = useState([0,1,2,3,4,5,6,7,8,9,'.','%']);

    const updateCalcul = value => {
        setCalcule(calcule + value);
    }
    const clavierOperators = operator.map((symbol) => <TouchableOpacity style={styles.contentSymbol} onPress={() => setOperator(operator)}
                                                        key={`operator-${symbol}`}>
                                                            <Text style={styles.btnTxt}>{symbol}</Text>
                                                        </TouchableOpacity>)
    const clavierNumber = btns.map((number) => <TouchableOpacity style={styles.contentBtnNumbers} onPress={() =>  setData(number.toString())}
                                                    key={number}><Text style={styles.btnTxt} >{number}</Text>
                                                </TouchableOpacity>); 

    return(  
        <SafeAreaView style={styles.contentAll}>
            <View style={styles.contentDispCalcul} >
                <Text style={styles.textData}>{initialData}{clavierOperators}{data}</Text>         
            </View>

            <View style={styles.contentClavier}>
                <View style={styles.contentBtnClears} >
                    <TouchableOpacity style={styles.btnContentClear} onPress={() => setData(data.substring(0, data.length -15))}>
                        <Text style={styles.btnTxt}>C</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.btnContentClear} onPress={() => setInitialData('')}>
                        <Text style={styles.btnTxt}>AC</Text>
                    </TouchableOpacity>        
                </View>


                <View style={styles.contentClavSymbol}>
                    <View style={styles.contentNumbers}>
                        <Text >{clavierNumber}</Text>
                    </View>

                    <View style={styles.contentSymbol}>

                        <Text style={styles.btnTxt}>{clavierOperators}</Text>
                        {/* <TouchableOpacity onPress={text => setData(data + text)}>
                            <Text style={styles.btnTxt}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setData('')}>
                            <Text style={styles.btnTxt}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setData('')}>
                            <Text style={styles.btnTxt}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setData('')}>
                            <Text style={styles.btnTxt}>÷</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setData('')}>
                            <Text style={styles.btnTxt}>=</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={e => {
                            try{
                                setData(String(eval(data)).length > 3 &&
                                String(eval(data)).includes('.') ?
                                String(eval(data).toFixed(4)) :
                                String(eval(data)) 
                                )
                            }
                            catch(error){
                                console.log(error);
                            }
                        }}
                        >
                        </TouchableOpacity> */}
                    </View>
                </View>  
            </View>   
        </SafeAreaView>                
    )
}

const styles = StyleSheet.create({
    contentAll:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentDispCalcul:{
        width: '100%',
        height: '30%',
        // backgroundColor:'red',
        justifyContent: 'center',

    },
    textData:{
        // borderWidth:3,
        // borderColor:'orange',
        textAlignVertical:'center',
        width: '100%',
        color: '#000',
        fontSize:50,
        padding:0,
        textAlign:'right',
        paddingHorizontal:30
    },

    contentClavier:{
        backgroundColor:'black',
    },


    contentBtnClears:{
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        // borderColor:'purple',
        // borderWidth: 4,
        height:90,
    },
    btnContentClear:{
        // borderColor:'yellow',
        borderWidth: 4,
        width:'50%',
        height:'100%',
        },



    contentClavSymbol:{
        display: 'flex',
        flexDirection: 'row',
    },
    contentBtnNumbers:{
        // borderColor:'orange solid 2px',    
        // backgroundColor:'yellow',  
        width:'150%', 
        flexWrap: 'wrap',  
        justifyContent: 'center',
    },
    contentNumbers:{
        width:'80%',
        // backgroundColor:'orange',
    },


    contentSymbol:{
        width:'20%',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor:'white'
    },
    btnTxt:{
        borderColor:'#FFF',
        borderWidth: 2,
        borderRadius:10,
        color:'#FFF',
        fontSize: 40,
        width: 70,
        height: 60,
        margin: 5,
        textAlign:'center'
    },
})

