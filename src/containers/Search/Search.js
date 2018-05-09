import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Keyboard
} from 'react-native';

class SearchBar extends Component {
    state = {
        query: '',
        isFocused: false
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

    render() {
        const { query, isFocused } = this.state;

        return (
            <TouchableHighlight style={styles.container} onPress={Keyboard.dismiss} accessible={false}>
                <React.Fragment>
                    { !isFocused && <Text style={styles.searchTitle} >Szukaj filmów oraz seriali spośród miliona pozycji</Text> }
                    <TextInput 
                        onChangeText={query => this.onChangeText(query)} 
                        value={query} 
                        style={styles.input} 
                        underlineColorAndroid = "rgba(255,255,255,0.7)"
                        placeholder = "Wpisz frazę..."
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        onFocus={() => this.focus(true)}
                        onBlur={() => this.focus(false)}
                    />
                    { !isFocused && 
                        <TouchableHighlight style={styles.submit}>
                                        <Icon name="search" size={50} color="white" style={styles.icon} />
                        </TouchableHighlight> }
                </React.Fragment>
            </TouchableHighlight>
        );
    }
}

export default SearchBar;