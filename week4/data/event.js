import {useAuthentication, useVerification} from "../event";

export const EVENT_HANDLERS = {
  phone: useAuthentication,
  authentication: useVerification,
};