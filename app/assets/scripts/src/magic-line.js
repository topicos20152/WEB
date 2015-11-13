$(function() {
    var $el, leftPos, newWidth, $topbarNav = $("#topbar nav");

    $topbarNav.append("<span id='magic-line'></span>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width(150)
        .css("right", 0)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#topbar nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.outerWidth( true );
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        }, 1000);
    });
});
