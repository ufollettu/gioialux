<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 
jQuery(document).ready(function( $ ){

  //Delay the execution of a function by wrapping it:
  function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
          var context = this, args = arguments;
          var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  }

  const serviceDivs = document.querySelectorAll('.service');
  const portfolioDivs = document.querySelectorAll('#portfolio > div > div:nth-child(2) div > .portfolio-item');
  const portfolioDivs2 = document.querySelectorAll('#portfolio > div > div:nth-child(3) div > .portfolio-item');
  
  const portfolioPageDiv1 = document.querySelector('#portfolio > div:nth-child(1) > div:nth-child(1) > div');
  const portfolioPageDiv2 = document.querySelector('#portfolio > div:nth-child(1) > div:nth-child(2) > div');
  const portfolioPageDiv3 = document.querySelector('#portfolio > div:nth-child(1) > div:nth-child(3) > div');
  const portfolioDivsPage1 = [];
  portfolioDivsPage1.push(portfolioPageDiv1,portfolioPageDiv2,portfolioPageDiv3);
  
  const portfolioPageDiv4 = document.querySelector('#portfolio > div:nth-child(2) > div:nth-child(1) > div');
  const portfolioPageDiv5 = document.querySelector('#portfolio > div:nth-child(2) > div:nth-child(2) > div');
  const portfolioPageDiv6 = document.querySelector('#portfolio > div:nth-child(2) > div:nth-child(3) > div');
  const portfolioDivsPage2 = [];
  portfolioDivsPage1.push(portfolioPageDiv4,portfolioPageDiv5,portfolioPageDiv6);
  
  function checkSlide() {
    function slideUp(slideDiv, index) { 
      //half way to the div
      const slideInAt = (window.scrollY + window.innerHeight) - (slideDiv.scrollHeight /2);
      // bottom of the div
      const divBottom = slideDiv.offsetTop + slideDiv.scrollHeight;
      const isHalfShown = slideInAt > slideDiv.offsetTop;
      const isNotScrolledPast = window.scrollY < divBottom; 	   
      if(isHalfShown && isNotScrolledPast) { 
        setTimeout(function(){
          slideDiv.classList.add('custom-active')
        }, 200*index);
      } else {   	
        setTimeout(function(){
          slideDiv.classList.remove('custom-active')
        }, 200*index);
      }
    }
    serviceDivs.forEach(slideUp);
    portfolioDivs.forEach(slideUp);
    portfolioDivs2.forEach(slideUp);
    portfolioDivsPage1.forEach(slideUp);
    portfolioDivsPage2.forEach(slideUp);
  }

  window.addEventListener('scroll', debounce(checkSlide));

});</script>
<!-- end Simple Custom CSS and JS -->
