import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet,Image,TextInput, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native-paper';
import { AntDesign } from "@expo/vector-icons";


function Search({navigation},props) {
    const [result, setResult] = useState([]);
    const [searching, setSearching] = useState(false);
    const [search,setSearch] = useState('');
    const [apiKey, setApiKey] = useState('AIzaSyBRAvBpIYDpUfYN3_5gK8q9ksj2nNbhljA');
    function onClear(){
        setSearch('');
        result.length =0;
    }
    function onSearch(text){
        setSearch(text);
        if(search.length == 0){
            result.length = 0;
            return;
        }
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+text+'&key='+apiKey+'&maxResults=40')
        .then(function (response) {
            // handle success
            setResult(response.data.items);
        });
        
        
        setSearching(true);
        setTimeout(() => {
            const searchedBooks = result.filter((books)=> books.volumeInfo.title.toLowerCase().indexOf(text.toLowerCase())!== -1)
            setSearching(false);
        },3000);
    }
    
    
    return (
        
        <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.background}>
        <AntDesign name="search1" style={styles.Icon} />
            <TextInput style={styles.input}
            onChangeText={(text) => onSearch(text)}
            value={search}
            placeholder="Search Books..."/>
            
            {searching ? <ActivityIndicator style={{marginRight:'5%'}} size={'small'} animating={true} color='#87ceeb'/>:null}
        </View>
        {searching ? <ActivityIndicator style={{alignSelf:'center'}} size={'large'} animating={true} color='#87ceeb'/>:null} 
        <ScrollView style={{marginTop:20,}}>
            <View style={styles.listContainer}>
             
            {result.map((items, index) => {
                if(items.volumeInfo.imageLinks !== undefined){
                    return(
                    
                        <View key={items.id} style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image
                                    source={{ uri: items.volumeInfo.imageLinks.thumbnail }}
                                    resizeMode="stretch"
                                    style={styles.cardImg} />
                            </View>
                            <View style={styles.cardInfo}>
                            {searching ? null : <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', items.volumeInfo)}>
                            {searching ? null : <Text style={styles.cardTitle}>{items.volumeInfo.title}</Text>}
                            
                             </TouchableOpacity>}
                            </View>
                            </View>
                        /* </View><View key={items.id} style={styles.listItems}>

                                {searching ? null : <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', items.volumeInfo)}>
                                    <Image source={{ uri: items.volumeInfo.imageLinks.thumbnail }} style={styles.imageSize} resizeMode='contain' />
                                </TouchableOpacity>}
                                {searching ? null : <Text>{items.volumeInfo.title}</Text>}
                            </View></> */
                    );
                }
            })}
            </View>     
            </ScrollView>
            </SafeAreaView>
            </View>
            
    )}
export default Search;

const styles = StyleSheet.create({
    container :{
            flex: 1,
            backgroundColor: '#fff',
        },
        Icon: {
            marginLeft: 10,
            fontSize: 24,
            color: "#87ceeb",
            alignSelf: "center",
          },
      title: {
        flexDirection: "row",
        fontWeight: "800",
        color: "#87ceeb",
        paddingHorizontal: 30
      },
      shelf: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
      },
      input: {
        width: 300,
        height: "80%",
        alignSelf: "flex-start",
        paddingLeft: 5,
        marginLeft: 5,
      },
      background: {
        width: "95%",
        alignSelf: "center",
        height: 60,
        flexDirection: "row",
        borderRadius: 10,
        borderColor: "#87ceeb",
        borderWidth: 3,
      },

      card: {
        height: 100,
        marginVertical: 15,
        flexDirection: 'row',
        shadowColor: '#87ceeb',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#87ceeb',
        borderWidth: 1,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
      },
      cardTitle: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop:20,
        fontWeight: 'bold',
      },

    });












// import { AntDesign } from "@expo/vector-icons";
// import React from "react";
// import { TextInput, View, Dimensions, StyleSheet, Image } from "react-native";
// import SearchBar from "../Components/SearchBar";

// const Search = () => {
//   return ( <View style={{ marginTop: 50 }}>

//     {/* <SearchBar /> */}
//     <View >
//     <AntDesign name="search1" style={styles.Icon} />
//     <TextInput
//       placeholder="Search Books..."
//     />
//   </View>

//   </View>
// );
// };

// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.7 * 0.4;

// const styles = StyleSheet.create({
//   logoStyle: {
//     width: height_logo,
//     height: height_logo,
//     alignSelf: 'center',
//     alignItems: 'center',
//     alignContent: 'center',
//     marginTop: 150
// }})

// export default Search;







// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import { View, StyleSheet,Image,TextInput } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { AntDesign } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import SearchOverview from "../Components/SearchOverview";
// // const HEIGHT = 220, WIDTH = 125;
// // const screen_width = Dimensions.get('window');


// const nav = useNavigation();
// const Search = () => {
//   const [stitle, usestitle] = useState('')
//   function onSearch(text){
//     usestitle(text);
//         return;
//     }
//   return (
//     <SafeAreaView>
//     <View style={styles.background}>
//       <AntDesign name="search1" style={styles.Icon} />
//       <TextInput
//         style={styles.input}
//         placeholder="Search Books..."
//         onChangeText={text => onSearch(text)}
//         value={stitle}
//       />
      
//     </View>

//     <View style={styles.shelf}>
//           <SearchOverview  stitle={stitle}/>
//     </View>
    
//     </SafeAreaView>
//   )};
//   export default Search;
// const styles = StyleSheet.create({
//   background: {
//     width: "95%",
//     alignSelf: "center",
//     height: 60,
//     flexDirection: "row",
//     borderRadius: 10,
//     borderColor: "#87ceeb",
//     borderWidth: 3,
//   },
//   Icon: {
//     marginLeft: 10,
//     fontSize: 24,
//     color: "#87ceeb",
//     alignSelf: "center",
//   },
//   input: {
//     width: 300,
//     height: "80%",
//     alignSelf: "center",
//     paddingLeft: 5,
//     marginLeft: 5,
//   },
//   divider: {
//     backgroundColor: "#87ceeb",
//     height: 1,
//     flex: 1,
//     alignSelf: 'center'
//   },
//   title: {
//     flexDirection: "row",
//     fontWeight: "800",
//     color: "#87ceeb",
//     paddingHorizontal: 30
//   },
//   shelf: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "flex-start",
//   },
// });