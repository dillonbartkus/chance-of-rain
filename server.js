const express = require('express');
const port = process.env.HTTP_PORT || 3000

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

app.get('/', (req,res) => {
    res.send(`server`)
  })
  
//   const routes = require('./routes/routes')
//   app.use('/', routes)
  
  app.use('*', (req, res) => {
    res.status(404).send('Page Not Found!')
  })
  
  app.listen(port, () => {
    console.log(`Listening on ${port}`)
  })