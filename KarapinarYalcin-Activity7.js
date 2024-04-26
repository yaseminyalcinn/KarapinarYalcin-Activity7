var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function displayResults() {
    var total = 0;
    var highestScore = 0;
    var highestScorer = "";

    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestScorer = names[i]; 
        }
    }

    var average = (scores.length > 0) ? total / scores.length : 0;

    $("results").innerHTML = "<h2>Results</h2>" +
                             "<p>Average score = " + average.toFixed(2) + "</p>" +
                             "<p>High score = " + highestScorer + " with a score of " + highestScore + "</p>";
}



function displayScores() {
    var headerContent = "<h2>Scores</h2>";
    var tableContent = "<table><tr><th>Name</th><th>Score</th></tr>";
    
    for (var i = 0; i < names.length; i++) {
        tableContent += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    tableContent += "</table>";
    $("scores_table").innerHTML = headerContent + tableContent;
}


function addScore() {
    var name = $("name").value;
    var score = parseInt($("score").value, 10);

    if (name && !isNaN(score) && score >= 0 && score <= 100) {
        names.push(name);
        scores.push(score);
        $("name").value = ""; 
        $("score").value = "";
        $("name").focus();  
    } else {
        alert("You must enter a name and a valid score");
    }
}

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus();
};
