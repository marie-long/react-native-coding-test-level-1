import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { TextButton } from "../../components";

export const MainScreen = () => {
  //USE NAVIGATION
  const navigation = useNavigation();

  //FUNCTIONS
  const onContactUsPress = () => {
    navigation.navigate("FormScreen");
  };

  const onCatlalogPress = () => {
    navigation.navigate("CatalogScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextButton onPress={onContactUsPress} />
      <TextButton
        text="View Catalog"
        buttonStyle={{ marginTop: 10 }}
        onPress={onCatlalogPress}
      />
    </View>
  );
};

//STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
