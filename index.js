//dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ExpressError = require('./utilities/ExpressError');
const Project = require('./models/project');
const catchAsync = require('./utilities/catchAsync');
//

// express config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
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


// static webpages -----v


// index page
app.get('/', (req, res) => {
    res.render('index');

})

// featured projects / accelerator projects page
app.get('/accelerator', async (req, res) => {
    const p = await Project.find({});
    res.render('accelerator', { p })
})

// CREATE section, submit new proposal
app.get('/accelerator/new', (req, res) => {
    res.render('new');
})

// SHOW/READ section, show a project by ID
app.get('/accelerator/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const p = await Project.findById(id);
    res.render('show', { p })
}))

// POST route for new projects being submitted
app.post('/accelerator', catchAsync(async (req, res) => {
    console.log(req.body)
    const project = new Project(req.body);
    await project.save();
    res.redirect(`/accelerator/${project._id}`)
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