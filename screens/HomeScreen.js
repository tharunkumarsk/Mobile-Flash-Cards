import React, { Component } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Deck from "../components/Deck";
import { connect } from "react-redux";
import { handlAppLoadData } from "../actions/index";
import StyledButton from "../components/StyledButton";
import PropTypes from "prop-types";
import { StyledInformationView } from "../components/StyledInformationView";
import Colors from "../constants/Colors";

class HomeScreen extends Component {
  static propTypes = {
    handlAppLoadData: PropTypes.func.isRequired,
    decks: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.handlAppLoadData();
  }

  addNewDeck = () => {
    this.props.navigation.navigate("AddDeckStack");
  };

  render() {
    const { decks, navigation } = this.props;
    const decksArray = Object.values(decks);
    if (decksArray.length === 0) {
      return (
        <View style={styles.containerNoDecks}>
          <StyledInformationView
            iconIos="ios-information-circle"
            iconAndroid="md-information-circle"
            iconColor="orange"
            textColor={Colors.green}
          >
            You have not yet added any decks !!!
          </StyledInformationView>
          <StyledButton
            disabled={false}
            BtnStyle="btnPrimary"
            onPress={this.addNewDeck}
          >
            Start Adding
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
            <TouchableOpacity
              style={styles.cardBtn}
              key={deck.title}
              onPress={() =>
                navigation.navigate("DeckDetailsScreen", { title: deck.title })
              }
            >
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
if (Platform.OS === "ios") {
  HomeScreen.navigationOptions = {
    title: "Welcome",
    headerTintColor: "green"
  };
} else {
  HomeScreen.navigationOptions = {
    header: null
  };
}

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

  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  containerNoDecks: {
    flex: 1,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    marginBottom: 100
  }
});

const mapStateToProps = state => ({ decks: state });

export default connect(mapStateToProps, { handlAppLoadData })(HomeScreen);
