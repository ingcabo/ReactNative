import React, {Component} from 'react';

import{
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty  from  '../components/empty'; 
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component{
    
    keyExtractor = item=> item.id.toString()
    renderEmpty =()=><Empty text="es un texto vacio " />
    itemSeparator =()=> <Separator color = 'red'/>

    renderItem   =({item})=> {
        return(
            <Suggestion {...item}/>
        )
    }

    render(){
        
        const EmpyList = 'No hay elementos en mi lista';
        const myTitle ="Recomendado para ti"

        return(
            <Layout
                title={myTitle}
            >
                <FlatList
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

export default SuggestionList;