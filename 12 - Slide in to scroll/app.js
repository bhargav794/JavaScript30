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

  function handleSlideIn(e) {
    console.count(e);
   // console.log(sliderImages);
    sliderImages.forEach(sliderImage => {
        let totalVisibleHeight = window.scrollY + window.innerHeight;
        let halfImgHeight = sliderImage.offsetTop + (sliderImage.height/2)
        let isAtBottom = sliderImage.offsetTop + sliderImage.height;

        let isHalfImgVisible = totalVisibleHeight > halfImgHeight ;
        let isImgNotPassed = window.scrollY < isAtBottom;

        if(isHalfImgVisible && isImgNotPassed){
            sliderImage.classList.add("active");
        }
        else{
            sliderImage.classList.remove("active");
        }
    
    });
    
  }

  window.addEventListener("scroll", debounce(handleSlideIn,15));