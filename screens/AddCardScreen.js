import React, { Component } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import StyledButton from "../components/StyledButton";
import { StyledInputView } from "../components/StyledInputView";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addQuestionsToDeck } from "../actions/index";

class AddCardScreen extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    addQuestionsToDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  state = {
    question: "",
    answer: "",
    initialBtnType: "btnDisabled"
  };

  handleQuestionChange = question => {
    this.setState({ question });
  };

  handleAnswerChange = answer => {
    this.setState({ answer });
  };

  handleSubmit = () => {
    const { addQuestionsToDeck, title, navigation } = this.props;
    const { question, answer } = this.state;
    if (question && answer) {
      const card = {
        question,
        answer
      };
      addQuestionsToDeck(title, card);

      this.setState({ question: "", answer: "" });
      navigation.goBack();
    }
  };
  render() {
    const { title } = this.props;
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <Text style={styles.title}>{`You are adding card to ${title}`}</Text>
        </View>
        <View>
          <StyledInputView
            text={question}
            handleChange={this.handleQuestionChange}
            handleSubmit={this.handleSubmit}
            placeholder="Enter your question"
            focus={true}
          />
          <StyledInputView
            text={answer}
            handleChange={this.handleAnswerChange}
            handleSubmit={this.handleSubmit}
            placeholder="Enter your answer"
            focus={false}
          />
        </View>
        <View style={{ padding: 10 }}>
          <StyledButton
            disabled={question === "" || answer === ""}
            BtnStyle={question && answer ? "btnPrimary" : "btnDisabled"}
            onPress={this.handleSubmit}
          >
            Add card
          </StyledButton>
        </View>
        <View style={{ height: 50 }} />
      </KeyboardAvoidingView>
    );
  }
}
AddCardScreen.navigationOptions = {
  title: "Add card",
  headerTintColor: "green"
};

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
const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam("title");

  return {
    title
  };
};

export default connect(mapStateToProps, { addQuestionsToDeck })(AddCardScreen);
