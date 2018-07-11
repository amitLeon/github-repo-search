import React from 'react';

import RemoveBookmarkBtn from './remove-bookmark';
import RepoInfo from '../common/repo-info';
import './bookmarks.scss';

const Bookmarks = ({ bookmarks }) => (
  <ul className="bookmarks">
    {bookmarks.map((result, id) => (
      <li className="solo-bookmark" key={id}>
        <div><RepoInfo item={result} /></div>
        <div><RemoveBookmarkBtn id={result.id} /></div>
      </li>
    ))}
  </ul>
);

export default Bookmarks;
