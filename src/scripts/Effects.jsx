import snipc_img from '../pages/Hero/img/2.webp';
import snipc_hat_img from '../pages/Hero/img/3.png';
import snipc_thumb_img from '../pages/Hero/img/1.webp';
import snipc_happy_heart_img from '../pages/Hero/img/4.webp';
import snipc_happy_celebrate_img from '../pages/Hero/img/5.webp';

const date = new Date();


// Winter Theme in December 
if (date.getMonth() == 11) {
    snowStorm.resume();
    snowStorm.snowColor = '#5a99cc';   // blue-ish snow!?
    snowStorm.flakesMaxActive = 20;    // show more snow on screen at once
    snowStorm.useTwinkleEffect = true; // let the snow flicker in and out of view
    snowStorm.animationInterval = 99;
    snowStorm.freezeOnBlur = true;
    snowStorm.vMaxX = 8;
    snowStorm.vMaxY = 5;
    var pfp = snipc_hat_img;
}
// Thumbs up on Monday (idk why)
else if (date.getDay() == 1) {
    var pfp = snipc_thumb_img;
}
// On Weekends
else if (date.getDay() == 6 || date.getDay() == 0) {
    var pfp = snipc_happy_heart_img;
}
// Future Use 
else if (date.getMonth()==1) {
    var pfp = snipc_happy_celebrate_img;
}
else {
    var pfp = snipc_img;
}

// Stop Snow by default
date.getMonth() == 11 ? {} : snowStorm.stop();





export default pfp;
