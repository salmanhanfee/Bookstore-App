import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from "react-native";
import BookOverview from "../Components/BookOverview";
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const screen_width = Dimensions.get('window');

const path = "../../assets/";
const BookCovers = {
  firstbook:"9783453435773",
  secondbook:"9780743493468",
  thirdbook:"9780609810903",
  fourthtbook:"9780385516488",
  fifthbook: "9780553801507",
  sixthbook: "9780545139700",
};
const Home = () => {
  return (
    <SafeAreaView>
    <View style={styles.mainview}>

      {/* <LinearGradient
        colors={['#FF8C00', '#FF8C00']}
        style={{ height: "7%", marginBottom: 10}}
      >
      </LinearGradient> */}

      <ScrollView style={styles.container}>

        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor='#FF8C00'>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://www.scholastic.com/content/dam/scholastic/educators/book-lists/Harry-Potter-Book-List_BL_16-9.jpg.corpimagerendition.xxl.1400.788.png',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://cdn.coolofthewild.com/wp-content/uploads/2016/12/adventure-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1549122728-f519709caa9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://blog.efpsa.org/wp-content/uploads/2016/06/programming-psychologist-python-elixir-rstats-640x497.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>

        </View>
        
        {/* <View style={styles.categoryContainer}> */}

          {/* <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <FontAwesome name="bookmark" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>Saved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <FontAwesome5 name="readme" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <Entypo name="star" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>Favourite</Text>
          </TouchableOpacity> */}
{/* 
        </View> */}
        {/* <Text style={{ fontSize: 30, alignSelf: 'center', fontWeight: 'bold', marginBottom: 20, color: '#000', marginTop: 10 }}>Recently Viewed</Text> */}
        <View style= {styles.recentlyviewed}>
        <Text style={{ fontSize: 38, color: "#2D3436" }}>   Recently <Text style={{ fontWeight: "300", color: "#fa8072" }}>Viewed</Text></Text>
        </View>
        <View style={styles.shelf}>
          <BookOverview  bookisbn={BookCovers.firstbook} />
          <BookOverview  bookisbn={BookCovers.secondbook} />
          <BookOverview  bookisbn={BookCovers.thirdbook} />
          <BookOverview  bookisbn={BookCovers.fourthtbook} />
          <BookOverview  bookisbn={BookCovers.fifthbook}/>
          <BookOverview bookisbn={BookCovers.sixthbook}/>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
    
  )
};

const styles = StyleSheet.create({
  shelf: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  mainview: {
    marginTop: 0,
  },
  sliderContainer: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center'
  },
  divider: {
    marginTop: 10,
    backgroundColor: "#000",
    height: 1,
    width: '100%',
    flex: 1,
    alignSelf: 'center'
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    marginHorizontal: 0,
    alignSelf: 'center',
    marginLeft: 15
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 30
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#FF8C00',
    marginRight: 25
  },
  recentlyviewed: {
    flexDirection: "row",
    fontWeight: "800",
    color: "#2D3436",
    paddingHorizontal: 30,
    alignItems: 'center'
  }
});
export default Home;
