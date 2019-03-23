var mysql = require('mysql');
var connection = mysql.createConnection({
    "host": "localhost",
    "port": 3306,
    "user": "",
    "password": "",
    "database": ""
});

connection.connect();

// Create Table
// User Information
var user = "CREATE TABLE User("
    + 'ID varchar(10) not NULL,'
    + 'Username varchar(30),'
    + 'password varchar(20) not NULL,'
    + 'full_name varchar(50),'
    + 'nickname varchar(50),' +
    'gender varchar(1),' +
    'dob DATE,' +
    'age_range varchar(5),' +
    'living_location varchar(50),' +
    'living_district varchar(30),' +
    'prestige_level varchar(10),' +
    'self_introduction varchar(500),' +
    'phone_number int(8),' +
    'gathering_id int(10),' +
    'PRIMARY KEY(ID)' +
    ');';
connection.query(user, function(error, results){
    if (error){
        return console.error(error);
    }
    console.log(results);
    connection.release( );
});
connection.end();


// All Gathering Case
var gathering = "CREATE TABLE Gathering(" +
    'ID varchar(10) not NULL,' +
    'sport_type varchar(25),' +
    'date DATE,' +
    'starttime TIME,' +
    'endtime TIME,' +
    'venue varchar(50),' +
    'district varchar(30),' +
    'description varchar(500),' +
    'gender varchar(1),' +
    'age_upper_range int(3),' +
    'age_range_lower int(3),' +
    'participant_upper_limit int(2),' +
    'participant_lower_limit int(2),' +
    'upload_time TIME,' +
    'deadline_of_registration TIMESTAMP,' +
    'current_participant_number int(2),' +
    'current_participant_id varchar(10),' +
    'group_leader_id varchar(10),' +
    'status varchar(1),' +
    'PRIMARY KEY(ID)' +
    ');';
connection.query(gathering, function(error, results){
    if (error){
        return console.error(error);
    }
    console.log(results);
    connection.release( );
});
connection.end();


// Explore existing request
var explore = "CREATE TABLE Explore(" +
    'ID varchar(10) not NULL,' +
    'sport_type varchar(25),' +
    'date DATE,' +
    'starttime TIME,' +
    'endtime TIME,' +
    'gender varchar(1),' +
    'upload_time TIME,' +
    'prestige_level varchar(10),' +
    'user_id varchar(10),' +
    'PRIMARY KEY(ID)' +
    ');';
connection.query(explore, function(error, results){
    if (error){
        return console.error(error);
    }
    console.log(results);
    connection.release( );
});
connection.end();


// Confirmed Gathering Case
var confirmed_gathering = "CREATE TABLE CGathering(" +
    'ID varchar(10) not NULL,' +
    'date DATE,' +
    'starttime TIME,' +
    'endtime TIME,' +
    'member_id varchar(10),' +
    'late_or_not varchar(1),' +
    'rating int(1),' +
    'PRIMARY KEY(ID)' +
    ');';

connection.query(confirmed_gathering, function(error, results){
    if (error){
        return console.error(error);
    }
    console.log(results);
    connection.release( );
});
connection.end();

// User Operations
// 1. Query for login operation
//    SELECT username from User table and check if the entered login username match anyone of them
//    SELECT ID, password and check if the submitted password matches the one in DB
// 2. Query for new user registration
//    SELECT username from User to see if it's taken by other users
//    INSERT the new user info to USER
// 3. Query for removing existing user
//    SELECT ID from User table and delete the one matched
// 4. Query for forget_password operation
// 5. Query for modifying user info
//    SELECT and change the existing user info
// 6. Query for rate the confirmed gathering case

// Gathering and Request Operation
// 1. Query for inserting new gathering request
// 2. Query for delete the existing gathering request
// 3. Query for changing the existing gathering request
// 4. Query for searching existing gathering request (Filtering)
// 5. Query for joining the existing gathering by insert the user id into the gathering table
// 6. Query for updating the gathering table once a new user joins the gathering
// 7. Query for changing the status of gathering to 'Confirmed'
// 8. Query for updating the confirmed case once the user rate it
