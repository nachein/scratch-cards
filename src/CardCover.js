import PIXI from 'pixi.js';

export default class CardCover extends PIXI.Sprite{
  constructor(stage, size, x, y){
    super(PIXI.Texture.fromImage('./assets/chest.png'));
    this.position.set(x,y);
    this.stage = stage;
    this.width = this.height = size;
    
    this.interactive = true;
    this.on('touchmove', this.scratch);
  }

  update(delta){
    //this.rotation += 5*delta;
  }
  
  scratch(event){
    let pos = event.target.position;
    
    console.log(this.stage);
    var mascara = new PIXI.Graphics();
    this.stage.addChild(mascara);
    mascara.position.x = pos.x;
    mascara.position.y = pos.y;
    mascara.lineStyle(0);

    this.stage.mask = mascara;

  }
  
  drawScratcg(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginFill(0x8bc5ff, 0.4);
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
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
