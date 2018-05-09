import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    scrollView: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: '#131313',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
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
    icon: {
        color: 'rgba(255,255,255,0.7)',
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