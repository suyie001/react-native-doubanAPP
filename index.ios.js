/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  ListView,
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';
import styles from './app/styles/Main';
import MovieList from './app/components/MovieList';
import USBox from './app/components/USBox';
import icons from './app/Assets/Icons';
import Featured from './app/components/Featured';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
class clickMe extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab:'us_box'
    };
  }
  render() {
    return (
        < TabBarIOS barTintColor="darkslateblue" tintColor="white">
          <TabBarIOS.Item
           icon ={{uri:icons.star,scale:4.6}}
           title='推荐电影'
           selectedIcon ={{uri:icons.starActive,scale:4.6}}
           selected={this.state.selectedTab ==='featured'}
           onPress ={()=>{
             this.setState({
               selectedTab:'featured'
             });
           }}
          >
            <Featured/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
          icon ={{uri:icons.board,scale:4.6}}
          title='北美票房'
          selectedIcon ={{uri:icons.boardActive,scale:4.6}}
           selected={this.state.selectedTab==='us_box'}
           onPress={()=>{
             this.setState({
               selectedTab:'us_box'
             })
           }}
           >
            <USBox/>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}




AppRegistry.registerComponent('clickMe', () => clickMe);
