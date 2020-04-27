import React, {Component} from 'react';

import{
    View,
    FlatList,
    Text
} from 'react-native';

import Empty  from  '../components/empty'; 
import Separator from '../components/vertical-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';

class CategoryList extends Component{

    keyExtractor = item=> item.id.toString()
    renderEmpty =()=><Empty text="es un texto vacio c" />
    itemSeparator =()=> <Separator color = 'blue'/>
    
    renderItem   =({item})=> {
        return(
            <Category {...item}/>
        )
    }

    render(){

        const EmpyList = 'No hay elementos en mi lista';
        const myTitle ="Categorias"

        return(
            <Layout
                title={myTitle}
            >
            
            <FlatList
            horizontal = {true}
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
            />
           
            </Layout>
        )
    }
}

export default CategoryList;