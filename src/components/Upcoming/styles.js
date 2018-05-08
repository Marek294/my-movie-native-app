import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    image: {
        position: 'relative',
        width: '100%',
        height: 400
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        height:'100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        width: '70%'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 120,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 3
    },
    buttonText: {
        width: 70,
        color: '#2e2e2e'
    },
});