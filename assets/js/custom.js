var btn = $('#button');

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
}).on('click', '#button', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});


$(window).on('load', function () {
  // Preloader
  $('.loader').fadeOut();
  $('.loader-mask').delay(350).fadeOut('slow');
});

$(document).ready(function () {
  var owl = $('.customers-reviews-con .owl-carousel');
  owl.owlCarousel({
    margin: 30,
    nav: false,
    loop: true,
    dots: true,
    // navText: [
    //   "<i class='fa-solid fa-angle-left'></i>",
    //   "<i class='fa-solid fa-angle-right'></i>"
    // ],
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  })
})

$(document).ready(function () {
  var owl = $('.customers-reviews-con2 .owl-carousel');
  owl.owlCarousel({
    margin: 30,
    nav: true,
    loop: true,
    dots: false,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>"
    ],
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  })
})


// wow js
new WOW().init();

// comingsoon page countdown js
(function () {
  if (document.getElementById("days") !== null) {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = '2024',
      dayMonth = "12/14/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        let days = Math.floor(distance / (day));
        let hours = Math.floor((distance % (day)) / (hour));
        let minutes = Math.floor((distance % (hour)) / (minute));
        let seconds = Math.floor((distance % (minute)) / second);

        document.getElementById("days").innerText = days,
          document.getElementById("hours").innerText = hours,
          document.getElementById("minutes").innerText = minutes,
          document.getElementById("seconds").innerText = seconds;

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
          var items = document.querySelectorAll(".compaign_countdown");
          for (var i = 0; i <= items.length; i++) {
            if (typeof items[i] !== 'undefined') {
              items[i].style.display = "none";
            }
          }
        }
        //seconds
      }, 0)
  }
}());
// Get the button
var backButton = document.getElementById("back-to-top-btn");

if ($('#back-to-top-btn').length) {

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backButton.style.display = "block";
    } else {
      backButton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  backButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}


let i = 0;
const phrases = ['Easy to Use', 'Accessible Across All Devices', 'Doctor Centric Design', 'You Own Your Patient Data'];

const randomizeText = () => {
  const phrase = document.querySelector('.random-word');
  
  if (!phrase) return; // Ensure element exists

  // Move to the next phrase
  const newPhrase = phrases[i];
  
  // Apply the fade-out effect by adding a class to trigger animation
  phrase.classList.add('fade-out');
  
  // Wait for the fade-out animation to complete before changing the text
  const animationTime = getAnimationTime();
  
  setTimeout(() => {
    phrase.textContent = newPhrase;
    
    // Remove the fade-out class and trigger fade-in
    phrase.classList.remove('fade-out');
  }, animationTime);

  // Increment the index and loop back to 0 if it exceeds the array length
  i = (i + 1) % phrases.length;
};

const getAnimationTime = () => {
  const phrase = document.querySelector('.random-word');
  if (!phrase) return 3000; // Default animation duration if element is missing
  
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue('animation') ||
                    compStyles.getPropertyValue('-moz-animation-duration') ||
                    compStyles.getPropertyValue('-webkit-animation-duration') || 
                    '3s'; // Default to 3s
  
  // Extract and return animation time in milliseconds
  return parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
};

// Initialize text change and cycle through phrases at animation interval
randomizeText();
setInterval(randomizeText, getAnimationTime());
