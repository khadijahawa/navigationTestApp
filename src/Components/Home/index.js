import  React from "react";
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Contact from "../Contact";
import profile from "../Profile";

const Home =()=>{

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}

export default Home
