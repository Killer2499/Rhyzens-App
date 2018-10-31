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
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {Card,CardItem} from 'native-base';

export default class RhyzenAbout extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Card>
                <CardItem header bordered>
                    <Text style={{fontWeight: 'bold',color: '#0386C8' }}>
                       Mission and Vision
                    </Text>
                </CardItem>
                <CardItem>
                  <Text>
                    Rhyzens is a non - profit organization that was founded on the ideology that the field of medicine 
                    must extend much beyond professional life and take an active role in societal issues.
                    Rhyzens intends to be a beacon in the of future medicos by assaying the importance of a doctor
                    in community service and make it a socially - acceptable norm.
                 </Text>
                </CardItem>
                <CardItem footer bordered>
                  <Text style={{fontWeight: 'bold',color: '#0386C8' }}>
                    Rhyzens on it's way for a better society.
                  </Text>
                </CardItem>
          </Card>

          <Card>
                <CardItem header bordered>
                    <Text style={{fontWeight: 'bold',color: '#0386C8' }}>
                       Sponsors
                    </Text>
                </CardItem>
                <CardItem>
                  <Text>
                    Team Rhyzens themselves made this long without hanging out for sponsors.Sweating all these days, 
                    struggling day and night moved up to achieve our dream of a better society. 
                    People whole heartedly contributed to team rhyzens making them to never seek for any sponsors till now.
                 </Text>
                </CardItem>
                <CardItem footer bordered>
                  <Text style={{fontWeight: 'bold',color: '#0386C8' }}>
                    Rhyzens on it's way for a better society.
                  </Text>
                </CardItem>
          </Card>

        </ScrollView>
      </View>
    );
  }



     
   
  }

  
  

const styles = StyleSheet.create({
 
});
