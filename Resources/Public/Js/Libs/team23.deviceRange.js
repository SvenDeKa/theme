
/**
 * Device-Range the viewpoirt is in
 */

var deviceRange = function(){

    var $this = this;
    $this.smallPhone = true;
    $this.phoneOnly = true;
    $this.tabletPortraitUp = false;
    $this.tabletPortraitOnly = false;
    $this.tabletLandscapeUp = false;
    $this.tabletLandscapeOnly = false;
    $this.desktopDown = false;
    $this.desktopUp = false;
    $this.desktopOnly = false;
    $this.bigDesktopUp = false;

    $this._setDeviceRange = function(){
        var $width = $(window).width();
        $this.smallPhone = (breakpoints['BREAKPOINT_SMALL-PHONE_TO_PHONE'] >= $width);
        $this.phoneOnly = (breakpoints['BREAKPOINT_PHONE_TO_TABLET-PORTRAIT'] > $width);
        $this.tabletPortraitUp = ($width >= breakpoints['BREAKPOINT_PHONE_TO_TABLET-PORTRAIT']);
        $this.tabletPortraitOnly = (breakpoints['BREAKPOINT_TABLET-PORTRAIT_TO_TABLET-LANDSCAPE'] > $width >= breakpoints['BREAKPOINT_PHONE_TO_TABLET-PORTRAIT']);
        $this.tabletLandscapeUp = ($width >= breakpoints['BREAKPOINT_TABLET-PORTRAIT_TO_TABLET-LANDSCAPE']);
        $this.tabletLandscapeOnly = (breakpoints['BREAKPOINT_TABLET-LANDSCAPE_TO_DESKTOP'] > $width >= breakpoints['BREAKPOINT_TABLET-PORTRAIT_TO_TABLET-LANDSCAPE']);
        $this.desktopDown = (breakpoints['BREAKPOINT_TABLET-LANDSCAPE_TO_DESKTOP'] > $width);
        $this.desktopUp = ($width >= breakpoints['BREAKPOINT_TABLET-LANDSCAPE_TO_DESKTOP']);
        $this.desktopOnly = (breakpoints['BREAKPOINT_DESKTOP_TO_DESKTOP-LARGE'] > $width >= breakpoints['BREAKPOINT_TABLET-LANDSCAPE_TO_DESKTOP']);
        $this.bigDesktopUp = ($width >= breakpoints['BREAKPOINT_DESKTOP_TO_DESKTOP-LARGE']);
    };

    $this._setDeviceRange();

    $(window).resize(function(){
        $this._setDeviceRange();
    });

};