import StringConstants from "shared/localization";

export const Regex = {
  INITIALS_REPLACE: /[^a-zA-Z- ]/g,
  INITIALS_MATCH: /\b\w/g,
  UPN: /^[A-Za-z](?=.*\d)[A-Za-z\d]{6}$/,
  NAME: /^[A-Za-z.& ]+(?:[ -']+[A-Za-z.& ]+)*$/,
  CONTACT: /^(?![0])(\+\d{1,3}[- ]?)?\d{10}$/,
  PASSWORD: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  EMAIL: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/,
  ALPHA_NUMERIC: /^[a-zA-Z0-9_]*$/,
  REQUIRED: /.+/,
  ONLY_NUMBER: /^[0-9]*$/,
  CUSTOMER_CODE: /^\d{10}$/,
  WEBSITE: /^(http[s]?:\/\/)?(www\.)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$/,
  PAN: /^[A-Z]{3}[ABCFGHLJPTK][A-Z]{1}\d{4}[A-Z]{1}$/,
  GST: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  NUMBER_MAX: /^\d{10}$/,
  SLASHNAME: /^[A-Za-z.&/() ]+(?:[ -']+[A-Za-z.&/() ]+)*$/,
};


export const validateUpnNumber=(uniqueNumber:string)=>{
  if(uniqueNumber.length==0){
    return false;
  }
  else {
    return Regex.UPN.test(uniqueNumber)?true:false
  }


    // if(Regex.UPN.test(uniqueNumber)){
    //   return true;
    // }
    // else if(uniqueNumber.length==0){
    //   return StringConstants.REQUIRED;
    // }
    // else {
    //   StringConstants.ERROR_MESSAGE
    // }

}
export const validateContactNumber=(contactNumber:string)=>{

  if(contactNumber.length==0){
    return false;
  }
  else{
    return Regex.CONTACT.test(contactNumber);
  }

  // if(Regex.CONTACT.test(contactNumber)){
  //   return true;
  // }
  // else if(contactNumber.length==0){
  //   return false
  // }
  // else {
  //   StringConstants.ERROR_MESSAGE;
  // }
}

export const validateName=(name:string)=>{
  
   if(name.length==0){
    return false
  }
  else {
    return Regex.NAME.test(name);
  }
}

export const validateEmail=(email:string)=>{


// return Regex.EMAIL.test(email)?StringConstants.EMPTY:StringConstants.ERROR_MESSAGE;

  if(email.length==0){
    return false
  }
  else {
   return Regex.EMAIL.test(email);
  }
};

export const validateDropDown=(selectedValue:string)=>{
   if(selectedValue.length==0){
    return false;
  }
  else {
   return true
  }
}

export const validatePassword=(password:string)=>{
  if(Regex.PASSWORD.test(password)){
   
    return true;
  }
  else if(password.length==0){
    return false;
  }
  else {
    StringConstants.ERROR_MESSAGE;
  }
}

export const validateConfirmPassword=(password:string)=>{
  if(Regex.PASSWORD.test(password)){
    return true;
  }
  else if(password.length==0){
    return false;
  }
  else {
    StringConstants.ERROR_MESSAGE;
  }
}



