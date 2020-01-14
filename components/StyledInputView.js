import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import PropTypes from "prop-types";

export function StyledInputView({
  text,
  handleChange,
  handleSubmit,
  placeholder
}) {
  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={handleChange}
      placeholder={placeholder}
      autoFocus={true}
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: Colors.green,
    backgroundColor: Colors.white,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
    fontSize: 20,
    height: 50,
    marginBottom: 20
  }
});

StyledInputView.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
