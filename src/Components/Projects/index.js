import React from "react";
import {Text, SafeAreaView, View, Button} from "react-native";
import Profile from "../Profile";

const Projects =({navigation})=>{
    return(
        <View>
            <Text>Projects i have done</Text>
            <Button title="Go back to Profile" onPress={() => navigation.goBack(Profile)} />
        </View>
    )
}
export default Projects
