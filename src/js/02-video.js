import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';
const playerTime = localStorage.getItem(STORAGE_KEY);

document.addEventListener('DOMContentLoaded', onReloadPage);

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate({ seconds, duration }) {
  localStorage.setItem(STORAGE_KEY, `${seconds}`);
  if (duration === seconds) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onReloadPage() {
  player.setCurrentTime(playerTime || 0).then(function (seconds) {
    player.setVolume(0);
    player.play();
  });
}
