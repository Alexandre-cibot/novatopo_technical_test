const {isADirection} = require('./helpers.js');

class Garden {
  constructor(maximumValues) {
    [this.xMax, this.yMax] = maximumValues;
  }

  /**
   * Run each Mowers in the garden asynchronously.
   * The last mower's position is displayed a mower has finished.
   * @param {Mower[]} mowers -  Array of Mowers
   * 
   */
  runMowers(mowers){
    mowers.forEach((mower, i) => {
      console.log('Lancement de mower', i)
      const newMowerLaunched = this.runSingleMower(mower)
      newMowerLaunched.then(console.log)
    });
  }

  /**
   * Run a Mower in the Garden.
   * Execute each order.
   * @param {Mower} mower - Mower instanciation.
   * @returns {Promise} - The last mower's position.
  */
  runSingleMower(mower) {
    // on lance la boucle des orders données.
    return new Promise((resolve, reject) => {
      mower.orders.forEach(order => {
        if (isADirection(order)) {
          // L'order est une direction, on change l'orientation en prenant en compte l'ancienne.
          mower.updateOrientation(order);
        } else {
        // L'order est un mouvement, on avance d'un point dans cette direction de notre orientation.
        mower.updatePosition(this.xMax, this.yMax);
        }
      })
      resolve(mower.getInformations());
    })
  }
  
}

module.exports = Garden;