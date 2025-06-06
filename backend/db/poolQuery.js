import pg from "pg";

const { Pool } = pg;


const pool = new Pool();


export const query = (text, params, callback) => {

    console.log("Your poolQuery is working!");
    return pool.query(text, params, callback);
};