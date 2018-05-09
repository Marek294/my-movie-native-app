import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#131313',
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
    }
});