$(document).ready(function() {
    $(".color-dropdown img.color").addClass("colorvisibility");

    $(".color-dropdown dt a").click(function() {
        $(".color-dropdown dd ul").toggle();
    });
                
    $(".color-dropdown dd ul li a").click(function() {
        var color_text = $(this).html();
        $(".color-dropdown dt a span").html(text);
        $(".color-dropdown dd ul").hide();
    });
                
    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $color_clicked = $(e.target);
        if (! $color_clicked.parents().hasClass("color-dropdown"))
            $(".color-dropdown dd ul").hide();
    });


    $("#colorSwitcher").click(function() {
        $(".color-dropdown img.color").toggleClass("colorvisibility");
    });
});