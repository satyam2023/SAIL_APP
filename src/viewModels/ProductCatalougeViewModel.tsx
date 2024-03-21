import React from "react";
import { useSelector } from "react-redux";
import { RootState} from "redux/store/Store";
import ProductCatalogScreen from "views/productCatalog/ProductCatalogScreen";

const ProductCatalougeViewModel=()=>{

    const productData=useSelector((state:RootState)=>state.home?.data?.data?.ProductData)
    

      
return <ProductCatalogScreen
{...{
    productData
}}
/>;

};
export default ProductCatalougeViewModel;