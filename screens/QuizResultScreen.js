import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "../components/StyledButton";
import { StyledInformationView } from "../components/StyledInformationView";
import Colors from "../constants/Colors";

class QuizResultScreen extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <StyledInformationView
          iconIos="ios-trash"
          iconAndroid="md-trash"
          iconColor={Colors.green}
          textColor={Colors.green}
        >
          your scrore is 100% !!!
        </StyledInformationView>
        <View style={{ height: 80 }} />
        <View style={{ paddingBottom: 100 }}>
                <StyledButton
                  disabled={false}
                  BtnStyle="btnPrimary"
                  onPress={() =>
                    navigation.navigate("HomeStack")
                  }
                 
                >
                  Try a new one
                </StyledButton>
                <StyledButton
                  disabled={false}
                  BtnStyle="btnSecondary"
                  onPress={() =>
                    navigation.navigate("DeckDetailsScreen", { title: "React" })
                  }
                >
                  Retake the Quiz
                </StyledButton>
                </View>
      </View>
    );
  }
}

if (Platform.OS === "ios") {
  QuizResultScreen.navigationOptions = {
    title: "Result",
    headerLeft: null
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    color: "red"
  }
});
export default QuizResultScreen;
