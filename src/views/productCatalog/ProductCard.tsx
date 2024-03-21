import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style/style";
import Glyphs from "assets/Glyphs";
import {  ProductData } from "./mockData/Data";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import { IProductCatalogue } from "models/ProductCatalogue";
import { Colors } from "commonStyles/RNColor.style";
interface CardProps {
  setQr: (arg: boolean) => void;
  searchData: string;
  productData:IProductCatalogue[];
}
const ProductCard = forwardRef(({ setQr, searchData,productData }: CardProps, ref: any) => {
  const [searchResult, setSearchResult] = useState<boolean>(false);
  function handleSearch() {
    ProductData.filter((data) => {
      if (data.heading == searchData) {
        setSearchResult(true);
      }
    });
  }
  useImperativeHandle(ref, () => ({
    handleClicked: handleSearch,
  }));

  function renderProductList(item:IProductCatalogue,_:number) {
    return (
      <View style={styles.card}>
        <Image
          source={{uri:item.img_url}}
          style={styles.productImage}
        />
        <TextWrapper style={styles.txt}>{item.name}</TextWrapper>
        <TextWrapper style={styles.dwd}>
          {StringConstants.DOWNLOAD_CATALOGUE}
        </TextWrapper>
        <TouchableOpacity
          onPress={() => {
            setQr(true);
          }}
        >
          <TextWrapper style={[styles.dwd, { marginTop: 0 }]}>
            {StringConstants.SHOW_QR}
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      {!searchResult ? (
        <FlatList
          data={productData}
          renderItem={({item,index})=>renderProductList(item,index)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          style={{ marginBottom: 15, flex: 1 ,backgroundColor:Colors.transparent}}
        />
      ) : (
        <View style={styles.card}>
          <Image
            source={Glyphs.StainlessSteel}
            style={{ alignSelf: "center", marginTop: 4 }}
          />
          <TextWrapper style={styles.txt}>{searchData}</TextWrapper>
          <TextWrapper style={styles.dwd}>
            {StringConstants.DOWNLOAD_CATALOGUE}
          </TextWrapper>
          <TouchableOpacity
            onPress={() => {
              setQr(true);
            }}
          >
            <TextWrapper style={[styles.dwd, { marginTop: 0 }]}>
              {StringConstants.SHOW_QR}
            </TextWrapper>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
});
export default ProductCard;
