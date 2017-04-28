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

class MovieDetail extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.loading}>
          <Text>MovieDetail</Text>
        </View>
      </View>
    );
  }
}
export{MovieDetail as default};
