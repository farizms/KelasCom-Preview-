import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const SearchScreen = ({}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> SearchScreen </Text>
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

export default SearchScreen;