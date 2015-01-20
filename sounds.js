var moveButton = function(button){
  button.className += " active";
}

var addButton = function(){
  var btn = document.createElement("div")

  var buttonNumber = Math.floor(Math.random() * 4);
  btn.className = "button button"+ buttonNumber
  var board = document.getElementsByClassName("board")[0]
  board.appendChild(btn)
  return btn;
}

generateButtons = function(){

  setTimeout(function(){
    generateButtons();
  }, 1000)


  var x = addButton();

  setTimeout(function(){
    moveButton(x);
    setTimeout(function(){
     console.log(x.className + " button crossed")
    }, 2769)

  }, 10)
}
setTimeout(function(){
  generateButtons()
}, 1000)

var t = 2000;

var theme = new Howl({
  urls: ['/audio/musical_electric_guitar_distorted_c_sus2.mp3'],
  loop: true
}).play();
