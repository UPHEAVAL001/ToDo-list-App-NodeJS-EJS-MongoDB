const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/' , require('./routes'));

//for static style and JS files
app.use(express.static('./assets'));


// set up view engine

app.set('view engine' , 'ejs');
app.set('views' , './views');


app.listen(port , function(err){

    if(err){
        console.log(`Error in running the server : ${port}`);
    }

    console.log(`Server is running on port : ${port}`);
});