document.addEventListener("DOMContentLoaded", ready);
var renderer, stage, texture, bunny;
function ready(){
    renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.view);

    // create the root of the scene graph
    stage = new PIXI.Container();

    // create a texture from an image path
    texture = PIXI.Texture.fromImage('1.png');

    // create a new Sprite using the texture
    bunny = new PIXI.Sprite(texture);

    // center the sprite's anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    // start animating
    animate();
    function animate() {
        requestAnimationFrame(animate);

        // just for fun, let's rotate mr rabbit a little
        bunny.rotation += 0.1;

        // render the container
        renderer.render(stage);
    }
}
