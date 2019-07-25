var squares = document.querySelectorAll("#container div");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var rgbMessage = document.querySelector("#rgb");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

var squareColors = [];
var pickedColor;
var squareNumber = 6;


init();
giveSquaresLogic();

resetButton.addEventListener("click", function() {
    reset(); 
});

easyButton.addEventListener("click", function() {
    squareNumber = 3;
    reset();
    this.classList.add("clicked");
    hardButton.classList.remove("clicked");
})

hardButton.addEventListener("click", function() {
    squareNumber = 6;
    reset();
    this.classList.add("clicked");
    easyButton.classList.remove("clicked");
})

function init() {
    squareColors = getColors(squareNumber);
    pickedColor = getPickedColor(squareNumber, squareColors);
    rgbMessage.textContent = pickedColor;
    setSquareColor(squareNumber);
}

function reset() {
    squareColors = getColors(squareNumber);
    pickedColor = getPickedColor(squareNumber, squareColors);
    rgbMessage.textContent = pickedColor;
    setSquareColor(squareNumber);
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";
}

function giveSquaresLogic() {
    for(var i = 0; i < squares.length; i++) { 
        //give squares  logic
        squares[i].addEventListener("click", function() {
            if(this.style.backgroundColor === pickedColor) {
                message.textContent = "Correct!";
                //give other squares the same color
                for(var j = 0; j < squares.length; j++) {
                    squares[j].style.backgroundColor = pickedColor;
                }
                h1.style.backgroundColor = pickedColor;
            }else {
                message.textContent = "Try Again!";
                this.style.backgroundColor = "#232323";
            }
        }); 
    }
}

function getColors(num) {
    var r, g, b;
    var colors = [];
    for(var i = 0; i < num; i++) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        colors[i] = "rgb(" + r + ", " + g + ", " + b + ")"; 
    }
    return colors;
}

function getPickedColor(num, colorArr) {
    return colorArr[Math.floor(Math.random() * num)];
}

function setSquareColor(num) {
    if(num === 3) {
        for(var i = 0; i < num; i++) {
            squares[i].style.backgroundColor = squareColors[i];
        }
        squares[3].style.display = "none";
        squares[4].style.display = "none";
        squares[5].style.display = "none";
    }else if(num === 6) {
        for(var i = 0; i < num; i++) {
            squares[i].style.backgroundColor = squareColors[i];
        }
        squares[3].style.display = "block";
        squares[4].style.display = "block";
        squares[5].style.display = "block";
    }
}