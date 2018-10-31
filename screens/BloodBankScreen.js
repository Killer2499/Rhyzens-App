import React from 'react';
import { Text, View, StyleSheet,ActivityIndicator,ScrollView,Image,Linking,TouchableOpacity } from 'react-native';
import {Card,CardItem} from 'native-base';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';
import Map from './Map.js';
import MapView from 'react-native-maps';

export default class BloodBankScreen extends React.Component {
  static navigationOptions = {
    title: 'Blood Bank Details',
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
        latitude: null,
        longitude: null
      }
  }

  componentDidMount(){
    return fetch('https://api.data.gov.in/resource/fced6df9-a360-4e08-8ca0-f283fc74ce15?api-key=579b464db66ec23bdd0000010701445ea3334d4b725dbcbee44cadc9&format=json&offset=0&limit=1000')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.records,
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  getMap = (latitude,longitude) => {
      return(
         <Map longitude={longitude} latitude={latitude}/>
      )
  }

  
 
  render() {
    if(this.state.isLoading){
        return (
          <ScrollView style={styles.container}>
          <ActivityIndicator />
          </ScrollView> 
        )
      }
      else{
        let news= this.state.dataSource.map((val,key) => {
            latitude=Number(val.__latitude);
            longitude=Number(val.__longitude);
            return(
            <View key={key} style={styles.item}>
                <Card >
                    <CardItem header bordered>
                        <Text style={{fontWeight: 'bold',color: '#0386C8' }}>
                            {val._blood_bank_name}
                        </Text>
                    </CardItem>
                    <CardItem bordered>
                        <Text>
                            Address: {val.__address}{"\n"} - PIN: {val._pincode}
                            City:   {val.__city},{"\n"}
                            District:   {val.__district},{"\n"}
                            State:  {val.__state}

                        </Text>
                    </CardItem>
                    <CardItem bordered>
                        <Text style={styles.sideHeading}>
                            Contact Information
                        </Text>
                    </CardItem>
                    <CardItem bordered>
                        <Text>
                            {val.__nodal_officer_}{"\n"}
                            Phone: {val.__contact_no},{val._mobile}{"\n"}
                            Email: {val.__email_nodal_officer}{"\n"}
                            Blood Component Availability: {val.__blood_component_available}
                        </Text>
                    </CardItem>
                    <CardItem>
                    <Text 
                      style={styles.helpLinkText}
                      onPress={()=>{
                      url='http://maps.google.com/maps?q='+ val.__latitude+ ',' +val.__longitude;
                      url=url.toString();
                      Linking.openURL(url);
                    }}>GetLocation in map</Text>
                        
                    </CardItem>
                </Card>
            </View>
            )
        });
      return (
        <ScrollView>
            <ScrollView style={styles.container}>
                {news}
            </ScrollView>
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
    
  },
  sideHeading: {
      color: '#0386C8'
  }
});
