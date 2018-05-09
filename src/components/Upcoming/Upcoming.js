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
    
    const item = upcoming ? upcoming[0] : null;
    const type = upcoming ? upcoming[0].name ? 'tv' : 'movie' : null;
    

    return (
        item ?
        <View>
            <Image style={styles.image} source={{ uri: ['https://image.tmdb.org/t/p/w780/',item.backdrop_path].join('') }} />
            <View style={styles.overlay} />
            <View style={styles.textContainer} >
                <Text style={styles.title}>{item.title}</Text>
                <TouchableHighlight onPress={() => props.setModalVisible(true, item.id, type)}>
                    <View style={styles.button}>
                        <Icon name="info-circle" size={20} color="#131313" style={styles.icon} />
                        <Text style={styles.buttonText} >Informacje</Text>
                    </View>
                </TouchableHighlight>
                <LinearGradient colors={['transparent', '#131313']} style={{ height: 100, width: '100%' }} />
            </View>
        </View>
        : null
    );
};

export default Upcoming;