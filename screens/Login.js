import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,ImageBackground,Platform} from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, KeyboardAvoidingView } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
// import {auth} from '../firebase';
import ScreenStack from './ScreenStack';
import Home from './Home';
// import firebase from "firebase/compat/app";
// import {onAuthStateChanged} from "firebase/auth";
function Login() {
    // const [email, setEmail] = useState('')
    // const[password, setPassword] = useState('')
    const navigation = useNavigation();
    // const firebaseApp = firebase;
    // useEffect(() => {
    //     onAuthStateChanged(auth, user => {
    //         if(user) {
    //             navigation.navigate("ScreenStack")
    //         }
    //     })
       
    // }, [])

    // const handleLogin = () => {
    //     auth
    //     .signInWithEmailAndPassword(email,password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log('Logged In with :',user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }
    return(
    <KeyboardAvoidingView>
        {/* style = {styles.container} */}
            <View style={styles.header} >
          <ImageBackground style={styles.background}
            source={require("../screens/images/book_icon.png")}>
          </ImageBackground>
          
        </View>
            <View style = {styles.Middle}>
                <Text style = {styles.BooksoreText}> BOOKSTORE </Text>
            </View>
            <View style = {styles.text2}>
                <Text> Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style = {styles.signupText}> Signup</Text>
                </TouchableOpacity>
            </View>
            {/*Username or email field*/}
            
            <KeyboardAvoidingView style ={styles.buttonStyle}>
                <View style = {styles.emailInput}>
                    
                    <Input 
                        InputLeftElement={
                            <Icon 
                                as = {<MaterialCommunityIcons name="email"/>}
                                size="sm"
                                m = {2}
                                _light = {{
                                    color : 'black',
                                }}
                                _dark={{
                                    color: "gray.300",
                                }}
                            />
                        }
                        variant = "outline"
                        placeholder="Email"
                        // value={email}
                        // onChangeText={text => setEmail(text)}
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.500",
                        }}
                    />               
                 </View>
             </KeyboardAvoidingView>
             {/*Password */}
             <View style ={styles.buttonStyleX}>
                 <View style={styles.emailInput}>
                     <Input 
                         InputLeftElement={
                             <Icon 
                                 as = {<FontAwesome5 name = "key"/>}
                                 size = "sm"
                                 m ={2}
                                 _light={{
                                     color: "black"
                                 }}
                                 _dark={{
                                     color: "gray.300"
                                 }}
                             />
                         }
                         variant = "outline"
                         secureTextEntry= {true}
                         placeholder="Password"
                        // value={password}
                        // onChangeText={text => setPassword(text)}
                         _light = {{
                             placeholderText: "blueGray.400",
                         }}
                         _dark={{
                             placeholderTextColor: "blueGray.500"
                         }}
                     />
                 </View>
             </View>

             {/*Button */}


             <View style ={styles.buttonStyle}>
                    <Button style ={styles.buttonDesign}>
                    <TouchableOpacity onPress={() => navigation.navigate("ScreenStack")}>
                     <Text>LOGIN</Text>
                    </TouchableOpacity>
                     </Button>
             </View>
             {/* Line */}
             <View style ={styles.lineStyle}>
                <View style = {{flex:1, height:1, backgroundColor:'black' }} />
                <View>
                    <Text style ={{width:50, textAlign:'center'}}>OR</Text>
                </View>
                <View style = {{flex:1, height:1, backgroundColor:'black' }} />
             </View> 
            
        {/* box */}
            <View style = { styles.boxStyle}>
                <Box 
                 onPress = {() => navigation.navigate('#')}
                style={{height:80, width:80, marginLeft: 20}}
                shadow ={3}
                _light={{
                    backgroundColor : "gray.50",
                }}
                _dark={{
                    backgroundColor: "gray.700",
                }}
                >
                    <AspectRatio ratio={1/1}>
                        <Image 
                            roundedTop = "lg"
                            source = {{
                                uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
                            }}
                            alt ="image"
                        />
                    </AspectRatio>
                </Box>

                <Box 
                 onPress = {() => navigation.navigate('#')}
                style={{height:80, width:80, marginLeft: 20}}
                shadow ={3}
                _light={{
                    backgroundColor : "gray.50",
                }}
                _dark={{
                    backgroundColor: "gray.700",
                }}
                >
                    <AspectRatio ratio={1/1}>
                        <Image 
                            roundedTop = "lg"
                            source = {{
                                uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png"
                            }}
                            alt ="image"
                        />
                    </AspectRatio>
                </Box>

            </View>
        </KeyboardAvoidingView>
    )
}


export default () => {
    return(
        <NativeBaseProvider>
            <Login />
        </NativeBaseProvider>
    )
}
const image_width = Dimensions.get('window').width;
const image_height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    // container :{
    //     flex: 1,
    //     backgroundColor: '#fff',
    // },
    BooksoreText: {
         marginTop: 320,
        fontSize: 30,
        fontWeight: 'bold',
        color: "#ff9933"
    },
    Middle:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    signupText: {
        fontWeight: 'bold',
        color:"blue"
    },
    emailInput: {
        marginTop:10,
        marginRight:5,
    },
    buttonStyle:{
        marginTop: 30,
        marginLeft:15,
        marginRight: 15,
    },
    buttonStyleX:{
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonDesign: {
        backgroundColor: '#026efd'
    },
    lineStyle: {
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        alignItems:'center',
    },
    boxStyle:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        justifyContent:'space-around'
    },
    background: {
        flex: 5,
        width: image_width-50,
        height: image_height / 2 -50,
      },
      header: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
      },
})