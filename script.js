$(document).ready(function() {
    /* over here, we're animating the opacity to fade the text in. we aren't using $().fadeIn() because
       you can't do that in parallel with the animating margin, so instead we animate the opacity too */
    $("h1").animate({top:"+=20px", opacity:1}, 800);
    $("p").animate({top:"-=20px", opacity:1}, 800);
});