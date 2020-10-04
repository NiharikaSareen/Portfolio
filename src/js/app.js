import "../scss/style.scss";

//Tools
import "./tools/vh-fix";

//Modules
import "./modules/particles.min";
import "./modules/particles";
import "./modules/pages-transition";
import "./modules/project-page";

window.onload = function(){
  var audioButton = document.getElementById("audioButton");
  if(audioButton){
      audioButton.addEventListener("click",AudioListener);
  }
}

function AudioListener() {
  var audio = document.getElementById("audio");
  var soundIndicator = document.getElementById('sound-container__indicator'); 
  if(audio.paused){
    var audioPlay= audio.play();
    if(audioPlay !==undefined){
      audioPlay.then(function(){
      soundIndicator.innerHTML = "Audio On";
      setTimeout(function(){ 
        soundIndicator.innerHTML = "Audio";
      }, 3000);
      }).catch(function(error){
        console.log(error);
      })
    }  
  }
  else{
    audio.pause();
    soundIndicator.innerHTML = "Audio Off";
    setTimeout(function(){ 
      soundIndicator.innerHTML = "Audio";
    }, 3000);
  }
}