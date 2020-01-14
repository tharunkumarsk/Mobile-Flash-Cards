import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FlipCard from "../components/FlipCard";

class QuizDetailsScreen extends Component {
  static propTypes = {
    deck: PropTypes.object
  };

  deleteDeck = id => {
    this.props.deleteDeckWith(id);
    this.props.navigation.goBack();
  };
  render() {
    const { questions } = this.props.deck;

    return (
      <ScrollView>
        {questions.map((question, idx) => (
          <View style={styles.cardContainer}>
            <FlipCard
              question={question.question}
              answer={question.answer}
            ></FlipCard>
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
