import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    logo: {
        height: 80,
        width: 150
    },
    containerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 80,
        height: 20,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: "bold",
    },
    inputTitle: {
        padding: 5
    },
    input: {
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        height: 25,
        width: 150
    },
    stats: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal: 30,
        alignItems: 'center'
    },
    card: {
        flex: 1,
        height: 80,
        maxWidth: 120,
        backgroundColor: "#bebebe",
        borderWidth: 1,
        borderColor: '#969696',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 6,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        margin: 5
    },
    titleCard: {
        textAlign: "center",
        fontWeight: 'bold'
    },
    textCard: {
        textAlign: 'center'
    }
});

export default styles