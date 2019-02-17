import * as a from "./actionTypes";

export function startLoading() {
  return {
    type: a.START_LOADING
  };
}

export function stopLoading() {
  return {
    type: a.STOP_LOADING
  };
}
