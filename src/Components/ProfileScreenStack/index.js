import React from "react";
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import {TouchableOpacity} from "react-native";
import Contact from "../Contact";
import Home from "../Home";
import Projects from "../Projects";
import Profile from "../Profile";

const ProfileScreenStack =()=>{
    const Stack = createNativeStackNavigator();

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>this is my profile</Text>
            {/*<Button title="Go back to Home" onPress={() => navigation.goBack(Home)} />*/}

            <Stack.Navigator initialRouteName="Profile">
              <Stack.Screen name="Profile" component={Profile}/>
              <Stack.Screen name="Contact" component={Contact}/>
              <Stack.Screen name="Projects" component={Projects}/>

            </Stack.Navigator>

        </View>
    )
}

export default ProfileScreenStack
