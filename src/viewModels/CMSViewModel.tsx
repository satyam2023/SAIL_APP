import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCMSPage } from "redux/actions/CMSAction";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import StringConstants from "shared/localization";
import CMSPagesScreen from "views/cmsPages/CMSScreen";
import { useDispatch } from "react-redux";

const CMSViewModel = () => {
  const [pages, setpages] = useState<string>(StringConstants.CMS);
 const dispatch=useDispatch();
  const cmsPageData=useSelector((state:any)=>state.cmsPages.data).data;
 
  function pagesRenderingController(pageType:string) {
    switch (pageType) {
       case StringConstants.CMS:
        setpages(StringConstants.CMS);
        break;
      case StringConstants.ABOUT_US:
        setpages(StringConstants.ABOUT_US);
        break;
      case StringConstants.CONTACT_US:
        setpages(StringConstants.CONTACT_US);
        break;
      case StringConstants.PRIVACY:
        setpages(StringConstants.PRIVACY);
        break;
      case StringConstants.FAQS:
        setpages(StringConstants.FAQS);
        break;
      case StringConstants.TERMS_AND_CONDITIONS:
        setpages(StringConstants.TERMS_AND_CONDITIONS);
        break;
    }
  };
  useEffect(() => {
    const cmsPage = async () => {
      dispatch(setLoaderVisibility(true));
      try {
        await getCMSPage(dispatch);
      } catch (error) {
        
      }
      finally{
        
      }
      dispatch(setLoaderVisibility(false));
    };
    cmsPage();
  }, []);


  return (
    
      <CMSPagesScreen

      {...{

        pagesRenderingController,
        pages,
        cmsPageData
      }}
     
      />
 
  );
};
export default CMSViewModel;


