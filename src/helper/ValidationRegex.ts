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


// const validationFunction=(dataToBeValidated:string,whatToValidate:string)=>{
//   return Regex.whatToValidate.test()

// }


// export const validateContactNumber=(uniqueNumber:string)=>{
//     return Regex.UPN.test()

// }

// export const personalANDuniqueNumber=(uniqueNo:string,contactNo:string)=>{
//    Regex.CONTACT.test(uniqueNo);
//    Regex.CONTACT.test(contactNo);
   
// }

// export const personalValidationRules = {
//   uniqueNo: [
//     {
//       regex: Regex.REQUIRED,
//       message: StringConstants.REQUIRED,
//     },
//     {
//       regex: Regex.UPN,
//       message: StringConstants.INVALID_UPN,
//     },
//   ],
//   contactNo: [
//     {
//       regex: Regex.REQUIRED,
//       message: StringConstants.REQUIRED,
//     },
//     {
//       regex: Regex.CONTACT,
//       message: StringConstants.INVALID_CN,
//     },
//   ],
// };

