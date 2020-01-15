import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import Colors from "../constants/Colors";

export default function StyledButton({
  children,
  onPress,
  BtnStyle = "",
  disabled = true
}) {
  const BtnStyles = styles[BtnStyle];
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={[
          BtnStyles,
          Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
        ]}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.submitBtnText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  iosSubmitBtn: {
    padding: 10,
    textAlign:"center",
    borderRadius: 7,
    height: 50,
   
  },
  AndroidSubmitBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  submitBtnText: {
    color: Colors.white,
    fontSize: 22,
    textAlign: "center"
  },
  btnContainer: {
    paddingBottom: 15
  },
  btnDisabled: {
    backgroundColor: Colors.gray,
    borderColor: Colors.gray,
    color: Colors.gray
  },
  btnPrimary: {
    backgroundColor: Colors.green
  },
  btnSecondary: {
    backgroundColor: Colors.red
  },
  btnTeritary: {
    backgroundColor: Colors.purple
  }
});

StyledButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  BtnStyle: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};
