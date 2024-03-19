import { SafeAreaContainer } from "components";
import CustomFooter from "./Component/CustomFooter/CustomFooter";
import First from "./FirstSignUpPage/First";
import Second from "./SecondSignUpPage/Second";
import Third from "./ThirdSignUpPage/Third";
import { ScrollView } from "react-native";
import { Colors } from "commonStyles/RNColor.style";

export interface ISignUp {
  CurrentScreen: number;
  setScreen: Function;
  Submit: Function;
  userDetail: any;
  error: any;
}

const SignUpScreen = ({
  CurrentScreen,
  setScreen,
  Submit,
  userDetail,
  error,
}: ISignUp) => {
  return (
    <SafeAreaContainer backgroundColor={Colors.white}>
      <ScrollView style={{ marginBottom: "35%" }}>
        {CurrentScreen == 1 && (
          <First
            setScreen={setScreen}
            CurrentScreen={CurrentScreen}
            userDetail={userDetail}
            error={error}
            Submit={Submit}
          />
        )}
        {CurrentScreen == 2 && <Second error={error} userDetail={userDetail} />}
        {CurrentScreen == 3 && <Third userDetail={userDetail} error={error} />}
      </ScrollView>
      <CustomFooter {...{ setScreen, CurrentScreen, Submit }} />
    </SafeAreaContainer>
  );
};

export default SignUpScreen;
