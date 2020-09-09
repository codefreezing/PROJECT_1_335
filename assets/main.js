var x, y, direction, rowWidth, rowHeight, boxes = [];
function setup(){
	frameRate(1000);
	
	direction = "UP";
	rowWidth = 41;
	rowHeight = 41;
	x = round(rowWidth/2);
	y = round(rowHeight/2);

	var w = rowWidth*10 + 10, h = rowHeight*10 + 10;

	canvas = createCanvas(w, h);

	rectMode(CENTER);
	stroke(255);
	fill(0);
	for (var i=0; i<rowHeight; i++){
		for (var j=0; j<rowWidth; j++){
			rect(10 + 10*j, 10 + 10*i, 10, 10);
			boxes[j + i*rowWidth] = "BLACK";
		}
	}
	loop();	
}

function downMove(){
	rect(10 + 10*x, 10 + 10*y, 10, 10);
	y+=1;
	fill('white');
	stroke(0);
	text('v',7 + 10*x,14.5 + 10*y);	
	direction = "DOWN";
}
function leftMove(){
	rect(10 + 10*x, 10 + 10*y, 10, 10);
	x-=1;
	fill('white');
	stroke(0);
	text('<',7 + 10*x,14.5 + 10*y);
	direction = "LEFT";
}
function rightMove(){
	rect(10 + 10*x, 10 + 10*y, 10, 10);
	x+=1;
	fill('white');
	stroke(0);
	text('>',7 + 10*x,14.5 + 10*y);
	direction = "RIGHT";
}
function upMove(){
	rect(10 + 10*x, 10 + 10*y, 10, 10);
	y-=1;
	fill('white');
	stroke(0);
	text('^',7.5 + 10*x,17 + 10*y);
	direction = "UP";
}


var currentPixel;
var firstState = 0;
function draw(){
	firstState++;
	currentPixel = boxes[x + y*rowWidth];
	console.log(direction);
	console.log(currentPixel);
	if(firstState == 1){
		boxes[x + y*rowWidth] = "RED";
		fill('red');
		leftMove();		
	}else{
		if(direction == "LEFT"){
			if (currentPixel == "BLACK"){
				boxes[x + y*rowWidth] = "RED";
				fill('red');
				downMove();				
			}else if(currentPixel == "YELLOW"){
				boxes[x + y*rowWidth] = "BLUE";
				fill('blue');
				downMove();
			}else if(currentPixel == "GREEN"){
				boxes[x + y*rowWidth] = "BLACK";
				fill('black');
				downMove();
			}else if(currentPixel == "RED"){
				boxes[x + y*rowWidth] = "YELLOW";
				fill('yellow');
				upMove();
			}else if(currentPixel == "BLUE"){
				boxes[x + y*rowWidth] = "GREEN";
				fill('green');
				upMove();
			}
		}else if (direction == "DOWN"){
			if (currentPixel == "BLACK"){
				boxes[x + y*rowWidth] = "RED";
				fill('red');
				rightMove();
			}else if(currentPixel == "YELLOW"){
				boxes[x + y*rowWidth] = "BLUE";
				fill('blue');
				rightMove();
			}else if(currentPixel == "GREEN"){
				boxes[x + y*rowWidth] = "BLACK";
				fill('black');
				rightMove();
			}else if(currentPixel == "RED"){
				boxes[x + y*rowWidth] = "YELLOW";
				fill('yellow');
				leftMove();
			}else if(currentPixel == "BLUE"){
				boxes[x + y*rowWidth] = "GREEN";
				fill('green');
				leftMove();
			}
		}else if (direction == "RIGHT"){
			if (currentPixel == "BLACK"){
				boxes[x + y*rowWidth] = "RED";
				fill('red');
				upMove();
			}else if(currentPixel == "YELLOW"){
				boxes[x + y*rowWidth] = "BLUE";
				fill('blue');
				upMove();
			}else if(currentPixel == "GREEN"){
				boxes[x + y*rowWidth] = "BLACK";
				fill('black');
				upMove();
			}else if(currentPixel == "RED"){
				boxes[x + y*rowWidth] = "YELLOW";
				fill('yellow');
				downMove();
			}else if(currentPixel == "BLUE"){
				boxes[x + y*rowWidth] = "GREEN";
				fill('green');
				downMove();
			}
		}else if (direction == "UP"){
			if (currentPixel == "BLACK"){
				boxes[x + y*rowWidth] = "RED";
				fill('red');
				leftMove();
			}else if(currentPixel == "YELLOW"){
				boxes[x + y*rowWidth] = "BLUE";
				fill('blue');
				leftMove();
			}else if(currentPixel == "GREEN"){
				boxes[x + y*rowWidth] = "BLACK";
				fill('black');
				leftMove();
			}else if(currentPixel == "RED"){
				boxes[x + y*rowWidth] = "YELLOW";
				fill('yellow');
				rightMove();
			}else if(currentPixel == "BLUE"){
				boxes[x + y*rowWidth] = "GREEN";
				fill('green');
				rightMove();
			}
		}
	}

	if (x < 0 || y < 0 || x > rowWidth || y > rowHeight){
		noLoop();
	}
	
}



