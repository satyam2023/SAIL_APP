import APIConstants from "core/ApiConstants";
import { SettingsBody } from "models/ApiResponses/SettingResponse";
import { sendPatchRequest } from "services/network/Network";


export const settingsAction = async (body: SettingsBody) => {
  try {
    return await sendPatchRequest<SettingsBody>(APIConstants.SETTINGS, body);
  } catch (error) {}
};
