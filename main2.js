function loadName(){
    document.getElementById("button72").style="display:none;"
    player_name=localStorage.getItem("player_name");
    document.getElementById("h31").innerHTML="*Hi "+player_name+" ,"
    document.getElementById("h21").style="display:inline-block;"
    document.getElementById("h31").style="display:inline-block;"
    document.getElementById("h32").style="display:inline-block;"
    document.getElementById("h33").style="display:inline-block;"
    document.getElementById("h34").style="display:inline-block;"
    document.getElementById("h35").style="display:inline-block;"
    document.getElementById("h36").style="display:inline-block;"
    document.getElementById("h37").style="display:inline-block;"
    document.getElementById("h38").style="display:inline-block;"
    document.getElementById("h39").style="display:inline-block;"
    document.getElementById("select_1").style="display:inline-block;"
    document.getElementById("button2").style="display:inline-block;"
    document.getElementById("button3").style="display:inline-block;"
}
function backmainScreen(){
    window.location="index.html"
}
function startGame(){
    localStorage.setItem("player_name",player_name);
    rounds=document.getElementById("select_1").value;
    localStorage.setItem("rounds",rounds);
    window.location="index3.html";
}