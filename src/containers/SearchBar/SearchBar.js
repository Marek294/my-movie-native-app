import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';

class SearchBar extends Component {
    state = {
        query: ''
    }

    onChangeText = query => {
        this.setState({
            query
        })
    }

    submit = () => {
        const { query } = this.state;

        this.props.navigation.navigate('Search',{
            query,
            isMoved: true
          });
    }

    render() {
        const { query } = this.state;

        return (
            <View style={styles.container}>
                <TextInput 
                    onChangeText={query => this.onChangeText(query)} 
                    value={query} 
                    style={styles.input} 
                    underlineColorAndroid = "rgba(255,255,255,0.7)"
                    placeholder = "Wpisz frazę..."
                    placeholderTextColor = "rgba(255,255,255,0.5)"
                />
                <TouchableHighlight style={styles.submit} onPress={this.submit}>
                    <Icon name="search" size={30} color="white" style={styles.icon} />
                </TouchableHighlight>
            </View>
        );
    }
}

export default SearchBar;