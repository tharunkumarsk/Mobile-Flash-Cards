import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FlipCard from "../components/FlipCard";
import StyledButton from "../components/StyledButton";
import { Divider } from "react-native-elements";

class QuizDetailsScreen extends Component {
  state = {
    currentQuestion:0,
    nbrOfCorrectAnswers:0,
    isQuizOver:false
  };

  static propTypes = {
    deck: PropTypes.object
  };

  handleAnswersWith = (correctAns) => {
    let { isQuizOver, nbrOfCorrectAnswers, currentQuestion } = this.state
    const { questions } = this.props.deck

    if(correctAns){
      nbrOfCorrectAnswers ++
    }

    if(questions.length === currentQuestion + 1){
      isQuizOver = true
    }
    else {
      currentQuestion ++
    }
    this.setState({
      isQuizOver,
      nbrOfCorrectAnswers,
      currentQuestion
    })
      
  };

  
  render() {
    const { questions } = this.props.deck;
    const{currentQuestion,isQuizOver,nbrOfCorrectAnswers} = this.state
    const question = questions[currentQuestion]
    const totalQuestions = questions.length;
    if(isQuizOver){
      console.log(nbrOfCorrectAnswers)
      return null
    }
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
              <View style={{ flex: 1,
                justifyContent: 'flex-end',
                 }}>
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
  }
}

QuizDetailsScreen.navigationOptions = {
  title: "Quiz Details",
  headerTintColor: "green"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

export default connect(mapStateToProps)(QuizDetailsScreen);
