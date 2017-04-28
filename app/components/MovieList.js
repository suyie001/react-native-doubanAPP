'use strict';
import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import styles from '../styles/Main';
import MovieDetail from './MovieDetail';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
class MovieList extends Component {
  constructor(props){
    super(props)
     this.state={
       movies:new ListView.DataSource({
           rowHasChanged:(row1,row2)=>row1!==row2
       }),
       loaded:false
     };
     this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        movies:this.state.movies.cloneWithRows(responseData.subjects),
        loaded:true
      });
    })
    .done();
  }
  showMovieDetail(movies){
    this.props.navigator.push({
      title:movies.title,
      component:MovieDetail,
    });
  }
  renderMovieList(movies){
    return(
      <TouchableHighlight
       underlayColor="rgba(34,26,38,0.1)"
       onPress={()=>this.showMovieDetail(movies)}
       >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
            source={{uri:movies.images.large}}
             style={styles.image}
             />
          </View>
          <View style ={styles.itemContent}>
            <Text style={styles.itemHeader}>{movies.title}</Text>
            <Text style={styles.itemMeta}>{movies.original_title}({movies.year})</Text>
            <Text style={styles.redText}>{movies.rating.average}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    if (!this.state.loaded) {
      return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator size='large' color='#6435c9'/>
          </View>
        </View>
      )
    }
    return (
        <View style={styles.container}>
            <ListView
              dataSource={this.state.movies}
              renderRow={this.renderMovieList.bind(this)}
            />
        </View>
    );
  }
}


export { MovieList as default };
