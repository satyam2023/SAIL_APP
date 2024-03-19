import StringConstants from "shared/localization";

export interface IMessageDetailField{
    heading:string,
    subheading:string
}

export const MessageDetailField=[
{
    heading:StringConstants.CUSTOMER_CODE,
    subheading:StringConstants.NUMBER
},
{
    heading:StringConstants.CUSTOMER_NAME,
    subheading:StringConstants.USER_NAME
},
{
    heading:StringConstants.CUSTOMER_TYPE,
    subheading:StringConstants.CUSTOMER_TYPE_TITLE
},
{
    heading:StringConstants.REASON,
    subheading:StringConstants.LOREM_TEXT
},
{
    heading:StringConstants.ISSUE,
    subheading:StringConstants.LOREM_TEXT
},
{
    heading:StringConstants.ISSUE_CMNT,
    subheading:StringConstants.LOREM_TEXT
}



]