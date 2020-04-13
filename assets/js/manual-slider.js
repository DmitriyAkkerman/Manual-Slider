class ManualSlider {
  constructor(el) {

    if(!el) {
      throw new Error('Specify root selector')
    }

    this.el = el;
    this.count = 0;
    this.images = this.el.querySelectorAll('img');
    this.images[0].classList.add('current');

    this.initNav();
    this.navEvents();
  }

  setCurrent() {
    this.el.querySelector(".current").classList.remove('current');
    this.images[this.count].classList.add('current')
  }

  slidePrev() {
    this.count--;

    if (this.count < 0) {
      this.count = this.images.length - 1;
    }

    this.setCurrent(this.images[this.count]);
  }

  slideNext() {
    this.count++;

    if (this.count > this.images.length - 1) {
      this.count = 0;
    }

    this.setCurrent(this.images[this.count]);
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
}