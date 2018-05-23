export const INCREMENT = "COUNTER/INCREMENT";

export const DECREMENT = "COUNTER/DECREMENT";

const initialState = {
  count: 56
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};
