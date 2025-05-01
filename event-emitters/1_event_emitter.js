const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("myevent", () => {
  console.log("event received");
});

eventEmitter.on("myevent", (name, age) => {
  console.log(`event received with name: ${name} and age: ${age}`);
});

eventEmitter.emit("myevent", "Ankit", 28);
