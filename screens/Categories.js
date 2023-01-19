import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import StarRating from '../Components/StarRating'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

const Categories = (props) => {
  return (
    
    <View style={{ backgroundColor: 'white' }}>
      <LinearGradient
        colors={['#FF8C00', '#ffffff']}
        style={{ height: "20%" }}
      >
        <View style={{ flexDirection: 'row', marginTop: '13%', marginBottom: 20 }}>
          <View style={styles.divider} />
          <View style={styles.title}>
            <Text style={{ fontSize: 38, color: "#2D3436" }}> Book <Text style={{ fontWeight: "300", color: "white" }}>Categories</Text></Text>
          </View>
          <View style={styles.divider} />
        </View>
      </LinearGradient>



      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./images/funny.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Funny</Text>
            

            {/* <StarRating ratings={4} reviews={99} /> */}
            {/* <Text style={styles.cardDetails}>
              Description
            </Text> */}
          </View>
          
        </View>


        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./images/drama.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle} >Drama</Text>
            
            {/* <StarRating ratings={5} reviews={150} /> */}
            {/* <Text style={styles.cardDetails}>
              Description
            </Text> */}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./images/romantic.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Romance</Text>
            

            {/* <StarRating ratings={3} reviews={50} /> */}
            {/* <Text style={styles.cardDetails}>
              Description
            </Text> */}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./images/action.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Action</Text>
            {/* <StarRating ratings={2} reviews={20} /> */}
            {/* <Text style={styles.cardDetails}>
              Description
            </Text> */}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./images/horror.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Horror</Text>
            {/* <StarRating ratings={4} reviews={110} /> */}
            {/* <Text style={styles.cardDetails}>
              Description
            </Text> */}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./images/scienceFiction.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Science Fiction</Text>
            {/* <StarRating ratings={2} reviews={20} /> */}
            {/* <Text style={styles.cardDetails}>
              Description
            </Text> */}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./images/scienceFiction.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Science Fiction</Text>
            {/* <StarRating ratings={2} reviews={20} /> */}
            {/* <Text style={styles.cardDetails}>
              Description
            </Text> */}
          </View>
        </View>

      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    backgroundColor: "#FF8C00",
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    flexDirection: "row",
    fontWeight: "800",
    color: "#2D3436",
    paddingHorizontal: 30
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 15,
    flexDirection: 'row',
    shadowColor: '#999',
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
    borderColor: '#FF8C00',
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop:20,
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  }
})
export default Categories;