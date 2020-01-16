import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Text
} from "react-native";
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
    if (text) {
      addDeck(text).then;
      this.setState(() => ({ text: "" }));
      this.props.navigation.navigate("HomeStack");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <Text style={styles.title}>Enter the title of your new Deck</Text>
        </View>
        <View>
          <StyledInputView
            text={this.state.text}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            placeholder="Deck Name"
          />
        </View>
        <View style={{ padding: 10 }}>
          <StyledButton
            disabled={this.state.text === ""}
            BtnStyle={this.state.text ? "btnPrimary" : "btnDisabled"}
            onPress={this.handleSubmit}
          >
            Create Deck
          </StyledButton>
        </View>
        <View style={{ height: 50 }} />
      </KeyboardAvoidingView>
    );
  }
}
if (Platform.OS === "ios") {
  AddDeckScreen.navigationOptions = {
    title: "Add a deck",
    headerTintColor: "green"
  };
} else {
  AddDeckScreen.navigationOptions = {
    header: null
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around"
  },

  title: {
    textAlign: "center",
    fontSize: 20
  }
});

export default connect(null, { addDeck })(AddDeckScreen);
