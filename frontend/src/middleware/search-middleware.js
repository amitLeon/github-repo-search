import {
  SEARCH_GET_SEARCH_RESULTS,
  updateSearchResultList,
  getSearchResults
} from '../actions/search';

import { LOCATION_CHANGE } from 'react-router-redux';

import { getReq, postReq } from '../utils/request';
import url from 'url';

const searchMiddleware = ({
  dispatch,
  getState
}) => (next) => async (action) => {
  if (!action) return false;
  const { type, payload } = action;
  const nextState = next(action);

  switch (type) {
    case SEARCH_GET_SEARCH_RESULTS: {
      console.log(payload);
      const { query, history } = payload;

      const body = JSON.stringify({ data: { search_term: query }})
      // console.log(query, history);
      console.log(query, 'y');
      if (query) {
        getReq(`/api/search?search_term=${query}`)
        .then(res => {
          console.log({res });
          const { items } = res;
          dispatch(updateSearchResultList({ items: [...items] }));
          // console.log({ history });

          if (history) {
            // history.push({
            //   pathname: 'search',
            //   search: `?searchTerm=${query}`
            // });
          }

        })
        .catch(err => console.log(err));
      }


      return nextState;
    }

    case LOCATION_CHANGE: {
        const { pathname, search } = payload;

        if (pathname !== '/search') {
          return nextState;
        }

        console.log({ search });

        const query_param = url.parse(search, true).query;

        const query = query_param.searchTerm;
        console.log({ query });

        if (!query) {
          // // if no value in search field don't do query.
          // // empty query.
          // dispatch(requestImagesResults({ images: [] })); // emptying the exisiting results
          // dispatch(updateSelectValue({ inputValue: [] }));
          dispatch(updateSearchResultList({ items: [] }));
        } else {
          dispatch(getSearchResults({ query }));
        }

        return nextState;
    }

    default:
      return nextState;
  }
};

export default searchMiddleware;
