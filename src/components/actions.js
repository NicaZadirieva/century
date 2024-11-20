import { get_promises } from "./api";
export function hideForm(payload) {
  return {
    type: "HIDING_FORM",
    payload,
  };
}
export function changeFields(payload) {
  return {
    type: "CHANGING_FIELD",
    payload,
  };
}
export function showForm(payload) {
  return {
    type: "SHOWING_FORM",
    payload,
  };
}
export function sendForm({ fio, telephone, region, message }) {
  return {
    type: "PROMISE",
    actions: ["SENDING", "SUCCESS", "FAILURE"],
    promise: get_promises({ fio, telephone, region, message }),
  };
}
