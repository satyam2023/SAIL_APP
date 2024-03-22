import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "commonStyles/RNColor.style";
import DescriptionCard from "components/DescriptionCard";
import TextWrapper from "components/TextWrapper";
import { IProductCatalogue } from "models/ApiResponses/ProductCatalogue";
import { FlatList, StyleSheet, View } from "react-native";

interface IHorizontalScrollableList {
  Data: IProductCatalogue[] ;
  onPress: () => void;
  heading: string;
  subHeading?: string;
}

const HorizontalScrollableList = (props: IHorizontalScrollableList) => {
  const renderHorizontalList = (
    item: IProductCatalogue ,_: number,
  ) => {
    return(
      
 <DescriptionCard imageUri={item.img_url}  description={item.name} />
      
      
    );
  };

  return (
    <View style={styles.horizontalListContainer}>
      <View style={styles.headingContainer}>
        <TextWrapper style={commonStyles.font16MediumBlackpearl}>
          {props.heading}
        </TextWrapper>
        <TextWrapper style={commonStyles.font16MediumBlackpearl}>
          {props.subHeading}
        </TextWrapper>
      </View>
      <FlatList
        horizontal
        data={props.Data}
        renderItem={({ item, index }) => renderHorizontalList(item, index)}
        ItemSeparatorComponent={() => (
          <View style={{ width: 2, backgroundColor: Colors.background2 }} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalScrollableList;

const styles = StyleSheet.create({
  horizontalListContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  headingContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
});
