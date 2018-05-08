import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getMovieDetails } from '../../actions/Movie';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native';

class MovieDetails extends Component {
    state = {
        itemId: null,
        movie: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.itemId !== prevState.itemId) {
            return {
                itemId: nextProps.itemId,
            };
          }
      
          return null;
    }

    componentDidUpdate(prevProps, prevState) {
        const { movie, itemId } = this.state;

        if(!movie) {
            ( async () => {
                const movie = itemId ? await getMovieDetails(itemId) : null;

                this.setState({
                    movie
                })
            })();
        }
    }

    formatRuntime(runtime) {
        const hours = parseInt(runtime / 60);
        const minutes = parseInt(runtime % 60);
        
        return hours+'h '+minutes+'m';
    }

    findDirectorId(crew) {
        return _.findIndex(crew, function(o) { return o.job === 'Director'; });
    }

    changeMovie = (id) => {
        this.setState({
            itemId: id,
            movie: null
        });
    }

    renderSimilar(similar) {
        return similar.results.map((item, i) => {
                    return (
                        <TouchableHighlight key={i} onPress={() => this.changeMovie(item.id)} >
                            <Image style={styles.similarPoster} source={{ uri: ['https://image.tmdb.org/t/p/w200/',item.poster_path].join('') }} />
                        </TouchableHighlight>
                    )
                })
    }

    render() {
        const { movie } = this.state;

        const runtime = movie ? this.formatRuntime(movie.runtime) : null;
        const directorId = movie ? this.findDirectorId(movie.credits.crew) : null;
        const similarMovies = movie ? this.renderSimilar(movie.recommendations) : null;

        return (
            movie ? 
            <ScrollView style={styles.detailsContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: ['https://image.tmdb.org/t/p/original/',movie.backdrop_path].join('') }} />
                    <View style={styles.overlay} />
                    <View style={styles.backdropContainer} >
                        <TouchableHighlight onPress={() => this.props.setModalVisible(false)}>
                            <Icon name="angle-left" size={50} color="white" style={styles.icon} />
                        </TouchableHighlight>
                        <Text style={styles.title}>{movie.title}</Text>
                        <LinearGradient colors={['transparent', '#131313']} style={{ height: 50, width: '100%' }} />
                    </View>
                </View>
                <View style={styles.textPadding}>
                    <View style={styles.topInfo}>
                        <Text style={styles.vote}>{movie.vote_average*10}% Ocena</Text>
                        <Text style={styles.topText} >{moment(movie.release_date).format('YYYY')}</Text>
                        <Text style={styles.topTextProduction} >{movie.production_companies[0].name}</Text>
                        <Text style={styles.topText} >{runtime}</Text>
                    </View>

                    <Text style={styles.overview}>{movie.overview}</Text>
                    <Text style={styles.person}>Reżyser: {movie.credits.crew[directorId].name}</Text>
                    <Text style={styles.person}>Występuje: {movie.credits.cast[0].name}</Text>

                    <View style={styles.similar}>
                    <Text style={styles.similarTitle}>Podobne do {movie.title}</Text>
                    <View style={styles.similarItems}>
                        {similarMovies}
                    </View>
                </View>
                </View>
            </ScrollView>

            : 

            <View style={styles.loaderContainer}>
                <ActivityIndicator size={100} color="#c20114" />
            </View>
        );
    }
}

export default MovieDetails;