const serverUrl = "https://x1by5ff9kf7m.usemoralis.com:2053/server";
const appId = "IbZgRDuc5diTB6W17JBU8XiQddJnGc44JR81EvGF";
Moralis.start({ serverUrl, appId });

const getPrice = async () => {
    let input = document.getElementById("address")
    const options = {
        address: input.value,
        chain: "avalanche"
    }
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    console.log(price)
}

document.getElementById("btn-login").onclick = function () {
    Moralis.authenticate().then(function (user) {
        console.log(user.get('ethAddress'))
    });
}
document.getElementById("btn-logout").onclick = function () {
    Moralis.User.logOut();
}
document.getElementById("btn-getprice").onclick = function () {
    getPrice();
}