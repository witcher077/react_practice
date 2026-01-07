const express = require('express');
const app = express();
const http = require('http');
const rm = require('./services/require.module');
const cors = require('cors');
const expressJwt = require('express-jwt');
let dotenv = require("dotenv")
let path = `${__dirname}/.env`;
let environmentDetails = dotenv.config({ path }).parsed;

const { io } = require('./utils/socketApi')


// const { ApolloServer, gql, UserInputError } = require('apollo-server-express');

const port = environmentDetails.PORT ;
const url = environmentDetails.DATABASE_URL;

process.on('uncaughtException', error => {
  console.log('%c%s', 'color: #ff0000', error);
});

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.use(cors());

app.use(cors(), expressJwt({
  secret: rm.settings.jwt.secretKey,
  credentialsRequired: false,
  algorithms: ['HS256']
}));

app.use('/uploads', express.static('uploads'));
app.use('/api/public', express.static('public'));

const typeDefs = rm.apollo.gql(rm.fs.readFileSync('./services/graphql/schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./services/graphql/resolvers');
const context = ({ req }) => req;
const apolloServer = new rm.apollo.ApolloServer({ typeDefs, resolvers, context });
// await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.use(require('./router'));
rm.mongoose.connect(url, rm.settings.thoughtFounderDB.options);
app.use(function (req, res) {
  rm.responseHandler(req, res, { error: { message: 'URL NOT FOUND' }, status: 404 });
});

const server = http.createServer(app);
io.attach(server,{ cors: { origin: '*' } });

server.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

module.exports = server;
