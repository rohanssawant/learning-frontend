export const EMAIL_INITIAL_STATE = { value: "", isValid: false };

export function emailReducer(state, actions) {
  if (actions.type === "USER_INPUT") {
    return { value: actions.payload, isValid: actions.payload.includes("@") };
  } else if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.isValid };
  }
  return { value: "", isValid: false };
}
