
//Player 1
var player1=Math.floor((Math.random()*6)+1);
var location_diceImg1="images/dice"+player1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", location_diceImg1);


//Player 2
var player2=Math.floor((Math.random()*6)+1);
var location_diceImg2="images/dice"+player2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", location_diceImg2);


if(player1==player2){
    //print("Draw");
    document.querySelector("h1").innerHTML="Draw!";
}
else if(player1>player2){
    //print("Draw");
    document.querySelector(".fickle").innerHTML="Player1 wins!";
}
else if(player1<player2){
    //print("Draw");
    document.getElementsByClassName("fickle")[0].innerHTML="Player 2 wins!";
}
else{
    alert("Refresh again!");
}
