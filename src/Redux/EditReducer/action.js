import axios from "axios";
import { EDIT_FAILURE, EDIT_REQUEST, EDIT_SUCCESS, DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE} from "./actionTypes";

export const edit = (dataObj, id) => (dispatch) => {
  dispatch({ type: EDIT_REQUEST });
  axios
    .patch(`https://jade-scary-lobster.cyclic.app/todos/update/${id}`,dataObj)
    .then((res) => {
      dispatch({ type: EDIT_SUCCESS });
    //   console.log("res", res);
    })
    .catch(() => {
      dispatch({ type: EDIT_FAILURE });
    });
};

export const deleteTodo = (id) => (dispatch) => {
    dispatch({ type: DELETE_REQUEST });
    axios
      .delete(`https://jade-scary-lobster.cyclic.app/todos/delete/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_SUCCESS });
      //   console.log("res", res);
      })
      .catch(() => {
        dispatch({ type: DELETE_FAILURE });
      });
  };
