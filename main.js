function preload() {

n = loadImage("clown_nose.png")

}

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()

    video = createCapture(VIDEO);
    video.hide()
    video.size(500, 500)

    pose1 = ml5.poseNet(video, modelLoaded)
    pose1.on("pose", gotposes)
}
function draw() {
    image(video, 0, 0, 500, 500)
    image(n,nosex-15,nosey-10,30,30)
}
function modelLoaded() {
    console.log("model has been loaded")
}
function buttonclicked() {
    save("image.png")
}
function gotposes(results) {
    if (results.length > 0){
        console.log(results)
        console.log("nose x = ",results[0].pose.nose.x)
        console.log("nose y = ",results[0].pose.nose.y)
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}