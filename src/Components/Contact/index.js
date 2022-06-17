import React from "react";
import {Button, Text,SafeAreaView,View} from "react-native";
import Profile from "../Profile";

const Contact =({navigation})=>{
    return (
        <View>
        <Text>contact me</Text>
            <Button title="Go back to Profile" onPress={() => navigation.goBack(Profile)} />
        </View>
    );
};

export default Contact;
