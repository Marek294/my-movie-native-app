import React, { Component } from 'react';
import moment from 'moment';
import Modal from 'react-native-modal';
import Container from '../../components/Container/Container';
import Carousel from '../../components/Carousel/Carousel';
import Upcoming from '../../components/Upcoming/Upcoming';
import MovieDetails from '../MovieDetails/MovieDetails';
import TVDetails from '../TVDetails/TVDetails';
import SearchBar from '../SearchBar/SearchBar';
import { getUpcoming, getMostPopularMovies, getTopRatedMovies } from '../../actions/Movie';
import { getMostPopularTV, getTopRatedTV } from '../../actions/Tv';
import styles from './styles.js';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

class Browse extends Component {
    state = {
        mostPopularMovies: null,
        topRatedMovies: null,
        mostPopularTv: null,
        topRatedTv: null,
        upcoming: null,
        modalVisible: false,
        display: false,
        clickedItemId: null,
        clickedType: null
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
                upcoming,
                display: true
            });
        })();
    }

    setModalVisible = (visible, id, clickedType) => {
        
        this.setState({
            modalVisible: visible,
            clickedItemId: id,
            clickedType: clickedType ? clickedType : this.state.clickedType
        })
    }
    
    render() {
        const { mostPopularMovies, topRatedMovies, mostPopularTv, topRatedTv, upcoming, modalVisible, display, clickedItemId, clickedType } = this.state;

        return (
            display ? 

            <ScrollView style={styles.container} >
                <SearchBar navigation={this.props.navigation} />
                <Upcoming upcoming={upcoming} setModalVisible={this.setModalVisible} />
                <View style={styles.carousels}>
                    <Text style={styles.carouselTitle}>Najbardziej popularne filmy</Text>
                    <Carousel items={mostPopularMovies} setModalVisible={this.setModalVisible} />

                    <Text style={styles.carouselTitle}>Najwyżej oceniane filmy</Text>
                    <Carousel items={topRatedMovies} setModalVisible={this.setModalVisible} />

                    <Text style={styles.carouselTitle}>Najbardziej popularne seriale</Text>
                    <Carousel items={mostPopularTv} setModalVisible={this.setModalVisible} />

                    <Text style={styles.carouselTitle}>Najwyżej oceniane seriale</Text>
                    <Carousel items={topRatedTv} setModalVisible={this.setModalVisible} />
                </View>

                <Modal 
                    animationIn='slideInRight'
                    animationOut='slideOutRight'
                    backdropOpacity={0}
                    isVisible={modalVisible} 
                    style={{margin: 0}}
                    supportedOrientations={['portrait', 'landscape']}
                    useNativeDriver={true}
                    >
                    {clickedType === 'tv' ? <TVDetails setModalVisible={this.setModalVisible} itemId={clickedItemId} /> : <MovieDetails setModalVisible={this.setModalVisible} itemId={clickedItemId} /> }
                </Modal>
            </ScrollView>

            : 

            <View style={styles.loaderContainer}>
                <ActivityIndicator size={100} color="#c20114" />
            </View>
        );
    }
}

export default Browse;