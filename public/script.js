$(document).ready(function() {
  var future = new Date(2013, 0, 5, 9);
  function pad(num) {
    return (String(num).length < 2) ? String("0" + num) : String(num);
  }

  function update() {
    var now = new Date();
    var months = (future.getFullYear() - now.getFullYear()) * 12;
    months += future.getMonth() - now.getMonth();
    if (now.getDate() > future.getDate())
      months--;
    now.setFullYear(now.getFullYear() + Math.floor((now.getMonth() + months % 12) / 12));
    now.setMonth(now.getMonth() + months % 12);

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

  setInterval(update, 50);
});

