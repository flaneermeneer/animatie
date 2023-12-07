// JavaScript Document

  // Get references to the buttons
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');
  var image = document.getElementById('ridder');
  var audio = new Audio('./sounds/bell.mp3');
  var swordaudio = new Audio('./sounds/Sword.mp3');
  var arrowaudio = new Audio('./sounds/arrow.mp3');
  var scream = new Audio('./sounds/scream.mp3');

  // Add event listener to Button 1
  button1.addEventListener('click', function() {
    button2.style.visibility = "visible"; // Enable Button 2
  });

  // Add event listener to Button 2
  button2.addEventListener('click', function() {
    button3.style.visibility = "visible"; // Enable Button 2
  });

button1.addEventListener('click', function () {
  
  
  setTimeout(() => {
    image.src = "./images/BIDLAN.gif"
  }, 2000); 
  audio.play();
      
   
  });

button2.addEventListener('click', function () {
  
  image.src = "./images/ZWAARDDEF.gif"

  setTimeout(() => {
    swordaudio.play();
  }, 1500); 

 
});


button3.addEventListener('click', function () {
  
  image.src = "./images/STERF.gif"
  
  setTimeout(() => {
    arrowaudio.play();
  }, ); 

  setTimeout(() => {
    scream.play();
  },1000 ); 
  
  

});







