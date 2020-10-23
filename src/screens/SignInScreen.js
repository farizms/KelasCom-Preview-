import React, {useState} from 'react';
import {View, Text, TouchableOpacity,ImageBackground, StyleSheet, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.image}>
                <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                    />
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.logintab}>
                
                <Text style={styles.logintext}>Masuk Ke Akun Anda</Text>
                <View style={styles.loginrow}>
                <FontAwesome 
                    name="user-o"
                    color={styles.icon}
                    size={20}
                />
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
                </View>
                { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
                <View style={styles.loginrow}>
                <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                </View>
                { data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
                }

                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={{color: 'white', marginTop:15,marginLeft:25}}>not registered yet?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MainTabScreen')}>
                    <View style={styles.button}>
                    <Text style={{textAlign:'center',marginVertical:10,color:'black',fontSize:18,fontWeight:'bold'}}>Login</Text>
                    </View>
                </TouchableOpacity>

                </Animatable.View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container :{
        flex:1
    },
    image : {
        height: '100%',
        width: '100%'
      },
    logo : {
        height: 75,
        width : 75,
        alignSelf : 'center',
        marginTop: '30%'
      },
    logintab: {
        marginTop:100,
        height: 350,
        width:350,
        alignSelf:'center',
        backgroundColor:'#231f20',
        shadowRadius:5,
        shadowOpacity:100,
        borderWidth:1,
        borderRadius:10
    },
    logintext:{
        fontSize:18,
        color:'#c19b70',
        marginLeft:25,
        marginTop:20
    },
    loginrow:{
        flexDirection:'row',
        borderWidth:1,
        backgroundColor:'white',
        marginHorizontal:25,
        borderRadius:5,
        marginTop:25,
        paddingTop:10,
        paddingLeft:5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: 'white',
        fontSize: 14,
        marginLeft:25
    },
    button:{
        borderRadius:20,
        backgroundColor:'#c19b70',
        height:50,
        width:150,
        alignSelf:'center',
        marginVertical:25
    }
})

export default SignInScreen;