//The Event module in Node.js is a built-in module used to create and handle events in an application.

//Node.js provides the EventEmitter class through the events module.
const EventEmitter = require("events");

const emitter = new EventEmitter();

//Use .on() to listen for an event:
emitter.on("greet", (name) => {
  console.log(`Hello event modules by ${name}`);
});

//Use .emit() to trigger the event:

emitter.emit("greet", "abresh"); //with argument abresh
