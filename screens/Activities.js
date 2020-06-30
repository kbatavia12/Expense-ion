import React from 'react';
import {View , Text, Stylesheet } from 'react-native';
import * as firebase from 'firebase';


const Activities = (props) => {
    return(
        <View>
            <Text onPress = {() => firebase.auth().signOut()} >Dont let me down</Text>
        </View>
    );
}



export default Activities;