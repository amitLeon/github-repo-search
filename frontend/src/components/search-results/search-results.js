import React from 'react';
import AddBookmarkBtn from './add-bookmark';
import RepoInfo from '../common/repo-info';

const SearchResults = ({ results }) => (
  <ul className="bookmarks">
    {results.map((result, id) => (
      <li className="solo-bookmark" key={id} >
        <div><RepoInfo item={result} /></div>
        <div><AddBookmarkBtn item={result} /></div>
      </li>
    ))}
  </ul>
);

export default SearchResults;
