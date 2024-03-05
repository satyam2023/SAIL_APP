import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    btn:{
        height:56,width:168 ,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#233972',
        marginLeft:20,
        gap:10,
        marginTop:16,
      },
      canceltext:{
        color:'#233972',
        fontWeight:'500',
        fontSize:16,
        lineHeight:20,
        marginVertical:17,
        alignSelf:'center'
    
      },
      btnedit:{
        height:56,width:168 ,
        borderRadius:100,
        backgroundColor:'#233972',
        marginLeft:14,
        gap:10,
        marginTop:16,
    
      },
      edittext:{
        color:'#FFFFFF',
        fontWeight:'500',
        fontSize:16,
        lineHeight:20,
        marginVertical:17,
        alignSelf:'center'
      },
      bottomcontainer:{
        height:114,
        width:'100%',
        backgroundColor:'#FFFFFF',
        flexDirection:'row', 
        position: "absolute",
        bottom:0
         
      },

});
export default styles;