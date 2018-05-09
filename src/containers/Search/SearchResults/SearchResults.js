import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Keyboard,
    ActivityIndicator,
    ScrollView,
    Image
} from 'react-native';

const SearchResults = (props) => {
    const { isFocused, query, movieResults, tvResults } = props;

    const displayMovies = movieResults && movieResults.map((item,i) => {
        const type = item.name ? 'tv' : 'movie';
        return (
            <TouchableHighlight key={i} onPress={() => props.setModalVisible(true, item.id, type)}>
                <Image style={styles.poster} source={{ uri: ['https://image.tmdb.org/t/p/w200/',item.poster_path].join('') }} />
            </TouchableHighlight>
        )
    })

    const displayTV = tvResults && tvResults.map((item,i) => {
        const type = item.name ? 'tv' : 'movie';
        return (
            <TouchableHighlight key={i} onPress={() => props.setModalVisible(true, item.id, type)}>
                <Image style={styles.poster} source={{ uri: ['https://image.tmdb.org/t/p/w200/',item.poster_path].join('') }} />
            </TouchableHighlight>
        )
    })

    return (
        <ScrollView style={styles.container} onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.searchBar}>
                    <TextInput 
                        onChangeText={query => props.onChangeText(query)} 
                        value={query} 
                        style={styles.input} 
                        underlineColorAndroid = "rgba(255,255,255,0.7)"
                        placeholder = "Wpisz frazę..."
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        onFocus={() => props.focus(true)}
                        onBlur={() => props.focus(false)}
                    />
                    <TouchableHighlight style={styles.submit} onPress={props.submit}>
                        <Icon name="search" size={30} color="white" style={styles.icon} />
                    </TouchableHighlight>
                </View>

                <Text style={styles.title}>Filmy</Text>
                <View style={styles.items}>
                    {displayMovies}
                </View>

                <Text style={styles.title}>Seriale</Text>
                <View style={styles.items}>
                    {displayTV}
                </View>
        </ScrollView>
    );
};

export default SearchResults;