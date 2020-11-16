var infiniteScroll = function(listContainerSelector, paginationItemsSelector, triggerSelector, urlPattern, callbackName){

    var $this = $(this);
    $this.listContainerSelector = listContainerSelector;
    $this.paginationItemsSelector = paginationItemsSelector;
    $this.triggerSelector = $(triggerSelector);
    $this.callbackName = callbackName;
    $this.urlPattern = urlPattern;
    $this.loadedPages = [];


    $this.loadResult = function(page, callbackName){
        var link = $this.makeLinkFromPageNum(page);
        $this.loadedPages[page] = 'loading';
        if($this.linkExists(link)){
            return $.ajax(
                link,
                {
                    dataType: 'html',
                    cache: true,
                    beforeSend: function(jqXHR, settings){
                        $this.startLoader();
                    },
                    success: function(responseData){
                        var responseHtml = jQuery.parseHTML(responseData);
                        $(responseHtml).find($this.listContainerSelector +' > div:not(.loader)').each(function(){
                            $(this).addClass('page-'+page).hide().appendTo($this.container).fadeIn('slow');
                        });

                        $this.loadedPages[page] = 'loaded';
                        $this.stopLoader();
                        $this.callback(callbackName);
                    }
                }
            );
        } else {
            return false;
        }
    };

    $this.callback = function(callback, params){
        if(typeof callback !== 'undefined'){
            eval(callback+'()');
        }
    };

    $this.startLoader = function(){
        $this.container.addClass('loading');
    };

    $this.stopLoader = function(){
        $this.container.removeClass('loading');
        var loaderElement = $this.container.find('.loader').clone();
        $this.container.find('.loader').remove();
        $this.container.append(loaderElement);
    };

    $this.makeLinkFromPageNum = function(pageNum){
        var link = $this.urlPattern.replace('$page',pageNum);
        return link;
    };

    $this.linkExists = function(link){
        if($($this.paginationItemsSelector +' [href="'+link+'"]').length > 0){
            return true;
        }
        return false;
    };

    $this.setHash = function(){
        window.location.hash = '#page-' + $this.currentPage;
    };

    $this.init = function(){
        $this.container = $($this.listContainerSelector);
        $this.nextLink = $($this.paginationItemsSelector + '.current').next().find('a').attr('href');
        $this.currentPage = 1;
        $this.trigger = $($this.triggerSelector);
        var call = false;
        // only if List-container exists
        if( $this.container.length > 0 ){

            var currentPage = window.location.hash.split('-')[1];
            if(currentPage > 0){
                for (var i = 2; currentPage >= i; i++){
                    call = $this.loadResult(i, $this.callbackName)
                    if(call){
                        call.done(function(){
                            $this.currentPage = i-1;
                        });
                    }
                }
            }

            $this.trigger.bind('inview', function(event, visible){
                if(visible){
                    var nextPage = $this.currentPage + 1;

                    if(typeof $this.loadedPages[nextPage] == 'undefined'){
                        call = $this.loadResult(nextPage, $this.callbackName);
                        if(call) {
                            call.done(function () {
                                $this.currentPage = nextPage;
                                $this.setHash();
                            });
                        }
                    }
                }
            });

        }
    };

    $this.init();

};