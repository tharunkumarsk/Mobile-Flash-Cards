import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class QuizDetailsScreen extends Component {
  static propTypes = {
    deck: PropTypes.object
  };

  deleteDeck = id => {
    this.props.deleteDeckWith(id);
    this.props.navigation.goBack();
  };
  render() {
    const { deck } = this.props;
    if (!deck) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(deck)}</Text>
      </View>
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
    justifyContent: "space-around",
    padding: 15
  },
  cardBtn: {
    flexDirection: "column",
    justifyContent: "flex-end",
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
