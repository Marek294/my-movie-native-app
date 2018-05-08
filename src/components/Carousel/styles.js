import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    carousel: {
        marginTop: 5,
        marginBottom: 20
    },
    image: {
        margin: 3,
        height: 133,
        width: 90,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    items: {
        margin: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    text: {
        color: 'white'
    }
});