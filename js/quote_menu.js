(function(){

  $.fn.quote_menu_div = function(options){
    var settings = $.extend({
      selector      : this.selector,
      quote_open          : '.quote_open',
      menu_div           : '.menu_div',
      active_item           : '.active_item',
      close         : '.close'
    }, options);

    var methods = {
      quote_open: function(event){
        event.preventDefault(); 

        var menu = $(this);
        var menu_div = $(this).parent().find(settings['menu_div']);

        if(menu_div.css('display') == 'block'){
          methods.close();
          active_item.css({'background' : '#000'});
        } else {
          menu_div.css({'display': 'block', 'top': 10, 'left': ((menu.parent().width()/2) -menu_div.width()/2 )});
        }
      },

      close: function(){
        $(settings['menu_div']).fadeOut("fast");
      }
    };

    return this.each(function(){
      $(this).css({'width': $(settings['menu_div']).width()}); // Width needs to be set otherwise popmenu_div will not move when window resized.
      $(settings['quote_open'], this).bind('click', methods.quote_open);
      $(settings['quote_open'], this).parent().find(settings['close']).bind('click', methods.close);
    });
  }

}).call(this);