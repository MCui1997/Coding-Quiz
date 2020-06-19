//Get elementIDs and also call function when new page is loaded
document.getElementById("clear").onclick = clearHighscores;
printScores();

///// Functions for printing highscores
function printScores() {
    // retreieve scores
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort scores 
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {

      var liTag = document.createElement("LI");
      liTag.textContent = score.initials + " - " + score.score;
  
      //display
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  //Clearing the scores that are stord
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
