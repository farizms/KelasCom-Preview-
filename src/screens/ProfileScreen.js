import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const ProfileScreen = ({}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> ProfileScreen </Text>
        </View>
    );
}

const styles = StyleSheet.create({title:{
    justifyContent:'center',
    textAlign:'center',
    fontSize:18
},
container : {
    flex:1
}})

export default ProfileScreen;