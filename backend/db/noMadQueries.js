import * as db from './index.js';
export function fetchSingleCheck_In() {
    return db.query("SELECT * FROM check_In"
    );
}