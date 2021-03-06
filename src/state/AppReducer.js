import removeDuplicates from './../helpers/removeDuplicates';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAIL = 'FETCH_BOOKS_FAIL';
export const SET_MAX_RESULTS = 'SET_MAX_RESULTS';
export const SET_START_INDEX = 'SET_START_INDEX';
export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';
export const CLEAR_STATE = 'CLEAR_STATE';
export const SET_VIEW = 'SET_VIEW';
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export default (state, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: removeDuplicates([...state.books, ...payload.books], 'id'),
        loading: false,
        totalResults: payload.totalResults,
      };
    case FETCH_BOOKS_FAIL:
      return {
        ...state,
        books: [],
        totalResults: 0,
        loading: false,
      };
    case SET_MAX_RESULTS:
      return {
        ...state,
        maxResults: payload,
      };
    case SET_START_INDEX:
      return {
        ...state,
        startIndex: payload,
      };
    case SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        books: [],
        totalResults: 0,
        startIndex: 0,
        loading: false,
        viewType: 'four',
        searchParams: {
          query: '',
          inauthor: '',
          inpublisher: '',
          isbn: '',
        },
      };
    case SET_VIEW:
      return {
        ...state,
        viewType: payload,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alertCondition: payload.alertCondition,
        alertMessage: payload.alertMessage,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alertMessage: null,
        alertCondition: null,
      };
    default:
      return state;
  }
};
