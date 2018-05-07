import React from 'react';
import Container from '../../../components/Container/Container';
import styles from './styles';
import {
    View,
    Text
} from 'react-native';

const TopRatedTV = () => {
    return (
        <Container>
            <Text style={styles.text}>Top Rated TV</Text>
        </Container>
    );
};

export default TopRatedTV;