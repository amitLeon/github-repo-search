/**
 * @file contains all actions types & action creators for the key "search" of app state object.
 * @author Amit Shrivastava <amit.shrivastav@outlook.com>
 */

export const SEARCH_GET_SEARCH_RESULTS = '@@search/GET_SEARCH_RESULTS ';
export const SEARCH_CHANGE_PROPERTY = '@@search/CHANGE_PROPERTY';
export const SEARCH_UPDATE_SEARCH_RESULT_LIST = '@@search/UPDATE_SEARCH_RESULT_LIST ';

export const getSearchResults = (payload) => ({
    type: SEARCH_GET_SEARCH_RESULTS,
    payload
});

export const updateSearchResultList = (payload) => ({
  type: SEARCH_UPDATE_SEARCH_RESULT_LIST,
  payload
});

export const changeProperty = (field, value) => ({
  type: SEARCH_CHANGE_PROPERTY,
  payload: {
    field,
    value,
  },
});
