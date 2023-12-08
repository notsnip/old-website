import snipc_img from '../components/Hero/img/2.webp';
import snipc_hat_img from '../components/Hero/img/3.png';

const date = new Date()

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
else {
    // set snow effect to false by default
    snowStorm.stop()
    var pfp = snipc_img;
}


export default pfp;
