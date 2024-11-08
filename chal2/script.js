// / challenge 2

// ES6 Class
class Car {
  constructor(make, speed) {
    this.make = make;
    this._speed = speed; // Store speed in km/h internally
  }

  accelerate() {
    this._speed += 10;
    console.log(`${this.make} is going at ${this._speed} km/h`);
  }

  brake() {
    this._speed -= 5;
    console.log(`${this.make} is going at ${this._speed} km/h`);
  }

  get speedUS() {
    return this._speed / 1.6; // Convert km/h to mi/h
  }

  set speedUS(speedInMph) {
    this._speed = speedInMph * 1.6;
  }
}
