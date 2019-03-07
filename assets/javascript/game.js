// var aRandom = [];
var goal = $("#goal");
var wins = $("#wins");
var loses = $("#loses");
var total = $("#total");
var red = $("#red");
var blue = $("#blue");
var yellow = $("#yellow");
var green = $("#green");
var nGoal = Math.floor(Math.random() * 101)+19;
var nRed = Math.floor(Math.random() * 11) + 1;
var nBlue = Math.floor(Math.random() * 11) + 1;
var nYellow = Math.floor(Math.random() * 11) + 1;
var nGreen = Math.floor(Math.random() * 11) + 1;
var nWin = 0;
var nLoss = 0;
var nTotal = 0;

//===============================================================================================
//main Process



$(document).ready(function () {

//on page load    
// assign a random value to goal
var goalSpan = $("<span>");
goalSpan.text(nGoal);
goal.append(goalSpan);


//set wins/loses to zero
var winsSpan = $("<span>")
winsSpan.text(nWin);
wins.append(winsSpan);

var losesSpan = $("<span>")
losesSpan.text(nLoss);
loses.append(losesSpan);

//set score to zero

var totalSpan = $("<span>")
totalSpan.text(nTotal);
total.append(totalSpan);


//click the gems to add it's value to the counter
red.on("click", function () {
    nTotal += nRed;
    totalSpan.text(nTotal);
    total.append(totalSpan);


    // if total === goal number then add point to win else nTotal greater than nGoal
    if (nTotal === nGoal) {
        //count win
        nWin++;
        winsSpan.text(nWin);
        wins.append(winsSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        //display goal
        goalSpan.text(nGoal);
        goal.append(goalSpan);

    } else if (nTotal > nGoal) {
        //count loss
        nLoss++;
        losesSpan.text(nLoss);
        loses.append(losesSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        goalSpan.text(nGoal);
        goal.append(goalSpan);
    }
});

blue.on("click", function () {
    nTotal += nBlue;
    totalSpan.text(nTotal);
    total.append(totalSpan);


    // if total === goal number then add point to win else nTotal greater than nGoal
    if (nTotal === nGoal) {
        //count win
        nWin++;
        winsSpan.text(nWin);
        wins.append(winsSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        //display goal
        goalSpan.text(nGoal);
        goal.append(goalSpan);

    } else if (nTotal > nGoal) {
        //count loss
        nLoss++;
        losesSpan.text(nLoss);
        loses.append(losesSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        goalSpan.text(nGoal);
        goal.append(goalSpan);
    }
});

yellow.on("click", function () {
    nTotal += nYellow;
    totalSpan.text(nTotal);
    total.append(totalSpan);


    // if total === goal number then add point to win else nTotal greater than nGoal
    if (nTotal === nGoal) {
        //count win
        nWin++;
        winsSpan.text(nWin);
        wins.append(winsSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        //display goal
        goalSpan.text(nGoal);
        goal.append(goalSpan);

    } else if (nTotal > nGoal) {
        //count loss
        nLoss++;
        losesSpan.text(nLoss);
        loses.append(losesSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        goalSpan.text(nGoal);
        goal.append(goalSpan);
    }
});

green.on("click", function () {
    nTotal += nGreen;
    totalSpan.text(nTotal);
    total.append(totalSpan);


    // if total === goal number then add point to win else nTotal greater than nGoal
    if (nTotal === nGoal) {
        //count win
        nWin++;
        winsSpan.text(nWin);
        wins.append(winsSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        //display goal
        goalSpan.text(nGoal);
        goal.append(goalSpan);

    } else if (nTotal > nGoal) {
        //count loss
        nLoss++;
        losesSpan.text(nLoss);
        loses.append(losesSpan);
        // reset total counter
        nTotal = 0;
        totalSpan.text(nTotal);
        total.append(totalSpan);
        //reset random numbers
        nGoal = Math.floor(Math.random() * 101) + 19;
        nRed = Math.floor(Math.random() * 11) + 1;
        nBlue = Math.floor(Math.random() * 11) + 1;
        nYellow = Math.floor(Math.random() * 11) + 1;
        nGreen = Math.floor(Math.random() * 11) + 1;
        goalSpan.text(nGoal);
        goal.append(goalSpan);
    }
});


//end of ready function=======================================================================================
});