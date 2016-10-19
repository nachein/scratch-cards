import PIXI from 'pixi.js';
import Game from './Game';

export default class Card extends PIXI.Sprite
{
  constructor(size, x, y)
  {
    super(PIXI.Texture.fromImage('./assets/coin.png'));
    this.position.set(x + size/2,y + size/2);
    this.width = this.height = size;
    this.anchor.set(0.5);
  }

  get onScene()
  {
      return this.isOnScene;
  }

  set onScene(isOnScene)
  {
    this.isOnScene = isOnScene;
  }
}
