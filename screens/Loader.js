import React from 'react';
import {Text,View,Image} from 'react-native'; 

export default class Loader extends React.Component{
    render(){
        return(
            <View>
                <Image source={{uri: 'https://cdn.dribbble.com/users/702004/screenshots/2834791/material-loader.gif' }}
                       style={{width: 400, height: 400}}  />
            </View>
        );
    }
} 