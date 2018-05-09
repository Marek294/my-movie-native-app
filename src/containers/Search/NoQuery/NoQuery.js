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
    ScrollView
} from 'react-native';

const NoQuery = (props) => {
    const { isFocused, query } = props;

    return (
        <TouchableHighlight style={styles.container} onPress={Keyboard.dismiss} accessible={false}>
            <React.Fragment>
                { !isFocused && <Text style={styles.searchTitle} >Szukaj filmów oraz seriali spośród miliona pozycji</Text> }
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
                { !isFocused && 
                    <TouchableHighlight style={styles.submit} onPress={props.submit}>
                        <Icon name="search" size={50} color="white" style={styles.icon} />
                    </TouchableHighlight> }
            </React.Fragment>
        </TouchableHighlight>
    );
};

export default NoQuery;