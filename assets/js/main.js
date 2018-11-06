var slider = {

  images:['./assets/images/1.jpg','./assets/images/2.jpg','./assets/images/3.jpg','./assets/images/4.jpg','./assets/images/5.jpg','./assets/images/6.jpeg','./assets/images/7.jpg','./assets/images/8.jpg','./assets/images/9.jpg'],
  
  i: 0,
  
  init: function() {
    document.getElementById("image").style.backgroundImage = "url("+this.images[this.i]+")";

  },
  
  previous: function() {

    this.i--;                              

    if (this.i < 0) {                      

      this.i = this.images.length - 1;     

      }

    this.init(this.images[this.i]);         

  },
 
  next: function() {

    this.i++;                               

    if (this.i > this.images.length - 1) {     

      this.i = 0;                          

      }

    this.init(this.images[this.i]);            

  }

};

  window.onload = function() {

   slider.init();

  };

  var prevSlide = document.getElementById('previous');
  prevSlide.onclick = function() {

    slider.previous();
  }  

  var nextSlide = document.getElementById('next');
  nextSlide.onclick = function() {

    slider.next();

  }  
