1.Markup. Create the root element with any selector, put inside it your images:

      <div class="my-slider">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div> 
      
2. Add main styles im HEAD tag:
       
        <link rel="stylesheet" href="assets/css/simple-slider.css">

3. Add main Javascript code in the end of BODY tag:
      
        <script src="assets/js/simple-slider.js"></script>
  
4.Initialization. Init slider by specifying the root selector inside slider app generation.
  
       document.addEventListener('DOMContentLoaded', function() {
        new SimpleSlider(document.querySelector('.my-slider'));
       })

5. Options:        
    
        autoplay: false/true,
        autoplayDelay: 2500
