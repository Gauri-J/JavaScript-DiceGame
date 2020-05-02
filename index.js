function rollDice(){

    var random1 = ((Math.random()) * 6)+1;
    var r1 = Math.floor(random1);
    var imgsource1="images/dice" + r1 +".png";
    document.querySelector(".img1").src = imgsource1; 
    
    var random2 = ((Math.random()) * 6)+1;
    var r2 = Math.floor(random2);
    var imgsource2 = "images/dice"+ r2 + ".png";
    document.querySelector(".img2").src = imgsource2;
    
    
    if(r1 > r2)
    document.querySelector("h1").innerHTML = "💃🏼 Player 1 wins";
    else if(r2 > r1)
    document.querySelector("h1").innerHTML = "💃🏼 Player 2 wins";
    else
    document.querySelector("h1").innerHTML = "Draw..😃"
    }