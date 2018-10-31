import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import RhyzenHome from './RhyzenHome';
import RhyzenAbout from './RhyzenAbout';
import RhyzenContact from './RhyzenTeam';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {Button,Tile} from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      
      <Container>
        <Header hasTabs style={{marginTop: -30,backgroundColor: '#0386C8'}}/>
        <Tabs >
          <Tab heading={ <TabHeading style={{backgroundColor: '#0386C8'}}><Text style={{color: 'white'}}>Home</Text></TabHeading>}>
            <RhyzenHome />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#0386C8'}}><Text style={{color: 'white'}}>About</Text></TabHeading>}>
            <RhyzenAbout />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#0386C8'}}><Text style={{color: 'white'}}>Team</Text></TabHeading>}>
            <RhyzenContact />
          </Tab>
          
        </Tabs>
      </Container>
 
     
    );
  }

}

