import React from "react";
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {MonoText} from "../components/StyledText"
import {decks} from "../utils/stub"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.deckContainer}>
        {Object.values(decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck.title}
        
            >
        <MonoText>{deck.title}</MonoText>
            </TouchableOpacity>
          );
        })}
        </View>
      </ScrollView>
      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  contentContainer: {
    paddingTop: 30
  },
  deckContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20
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
  }
});
