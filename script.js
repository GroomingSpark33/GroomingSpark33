let songs = [
  { title: "Penjaga Hati", artist: "Nadhif Basalamah", src: "penjaga-hati.mp3", cover: "penjaga-hati.jpg" },
  { title: "Bergema", artist: "Unknown", src: "music/bergema.mp3", cover: "images/bergema.jpg" },
  { title: "Takkan Terganti", artist: "Unknown", src: "music/takkan-terganti.mp3", cover: "images/takkan-terganti.jpg" }
];

let currentSong = 0;
let audio = new Audio(songs[currentSong].src);

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const progress = document.getElementById("progress");

function loadSong(index) {
  currentSong = index;
  audio.src = songs[index].src;
  title.innerText = songs[index].title;
  artist.innerText = songs[index].artist;
  cover.src = songs[index].cover;
}

function playSong(index = currentSong) {
  loadSong(index);
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline";
}

pauseBtn.addEventListener("click", () => {
  audio.pause();
  playBtn.style.display = "inline";
  pauseBtn.style.display = "none";
});

document.getElementById("prev").addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  playSong(currentSong);
});
document.getElementById("next").addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  playSong(currentSong);
});
playBtn.addEventListener("click", () => playSong());

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong(0);