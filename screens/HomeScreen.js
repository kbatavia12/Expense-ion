import React from 'react';
import {View , Text, StyleSheet, Image, Dimensions, Button, Animated } from 'react-native';
import * as firebase from 'firebase'
import AddBalanceButton from '../components/AddBalanceButton'
import AddBalanceInput from '../components/AddBalanceInput';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const HomeScreen = (props) => {
    const [availableBalance, setAvailableBalance] = React.useState(null)
    const [showInput, setShowInput] = React.useState(false)
    const [balanceValue, setBalanceValue] = React.useState(0)

    React.useEffect(() => 
        firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value' , snap => {
            console.log(snap.val().availableBalance)
            setAvailableBalance(snap.val().availableBalance)
        }), []
    
    )

    const addPressHandler = () => {
        setShowInput(true)
    }

    const crossPress = () => {
        setShowInput(false)
    }

    const tickPress = () => {
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({availableBalance: balanceValue}).then(() => {
            setShowInput(false);
        })
    }


    return(
        <View>
            <Image source = {require('../background.jpg')} style = {styles.background} />
            <View>
                <View style = {styles.balanceContainer}>
                    <View>
                        <Text style = {styles.remainingBalanceText}>Remaining Balance</Text>
                    </View>
                    <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                        <Text style = {styles.balance}>₹</Text>
                        <Text style = {styles.balance}>{availableBalance}</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.addBalanceView}>
                {!showInput ? 
                <AddBalanceButton 
                    onPress = {addPressHandler} /> 
                : 
                <AddBalanceInput 
                    crossPress = {crossPress}
                    tickPress = {tickPress}
                    onChange = {edit => setBalanceValue(edit)}
                />
                }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        width : WIDTH,
        height: HEIGHT/2
    },
    balance: {
        fontSize: 80,
    },
    remainingBalanceText: {
        alignSelf: 'center',
        fontSize: 24
    },
    balanceContainer : {
        marginTop: -100, 
        alignSelf: 'center',
        backgroundColor: 'white', 
        padding: 20,
        borderRadius: 10
    },
    addBalanceView: {
        marginTop: 10
    }

})

export default HomeScreen;