import React from 'react';
import { connect } from 'react-redux';

import Bookmarks from './bookmarks';
import { fetchBookmarks } from '../../actions/bookmark';

class BookmarksC extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchBookmarks());
  }

  render() {
    const { bookmarks } = this.props;

    // @TODO: prepare something here to show the loading search results.
    return (
      <div className="repo-container">
        {!bookmarks.length
        ? (<h2>No bookmarked repositories</h2>)
        : (
          <React.Fragment>
            <h3>Bookmarked Repositories</h3>
            <Bookmarks bookmarks={bookmarks} />
          </React.Fragment>
        )
      }
      </div>
    );
  }
}

export default connect(
  ({ bookmark: { bookmarks }}) => ({ bookmarks }),
  null
)(BookmarksC);
