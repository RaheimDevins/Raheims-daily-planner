// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// created Element to display todays date on page.
var today = dayjs();
var dayEl = document.getElementById('todaydate')
dayEl.textContent = today.format('MMM D, YYYY');

//click event on all save buttons and local storage
var svBtn = $('.saveBtn')
svBtn.on('click', function (e) {
  var userInfo = $(this).siblings('textarea').val()
  var time = $(this).parent().attr('id')
  localStorage.setItem(time, userInfo)
});

//comparative for past,present,future
$('.time-block').each(function () {
  var time = $(this).attr('id').split('-')[1]
  var currentTime = today.format('HH')
  if (time < currentTime) {
    $(this).addClass('past')
  }
  else if(time == currentTime){
  $(this).addClass('present')
}
else {} 

})


$('#hour-9').children('textarea').val(localStorage.getItem('hour-9'))
$('#hour-10').children('textarea').val(localStorage.getItem('hour-10'))
$('#hour-11').children('textarea').val(localStorage.getItem('hour-11'))
$('#hour-12').children('textarea').val(localStorage.getItem('hour-12'))
$('#hour-13').children('textarea').val(localStorage.getItem('hour-13'))
$('#hour-14').children('textarea').val(localStorage.getItem('hour-14'))
$('#hour-15').children('textarea').val(localStorage.getItem('hour-15'))
$('#hour-16').children('textarea').val(localStorage.getItem('hour-16'))
$('#hour-17').children('textarea').val(localStorage.getItem('hour-17'))
