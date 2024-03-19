import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
 img:{
    marginLeft:16,
    width:20,
    height:20,
    resizeMode:'contain', 
},
card:{
    width:'45%',
    paddingBottom:20,
    borderRadius:15,
    backgroundColor:Colors.white,
    marginBottom:16,
    paddingHorizontal:17,
},
txt:{ 
    fontFamily:fonts.type.medium,
    fontSize:14,
    lineHeight:20,
    color:Colors.blackPeral
},
dwd:{
    color:Colors.orange,
    fontFamily:fonts.type.medium,
    fontSize:12,
    lineHeight:24,
    textDecorationLine: 'underline',
    marginTop:14,
},
productImage:{
    alignSelf: "center",
    height: 88,
    width: 117,
    resizeMode: "contain",
  }
});
export default styles;