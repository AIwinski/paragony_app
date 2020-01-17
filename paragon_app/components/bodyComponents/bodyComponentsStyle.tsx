var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

    bodyView:{
        borderRadius: 20,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    bodyScrollView:{
        borderRadius: 20,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 30,
    },
    buttomView: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    textInput: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        margin: 5,
    },
    textInputInvalid: {
        backgroundColor: "pink",
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        margin: 5,
    },
    buttonRow: {
        flexDirection: 'row',
		justifyContent: 'space-between',
    },
    buttonView: {
        margin: 5,
    }
});