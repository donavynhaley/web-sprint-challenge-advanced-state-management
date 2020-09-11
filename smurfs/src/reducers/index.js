import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
} from "../actions";

export const initialState = {
  smurfs: [],
  error: "",
  isFetching: false,
};
export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case POST_SMURF_START:
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case POST_SMURF_SUCCESS:
    case FETCH_SMURFS_SUCCESS:
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
