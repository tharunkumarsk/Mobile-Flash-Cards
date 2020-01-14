import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import StyledButton from "../components/StyledButton";
import { StyledInputView } from "../components/StyledInputView";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddCardScreen extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
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
    //Api call goes here
  };
  render() {
    const { title } = this.props;
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.title}>{`You are adding card to ${title}`}</Text>
        </View>
        <View style={[styles.block]}>
          <StyledInputView
            text={question}
            handleChange={this.handleQuestionChange}
            handleSubmit={this.handleSubmit}
            placeholder="Enter your question"
          />
          <StyledInputView
            text={answer}
            handleChange={this.handleAnswerChange}
            handleSubmit={this.handleSubmit}
            placeholder="Enter your answer"
          />
        </View>
        <StyledButton
          disabled={question === "" || answer === ""}
          BtnStyle={question && answer ? "btnPrimary" : "btnDisabled"}
          onPress={this.handleSubmit}
        >
          Add card
        </StyledButton>
      </View>
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
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  block: {
    marginBottom: 20
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

export default connect(mapStateToProps)(AddCardScreen);
