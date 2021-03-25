var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

images = ["nasa_image_1.jpg","nasa_image_2.jpg","nasa_image_3.jpg","nasa_image_4.jpg"];

ramdom_number = Math.floor(Math.random() * 4);
background_image = images[ramdom_number];

var rover_height = 90;
var rover_width = 100;

rover_image = "rover.png"

rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = backgroundUpload;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = roverUpload;
    rover_imgTag.src = rover_image;
}

function backgroundUpload(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function roverUpload(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '38')
    {
        up ()
        console.log("up")
    }

    if(keyPressed == '40')
    {
        down ()
        console.log("down")
    }

    if(keyPressed == '39')
    {
        right ()
        console.log("right")
    }

    if(keyPressed == '37')
    {
        left ()
        console.log("left")
    }
}

function up(){
    if(rover_y >=0){
        rover_y = rover_y - 10;
        console.log(rover_x , rover_y)
        backgroundUpload();
        roverUpload();
    }
}

function down(){
    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log(rover_x , rover_y)
        backgroundUpload();
        roverUpload();
    }
}

function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10
        console.log(rover_x , rover_y)
        backgroundUpload();
        roverUpload();
    }
}

function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10
        console.log(rover_x , rover_y)
        backgroundUpload();
        roverUpload();
    }
}