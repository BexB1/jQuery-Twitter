
// Tweets from the variable window.tweets should appear in the timeline.

// A new tweet should appear at the top of the timeline when the user types some text in the text input at the top and submits the form

// Loops need to be written using Jquery loops rather than vanilla Javascript

// Events listeners need to be written using Jquery syntax

// This is only about JS, no need to change the css 

// Bonus:

// Add a character count to limit the length of the text to 140 characters.

// Make sure the user cannot add an empty tweet

// Display the value for how long ago the tweet was posted (11m, 3h, 6d), search on google for a library doing this job for you


$(function() {

  $.each(tweets, function(index, value){


    var now = new Date();
    var posted = new Date(this.created_at);


    var delta = Math.floor((now - posted) / (1000*60*60*24))

    $(".stream-items").append('<li class="stream-item">' 
      + '<div class="tweet">' 
      + '<a href="#">' 
      + '<img src="'+this.user_thumbnail+'" alt="User image goes here.">' 
      + '</a>' 
      + '<div class="content">' 
      + '<strong class="fullname">'+this.name+'</strong>' 
      + '<span>&rlm;</span>' + '<span class="handle"> @</span><b>'+this.screen_name+'</b>' 
      + '&nbsp;&middot;&nbsp;' 
      + '<small class="time">'+delta+' days ago'+'</small>' 
      + '<p>'+this.text+'</p>' 
      + '</div>' + '</div>' + '</li>' + '</ol>'
      );
    });

  // some of the thumbnail urls are broken!


  $("input").on('click', function(event) {

    event.preventDefault();
    var $newTweet = $("#new-tweet-input");

    var now = new Date();

    if($newTweet !== "" || null) {
      $(".stream-items").prepend('<div class="tweet">' 
        + '<a href="#">' 
        + '<img src="http://facehoff.herokuapp.com/50/50" alt="User image goes here.">' 
        + '</a>' 
        + '<div class="content">' 
        + '<strong class="fullname">' + ' The Hoff ' + '</strong>' 
        + '<span>&rlm;</span>' 
        + '<span class="handle"> @</span><b>' + ' Hoff ' + '</b>' 
        + '&nbsp;&middot;&nbsp;' 
        + '<small class="time">'+now+'</small>' 
        + '<p>' + $newTweet.val() + '</p>' 
        + '</div>' + '</div>' + '</li>' + '</ol>');
      };

     $newTweet.val("");

     // Empty inputs are still posting. :(

    });
});


 