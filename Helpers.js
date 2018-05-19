const Helpers = {
  ORIENTATIONS: ["N", "E", "W", "S"],
  DIRECTIONS: ["L", "R"],
  isADirection(letter) {
    return Helpers.DIRECTIONS.includes(letter)
  },
  /**
   * return an object of each mower informations.
   * 
   * instructionsObject structure: 
    { 
      garden: [ '5', '5' ],
      mowers: [ 
        { x: 1, y: 2, orientation: 'N', orders: '[ 'L', 'F', 'L', 'F', 'L', 'F', 'L', 'F', 'F' ]' },
      ]
    }
   */
  normalizeInstructions(basicInstruction) {
    const instructionsObject = { garden: null, mowers: [] };
    let mowerIndex = 0;
    basicInstruction.forEach((line, i) => {
      // First index represent the garden, we don't need it.
      if (i === 0) {
        instructionsObject.garden = line.split(' ');
      } else {
        if (i % 2) {
          // create new mower informations
          instructionsObject.mowers[mowerIndex] = {};
          const pos = line.split(' ');
          instructionsObject.mowers[mowerIndex].x = parseInt(pos[0]);
          instructionsObject.mowers[mowerIndex].y = parseInt(pos[1]);
          instructionsObject.mowers[mowerIndex].orientation = pos[2];
        } else {
          instructionsObject.mowers[mowerIndex].orders = line.split('');
          mowerIndex ++;
        }
      }
    })
    return instructionsObject;
  }
}

module.exports = Helpers;