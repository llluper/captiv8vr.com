$(document).ready(function () {

    "use strict";

    /*
    $('h1').click(function () {
        $(this).css('background-color', '#ff0000');
    });*/
    $(window).scroll(function () {
        $(".captiv").css("opacity", 1 - $(window).scrollTop() / 250);
    });
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky')
            
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    });
    
    $(".subscribe-me").subscribeBetter({
        trigger: "atendpage", // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
        animation: "fade", // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
        delay: 0, // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
        showOnce: true, // Toggle this to false if you hate your users. :)
        autoClose: true, // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
        scrollableModal: false //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
    });
    jQuery(document).ready(function() {
 
var offset = 622;
 
var duration = 200;
 
jQuery(window).scroll(function() {
 
if (jQuery(this).scrollTop() > offset) {
 
jQuery('.back-to-top').fadeIn(200);
 
} else {
 
jQuery('.back-to-top').fadeOut(100);
 
}
 
});
 

 
jQuery('.back-to-top').click(function(event) {
 
event.preventDefault();
 
jQuery('html, body').animate({scrollTop: 0}, 500);
 
return false;
 
})
 
});
    
    $(".inspire").click(function() {
    $('html, body').animate({
        scrollTop: $("#inspire").offset().top
    }, 500);
});
    $(".explore").click(function() {
    $('html, body').animate({
        scrollTop: $("#explore").offset().top
    }, 500);
});
    $(".create").click(function() {
    $('html, body').animate({
        scrollTop: $("#create").offset().top
    }, 500);
});
    $(".meet").click(function() {
    $('html, body').animate({
        scrollTop: $("#meet").offset().top
    }, 500);
});
    $(".tip").click(function() {
    $('html, body').animate({
        scrollTop: 0}, 500);
});
    
    /*
    typer('.captiv') 
    .line('Anima8')
    .pause(1000)
    .back(6)
    .continue('Vac8')
    .pause(1000)
    .back(4)
    .continue('Captiv8')
    .pause(1000) 
    .continue('V')
    .pause(1000)
    .continue('R')
    .cursor(false);
*/
    /*
        $('.v').addClass('blue');
        $('.r').addClass('blue');*/
    /*$('.8').addClass('blue-dark');*/
});

/*$Waypoint({
  element: document.getElementById('js--section-features'),
  handler: function(direction) {
    if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
  },
  offset:'60px'; 
  
  
});*/
/*{
    
    $('.js--section-features').Waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },  {
            //offset: '60px';
        });*/
/*
var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20 
  
  
})



var waypoint = new Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
})
*/

//});