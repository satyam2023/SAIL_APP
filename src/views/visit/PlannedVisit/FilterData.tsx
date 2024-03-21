import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { setFilterModalStatus } from "../../../Redux/Slice2";
interface FilterProps {}

const FilterData: React.FC<FilterProps> = ({}: FilterProps) => {
  const [searchBy, setSearchBy] = useState("Search by");
  const [filterStatus, setFilterStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateData, setDateData] = useState("From");
  const [toopen, setToOpen] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [toDateData, setToDateData] = useState("TO");
  function handleDropClick() {
    if (searchBy == "Search by") {
      setSearchBy("Search By");
    } else if (searchBy == "Duration") {
      setSearchBy("Duration");
    }
  }

  useEffect(() => {
    if (
      searchBy == "7 Days" ||
      searchBy == "15 Days" ||
      searchBy == "30 Days" ||
      (toDateData != "To" && dateData != "From")
    ) {
      setFilterStatus(true);
    }
  }, [searchBy, toDateData, dateData]);
  const dispatch = useDispatch();
  function handlePressFilter() {
    if (filterStatus == true) {
      setFilterStatus(false);
      dispatch(setFilterModalStatus(false));
      setSearchBy("Search by");
      setToDateData("To");
      setDateData("From");
    }
  }

  const ModalOpeningStatus = useSelector(
    (state: any) => state.button.FilterModalStatus,
  );


  return (
    <Modal visible={ModalOpeningStatus} transparent={true}>
      <View
        style={{
          width: "100%",
          height: 198,
          marginTop: 143,
          backgroundColor: "#F9F9FC",
        }}
      >
        <TouchableOpacity
          style={{
            height: 56,
            width: 353,
            marginTop: 24,
            borderRadius: 33,
            marginLeft: 20,
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
          }}
          onPress={handleDropClick}
        >
          <Text
            style={{
              height: 18,
              width: 71,
              marginLeft: 16,
              marginTop: 19,
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.5,
              color: "#110F2480",
            }}
          >
            {searchBy}
          </Text>
          <Image
            source={require("../../images/Arrow.png")}
            tintColor={"#110F2480"}
            style={{
              marginTop: 16,
              marginLeft: 226,
              transform: [{ rotate: "90deg" }],
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            {
              width: 168,
              height: 56,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "#110F2480",
              marginTop: 24,
              marginLeft: 112,
            },
            filterStatus ? { backgroundColor: "#233972" } : {},
          ]}
          onPress={handlePressFilter}
        >
          <Text
            style={[
              {
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 17,
                alignSelf: "center",
              },
              filterStatus ? { color: "#FFFFFF" } : { color: "#110F2480" },
            ]}
          >
            Apply Filter
          </Text>
        </TouchableOpacity>
        {searchBy == "Search By" && (
          <View style={{ position: "absolute", top: 82 }}>
            <TouchableOpacity
              style={{
                width: 353,
                height: 56,
                backgroundColor: "#FFFFFF",
                marginLeft: 24,
              }}
              onPress={() => {
                setSearchBy("Duration");
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  marginLeft: 24,
                  marginTop: 19,
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                Duration
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 353,
                height: 56,
                backgroundColor: "#FFFFFF",
                marginLeft: 24,
              }}
              onPress={() => {
                setSearchBy("Date Range");
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  marginLeft: 24,
                  marginTop: 19,
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                Date Range
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {searchBy == "Duration" && (
          <View style={{ position: "absolute", top: 82 }}>
            <TouchableOpacity
              style={{
                width: 353,
                height: 56,
                backgroundColor: "#FFFFFF",
                marginLeft: 24,
              }}
              onPress={() => {
                setSearchBy("7 Days");
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  marginLeft: 24,
                  marginTop: 19,
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                7 days
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 353,
                height: 56,
                backgroundColor: "#FFFFFF",
                marginLeft: 24,
              }}
              onPress={() => {
                setSearchBy("15 Days");
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  marginLeft: 24,
                  marginTop: 19,
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                15 days
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 353,
                height: 56,
                backgroundColor: "#FFFFFF",
                marginLeft: 24,
              }}
              onPress={() => {
                setSearchBy("30 Days");
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  marginLeft: 24,
                  marginTop: 19,
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                30 days
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {searchBy == "Date Range" && (
          <View
            style={{
              position: "absolute",
              top: 0,
              flexDirection: "row",
              backgroundColor: "#F9F9FC",
            }}
          >
            <TouchableOpacity
              style={{
                width: 169,
                height: 56,
                backgroundColor: "#FFFFFF",
                marginLeft: 20,
                borderRadius: 33,
                flexDirection: "row",
                marginTop: 32,
              }}
              onPress={() => {
                setOpen(true);
              }}
            >
              <Image
                source={require("../../images/Calender.png")}
                style={{ marginTop: 16, marginLeft: 16 }}
              />
              <Text
                style={{
                  color: "#000000",
                  marginLeft: 16,
                  marginTop: 19,
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                {dateData}
              </Text>
              <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date) => {
                  setOpen(false);
                  setDate(date);
                  // setDateData(moment(date).format("DMMMM YYYY"));
                  setDateData(date.toLocaleDateString());
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                androidVariant="iosClone"
                dividerHeight={10}
                //theme="dark"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 169,
                height: 56,
                backgroundColor: "#FFFFFF",
                marginLeft: 20,
                borderRadius: 33,
                flexDirection: "row",
                marginTop: 32,
              }}
              onPress={() => {
                setToOpen(true);
              }}
            >
              <Image
                source={require("../../images/Calender.png")}
                style={{ marginTop: 16, marginLeft: 16 }}
              />
              <Text
                style={{
                  color: "#000000",
                  marginLeft: 16,
                  marginTop: 19,
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                {toDateData}
              </Text>
              <DatePicker
                modal
                open={toopen}
                date={toDate}
                mode="date"
                onConfirm={(date) => {
                  setToOpen(false);
                  setToDate(date);
                  // setDateData(moment(date).format("DMMMM YYYY"));
                  setToDateData(date.toLocaleDateString());
                }}
                onCancel={() => {
                  setToOpen(false);
                }}
                androidVariant="iosClone"
                dividerHeight={10}
                //theme="dark"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default FilterData;
