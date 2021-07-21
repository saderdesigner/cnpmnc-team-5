import { LIST } from '../models/postModel';

import db from '../db/db';

export const test = (req, res) => {
    res.status(200).send('hello world');
};

export const getList = (req, res) => {
    res.status(200).send(LIST);
};

export const getAccommodations = (req, res) => {

    let sql = `SELECT * FROM ACCOMMODATION`;
    // first row only
    db.all(sql, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('1', row);
        res.status(200).send(row);
    });
};

export const getAccommodationById = (req, res) => {

    const accommodationId = req.params.id;

    let sql = `SELECT * FROM ACCOMMODATION WHERE ID = ${accommodationId}`;
    // first row only
    db.all(sql, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('1', row);
        res.status(200).send(row);
    });
};

export const createAccommodation = (req, res) => {

    let body = req.body;

    let sql = `INSERT INTO ACCOMMODATION (ADDRESS, PRICE, MAX, OWNER, IMAGE) VALUES ("${body.ADDRESS}", ${parseInt(body.PRICE)}, ${parseInt(body.MAX)}, "${body.OWNER}", "${body.IMAGE}")`;
    console.log('sql: ', sql);
    // first row only
    db.all(sql, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('1', row);
        res.status(200).send(row);
    });

}

export const updateAccommodation = (req, res) => {

    let body = req.body;

    let sql = `UPDATE ACCOMMODATION SET ADDRESS = "${body.ADDRESS}", PRICE = ${parseInt(body.PRICE)}, MAX = ${parseInt(body.MAX)}, OWNER = "${body.OWNER}", IMAGE = "${body.IMAGE}" WHERE ID = ${req.params.id};`;
    // first row only
    db.all(sql, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('1', row);
        res.status(200).send(row);
    });

}

export const deleteAccommodation = (req, res) => {

    let sql = `DELETE FROM ACCOMMODATION WHERE ID = ${req.params.id};`;
    // first row only
    db.all(sql, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('1', row);
        res.status(200).send(row);
    });

}

export const searchAccommodation = (req, res) => {

    let sql = '';

    if (req.query.address){
        sql = `SELECT * FROM ACCOMMODATION WHERE ADDRESS LIKE '%${req.query.address}%'`;
    }
    if (req.query.min && req.query.max){
        sql = `SELECT * FROM ACCOMMODATION WHERE PRICE >= ${req.query.min} AND PRICE <= ${req.query.max}`;
    }
    
    console.log('sql: ', sql);

    // first row only
    db.all(sql, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('1', row);
        res.status(200).send(row);
    });

}
