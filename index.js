const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/users.route');

const app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set('views', './views' );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index', {
    name: 'AAA'
  });
});

app.use('/users', router);

app.listen(port, () => console.log(`Server is starting at port ${port}`));