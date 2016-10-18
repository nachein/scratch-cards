import PIXI from 'pixi.js';

export default class Card extends PIXI.Sprite{
  constructor(size){
    super(PIXI.Texture.fromImage('./assets/chest.png'));
    //this.anchor.set(0.5);
    this.width = this.height = size;
    
    this.on('click', this.scratch)
  }

  update(delta){
    //this.rotation += 5*delta;
  }
  
  scratch(){
    console.log('it works');
  }
}
