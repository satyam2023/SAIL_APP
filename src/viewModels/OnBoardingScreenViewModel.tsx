import React from "react";
import OnboardingScreen from "views/onBoarding/onBoarding";

const OnBoardingScreenViewModel = () => {
 
 function test(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "laravel_session=uUFDTdQMOBb4s19R3n3YJe0knSObXUIXwMTJXh1G");
  
  const raw = JSON.stringify({
    "user_upn": "STPL001",
    "password": "Test@123"
  });
   

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  
  fetch("http://117.250.72.24:8000/api/login", requestOptions)
    .then((response) => {response.text();console.log("RESPONSE>>>>>>>>",JSON.stringify(response))})
    .then((result) => console.log(JSON.stringify(result)));


 }
  return <OnboardingScreen 
   />;
};

export default OnBoardingScreenViewModel;
