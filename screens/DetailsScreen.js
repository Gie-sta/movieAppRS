import React,{useState,} from 'react'
import {StyleSheet, Image, Text, View, ScrollView, Dimensions } from 'react-native';

import { IMAGE_URL } from '../api/constants';
import Button from '../components/Button';
import MoviesList from '../components/MoviesList';
import { fethchRecomended } from '../api/requests';
import ErrorMesage from '../components/ErrorMesage';


const DetailsScreen = (props) => {
const[id, setId] = useState('')


// setMovie(props.route.params)
  const movie = props.route.params;
  // console.log(movie)
  
  // console.log(movie)
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.movieContainer}>
        <Image
        style={styles.image}
        source={{
          uri: `${IMAGE_URL}${movie.imgUrl}`,
        }}/>
        <Text style={styles.details}>Movie Details</Text>
        <Text style={styles.title}><Text style={styles.titleName}> Title: </Text>{movie.title}</Text>
        <Text style={styles.title}><Text style={styles.titleName}> Release date: </Text>{movie.date}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>

      </View>
      <View style={styles.btnContiner}>
        <Button
            text='Play Movie'
            onPress={() =>
            props.navigation.navigate('Player', {title: movie.title, id:movie.id}
            )}
          />
        <Button
            text='Add To Library'/>
      </View>
      <View style={styles.listContainer}>
        <MoviesList 
        id={movie.id}
        navigation={props.navigation}
        categoryTitle={'Recomended Similar Movies'}
        category={fethchRecomended(movie.id)}/>
      </View>
    
    </ScrollView>
   
   
  )
}
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollContainer:{
    padding: 15,
    backgroundColor: '#0d253f'
    },
    movieContainer: {
      padding: 5,
    backgroundColor: '#0D2948',
    

    },
  image: {
    width: (deviceWidth * 95) / 100,
    height: (deviceHeight * 40) / 100,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  details:{
    fontWeight: 'bold',
    fontSize:25,
    color: '#E0E6ED',
    paddingLeft:4

  },
  title:{
    color: '#E0E6ED'

  },
  titleName: {
    fontWeight: 'bold',
    color: '#E0E6ED',
    letterSpacing:1.2

  },
  overview:{
    textAlign: 'justify',
    marginLeft:4,
    marginRight:4,
    color: '#E0E6ED'

  },
  btnContiner:{
    marginBottom: 20,
    marginTop: 20,
    marginLeft:4
  },
  listContainer:{
    minHeight: 280,
    marginBottom: 30

  }
})

export default DetailsScreen
