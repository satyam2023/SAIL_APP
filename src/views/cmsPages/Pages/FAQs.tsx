import React from "react";
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Glyphs from "assets/Glyphs";
 
interface Props{
    setScreen:Function,
}


const FAQs:React.FC<Props>=({setScreen}:Props)=>{
    const Data=[{tag:"How do i get Enlisted"},
    {tag:"What are 'Third Parties'?"},
    {tag:"What does information mean?"},
    {tag:"Who are 'Third Parties'?"},
    {tag:"What does information mean?"},
    {tag:"How do i get Enlisted?"},
    {tag:"What is not open to disclosure?"},
    {tag:"What does information mean?"},

];
    function renderItem(item:any){
        // function Pagescontrol(){
        //     if(item.item.tag=="Operations"){
        //          setpages("Operations");
        //     }
        //     else if(item.item.tag=="Product Mix & Marketing"){
        //         setpages("Product Mix & Marketing")
        //     }
        //     else if(item.item.tag=="Management Team"){
        //         setpages("Management Team")
        //     }

        //     console.log("page tyope::",item.item.tag)
           

        // }
        return(
            <>
            <View style={{height:62,width:363,borderRadius:4,backgroundColor:'#FFFFFF',marginTop:16,flexDirection:'row'}}>
             <Text style={{width:273,height:25,marginLeft:24,fontWeight:'500',fontSize:14,lineHeight:24,color:'#110F24',marginTop:19}}>{item.item.tag}</Text>
             <TouchableOpacity onPress={()=>{
                // setOpenStatus(!openStatus);Pagescontrol()
                }}>
                <Image source={Glyphs.Add} style={{transform:[{rotate:'0deg'}],marginTop:19,marginLeft:12}}/>
                </TouchableOpacity>
                
            </View>
            {/* { (pages=="Operations" && openStatus && item.item.tag=="Operations") &&
                <Text style={{backgroundColor:'#FFFFFF',color:'black',lineHeight:20,marginRight:27}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel possimus, veritatis, excepturi, culpa iusto ipsam doloremque repudiandae dolore. Exercitationem, molestiae laudantium.
                </Text>
            }
             { (pages=="Product Mix & Marketing" && openStatus && item.item.tag=="Product Mix & Marketing") &&
                <Text style={{backgroundColor:'#FFFFFF',color:'black',lineHeight:20,marginRight:27}}>
                    Product Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel possimus, veritatis, excepturi, culpa iusto ipsam doloremque repudiandae dolore. Exercitationem, molestiae laudantium.
                </Text>
            }
             { (pages=="Management Team" && openStatus && item.item.tag=="Management Team") &&
                <Text style={{backgroundColor:'#FFFFFF',color:'black',lineHeight:20,marginRight:27}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel possimus, veritatis, excepturi, culpa iusto ipsam doloremque repudiandae dolore. Exercitationem, molestiae laudantium.
                </Text>
            } */}
            </>
        );
    }
    return(
        <View>
            <SafeAreaView>
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity style={{marginLeft:21,marginTop:18}} onPress={()=>{setScreen("CMS")}}>
                 <Image source={Glyphs.Arrow} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,height:36,fontWeight:"600",fontSize:16}}>FAQs</Text>
            </View>
            <FlatList data={Data} renderItem={renderItem} style={{marginLeft:20}}/>
    </SafeAreaView>
            
        </View>
    );
};

export default FAQs;