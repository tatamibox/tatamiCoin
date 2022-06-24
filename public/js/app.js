


const getBitcoin = async () => {

    const btc = await axios.get('https://rest.coinapi.io/v1/assets/SOL?apikey=6BCCDBDD-3A4A-402F-A6F5-8179E67FAD01');
    return (btc);
}