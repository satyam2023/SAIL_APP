import { MutableRefObject } from "react";


export interface IUpdatedetails{
    email:MutableRefObject<string>;
    Location:MutableRefObject<string>;
    Role:MutableRefObject<number>;
}

export interface IdropDown{
    name:string;
    id:number;
}