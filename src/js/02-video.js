import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';

document.addEventListener('DOMContentLoaded', onReloadPage);

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(data) {
  localStorage.setItem(STORAGE_KEY, `${data.seconds}`);
}

function onReloadPage() {
  const playerTime = localStorage.getItem(STORAGE_KEY);
  player
    .setCurrentTime(playerTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
