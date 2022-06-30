//dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ExpressError = require('./utilities/ExpressError');
const Project = require('./models/project');
const catchAsync = require('./utilities/catchAsync');
//

// expres config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))
app.listen(3000);

//

//mongoose server
mongoose.connect('mongodb://127.0.0.1:27017/accelerator', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open');

    })
    .catch(err => {
        console.log("oh no, Mongo error", err);
    })


// static webpages



app.get('/', (req, res) => {
    res.render('index');

})

app.get('/accelerator', async (req, res) => {
    const p = await Project.find({});
    res.render('accelerator', { p })
})


app.get('/accelerator/new', (req, res) => {
    res.render('new');
})

app.get('/accelerator/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const p = await Project.findById(id);
    res.render('show', { p })
}))

//error handling
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong.' } = err;
    res.status(status).send(message)

})
//