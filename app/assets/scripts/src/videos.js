$(document).on('click', '.video-box__playbutton', function(){
  $(this).hide();

  var videoBox = $(this).closest('.video-box');
  var videoID = videoBox.attr('data-video-id');
  var videoType = videoBox.attr('data-video-type');
  var videoFrame = videoBox.find('.video-box__frame');
  var videoThumbnail = videoBox.find('.video-box__thumbnail');


  var youtubeIframe = '<iframe type="text/html" width="100%" height="100%" src="http://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
  var vimeoFrame = '<iframe type="text/html" width="100%" height="100%" src="//player.vimeo.com/video/' + videoID + '?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';



  if (videoType == 'vimeo') {
    videoFrame.html(vimeoFrame);
  } else {
    videoFrame.html(youtubeIframe);
  }

  setTimeout(function(){
    videoThumbnail.addClass("animated");
    videoThumbnail.addClass("pulse");
    videoThumbnail.css("z-index", "-1");
    videoFrame.addClass("animated");
    videoFrame.addClass("pulse");
    videoFrame.css("z-index" , "1");
  }, 500);

});
