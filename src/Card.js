import PIXI from 'pixi.js';
import Game from './Game';

export default class Card extends PIXI.Sprite{
  constructor(stage, size, x, y){
    super(PIXI.Texture.fromImage('./assets/coin.png'));
    //this.position.set(x,y); NACHO
    this.stage = stage;
    this.width = this.height = size;
  }

  update(delta){
    //this.rotation += 5*delta;
  }
}
