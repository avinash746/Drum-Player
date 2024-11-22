 let fluteKey = document.querySelectorAll(".btn");


 function tone(switchCase) {
     let audio;

     switch (switchCase) {
         case 'w':
             audio = new Audio("sounds/tom-1.mp3");
             break;
         case 'a':
             audio = new Audio("sounds/tom-2.mp3");
             break;
         case 's':
             audio = new Audio("sounds/tom-3.mp3");
             break;
         case 'd':
             audio = new Audio("sounds/tom-4.mp3");
             break;
         case 'j':
             audio = new Audio("sounds/snare.mp3");
             break;
         case 'k':
             audio = new Audio("sounds/crash.mp3");
             break;
         case 'l':
             audio = new Audio("sounds/kick-bass.mp3");
             break;
     }
     audio.play();

 }

 function btnAnimaton(btnAnime) {
     let animeButton = document.querySelector("." + btnAnime);
     animeButton.classList.add("pressed");
     setTimeout(function() { animeButton.classList.remove("pressed") }, 300);
 }

 for (let i = 0; i < fluteKey.length; i++) {
     document.querySelectorAll("button.btn")[i].addEventListener("click", function() {
         let inputCase1 = this.textContent;
         tone(inputCase1);
         btnAnimaton(inputCase1);
     });

 }
 document.addEventListener("keydown", function(event) {
     // let inputCase2 = `${event.key}`;
     tone(event.key);
     btnAnimaton(event.key);
 });