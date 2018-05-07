import React from 'react';
import styles from './styles';

import {
    View,
    Text
} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
    );
};

export default Header;