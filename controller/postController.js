import { LIST } from '../models/postModel';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(
  './db/rent_acc.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to DB');
  }
);

export const test = (req, res) => {
  res.status(200).send('hello world');
};

export const getList = (req, res) => {
  res.status(200).send(LIST);
};

export const getAccommodation = (req, res) => {
  //   const query = getPost();
  //   res.send(query);
  //   console.log('2', query);
  let sql = `SELECT *
        FROM ACCOMMODATION`;
  // first row only
  db.all(sql, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('1', row);
    res.send(row);
  });
};
