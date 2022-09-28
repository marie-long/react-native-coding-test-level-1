import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const TextButton = ({ text = "Contact Us", buttonStyle, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { ...buttonStyle }]}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

//STYLING
const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    minWidth: 120,
    alignItems: "center",
  },
});
