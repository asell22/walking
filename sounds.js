// define variable moveButton to function that causes button to have button active class.
var moveButton = function(button){
  button.className += " active";
}

//declare variable addButton to anonymous function. In function, declare variable btn to inserting a "div" element to the document. Declare variable buttonNumber to randomizing numbers from range 0 to 3 (0,1,2,3). The class name of the button  is declared using the buttonNumber variable. Declare variable board to be the first element in the board array. Add a button to variable board. Returns button.
var addButton = function(){
  var btn = document.createElement("div")

  var buttonNumber = Math.floor(Math.random() * 4);
  btn.className = "button button"+ buttonNumber
  var board = document.getElementsByClassName("board")[0]
  board.appendChild(btn)
  return btn;
}

//Declare generateButtons to anonymous function. Recursively calls it self. Function called after 1.5 seconds. Declare variable x to calling addButton function.
generateButtons = function(){

  setTimeout(function(){
    generateButtons();
  }, 1000)


  var x = addButton();

  setTimeout(function(){
    moveButton(x);
    setTimeout(function(){
     soundButtons(x); // instead of logging what specific button crosses, we need the individual sounds to sound
    }, 2769)

  }, 15)
}
setTimeout(function(){
  generateButtons()
}, 1000)

// var t = 2000;

var theme1 = new Howl({
  urls: ['/audio/electric_bass_scrape_down.mp3']

})

var theme2 = new Howl({
  urls: ['/audio/electric_bass_scrape_up.mp3']

})

var theme3 = new Howl({
  urls: ['/audio/musical_organ_blues_riff.mp3']

})

var theme4 = new Howl({
  urls: ['/audio/musical_violin_trill_short.mp3']

})

var soundButtons = function(button){

  if (button.className === "button button0 active") {
    theme1.play();
  } else if(button.className === "button button1 active") {
    theme2.play();
  } else if(button.className === "button button2 active") {
    theme3.play();
  } else {
    theme4.play();
  }
}
