function showPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    popup.style.display = "block";
    popupImage.src = imageSrc;
    popup.addEventListener("click", function() {
        popup.style.display = "none";
    });
}

// play & pause

// const playPauseBtn = document.getElementById('play-pause-btn');
// const audioPlayer = document.getElementById('audio-player');

// playPauseBtn.addEventListener('click', function() {
//   if (audioPlayer.paused) {
//     audioPlayer.play();
//     playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
//   } else {
//     audioPlayer.pause();
//     playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
//   }
// });

// audioPlayer.addEventListener('ended', function() {
//   playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
// });

// const playPauseBtn = document.getElementById('play-pause-btn');
// const audioPlayer = document.getElementById('audio-player');

// playPauseBtn.addEventListener('click', () => {
//   if (audioPlayer.paused) {
//     audioPlayer.play();
//     playPauseBtn.classList.add('playing');
//   } else {
//     audioPlayer.pause();
//     playPauseBtn.classList.remove('playing');
//   }
// });

const playPauseBtn = document.getElementById('play-pause-btn');
const audioPlayer = document.getElementById('audio-player');

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = '<img src="images/pause-solid.svg" style="width: 24px; height: 24px;">'; // pause icon
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<img src="images/play-solid.svg" style="width: 24px; height: 24px; margin-left: 3px;">'; // play icon
  }
}

playPauseBtn.addEventListener('click', togglePlayPause);