import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "commonStyles/RNColor.style";

interface IUploadDocument {
  uploadType: string;
  mediaType?: string;
  style?:ViewStyle
}

const UploadDocumnet = (props: IUploadDocument) => {
  return (
    <View style={props?.style}>
      <Text style={[commonStyles.font14MediumDarkGray]}>{props.uploadType}</Text>
      <TouchableOpacity style={styles.uploadDocumentContainer}>
        <Text
          style={commonStyles.font14MediumDarkGray}
        >{`+   ${props.uploadType}`}</Text>
        {props.mediaType && (
          <Text style={commonStyles.font14RegularDarkGray}>
            {props.mediaType}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UploadDocumnet;

const styles=StyleSheet.create({
  uploadDocumentContainer: {
      width: "100%",
      height: 82,
      borderWidth: 2,
      borderColor: Colors.sailBlue,
      borderStyle: "dashed",
      borderRadius: 33,
      marginTop: 16,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F9F9FC",
    },
   

});
