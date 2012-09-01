var future;

$(document).ready(function() {
  future = new Date(2013, 0, 5, 10, 30);
  // calculate the millisecond difference between local time and EST
  // EST is hardcoded as UTC -5
  var offset = (future.getTimezoneOffset() - 5 * 60) * 60 * 1000;
  future.setTime(future.getTime() - offset);
  function pad(num) {
    return (String(num).length < 2) ? String("0" + num) : String(num);
  }

  var now = new Date();
  if (now.getTime() < future.getTime()) {
    update();
    $('#main').animate({
      opacity: 1
    }, 500, 'ease-in');
    var tick = setInterval(update, 50);
  } else {
    $('#labels').hide();
    $('#explanation').hide();
    $('#numbers').css('margin-right', '12px');
    $('#numbers').text('Kickoff!');
    $('#main').animate({
      opacity: 1
    }, 500, 'ease-in');
  }
  
  function update() {
    now = new Date();
    if (now.getTime() >= future.getTime()) {
      goBuild();
      clearInterval(tick);
      return;
    }

    var months = (future.getFullYear() - now.getFullYear()) * 12;
    months += future.getMonth() - now.getMonth();
    if (now.getDate() > future.getDate())
      months--;
    var month = now.getMonth();
    var year = now.getFullYear();
    now.setMonth(month + months % 12);
    now.setFullYear(year + Math.floor((month + months % 12) / 12));

    var delta = future.getTime() - now.getTime();
    delta = Math.floor(delta / 1000);

    var days = Math.floor(delta / (60 * 60 * 24));
    delta = delta % (60 * 60 * 24);

    var hours = Math.floor(delta / (60 * 60));
    delta = delta % (60 * 60);

    var minutes = Math.floor(delta / 60);
    delta = delta % 60;

    $('#numbers .months').text(pad(months));
    $('#numbers .days').text(pad(days));
    $('#numbers .hours').text(pad(hours));
    $('#numbers .minutes').text(pad(minutes));
    $('#numbers .seconds').text(pad(delta));
  }
});

function goBuild() {
  $('#main').animate({
    opacity: 0
  }, 500, 'ease-out', function() {
    $('#labels').hide();
    $('#explanation').hide();
    $('#numbers').css('margin-right', '12px');
    $('#numbers').text('Kickoff!');
    $('#main').animate({
      opacity: 1
    }, 500, 'ease-in');
  });
}

