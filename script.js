 window.addEventListener("load", function() {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    });

AOS.init();

const scrollBtn = document.getElementById("scrollTopBtn");

    // Show button when scrolling down 200px
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    // Scroll to top on click
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });