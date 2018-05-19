
const { DIRECTIONS, ORIENTATIONS } = require('./Helpers.js');

class Mower {
  constructor (instruction) {
    this.x = instruction.x;
    this.y = instruction.y;
    this.orientation = instruction.orientation;
    this.orders = instruction.orders;
  }

  updateOrientation(direction) {
    let result;
    switch(this.orientation) {
      case "N":
          if (direction === "L") {
            result = "W";
          } else {
            result = "E"
          }
        break;
      case "E":
        if (direction === "L") {
          result = "N";
        } else {
          result = "S"
        }
        break;
      case "W":
        if (direction === "L") {
          result = "S";
        } else {
          result = "N"
        }
        break;
      case "S":
        if (direction === "L") {
          result = "E";
        } else {
          result = "W"
        }
        break;
    }
    
    this.orientation = result;
  }

  updatePosition() {
    switch(this.orientation) {
      case "N": 
        if (this.y < 5) {
          this.y++;
        }
        break;
      case "E":
        if (this.x < 5) {
          this.x++;
        }
        break;
      case "W":
        if (this.x > 0) {
          this.x--;
        }
        break;
      case "S":
        if (this.y > 0) {
          this.y--;
        }
        break;
    }
  }

  getInformations() {
    return `${this.x} ${this.y} ${this.orientation}`;
  }
}

module.exports = Mower;