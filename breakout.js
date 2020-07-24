/* Author: Michael Cooney (MC509119@ohio.edu) (mcooney296@gmail.com)
 *
 * A very hacky game of Breakout.  I don't think there's a way to win right now
 * because the ball only bounces at 45 degree angles currently so I haven't 
 * written a way to win ¯\_(ツ)_/¯ 
 * The rest of it's also very janky so feel free to mess around with it and 
 * improve it
 */

/* TODO:
 * Find a better way to bounce the ball so it's not only 45 degree angles
 * Write a check to see if the player won
 * Write a reset function so the player can replay without reloading 
 */

class Bar {
    /*
     * Controls the bar at the bottom of the game area
     */
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
} //end of Bar class

class Ball {
    /*
     * Controlls and reports information on the ball
     */
    constructor(elem, startX, startY){
	this.elem = elem;
	this.x = startX;
	this.y = startY;

	//a list of all the blocks on the screen
	this.blocks = []
	for (var i = 0; i < document.getElementsByClassName("block").length; i++){
	    this.blocks[i] = document.getElementsByClassName("block")[i];
	}


	//0=right, 1=left
	this.xDirection = 0;

	//0=down, 1=up
	this.yDirection = 1;
    }

    move(){
	if (this.yDirection == 0){
	    if (this.xDirection == 0){
		//down and to the right
		//console.log("down and right");
		this.x += 10;
		this.y += 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    } else {
		//down and to the left
		//console.log("down and left");
		this.x -= 10;
		this.y += 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    }
	} else {
	    if (this.xDirection == 0){
		//up and to the right
		//console.log("up and right");
		this.x += 10;
		this.y -= 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    } else {
		//up and to the left
		//console.log("up and left");
		this.x -= 10;
		this.y -= 10;
		this.elem.style.left = this.x + "px";
		this.elem.style.top = this.y + "px";
		
	    }
	}
    }//end of move

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

    //Is this function shorter with the xPos on the outside and yPos on the inside?
    hitBlock(){
	switch (this.yPos){
	case 30:
	    console.log("case 30");
	    if (this.xPos <= 50){
		if (this.blocks[16].style.backgroundColor == "red"){
		    console.log("16");
		    this.blocks[16].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 100){
		if (this.blocks[17].style.backgroundColor == "red"){
		    console.log("17");
		    this.blocks[17].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 150){
		if (this.blocks[18].style.backgroundColor == "red"){
		    console.log("18");
		    this.blocks[18].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 200){
		if (this.blocks[19].style.backgroundColor == "red"){
		    console.log("19");
		    this.blocks[19].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 250){
		console.log("20");
		if (this.blocks[20].style.backgroundColor == "red"){
		    this.blocks[20].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 300){
		if (this.blocks[21].style.backgroundColor == "red"){
		    console.log("21");
		    this.blocks[21].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 350){
		if (this.blocks[22].style.backgroundColor == "red"){
		    console.log("22");
		    this.blocks[22].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 400){
		if (this.blocks[23].style.backgroundColor == "red"){
		    console.log("23");
		    this.blocks[23].style.backgroundColor = "white";
		    this.yToggle();
		}
	    }
	    break;

	case 20:
	    console.log("case 20");
	    if (this.xPos <= 50){
		if (this.blocks[8].style.backgroundColor == "red"){
		    this.blocks[8].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 100){
		if (this.blocks[9].style.backgroundColor == "red"){
		    this.blocks[9].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 150){
		if (this.blocks[10].style.backgroundColor == "red"){
		    this.blocks[10].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 200){
		if (this.blocks[11].style.backgroundColor == "red"){
		    this.blocks[11].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 250){
		if (this.blocks[12].style.backgroundColor == "red"){
		    this.blocks[12].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 300){
		if (this.blocks[13].style.backgroundColor == "red"){
		    this.blocks[13].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 350){
		if (this.blocks[14].style.backgroundColor == "red"){
		    this.blocks[14].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 400){
		if (this.blocks[15].style.backgroundColor == "red"){
		    this.blocks[15].style.backgroundColor = "white";
		    this.yToggle();
		}
	    }
	    break;

	case 10:
	    console.log("case 10");
	    if (this.xPos <= 50){
		if (this.blocks[0].style.backgroundColor == "red"){
		    this.blocks[0].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 100){
		if (this.blocks[1].style.backgroundColor == "red"){
		    this.blocks[1].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 150){
		if (this.blocks[2].style.backgroundColor == "red"){
		    this.blocks[2].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 200){
		if (this.blocks[3].style.backgroundColor == "red"){
		    this.blocks[3].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 250){
		if (this.blocks[4].style.backgroundColor == "red"){
		    this.blocks[4].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 300){
		if (this.blocks[5].style.backgroundColor == "red"){
		    this.blocks[5].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 350){
		if (this.blocks[6].style.backgroundColor == "red"){
		    this.blocks[6].style.backgroundColor = "white";
		    this.yToggle();
		}
	    } else if (this.xPos <= 400){
		if (this.blocks[7].style.backgroundColor == "red"){
		    this.blocks[7].style.backgroundColor = "white";
		    this.yToggle();
		}
	    }
	    break;
	    
	} //end of switch statement
    } //end of function
} //end of Ball class

function main(){
    //create the ball object
    var temp = document.getElementById("ball");
    var tempPos = Number(temp.style.left[0] + temp.style.left[1] + temp.style.left[2]);
    var tempPosTop = Number(temp.style.top[0] + temp.style.top[1] + temp.style.top[2]);
    var ball = new Ball(temp, tempPos, tempPosTop);

    //create the bar object
    temp = document.getElementById("bar");
    tempPos = Number(temp.style.left[0] + temp.style.left[1] + temp.style.left[2]);
    tempPosTop = Number(temp.style.top[0] + temp.style.top[1] + temp.style.top[2]);
    var bar = new Bar(temp, tempPos, tempPosTop, 100);

    //listen for the user to move the bar
    window.addEventListener("keydown", function(e){
	if (e.keyCode == "37"){
	    //left arrow key
	    bar.moveLeft();
	} else if (e.keyCode == "39"){
	    //right arrow key
	    bar.moveRight();
	}
    });

    //game loop
    var lost = false;
    var iv = setInterval(function() {
	//ball.move();
	lost = moveBall(ball, bar);
	if (lost){
	    clearInterval(iv);
	}
    }, 100);
}

function moveBall(ball, bar){
    ball.move();
    ball.hitBlock();
    
    if (ball.yPos >= 380){
	//is it in a corner
	if (ball.xPos >= 380 && ball.hitBar(bar)){
	    //bottom right corner
	    ball.setYDir = 1;
	    ball.setXDir = 1;
	    //console.log("x: " + ball.xPos);
	    //console.log("y: " + ball.yPos);
	} else if (ball.xPos <= 10 && ball.hitBar(bar)){
	    //bottom left corner
	    ball.setYDir = 1;
	    ball.setXDir = 0;
	} else if (!ball.hitBar(bar)){
	    //did they lose
	    //console.log("You lost");
	    return true;
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
	    //console.log("x: " + ball.xPos);
	    //console.log("y: " + ball.yPos);
	    ball.yToggle();
	}
    } else if (ball.xPos <= 10){
	//left side wall
	ball.xToggle();
    } else if (ball.xPos >= 380){
	//right side wall
	ball.xToggle();
    }

    //they did not lose
    return false;
}

