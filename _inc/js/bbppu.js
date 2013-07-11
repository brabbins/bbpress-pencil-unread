jQuery(document).ready(function($){

    $('.bbppu-mark-as-read a').click(function(){
        
        var link = $(this);
        var block = link.parent('.bbppu-mark-as-read');
        var ajax_data = {};

        if(link.hasClass('loading')) return false;
        
        ajax_data._wpnonce=link.data("nonce");
        ajax_data.forum_id=link.data("forum-id");

        ajax_data.action='bbppu_mark_single_forum_as_read';

        $.ajax({
    
            type: "post",url: ajaxurl,data:ajax_data,
            beforeSend: function() {
                link.addClass('loading');
                //input.attr('disabled', 'disabled');
                //input.val(bbptlL10n.loading);
            },
            success: function(result){
                if(result){
                    block.html(bbppuL10n.marked_as_read);
                    var topics = $('.bbp-body .hentry.topic');
                    console.log(topics);
                    topics.removeClass('bbppu-unread');
                    topics.addClass('bbppu-read');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //input.bpptl_geolocate_message(bbptlL10n.geo_error);
                //console.log('bpptl_geolocate error');
                console.log(xhr.status);
                console.log(thrownError);
            },
            complete: function() {
                link.removeClass('loading');
            }
        });
        
        
        
        return false;

    });

});
