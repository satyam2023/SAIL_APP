import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style/style";
import Glyphs from "assets/Glyphs";
import { IProductData, ProductData } from "./mockData/Data";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
interface CardProps {
  setQr: (arg: boolean) => void;
  searchData: string;
}
const ProductCard = forwardRef(({ setQr, searchData }: CardProps, ref: any) => {
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

  function renderProductList(item:IProductData,_:number) {
    return (
      <View style={styles.card}>
        <Image
          source={item.image}
          style={styles.productImage}
        />
        <TextWrapper style={styles.txt}>{item.heading}</TextWrapper>
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
          data={ProductData}
          renderItem={({item,index})=>renderProductList(item,index)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          style={{ marginBottom: 20, flex: 1 }}
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
