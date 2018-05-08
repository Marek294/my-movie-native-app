import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#131313'
    },
    carousels: {
        transform: [
            { translateY: -70 }
        ]
    },
    carouselTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        marginLeft: 20
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