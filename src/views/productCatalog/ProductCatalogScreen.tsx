import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import QR from "./QR";
import Glyphs from "assets/Glyphs";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";
import { Colors } from "react-native/Libraries/NewAppScreen";
import InputTextField from "components/InputTextField";
import { SafeAreaView, View } from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";

const ProductCatalogScreen = () => {
  const [qrStatus, setQrStatus] = useState<boolean>(false);
  const [dataToSend, setDataToSend] = useState("");
  const setQr = (param: boolean) => {
    setQrStatus(param);
  };
  const details = {
    searchDetails: useRef(""),
  };
  const ProductRef = useRef<any>();
  async function SearchClicked() {
    await setDataToSend(details.searchDetails.current);
    ProductRef.current.handleClicked();
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <Header  topheading={StringConstants.PRODUCT_CATALOGUE}/>
      {!qrStatus ? (
        <SafeAreaContainer >
          <InputTextField
            onChangeText={(text: string) => {
              details.searchDetails.current = text;
            }}
            placeholder={StringConstants.SEARCH}
            rightIcon={Glyphs.Search}
            containerStyle={{ backgroundColor: Colors.white, marginTop: 16 }}
            onRighIconPress={SearchClicked}
          />
          <ProductCard setQr={setQr} searchData={dataToSend} ref={ProductRef} />
        </SafeAreaContainer>
      ) : (
        <QR />
      )}

    </SafeAreaView>
  );
};
export default ProductCatalogScreen;
