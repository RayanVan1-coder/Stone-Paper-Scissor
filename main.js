
function saveName(){
    
var player_name=document.getElementById("inp1").value;
name_length=player_name.length;
if(player_name==""){
    document.getElementById("h31").innerHTML="Please enter a name!!"
}
else if(name_length>10){
document.getElementById("h31").innerHTML="Name should be under 10 characters!!!";
}
    

else{
localStorage.setItem("player_name",player_name);
window.location="index2.html"
console.log("Relax, Your name has been saved")
}
}