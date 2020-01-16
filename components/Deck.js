import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import PropTypes from "prop-types";

export default class Deck extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
    cardId: PropTypes.number.isRequired
  };
  render() {
    const { title, cardsCount, cardId } = this.props;
    const cardStyle = cardId % 2 == 0 ? styles.redTile : styles.greenTile;
    return (
      <View style={[cardStyle, styles.MainContainer]}>
        <Text style={styles.cardViewTitle}> {title} </Text>
        <Text style={styles.cardViewCount}> {cardsCount} cards </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 200
  },

  cardViewTitle: {
    fontSize: 40,
    color: "#000",
    textAlign: "center",
    marginTop: 20
  },
  cardViewCount: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginBottom: 5
  },
  redTile: {
    backgroundColor: Colors.red
  },
  greenTile: {
    backgroundColor: Colors.green
  }
});
