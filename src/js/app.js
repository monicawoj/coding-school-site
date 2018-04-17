import {Slider} from './slider.js'


document.addEventListener('DOMContentLoaded', function() {
    //const slider = new Slider('#mainBanner', '.banner-prev', '.banner-next');
    const slider = new Slider('#mainBanner', {
        pause : 5000 //sets the time when the slides change
    });
});