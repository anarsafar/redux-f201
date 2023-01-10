import { DECREMENT, INCREMENT, RESET } from "./counter.actions";

//action creator
export const increment = (incrementBy = 1) => {
  return {
    type: INCREMENT,
    payload: incrementBy,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: "",
  };
};

export const reset = () => {
  return {
    type: RESET,
    payload: "",
  };
};
