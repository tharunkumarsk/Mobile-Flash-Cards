import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { handleResetAppData } from "../actions/index";
import StyledButton from "../components/StyledButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SettingsScreen extends Component {
  static propTypes = {
    handleResetAppData: PropTypes.func.isRequired
  };

  handleSubmit = () => {
    const { handleResetAppData } = this.props;

    handleResetAppData();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.title}>
            This will clear all your app data !!!
          </Text>
        </View>
        <StyledButton
          disabled={false}
          BtnStyle="btnSecondary"
          onPress={this.handleSubmit}
        >
          Reset Decks
        </StyledButton>
      </View>
    );
  }
}

if (Platform.OS === "ios") {
  SettingsScreen.navigationOptions = {
    title: "Settings"
  };
}

const styles = StyleSheet.create({
  container: {
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
    color: "red"
  }
});
export default connect(null, { handleResetAppData })(SettingsScreen);
