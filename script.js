const cells = document.querySelectorAll(".cell");
const restartButton = document.querySelector("#restart");

let currentPlayer = "X";

winningVariants = [
    { combo: [1, 2, 3], strikeClass: "strike-row-1" },
    { combo: [4, 5, 6], strikeClass: "strike-row-2" },
    { combo: [7, 8, 9], strikeClass: "strike-row-3" },
    { combo: [1, 4, 7], strikeClass: "strike-col-1" },
    { combo: [2, 5, 8], strikeClass: "strike-col-2" },
    { combo: [3, 6, 9], strikeClass: "strike-col-3" },
    { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
    { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" }
];

function playerTurn(el) {
    if(el.innerHTML === "X" || el.innerHTML === "O") return;
    el.innerHTML = currentPlayer;

    currentPlayer = currentPlayer == "X" ? "O" : "X";

    /*if(el.innerHTML == "X") {
        el.style.color = "#a5194c";
    }*/

    checkWinner();
}

function checkWinner() {
    for (let i = 0; i < winningVariants.length; i++) {
        const { combo, strikeClass } = winningVariants[i];
        const variant = winningVariants[i];
        const a = getCellValue(combo[0]);
        const b = getCellValue(combo[1]);
        const c = getCellValue(combo[2]);

        if ( a == "" || b == "" || c == "" ) continue;

        if ( a == b && b == c ) {
            console.log(a + " wins!");
            setWinner(a + " wins!");
            strike.classList.add(strikeClass); 
        }
    }
}

function getCellValue(index) {
    return document.querySelector(`.cell[data-index='${index}']`).innerHTML;
}

let winner = document.querySelector("#winner");

function setWinner (str) {
    winner.innerHTML = str;
}


function restartGame() {
    cells.forEach( el => {
        el.innerHTML = "";
        strike.className = "strike";
        winner.innerHTML = "";
    })
}

// Listening

cells.forEach( cell => { 
    cell.addEventListener("click", (e) => {
        playerTurn(e.target);
    });
});

restartButton.addEventListener("click", restartGame);