﻿module.exports = function(req, res, callback) {

	res.context.data = { status: 0 };

	console.dir({post:req.post});

	var items = [],
		path = req.post.id.substring(1).split('/'),
		dbName = path[0],
		database = impress.config.databases[dbName],
		schema = database.url.substr(0, database.url.indexOf(':')),
		driver = db[dbName];
	if (path.length == 2) {
		if (schema == 'mysql') { // [TODO]

			// CREATE DATABASE new_database
			// for table in SHOW TABLES old_database
			// do
			//   RENAME TABLE old_database.table to new_database.table
			// done
			// DROP DATABASE old_database

			driver.query('RENAME DATABASE ?? TO ??', [path[1], req.post.title], function(err, result) {
				console.dir({err:err});
				if (!err) res.context.data = { status: 1 };
				callback();
			});
		} else if (schema == 'mongodb') { // [TODO]
			var client = db.drivers.mongodb.MongoClient,
				url = 'mongodb://localhost:27017/'+path[1];
			client.connect(url, function(err, connection) {
				console.dir({err:err});
				callback();
				//connection.dropDatabase(function(err, result) {
				//	if (!err) res.context.data = { status: 1 };
				//	callback();
				//});
			});
		} else callback();
	} else if (path.length == 3) {
		if (schema == 'mysql') { // [OK]
			driver.query('RENAME TABLE ?? TO ??', [path[1]+'.'+path[2], path[1]+'.'+req.post.title], function(err, result) {
				console.dir({err:err});
				if (!err) res.context.data = { status: 1 };
				callback();
			});
		} else if (schema == 'mongodb') { // [OK]
			var client = db.drivers.mongodb.MongoClient,
				url = 'mongodb://localhost:27017/'+path[1];
			client.connect(url, function(err, connection) {
				connection.renameCollection(path[2], req.post.title, function(err, result) {
					console.dir({err:err});
					if (!err) res.context.data = { status: 1 };
					callback();
				});
			});
		} else callback();
	}

}