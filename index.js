var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png" 

var randomImagesource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png" 

var randomImagesource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImagesource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}

else if (randomNumber2 = randomNumber1) {
    document.querySelector("h1").innerHTML = "You both Suck"
    document.querySelectorAll("p")[0].innerHTML = "Asshole 1";
    document.querySelectorAll("p")[1].innerHTML = "Asshole 2";
    document.querySelector("button").innerHTML = "Try Again Losers";


}