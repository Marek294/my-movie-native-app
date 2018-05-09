import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    image: {
        position: 'relative',
        width: '100%',
        height: 400,
        zIndex: -3
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        height:'100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: -1
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        width: '70%',
        textAlign: 'center'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 3
    },
    buttonText: {
        marginLeft: 10,
        width: 70,
        color: '#131313'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -2,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
});