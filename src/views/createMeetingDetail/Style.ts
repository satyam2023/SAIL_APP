
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({

notheading:{
    width:131,
    height:35,
    borderRadius:100,
    paddingHorizontal:16,
    paddingVertical:10,
    gap:10,
    backgroundColor:'#EEFDFF',
    flexDirection:'row',
    marginTop:32,
    marginLeft:10,
},
inputbox:{
        
    width:'100%',
    height:56,
    borderRadius:33,
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    marginTop:12,
    // position:'absolute'  
 },

plannedheading:{
    marginLeft:16,
    backgroundColor:'#EEF4FF'
},
secondheading:{
    marginLeft:16,
    backgroundColor:'#233972'
},
executedheading:{
    backgroundColor:'#EDFEEF',
    marginLeft:16,
},
searchbar:{
width:353,
height:56,
borderRadius:33,
//paddingTop:18,

backgroundColor:'#FFFFFF',
marginLeft:20,
marginTop:16,
flexDirection:'row',
},
textinput:{
    width:289,
    //height:20,
   // opacity:50,
    fontWeight:'400',
    fontSize:14,
    lineHeight:20,
    marginLeft:16,
    //height:20,
},
notexecutedheading:{
    backgroundColor:'#14A223',
    marginLeft:16,
},
    customertext:{
marginTop:16,
color:'#110F2480',
fontWeight:'400',
fontSize:14,
lineHeight:14
    },
    companytext:{
        fontWeight:"500",
        fontSize:14,
        lineHeight:16,
        marginTop:8,
        color:'#110F24'
    },
    img:{
        marginLeft:22.5,
        marginTop:22.5,
    },
    FooterContainer:{
        backgroundColor:'#FFFFFF',
        //flexDirection:'row',
       // justifyContent:'space-evenly',
        height:120,
        width:'100%',
        position:'absolute',
        bottom:120,
    },
    
    topHeaderContainer:{
        flexDirection: "row",
        paddingHorizontal:20,
        justifyContent: "space-between",
        paddingBottom:10,
        
      }

});
export default styles;