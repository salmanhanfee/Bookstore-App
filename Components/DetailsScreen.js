import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LikeButton from '../Components/LikeButton';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;
const navigation = useNavigation;
const DetailsScreen = ({navigation,route}) => {
    const imgsrc = route.params.imageLinks.thumbnail
    const title = route.params.title
    const author = route.params.authors
    const description = route.params.description
    console.log(author)
    return (

        <View>
            <View style={styles.top}>
                <Image source={{uri:imgsrc}} style={styles.Coverimg} />
                <View style={styles.btn}>
                    <LikeButton/>
                </View>
            </View>

            <View style={styles.bot}>
                <ScrollView>
                <View style={styles.textview}>
                    <Text style={styles.header}>{title}</Text>
                    <Text style={styles.normaltext}>by:{author}</Text>
                    <Text style={styles.header}>Description</Text>
                    <Text style={styles.normaltext}>{description}</Text>
                </View>
                </ScrollView>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({

    top: {
        height: "40%",
        width: "100%",
    },
    bot: {
        height: "70%",
        width: "100%",
    },

    Coverimg: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch"
    },

    textview: {
        marginTop: 10,
        marginLeft: 10,


    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 7,
        color: "black",

    },
    normaltext: {
        fontSize: 15,
        marginLeft: 7,
        marginTop: 5,
        color: "black",
    },
    btn: {
        position: 'absolute',
        marginTop: screen_height*40/100 - 40,
        marginLeft: screen_width-80,
    }
});
export default DetailsScreen;


