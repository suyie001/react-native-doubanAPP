'use strict';

import React from 'react-native';
let {StyleSheet} = React;

let styles = StyleSheet.create({
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
      flex: 1,
      backgroundColor:'#eae7ff',
      justifyContent:'center',
      paddingTop:60,
    
  },
  containerNav: {
      flex: 1,
      backgroundColor:'#eae7ff',
      flexDirection:'row'
  },
  image:{
    width:120,
    height:160,
  },
  item: {
      flex:1,
      flexDirection:'row',
      borderWidth: 1,
      borderColor:'#rgba(100,53,201,0.1)',
      paddingBottom: 6,
      paddingTop:16
  },
    itemText:{
      fontSize:33,
      fontFamily:'Helvetica Neue',
      padding: 30,
    },
    itemContent:{
      flex:1,
      marginLeft:13,
      marginTop:6,
    },
    itemHeader:{
      fontSize:18,
      fontFamily:'Helvetica Neue',
      fontWeight:'300',
      color:'#6435c9',
      marginBottom:6,
    },
    itemMeta:{
      fontSize:16,
      color:'rgba(0,0,0,0.6)',
      marginBottom:6
    },
    itemImage:{
      marginLeft:6

    },
    redText:{
      color:'#db2828',
      fontSize:15,
    }
});
export {styles as default};
