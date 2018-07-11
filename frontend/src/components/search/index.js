import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { changeProperty, getSearchResults } from '../../actions/search';
import './search.scss';

const Search = ({
  search: {
    query,
    items
  },
  disabled,
  change,
  history,
  getSearchResults
}) => (
  <form
    onSubmit={
      !disabled
        ? (e) => {
          e.preventDefault();
          const queryTrimmed = query.trim();

          history.push({
            pathname: 'search',
            search: `?searchTerm=${query}`
          });
        } : (e) => { e.preventDefault();}
    }
    className="search-form"
  >
    <input
      type="text"
      className="search-input"
      value={query}
      onChange={change('query')}
      placeholder="Search repositories"
      name="query"
    />
  </form>
);

export default connect(
  ({ search }) => ({ search, disabled: !search.query || !search.query.length }),
  (dispatch) => ({
    change: (field) => (event) => dispatch(changeProperty(field, event.target.value)),
    getSearchResults: (payload) => dispatch(getSearchResults(payload))
  }),
)(withRouter(Search));
