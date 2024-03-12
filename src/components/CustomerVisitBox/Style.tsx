import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal:16,
    alignItems:'center',
    justifyContent:'space-around',
    marginBottom:16
  },
  customertext: {
    color: Colors.darkGrey,
    fontFamily:fonts.type.regular,
    fontSize: 14,
    lineHeight: 14,
  },
  companytext: {
    fontFamily: fonts.type.medium,
    fontSize: 14,
    lineHeight: 16,
    marginTop: 8,
    color: Colors.blackPeral,
  },
  img:{
    transform:[{rotate:'90deg'}]
  }

});

export default styles;
