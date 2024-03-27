import Geolocation from "@react-native-community/geolocation";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { INearbyCustomerResponse } from "models/ApiResponses/IEnquiryResponses";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNearbyCustomer } from "redux/actions/Enquiry";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import EnquiryScreen from "views/enquiry/EnquiryScreen";
// import { MapLocalTile } from "react-native-maps";
// import MapComponent from "components/CustomMap";

const EnquiryViewModel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    nearbyCustomer();
  }, []);
  const nearbyCustomer = async () => {
    dispatch(setLoaderVisibility(true));
    Geolocation.getCurrentPosition(
      async (pos: any) => {
        dispatch(setLoaderVisibility(true));
        const body = {
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        };
        try {
          const res: IApiResponse<INearbyCustomerResponse> | undefined =
            await getNearbyCustomer(body);
          if (res?.isSuccess === true) {
            console.log("NEARBY by response::::", res.data);
          }
        } catch (error) {}
        dispatch(setLoaderVisibility(false));
      },
      (error: any) => {},
      {
        enableHighAccuracy: false,
        timeout: 10000,
      },
    );
    dispatch(setLoaderVisibility(false));
  };
  return (
    <>
      <EnquiryScreen />
      {/* <MapComponent latitude={37.785834} longitude={-122.406417} /> */}
    </>
  );
};

export default EnquiryViewModel;
