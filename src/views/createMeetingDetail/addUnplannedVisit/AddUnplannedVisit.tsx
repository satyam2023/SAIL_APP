import React, { useRef, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
// import InputText from "../../InputTextInsideMain";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import DropDown from "components/DropDown/DropDown";
import { CustomerContactDetails, CustomerMode, CustomerStatus, CustomerType, SelectDepartment, SelectRegion } from "../dataForDropDown/data";
import Issue from "./Issue";
import Footer from "./Footer";
import styles from "../Style";
// import DatePicker from "react-native-date-picker";
// import moment from "moment";
interface AddProps{
    navigationProps:any,
    setVisitSuccess:Function
}
const AddUnplannedVisit: React.FC<AddProps> = ({navigationProps,setVisitSuccess}:AddProps) => {

//    const [opentime,setopentime]=useState(false);
//    const [time, setTime] = useState(new Date())
//    const [timeData, setTimeData] = useState("Visit Time")
//     const [open, setOpen] = useState(false)
//     const [date, setDate] = useState(new Date())
//     const [dateData, setDateData] = useState("Visit Date")
    const [reason,setreason]=useState<boolean>(false);
    const details = {
        customerCode: useRef(''),
        companyName: useRef(''),
        personName: useRef(''),
        designation: useRef(''),
        address: useRef(''),
        whatsapp: useRef(''),
        nameWithNumber: useRef(''),
        reason:useRef(''),

    }

    function setReason(param:boolean){
       setVisitSuccess(param);
    }

    function setSuccess(param:boolean){
        setVisitSuccess(param)
         
    }
    return (
<>
        <ScrollView style={{ marginBottom: 120,paddingHorizontal:20}}>
            <DropDown data={CustomerType} heading="Customer Type" setReason={setReason} />
           <View style={styles.inputbox}>
            <InputTextWithoutIcon
                placeholder="Customer Code"
                ChangeText={(text: any) => {
                    details.customerCode.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}
            />
            </View>
            <DropDown data={CustomerType} heading="Status of Customer" setReason={setReason} />
            <View style={styles.inputbox}>
            <InputTextWithoutIcon
                placeholder="Enter Company Name"
                ChangeText={(text: any) => {
                    details.companyName.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}
            />
            </View>
            <View style={styles.inputbox}>
            <InputTextWithoutIcon
                placeholder="Enter Person Name"
                ChangeText={(text: any) => {
                    details.personName.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}
            />
            </View>
            <View style={styles.inputbox}>
            <InputTextWithoutIcon
                placeholder="Enter Designation"
                ChangeText={(text: any) => {
                    details.designation.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}
            />
</View>
<View style={styles.inputbox}>
            <InputTextWithoutIcon
                placeholder="Enter Address"
                ChangeText={(text: any) => {
                    details.address.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}
            />
            </View>
            <View style={styles.inputbox}>
            <InputTextWithoutIcon
                placeholder="Enter Whatsapp Number"
                ChangeText={(text: any) => {
                    details.whatsapp.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}
            />
            </View>
            <DropDown data={CustomerType} heading="Select Departement" setReason={setReason}/>
            <View style={styles.inputbox}>
            <InputTextWithoutIcon
                placeholder="Enter Name Followed by 10 digits number"
                ChangeText={(text: any) => {
                    details.nameWithNumber.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}
            />
            </View>
            {/* <TouchableOpacity style={{ height: 56, width: 353, backgroundColor: '#FFFFFF', marginLeft: 20, marginTop: 16, borderRadius: 33, flexDirection: 'row' }} onPress={() => { setOpen(true) }}>
                     <Image source={require('../../images/Calender.png')} style={{ marginLeft: 16, marginTop: 16 }} />
                     <Text style={[{ marginTop: 16, marginLeft: 16, color: '#110F2480', fontWeight: '400', fontSize: 14 }, dateData != "Visit Date" ? { color: '#110F24' } : {}]}>{dateData}</Text>
                     <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode="date"
                        onConfirm={(date:any) => {
                           setOpen(false)
                           setDate(date)
                           // setDateData(moment(date).format("DMMMM YYYY"));
                           setDateData(date.toLocaleDateString())
                        }}
                        onCancel={() => {
                           setOpen(false);
                        }}
                        androidVariant="iosClone"
                        dividerHeight={10}
                     //theme="dark"

                     />
                  </TouchableOpacity> */}

                  {/* <TouchableOpacity style={{ height: 56, width: 353, backgroundColor: '#FFFFFF', marginLeft: 20, marginTop: 16, borderRadius: 33, flexDirection: 'row' }} onPress={() => { setopentime(true) }}>
                     <Image source={require('../../images/Calender.png')} style={{ marginLeft: 16, marginTop: 16 }} />
                     <Text style={[{ marginTop: 16, marginLeft: 16, color: '#110F2480', fontWeight: '400', fontSize: 14 }, timeData != "Visit Time" ? { color: '#110F24' } : {}]}>{timeData}</Text>
                     <DatePicker
                        modal
                        open={opentime}
                        date={time}
                        mode="time"
                        onConfirm={(date:any) => {
                           setopentime(false);
                           setTime(date)
                           // setDateData(moment(date).format("DMMMM YYYY"));
                           setTimeData(moment(date).utcOffset('+05:30').format(' hh:mm:ss a'))
                        }}
                        onCancel={() => {
                           setopentime(false);
                        }}
                        androidVariant="iosClone"
                        dividerHeight={10}
                     //theme="dark"

                     />
                  </TouchableOpacity> */}

            <DropDown data={CustomerType} heading="Select Reason"  setReason={setReason}/>
            {
                reason?
                <View style={styles.inputbox}>
                <InputTextWithoutIcon
                placeholder="Enter Reason"
                ChangeText={(text: any) => {
                    details.reason.current = text;
                }
                }
                keyboardType="default"
                secureText={false}
                maxLength={20}/>
                </View>:null
            }

            <Issue/>
            <DropDown data={CustomerType} heading="Select Customer Mode"  setReason={setReason}/>
            <DropDown data={CustomerType} heading="Select Customer Contact Details"  setReason={setReason}/>
            <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, width: 146, color: '#666666', marginTop: 16, marginLeft: 21 }}>
                Upload Visiting Card
            </Text>
            <TouchableOpacity style={{ width: '100%', height: 82, borderWidth: 1, borderColor: '#233972', borderStyle: 'dashed', borderRadius: 33, marginTop: 19, backgroundColor: '#E9EBF1',marginBottom:130 }}>
                <View style={{ height: 34, marginTop: 27 }}>
                    <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 16, color: '#666666', lineHeight: 16 }}>
                        +  Upload Visiting Card
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        <Footer setSuccess={setSuccess}/>

        </>
        
    );
}
export default AddUnplannedVisit;