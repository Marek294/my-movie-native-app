import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    detailsContainer: {
        height: '100%',
        width: '100%'
    },
    image: {
        position: 'relative',
        width: '100%',
        height: 400,
        zIndex: 1
    },
    loaderContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#131313',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backdropContainer: {
        position: 'absolute',
        width: '100%',
        height:'100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 3
    },
    icon: {
        marginTop: 10,
        marginLeft: 20
    },
    title: {
        color: 'white',
        width: 300,
        fontSize: 25,
        fontWeight: '900',
        marginLeft: 10,
        position: 'absolute',
        bottom: 50,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    textPadding: {
        padding: 10
    },
    overview: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10
    },
    topInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    topText: {
        color: 'rgba(255,255,255,0.7)',
        width: 50,
        textAlign: 'center'
    },
    topTextProduction: {
        color: 'rgba(255,255,255,0.7)',
        width: 80,
        textAlign: 'center'
    },
    vote: {
        color: '#1DB93F',
        width: 50,
        textAlign: 'center'
    },
    person: {
        color: 'rgba(255,255,255,0.7)',
        width: 300
    },
    similarItems: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    similar: {
        marginTop: 20,
    },
    similarPoster: {
        height: 133,
        width: 90,
        margin: 5,
    },
    similarTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900'
    }
});