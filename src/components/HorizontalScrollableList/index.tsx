import Glyphs from "assets/Glyphs";
import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "commonStyles/RNColor.style";
import DescriptionCard from "components/DescriptionCard";
import TextWrapper from "components/TextWrapper";
import { FlatList, ImageURISource, StyleSheet, View } from "react-native";
import StringConstants from "shared/localization";

interface IData {
  image: ImageURISource;
  description: string;
}

interface IHorizontalScrollableList {
     arrayOfProduct:[ImageURISource];
    heading:string;
    subheading:string;
}

const Data = [
  {
    image: Glyphs.CreateVisit,
    description: StringConstants.ABOUT_US,
  },
  {
    image: Glyphs.CreateVisit,
    description: StringConstants.ABOUT_US,
  },
  {
    image: Glyphs.CreateVisit,
    description: StringConstants.ABOUT_US,
  },
  {
    image: Glyphs.CreateVisit,
    description: StringConstants.ABOUT_US,
  },
  {
    image: Glyphs.CreateVisit,
    description: StringConstants.ABOUT_US,
  },
  {
    image: Glyphs.CreateVisit,
    description: StringConstants.ABOUT_US,
  },
  {
    image: Glyphs.CreateVisit,
    description: StringConstants.ABOUT_US,
  },
];

const HorizontalScrollableList = (props:IHorizontalScrollableList) => {
  const renderHorizontalList = (item: IData, _: number) => {
    return (
      <DescriptionCard image={item.image} description={item.description} />
    );
  };

  return (
    <View style={styles.horizontalListContainer}>
      <View style={styles.headingContainer}>
        <TextWrapper style={commonStyles.font16MediumBlackpearl}>
          {StringConstants.CUSTOMER_CODE}
        </TextWrapper>
        <TextWrapper style={commonStyles.font16MediumBlackpearl}>
          {StringConstants.VIEW_ALL}
        </TextWrapper>
      </View>
      <FlatList
        horizontal
        data={Data}
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
    marginTop:20,
  },
  headingContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
});
