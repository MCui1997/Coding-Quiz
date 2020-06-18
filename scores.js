//Get elementIDs and also call function when new page is loaded
document.getElementById("clear").onclick = clearHighscores;
printScores();

///// Functions for printing highscores
function printScores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  //Clearing the scores that are stord
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
