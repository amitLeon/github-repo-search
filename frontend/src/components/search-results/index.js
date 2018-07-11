import React from 'react';
import { connect } from 'react-redux';
import url from 'url';

import { getSearchResults } from '../../actions/search';
import SearchResults from './search-results';

class SearchResultsC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    // @TODO: spinner needed.
    return (
      <div className="repo-container">
        {!items.length
          ? (<h2>No Repo found!!!</h2>)
          : (
              <React.Fragment>
                <h3>Repositories</h3>
                <SearchResults results={items} />
              </React.Fragment>
            )
        }
      </div>
    );
  }
}

export default connect(
  ({ search: { items }}) => ({ items }),
  null
)(SearchResultsC);
