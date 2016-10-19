import PIXI from 'pixi.js';

export default class CardCover extends PIXI.Sprite
{
  constructor(game, card)
  {
    super(PIXI.Texture.fromImage('./assets/chest.png'));
    this.anchor.set(0.5);
    this.card = card;
    this.position.set(this.card.position.x, this.card.position.y);
    this.game = game;


    let size = this.card.height; // assuming square sizes
    this.width = this.height = size;

    this.setupMask();

    this.interactive = true;
    this.on('touchmove', this.scratch);
    this.on('mousemove', this.scratch);
  }

  setupMask()
  {
    let mask = new PIXI.Graphics();
    this.game.stage.addChild(mask);
    mask.position.x = this.position.x;
    mask.position.y = this.position.y;
    mask.lineStyle(0);

    this.card.mask = mask;
  }

  scratch()
  {
    if(!this.game.scratching)
      return;

    var pos = this.game.renderer.plugins.interaction.eventData.data.global;
    if(!this.card.onScene)
    {
      this.game.stage.addChild(this.card);
      this.card.onScene = true;
    }

    this.drawScratch(this.card.mask, pos.x -  this.card.mask.position.x, pos.y - this.card.mask.position.y, 20, 70, 40);

    debugger;
  }

  drawScratch(ctx, cx, cy, spikes, outerRadius, innerRadius)
  {
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
