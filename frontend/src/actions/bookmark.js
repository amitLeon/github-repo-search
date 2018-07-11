/**
 * @file contains all actions types & action creators for the key "bookmark" of app state object.
 * @author Amit Shrivastava <amit.shrivastav@outlook.com>
 */

export const BOOKMARK_FETCH_BOOKMARKS = '@@bookmark/FETCH_BOOKMARKS ';
export const BOOKMARK_ADD_BOOKMARK = '@@bookmark/ADD_BOOKMARK';
export const BOOKMARK_REMOVE_BOOKMARK = '@@bookmark/REMOVE_BOOKMARK';
export const BOOKMARK_UPDATE_BOOKMARK_LIST = '@@bookmark/UPDATE_BOOKMARK_LIST';

export const addBookmark = (payload) => ({
    type: BOOKMARK_ADD_BOOKMARK,
    payload
});

export const removeBookmark = (id) => ({
    type: BOOKMARK_REMOVE_BOOKMARK,
    payload: { id }
});

export const fetchBookmarks = () => ({
  type: BOOKMARK_FETCH_BOOKMARKS,
});

export const updateBookmarkList = (payload) => ({
  type: BOOKMARK_UPDATE_BOOKMARK_LIST,
  payload
});
