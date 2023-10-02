const userInfo = require('./information');

const cowsay = require("cowsay");


console.log(cowsay.say({
    text : `Hello i'm ${userInfo.name} i'm from ${userInfo.campus} Campus !`,
    e : "--",
    T : "X "
}));
