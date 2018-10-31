import React from 'react';
import { Text, View, StyleSheet,ActivityIndicator,ScrollView,Image,Picker,Linking } from 'react-native';
import {Card,Button} from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
    headerStyle: {
      backgroundColor: '#0386C8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props){
      super(props);
      this.state = {
        isLoading: true,
        dataSource: null,
        api : 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cd73c70647cd4b25aca49683e5aaedfb',
        news: null,
      }
  }

  componentDidMount(){
   {this. getNews()}
  }
  _handleLearnMorePress = (val) => {
    WebBrowser.openBrowserAsync(val.url);
  };
  getNews=()=>{
    return fetch(this.state.api)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.articles,
        refreshing: false,
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  sports =()=>{
    alert("Pressed");
  }

  render() {
    if((this.state.news) == "javascript"){
      this.setState({
        api: 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=cd73c70647cd4b25aca49683e5aaedfb'
      })
    }
  
    if(this.state.isLoading){
        return (
          <ScrollView style={styles.container}>
          <ActivityIndicator />
          </ScrollView>
        )
      }
      else{
        let news= this.state.dataSource.map((val,key) => {
            return(
              
            <View key={key} style={styles.item}>
                 <Card
                 image={{ uri: val.urlToImage || defaultImg }} >
                    <Text style={{fontWeight: 'bold' }}>
                        {val.title}
                    </Text>
                    <Text>
                        {val.description}
                        <Text 
                      style={styles.helpLinkText}
                      onPress={()=>{
                      url=val.url;
                      url=url.toString();
                      Linking.openURL(url);
                    }}>Learn More</Text>
                    </Text>
                   
                </Card>
            </View>
            )
        });
      return (
        <ScrollView style={styles.container}>
             {news}
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
      paddingBottom: 20
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
    paddingLeft: 10,
  },
});
