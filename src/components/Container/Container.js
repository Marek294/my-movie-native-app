import React from 'react';
import styles from './styles';

import {
    View
} from 'react-native';

const Container = (props) => {
    return (
        <View style={ styles.RootContainer } >
            {props.children}
        </View>
    );
};

export default Container;