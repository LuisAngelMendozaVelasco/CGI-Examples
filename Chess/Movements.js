var cursor = 0;
var moveList = [], scoreList =[];
var game = new Chess(),
        statusEl = $('#status'),
        fenEl = $('#fen'),
        pgnEl = $('#pgn');

function updateStatus() {
    var status = '';

    var moveColor = 'White';
    if (game.turn() === 'b') {
        moveColor = 'Black';
    }

    if (game.game_over()) {
        if (game.in_checkmate()) {
            status = moveColor + ' checkmate.'; 
        } else if (game.in_stalemate()) {
            status = moveColor + " closed.";
        } else if (game.insufficient_material()) {
            status = "Tie."
        } else if (game.in_threefold_repetition()) {
            status = "Tie."
        } else if (game.in_draw()) {
            status = "Endgame."
        }
        alert("Endgame")
    }

    //The game continues
    else {
        status += 'Move ' + moveColor;
        alert("Welcome!");
        //Check?
        if (game.in_check() === true) {
            status += ' ' + moveColor + ' is in check.';      
        }
    }

    fenEl.html(game.fen().replace(/ /g, '&nbsp;'));
    var currentPGN = game.pgn({max_width:10,newline_char:"<br>"});

    entirePGN = currentPGN;
    pgnEl.html(currentPGN);
    statusEl.html(status);
};

var onDrop = function(source, target) {
    if (board.hasOwnProperty('removeGreySquares') && typeof board.removeGreySquares === 'function') {
        board.removeGreySquares();
    }

    var move = game.move({
        from: source,
        to: target,
        promotion: $("#promotion").val()
    });

    if (move === null){ alert("Movement not allowed!");return 'snapback';}

    moveList = moveList.slice(0, cursor);
    scoreList = scoreList.slice(0, cursor);
    moveList.push(move);
    scoreList.push(scoreList.length === 0 ? 0 : scoreList[scoreList.length - 1]);
    cursor = moveList.length;
    if (cursor === 0) {
            cursor++;
            board.position(game.fen(), true);
            updateStatus();
    }

};

var onMouseoverSquare = function(square) {
    // Lista de posibles movimientos
    var moves = game.moves({
        square: square,
        verbose: true
    });

    // Si no hay posibles movimientos, salir
    if (moves.length === 0) return;

    if (board.hasOwnProperty('greySquare') && typeof board.greySquare === 'function') {
        // Seleccionar recuadro actual
        board.greySquare(square);

        // Resaltar lugares a donde se puede mover
        for (var i = 0; i < moves.length; i++) {
            board.greySquare(moves[i].to);
        }
    }
};

var onMouseoutSquare = function(square, piece) {
    if (board.hasOwnProperty('removeGreySquares') && typeof board.removeGreySquares === 'function') {
        board.removeGreySquares();
    }
};

var onSnapEnd = function() {

};

function createBoard(pieceSet) {
    var cfg = {
        cameraControls: true,
        draggable: true,
        position: 'start',
        onDrop: onDrop,
        onMouseoutSquare: onMouseoutSquare,
        onMouseoverSquare: onMouseoverSquare,
        onSnapEnd: onSnapEnd
    };
    if (pieceSet) {
        if (pieceSet === 'minions') {
            cfg.whitePieceColor = 0xFFFF00;
            cfg.blackPieceColor = 0xCC00CC;
            cfg.lightSquareColor = 0x888888;
            cfg.darkSquareColor = 0x666666;
        }
        cfg.pieceSet = 'Ajedrez/Disenio/' + pieceSet + '/{piece}.json'
    }
    return new ChessBoard3('board', cfg);

}

windowsWidth = $(window).width()*0.75
windowsWidthPx = windowsWidth.toString() + 'px'
$('#board').css('width', windowsWidthPx);
board = createBoard();
renderer = board.renderer();
scene = board.scene();
camera = board.camera();

$('#flip').on('click', board.flip);

updateStatus();