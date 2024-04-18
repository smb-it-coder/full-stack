
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, ...args) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach(listener => {
        listener(...args);
      });
    }
  }

  off(eventName, listenerToRemove) {
    const listeners = this.events[eventName];
    if (listeners) {
      this.events[eventName] = listeners.filter(listener => listener !== listenerToRemove);
    }
  }
}

// Example usage:

const emitter = new EventEmitter();

// Define event handlers
const greetHandler = name => {
  console.log(`Hello, ${name}!`);
};

const farewellHandler = name => {
  console.log(`Goodbye, ${name}!`);
};

// Subscribe to events
emitter.on('greet', greetHandler);
emitter.on('farewell', farewellHandler);

// Emit events
emitter.emit('greet', 'Alice'); // Output: Hello, Alice!
emitter.emit('farewell', 'Bob'); // Output: Goodbye, Bob!

// Unsubscribe from an event
emitter.off('greet', greetHandler);

// Now, this won't trigger the greetHandler
emitter.emit('greet', 'Carol'); // No output

// This will still trigger the farewellHandler
emitter.emit('farewell', 'Dave'); // Output: Goodbye, Dave!





## In this example, EventEmitter is a class that allows subscribing to events (on method), emitting events (emit method), and unsubscribing from events (off method). It maintains an internal map where event names are keys, and arrays of event listeners are values. When an event is emitted, all listeners attached to that event are invoked with the provided arguments.
