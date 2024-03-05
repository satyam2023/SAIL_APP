import { blue, grey } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    uploadDocumentContainer: {
        width: "100%",
        height: 82,
        borderWidth: 2,
        borderColor: blue,
        borderStyle: "dashed",
        borderRadius: 33,
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9FC",
      },
      mediaText: { color: "#110F2480", fontWeight: "500", fontSize: 14 },
      mediaType: { color: "#110F2480", fontWeight: "400", fontSize: 12 },
      uploadText: {
        color: grey,
        fontWeight: "500",
        fontSize: 14,
      },

});

export default styles;