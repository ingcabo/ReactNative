import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

function Header(props){
  return(
      <View>
        <SafeAreaView>
          <View style={style.container}>

            <View style={style.leftContainer}>
              <Image
              source ={require('../../assets/logo.png')}
              style = {style.logo}
              />
              </View>

              <View style={style.rightContainer}>
                {props.children}
              </View>

          </View>
        </SafeAreaView>
      </View>
  )
}

const style = StyleSheet.create({
  logo:{
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container:{
    height: 60,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '50%'
},
rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%'
}
})

export default Header;
