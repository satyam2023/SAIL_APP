import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

  floatingTextInput: {
    width: '100%',
    height: 53,
    borderRadius: 15,
    backgroundColor: Colors.white,
    flexDirection: "row",
    zIndex: 4,
    bottom: 26.5,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:16,
  },
  
  searcchBox: {
    backgroundColor: Colors.lightGrey,
    height: 56,
    width: "100%",
    borderRadius: 100,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  
 
});

export default styles;
