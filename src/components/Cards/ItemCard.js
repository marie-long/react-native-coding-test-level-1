import _ from "lodash";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TextButton } from "../Buttons";

export const ItemCard = ({
  title = "Pokemon Name",
  buttonPress,
  pokemonIndex = 0,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.rowWrapper}>
        <Text style={styles.title}>{_.capitalize(title)}</Text>
        <Image
          style={{ height: 80, width: 80 }}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`,
          }}
        />
      </View>
      <TextButton text="View" onPress={buttonPress} />
    </View>
  );
};

//STYLING
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    // height: 60,
    borderRadius: 10,
    justifyContent: "center",
    padding: 15,
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
});
