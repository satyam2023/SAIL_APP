import { MutableRefObject } from "react";

export interface Iuserdetail{
    Upn: MutableRefObject<string>,
    Contact: MutableRefObject<string>,
    Name: MutableRefObject<string>,
    Email: MutableRefObject<string>,
    Location: MutableRefObject<string>,
    Role: MutableRefObject<string>,
    Password: MutableRefObject<string>,
    Confirm_Password: MutableRefObject<string>,
}