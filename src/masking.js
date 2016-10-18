var renderer = PIXI.autoDetectRenderer(800, 600, { antialias: true });
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

stage.interactive = true;

var bg = PIXI.Sprite.fromImage('BGrotate.jpg');

bg.anchor.x = 0.5;
bg.anchor.y = 0.5;

bg.position.x = renderer.width / 2;
bg.position.y = renderer.height / 2;

stage.addChild(bg);

var container = new PIXI.Container();
container.position.x = renderer.width / 2;
container.position.y = renderer.height / 2;

// add a bunch of sprites


var panda =  PIXI.Sprite.fromImage('panda.png');
panda.anchor.x = 0.5;
panda.anchor.y = 0.5;

panda.position.x = renderer.width / 2;
panda.position.y = renderer.height / 2;

stage.addChild(panda);

// let's create a moving shape
var mascara = new PIXI.Graphics();
stage.addChild(mascara);
mascara.position.x = renderer.width / 2;
mascara.position.y = renderer.height / 2;
mascara.lineStyle(0);


// var light3 = PIXI.Sprite.fromImage('StarStamp.png');
// stage.addChild(light3);
// light3.anchor.x = 0.5;
// light3.anchor.y = 0.5;
// light3.position.x = renderer.width / 2;
// light3.position.y = renderer.height / 2;
//container.addChild(light1);

panda.mask = mascara;

var count = 0;

stage.on('mousedown', onClick);
stage.on('touchstart', onClick);

function onClick(event)
{
    let pos = event.target.position;
    console.log(event);
    window.nacho = event;
    mascara.beginFill(0x8bc5ff, 0.4);
    mascara.moveTo(pos.x, pos.y)
    mascara.drawCircle(0, 0, 30);
    //drawStar(mascara, pos.x, pos.y, 20, 30, 25);
}

var help = new PIXI.Text('Click to turn masking on / off.', { fontFamily:'Arial', fontSize:'12pt', fontWeight:'bold', fill: 'white' });
help.position.y = renderer.height - 26;
help.position.x = 10;
stage.addChild(help);

animate();

function animate()
{
    //bg.rotation += 0.01;
    //bgFront.rotation -= 0.01;

    // light1.rotation += 0.02;
    // light2.rotation += 0.01;

    //panda.scale.x = 1 + Math.sin(count) * 0.04;
    //panda.scale.y = 1 + Math.cos(count) * 0.04;

    //count += 0.1;

    //mascara.clear();

    //drawStar(mascara, 0, 0, 20, 30, 25);

    renderer.render(stage);
    requestAnimationFrame(animate);
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
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
