import React from 'react';
import styles from './styles';
import {
    ScrollView,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

const Carousel = (props) => {
    const { items } = props;

    let displayItems;
    if(items) {
        displayItems = items.map((item, i) => {
            return (
                <TouchableHighlight key={i} style={styles.item}>
                    <Image style={styles.image} source={{ uri: ['https://image.tmdb.org/t/p/w200/',item.poster_path].join('') }} />
                </TouchableHighlight>
            )
        })
    }

    return (
        <ScrollView horizontal={true} style={styles.carousel}>
            {displayItems}
        </ScrollView>
    );
};

export default Carousel;