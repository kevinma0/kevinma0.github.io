
var activeConfig = 1;
var totalConfigs = 100;
var offsetX = 25;
var offsetY = 30;
var numHor;
var numVert;
var from = new Point(0,0);
var to;
var count;
var thickness = 40;
generate();

function generate(){
    if (activeConfig==1){
        thickness = 25;
        numHor = 11;
        numVert = 5;
        to = [40, 40];
        color = '#ea5a41';
    }
    else if (activeConfig>1){
        thickness = Math.floor((Math.random() * 26))
        numHor = Math.floor((Math.random() * 20) + 10);
        numVert = Math.floor((Math.random() * 15) + 5);
        var bracket = Math.floor(Math.random*3)
        if (bracket > 2){
        var x = Math.floor((Math.random() * 800));
        var y = Math.floor((Math.random() * 1000));
        } else if (bracket > 1){
        var x = Math.floor((Math.random() * 400));
        var y = Math.floor((Math.random() * 300));
        } else {
        var x = Math.floor((Math.random() * 100)+2);
        var y = Math.floor((Math.random() * 100)+2);
        }
        to = (x, y);
        var redRandom = Math.random()
        var blueRandom = Math.random()
        var greenRandom = Math.random()
        color = new Color(redRandom, greenRandom, blueRandom, 1);
    }
    count = numHor * numVert;
    var line = new Path.Line(from, to);
    line.style = {strokeColor : color, strokeWidth : thickness, strokeCap : 'round'};
    var symbol = new Symbol(line);
    for (var i = 0; i< numHor; i++){
        for (var j = 0; j< numVert; j++){
           var instance = symbol.place();
             instance.position.x = (view.size.width-offsetX)/numHor * i + view.size.width/40 + offsetX;
             instance.position.y = (view.size.height-offsetY)/numVert * j + view.size.height/20 + offsetY;
        }
    }
}
function onMouseMove(event){
    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];
        var vector = event.point - item.position;
        var prevVector = event.lastPoint - item.position;
        item.rotate(vector.angle-prevVector.angle, item.position);
    }
}
//kinda cool but not what I want
// function onResize(){
//     for (var i = 0; i < count; i++) {
//         var item = project.activeLayer.children[i];
//         item.position.y = view.size.width/numVert * i/numHor + 30
//     }
// }
// function onMouseDown(event) {
//     activeConfig++;
//     if (activeConfig>totalConfigs){
//         activeConfig = 1;
//     }
//     project.activeLayer.removeChildren();
//     generate();
// }
// function onResize(event){
//    project.activeLayer.removeChildren();
//    generate();
// }
