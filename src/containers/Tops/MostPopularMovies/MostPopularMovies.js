import React, { Component } from 'react';
import Container from '../../../components/Container/Container';
import styles from './styles';
import { getMostPopularMovies } from '../../../actions/Movie';
import {
    ScrollView,
    View,
    Image,
    Text
} from 'react-native';

class MostPopularMovies extends Component {
    state = {
        mostPopularMovies: null
    }

    componentDidMount() {
        ( async () => {
            const mostPopularMovies = await getMostPopularMovies();

            this.setState({
                mostPopularMovies
            });
        })();
    }

    render() {
        const { mostPopularMovies } = this.state;

        let displayPopularMovies;
        if(mostPopularMovies) {
            displayPopularMovies = mostPopularMovies.map((item, i) => {
                return (
                    <View key={i}>
                        <Image style={{ height: 100, width: 100 }} source={{ uri: ['https://image.tmdb.org/t/p/w200/',item.poster_path].join('') }} />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                )
            })
        }

        return (
            <ScrollView style={styles.container}>
                {displayPopularMovies}
            </ScrollView>
        );
    }
}

export default MostPopularMovies;