// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(document).ready(function(){
    $('.parallax').parallax();
});

// // jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function(){


var name = '';
var email = '';
var message= '';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAoPrDVF-YcORk6cPherUmCcQSKLMfXaGs",
    authDomain: "portfolio-91cbe.firebaseapp.com",
    databaseURL: "https://portfolio-91cbe.firebaseio.com",
    projectId: "portfolio-91cbe",
    storageBucket: "portfolio-91cbe.appspot.com",
    messagingSenderId: "1013370093938"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit-message").on("click", function(event){

    event.preventDefault();

    name = $("#name").val().trim();
    email = $("#email").val().trim();
    message = $("#message").val().trim();


    database.ref().push({
        name : name,
        email : email,
        message : message
    });
    window.location.replace("#navbar");
    $("#message")[0].reset();

  });


});

        

// // Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".top-nav-collapse");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});