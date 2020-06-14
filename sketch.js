var newBall;
var database;
var hypnoticBall, potition;
var lineArray = [];
var i = 1;
var x = 1;
var drawing = [];
    startDrawing = [];
    endDrawing = [];

function setup(){
    //should be the first line
    //database = firebase.database();
    database = firebase.database();
    createCanvas(500,500);
   
    newBall = createSprite(250,250,10,10);
    newBall.shapeColor = "red";
    var newBallPosition = database.ref('ball/position');
    newBallPosition.on("value", readPosition);
    console.log(newBallPosition);
    
}

function draw(){
    background("white");

    drawSprites();    

    //so that it only workd when the values have been defined ( not undefined)
    //otherwise it will disappear.
    /*
    i = i+1;
   if(i%2 === 0){
    //strokeWeight(4);
    //line(mouseX, mouseY, mouseX, mouseY);
    fill("black");
    var point = ellipse(mouseX, mouseY, 10,10)
    lineArray.push(point);
    console.log(lineArray);
   }

   beginShape();
   vertex(20,20);
   vertex(40,40);
   endShape();
   */

   newBall.display();

    for(var i = 0; i<100; i++){
        startPointA = startDrawing[i];
        int(startPointA);
        startPointB = startDrawing[i+1];
        int(startPointB);

        endPointA = endDrawing[i];
        int(endPointA);
        endPointB = endDrawing[i+1];
        int(endPointB);


        beginShape();
        vertex(startPointA, startPointB);
        vertex(endPointA, endPointB);
        endShape();

        i = i + 1;
    }   

}

function mousePressed(){
    var pointA = mouseX;
    int(pointA);
    startDrawing.push(pointA);
    var pointB = mouseY;
    int(pointB);
    startDrawing.push(pointB);

    //console.log(pointA);
    //console.log(pointB);
}

function mouseDragged(){
    fill("black");
    //var point = {x : mouseX, y: mouseY}
    //var point = [mouseX, mouseY];
    

    //startDrawing.push(point);
    console.log("drag");
    /*
    for(var i=0; i>-1 ; i++){
        currentPath = drawing[i];
        beginShape();
        vertex(20,20);
        vertex(40,40);
        endShape();
    }
    console.log("HELLLOOO");
    */
}

function mouseReleased(){
    var pointC = mouseX ; 
    int(pointC);
    endDrawing.push(pointC);
    var pointD = mouseY;
    int(pointD);
    endDrawing.push(pointD);

    
    startPointA = startDrawing[0];
    int(startPointA);
    startPointB = startDrawing[1];
    int(startPointB);

    console.log("relase");
}

function readPosition(){
    position = data.val();
    newBall.x = position.x;
    newBall.y = position.y;
}




/*


for(var i=0; i>-1 ; i++){
        rect(drawing[i[0]], drawing[i[1]], 20,20);
    }
function readPosition(data){
    //read the data in the position ( which has the x and y values) 
    //these values are being passed.
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;

    function mouseDragged(){
    fill("black");
    var point = ({x: mouseX, y: mouseY},10,10);
    ellipse(point.x, point.y, 10, 10);
    lineArray.push(point.x, point.y);
    console.log(lineArray);

   
}
}
function writePosition(x,y){
    //update the values to the database - always be in sync.
    database.ref('ball/position').set({
        'x': position.x + x, 
        'y': position.y + y
    })
}
function showError(){
    console.log("Error is : writing the value is the database.")
}
*/