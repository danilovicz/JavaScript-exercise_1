var score_box , score_num, activePlayer, gameActive;

init();

	document.querySelector("#roll_dice").addEventListener("click", function(){
	
	 
	var dice= Math.floor(Math.random()*6) + 1;

	var diceDom=document.querySelector("#dice_img");
	document.querySelector("#dice").style.display ="block";
	diceDom.src="dice-" + dice +".png";

	if (dice>1) {
		score_num= score_num + dice;
		document.getElementById("current-" + activePlayer).textContent = score_num;
	}
	else{
	document.querySelector("#dice").style.display="none";
	//document.getElementById("score-0").textContent="0";
	//document.getElementById("score-1").textContent="0";
	//document.getElementById("current-0").textContent="0";
	//document.getElementById("current-1").textContent="0";
	document.querySelector("#current-"+ activePlayer).textContent=0;
	nextPlayer();
	}
	
	
});

document.getElementById("hold").addEventListener("click",function(){
	
	score_box[activePlayer]= score_box[activePlayer] + score_num;
	document.querySelector("#score-" + activePlayer).textContent = score_box[activePlayer];
	
	if (score_box[activePlayer]>=20) {
		document.querySelector("#dice").style.display="none";
		//document.getElementById("player-" + activePlayer).textContent="Winner";
		document.querySelector("#player-" + activePlayer).classList.add("winner");
		document.querySelector("#player-" + activePlayer).classList.remove("active");

		
		
	} else{
		nextPlayer();

	}
	

	

	
});

	document.getElementById("new_game").addEventListener("click",init);


function nextPlayer(){
	activePlayer===0 ? activePlayer=1 : activePlayer=0;
		score_num=0;
		document.getElementById("current-0").textContent=0;
		document.getElementById("current-1").textContent=0;
		document.getElementById("player-0").classList.toggle("active");
		document.getElementById("player-1").classList.toggle("active");
		document.querySelector("#dice").style.display="none";
}

function init(){
score_box=[0,0];
score_num=0;
activePlayer=0;

document.querySelector("#dice").style.display="none";

document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
document.getElementById("player-1").classList.remove("active");
document.getElementById("player-0").classList.add("active");

document.getElementById("player-0").classList.remove("winner");
document.getElementById("player-1").classList.remove("winner");






}
