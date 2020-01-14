import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

export default class FlipCard extends Component {
  UNSAFE_componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
  }
  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const { question, answer, totalQuestions, questionNbr } = this.props;
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    return (
      <View style={styles.container}>
        <Text
          style={styles.countText}
        >{`${questionNbr} / ${totalQuestions}`}</Text>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Animated.View style={[frontAnimatedStyle, styles.cardBtn]}>
            <Text style={styles.flipText}>{question}</Text>
            <Ionicons name="ios-unlock" size={30} />
          </Animated.View>
          <Animated.View
            style={[backAnimatedStyle, styles.cardBtn, styles.flipCardBack]}
          >
            <Text style={styles.flipText}>{answer}</Text>
            <Ionicons name="ios-lock" size={30} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  cardBtn: {
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    backgroundColor: Colors.green,
    borderRadius: 10,
    padding: 5,
    overflow: "hidden"
  },

  flipCardBack: {
    position: "absolute",
    top: 0,
    backgroundColor: Colors.red
  },
  flipText: {
    padding: 20,
    fontSize: 30,
    color: Colors.white,
    textAlign: "center"
  },
  countText: {
    fontSize: 15,
    padding: 5
  }
});

FlipCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  totalQuestions: PropTypes.string.isRequired,
  questionNbr: PropTypes.string.isRequired
};
