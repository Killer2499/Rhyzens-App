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
import {MapView} from 'expo';

export default class RhyzenContact extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Team Leader - Sanjai Singavarapu</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-8341649630,91-8919142764</Text>
                </CardItem>
            </Card>

            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Chief Organizer - Mounika Narlajarla</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Chief Organizer - Tej Kiran Gunturi</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Associate Organizer - Gopi Nayak Bhukya</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Associate Organizer - Swetha Bhyri</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Technical Consultant - Sanath  Singavarapu</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-8331001966,91-8919142764</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Technical Consultant - Vamsi Chekuri</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Lead Facilitator - Diana Priya</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold'}}>Lead Facilitator - Sidhardh Kanisetti</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Lead Coordinator - Bhuvaneswari Ramisetty</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Lead Coordinator- Baji Pusala</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Facilitator - Bhargavi Sai Priya</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered >
                    <Text style={{fontWeight: 'bold',color: '#0386C8'}}>Facilitator - Tejaswini Yerraguntala</Text>
                </CardItem>
                <CardItem footer bordered>
                    <Text>Mobile:  91-++++++++++,91-++++++++++</Text>
                </CardItem>
            </Card>

        </ScrollView>
      </View>
    );
  }



     
   
  }

  
  

const styles = StyleSheet.create({
 
});
