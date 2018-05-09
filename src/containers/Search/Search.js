import React, { Component } from 'react';
import Modal from 'react-native-modal';
import NoQuery from './NoQuery/NoQuery';
import SearchResults from './SearchResults/SearchResults';
import MovieDetails from '../MovieDetails/MovieDetails';
import TVDetails from '../TVDetails/TVDetails';
import { getSearchMovies } from '../../actions/Movie';
import { getSearchTV } from '../../actions/Tv';
import styles from './styles';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Keyboard,
    ActivityIndicator
} from 'react-native';

class SearchBar extends Component {
    state = {
        query: '',
        isFocused: false,
        movieResults: null,
        tvResults: null,
        isLoading: false,
        modalVisible: false,
        clickedItemId: null,
        clickedType: null,
        isMoved: false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { navigation } = nextProps;
        const { state } = navigation;
      
        if(state.params) {
            const { query, isMoved } = state.params;

            return {
                query,
                isMoved
            }
        }

        return null;
    }
  
    setModalVisible = (visible, id, clickedType) => {   
        this.setState({
            modalVisible: visible,
            clickedItemId: id,
            clickedType: clickedType ? clickedType : this.state.clickedType
        })
    }

    onChangeText = query => {
        this.setState({
            query
        })
    }

    focus = isFocused => {
        this.setState({
            isFocused
        })
    }

    submit = () => {
        this.setState({ isLoading: true, isMoved: false });

        ( async () => {
            const { query } = this.state;

            if(query) {
                const movieResults = await getSearchMovies(query);
                const tvResults = await getSearchTV(query);

                this.setState({
                    movieResults,
                    tvResults
                });
            }
            this.setState({
                isLoading: false
            });
        })()
    }

    render() {
        const { query, isFocused, isLoading, movieResults, tvResults, modalVisible, clickedItemId, clickedType, isMoved } = this.state;

        if(isMoved) this.submit();

        return (
            !isLoading ? 
            <React.Fragment>
                { movieResults || tvResults ? 
                    <SearchResults
                        movieResults={movieResults}
                        tvResults={tvResults}
                        query={query}
                        isFocused={isFocused}
                        submit={this.submit}
                        focus={this.focus}
                        onChangeText={this.onChangeText}
                        setModalVisible={this.setModalVisible}
                    />
                    :
                    <NoQuery
                        query={query}
                        isFocused={isFocused}
                        submit={this.submit}
                        focus={this.focus}
                        onChangeText={this.onChangeText}
                    /> }

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
            </React.Fragment>
            :
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={100} color="#c20114" />
            </View>
        );
    }
}

export default SearchBar;