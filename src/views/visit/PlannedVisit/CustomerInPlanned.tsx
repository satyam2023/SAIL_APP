
import React from "react"
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomerCommon from "../UpComingVisit/CustomerCommon";
const CUstomerPlanned:React.FC<{}>=()=>{
    const Data=[
        { uppertext:"Customer Code",
         lowertext:"987654321",
         imagepath:require('../../images/profile2user.png')
           
          },
          { uppertext:"Visit Date" ,
          lowertext:"03/03/2023",
          imagepath:require('../../images/profile2user.png')
    
          },
          { uppertext:"Email ID" ,
          lowertext:"john.doe@sail.in",
          imagepath:require('../../images/profile2user.png')
    
          },
          {uppertext:"Reason of Visit",
           lowertext:"General Inquiry",
           imagepath:require('../../images/profile2user.png')
    
          },{
            uppertext:"Mode of Meeting",
             lowertext:"In-person" ,
             imagepath:require('../../images/profile2user.png')
    
          },{
            uppertext:"Visiting Executive" ,
            lowertext:"John Doe", 
            imagepath:require('../../images/profile2user.png')
    
          },{
    
            uppertext:"Location", 
            lowertext:"Sector 11, Noida" ,
            imagepath:require('../../images/profile2user.png')
          },{
            uppertext:"Contact Number",
           lowertext:"+91-9999-123-456" ,
          imagepath:require('../../images/profile2user.png')
    
          },
          {
            uppertext:"Planned by", 
            lowertext:"John Doe", 
            imagepath:require('../../images/profile2user.png')
          }
    ];

    function renderItem(item:any){
        <CustomerCommon  uppertext={item.item.uppertext} lowertext={item.item.lowertext} imagepath={item.item.imagepath}/>

    }

    return(
        <SafeAreaView>
            <FlatList data={Data} 
             renderItem={renderItem} 
            />

        </SafeAreaView>
    );

}
export default CUstomerPlanned;