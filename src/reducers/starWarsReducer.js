import { FETCHING, SUCCESS, FAILURE } from '../actions';
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        characters: action.characters
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
        characters: []
      };
    default:
      return state;
  }
};
