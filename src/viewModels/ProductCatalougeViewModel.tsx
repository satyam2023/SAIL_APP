import Header from "components/HeaderForMainScreen/HeaderMain";
import React from "react";
import { SafeAreaView } from "react-native";
import ProductCatalog from "views/productCatalog/ProductCatalog";

const ProductCatalougeViewModel=()=>{
return(
    <SafeAreaView style={{flex:1}}>
        <Header  topheading={"Product Catalouge"}/>
        <ProductCatalog/>
    </SafeAreaView>
)

};
export default ProductCatalougeViewModel;