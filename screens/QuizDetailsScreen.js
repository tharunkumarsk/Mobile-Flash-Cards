import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FlipCard from "../components/FlipCard";
import StyledButton from "../components/StyledButton";

class QuizDetailsScreen extends Component {
  state = {
    currentQuestion: 0,
    nbrOfCorrectAnswers: 0,
    isQuizOver: false
  };

  static propTypes = {
    deck: PropTypes.object
  };
  handleAnswersWith = correctAns => {
    let { isQuizOver, nbrOfCorrectAnswers, currentQuestion } = this.state;
    const { questions } = this.props.deck;

    if (correctAns) {
      nbrOfCorrectAnswers++;
    }

    if (questions.length === currentQuestion + 1) {
      isQuizOver = true;
    } else {
      currentQuestion++;
    }

    this.setState(
      previousState => ({
        ...previousState,
        isQuizOver,
        nbrOfCorrectAnswers,
        currentQuestion
      }),
      () => {
        if (isQuizOver) {
          this.moveToResultScreen();
        }
      }
    );
  };

  moveToResultScreen = () => {
    this.props.navigation.navigate("QuizResultScreen", {
      score: this.calculateScore(),
      deckId: this.props.deck.title
    });
    this.resetTheState();
  };

  resetTheState = () => {
    this.setState({
      currentQuestion: 0,
      nbrOfCorrectAnswers: 0,
      isQuizOver: false
    });
  };

  calculateScore = () => {
    let { nbrOfCorrectAnswers } = this.state;
    let { questions } = this.props.deck;
    return ((nbrOfCorrectAnswers / questions.length) * 100).toFixed(0);
  };

  render() {
    const { questions } = this.props.deck;
    const { currentQuestion, isQuizOver } = this.state;
    const question = questions[currentQuestion];
    const totalQuestions = questions.length;
    if (!isQuizOver) {
      return (
        <ScrollView>
          <View style={styles.cardContainer}>
            <FlipCard
              question={question.question}
              answer={question.answer}
              totalQuestions={totalQuestions}
              questionNbr={currentQuestion + 1}
            ></FlipCard>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end", padding: 10 }}>
            <StyledButton
              disabled={false}
              BtnStyle="btnPrimary"
              onPress={() => this.handleAnswersWith(true)}
            >
              Correct
            </StyledButton>
            <StyledButton
              disabled={false}
              BtnStyle="btnSecondary"
              onPress={() => this.handleAnswersWith(false)}
            >
              Incorrect
            </StyledButton>
          </View>
        </ScrollView>
      );
    } else {
      return null;
    }
  }
}

QuizDetailsScreen.navigationOptions = {
  title: "Quiz Details",
  headerTintColor: "green"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
    margin: 10
  }
});

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam("title");
  const deck = state[title];
  return {
    deck
  };
};

export default connect(mapStateToProps, {})(QuizDetailsScreen);
