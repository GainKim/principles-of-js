var greeting = "Hello!";
var menu = "Angry Wopper!";
var goodbye = "See you tomorrow!";

console.log(greeting);

setTimeout(haveLunch, 0);

function haveLunch() {
  console.log(`Please order ${menu}.`);
}

console.log(goodbye);
