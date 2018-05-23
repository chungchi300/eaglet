export const SET_NAME = "AUTHOR/SET_NAME";

const initialState = {
  name: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
