export const PASSWORD_INITIAL_STATE = { value: "", isValid: false };

export function passwordReducer(state, actions) {
  if (actions.type === "USER_INPUT") {
    return {
      value: actions.payload,
      isValid: actions.payload.trim().length > 6,
    };
  } else if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.isValid };
  }
  return { value: "", isValid: false };
}
