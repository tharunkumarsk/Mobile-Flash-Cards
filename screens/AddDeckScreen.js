import React, { Component } from "react";
import { View, StyleSheet, Platform, TextInput, Text } from "react-native";
import StyledButton from "../components/StyledButton";
import { StyledInputView } from "../components/StyledInputView";
import { addDeck } from "../actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddDeckScreen extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired
  };
  state = {
    text: "",
    initialBtnType: "btnDisabled"
  };
  handleChange = text => {
    this.setState({ text });
  };
  handleSubmit = () => {
    const { addDeck } = this.props;
    const { text } = this.state;
    if (text) addDeck(text).then;
    this.setState(() => ({ text: "" }));
    this.props.navigation.navigate("HomeStack");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 60 }} />
        <View style={styles.block}>
          <Text style={styles.title}>Enter the title of your new Deck</Text>
        </View>
        <View style={[styles.block]}>
          <StyledInputView
            text={this.state.text}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </View>
        <StyledButton
          disabled={this.state.text === ""}
          BtnStyle={this.state.text ? "btnPrimary" : "btnDisabled"}
          onPress={this.handleSubmit}
        >
          Create Deck
        </StyledButton>
      </View>
    );
  }
}
if (Platform.OS === "ios") {
  AddDeckScreen.navigationOptions = {
    title: "Add a deck"
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: "center",
    fontSize: 32
  }
});

export default connect(null, { addDeck })(AddDeckScreen);
