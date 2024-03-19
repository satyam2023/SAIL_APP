import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: "40%",
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 2,
  },
  modalContainer: {
    backgroundColor: Colors.background2,
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 20,
  },
  img: { height: 24, width: 24, resizeMode: "contain" },
});

export default styles;
