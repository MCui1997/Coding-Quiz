//Get elementIDs and also call function when new page is loaded
document.getElementById("clear").onclick = clearHighscores;
printScores();

///// Functions for printing highscores
function printScores() {
    // retreieve scores, use parse to get it from local storage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort scores 
    highscores.sort(function(x, y) {
      return y.score - x.score;
    });
  
    //append to high scores
    highscores.forEach(function(score) {

      var liTag = document.createElement("LI");
      score.initials = score.initials.toUpperCase();
      liTag.textContent= score.initials + " --- " + score.score;
      
      
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  //Clearing the scores that are stored
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
