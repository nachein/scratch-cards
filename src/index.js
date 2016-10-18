import plugins from './plugins';
import config  from './config';
import Game from './Game';
import Card from './Card';

let game = new Game(config);

// setup 3x3 board
let topPadding = 100;
let innerPadding = 25;
let tilesSize = (config.width - innerPadding * 4) / 3;
for(let i = 0; i < 3; i++)
{
    for(let j = 0; j < 3; j++)
    {
        addCard(tilesSize, innerPadding + i * (innerPadding + tilesSize), topPadding + j * (innerPadding + tilesSize));
    }
}

function addCard(size, x,y)
{
  let card = new Card(size);
  card.position.set(x,y);
  game.stage.addChild(card);
}

game.start();
