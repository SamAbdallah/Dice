window.onload=function () {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var head=document.getElementById("head")

if (dice1==1){
    document.getElementById("img1").src="images/dice1.png";
}
else if (dice1==2){
    document.getElementById("img1").src="images/dice2.png";
}

else if (dice1==3){
    document.getElementById("img1").src="images/dice3.png";
}

else if (dice1==4){
    document.getElementById("img1").src="images/dice4.png";
}

else if (dice1==5){
    document.getElementById("img1").src="images/dice5.png";
}

else if (dice1==6){
    document.getElementById("img1").src="images/dice6.png";
}



if (dice2==1){
    document.getElementById("img2").src="images/dice1.png";
}
else if (dice2==2){
    document.getElementById("img2").src="images/dice2.png";
}

else if (dice2==3){
    document.getElementById("img2").src="images/dice3.png";
}

else if (dice2==4){
    document.getElementById("img2").src="images/dice4.png";
}

else if (dice2==5){
    document.getElementById("img2").src="images/dice5.png";
}

else if (dice2==6){
    document.getElementById("img2").src="images/dice6.png";
}


if (dice1>dice2){

    head.innerHTML="Player 1 wins"
}
else if(dice1<dice2) {
     head.innerHTML="Player 2 wins"
}
else if(dice1==dice2){
    head.innerHTML="Draw!"
}








}