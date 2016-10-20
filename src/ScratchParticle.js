import PIXI from 'pixi.js';

export default class ScratchParticle extends PIXI.Container
{
  constructor()
  {
    super();

    this.emitter = new PIXI.particles.Emitter(
      this,
      [PIXI.Texture.fromImage('./assets/particle.png')],
      {
        alpha: {
            start: 1,
            end: 0
        },
        scale: {
            start: 0.1,
            end: 0.01
        },
        color: {
            start: "e0e0e0",
            end: "e3f7ff"
        },
        speed: {
            start: 50,
            end: 25
        },
        startRotation: {
            min: 0,
            max: 360
        },
        rotationSpeed: {
            min: 0,
            max: 0
        },
        lifetime: {
            min: 0.2,
            max: 0.8
        },
        frequency: 0.008,
        emitterLifetime: 0.31,
        maxParticles: 500,
        pos: {
            x: 0,
            y: 0
        }
      }
    );

    this.emitter.emitterLifetime = -1;
    this.emitter.maxParticles = 0; // reset at first
    this.emitter.emit = true;


  }

  update(deltaTime)
  {
    if(this.emitter.emit)
      this.emitter.update(deltaTime);
  }

}


