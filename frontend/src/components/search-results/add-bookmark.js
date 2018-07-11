import React from 'react';
import { connect } from 'react-redux';
import { addBookmark } from '../../actions/bookmark';

const AddBookmarkBtn = ({ item, addBookmark }) => (
  <button
    className="bookmark-btn"
    onClick={() => addBookmark({ item })}
  >
    Bookmark
  </button>
);

export default connect(
  null,
  (dispatch) => ({
    addBookmark: (payload) => dispatch(addBookmark(payload)),
  })
)(AddBookmarkBtn)
