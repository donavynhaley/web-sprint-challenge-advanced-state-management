import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
} from "../actions";

export const initialState = {
  smurfs: [],
  error: "",
  isFetching: false,
};
export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case FETCH_SMURFS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        smurfs: action.payload,
        error: "",
        isFetching: false,
      };
    default:
      return state;
  }
};
