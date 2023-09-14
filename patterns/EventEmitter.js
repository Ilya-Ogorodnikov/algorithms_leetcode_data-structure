class EventEmitter {
  constructor() {
    this.events = {};
  }

  get print() {
    return this.events;
  }

  on(eventKey, fn) {
    if (!this.events[eventKey]) this.events[eventKey] = [];

    this.events[eventKey].push(fn);

    return this;
  }

  emit(eventKey, ...args) {
    try {
      if (!this.events[eventKey]) return this;

      this.events[eventKey].forEach((callback) => callback(args));

      return this;
    } catch (error) {
      return this;
    }
  }

  off(eventKey, fn) {
    if (!this.events[eventKey] || typeof fn !== "function") return this;

    this.events[eventKey] = this.events[eventKey].filter(
      (callback) => callback !== fn
    );

    return this;
  }

  offAll(eventKey) {
    if (!this.events[eventKey]) return this;

    delete this.events[eventKey];

    return this;
  }
}

const callback1 = () => console.log('cb1');
const callback2 = (args) => console.log("args", args);

const emitter = new EventEmitter();

emitter.on("event:addCalbacks", callback1)
.on("event:addCalbacks", callback2)
.emit("event:addCalbacks", 12, 11, 10)
.on("event:addCalbacks1", callback1)
.off('event:addCalbacks1', callback1)
.offAll('event:addCalbacks')