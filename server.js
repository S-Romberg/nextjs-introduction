const express = require('express')
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()

    server.get('*', (req,res) => {
      handle(req,res)
    })
  server.listen(3000)
})

