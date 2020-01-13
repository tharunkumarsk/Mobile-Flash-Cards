import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

export function StyledInformationView({
  children,
  iconIos,
  iconAndroid,
  iconColor,
  textColor
}) {
  return (
    <View style={styles.center}>
      <Ionicons
        name={Platform.OS === "ios" ? iconIos : iconAndroid}
        size={50}
        color={iconColor}
      />

      <Text style={[styles.title, { color: textColor }]}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30
  }
});

StyledInformationView.propTypes = {
  children: PropTypes.string,
  iconIos: PropTypes.string,
  iconAndroid: PropTypes.string,
  iconColor: PropTypes.string,
  textColor: PropTypes.string
};
