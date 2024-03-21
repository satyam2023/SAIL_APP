import { MMKV } from 'react-native-mmkv';
import StringConstants from 'shared/localization';

const Storage = new MMKV();


export const setRememberMe = async (isRemember: boolean) => {
  await Storage.set(StringConstants.IS_REMEMBER, JSON.stringify(isRemember));
};

export const removeRememberMe = () =>
  Storage.set(StringConstants.IS_REMEMBER, "");

export const getRememberMe = () => Storage.getString(StringConstants.IS_REMEMBER);