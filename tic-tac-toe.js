document.addEventListener('DOMContentLoaded', (event) => 
{



var square1 = document.getElementById('board').getElementsByTagName('div')[0].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[1].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[2].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[3].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[4].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[5].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[6].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[7].setAttribute("class", "square");
var square1 = document.getElementById('board').getElementsByTagName('div')[8].setAttribute("class", "square");

const squares = document.querySelectorAll('.square');


const gameTracker = ["", "", "", "", "", "", "", "", ""];
const player_X = "X";
const player_O = "O";
let currentPlayer = player_X

squares.forEach(function(square)
{
    square.addEventListener('click', function()
    {
        if(square.innerText.trim() != "") return

        square.innerText = currentPlayer

        if (currentPlayer == "X")
        {
            square.setAttribute("class", "square X") && gameTracker.push(scores.indexOf(square))
        }
        else
        {
            square.setAttribute("class", "square O") && gameTracker.push(scores.indexOf(square))
        }
        
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})











      
   



});

