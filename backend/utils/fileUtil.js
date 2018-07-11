import fs from 'fs';
import path from 'path';

// path to bookmark file.
const file = path.resolve(__dirname, '../data/bookmarks.json');

const readFile = (reject, cb) => {
  // @TODO: this will gonna fail if file doesn't exists
  fs.readFile(file, (err, data) => {
    if (err) reject(err);
    else cb(data);
  });
};

const writeFile = (reject, json, cb) => {
  // @TODO: this will gonna fail if file doesn't exits.
  fs.writeFile(file, json, (error) => {
    if (error) reject(error);
    else cb();
  });
};

export { readFile, writeFile };
