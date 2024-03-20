import { SignInResponse } from "models/SignInResponse";

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
  let arr;
  var result = Object.values(userData.user)
  console.log("Result::",result);
    

}
