const express = require('express');
const bodyParser = require('body-parser');

//local server DB
let photos=[];

// create Express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false ,limit: '50mb'}));
// parse application/json
app.use(bodyParser.json({limit: '50mb'}));

// set view engine
app.set('view engine', 'ejs');

// photpFrame view
app.get('/',(req, res)=>{
  res.render('photoFrame');
});

// check new photo
app.get('/getPhotos', (req, res)=>{
  res.send(photos);
})

// api for app post photo 
app.post('/post', (req, res) => {
  console.log(req.body.photo);
  data = req.body.photo;
  photos.push(req.body.photo);
  res.json({"OK": req.body.photo});
});

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
