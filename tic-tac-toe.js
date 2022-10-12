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


const gameTracker = [];
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
            square.setAttribute("class", "square X") 
            gameTracker.push("X")

        }

        if (currentPlayer == "O")
        {
            square.setAttribute("class", "square O") 
            gameTracker.push("O")

        }

        if (winner())
        {
            return false;
        }
        currentPlayer = currentPlayer == "X" ? "O" : "X"
        
        
        

    })
})




squares.forEach(function(ele) 
{
    ele.addEventListener('mouseover', function(e) 
    {
      e.target.classList.add('hover');
    });
    
    ele.addEventListener('mouseout', function(e) 
    {
      e.target.classList.remove('hover');
    });
});




function winner()
{

    if("X" == squares[0].innerText && "X" == squares[1].innerText && "X" == squares[2].innerText)
    {

        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
    
    }
    if(squares[0].innerText == "O" && squares[1].innerText == "O" && squares[2].innerText == "O")
    {

        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
    
    }



    else if(squares[3].innerText == "X" && squares[4].innerText == "X" && squares[5].innerText == "X")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
    
    }
    else if(squares[3].innerText == "O" && squares[4].innerText == "O" && squares[5].innerText == "O")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
    
    }





    else if(squares[6].innerText == "X" && squares[7].innerText == "X" && squares[8].innerText == "X")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
    
    }
    else if(squares[6].innerText == "O" && squares[7].innerText == "O" && squares[8].innerText == "O")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
    
    }





    else if(squares[0].innerText == "X" && squares[3].innerText == "X" && squares[6].innerText == "X")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }
    else if(squares[0].innerText == "O" && squares[3].innerText == "O" && squares[6].innerText == "O")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }






    else if(squares[1].innerText == "X" && squares[4].innerText == "X" && squares[7].innerText == "X")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }
    else if(squares[1].innerText == "O" && squares[4].innerText == "O" && squares[7].innerText == "O")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }





    else if(squares[2].innerText == "X" && squares[5].innerText == "X" && squares[8].innerText == "X")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
        
    
    }
    else if(squares[2].innerText == "O" && squares[5].innerText == "O" && squares[8].innerText == "O")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
        
    
    }






    else if(squares[0].innerText == "X" && squares[4].innerText == "X" && squares[8].innerText == "X")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }
    else if(squares[0].innerText == "O" && squares[4].innerText == "O" && squares[8].innerText == "O")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }




    else if(squares[2].innerText == "X" && squares[4].innerText == "X" && squares[6].innerText == "X")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! X is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }
    else if(squares[2].innerText == "O" && squares[4].innerText == "O" && squares[6].innerText == "O")
    {
        const winnMsg = document.getElementById('status')
        winnMsg.innerText = `Congratulations! O is the Winner!`;
        winnMsg.setAttribute('class', 'you-won')
        return;
       
    
    }
    
    
}












      
   



});

