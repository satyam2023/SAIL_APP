import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    searchContainer:{
        height: 92,
        width: '100%',
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        marginTop: 24,
      },
      searchText:{
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 16,
        height: 16,
        color: "#110F24",
      },
      searchPlace:{
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 14,
        height: 14,
        color: "#110F2480",
        marginTop: 8,
      },
      searchPhone:{
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 14,
        height: 14,
        color: "#110F2480",
        marginTop: 8,
      }

});

export default styles;