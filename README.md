
## Run the Script
`node index.js`

## Story
Homeloop's Technical Test

MowItNow company decided to develop an automatic weed mower for rectangular surfaces.
The mower can be programmed to travel along the whole surface.
The location of the mower is represented by a combination of coordinates (x, y) and a letter for the orientation of the mower following the English coordinates convention (N,E,W,S).
The lawn is divided into a grid to simplify navigation.
For example, the location of the mower can be "0, 0, N", which means that it is located in the bottom left corner of the lawn and oriented to the North.
To control the mower, we send it a simple letter sequence. Possible letters are "R", "L", and "F". "L" and "R" make the mower to turn right or left but without moving. "F" means that we move the mower one space forward in the direction it is presently facing and without modifying its orientation.
If the location of the mower after the move is out of the lawn, the mower does not move and keep its orientation. It then process the next instruction.
We consider that the next space positioned North to the current case (x, y) has for coordinates: (x, y+1). To program the mower, we must provide it an input file built with the following rules:

The first line of the file is the coordinates of the top right corner of the lawn. These of the bottom left corner are supposed to be (0, 0).
The rest of the file allows to pilot all the mowers that have been deployed. Each mower instructions take two lines:
The first line give the initial location of the mower, as well as its orientation. The location and orientation are provided as 2 figures and a letter, separated with a space.
The second line gives a set of instructions to ask the mower to explore the lawn. Instructions are a set of characters without spaces.

Each mower moves autonomously, which means that all the mowers are moving at the same time and in an asynchronous manner. A mower cannot pass over another mower but must wait for its way to be free in order to move.
When a mower has finished processing its instructions, it communicates its location and orientation.

OBJECTIVE
Conceive and write a program to handle this scenario. Prefer NodeJS or Python in this regard.

TEST
The following file is provided as an input:
5 5
1 2 N
LFLFLFLFF
3 3 E
FRFFRFRRF
5 2 S
FLFLFFRFLF

We are waiting for the following results (final positions of mowers):
1 3 N
4 1 E
5 4 N

NB: The input data can be injected through another mean than a file (an automated test for instance).
