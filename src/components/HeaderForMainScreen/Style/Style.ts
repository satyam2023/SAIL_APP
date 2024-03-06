
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    headerContainer:{
        height:60,
        width: "100%",
        backgroundColor: "#233972",
        flexDirection: "row",
        alignItems:'center',
        paddingHorizontal:20,
    },
    img:{
        tintColor: "#FFFFFF",
        width: 9,
        height: 15,
        transform: [{ rotate: "180deg" }],
      },
      headingContent:{
        marginTop: 13,
        color: "#FFFFFF",
        marginLeft: 16,
        height: 36,
        fontWeight: "600",
        fontSize: 16,
      }

});


export default styles;