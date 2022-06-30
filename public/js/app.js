
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

solP = 0;
btcP = 0;
ethP = 0;


// selects sol ticker span, function for fetching current solana price from coinAPI
const solanaTicker = document.querySelector('.solPrice');

const getSolana = async () => {

    const solana = await axios.get('https://rest.coinapi.io/v1/assets/SOL?apikey=6BCCDBDD-3A4A-402F-A6F5-8179E67FAD01');
    const currentSolPrice = (solana.data[0].price_usd);
    solanaTicker.innerHTML = (currentSolPrice.toFixed(2));
}

// selects eth ticker span, function for fetching current ethereum price from coinAPI
const ethereumTicker = document.querySelector('.ethPrice');

const getEthereum = async () => {

    const ethereum = await axios.get('https://rest.coinapi.io/v1/assets/ETH?apikey=6BCCDBDD-3A4A-402F-A6F5-8179E67FAD01');
    let currentEthPrice = (ethereum.data[0].price_usd);
    ethereumTicker.innerHTML = (currentEthPrice.toFixed(2));
}

// selects eth ticker span, function for fetching current ethereum price from coinAPI
const btcTicker = document.querySelector('.btcPrice');

const getBitcoin = async () => {

    const btc = await axios.get('https://rest.coinapi.io/v1/assets/BTC?apikey=6BCCDBDD-3A4A-402F-A6F5-8179E67FAD01');
    let currentBTCPrice = (btc.data[0].price_usd);
    btcTicker.innerHTML = (currentBTCPrice.toFixed(2));
}

// changes the dom every 30s with current ticker prices

let counter = 0;

const updateTickerPrice = async () => {
    await getSolana();
    await getBitcoin();
    await getEthereum();
}

if (counter === 0) {
    updateTickerPrice();
}