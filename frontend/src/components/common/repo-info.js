import React from 'react';
import './scss/repo-info.scss';

const RepoInfo = ({ item: { name, stargazers_count, forks_count, html_url, description } }) => (
  <React.Fragment>
    <div><a href={html_url} target="_blank">{name}</a></div>
    {description && (<div>Description: {description}</div>)}
    <div>Stars: {stargazers_count}</div>
    <div>Forks: {forks_count}</div>
  </React.Fragment>
);

export default RepoInfo;
