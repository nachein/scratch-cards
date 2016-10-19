import PIXI from 'pixi.js';

export default class CardCover extends PIXI.Sprite{
  constructor(stage, size, x, y){
    super(PIXI.Texture.fromImage('./assets/chest.png'));
    this.position.set(x + size/2,y + size/2);
    this.stage = stage;
    this.width = this.height = size;
    this.anchor.set(0.5);


    this.interactive = true;

    let mask = new PIXI.Graphics();
    mask.lineStyle(0);

    //this.addChild(mask);
    //this.mask = mask;

    //this.drawStar(this.mask, 0, 0, 20, 30, 25);
    this.on('touchstart', this.scratch);
  }

  update(delta){
    //this.rotation += 5*delta;
  }

  scratch(event){
    let pos = event.target.position;

    //this.scratches.push(pos);

    // this.mascara.beginFill(0xFF0000);
    // this.mascara.drawCircle(pos.x, pos.y, 10);
    //
    // this.mask = this.mascara;

        //mask.drawCircle(5, 5, 10);

    //this.drawScatches();
    //this.drawStar(this.mask, 0, 0, 20, 30, 25);
  }

  drawScatches(){

    // this.container.mask = null;
    // this.mask.clear();
    //
    // for(var i = 0; i < this.scratches.length; i++){
    //   var pos = this.scratches[i];
    //   this.drawStar(this.mask, pos.x, pos.y, 20, 30, 25);
    // }

  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
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
}
