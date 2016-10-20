import plugins from './plugins';
import config  from './config';
import Game from './Game';
import Card from './Card';
import CardCover from './CardCover';
import Board from './Board';
import Particles from 'pixi-particles';
import ScratchParticles from './ScratchParticle';

let game = new Game(config);

let particles = new ScratchParticles();
game.stage.addChild(particles);

game.stage.interactive = true;

game.stage.on('touchstart', startScratching);
game.stage.on('mousedown', startScratching);
game.stage.on('touchend', stopScratching);
game.stage.on('mouseup', stopScratching);


function startScratching()
{
  game.scratching = true;
  particles.emitter.maxParticles = 500;
}

function stopScratching()
{
  game.scratching = false;
  particles.emitter.maxParticles = 0;
}

// setup 3x3 board
let tilesSize = (config.width - config.innerPadding * 4) / 3;

let x,y;
for(let i = 0; i < 3; i++)
{
    for(let j = 0; j < 3; j++)
    {
        x = config.innerPadding + i * (config.innerPadding + tilesSize);
        y = config.topPadding + j * (config.innerPadding + tilesSize);
        addCard(tilesSize, x, y);
    }
}

function addCard(size, x,y)
{
  let card = new Card(size, x , y);
  let cardCover = new CardCover(game, card, particles);
  game.stage.addChild(cardCover);
}


game.start();
