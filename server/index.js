const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

//works
app.get('/reviews/meta', (req, res) => {
  console.log(req.query.product_id)
  res.send('this is the meta response');
})

//works
app.get('/reviews', (req, res) => {
  console.log(req.query);
  res.send('this is the reviews response')
})

//works
app.post('/reviews', (req, res) => {
  console.log(req.body);
  res.send('Hopefully this works');
})

//unchecked
app.put('/reviews/:review_id/helpful', (req, res) => {
  console.log('helpful');
  res.send('helpful');
})

//unchecked
app.put('/reviews/:review_id/report', (req, res) => {
  console.log('report');
  res.send('report');
})

// app.get('*.css', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.use(express.static(path.join(__dirname, '/../public')));
app.listen(port, () => {console.log('listening on port: ', 3000)});