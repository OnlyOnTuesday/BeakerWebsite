/*TODO:
 * use the element.remove property to remove blocks
 * figure out how to dynamically readjust the ball and bar as things are removed 
 */


class Bar {
    constructor(elem, startX, startY, length){
	this.elem = elem;

	//x value will be document.getElementById().style.left
	this.x = startX;
	this.y = startY;

	//length of the bar
	this._length = length;
    }

    get position(){
	return this.x;
    }

    get length(){
	return this._length;
    }

    moveLeft(){
	if (this.x >= 10){
	    this.x -= 10;
	    this.elem.style.left = this.x + "px";
	}
    }

    moveRight(){
	if (this.x <= 290){
	    this.x += 10;
	    this.elem.style.left = this.x + "px";
	}
    }
}

class Ball {
    /*
     * Setters:
     *   
     * Getters:
     *   xPos, yPos, getDir
     * Helpers:
     */
    constructor(elem, startX, startY){
	this.elem = elem;
	this.x = startX;
	this.y = startY;

	//0=right, 1=left
	this.xDirection = 0;

	//0=down, 1=up
	this.yDirection = 0;
    }

    //fix this function
    move(){
	if (this.yDirection == 0){
	    if (this.xDirection == 0){
		//down and to the right
		console.log("down and right");
		this.x += 10;
		this.y += 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    } else {
		//down and to the left
		console.log("down and left");
		this.x -= 10;
		this.y += 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    }
	} else {
	    if (this.xDirection == 0){
		//up and to the right
		console.log("up and right");
		this.x += 10;
		this.y -= 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    } else {
		//up and to the left
		console.log("up and left");
		this.x -= 10;
		this.y -= 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    }
	}
    }

    hitBar(bar){
	if (this.x >= bar.position && this.x <= bar.position + 100){
	    return true;
	} else {
	    return false;
	}
    }

    get xPos(){
	return this.x;
    }

    get yPos(){
	return this.y;
    }

    get xDir(){
	return this.xDirection;
    }

    get yDir(){
	return this.yDirection;
    }

    set setXDir(dir){
	if (dir == 1){
	    //left
	    this.xDirection = 1;
	} else {
	    //right by default
	    this.xDirection = 0;
	}
    }

    set setYDir(dir){
	if (dir == 1){
	    //up
	    this.yDirection = 1;
	} else {
	    //down by default
	    this.yDirection = 0;
	}
    }

    xToggle(){
	if (this.xDirection == 1){
	    this.xDirection = 0;
	} else {
	    this.xDirection = 1;
	}
    }

    yToggle(){
	if (this.yDirection == 1){
	    this.yDirection = 0;
	} else {
	    this.yDirection = 1;
	}
    }

}

function start(){
    var temp = document.getElementById("ball");
    var tempPos = Number(temp.style.left[0] + temp.style.left[1] + temp.style.left[2]);
    var tempPosTop = Number(temp.style.top[0] + temp.style.top[1] + temp.style.top[2]);
    var ball = new Ball(temp, tempPos, tempPosTop);

    temp = document.getElementById("bar");
    tempPos = Number(temp.style.left[0] + temp.style.left[1] + temp.style.left[2]);
    tempPosTop = Number(temp.style.top[0] + temp.style.top[1] + temp.style.top[2]);
    var bar = new Bar(temp, tempPos, tempPosTop, 100);

    window.addEventListener("keydown", function(e){
	if (e.keyCode == "37"){
	    //left arrow key
	    bar.moveLeft();
	} else if (e.keyCode == "39"){
	    bar.moveRight();
	}
    });

    var iv = setInterval(function() {
	//ball.move();
	moveBall(ball, bar);
    }, 300);
}

function moveBall(ball, bar){
    ball.move();


    if (ball.yPos >= 380){
	//is it in a corner
	if (ball.xPos >= 380 && ball.hitBar(bar)){
	    //bottom right corner
	    ball.setYDir = 1;
	    ball.setXDir = 1;
	    console.log("x: " + ball.xPos);
	    console.log("y: " + ball.yPos);
	} else if (ball.xPos <= 10 && ball.hitBar(bar)){
	    //bottom left corner
	    ball.setYDir = 1;
	    ball.setXDir = 0;
	} else if (!ball.hitBar(bar)){
	    //did they lose
	    console.log("You lost");
	} else {
	    ball.yToggle();
	}

    } else if (ball.yPos <= 10){
	//top corners
	if (ball.xPos <= 10){
	    //top left corner
	    ball.xToggle();
	    ball.yToggle();
	} else if (ball.xPos >= 370){
	    //top right corner
	    ball.xToggle();
	    ball.yToggle();
	} else {
	    //hit the top of the game area
	    console.log("x: " + ball.xPos);
	    console.log("y: " + ball.yPos);
	    ball.yToggle();
	}
    } else if (ball.xPos <= 10){
	//left side wall
	ball.yToggle();
    } else if (ball.xPos >= 380){
	//right side wall
	ball.yToggle();
    }

    

    

    // if (ball.yPos == 390){

    // 	//hit the bottom of play area
    // 	if (ball.hitBar(bar)){
    // 	    //ball hit the bar
    // 	    ball.setYDir = 1;
    // 	} else {
    // 	    console.log("Lost");
    // 	}
    // }

    // if (ball.xPos >= 380 && ball.yPos >= 380 && ball.hitBar(bar)){
    // 	if (ball.xDir == 1){
    // 	    ball.xDir == 0;
    // 	} else {
    // 	    ball.xDir == 1;
    // 	}

    // 	if (ball.yDir == 1){
    // 	    ball.yDir = 0;
    // 	} else {
    // 	    ball.yDir == 1;
    // 	}
    // }

    //hit the right wall
    // if (ball.xPos >= 385){

    // 	if (ball.yDir == 1){
    // 	    ball.setYDir = 0;
    // 	} else {
    // 	    ball.setYDir = 1;
    // 	}
    // }
    
    //hit the left wall
    
    
    //hit the ceiling
}

// function start(){
//     ///This will hold a game loop that calls the event listeners and keeps the
//     ///game going
//     var lost = false;

//     ///Variables to manipulate html elements
//     var bar = document.getElementById("bar");
//     var barPos = Number(bar.style.left[0] + bar.style.left[1] + bar.style.left[2]);
//     var ball = document.getElementById("ball");
//     var ballPos = Number(ball.style.top[0] + ball.style.top[1] + ball.style.top[2]);

//     ///Allow the user to control the bar
//     window.addEventListener("keydown", function(e){
// 	if (e.keyCode == "37"){
// 	    //left arrow key
// 	    if (barPos >= 10){
// 		barPos -= 10;
// 		bar.style.left = barPos + "px";
// 	    }
// 	}
	
// 	if (e.keyCode == "39"){
// 	    //right arrow key
// 	    if (barPos <= 290){
// 		barPos += 10;
// 		bar.style.left = barPos + "px";
// 	    }
// 	}
//     });

//     ///Allow the ball to fall, 300 milliseconds seems like a comfortable speed
//     const bottom = 380;
//     var iv = setInterval(function() {
// 	ballPos += 10;
// 	ball.style.top = ballPos + "px";
// 	console.log(ballPos);
// 	if (ballPos >= bottom){
// 	    console.log("Interval Cleared");
// 	    clearInterval(iv);
// 	}
//     }, 300);
    

//     //while not lost:
//     //ball drops down
//     //if ball hits bar:
//     //ball bounces up, else
//     //ball stops and game is over
// }




//Move the ball falling to a function (maybe have the setInterval be external?)
//put in while loop: while not lost: have ball drop and let --
//maybe I can use the setInterval instead of a while loop, and just have a bunch of
//conditions for lost in the if statement that clear the interval
//what conditions: if ballPos is 0 and not hitting bar, if no more bars to hit
//*****************************************************************************

//TODO: Add start button, have ball drop when clicked
//      If ball hits bar, have bounce off at angle
//      If ball hits side, have bounce off at angle
//      If divs affect position of bar and ball, how will blocks effect?
//         Will those dives still be there, and if yes how will it move past them?

/*
Plan:
When the user clicks start the ball needs to drop straight down.
The game needs to know if the ball hits the bar

If it does not:
    The game needs to end
If it does:
    It needs to bounce off the bar
    For now: just bounce straight back up

*/
