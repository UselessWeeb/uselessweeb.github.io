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
        document.getElementById("ahug").innerHTML = 'uh oh<br>with such powerful curse I will embed u with the enternal happiness<br>teehee u can not stop me anymore<br>didnt I said theres a sooper powerful here ?<br>well facing a beeg hug and luv for u as well as countless compliment cuz u deserve dat 🙆<br> luv u sooo much my cutie pie';
        clearInterval(timer);
        document.getElementById("timer").innerHTML = '';
      }
    }
  }, 1000);
}