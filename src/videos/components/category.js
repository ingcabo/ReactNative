import React from 'react';


import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

function Category(props){
    return(
        <ImageBackground
        style={style.wrapper}
        source={{uri:props.background_image}}
        >
        <Text style={style.genre}>{props.genres[0]}</Text>

        </ImageBackground>
    )
}

const style = StyleSheet.create({
    genre: {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: {
          width: 2,
          height: 2,
        },
        ...Platform.select({
          ios: {
            textShadowRadius: 0,
          },
          android: {
            textShadowRadius: 1,
          },
        }),
      },
      wrapper:{
        width:200,
        height:100,
        borderRadius:11,
        overflow:'hidden',
        justifyContent:'center',
        alignContent: 'center'
      }
})

export default Category;