var player_points=0;
var player_2_points=0;
ties=0;
playerwins=0;
player2wins=0;
var rounds=localStorage.getItem("rounds",rounds);
    var player_name= localStorage.getItem("player_name", player_name);
function gameStart(){
   document.getElementById("h21").innerHTML=rounds; 
   document.getElementById("btn1").style="display:none"
document.getElementById("h23").innerHTML=player_name;
document.getElementById("h21").style="display:inline-block";
document.getElementById("h31").style="display:inline-block";
document.getElementById("img1").style="display:inline-block";
document.getElementById("img2").style="display:inline-block";
document.getElementById("img3").style="display:inline-block";
document.getElementById("h41").style="display:inline-block";
document.getElementById("h42").style="display:inline-block";
document.getElementById("h43").style="display:inline-block";
document.getElementById("li1").style="display:inline-block";
document.getElementById("li2").style="display:inline-block";
document.getElementById("li3").style="display:inline-block";
document.getElementById("btn2").style="display:inline-block";
}
var rounds_number=0;
/*stone function*/     
function stone(){
    rounds_number=rounds_number+1;
    
    /*if match ends*/
    if(rounds_number==rounds){
       if(player_points>player_2_points){
           document.getElementById("winner").innerHTML="Player "+player_name+" wins the game!!!, Congrats on winning the game!  :)"
           document.getElementById("btn2").style="display:none";
           document.getElementById("btn3").style="display:inline-block";
           document.getElementById("btn4").style="display:inline-block";
           document.getElementById("li1").style="display:none";
           document.getElementById("li2").style="display:none";
           document.getElementById("img1").style="display:none";
           document.getElementById("img2").style="display:none";
           document.getElementById("img3").style="display:none";
           document.getElementById("h41").style="display:none";
           document.getElementById("h42").style="display:none";
           document.getElementById("h43").style="display:none";
           document.getElementById("h21").style="display:none";
           document.getElementById("h31").style="display:none";
           document.getElementById("li4").style="display:none";
        }
       else if(player_2_points>player_points){
        document.getElementById("winner").innerHTML="Player 2 wins the game!!!,You lost the match, Better luck next time! :("
        document.getElementById("btn2").style="display:none";
        document.getElementById("btn3").style="display:inline-block";
        document.getElementById("btn4").style="display:inline-block";
        document.getElementById("li1").style="display:none";
        document.getElementById("li2").style="display:none";
        document.getElementById("img1").style="display:none";
        document.getElementById("img2").style="display:none";
        document.getElementById("img3").style="display:none";
        document.getElementById("h41").style="display:none";
        document.getElementById("h42").style="display:none";
        document.getElementById("h43").style="display:none";
        document.getElementById("h21").style="display:none";
        document.getElementById("h31").style="display:none";
        document.getElementById("li4").style="display:none";
    }
    else{
        document.getElementById("winner").innerHTML="It's a tie!!! :)"  
        document.getElementById("btn2").style="display:none";
        document.getElementById("btn3").style="display:inline-block";
        document.getElementById("btn4").style="display:inline-block";
        document.getElementById("li1").style="display:none";
        document.getElementById("li2").style="display:none";
        document.getElementById("img1").style="display:none";
        document.getElementById("img2").style="display:none";
        document.getElementById("img3").style="display:none";
        document.getElementById("h41").style="display:none";
        document.getElementById("h42").style="display:none";
        document.getElementById("h43").style="display:none";
        document.getElementById("h21").style="display:none";
        document.getElementById("h31").style="display:none";
        document.getElementById("li4").style="display:none";
    }
    }
    /*second player  random number*/
    random_number_1=Math.floor(Math.random() * 3) + 1;
    /* score entry in li4*/
    document.getElementById("h50").innerHTML= "Round "+rounds_number+" Of "+rounds +" completed !!"     
    document.getElementById("h24").innerHTML=player_name+" has played:"
document.getElementById("img7").src="stone.png";
/*conditions for random number in second player*/
if(random_number_1==1){
     document.getElementById("h25").innerHTML="Player 2 has played:"   ;
     document.getElementById("img8").src="stone.png";
}
else if(random_number_1==2){
    document.getElementById("h25").innerHTML="Player 2 has played:";
    document.getElementById("img8").src="paper.png";
}
else{
    document.getElementById("h25").innerHTML="Player 2 has played:";
    document.getElementById("img8").src="scissor.png";
}
/*conditions  for two players*/
    document.getElementById("h26").style="display:none";
    document.getElementById("img9").style="display:none";
    ties=ties+1;
/*win or lose in tie*/
    if(random_number_1==1){
document.getElementById("h35").innerHTML="Its a tie this round!";
/*leaderboard for  tie*/
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML=player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML= player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!";
}
    }
/*win or lose in player-2 win*/
    else if(random_number_1==2){
document.getElementById("h35").innerHTML="Player 2 wins this round and gets 1 point!"
player_2_points=player_2_points+1;
player2wins=player2wins+1;
/*leaderboard in player-2 win*/ 
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML=player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML=player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!";
}
    }
    /*win or lose in player win*/
    else{
document.getElementById("h35").innerHTML="Player "+player_name+" wins this round and gets 1 point!"
player_points=player_points+1;
playerwins=playerwins+1;
/*leaderboard in player win */
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML= player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!" ;
}
    }
}
function loserLost(){
    document.getElementById("h31").style="display:none;"
    document.getElementById("h21").style="display:none;"
    document.getElementById("img1").style="display:none;"
    document.getElementById("img2").style="display:none;"
    document.getElementById("img3").style="display:none;"
    document.getElementById("h41").style="display:none;"
    document.getElementById("h42").style="display:none;"
    document.getElementById("h43").style="display:none;"
    document.getElementById("li1").style="display:none;"
    document.getElementById("li3").style="display:none;"
    document.getElementById("li2").style="display:none;"
    document.getElementById("btn2").style="display:none;"
    document.getElementById("btn3").style="display:inline-block";
    document.getElementById("btn4").style="display:inline-block";
    document.getElementById("winner").innerHTML="You lost the match ! You declared windee :("
}
function paper(){
    rounds_number=rounds_number+1;
    
    /*if match ends*/
    if(rounds_number==rounds){
       if(player_points>player_2_points){
           document.getElementById("winner").innerHTML="Player "+player_name+" wins the game!!!, Congrats on winning the game!  :)"
           document.getElementById("btn2").style="display:none";
           document.getElementById("btn3").style="display:inline-block";
           document.getElementById("btn4").style="display:inline-block";
           document.getElementById("li1").style="display:none";
           document.getElementById("li2").style="display:none";
           document.getElementById("img1").style="display:none";
           document.getElementById("img2").style="display:none";
           document.getElementById("img3").style="display:none";
           document.getElementById("h41").style="display:none";
           document.getElementById("h42").style="display:none";
           document.getElementById("h43").style="display:none";
           document.getElementById("h21").style="display:none";
           document.getElementById("h31").style="display:none";
           document.getElementById("li4").style="display:none";
        }
       else if(player_2_points>player_points){
        document.getElementById("winner").innerHTML="Player 2 wins the game!!!,You lost the match, Better luck next time! :("
        document.getElementById("btn2").style="display:none";
        document.getElementById("btn3").style="display:inline-block";
        document.getElementById("btn4").style="display:inline-block";
        document.getElementById("li1").style="display:none";
        document.getElementById("li2").style="display:none";
        document.getElementById("img1").style="display:none";
        document.getElementById("img2").style="display:none";
        document.getElementById("img3").style="display:none";
        document.getElementById("h41").style="display:none";
        document.getElementById("h42").style="display:none";
        document.getElementById("h43").style="display:none";
        document.getElementById("h21").style="display:none";
        document.getElementById("h31").style="display:none";
        document.getElementById("li4").style="display:none";
    }
    else{
        document.getElementById("winner").innerHTML="It's a tie!!! :)"  
        document.getElementById("btn2").style="display:none";
        document.getElementById("btn3").style="display:inline-block";
        document.getElementById("btn4").style="display:inline-block";
        document.getElementById("li1").style="display:none";
        document.getElementById("li2").style="display:none";
        document.getElementById("img1").style="display:none";
        document.getElementById("img2").style="display:none";
        document.getElementById("img3").style="display:none";
        document.getElementById("h41").style="display:none";
        document.getElementById("h42").style="display:none";
        document.getElementById("h43").style="display:none";
        document.getElementById("h21").style="display:none";
        document.getElementById("h31").style="display:none";
        document.getElementById("li4").style="display:none";
    }
    }
    /*second player  random number*/
    random_number_1=Math.floor(Math.random() * 3) + 1;
    /* score entry in li4*/
    document.getElementById("h50").innerHTML= "Round "+rounds_number+" Of "+rounds +" completed !!"     
    document.getElementById("h24").innerHTML=player_name+" has played:"
document.getElementById("img7").src="paper.png";
/*conditions for random number in second player*/
if(random_number_1==1){
     document.getElementById("h25").innerHTML="Player 2 has played:"   ;
     document.getElementById("img8").src="stone.png";
}
else if(random_number_1==2){
    document.getElementById("h25").innerHTML="Player 2 has played:";
    document.getElementById("img8").src="paper.png";
}
else{	
    document.getElementById("h25").innerHTML="Player 2 has played:";
    document.getElementById("img8").src="scissor.png";
}
/*conditions  for two players*/
    document.getElementById("h26").style="display:none";
    document.getElementById("img9").style="display:none";
/*win or lose in tie     here                                 */
    if(random_number_1==1){
document.getElementById("h35").innerHTML="Player "+player_name+" wins this round and gets 1 point!";
player_points=player_points+1;
playerwins=playerwins+1;
/*leaderboard for  playerwins*/
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML=player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML= player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!";
}
    }
/*win or lose in player-2 win*/
    else if(random_number_1==2){
document.getElementById("h35").innerHTML="It is a tie this round!"
ties=ties+1;
/*leaderboard in player-2 win*/ 
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML=player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML=player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!";
}
    }
    /*win or lose in player win*/
    else{
document.getElementById("h35").innerHTML="Player 2 wins this round and gets 1 point!"
player_2_points=player_2_points+1;
player2wins=player2wins+1;
/*leaderboard in player win */
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML= player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!" ;
}
    }
}
function loserLost(){
    document.getElementById("h31").style="display:none;"
    document.getElementById("h21").style="display:none;"
    document.getElementById("img1").style="display:none;"
    document.getElementById("img2").style="display:none;"
    document.getElementById("img3").style="display:none;"
    document.getElementById("h41").style="display:none;"
    document.getElementById("h42").style="display:none;"
    document.getElementById("h43").style="display:none;"
    document.getElementById("li1").style="display:none;"
    document.getElementById("li3").style="display:none;"
    document.getElementById("li2").style="display:none;"
    document.getElementById("btn2").style="display:none;"
    document.getElementById("btn3").style="display:inline-block";
    document.getElementById("btn4").style="display:inline-block";
    document.getElementById("winner").innerHTML="You lost the match ! You declared windee :("
}
function scissor(){
    rounds_number=rounds_number+1;
    
    /*if match ends*/
    if(rounds_number==rounds){
       if(player_points>player_2_points){
           document.getElementById("winner").innerHTML="Player "+player_name+" wins the game!!!, Congrats on winning the game!  :)"
           document.getElementById("btn2").style="display:none";
           document.getElementById("btn3").style="display:inline-block";
           document.getElementById("btn4").style="display:inline-block";
           document.getElementById("li1").style="display:none";
           document.getElementById("li2").style="display:none";
           document.getElementById("img1").style="display:none";
           document.getElementById("img2").style="display:none";
           document.getElementById("img3").style="display:none";
           document.getElementById("h41").style="display:none";
           document.getElementById("h42").style="display:none";
           document.getElementById("h43").style="display:none";
           document.getElementById("h21").style="display:none";
           document.getElementById("h31").style="display:none";
           document.getElementById("li4").style="display:none";
        }
       else if(player_2_points>player_points){
        document.getElementById("winner").innerHTML="Player 2 wins the game!!!,You lost the match, Better luck next time! :("
        document.getElementById("btn2").style="display:none";
        document.getElementById("btn3").style="display:inline-block";
        document.getElementById("btn4").style="display:inline-block";
        document.getElementById("li1").style="display:none";
        document.getElementById("li2").style="display:none";
        document.getElementById("img1").style="display:none";
        document.getElementById("img2").style="display:none";
        document.getElementById("img3").style="display:none";
        document.getElementById("h41").style="display:none";
        document.getElementById("h42").style="display:none";
        document.getElementById("h43").style="display:none";
        document.getElementById("h21").style="display:none";
        document.getElementById("h31").style="display:none";
        document.getElementById("li4").style="display:none";
    }
    else{
        document.getElementById("winner").innerHTML="It's a tie!!! :)"  
        document.getElementById("btn2").style="display:none";
        document.getElementById("btn3").style="display:inline-block";
        document.getElementById("btn4").style="display:inline-block";
        document.getElementById("li1").style="display:none";
        document.getElementById("li2").style="display:none";
        document.getElementById("img1").style="display:none";
        document.getElementById("img2").style="display:none";
        document.getElementById("img3").style="display:none";
        document.getElementById("h41").style="display:none";
        document.getElementById("h42").style="display:none";
        document.getElementById("h43").style="display:none";
        document.getElementById("h21").style="display:none";
        document.getElementById("h31").style="display:none";
        document.getElementById("li4").style="display:none";
    }
    }
    /*second player  random number*/
    random_number_1=Math.floor(Math.random() * 3) + 1;
    /* score entry in li4*/
    document.getElementById("h50").innerHTML= "Round "+rounds_number+" Of "+rounds +" completed !!"     
    document.getElementById("h24").innerHTML=player_name+" has played:"
document.getElementById("img7").src="scissor.png";
/*conditions for random number in second player*/
if(random_number_1==1){
     document.getElementById("h25").innerHTML="Player 2 has played:"   ;
     document.getElementById("img8").src="stone.png";
}
else if(random_number_1==2){
    document.getElementById("h25").innerHTML="Player 2 has played:";
    document.getElementById("img8").src="paper.png";
}
else{	
    document.getElementById("h25").innerHTML="Player 2 has played:";
    document.getElementById("img8").src="scissor.png";
}
/*conditions  for two players*/
    document.getElementById("h26").style="display:none";
    document.getElementById("img9").style="display:none";
/*win or lose in tie     here                                 */
    if(random_number_1==1){
document.getElementById("h35").innerHTML="Player 2 wins this round and gets 1 point!";
player_2_points=player_2_points+1;
player2wins=player2wins+1;
/*leaderboard for  playerwins*/
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML=player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML= player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!";
}
    }
/*win or lose in player-2 win*/
    else if(random_number_1==2){
document.getElementById("h35").innerHTML="Player "+player_name+" wins this round and gets 1 point!";
player_points=player_points+1;
 playerwins=playerwins+1;
/*leaderboard in player-2 win*/ 
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML=player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML=player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!";
}
    }
    /*win or lose in player win*/
    else{
document.getElementById("h35").innerHTML="It is a tie this round!";
ties=ties+1;
/*leaderboard in player win */
if(player_2_points>player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else if(player_2_points==player_points){
    document.getElementById("h44").innerHTML="Player 2 - "+player_2_points+" points!";
    document.getElementById("h45").innerHTML= player_name+" - "+player_points+" points!";
}
else{
    document.getElementById("h44").innerHTML= player_name+" - "+player_points+" points!";
    document.getElementById("h45").innerHTML="Player 2 - "+player_2_points+" points!" ;
}
    }
}
function loserLost(){
    document.getElementById("h31").style="display:none;"
    document.getElementById("h21").style="display:none;"
    document.getElementById("img1").style="display:none;"
    document.getElementById("img2").style="display:none;"
    document.getElementById("img3").style="display:none;"
    document.getElementById("h41").style="display:none;"
    document.getElementById("h42").style="display:none;"
    document.getElementById("h43").style="display:none;"
    document.getElementById("li1").style="display:none;"
    document.getElementById("li3").style="display:none;"
    document.getElementById("li2").style="display:none;"
    document.getElementById("btn2").style="display:none;"
    document.getElementById("btn3").style="display:inline-block";
    document.getElementById("btn4").style="display:inline-block";
    document.getElementById("winner").innerHTML="You lost the match ! You declared windee :("
}

function Restart(){
    window.location="index2.html";
}
function QuitGame(){
    window.location="index.html";
}
                             