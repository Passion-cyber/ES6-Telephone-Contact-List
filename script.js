"use strict";

class Telephone {
  constructor() {
    this.contact = [];
    this.observers = [];
  }

  addPhoneNumber(number) {
    if (!this.validatePhoneNumber(number)) {
      console.log("Invalid phone number format");
      return;
    } else {
      this.contact.push(number);
      this.notifyObservers({ type: "add", number });
    }
  }

  removePhoneNumber(number) {
    this.contact = this.contact.filter((element) => element !== number);
    this.notifyObservers({ type: "remove", number });
  }

  dialPhoneNumber(number) {
    if (this.validatePhoneNumber(number)) {
      if (this.contact.includes(number)) {
        console.log(`Now Dialing 📞 ${number}`);
        this.notifyObservers({ type: "dial", number });
      } else {
        console.log(
          `Error: This ${number} you're trying to dial is not in your contact list`
        );
      }
    } else {
      console.log("Invalid phone number format");
    }
  }

  addObservers(observer) {
    if (contactObserver instanceof Observer) {
      this.observers.push(observer);
    } else {
      console.log(
        "Invalid observer, must be an instance of the contactObserver class."
      );
    }
  }

  removeObservers(observer) {
    if (this.observerExists(observer)) {
      this.observers = this.observers.filter((element) => element !== observer);
    } else {
      console.log("Observer not found in the list of observers.");
    }
  }

  notifyObservers(event) {
    this.observers.forEach((observer) => {
      if (contactObserver instanceof Observer) {
        observer.update(event);
      } else {
        console.log(
          "Invalid observer, must be an instance of the contactObserver class."
        );
      }
    });
  }

  validatePhoneNumber(phoneNumber) {
    /*  This line of code below is a regular expression code that validates
        ONLY nigerian phone numbers in this format (+234XXXXXXXX) and (080XXXXXXXXX) */
    var pattern = /^((\+234)|0)[789]\d{9}$/;
    return pattern.test(phoneNumber);
  }

  observerExists(observer) {
    return this.observers.includes(observer);
  }
}

class Observer {
  update(event) {
    if (event.type == "add") {
      console.log(`${event.number} has been added to the contact List`);
    } else if (event.type == "remove") {
      console.log(`${event.number} has been removed from the contact List`);
    } else if (event.type == "dial") {
      console.log(`Now dialing 📞 ${event.number} `);
    }
  }
}

const myPhone = new Telephone();
const contactObserver = new Observer();

const contactObserver1 = new Observer();
const contactObserver2 = new Observer();

myPhone.addObservers(contactObserver1);
myPhone.addObservers(contactObserver2);
myPhone.addPhoneNumber("+2349013834360");
myPhone.dialPhoneNumber("+2349013834360");
myPhone.removePhoneNumber("+2349013834360");
