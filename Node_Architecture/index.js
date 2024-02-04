// const os = require("os");

// // max thread pull size : 8
// // bydefault : 4
// console.log(os.cpus().length);

// Node js Architicture

// client -> request -> server -> has -> event queue -> event loop -> process -> events queue -> if -> non blocking req -> then -> process -> else -> goto thread pull -> lastly -> process and -> send back responce

// so use non blocking code
