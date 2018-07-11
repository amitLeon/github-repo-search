import request from 'request';
import { readFile, writeFile } from '../../utils/fileUtil';

const addBookmark = (bookmarkData) => new Promise((resolve, reject) => {
  readFile(reject, (data) => {
    const { bookmarks } = JSON.parse(data);
    const { data: { item } } = bookmarkData;
    const isItemExists = bookmarks.findIndex(({ id }) => id === item.id);

    // if item exists then don't insert it again.
    if (isItemExists < 0) {
      bookmarks.unshift(item);
      const json = JSON.stringify({ bookmarks });
      writeFile(reject, json, () => {
        resolve({ data: 'INSERT_SUCCESS' });
      });
    } else {
      resolve({ data: 'ITEM_EXISTS' });
    }
  });
});

const getBookmarks = () => new Promise((resolve, reject) => {
  readFile(reject, (data) => {
    const { bookmarks } = JSON.parse(data);
    resolve(bookmarks);
  });
});

const removeBookmark = (bid) => new Promise((resolve, reject) => {
  readFile(reject, (data) => {
    const { bookmarks } = JSON.parse(data);

    const filtered = bookmarks.filter(({ id }) => id != bid);
    const json = JSON.stringify({ bookmarks: [...filtered] });

    writeFile(reject, json, () => {
      resolve({ data: 'REMOVE_SUCCESS' });
    });
  });
});

const getSearchResults = (searchTerm) => new Promise((resolve, reject) => {
  // @TODO: put the api config in options.js
  request.get({
    url: `https://api.github.com/search/repositories?q=${searchTerm}`,
    json: true,
    headers: { 'User-Agent': 'request' }
  }, (err, res, data) => {
    if (err) {
      reject(err);
    } else if (res.statusCode !== 200) {
      reject(res.statusCode);
    } else {
      const { totalCount, items } = data;

      // taking the properties which is needed.
      const mapped = items.map(({
        id,
        forks_count,
        stargazers_count,
        name,
        owner,
        full_name,
        html_url,
        description
      }) => ({
        id, forks_count, owner, name, full_name, stargazers_count, html_url, description
      }));

      resolve({
        totalCount,
        items: mapped,
      });
    }
  });
});

export default {
  getSearchResults,
  addBookmark,
  removeBookmark,
  getBookmarks
};
