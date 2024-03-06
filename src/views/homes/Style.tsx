import { ScreenHeight } from 'libs';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF',
    paddingHorizontal:20,
  },
  btn: {
    width: '100%',
    height: 56,
    // paddingVertical: 17,
    // paddingHorizontal: 112,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#233972',
    gap: 10,
    marginBottom: 16,
    alignSelf:'center',
    marginHorizontal: 20,
  },
  signbtn: {
    width: '100%',
    height: 56,
    backgroundColor: '#F9F9FC',
    // paddingVertical: 17,
    // paddingHorizontal: 112,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    gap: 10,
  },
  txt: {
    width: 'auto',
    height: 'auto',
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    fontStyle: 'normal',
  },
  txtofSign: {
    width: 'auto',
    height: 'auto',
    color: '#110F24',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    fontStyle: 'normal',
  },
  imghand: {
    alignSelf: 'center',
    marginBottom: 124,
    marginTop: 42,
  },
  toptxt: {
    color: '#00235B',
    width: 263,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 34,
    letterSpacing: 0.24,
    alignSelf: 'center',
  },
  imgsail: {
    width: 90,
    height: 90,
    // marginTop: 14,
    alignSelf: 'center',
    resizeMode: 'contain',
    // marginTop: 64,
  },
  lowertxt: {
    color: '#110F2480',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    marginTop: 4,
    alignSelf:'center'
  },
  toptxtcontainer: {
    marginTop: 16
  },
  logocontainer: {
    marginTop: 64,
  },
});

export default styles;
