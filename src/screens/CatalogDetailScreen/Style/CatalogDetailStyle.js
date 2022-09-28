import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "pink" },
  image: { height: 120, width: 120, alignSelf: "center" },
  title: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomView: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
});
