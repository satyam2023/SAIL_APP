import APIConstants from "core/ApiConstants";
import { HomeResponse } from "models/ApiResponses/HomeResponse";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { MasterDataResponse } from "models/ApiResponses/MasterDataResponse";
import { fetchHomeData } from "redux/actions/HomeAction";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import { saveMasterData } from "redux/actions/MasterDataAction";
import { sendGetRequest } from "services/network/Network";




export async function setMasterData(dispatch:any){
    dispatch(setLoaderVisibility(true));  
    try{
      const res: IApiResponse<MasterDataResponse> =
      await sendGetRequest<MasterDataResponse>(APIConstants.MASTER_DATA);
     dispatch(saveMasterData(res.data));
     return res;
    }
    catch{

    }
    finally{

    }

}

export async function handleHomeApiCall(dispatch:any) {
    const fetchHome = async () => {
      dispatch(setLoaderVisibility(true));
      try {
        const res: IApiResponse<HomeResponse> = await fetchHomeData(dispatch);
        if (res?.isSuccess) {
        }
      } catch (error) {
      } finally {
        dispatch(setLoaderVisibility(false));
      }
    };

    fetchHome();
  }



