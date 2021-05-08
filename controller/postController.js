import { LIST } from '../models/postModel';

import db from '../db/db';

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
    res.status(200).send(row);
  });
};
