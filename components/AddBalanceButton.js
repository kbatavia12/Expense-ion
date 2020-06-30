import React from 'react';
import {View , Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity, Animated} from 'react-native';
import * as firebase from 'firebase'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';


const AddBalanceButton = props => {
    
    
    return(
        <TouchableOpacity onPress = {props.onPress} style ={styles.container}>
            <View style = {styles.mainView}>
                <Material name = "plus-circle-outline" style = {styles.plus} />
                <Text style = {styles.addText}>Add Monthly Budget</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height : 80,
    },
    mainView: {
        flexDirection: 'row'
    },
    plus: {
        fontSize: 70,
        alignSelf: 'center',
        color: '#399787'
    },
    addText: {
        fontSize: 30,
        alignSelf: 'center'
    }
})


export default AddBalanceButton;