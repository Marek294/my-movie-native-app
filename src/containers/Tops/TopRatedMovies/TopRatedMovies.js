import React from 'react';
import Container from '../../../components/Container/Container';
import styles from './styles';
import {
    View,
    Text
} from 'react-native';

const TopRatedMovies = () => {
    return (
        <Container>
            <Text style={styles.text}>Top Rated Movies</Text>
        </Container>
    );
};

export default TopRatedMovies;