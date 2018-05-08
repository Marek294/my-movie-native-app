import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Container from '../Container/Container';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    ScrollView,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

const Upcoming = (props) => {
    const { upcoming } = props;
    let item 
    
    if(upcoming) item = upcoming[0];

    return (
        item ?
        <View>
            <Image style={styles.image} source={{ uri: ['https://image.tmdb.org/t/p/original/',item.backdrop_path].join('') }} />
            <View style={styles.textContainer} >
                <Text style={styles.title}>{item.title}</Text>
                <TouchableHighlight >
                    <View style={styles.button}>
                        <Icon name="info-circle" size={20} color="#2e2e2e" style={styles.icon} />
                        <Text style={styles.buttonText} >Informacje</Text>
                    </View>
                </TouchableHighlight>
                <LinearGradient colors={['transparent', '#2e2e2e']} style={{ height: 100, width: '100%' }} />
            </View>
        </View>
        : null
    );
};

export default Upcoming;