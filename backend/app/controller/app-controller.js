// service/controller to interact with model.
import appModel from '../models/app-model';

const addBookmark = (bookmarkData) => new Promise((resolve, reject) => {
  appModel.addBookmark(bookmarkData).then((data) => {
    resolve({ code: 'INSERT_SUCCESS' });
  }).catch((err) => {
    if (err.code) { reject({ code: err.code }); }
    reject(err);
  });
});

const removeBookmark = (bid) => new Promise((resolve, reject) => {
  appModel.removeBookmark(bid).then((data) => {
    resolve({ code: 'REMOVE_SUCCESS' });
  }).catch((err) => {
    if (err.code) { reject({ code: err.code }); }
    reject(err);
  });
});

const getBookmarks = () => new Promise((resolve, reject) => {
  appModel.getBookmarks().then((data) => {
    resolve(data);
  }).catch((err) => {
    reject(err);
  });
});

const getSearchResults = (searchTerm) => new Promise((resolve, reject) => {
  appModel.getSearchResults(searchTerm).then((data) => {
    resolve(data);
  }).catch((err) => {
    reject(err);
  });
});

export default {
  addBookmark,
  removeBookmark,
  getSearchResults,
  getBookmarks
};
