const mongoose = require('mongoose');
const Project = require('./models/project');

mongoose.connect('mongodb://127.0.0.1:27017/accelerator', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open')

    })
    .catch(err => {
        console.log("oh no, Mongo error", err)
    })

const p = new Project({
    name: 'Uthereum',
    description: 'A ethereum derivative.',
    funding: 20000
})
p.save();