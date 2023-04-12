// new date = gethours()

// HOUR HAND                     || 12hr -> 360℃   ||   1hr -> 30℃   ||   h hr = 30℃ + rotation due to min hand + rotation due to sec hand
// MIN HAND EFFECT ON HOUR HAND  || 60min -> 30℃  // 1min -> (1/2)℃  in hour hand
//* for h hour = 30h + m*(1/2)


// MIN HAND             ||  60 min -> 360℃   || 1min -> 6℃   || 
//*    for m min -> 6*m ℃

// Seconds HAND         || 60 sec -> 360℃     || 1sec  -> 6℃
//* for s sec -> 6*s ℃ 



setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hRotation = 30*htime + mtime/2 ; 
    mRotation = 6*mtime;
    sRotation = 6*stime;


    // let hour = document.getElementById('#hour')
    // let minute = document.getElementById('#minute')
    // let second = document.getElementById('#second')

    hour.style.transform = `rotate(${hRotation}deg)` ;
    minute.style.transform = `rotate(${mRotation}deg)` ;
    second.style.transform = `rotate(${sRotation}deg)` ;
   
}, 1000)

setInterval(() => {
    const time = document .querySelector("#time");
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day_night = "AM";

    

    if (hr > 12 ){
        day_night = "PM"
        hr = hr - 12;
    }
    if (hr < 10 ){
        hr = "0" + hr;
    }
    if(min < 10 ){
        min = "0" + min;
    }
    if(sec < 10 ){
        sec = "0" + sec;
    }

    time.textContent = hr + " : " + min + " : " + sec + "\t" + day_night;
},1000)

