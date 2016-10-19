import PIXI from 'pixi.js';

export default class Board extends PIXI.Container
{
    constructor(config)
    {
      super(PIXI.Container);

      this.height = config.height;
      this.width = config.width;
      this.interactive = true;
 
      this.on('mousedown', function(){
        alert('asdasd');
      });

      this.on('touchstart', function(){
        alert('asdasd');
      });
    }
}
