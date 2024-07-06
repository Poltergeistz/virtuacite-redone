document.addEventListener('DOMContentLoaded', (event) => {
    const sceneEl = document.querySelector('a-scene');
    const infoBtn = document.getElementById('infoBtn');
    
    sceneEl.addEventListener('loaded', function () {
      infoBtn.style.pointerEvents = 'auto';
    });

    let modal = document.getElementById("modal");
    let span = document.getElementsByClassName("close")[0];

    infoBtn.onclick = function() {
      modal.style.display = "block";
    };

    span.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
});

  const videoElements = {
    0: document.getElementById("hector"),
    1: document.getElementById("juliette"),
    2: document.getElementById("madame-dubois"),
    3: document.getElementById("monsieur-dubois"),
    4: document.getElementById("pierre"),
    5: document.getElementById("grand-pere"),
  };

  const sceneEl = document.querySelector("a-scene");
  let isVideoPlaying = false;
  let currentVideoEl = null;

  sceneEl.addEventListener("targetFound", (event) => {
    console.log("Target found event:", event);
    const targetIndex = event.target.getAttribute('mindar-image-target').targetIndex;
    if (targetIndex !== undefined && videoElements[targetIndex]) {
      console.log("Playing video for target index:", targetIndex);
      currentVideoEl = videoElements[targetIndex];
      currentVideoEl.play();
      isVideoPlaying = true;
    } else {
      console.log("No video element found for target index:", targetIndex);
    }
  });

  sceneEl.addEventListener("targetLost", (event) => {
    console.log("Target lost event:", event);
    if (isVideoPlaying && currentVideoEl) {
      console.log("Pausing video");
      currentVideoEl.pause();
      isVideoPlaying = false;
      currentVideoEl = null;
    }
  });