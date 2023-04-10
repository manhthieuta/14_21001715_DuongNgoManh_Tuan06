// cac phan tu html duoc su dung
var display = document.getElementById('display');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

// khoi tao bien
var startTime, elapsedTime = 0, interval;

// dinh dang hien thi thoi gian
function formatTime(time) {
  var hours = Math.floor(time / 3600000);
  var minutes = Math.floor((time - (hours * 3600000)) / 60000);
  var seconds = Math.floor((time - (hours * 3600000) - (minutes * 60000)) / 1000);
  var milliseconds = time - (hours * 3600000) - (minutes * 60000) - (seconds * 1000);

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  if (milliseconds < 10) milliseconds = "00" + milliseconds;
  else if (milliseconds < 100) milliseconds = "0" + milliseconds;
  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

// bat dau
function startTimer() {
  startTime = Date.now() - elapsedTime;
  interval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
}

// dung dong ho
function stopTimer() {
  clearInterval(interval);
}

// thiet lap lai dong ho
function resetTimer() {
  clearInterval(interval);
  elapsedTime = 0;
  display.textContent = "00:00:00.000";
}

// them su kien cho cac nut
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);