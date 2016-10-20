import PIXI from 'pixi.js';
import CoverArea from './CoverArea.js';

export default class CardCover extends PIXI.Sprite
{
  constructor(game, card, particles)
  {
    super(PIXI.Texture.fromImage('./assets/chest.png'));
    this.anchor.set(0.5);
    this.card = card;
    this.position.set(this.card.position.x, this.card.position.y);
    this.game = game;
    this.particles = particles;


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

    this.generateCoverArea();
  }

  generateCoverArea()
  {
    this.covers = [];
    let spacing = this.width / 4;
    for(let i = 0; i < 4; i ++)
    {
      for(let j = 0; j < 4; j ++)
      {
        let cover = new CoverArea(this.position.x - this.width/2 + spacing/2 + spacing * i, this.position.y - this.height/2 + spacing/2 + spacing * j);
        // let coverDebug = new PIXI.Graphics();
        // coverDebug.beginFill(0x8bc5ff, 0.4);
        // coverDebug.drawCircle(cover.x, cover.y, 5);
        //this.game.stage.addChild(coverDebug);
        this.covers.push(cover);
      }
    }
  }

  scratch()
  {
    if(!this.game.scratching || this.revealed)
      return;

    var pos = this.game.renderer.plugins.interaction.eventData.data.global;
    if(!this.card.onScene)
    {
      this.game.stage.addChild(this.card);
      this.card.onScene = true;
    }

    this.drawScratch(this.card.mask, pos.x -  this.card.mask.position.x, pos.y - this.card.mask.position.y, 20, 50, 35);

    this.particles.position.x = pos.x;
    this.particles.position.y = pos.y;

    this.checkCardCoverage(pos);
    if(this.unseenCovers.length < 3)
    {
      this.revealed = true;
    }

  }

  drawScratch(ctx, cx, cy, spikes, outerRadius, innerRadius)
  {
      var rot = Math.PI / 2 * 3;
      var x = cx;
      var y = cy;
      var step = Math.PI / spikes;

      ctx.beginFill(0x8bc5ff, 0.4);
      ctx.moveTo(cx, cy - outerRadius)
      for (var i = 0; i < spikes; i++)
      {
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

  checkCardCoverage(position)
  {
    for(var cover of this.covers)
    {
      let distance = this.distance(position.x, position.y, cover.x, cover.y);
      if(distance < 50)
        cover.revealed = true;
    }
  }

  distance(x0, y0, x1, y1)
  {
    let x = x1 - x0;
    let y = y1 - y0;
    return Math.sqrt(x*x + y*y);
  }

  get unseenCovers()
  {
    return this.covers.filter( cover => !cover.revealed);
  }

  get revealed()
  {
    return this.reveal;
  }

  set revealed(reveal)
  {
    if(reveal)
    {
        this.card.mask.clear();
        this.card.mask = null;
    }

    this.reveal = reveal;
  }
}
