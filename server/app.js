const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://hello:hello1234@ds331135.mlab.com:31135/gql-play',{ useNewUrlParser: true });
mongoose.connection.once('open',() => {
  console.log('connected to database');
});
const schema = require('./schema/schema');
app.use('/graphql',graphqlHTTP({
  schema ,
  graphiql : true
}));
app.listen(4000 , ()=>{
console.log('Listening');
});
