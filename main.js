harry_potter = "";
peter_pan = "";

function preload() {
    harry_potter = loadSound("Harry.mp3");
    peter_pan = loadSound("Peter.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded());
}

function modelLoaded() {
    console.log("POSENET IS WORKING:)");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play()
    song.setVolume(1);
    song.rate(1);
}