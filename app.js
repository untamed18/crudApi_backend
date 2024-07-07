const express = require("express");
const mongoose = require("mongoose");
const ProductRoute = require("./routes/product.route.js");

const app = express();


//middlewares
app.use(express.json()); //to enable us parse a body
app.use(express.urlencoded({extended:false}))


//routes 
app.use('/api/products', ProductRoute)

app.get("/", (req, res) => {
  res.send("Welcome to products API");
});

//mongo db connection
mongoose.connect(
  
  "mongodb+srv://seuns3447:KxsiVfmCbQL2mcXt@cluster01.wz0cvy4.mongodb.net/simplecrudapi?retryWrites=true&w=majority&appName=Cluster01"
  )
  .then(() => {
    console.log("Connection to the DB was successful!");
    app.listen(9900, () => {
      console.log("server is listening on port 9900");
    });
  }) //
  .catch(() => {
    console.log("Connection Failed");
  });

  //