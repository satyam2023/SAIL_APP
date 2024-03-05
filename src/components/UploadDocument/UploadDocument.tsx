import React from "react";
import styles from "./Style/Style";
import { Text, TouchableOpacity } from "react-native";

const UploadDocumnet=()=>{
    return(
        <>
          <Text style={styles.uploadText}>Upload Video/Image</Text>
        <TouchableOpacity style={styles.uploadDocumentContainer}>
          <Text style={styles.mediaText}> Upload Media</Text>
          <Text style={styles.mediaType}>(including png, mp4, mov max 2 mb)</Text>
        </TouchableOpacity>
        </>
    )
};

export default UploadDocumnet;