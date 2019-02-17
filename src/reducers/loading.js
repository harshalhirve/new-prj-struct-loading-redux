import * as a from "../actions/actionTypes";
import initialState from "./initialState";

export default function loading(state = initialState.loading, action) {
  switch (action.type) {
    case a.START_LOADING:
      return true;
    case a.STOP_LOADING:
      return false;
    default:
      return state;
  }
}
