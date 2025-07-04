let initialScorehome = document.getElementById("score-home");
let initialScoreguest = document.getElementById("score-guest");
const headingHome = document.getElementById("heading-home");
const headingGuest = document.getElementById("heading-guest");

console.log(headingGuest.textContent);






function updateScores() {
    let scoreGuest = parseInt(initialScoreguest.textContent);
    let scoreHome = parseInt(initialScorehome.textContent);
    initialScorehome.textContent = scoreHome;
    initialScoreguest.textContent = scoreGuest;
    if (scoreHome > scoreGuest) {
        headingHome.classList.add("winning-team-highlight");
        
        console.log("Home team is leading");
    } else if (scoreGuest>scoreHome) {
        headingGuest.classList.add("winning-team-highlight");
        
        console.log("Guest team is leading");
    } else {
        headingHome.classList.remove("winning-team-highlight");
        headingGuest.classList.remove("winning-team-highlight");
        console.log("It's a tie");
    }


}

function addOne(){
    let scoreHome = parseInt(initialScorehome.textContent);
    console.log(scoreHome);
     scoreHome = scoreHome + 1;
     console.log(scoreHome);
     
    initialScorehome.textContent = scoreHome;
    updateScores();
    
    
    
}

function addTwo(){
    let scoreHome = parseInt(initialScorehome.textContent);
    console.log(scoreHome);
     scoreHome = scoreHome + 2;
    
    initialScorehome.textContent = scoreHome;
    updateScores();
    // console.log(newScoreHome);
}   
function addThree(){
    let scoreHome = parseInt(initialScorehome.textContent);
    console.log(scoreHome);
     scoreHome = scoreHome + 3;
    
    initialScorehome.textContent = scoreHome;
    updateScores();
    // console.log(newScoreHome);
}

function addOneaway(){
    let scoreGuest = parseInt(initialScoreguest.textContent);
    console.log(scoreGuest);
     scoreGuest = scoreGuest + 1;
    initialScoreguest.textContent = scoreGuest;
    updateScores();
}

function addTwoaway(){
    let scoreGuest = parseInt(initialScoreguest.textContent);
    console.log(scoreGuest);
     scoreGuest = scoreGuest + 2;
    initialScoreguest.textContent = scoreGuest;
    // console.log(newScoreguest);
    updateScores();
}

function addThreeaway(){
    let scoreGuest = parseInt(initialScoreguest.textContent);
    console.log(scoreGuest);
     scoreGuest = scoreGuest + 3;
    initialScoreguest.textContent = scoreGuest;
    // console.log(newScoreguest);
    updateScores();
}

function resetScores() {
    
    initialScorehome.textContent = 0;
    initialScoreguest.textContent = 0;
    headingHome.classList.remove("winning-team-highlight");
    headingGuest.classList.remove("winning-team-highlight");
   
    
    
}

function leadingTeam() {
    let scoreHome = parseInt(initialScorehome.textContent);
    let scoreGuest = parseInt(initialScoreguest.textContent);
    
    if (scoreHome > scoreGuest) {
        headingHome.classList.add("winning-team-highlight");
        headingGuest.classList.remove("winning-team-highlight");
        console.log("Home team is leading");
    } else if (scoreGuest > scoreHome) {
        headingGuest.classList.add("winning-team-highlight");
        headingHome.classList.remove("winning-team-highlight");
        console.log("Guest team is leading");
    } else {
        headingHome.classList.remove("winning-team-highlight");
        headingGuest.classList.remove("winning-team-highlight");
        console.log("It's a tie");
    }
}






