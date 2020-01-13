import React, { Component } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import Deck from "../components/Deck";
import { connect } from "react-redux";
import { handlAppLoadData } from "../actions/index";
import StyledButton from "../components/StyledButton";
import PropTypes from "prop-types";

class HomeScreen extends Component {
  static propTypes = {
    handlAppLoadData: PropTypes.func.isRequired,
    decks: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.handlAppLoadData();
  }

  addNewDeck = () => {
    this.props.navigation.navigate("AddDeckStack");
  };

  render() {
    const { decks } = this.props;
    const decksArray = Object.values(decks);
    if (decksArray.length === 0) {
      return (
        <View style={styles.containerNoDecks}>
          <View style={styles.block}>
            <Text style={styles.title}>
              You have not yet added any decks !!!
            </Text>
          </View>
          <StyledButton
            disabled={false}
            BtnStyle="btnPrimary"
            onPress={this.addNewDeck}
          >
            Add a new Deck
          </StyledButton>
        </View>
      );
    }
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {decksArray.map((deck, index) => {
          return (
            <TouchableOpacity style={styles.cardBtn} key={deck.title}>
              <Deck
                title={deck.title}
                cardsCount={deck.questions.length}
                cardId={index + 1}
              ></Deck>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20
  },

  contentContainer: {
    paddingTop: 30
  },

  cardBtn: {
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 1,
    margin: 10
  },

  //Nicely used the platfom.select in styling
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  containerNoDecks: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "#fff"
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    color: "green"
  }
});

const mapStateToProps = state => ({ decks: state });

export default connect(mapStateToProps, { handlAppLoadData })(HomeScreen);
