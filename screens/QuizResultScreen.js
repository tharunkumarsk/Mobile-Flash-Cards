import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "../components/StyledButton";
import { StyledInformationView } from "../components/StyledInformationView";
import Colors from "../constants/Colors";
import { connect } from "react-redux";

class QuizResultScreen extends Component {
  render() {
    const { navigation, score, deckId } = this.props;
    return (
      <View style={styles.container}>
        <StyledInformationView
          iconIos="ios-trophy"
          iconAndroid="md-trophy"
          iconColor={score > 50 ? Colors.green : Colors.red}
          textColor={score > 50 ? Colors.green : Colors.red}
        >
          {`your score is  ${score} % !!!`}
        </StyledInformationView>
        <View style={{ height: 80 }} />
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            padding: 10,
            marginBottom: 100
          }}
        >
          <StyledButton
            disabled={false}
            BtnStyle="btnPrimary"
            onPress={() => navigation.navigate("HomeStack")}
          >
            Try a new one
          </StyledButton>
          <StyledButton
            disabled={false}
            BtnStyle="btnSecondary"
            onPress={() =>
              navigation.navigate("QuizDetailsScreen", { title: deckId })
            }
          >
            Retake the Quiz
          </StyledButton>
        </View>
      </View>
    );
  }
}

QuizResultScreen.navigationOptions = {
  title: "Result",
  headerLeft: null
};

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

const mapStateToProps = (state, { navigation }) => {
  const score = navigation.getParam("score");
  const deckId = navigation.getParam("deckId");

  return {
    score,
    deckId
  };
};

export default connect(mapStateToProps)(QuizResultScreen);
