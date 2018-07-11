/**
 * @file contains reducers which takes the previous state and an action for app state 'search',
 *  and returns the next state.
 * @author Amit Shrivastava <amit.shrivastav@outlook.com>
 */

import {
  SEARCH_UPDATE_SEARCH_RESULT_LIST,
  SEARCH_CHANGE_PROPERTY
} from '../actions/search';

const defaultState = {
  items: [],
  query: '',
};

export default function (prevState = {
  ...defaultState
}, { type, payload }) {
  switch (type) {
    case SEARCH_UPDATE_SEARCH_RESULT_LIST: {
      const { items } = payload;
      return {
        ...prevState,
        items: [...items],
      }
    }

    case SEARCH_CHANGE_PROPERTY: {
      const { field, value } = payload;
      return {
        ...prevState,
        [field]: value,
      };
    }

    default:
      return prevState;
  }
}
