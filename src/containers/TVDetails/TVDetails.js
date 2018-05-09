import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getTVDetails } from '../../actions/Tv';
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

class TVDetails extends Component {
    state = {
        itemId: null,
        tv: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.itemId !== prevState.itemId) {
            return {
                itemId: nextProps.itemId
            };
          }
      
          return null;
    }

    componentDidUpdate(prevProps, prevState) {
        const { tv, itemId } = this.state;

        if(!tv) {
            ( async () => {
                const tv = itemId ? await getTVDetails(itemId) : null;

                this.setState({
                    tv
                })
            })();
        }
    }

    formatRuntime(runtime) {
        const hours = parseInt(runtime / 60);
        const minutes = parseInt(runtime % 60);
        
        if(hours > 0 && minutes > 0) return hours+'h '+minutes+'m';
        if(hours === 0 && minutes > 0) return minutes+'m';
        if(hours > 0 && minutes === 0) return hours+'h ';
    }

    formatCreators(created_by) {
        const names = created_by.map(item => item.name);

        return names.join(', ');
    }

    formatDates(first_air_date, last_air_date, in_production) {
        const first = moment(first_air_date).format('YYYY');
        const last = moment(last_air_date).format('YYYY');

        if(in_production) return <Text>{first}{"\n"}-{"\n"}obecnie</Text>
        else return <Text>{first}{"\n"}-{"\n"}{last}</Text>
    }

    changeTV = (id) => {
        this.setState({
            itemId: id,
            tv: null
        });
    }

    renderSimilar(similar) {
        return similar.results.map((item, i) => {
                    return (
                        <TouchableHighlight key={i} onPress={() => this.changeTV(item.id)} >
                            <Image style={styles.similarPoster} source={{ uri: ['https://image.tmdb.org/t/p/w200/',item.poster_path].join('') }} />
                        </TouchableHighlight>
                    )
                })
    }

    render() {
        const { tv } = this.state;

        const runtime = tv ? this.formatRuntime(tv.episode_run_time) : null;
        const creators = tv ? this.formatCreators(tv.created_by) : null;
        const similarMovies = tv ? this.renderSimilar(tv.recommendations) : null;
        const dates = tv ? this.formatDates(tv.first_air_date, tv.last_air_date, tv.in_production) : null;

        return (
            tv ? 
            <ScrollView style={styles.detailsContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: ['https://image.tmdb.org/t/p/w780/',tv.backdrop_path].join('') }} />
                    <View style={styles.overlay} />
                    <View style={styles.backdropContainer} >
                        <TouchableHighlight onPress={() => this.props.setModalVisible(false)}>
                            <Icon name="angle-left" size={50} color="white" style={styles.icon} />
                        </TouchableHighlight>
                        <Text style={styles.title}>{tv.name}</Text>
                        <LinearGradient colors={['transparent', '#131313']} style={{ height: 50, width: '100%' }} />
                    </View>
                </View>
                <View style={styles.marginContent}>
                    <View style={styles.topInfo}>
                        <Text style={styles.vote}>{tv.vote_average*10}% Ocena</Text>
                        <Text style={styles.topText} >{dates}</Text>
                        <Text style={styles.topTextProduction} >{tv.production_companies.length && tv.production_companies[0].name}</Text>
                        <Text style={styles.topText} >{runtime}</Text>
                    </View>

                    <Text style={styles.overview}>{tv.overview}</Text>
                    <Text style={styles.person}>Twórcy: {creators}</Text>
                    <Text style={styles.person}>Występuje: {tv.credits.cast[0].name}</Text>
                </View>
                <View style={styles.similar}>
                    <Text style={styles.similarTitle}>Podobne do {tv.name}</Text>
                    <View style={styles.similarItems}>
                        {similarMovies}
                    </View>
                </View>
            </ScrollView>

            : 

            <View style={styles.loaderContainer}>
                <TouchableHighlight onPress={() => this.props.setModalVisible(false)}>
                    <Icon name="angle-left" size={50} color="white" style={styles.icon} />
                </TouchableHighlight>
                <View style={styles.loading}>
                    <ActivityIndicator size={100} color="#c20114" />
                </View>
            </View>
        );
    }
}

export default TVDetails;