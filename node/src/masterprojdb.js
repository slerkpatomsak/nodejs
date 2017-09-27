/**
 * Created by gforgam on 9/26/2017 AD.
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/masterproject";



//create table users

//
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     db.collection("customers").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });

//insert user data

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var userobj = { user_id: "1", device_id: "123456789", appication_id: "qwertyuiop12345678"};
//     db.collection("users").insertOne(userobj, function(err,res) {
//         if(err) throw err;
//         console.log("create a user");
//         db.close();
//     });
// });

//query user data
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var get_user = {user_id: "1"};
    db.collection("users").find(get_user).toArray(function(err,result){
        if(err) throw err;
        console.log("query");
        db.close();
    });
});

