// middleware for adding, removing and fetching  bookmarks

import {
  BOOKMARK_ADD_BOOKMARK,
  BOOKMARK_FETCH_BOOKMARKS,
  BOOKMARK_REMOVE_BOOKMARK,
  updateBookmarkList
} from '../actions/bookmark';

import { getReq, postReq, deleteReq } from '../utils/request';

const bookmarkMiddleware = ({
  dispatch,
  getState
}) => (next) => async (action) => {
  if (!action) return false;
  const { type, payload } = action;
  const nextState = next(action);

  switch (type) {
    case BOOKMARK_ADD_BOOKMARK: {
      const { item } = payload
      const body = JSON.stringify({ data: { item } });
      postReq('/api/bookmark', body)
      .then(res => console.log(res))
      .catch(err => console.log(err));

      return nextState;
    }

    case BOOKMARK_REMOVE_BOOKMARK: {
      const { id } = payload;

      deleteReq(`/api/bookmark/${id}`)
      .then(res => dispatch(updateBookmarkList({ id, items: [] })))
      .catch(err => console.log(err));

      return nextState;
    }

    case BOOKMARK_FETCH_BOOKMARKS: {
      getReq('/api/bookmarks')
      .then(res => {
        dispatch(updateBookmarkList({ items: [...res] }))
      })
      .catch((err) => console.log(err) );

      return nextState;
    }

    default:
      return nextState;
  }
};

export default bookmarkMiddleware;
