import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.white,
    width: '100%',
    marginTop: 24,
    borderRadius: 10,
    paddingHorizontal:16,  
  },
  img: {
    transform: [{ rotate: "0deg" }],
  },
  box: {
    height: 62,
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.white,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical:5
  },
  escalateBox: {
    borderWidth: 1,
    borderColor:Colors.lightGray,
    marginTop: 16,
    borderRadius: 33,
    height: 58,
    flexDirection: "row",
    paddingHorizontal:16,
    alignItems:'center',
    justifyContent:"space-between"
  },
  commentBox: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 33,
    paddingHorizontal:16,
    height: 200,
  },
 
});
export default styles;
