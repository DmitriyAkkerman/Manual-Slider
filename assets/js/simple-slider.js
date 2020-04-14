class SimpleSlider {
  constructor(options = {}) {

    if(!options.el) {
      throw new Error('Specify root selector')
    }

    this.el = options.el;
    this.el.classList.add('simple-slider');
    this.images = this.el.querySelectorAll('img');
    this.images[0].classList.add('current');
    this.count = 0;
    this.autoplay = options.autoplay || false;
    this.autoplayDelay = options.autoplayDelay || 2500;

    if(!this.autoplay) {
      this.initNav();
      this.navEvents();
    }
    else {
      this.setCurrentSlide();
    }
  }

  setCurrentSlide() {

    let that = this;

    if(!that.autoplay) {
      this.el.querySelector(".current").classList.remove('current');
      this.images[that.count].classList.add('current');
    }
    else {
      that.timer = setInterval(function() {
        that.count++;
        if( that.count == that.images.length ) {
          that.count = 0;
        }
        that.slideNext(that.count);

      }, that.autoplayDelay);
    }
  }

  initNav() {
    let nav = document.createElement('div');
    nav.classList.add('nav');
    nav.innerHTML = `
      <button class="previous"></button>
      <button class="next"></button>
    `;
    this.el.appendChild(nav);
  }

  navEvents() {
    let that = this;

    that.el.querySelector('.previous').addEventListener('click', function() {
      that.slidePrev();
    });

    that.el.querySelector('.next').addEventListener('click', function() {
      that.slideNext();
    });
  }

  slidePrev() {
    this.count--;

    if (this.count < 0) {
      this.count = this.images.length - 1;
    }

    this.setCurrentSlide(this.images[this.count]);
  }

  slideNext(count) {

    let that = this;

    if(!that.autoplay) {
      this.count++;

      if (this.count > this.images.length - 1) {
        this.count = 0;
      }

      this.setCurrentSlide(this.images[this.count]);
    }
    else {
      let currentSlide = this.images[count];
      currentSlide.classList.add('current');

      this.images.forEach(function(image, count, images) {
        let slide = images[count];
        if( slide !== currentSlide ) {
          slide.classList.remove('current')
        }
      })
    }
  }
}