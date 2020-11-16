
var navToggle = function(selector){
    var $this = this;
    $this.container = $(selector);
    $this.toggle = $(selector + ' > .navigation__toggle');
    $this.overlay = $('<div class="navigation__overlay">');
    $this.nav = $(selector + ' > .navigation__nav');
    $this.overlay.appendTo(selector);

    $this.isOpen = false;

    $this.open = function(){
        console.log('opening');
        $this.toggle.addClass('open');
        $this.nav.addClass('open');
        $this.overlay.addClass('open');
        $this.isOpen = true;
    };

    $this.close = function(){
        console.log('closing');
        $this.toggle.removeClass('open');
        $this.nav.removeClass('open');
        $this.overlay.removeClass('open');
        $this.isOpen = false;
    };

    $this.toggle.on('click',function(){
        console.log('clicking the toggle');
        if(currentDeviceRange.desktopDown){
            if($this.isOpen){
                $this.close();
            } else {
                $this.open();
            }
        }else {
            console.log('doing nothing. this is a desktop-device.');
        }
        console.log($this.isOpen);
    });
    $this.overlay.on('click', function () {
        if($this.isOpen){
            $this.close();
        }
    })

    $(window).resize(function(){
        console.log($this.isOpen);
        if($this.isOpen){
            $this.close();
        }
    });
};