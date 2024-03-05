import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import ProductCard from "./ProductCard";
import styles from "./style/style";
import InputText from "components/InputText/InputText";
import QR from "./QR";
import Glyphs from "assets/Glyphs";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const ProductCatalog: React.FC<{}> = (props: any) => {
  const tabBarHeight = useBottomTabBarHeight()+15;
  const [qrStatus, setQrStatus] = useState<boolean>(false);
  const [dataToSend, setDataToSend] = useState("");
  function setQr(param: boolean) {
    setQrStatus(param);
  }

  const details = {
    searchDetails: useRef(""),
  };

  const ProductRef = useRef<any>();
  async function SearchClicked() {
    await setDataToSend(details.searchDetails.current);
    ProductRef.current.handleClicked();
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9FC", flex:1,marginBottom:tabBarHeight}}>
      <View style={{paddingHorizontal:20}}>
        {!qrStatus ? (
          <>
            <View style={styles.inputbox}>
              <View style={{ backgroundColor: "#E6E6E6",width:0}}>
                <TouchableOpacity onPress={SearchClicked}>
                  <Image
                    source={Glyphs.Search}
                    style={styles.img}
                  />
                </TouchableOpacity>
              </View>
              <InputText
                placeholder="Search"
                ChangeText={(text: any) => {
                  details.searchDetails.current = text;
                }}
                keyboardType="default"
                secureText={false}
                maxLength={20}
              />
            </View>
            <ProductCard
              setQr={setQr}
              searchData={dataToSend}
              ref={ProductRef}
            />
          </>
        ) : (
          <QR />
        )}
      </View>
    </SafeAreaView>
  );
};
export default ProductCatalog;
