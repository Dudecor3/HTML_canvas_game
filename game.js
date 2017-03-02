window.addEventListener('load', function () {
    startGame();
});

function startGame() {
    var canvasElement = document.getElementById('game');
    var ctx = canvasElement.getContext('2d');
    var squares = [
        {
            y: 0,
            x: 0,
            color: "#000"
        },
        {
            y: 60,
            x: 20,
            color: "#ffb900"
        },
        {
            y: 120,
            x: 0,
            color: "#000"
        },
        {
            y: 180,
            x: -20,
            color: "#f00"
        }
    ];

    var character = {
        y: 0,
        x: 0,
        color: "#4c6fff"
    };

    window.addEventListener('keyup', function (event) {
        switch (event.keyCode) {
            case 38:
                character.y -= 50;
                break;
            case 40:
                character.y += 50;
                break;
            case 37:
                character.x -= 50;
                break;
            case 39:
                character.x += 50;
                break;
        }
    });

    var x = 0;

    setInterval(updateFrame, 200);

    function updateFrame() {
        x++;
        clearScreen(ctx, canvasElement);

        drawSquare(ctx, character.x, character.y, character.color);

        // draw squares
        for (var i = 0; i < squares.length; i++) {
            var square = squares[i];
            drawSquare(ctx, square.x + x, square.y, square.color);
        }
    }
}


function drawSquare(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 50, 50);
}


function clearScreen(ctx, canvasElement) {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
}

