<?php
function bbppu_user_has_read_topic($topic_id,$user_id=false){ 
    return bbp_pencil_unread()->has_user_read_topic($topic_id,$user_id);
}
function bbppu_user_has_read_forum($forum_id,$user_id=false){ 
    return bbp_pencil_unread()->has_user_read_forum($forum_id,$user_id);
} 
?>