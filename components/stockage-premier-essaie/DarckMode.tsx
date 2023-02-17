import * as React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Switch }  from 'react-native';
import { SafeAreaView } from 'react-native';

export default function DarkMode(){

    const [darckTheme, setDarckTheme] = useState(false);
    const color = {
        light: '#FFF',
        darkBtn: '(60, 179, 113)',
        dark:'#000'

    }

    return(
        <Switch value={darckTheme} 
        onValueChange={() => setDarckTheme(!darckTheme)}
        thumbColor={darckTheme ? color.light : color.darkBtn}
        trackColor={{false: color.light,  true: color.dark}}
/>
    )
}
