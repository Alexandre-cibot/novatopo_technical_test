
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
    let orientationUpdated;
    switch(this.orientation) {
      case "N":
        orientationUpdated = direction === DIRECTIONS.left ? "W" : "E"
        break;
      case "E":
        orientationUpdated = direction === DIRECTIONS.left ? "N" : "S"
        break;
      case "W":
        orientationUpdated = direction === DIRECTIONS.left ? "S" : "N"
        break;
      case "S":
        orientationUpdated = direction === DIRECTIONS.left ? "E" : "W"
        break;
    }
    
    this.orientation = orientationUpdated;
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