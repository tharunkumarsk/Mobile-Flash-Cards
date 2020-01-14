import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FlipCard from "../components/FlipCard";
import StyledButton from "../components/StyledButton";
import { Divider } from "react-native-elements";

class QuizDetailsScreen extends Component {
  state = {
    showing: "question0"
  };

  static propTypes = {
    deck: PropTypes.object
  };

  deleteDeck = id => {
    this.props.deleteDeckWith(id);
    this.props.navigation.goBack();
  };
  handleFlip = showing => {
    this.setState({ showing });
  };
  render() {
    const { questions } = this.props.deck;
    const totalQuestions = questions.length;
    return (
      <ScrollView>
        {questions.map((question, idx) => (
          <View style={styles.cardContainer}>
            <FlipCard
              question={question.question}
              answer={question.answer}
              totalQuestions={totalQuestions}
              questionNbr={idx + 1}
              onPress={this.handleFlip}
            ></FlipCard>

            <View style={{ paddingBottom: 10 }}></View>
            {this.state.showing === `answer${idx}` && (
              <View>
                <StyledButton
                  disabled={false}
                  BtnStyle="btnPrimary"
                  onPress={() =>
                    this.props.navigation.navigate("QuizDetailsScreen", {
                      title: deck.title
                    })
                  }
                >
                  Correct
                </StyledButton>
                <StyledButton
                  disabled={false}
                  BtnStyle="btnSecondary"
                  onPress={() =>
                    this.props.navigation.navigate("QuizDetailsScreen", {
                      title: deck.title
                    })
                  }
                >
                  Incorrect
                </StyledButton>
                <Divider
                  style={{ backgroundColor: "gray", height: 2, marginTop: 10 }}
                />
              </View>
            )}
          </View>
        ))}
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
    margin: 20
  },
  contentContainer: {
    justifyContent: "space-around",
    paddingTop: 30
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
