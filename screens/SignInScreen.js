import React, { useState } from 'react';
import {View , Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


const SignInScreen = ({navigation}) => {
    const [userEmail, setuserEmail] = useState();
    const [userPassword, setuserPassword] = useState();

    const signInHandler = () => {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        // .then(userCreds => {
        //     if (!userCreds.emailVerified) {
        //         setTimeout(() => firebase.auth().signOut(), 100)
        //     }
        // })
    }
    
    
    return(
        <View>
            <Image source = {require('../LoginBackground.jpg')} style = {styles.background} />
            
            <View style = {styles.welcomeView} >
                <Text style = {styles.welcomeText, {alignSelf: 'center', fontSize: 19}}>Welcome Back..</Text>
                <Text style = {styles.welcomeText}>We'll help you keep account of</Text>
                <Text style = {styles.welcomeText , {alignSelf: 'center'}}>your money</Text>
            </View>
            
            <View style = {styles.credentialsView}>
            <View style = {styles.individualViews}>
                    <Text style = {styles.credentialName}>Email</Text>
                    <TextInput onChangeText = {(email) => setuserEmail(email) } placeholder = "Enter your email" style = {styles.input}  />
                </View>
                <View style = {styles.individualViews}>
                    <Text style = {styles.credentialName}>Password</Text>
                    <TextInput  onChangeText = {(password) => setuserPassword(password) } placeholder = "Enter your password" style = {styles.input} />
                </View>
            </View>
            
            <TouchableOpacity onPress = {signInHandler} style = {styles.signInButton}>
                <Text style = {styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <View style = {styles.newToView}> 
                <Text>New to Expense-ion?  </Text>
                <TouchableOpacity onPress = {() => navigation.navigate('Sign up')} >
                    <Text style = {styles.gotoSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        width : WIDTH,
        height: HEIGHT/3,
    },
    welcomeView: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: -25,
        width: '72%',
        alignSelf: 'center',
        padding: 10,
    },
    welcomeText: {
        fontSize: 17,
    },
    credentialsView: {
        marginLeft: 50,
        marginTop: 30,
    },
    credentialName: {
        fontSize: 18,
        marginBottom: 7
    },
    individualViews: {
        marginBottom: 20
    },
    input: {
        borderBottomColor: '#a9a',
        borderBottomWidth: 0.5,
        padding: -5,
        width: '80%'
    },
    signInButton: {
        borderWidth: 0.5,
        borderColor: '#ece',
        backgroundColor: '#399787',
        borderRadius: 10,
        width: 100,
        height: 50,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    signInText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    newToView: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    gotoSignUp: {
        borderBottomColor: '#a9a',
        borderBottomWidth: 0.5,
        color: '#399787'
    }
})
export default SignInScreen