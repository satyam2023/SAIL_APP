import Glyphs from "assets/Glyphs";
import React, { useDebugValue } from "react";
import { Image} from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./Style/Style";
import { useDispatch } from "react-redux";
import { MODAL_TYPE } from "redux/actionConstants";
import { BottomModal } from "redux/actions/UIAction";

const TabButton = () => { 
    const dispatch=useDispatch();
    function handleBottom(){
        dispatch(BottomModal(true))
    }

    return (
        <TouchableOpacity style={styles.conatiner} onPress={handleBottom}>
        <Image source={Glyphs.Add} tintColor={"#FFF"} />
        </TouchableOpacity>
    );
};

export default TabButton;
