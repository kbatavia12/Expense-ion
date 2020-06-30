import React from 'react';
import {View , Text, Stylesheet } from 'react-native';
import * as firebase from 'firebase';
import Header from '../components/Header'

const Activities = (props) => {
    return(
        <View>
             <Header 
                screenName = "Recent activities" 
                backArrowHandler = {() => props.navigation.goBack()}
                />
        </View>
    );
}



export default Activities;