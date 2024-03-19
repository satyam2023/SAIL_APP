import { User } from "./UserModel";



export interface ISignupBody {
  user_upn: string;
  user_name: string;
  user_number: string;
  email: string;
  user_location: string;
  user_role: string;
  password: string;
  c_password: string;
  autologin: string;

}

export interface SignupResponse {
  user: User;
}
