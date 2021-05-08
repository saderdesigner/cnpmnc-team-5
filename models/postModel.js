// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(
//   './db/rent_acc.db',
//   sqlite3.OPEN_READWRITE,
//   (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Connected to DB');
//   }
// );

export const LIST = {
  1: {
    id: '1',
    address: 'Quan 1',
  },
  2: {
    id: '2',
    address: 'Quan 2',
  },
};

// export const getPost = () => {
//   let sql = `SELECT ID as ID,
//             NAME as NAME
//         FROM STUDENT`;
//   let res;
//   // first row only
//   db.get(sql, (err, row) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('1', row);
//     res = row;
//   });

//   return res;
// };
