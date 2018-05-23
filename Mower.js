
const { DIRECTIONS, ORIENTATIONS } = require('./helpers.js');

class Mower {
  constructor (instruction) {
    this.x = instruction.x;
    this.y = instruction.y;
    this.orientation = instruction.orientation;
    this.orders = instruction.orders;
  }

  /**
   * Update the orientation
   * @param {String} direction - Mower instanciation.
  */
  updateOrientation(direction) {
    let result;
    switch(this.orientation) {
      case "N":
          if (direction === "L") {
            result = "W";
          } else {
            result = "E";
          }
        break;
      case "E":
        if (direction === "L") {
          result = "N";
        } else {
          result = "S";
        }
        break;
      case "W":
        if (direction === "L") {
          result = "S";
        } else {
          result = "N";
        }
        break;
      case "S":
        if (direction === "L") {
          result = "E";
        } else {
          result = "W";
        }
        break;
    }
    
    this.orientation = result;
  }

  /**
   * Update the position
   * @param {Int} xMax - Maxium x possible
   * @param {Int} yMax - Maxium y possible
  */
  updatePosition(xMax, yMax) {
    // console.log('xmax, ymax, ', xMax, yMax)
    switch(this.orientation) {
      case "N": 
        if (this.y < yMax) {
          this.y++;
        }
        break;
      case "E":
        if (this.x < xMax) {
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

  /**
   * Concatenation of position and orientation.
   * In order to be displayed. 
   * @returns {String}
  */
  getInformations() {
    return `${this.x} ${this.y} ${this.orientation}`;
  }
}

module.exports = Mower;