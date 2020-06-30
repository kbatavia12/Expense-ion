import React from 'react';
import {View , Text, StyleSheet ,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import AddActivityCard from '../components/AddActivityCard';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const AddActivityScreen = (props) => {
    return(
        <View>
            <AddActivityCard 
                icon = {
                <View style = {styles.iconView}>
                    <View style = {styles.smallView}>
                        <Entypo style = {styles.travelIcon} name = "aircraft-take-off"/>
                    </View>
                </View>}
                name = "Travel"
            /> 
            
            <AddActivityCard 
                icon = {
                <View style = {styles.foodView}>
                    <View style = {styles.smallView}>
                        <MaterialCommunity style = {styles.travelIcon} name = "food"/>
                    </View>
                </View>}
                name = "Travel"
            /> 
            
            <AddActivityCard 
                icon = {
                <View style = {styles.hospitalView}>
                    <View style = {styles.smallView}>
                    <FontAwesome style = {styles.travelIcon} name = "hospital"/>
                    </View>
                </View>}
                name = "Travel"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    travelIcon: {
        fontSize: 30,
        color: 'white',    
    },
    iconView: {
        padding: 10,
        backgroundColor: '#450b91',
    },
    smallView: {
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'white',
        padding: 10
    },
    foodView: {
        padding: 10,
        backgroundColor: '#c7ea46',
    },
    hospitalView: {
        padding: 10,
        backgroundColor: '#dc143c'
    }
})


export default AddActivityScreen;