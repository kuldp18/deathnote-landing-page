const musicBtn = document.querySelector('#music-btn');
const musicIcon = document.querySelector('#music-btn i');
const deathNoteLogo = document.querySelector('.logo_container img');
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
    // change the music icon

    // remove old class
    musicIcon.classList.remove('fa-solid', 'fa-volume-xmark');
    // add new class
    musicIcon.classList.add('fa-solid', 'fa-music');

    // stop the current audio
    isPlaying = false;
    currentAudio.pause();
    currentAudio.currentTime = 0;

    // stop rotating the logo
    deathNoteLogo.classList.remove('rotateLogo');
  } else {
    // change the music icon

    // remove old class
    musicIcon.classList.remove('fa-solid', 'fa-music');
    // add new class
    musicIcon.classList.add('fa-solid', 'fa-volume-xmark');

    // play a new audio
    isPlaying = true;
    let audio = fetchRandomAudio();
    audio.play();
    currentAudio = audio;

    // start rotating the logo
    deathNoteLogo.classList.add('rotateLogo');
  }
});
