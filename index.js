const Mower = require('./Mower.js');
const Garden = require('./Garden.js');
const { getInstructions, normalizeInstructions, ORIENTATIONS, DIRECTIONS } = require('./helpers.js');


( async () => {
  // Normalization
  const instructions = normalizeInstructions(await getInstructions());
  const garden = new Garden(instructions.garden);
  let mowers = instructions.mowers.map(mowerInstruction => new Mower(mowerInstruction));
  garden.runMowers(mowers);
  
})()
