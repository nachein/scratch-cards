import plugins from './plugins';
import config  from './config';
import Game from './Game';
import Card from './Card';
import CardCover from './CardCover';

let game = new Game(config);

// setup 3x3 board
let topPadding = 100;
let innerPadding = 25;
let tilesSize = (config.width - innerPadding * 4) / 3;
let x,y;
for(let i = 0; i < 3; i++)
{
    for(let j = 0; j < 3; j++)
    {
        x = innerPadding + i * (innerPadding + tilesSize);
        y = topPadding + j * (innerPadding + tilesSize);
        addCard(tilesSize, x, y);
    }
}

function addCard(size, x,y)
{
  let cardCover = new CardCover(game.stage, size, x, y);
  
  let card = new Card(game.stage, size, x , y);
  
  game.stage.addChild(card);
  game.stage.addChild(cardCover);
}

game.start();
