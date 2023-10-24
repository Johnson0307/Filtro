var x = 0
var y = 0
function preload() 
{
    img = loadImage('camisaTWO-removebg-preview.png')
}

function setup()
{
   canvas = createCanvas(300, 300)
   canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotposes)
}

function draw()
{
    image(video, 0, 0, 300, 300)
    image(img, x, y, 300, 300)
}

function modelLoaded() 
{
    console.log('Modelo carregado!')
}

function gotposes(results)
{
if (results.length > 0) 
{
    x = results[0].pose.rightShoulder.x - 100
    y = results[0].pose.rightShoulder.y - 50
}
}

function takeSnapshot() 
{
    save('foto.png')
}