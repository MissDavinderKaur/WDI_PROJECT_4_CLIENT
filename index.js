const express     = require('express');
const expressJWT  = require('express-jwt');

const config      = require('./config/config');

const app         = express();
const dest        = `${__dirname}/public`;


app.use(express.static(dest));

app.use('/api', expressJWT({ secret: config.secret })
  .unless({
    path: [
      { url: '/login', methods: ['POST'] },
      { url: '/register', methods: ['POST'] }
    ]
  }));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(config.port, () => console.log(`Express has started on port: ${config.port}`));
