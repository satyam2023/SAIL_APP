import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import QR from "./QR";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { SafeAreaView, View } from "react-native";
import { Header, InputTextField } from "components";
import { IProductCatalogue } from "models/ApiResponses/ProductCatalogue";

interface IProductScreen{
  productData:IProductCatalogue[]
}


const ProductCatalogScreen = (props:IProductScreen) => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <Header topheading={StringConstants.PRODUCT_CATALOGUE} />
      {!qrStatus ? (
        <View style={{paddingHorizontal:20,flex:1,}}> 
          <InputTextField
            onChangeText={(text: string) => {
              details.searchDetails.current = text;
            }}
            placeholder={StringConstants.SEARCH}
            rightIcon={Glyphs.Search}
            containerStyle={{ backgroundColor: Colors.white, marginTop: 16 }}
            onRighIconPress={SearchClicked}
          />
          <ProductCard setQr={setQr} searchData={dataToSend} ref={ProductRef} productData={props.productData} />
        </View>
      ) : (
        <QR />
      )}
    </SafeAreaView>
  );
};
export default ProductCatalogScreen;
