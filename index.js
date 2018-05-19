
const fse = require('fs-extra');
const Mower = require('./Mower.js');
const { isADirection, normalizeInstructions, ORIENTATIONS, DIRECTIONS } = require('./Helpers.js');

async function getInstructions() {
  return fse.readFile('./orders.txt', 'utf8').then(res => {
    return res.split('\n');
  });
}

( async () => {
  // Normalization
  const instructions = normalizeInstructions(await getInstructions());
  const garden = instructions.garden
  let mowers = instructions.mowers.map(mowerInstruction => new Mower(mowerInstruction));
  mowers.forEach(mower => console.log(start(mower)));
})()



function start(mowerInstance){
  // on lance la boucle des orders données.
	mowerInstance.orders.forEach(order => {
		if (isADirection(order)) {
      // L'order est une direction, on change l'orientation en prenant en compte l'ancienne.
      mowerInstance.updateOrientation(order);
		} else {
    // L'order est un mouvement, on avance d'un point dans cette direction de notre orientation.
    mowerInstance.updatePosition();
		}
  })
  return mowerInstance.getInformations();
}
