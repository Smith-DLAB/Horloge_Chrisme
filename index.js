

var set_clock = setInterval(function clock() {

    var date_now = new Date();
    var hr = date_now.getHours();
    var min = date_now.getMinutes();
    var sec = date_now.getSeconds();

    var calc_hr = hr * 30 + min / 2;
    var calc_min = min * 6;
    var calc_sec = sec * 6;

    hour.style.transform = "rotate(" + calc_hr + "deg)";
    minute.style.transform = "rotate(" + calc_min + "deg)";
    seconds.style.transform = "rotate(" + calc_sec + "deg)";

    if ( calc_sec % 5 == 0 ) {
        body.style.background = "#de9c9c"
        body.style.transition = "all .5s ease"
        title.style.color = "#680606"
    } else {
        body.style.background = "#de9cc2"
        body.style.transition = "all .5s ease"
        title.style.color = "#176067"
    }

}, 1000);

