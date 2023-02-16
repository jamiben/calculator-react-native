// import React from 'react';
// import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import {LinearGradient} from 'expo-linear-gradient';


// export default ({onPress, text, size, them}:any) =>{

//     const buttonStyle = [styles.button];
//     const textStyle = [styles.text];
    


//     if(them === 'dark'){
//         buttonStyle.push(styles.buttonDark);
//     }else if (them === 'light'){
//         buttonStyle.push(styles.buttonLight);
//     }

//     return(

//         <View style={styles.morphTop}>
//         <TouchableOpacity onPress={onPress} style={buttonStyle}>
//             <LinearGradient colors={['#cacaca', '#f0f0f0']} end={{x:0.1, y:0.9}} style={styles.boxLinearGradient}>
//                 <Text style={textStyle}>AC</Text>
//             </LinearGradient> 
//         </TouchableOpacity>
//     </View>

//     )
// }

// const styles = StyleSheet.create({

//     button:{

//     }
// })