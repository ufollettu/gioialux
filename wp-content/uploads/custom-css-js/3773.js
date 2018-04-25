<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 

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
const sliderImages = document.querySelectorAll('.slide-in');
function checkSlide(e) {
    sliderImages.forEach(slideImage => {
        //half way to the image
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height /2;
        // bottom of the image
        const imageBottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    })
}
window.addEventListener('scroll', debounce(checkSlide));</script>
<!-- end Simple Custom CSS and JS -->
