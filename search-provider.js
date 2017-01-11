// var request = require('request');
var SearchProvider = require( 'deepstream.io-provider-search-rethinkdb' );

var searchProvider = new SearchProvider({
    //optional, defaults to 'search'
    listName: process.env.PROVIDER_LISTNAME,

    /**
     * Only use 1 for production!
     * 0 = logging off
     * 1 = only log connection events & errors
     * 2 = also log subscriptions and discards
     * 3 = log outgoing messages
     */
    logLevel: 3,
    // process.env.PROVIDER_LOGLEVEL,

    // deepstream
    deepstreamUrl: process.env.DEEPSTREAM_HOST + ':' + process.env.DEEPSTREAM_PORT,
    deepstreamCredentials: { role: process.env.DEEPSTREAM_AUTH_ROLE, username: process.env.DEEPSTREAM_AUTH_USERNAME, password: process.env.DEEPSTREAM_AUTH_PASSWORD },

    // rethinkdb
    rethinkdbConnectionParams: {
        host: process.env.RETHINKDB_HOST,
        port: process.env.RETHINKDB_PORT,
        db: process.env.RETHINKDB_DATABASE
    }
});

// and start it
setTimeout(() => {
  searchProvider.start();
}, 3000);