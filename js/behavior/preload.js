
    /*Preload Images*/
    // cache buster 
    var t = (new Date).getTime();

    var the_images = [];

    $("img").each(function(){
        the_images.push($(this).attr("src"));
    });
    
    

    jQuery.imgpreload(the_images,
    {
      each: function(){
        
      },
      all: function(){//When all images are loaded
        $(".main-content").css({
          opacity: '1'
        });
      }
    });

    