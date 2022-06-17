import React from "react";
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import {TouchableOpacity} from "react-native";
import Contact from "../Contact";
import Home from "../Home";
import Projects from "../Projects";

const Profile =({navigation})=>{


    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>this is my profile details</Text>
            <Button title="Go back to Home" onPress={() => navigation.goBack(Home)} />
            <Button title="Go Projects" onPress={() => navigation.navigate('Projects')} />
            <Button title="Go Contact" onPress={() => navigation.navigate('Contact')} />
        </View>
    )
}

export default Profile
