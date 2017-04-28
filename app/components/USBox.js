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

const REQUEST_URL = 'https://api.douban.com/v2/movie/us_box';
class USBox extends Component {
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
  renderMovieList(movies){
    return(
      <TouchableHighlight
       underlayColor="rgba(34,26,38,0.1)"
       onPress={()=>{
         console.log(`《${movies.subject.title}》被点了！`);
       }}
       >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
            source={{uri:movies.subject.images.large}}
             style={styles.image}
             />
          </View>
          <View style ={styles.itemContent}>
            <Text style={styles.itemHeader}>{movies.subject.title}</Text>
            <Text style={styles.itemMeta}>{movies.subject.original_title}({movies.subject.year})</Text>
            <Text style={styles.redText}>{movies.subject.rating.average}</Text>
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
          renderRow={this.renderMovieList}
        />
        </View>
    );
  }
}


export { USBox as default };
