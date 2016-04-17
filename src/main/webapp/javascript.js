ZeroedOne = 100;
ZeroedTwo = 100;
calibrated = false;
function sayHello(){
    alert("hello yall");
}
function update()
{
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var splitted = xhttp.responseText.split("|");
      gauge0.update(ZeroedOne-splitted[0]);
      //gauge1.update(ZeroedTwo-splitted[1]);
    }
  };
  xhttp.open("GET", "api", true);
  xhttp.send();
}
function calibrate()
{
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //ZeroedOne = xhttp.responseText;
      var splitted = xhttp.responseText.split("|");
      ZeroedOne = splitted[0];
      //ZeroedTwo = splitted[1];
      calibrated = true;
    }
  };
  xhttp.open("GET", "api", true);
  xhttp.send();
}
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}
function busyCheck()
{
    if(calibrated)
    {
        update();
    }
}
setInterval(busyCheck, (10 * 1000));

