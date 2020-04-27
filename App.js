/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggetionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/categories-list';
import Player from './src/player/containers/player';



console.disableYellowBox = true
type Props = {};

export default class App extends Component<Props> {

 state = {
    SuggetionList: [],
    categoryList:[],
    loading:true
  }

async componentDidMount(){
  const movies = await API.getSuggestion(7);
  const categories = await API.getMovies();
  console.log(movies);
  console.log(categories);

  this.setState({
    SuggetionList : movies,
    categoryList: categories,
    loading:false,
  })

}
 
  render(){
   
    return(
      <Home>

      <Header />
     
        <Player />

             
      {
        this.state.loading ?  <ActivityIndicator size="large" color="#ff0050"/>:  
        <CategoryList 
        list ={this.state.categoryList}
        />
      }
    

    
      {
        this.state.loading ?  <ActivityIndicator size="large" color="#ff0050" /> :  
        <SuggetionList 
        list = {this.state.SuggetionList}
        /> 
      }
   
      
   
      </Home>
      )
  }
};
