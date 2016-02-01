function animateLogo() {
  TweenMax.fromTo("#logo", 2, {
    css: {
      y: "-40px",
    },
  }, {
    css: {
      y: "40px",
    },
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut,
  });
}

function animateRobot() {
  TweenMax.fromTo("#robot", 0.5, {
    css: {
      rotation: "-55deg",
    },
  }, {
    css: {
      rotation: "-35deg",
    },
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut,
  });
}

function updateSliderControl() {
  // get all the slider links
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // Get the section pointed to by the link
    var section = document.querySelector(link.getAttribute('href'));
    var sectionTop = section.offsetTop;
    var sectionBottom = sectionTop + section.offsetHeight;

    // Check if window.scrollY is between the section.
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

// Use the onscroll callback to update slider.
window.onscroll = function() {
  // ...
  updateSliderControl();
}

// Update the slider for the first time when the page is loaded.
window.onload = function() {
  // ...
  updateSliderControl();
};

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll('#slider-control a');

  for(var i=0; i<links.length; i++) {
    var link = links[i];
    if(typeof window.addEventListener === 'function') {
      (function(_link) {
        link.addEventListener("click",function(event) {
          // `event` is the mouse click event
          event.preventDefault();

          // BUG WARNING! Fix with a closure or ES6 `let`.
          var href = _link.getAttribute('href');
          var dest = document.querySelector(href);
          scrollToElement(dest);
        });
      })(link);
    }
  }
}

window.onload = function() {
  animateLogo();
  animateRobot();
  addSmoothScrolling();
};

