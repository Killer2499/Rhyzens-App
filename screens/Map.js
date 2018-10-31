import React from 'react';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
    latitude=number(this.props.latitude);
    longitude=number(this.props.longitude);
    render(){
        return(
<MapView style={styles.MapView}
        region={{
            latitude: this.latitude,
            longitude: this.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1

        }}>
        
    </MapView>
        )
    }
}