import { DECREMENT, INCREMENT, RESET } from "../actions/counter.actions";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };

    case RESET: {
      return {
        count: 0,
      };
    }
    default:
      return state;
  }
};

export const getCount = (state) => state.count.count;

export default counterReducer;
