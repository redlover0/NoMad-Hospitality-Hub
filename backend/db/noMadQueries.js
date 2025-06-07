import * as db from './index.js';

// selects all check_in data only using the guest table
export function fetchSingleCheck_In() {
    return db.query("SELECT\n" +
        "    Guests.first_name,        \n" +
        "    Guests.last_name,          \n" +
        "    RoomTypes.name AS room_type, \n" +
        "    Rooms.floor_number,        \n" +
        "    check_out_datetime, \n" +
        "    Check_In.status             \n" +
        "FROM\n" +
        "    Guests                      \n" +
        "JOIN\n" +
        "    Check_In ON Guests.guest_id = Check_In.guest_id \n" +
        "JOIN\n" +
        "    Rooms ON Check_In.room_id = Rooms.room_id     \n" +
        "JOIN\n" +
        "    RoomTypes ON Rooms.room_type_id = RoomTypes.room_type_id;\n"
    );
}