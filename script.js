function toUniversity() {
  radiobtn = document.getElementById("university");
  radiobtn.checked = true;
}

function toGroup() {
  radiobtn = document.getElementById("group");
  radiobtn.checked = true;
}

function toAwards() {
  radiobtn = document.getElementById("awards");
  radiobtn.checked = true;
}

function toStudents() {
  radiobtn = document.getElementById("students");
  radiobtn.checked = true;
}

function toTeachers() {
  radiobtn = document.getElementById("teachers");
  radiobtn.checked = true;
}

function toCampus() {
  radiobtn = document.getElementById("campus");
  radiobtn.checked = true;
}

/*VIDEO BUTTON*/
$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/O91DT1pR1ew?enablejsapiautoplay=1"  frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
}; 
