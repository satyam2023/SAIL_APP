import { SignInResponse } from "models/ApiResponses/SignInResponse";

export function ExtarctTwoLetterName(name: string) {
  let ans = name[0];
  for (let i = 0; i < name.length; i++) {
    if (name[i] == " ") {
      ans += name[i + 1];
      break;
    }
  }

  return ans;
}

export const convertToArray=(userData:SignInResponse)=>{
  let arr=[];
  arr.length=6;
  arr[0]=userData?.user?.user_upn;
  arr[1]=userData?.user?.user_name;
  arr[2]=userData?.user?.user_number;
  arr[3]=userData?.user?.email;
  arr[4]=userData?.user?.user_location;
  arr[5]=userData?.user?.user_role_name;
    return arr;
};

export const extractOnlyDate=(data:string)=>{

  return data.slice(0,10);
  
}

