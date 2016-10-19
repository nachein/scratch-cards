import PIXI from 'pixi.js';
import Game from './Game';

export default class Card extends PIXI.Sprite{
  constructor(stage, size, x, y){
    super(PIXI.Texture.fromImage('./assets/coin.png'));
    this.position.set(x + size/2,y + size/2);
    this.stage = stage;
    this.width = this.height = size;
    this.anchor.set(0.5);
  }

  update(delta){
    //this.rotation += 5*delta;
  }
}
