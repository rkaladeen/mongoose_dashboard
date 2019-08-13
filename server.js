const express = require('express'),
         port = 8000,
         DB_NAME = "mongoose_farm",
              bp = require('body-parser'),
             app = express();

app.use(bp.json());
app.use(express.static(__dirname + "/client/static"));
app.use(express.urlencoded({extended: true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.set('view options', { layout: false })

require('./server/utils/mongoose_dbcon')(DB_NAME);
require('./server/utils/routes')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});