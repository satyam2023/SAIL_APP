import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
interface BottomProps {
  status: any;
}

const BottomBar: React.FC<BottomProps> = ({ status }: BottomProps) => {
  return (
    <View style={styles.bottomcontainer}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          status(false);
        }}
      >
        <Text style={styles.canceltext}>Cancel Visit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnedit}>
        <Text style={styles.edittext}>Edit Visit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BottomBar;
