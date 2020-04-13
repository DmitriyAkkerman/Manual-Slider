1.Markup. Create the root element with any selector, put inside it your images:

      <div class="manual-slider">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div> 
      
2. Add main styles im HEAD tag:
       
         <link rel="stylesheet" href="assets/css/manual-slider.css">

3. Add main Javascript code in the end of BODY tag:
      
        <script src="assets/js/manual-slider.js"></script>
  
2.Initialization. Init slider by specifying the root selector inside slider app generation.
  
       document.addEventListener('DOMContentLoaded', function() {
        new ManualSlider(document.querySelector('.manual-slider'));
       })
