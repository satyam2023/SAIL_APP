import { MutableRefObject } from "react";

interface Ierror{
  upn: boolean,
  Contact: boolean,
  Name: boolean,
  Email: boolean,
  Location: boolean,
  Role: boolean,
  Password: boolean,
  Confirm_Password: boolean,
}

interface IUserDetails{
  Upn: MutableRefObject<string>,
  Contact: MutableRefObject<string>,
  Name: MutableRefObject<string>,
  Email: MutableRefObject<string>,
  Location: MutableRefObject<string>,
  Role: MutableRefObject<string>,
  Password: MutableRefObject<string>,
  Confirm_Password: MutableRefObject<string>,
}

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

 const validateUpnNumber = (uniqueNumber: string) => {
  if (uniqueNumber.length == 0) {
    return false;
  } else {
    return Regex.UPN.test(uniqueNumber) ? true : false;
  }
};
 const validateContactNumber = (contactNumber: string) => {
  if (contactNumber.length == 0) {
    return false;
  } else {
    return Regex.CONTACT.test(contactNumber);
  }
};

 const validateName = (name: string) => {
  if (name.length == 0) {
    return false;
  } else {
    return Regex.NAME.test(name);
  }
};

 const validateEmail = (email: string) => {
  if (email.length == 0) {
    return false;
  } else {
    return Regex.EMAIL.test(email);
  }
};

 const validateDropDown = (selectedValue: string) => {
  if (selectedValue.length == 0) {
    return false;
  } else {
    return true;
  }
};

 const validatePassword = (password: string) => {
  if (Regex.PASSWORD.test(password)) {
    return true;
  }
  return false;
};


export const validateUpnAndContact = (userDetail: IUserDetails, setError: Function) => {
  setError((prev: Ierror) => ({
    ...prev,
    upn: !validateUpnNumber(userDetail.Upn.current),
  }));
  setError((error: Ierror) => ({
    ...error,
    Contact: !validateContactNumber(userDetail.Contact.current),
  }));
};

export const validateNameEmailLocation = (userDetail: IUserDetails, setError: Function) => {
  setError((prev: Ierror) => ({
    ...prev,
    Name: !validateName(userDetail.Name.current),
  }));
  setError((prev: Ierror) => ({
    ...prev,
    Email: !validateEmail(userDetail.Email.current),
  }));
  setError((prev: Ierror) => ({
    ...prev,
    Location: !validateDropDown(userDetail.Location.current),
  }));
  setError((prev: Ierror) => ({
    ...prev,
    Role: !validateDropDown(userDetail.Role.current),
  }));
};

export const validatePasswordAndCpassword = (
  userDetail: IUserDetails,
  setError: Function,
) => {
  setError((prev: Ierror) => ({
    ...prev,
    Password: !validatePassword(userDetail.Password.current),
  }));
  setError((prev: Ierror) => ({
    ...prev,
    Confirm_Password: !validatePassword(userDetail.Confirm_Password.current),
  }));
};
