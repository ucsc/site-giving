/*
* Author:      Marco Kuiper (https://www.marcofolio.net/)
*/

// Speed of the automatic slideshow
var slideshowSpeed = 10000;

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [ {
        "title" : "Students find a spot to relax right outside Dead Central, the display area for items from the Grateful Dead Archive.",
        "image" : "0.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "Open spaces and floor-to-ceiling windows invite study and contemplation.",
        "image" : "0a.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "Vibrant colors and geometric patterns greet students and other McHenry Library patrons.",
        "image" : "0b.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "'We've tried to achieve a feeling that is organic and alive rather than institutional,' says University Librarian Ginny Steel.",
        "image" : "1.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "This study room features a 'collaboration station' that allows students to share their work and create presentations.",
        "image" : "2.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "The library's architecture, emphasizing windows and natural lighting, takes full advantage of the campus's stunning setting in the redwoods. ",
        "image" : "2b.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "The Gary and Dona Novack Reading Porch on the fourth floor features views of Monterey Bay. McHenry Library still has naming opportunities. ",
        "image" : "2c.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "The second floor of the southeast corner is almost always flooded with light.",
        "image" : "3.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "Junior Madeline Carruthers is one of more than 100 library student assistants who make the university library hum.",
        "image" : "3a.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "With 160 work stations available for students, the library is user-friendly, not to mention fully wired.",
        "image" : "4.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "These days McHenry even has an inviting new eatery, Global Village Cafe, for hungry Slugs.",
        "image" : "5.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "The new Global Village Café is quiet before opening for the day. Librarian, entrepreneur, and philanthropist Steve Silberstein was the major donor to the café. ",
        "image" : "5a.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }, {
        "title" : "The new library addition glows in the night air. More than $8 million in private funding contributed to the renovation and addition to McHenry Library.",
        "image" : "6.jpg",
        "url" : "#",
        "firstline" : "Vision: Navigating the future",
        "secondline" : "Tomorrow's library, today"
    }
];



$(document).ready(function() {

    // Backwards navigation
    $("#back").click(function() {
        stopAnimation();
        navigate("back");
    });

    // Forward navigation
    $("#next").click(function() {
        stopAnimation();
        navigate("next");
    });

    var interval;
    $("#control").toggle(function(){
        stopAnimation();
    }, function() {
        // Change the background image to "pause"
        $(this).css({ "background-image" : "url(images/slideshow/btn_pause.png)" });

        // Show the next image
        navigate("next");

        // Start playing the animation
        interval = setInterval(function() {
            stopAnimation();
            //navigate("next");
        }, slideshowSpeed);
    });


    var activeContainer = 1;
    var currentImg = 0;
    var animating = false;
    var navigate = function(direction) {
        // Check if no animation is running. If it is, prevent the action
        if(animating) {
            return;
        }

        // Check which current image we need to show
        if(direction == "next") {
            currentImg++;
            if(currentImg == photos.length + 1) {
                currentImg = 1;
            }
        } else {
            currentImg--;
            if(currentImg == 0) {
                currentImg = photos.length;
            }
        }

        // Check which container we need to use
        var currentContainer = activeContainer;
        if(activeContainer == 1) {
            activeContainer = 2;
        } else {
            activeContainer = 1;
        }

        showImage(photos[currentImg - 1], currentContainer, activeContainer);

    };

    var currentZindex = -1;
    var showImage = function(photoObject, currentContainer, activeContainer) {
        animating = true;

        // Make sure the new container is always on the background
        currentZindex--;

        // Set the background image of the new active container
        $("#headerimg" + activeContainer).css({
            "background-image" : "url(images/slideshow/" + photoObject.image + ")",
            "display" : "block",
            "z-index" : currentZindex
        });

        // Hide the header text
        $("#headertxt").css({"display" : "none"});

        // Set the new header text
        $("#firstline").html(photoObject.firstline);
        $("#secondline")
            .attr("href", photoObject.url)
            .html(photoObject.secondline);
        $("#pictureduri")
            .attr("href", photoObject.url)
            .html(photoObject.title);


        // Fade out the current container
        // and display the header text when animation is complete
        $("#headerimg" + currentContainer).fadeOut(function() {
            setTimeout(function() {
                $("#headertxt").css({"display" : "block"});
                animating = false;
            }, 300);
        });
    };

    var stopAnimation = function() {
        // Change the background image to "play"
        $("#control").css({ "background-image" : "url(images/slideshow/btn_play.png)" });

        // Clear the interval
        clearInterval(interval);
    };

    // We should statically set the first image
    navigate("next");

    // Start playing the animation
    interval = setInterval(function() {
        navigate("next");
    }, slideshowSpeed);

});
