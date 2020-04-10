class ManualSlider {
  constructor(el, images = []) {

    if(!el) {
      throw new Error('Specify root selector')
    }

    if(!images.length) {
      throw new Error('Add images')
    }

    this.el = el;
    this.images = images;
    this.count = 0;

    this.init();
    this.initHTML();
    this.initEvents();
  }

  init() {
   this.el.querySelector("img").src = `${this.images[this.count]}`;
  }

  initHTML() {
    let nav = document.createElement('div');
    nav.classList.add('nav');
    nav.innerHTML = `
      <button class="previous"></button>
      <button class="next"></button>
    `;
    this.el.appendChild(nav);
  }

  initEvents() {
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

    this.init(this.images[this.count]);
  }

  slideNext() {
    this.count++;

    if (this.count > this.images.length - 1) {
      this.count = 0;
    }

    this.init(this.images[this.count]);
  }
}