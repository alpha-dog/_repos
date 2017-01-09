function rollDice()
    {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    if(d1 && d2 == 7)
        {
        status.innerHTML = "you win";
        }
    else
        {
            status.innerHTML = "you lose";
        }
    }
    
function hideResults() 
{
    document.getElementById("results").style.display = "none";
} 


function showResults() 
    {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("resultsRollCounter").innerHTML = rollCounter;
    document.getElementById("resultsHighestHeld").innerHTML = "$" +     highestAmount + ".00";
    document.getElementById("resultsRollsFromHighest").innerHTML = rollsFromHighest;
    };

    showResults();
} 