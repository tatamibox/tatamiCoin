const mongoose = require('mongoose');
const Project = require('./models/project');

mongoose.connect('mongodb://127.0.0.1:27017/accelerator', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open')

    })
    .catch(err => {
        console.log("oh no, Mongo error", err)
    })

const names = ["Leverage Coin", "Clever Coin", "Instant Coin", "Growth Coin", "Pro Coin", "Agile Coin", "Earn Coin", "Gross Coin", "Credible Coin", "Propel Coin", "Invest Coin", "Focus Coin", "Venture Coin", "Coinaro", "Gain Coin", "Everyday Coin", "Coinadri", "Management Coin", "Modern Coin", "Coinpad", "Genius Coin", "Fund Coin", "Scoot Coin", "Active Coin", "Spur Coin", "Launch Coin", "Coinworks", "Coinsio", "Boost Coin", "Prevail Coin", "Zip Coin", "Delta Coin", "Coinopedia", "Alpha Coin", "Synergy Coin", "Coinya", "Core Coin", "Control Coin", "Pal Coin", "Coinarc", "Treasury Coin", "Fly Coin", "Consumer Coin", "Coinx", "Global Coin", "Guarantee Coin", "Develop Coin", "Center Coin", "Coinex", "Nimble Coin", "Logic Coin", "Automation Coin", "Reliance Coin", "Independent Coin"]
// https://source.unsplash.com/collection/298137

