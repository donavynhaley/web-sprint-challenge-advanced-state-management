import axios from "axios";

// FETCHING
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
// POSTING
export const POST_SMURF_START = "FETCH_SMURFS_START";
export const POST_SMURF_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const POST_SMURF_FAILURE = "FETCH_SMURFS_FAILURE";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.data });
    });
};
export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: POST_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_SMURF_FAILURE, payload: err.data });
    });
};
