const musicBtn = document.querySelector('#music-btn');
let isPlaying = false;

const audio1 = new Audio('../audio/Ryuk.mp3');
const audio2 = new Audio('../audio/L.mp3');
const audio3 = new Audio('../audio/Rem.mp3');

const audios = [audio1, audio2, audio3];

let currentAudio;

function fetchRandomAudio() {
  const randomIndex = Math.floor(Math.random() * audios.length);
  console.log(randomIndex);
  return audios[randomIndex];
}

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    // stop the current audio
    isPlaying = false;
    currentAudio.pause();
    currentAudio.currentTime = 0;
  } else {
    // play a new audio
    isPlaying = true;
    let audio = fetchRandomAudio();
    audio.play();
    currentAudio = audio;
  }
});
