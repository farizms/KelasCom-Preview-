import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const MyScoursesScreen = ({}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> MyScoursesScreen </Text>
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

export default MyScoursesScreen;