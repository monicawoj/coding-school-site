class Slider {
    constructor(selector, opts) {
        //DEFAULT SETTINGS OF THE SLIDER
        const defaultOptions = {
            selectorPrev : '.banner-prev',
            selectorNext : '.banner-next',
            pause : 3000
        }

        this.options = Object.assign({}, defaultOptions, opts);
        this.currentSlide = 0;
        this.slider = document.querySelector(selector);
        this.btnPrev = this.slider.querySelector(this.options.selectorPrev);
        this.btnNext = this.slider.querySelector(this.options.selectorNext);
        this.slides = this.slider.querySelectorAll('.banner-slide');

        this.bindBtns();
        this.timer = setTimeout(()=>{
            this.next();
        }, this.options.pause);
    }
    prev() {
        this.currentSlide--;
        if (this.currentSlide < 0 ) {
            this.currentSlide = this.slides.length-1;
        }
        [...this.slides].forEach(el => el.classList.remove('banner-slide-active'));
        [...this.slides][this.currentSlide].classList.add('banner-slide-active');
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.next();
        }, this.options.pause);
    }
    next() {
        this.currentSlide++;
        if (this.currentSlide >= this.slides.length ) {
            this.currentSlide = 0;
        }
        [...this.slides].forEach(el => el.classList.remove('banner-slide-active'));
        [...this.slides][this.currentSlide].classList.add('banner-slide-active');

        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.next();
        }, this.options.pause);
    }
    bindBtns() {
        console.log('uber test');
        this.btnPrev.addEventListener('click', () => {
            this.prev();
        });
        this.btnNext.addEventListener('click', () => {
            this.next();
        });
    }
}

export {Slider}