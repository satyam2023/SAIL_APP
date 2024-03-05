import React, { useRef, useState } from "react";
import Header from "./Header";
import CustomerDetails from "./CustomerDetails";
import Footer from "./component/Footer/Footer";
import { ScrollView, View } from "react-native";
import CustomerRepresentative from "./CustomerRepresentative";
import RegistrationCompleted from "./RegistrationCompleted/RegistrationCompleted";
const Details=()=>{
    const [CurrentScreen,setCurrentScreen]=useState<number>(1)
    const [FooterStatus,setFooterStatus]=useState<string>("")
    function setScreen(param:number){
        setCurrentScreen(param);
    }

    function SetFooter(param:any){
               setFooterStatus(param)
    }

    const CustomerRepresentativeRef=useRef('');

    function FooterExecuted(){
        setFooterStatus("")
        CustomerRepresentativeRef.current.Clicked();
    }
    
    return(
        <>
        <ScrollView style={{backgroundColor:'#F9F9FC',flex:1}}>
        
        {CurrentScreen==1 && <CustomerDetails />  }
        {CurrentScreen==2 && <CustomerRepresentative SetFooter={SetFooter} ref={CustomerRepresentativeRef}/>}
        {CurrentScreen==3 && <RegistrationCompleted />}
        </ScrollView>
        {CurrentScreen!=3 ?<Footer CurrentScreen={CurrentScreen} setScreen={setScreen} FooterStatus={FooterStatus}  FooterExecuted={FooterExecuted} />:null}
        </>
    )

} 
export default Details;


