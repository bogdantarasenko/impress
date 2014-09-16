// Databases including persistent session storage and application specific

module.exports = {

  dbImpress: {
    url: 'mongodb://localhost:27017/impress',
    collections: [ 'sessions', 'users', 'groups', 'testCollection' ],
    alias: 'dbAlias',
    slowTime: '2s',
    security: true,
  },

  // MySQL example database configuration
  //
  //  mysqlConnection: {
  //    url: 'mysql://impress:password@localhost/impress', // connection string (required)
  //    alias: 'aliasNameMy',                              // database alias to be used as short identifier (optional)
  //    slowTime: 1000,                                    // time to log query as slow (optional, default: '2s', in milliseconds or string like '5s')
  //  },

  // PgSQL example database configuration
  //
  //  pgsqlConnection: {
  //    url: 'postgres://impress:password@localhost/test', // connection string (required)
  //    alias: 'aliasNamePg',                              // database alias to be used as short identifier (optional)
  //    slowTime: 1000,                                    // time to log query as slow (optional, default: '2s', in milliseconds or string like '5s')
  //  },

  // MongoDB example database configuration
  //
  //  mongoConnection: {
  //    url: 'mongodb://localhost:27017/dbname', // connection string (required)
  //    collections: ['collname1', 'collname2'], // collection to be created automatically if not exists
  //    alias: 'aliasNameMongo',                 // database alias to be used as short identifier (optional)
  //    slowTime: '2s',                          // time to log query as slow (optional, default: '2s', in milliseconds or string like '5s')
  //    security: true,                          // flag to use this database for security subsystem (optional, dafault: false), collections: sessions, users, groups
  //  }
};
