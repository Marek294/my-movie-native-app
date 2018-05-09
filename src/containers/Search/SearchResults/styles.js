import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#131313'
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    input: {
        color: 'white',
        width: '60%'
    },
    submit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 50
    },
    icon: {
        color: 'rgba(255,255,255,0.7)',
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    poster: {
        height: 133,
        width: 90,
        margin: 2,
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginTop: 50,
        marginLeft: 50,
        marginBottom: 20
    }
});