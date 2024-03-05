import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style/style";
import Glyphs from "assets/Glyphs";
interface CardProps {
  setQr: Function;
  searchData: string;
}
const ProductCard=forwardRef(
  ({ setQr, searchData }: CardProps, ref: any) => {
    const [searchResult, setSearchResult] = useState<boolean>(false);

    function handleSearch() {
      Data.filter((Data) => {
        console.log("Search Details::", searchData);
        if (Data.heading == searchData) {
          console.log("Becoming True");
          setSearchResult(true);
        }
      });
    }

    useImperativeHandle(ref, () => ({
      handleClicked: handleSearch,
    }));
    const Data = [
      { heading: "Pig Iron", 
      image: Glyphs.StainlessSteel },
      {
        heading: "Cold Rolled Product",
        image: Glyphs.StainlessSteel,
      },
      { heading: "Pipes", 
        image: Glyphs.StainlessSteel },
      { heading: "Semis", 
        image: Glyphs.StainlessSteel },
      {
        heading: "Sail TMT Bars",
        image: Glyphs.StainlessSteel,
      },
      {
        heading: "Galvanised Products",
        image: Glyphs.StainlessSteel,
      },
      { heading: "Wirerods", 
        image: Glyphs.StainlessSteel },
      { heading: "PM Plates", 
        image: Glyphs.StainlessSteel },
      {
        heading: "Railway Products",
        image: Glyphs.StainlessSteel,
      },
      {
        heading: "Wheels and Axles",
        image: Glyphs.StainlessSteel,
      },
      {
        heading: "Hot Rolled Products",
        image: Glyphs.StainlessSteel,
      },
      {
        heading: "Stainless Steel Products",
        image: Glyphs.StainlessSteel,
      },
      {
        heading: "Electrical Steels",
        image: Glyphs.StainlessSteel,
      },
      {
        heading: "SAIL SEQR TMT Bars",
        image: Glyphs.StainlessSteel,
      },
    ];

    function renderitem(item: any) {
      return (
        <View style={styles.card}>
          <Image
            source={Glyphs.StainlessSteel}
            style={{ alignSelf: "center", marginTop: 4 }}
          />
          <Text style={styles.txt}>{item.item.heading}</Text>
          <Text style={styles.dwd}>Download Catalogue</Text>
          <TouchableOpacity
            onPress={() => {
              setQr(true);
            }}
          >
            <Text style={[styles.dwd, { marginTop: 0 }]}>Show QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <>
        {!searchResult ? (
          <FlatList
            data={Data}
            renderItem={renderitem}
            numColumns={2} 
          />
        ) : (
          <View style={styles.card}>
            <Image
              source={Glyphs.StainlessSteel}
              style={{ alignSelf: "center", marginTop: 4 }}
            />
            <Text style={styles.txt}>{searchData}</Text>
            <Text style={styles.dwd}>Download Catalogue</Text>
            <TouchableOpacity
              onPress={() => {
                setQr(true);
              }}
            >
              <Text style={[styles.dwd, { marginTop: 0 }]}>Show QR Code</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  },
);
export default ProductCard;
