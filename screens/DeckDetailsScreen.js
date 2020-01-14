import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Deck from "../components/Deck";
import { connect } from "react-redux";
import StyledButton from "../components/StyledButton";
import PropTypes from "prop-types";
import { deleteDeckWith } from "../actions/index";

class DeckDetailsScreen extends Component {
  static propTypes = {
    deck: PropTypes.object,
    deleteDeckWith: PropTypes.func.isRequired
  };

  deleteDeck = id => {
    this.props.deleteDeckWith(id);
    this.props.navigation.goBack();
  };
  render() {
    const { deck, navigation } = this.props;
    if (!deck) {
      return null;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cardBtn} key={deck.title}>
          <Deck
            title={deck.title}
            cardsCount={deck.questions.length}
            cardId={1}
          ></Deck>
        </TouchableOpacity>
        <View style={{ height: 80 }} />
        <View style={{ paddingBottom: 100 }}>
          <StyledButton
            disabled={false}
            BtnStyle="btnPrimary"
            onPress={() =>
              navigation.navigate("AddCardScreen", { title: deck.title })
            }
          >
            Add Cards
          </StyledButton>

          <StyledButton
            disabled={false}
            BtnStyle="btnSecondary"
            onPress={this.deleteDeck}
          >
            Start Quiz
          </StyledButton>
          <StyledButton
            disabled={false}
            BtnStyle="btnSecondary"
            onPress={() => this.deleteDeck(deck.title)}
          >
            Delete Deck
          </StyledButton>
        </View>
      </View>
    );
  }
}

DeckDetailsScreen.navigationOptions = {
  title: "Deck Details",
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

export default connect(mapStateToProps, { deleteDeckWith })(DeckDetailsScreen);
