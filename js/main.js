$(document).ready(function () {
    /*------------------ Video Popup -----------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        }
        else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc);
            }

        }
    })
})