import React from 'react';
import { connect } from 'react-redux';

import { removeBookmark } from '../../actions/bookmark';

const RemoveBookmarkBtn = ({ id, removeBookmark }) => (
  <button
    className="bookmark-btn remove-bookmark"
    onClick={() => removeBookmark(id)}
  >
    Remove
  </button>
);

export default connect(
  null,
  (dispatch) => ({
    removeBookmark: (id) => dispatch(removeBookmark(id)),
  })
)(RemoveBookmarkBtn)
