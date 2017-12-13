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

  fetchVideoThumbs() {
    //Do a DB call with the fetch API
    let url = "./includes/functions.php?getVideos=true";

    fetch(url)
      .then((resp) => resp.json()) //resp comes back as JSON, convert to plain object
      .then((data) => { video.loadVideoThumbs(data); })
      .catch(function(error) {
        console.log(error);
      });
  },

  loadVideoThumbs(data) {
    //debugger;
    let thumbHolder = document.querySelector('.video-thumbs');

    data.forEach(thumb => {
      let docFrag =
      `<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
        <img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive">
      </li>`

      thumbHolder.innerHTML += docFrag;
    });

    thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));
  },

  loadNewVideo() {
      //load and play new video
      let videoPath = 'video/' + this.dataset.videopath;

      video.videoPlayer.src = videoPath;
      video.videoPlayer.load();
      video.videoPlayer.play();

      video.volOn();
      video.volOff();
  },

  init() {
    console.log('added a video module');
    video.videoPlayer.addEventListener('mouseover', video.volOn);
    video.videoPlayer.addEventListener('mouseout', video.volOff);
    video.videoPlayer.addEventListener('ended', video.popOverlay);

    video.fetchVideoThumbs();
  }
}

video.init();
