/**
 * @file contains reducers which takes the previous state and an action for app state 'bookmark',
 *  and returns the next state.
 * @author Amit Shrivastava <amit.shrivastav@outlook.com>
 */

import {
  BOOKMARK_UPDATE_BOOKMARK_LIST
} from '../actions/bookmark';

const defaultState = {
  bookmarks: [],
};

export default function (prevState = {
  ...defaultState
}, { type, payload }) {
  switch (type) {
    case BOOKMARK_UPDATE_BOOKMARK_LIST: {
      const { items, id } = payload;

      let newitems = [...items];

      // removing item from bookmark if id exists in payload
      if (id) {
        const prevItems = prevState.bookmarks;
        newitems = prevItems.filter(({ id: bid }) => bid !== id);
      }

      return {
        ...prevState,
        bookmarks: [...newitems],
      }
    }

    default:
      return prevState;
  }
}
