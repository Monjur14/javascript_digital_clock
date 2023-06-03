function time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if(hour=="12"){
        var hr = 12;
    }else if(hour=="24"){
        var hr = 0;
    }else{
        var hr = hour % 12;
    }

    if(hour<12){
        var ampm = "AM";
    }else{
        var ampm = "PM";
    }

    if(hour<10){
        hr = "0"+ hr;
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(second<10){
        second = "0" + second;
    }

    var time = hr + ":" + minute + ":" + second + ":" + ampm;

    document.getElementById("time").innerText = time;

}
setInterval(time, 1000);