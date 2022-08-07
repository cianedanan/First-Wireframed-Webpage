function getName(){
  let name = prompt("What's your name?");
  while(name == null || name == '' || name == ""){
    name = prompt("What's your name?");
  }
  document.write(name);
}

function askQuestion() {
  let answer;
  while (answer != 'wiki game' || answer == null || answer == '' || answer == "") {
      answer = prompt("What's the best browser site game?").toLowerCase(); 
      if (answer != 'wiki game' || answer == null || answer == '' || answer == "") {
          alert('Wrong. It rhymes with Liki Game');
      } else {
          alert('Glad you thought so too!');
      }
  }
}

function printImg(){
  let output = '';
  let trophy = prompt("How many wins do you have?(0-100)");
  if(trophy > 100 || trophy < 0){
    alert("0-100 Please");
  } else if(trophy < 1){
    alert("You and I both, buddy.")
    output = "<img id='toilet' src='Images/loser.png'/>";
    document.getElementById('trophyHere').innerHTML = output;
  } else{ 
    for(i = 0; i < trophy; i++){
      output += "<img class='trophy' src='Images/Trophy.png'/>"; 
    }
    document.getElementById('trophyHere').innerHTML = output;
  }
}

function giveRank() {
  let rank = '';
  let points = document.getElementById('userPoints').value;
  if(points < 0){
    rank = '';
    } else if(points > 100000){
    rank = 'Go touch grass!';
    } else if(points > 10000){
    rank = 'Master';
    } else if(points > 1000){
    rank = 'Pro';
    } else if(points > 99){
    rank = 'Intermediate';
    } else if(points < 100){
    rank = 'Noob';
    } else{
     alert("Numbers only!")
    rank ='';
    }
    let message = "Rank: " + rank;
    if(rank == ''){
      message = '';
    }
  document.getElementById('printHere').innerHTML = message;
  }

