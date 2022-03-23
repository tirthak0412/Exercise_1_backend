//Imports
const express=require("express");
const app=express();

require('./startups/db')();
require('./startups/routes')(app);

//Listning On Port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listning on port ${port}...`))