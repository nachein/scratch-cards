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
  game.stage.addChild(cardCover);

  let card = new Card(game.stage, size, x , y);
  game.stage.addChild(card);



  let mask = new PIXI.Graphics();
  game.stage.addChild(mask);
  mask.position.x = x + size/2;
  mask.position.y = y + size/2;
  //mask.lineStyle(0);

  card.mask = mask;
  //card.mask = null;


  //card.mask.beginFill(0xFF0000);
  //card.mask.drawCircle(0 , 0, 30);






  //container.addChild(card);

}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginFill(0x8bc5ff, 0.4);
    ctx.moveTo(cx, cy - outerRadius)
    for (var i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
}

game.start();
