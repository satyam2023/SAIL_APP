import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  inputbox: {
    width: "100%",
    height: 56,
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 12,
    // position:'absolute'
  },
  floatingTextInput: {
    width: '100%',
    height: 53,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    zIndex: 4,
    bottom: 26.5,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:16,
  },
  lastVisit: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 36,
    color: "#000000",
    marginTop: 26,
  },
  searcchBox: {
    backgroundColor: "#DFDEE1",
    height: 56,
    width: "100%",
    borderRadius: 100,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
  },
  userCardContainer:{
    height: 70,
    width: '100%',
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginTop: 12,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:"center",
    paddingHorizontal:16
  },
  searchContainer: { height: 28, backgroundColor: "#233972", zIndex: -5 },
  userCardText:{
    
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 14,
      color: "#110F24",
    
  }
});

export default styles;
