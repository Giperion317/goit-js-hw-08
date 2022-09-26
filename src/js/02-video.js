import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

const parsedCurentTimeVideo = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player.setCurrentTime(parsedCurentTimeVideo.seconds);
