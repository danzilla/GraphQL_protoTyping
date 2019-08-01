// GraphQl = rootValue

let pageMesage = "";
const rootValue = {
    hello: () => {
        pageMesage = "Hello world";
        return pageMesage;
    },
    random: () => {
        pageMesage = Math.random();
        return pageMesage;
    },
    rollDice: function ({
        numDice,
        numSides
    }) {
        let output = [];
        for (let i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    },
    realRandom: function ({
        num
    }) {
        let output = [];
        for (let i = 0; i < num; i++) {
            output.push(i + " lol")
        }
        return output;
    }
};
module.exports = rootValue;


