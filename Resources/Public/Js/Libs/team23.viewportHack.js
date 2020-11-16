
/**
 * hacking some Viewport-behaviour
 */
var viewPortHack = function (currentDeviceRange) {
    /**
     * for screens < breakpoints['BREAKPOINT_SMALL-PHONE_TO_PHONE_SMALL']:
     * scale using the viewport attr
     */
    var viewport = $('meta[name="viewport"]');
    if (currentDeviceRange.smallPhone) {
        var scale = screen.width / breakpoints['BREAKPOINT_SMALL-PHONE_TO_PHONE'];
        viewport.attr("content", "width="+breakpoints['BREAKPOINT_SMALL-PHONE_TO_PHONE']+", user-scalable=no, initial-scale=" + scale);
    } else {
        viewport.attr("content", "width=device-width, initial-scale=1.0, user-scalable=no");
    }
}
