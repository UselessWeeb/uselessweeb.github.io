window.onload = function() {
  var minute = 0;
  var sec = 29;
  var timer = setInterval(function() {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute --;
      sec = 60;
      if (minute < 0) {
        minute = 4;
        document.getElementById("sample").innerHTML = '<img src="sample2.gif"/> ';
        document.getElementById("ahug").innerHTML = 'uh oh<br>with such powerful curse I will embed u with the enternal happiness<br>teehee u can not stop me anymore now facing my power of luv 🙆<br> luv u sooo much hun';
        clearInterval(timer);
        document.getElementById("timer").innerHTML = '';
      }
    }
  }, 1000);
}