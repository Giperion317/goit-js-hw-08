import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

document.addEventListener('DOMContentLoaded', onReloadPage);

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
}

function onReloadPage() {
  const playerTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(playerTime);
}
