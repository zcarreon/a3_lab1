var video = {
  //variables at the top as usual
  videoPlayer : document.querySelector('video'),
  vidThumbs : document.querySelector('.vid_thumbs'),
  volumeIndicator : document.querySelector('.vol-indicator'),

  // functionality comes next
  volOn() {
    video.videoPlayer.muted = false;
    video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up');
  },

  volOff() {
    video.videoPlayer.muted = true;
    video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off');
  },

  popOverlay(){
    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.add('show-overlay');

    overlay.querySelector('i').addEventListener('click', video.replayVideo);
  },

  replayVideo(){
    //rewind and replay the video from the begining
    video.videoPlayer.currentTime = 0;
    video.videoPlayer.play();

    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.remove('show-overlay');

    overlay.querySelector('i').addEventListener('click', video.replayVideo);
  },

  init() {
    console.log('added a video module');
    video.videoPlayer.addEventListener('mouseover', video.volOn);
    video.videoPlayer.addEventListener('mouseout', video.volOff);
    video.videoPlayer.addEventListener('ended', video.popOverlay);
  }
}

video.init();
