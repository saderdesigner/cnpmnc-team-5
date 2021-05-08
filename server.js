import cors from 'cors';
import express from 'express';
import { readdirSync } from 'fs';
const sqlite3 = require('sqlite3').verbose();

const morgan = require('morgan');

require('dotenv').config();

const app = express();

//cb connection
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

// db.serialize(() => {
//   db.each(
//     `SELECT ID as ID,
//                     NAME as NAME
//              FROM STUDENT`,
//     (err, row) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log(row.ID + '\t' + row.NAME);
//     }
//   );
// });

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// route middleware
readdirSync('./routes').map((route) =>
  app.use('/api', require(`./routes/${route}`))
);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
