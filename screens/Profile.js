import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const profile = (props) => {
  const navigation = useNavigation();
    // const { name,  email, phone } = props.route.params.Item
    const OpenDial = () => {
        if (Platform.OS === 'android') {
            Linking.openURL("tel:9834582401")
        }
        else {
            Linking.openURL("telprompt:9834582401")
        }

    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={['#1C1E1D', '#ffffff']}
                style={{ height: "20%" }}
            >
                <View style={{ flexDirection: 'row', marginTop: "10%" }}>
                    <View style={styles.divider} />
                    <View style={styles.title}>
                        <Text style={{ fontSize: 38, color: "#2D3436" }}> Personal <Text style={{ fontWeight: "300", color: "white" }}>Profile</Text></Text>
                    </View>
                    <View style={styles.divider} />
                </View>
            </LinearGradient>


            <View style={styles.imagestyle}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, margin: -50,resizeMode: 'contain' }}
                    source={require('./images/sal.png')}
                />
            </View>

            <View style={{ alignItems: "center", marginTop: 55, margin: 15 }}>
                <Title>Salman Hanafee</Title>

            </View>

            <Card style={styles.mycard} onPress={() => { Linking.openURL("mailto:salman.hanafee@gslab.com") }}>
                <View style={styles.cardconent}>
                    <MaterialIcons style={{ margin: 4 }} name="email" size={32} color='#708090' />
                    <Text style={{ marginTop: 12, fontSize: 15 }}>salman.hanafee@gslab.com</Text>

                </View>
            </Card>


            <Card style={styles.mycard} onPress={() => { OpenDial() }}>
                <View style={styles.cardconent}>
                    <Entypo style={{ margin: 4 }} name="phone" size={32} color='#708090' />
                    <Text style={{ marginTop: 10, fontSize: 15 }}>+91 9834582401</Text>
                </View>
            </Card>

            <Card style={styles.mycard} >
                <View style={styles.cardconent}>
                    <FontAwesome5 style={{ margin: 4 }} name="home" size={24} color='#708090' />
                    <Text style={{ marginTop: 7, fontSize: 15}}>    Nagpur</Text>
                </View>
            </Card>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, color: '#708090' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Button icon="account-edit" color="#708090" mode="contained" >
                    logout
             </Button>
                </TouchableOpacity>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    imagestyle: {
        alignItems: 'center',
        marginTop: 30
    },
    mycard: {
        margin: 5,
        marginTop: 10
    },
    cardconent: {
        flexDirection: 'row',
        padding: 5
    },
    divider: {
        backgroundColor: "grey",
        height: 5,
        flex: 1,
        alignSelf: 'center'
    }
})
export default profile;