import React, { useState } from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {Input, NativeBaseProvider, Button, Icon, Box, AspectRatio,Image} from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

function Signup () {
    
    // const [email, setEmail] = useState('')
    // const[password, setPassword] = useState('')

    // const handleSignUp = () => {
    //     auth
    //     .createUserWithEmailAndPassword(email,password)
    //     .then(UserCredentials => {
    //         const user = UserCredentials.user;
    //         console.log('Registered with :',user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }

    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
         <View style = {styles.Middle}>
            <Text style = {styles.LoginText}> Signup</Text>
         </View>
        
         <View style = {styles.text2}>
            <Text> Already have an account?</Text>
             <TouchableOpacity onPress={() => navigation.navigate("Login")}>
             <Text style ={styles.loginText}> Login</Text>
            </TouchableOpacity>
            </View>

        {/* Email Field */}
        <View style = {styles.buttonStyleX}>
        <View style = {styles.emailInput}>
            <Input 
                InputLeftElement={
                    <Icon
                        as = {<MaterialCommunityIcons name ="email" />}
                        size = "sm"
                        m={2}
                        _light={{
                        color: "black",
                        }}
                        _dark={{
                        color:"gray.300",
                    }}
                    />
                }
                variant ="outline"
                placeholder ='Email'
                // value={email}
                // onChangeText={text => setEmail(text)}
                _light={{
                    placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                    placeholderTextColor: "blueGray.50",
                }}
            />
             </View>

         </View>
         

        {/* Password */}
        <View style = {styles.buttonStyleX}>
        <View style = {styles.emailInput}>
            <Input 
                InputLeftElement={
                    <Icon
                        as = {<FontAwesome5 name ="key" />}
                        size = "sm"
                        m={2}
                        _light={{
                        color: "black",
                        }}
                        _dark={{
                        color:"gray.300",
                    }}
                    />
                }
                variant ="outline"
                secureTextEntry={true}
                placeholder ='Password'
                // value={password}
                // onChangeText={text => setPassword(text)}
                _light={{
                    placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                    placeholderTextColor: "blueGray.50",
                }}
            />
             </View>

         </View>

         {/* Repeat Password */}
        <View style = {styles.buttonStyleX}>
        <View style = {styles.emailInput}>
            <Input 
                InputLeftElement={
                    <Icon
                        as = {<FontAwesome5 name ="key" />}
                        size = "sm"
                        m={2}
                        _light={{
                        color: "black",
                        }}
                        _dark={{
                        color:"gray.300",
                    }}
                    />
                }
                variant ="outline"
                secureTextEntry={true}
                placeholder ='Repeat Password'
                _light={{
                    placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                    placeholderTextColor: "blueGray.50",
                }}
            />
             </View>

         </View>
         {/* Button */}
         <View style ={styles.buttonStyle}>
            <Button style = {styles.buttonDesign}>
            <TouchableOpacity onPress={() => navigation.navigate("ScreenStack")}>
                <Text>REGISTER</Text>
             </TouchableOpacity>
            </Button>
           
         </View>
         
         {/* Line */}
        <View style= {styles.lineStyle}>
            <View style = {{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={{width:50, textAlign:'center'}}> Or</Text>
            </View>
            <View style = {{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

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
        </View>
    )
}

export default() => {
    return(
        <NativeBaseProvider>
            <Signup/>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    LoginText:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold',
    },
    Middle:{
        alignItems:'center',
        justifyContent: 'center',
    },
    text2: {
        flexDirection:'row',
        justifyContent:'center',
        paddingTop: 5,
    },
    signupText: {
        fontWeight: 'bold',
    },
    emailInput:{
        marginTop:10,
        marginLeft:15,
    },
    buttonStyle:{
        marginTop:30,
        marginLeft: 15,
        marginRight:15,
    },
    buttonStyleX:{
        marginTop:12,
        marginLeft:15,
        marginRight:15,
    },
    buttonDesign:{
        
        backgroundColor:'#026efd'
    },
    lineStyle:{
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
        justifyContent:'space-around',
    },
    loginText: {
        fontWeight: 'bold',
        color:"blue"
    },
})
