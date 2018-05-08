import React, { Component } from 'react';
import moment from 'moment';
import Container from '../../components/Container/Container';
import Carousel from '../../components/Carousel/Carousel';
import Upcoming from '../../components/Upcoming/Upcoming';
import { getUpcoming, getMostPopularMovies, getTopRatedMovies } from '../../actions/Movie';
import { getMostPopularTV, getTopRatedTV } from '../../actions/Tv';
import styles from './styles.js';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

class Browse extends Component {
    state = {
        mostPopularMovies: null,
        topRatedMovies: null,
        mostPopularTv: null,
        topRatedTv: null,
        upcoming: null
    }

    componentDidMount() {
        ( async () => {
            const mostPopularMovies = await getMostPopularMovies();
            const topRatedMovies = await getTopRatedMovies();
            const mostPopularTv = await getMostPopularTV();
            const topRatedTv = await getTopRatedTV();
            const upcoming = await getUpcoming(moment().subtract(1, 'months'));

            this.setState({
                mostPopularMovies,
                topRatedMovies,
                mostPopularTv,
                topRatedTv,
                upcoming
            });
        })();
    }
    
    render() {
        const { mostPopularMovies, topRatedMovies, mostPopularTv, topRatedTv, upcoming } = this.state;
        return (
            <ScrollView style={styles.container} >
                <Upcoming upcoming={upcoming} />
                <View style={styles.carousels}>
                    <Text style={styles.carouselTitle}>Najbardziej popularne filmy</Text>
                    <Carousel items={mostPopularMovies} />

                    <Text style={styles.carouselTitle}>Najwyżej oceniane filmy</Text>
                    <Carousel items={topRatedMovies} />

                    <Text style={styles.carouselTitle}>Najbardziej popularne seriale</Text>
                    <Carousel items={mostPopularTv} />

                    <Text style={styles.carouselTitle}>Najwyżej oceniane seriale</Text>
                    <Carousel items={topRatedTv} />
                </View>
            </ScrollView>
        );
    }
}

export default Browse;