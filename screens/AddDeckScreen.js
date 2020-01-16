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
import { StackActions, NavigationActions } from "react-navigation";

class AddDeckScreen extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };
  state = {
    text: "",
    initialBtnType: "btnDisabled"
  };
  handleChange = text => {
    this.setState({ text });
  };
  handleSubmit = () => {
    const { addDeck, navigation } = this.props;
    const { text } = this.state;
    if (text) {
      addDeck(text).then;

      const resetAction = StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: "Home" }),
          NavigationActions.navigate({
            routeName: "DeckDetailsScreen",
            params: { title: text }
          })
        ]
      });

      navigation.dispatch(resetAction);
      this.setState(() => ({ text: "" }));
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
            focus={true}
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
