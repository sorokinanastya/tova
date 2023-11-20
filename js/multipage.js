if (window.innerWidth <= 1024 && window.innerHeight > 325) {
  const pages = document.querySelectorAll(".body__product-item");
  const productsContainer = document.getElementById("body__product");
  let currentPage = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  function scrollToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < pages.length) {
      currentPage = pageIndex;
      const newPosition = pageIndex * 100;
      pages.forEach((page) => {
        page.style.transform = `translateY(-${newPosition}%)`;
      });
    }
    if (pageIndex >= 3 || pageIndex <= 0) {
        setTimeout(function() {
          fullpage_api.setAllowScrolling(true);;
        }, 600); 
      } else {
        fullpage_api.setAllowScrolling(false);;
      }
  }

  productsContainer.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      scrollToPage(currentPage + 1);
    } else if (event.deltaY < 0) {
      scrollToPage(currentPage - 1);
    }
  });

  productsContainer.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
  });
 productsContainer.addEventListener("touchmove", (event) => {
    touchEndY = event.touches[0].clientY;
  });
  productsContainer.addEventListener("touchmove", () => {
    if (touchStartY !== 0) {
     
      const deltaY = touchEndY - touchStartY;
      const direction = deltaY > 0 ? -1 : 1;
      if (direction === 1) {

        scrollToPage(currentPage + 1);
        touchStartY = 0; 

      } else if (direction === -1) {

        scrollToPage(currentPage - 1);
        touchStartY = 0; 

      }
    }
  });

  scrollToPage(0);
}