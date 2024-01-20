

var set_clock = setInterval(function clock() {

    var date_now = new Date();
    var hour_now = date_now.getHours();
    var min_now = date_now.getMinutes();
    var sec_now = date_now.getSeconds();

    // console.log(hour_now, min_now, sec_now)

    var calc_hr = hour_now * 30 + min_now / 2;
    var calc_min = min_now * 6;
    var calc_sec = sec_now * 6;

    // console.log(calc_hr, calc_min, calc_sec)

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

