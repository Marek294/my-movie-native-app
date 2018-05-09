import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#131313',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        padding: 50
    },
    searchTitle: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 30,
        textAlign: 'center'
    },
    input: {
        color: 'white',
        width: '100%'
    },
    submit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#131313',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});