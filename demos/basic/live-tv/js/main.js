var playerInstance = jwplayer("myElement");

playerInstance.setup({
    "playlist": "//content.jwplatform.com/feeds/UMxwRQMF.rss"
	width: "100%",
  height: "100%"
});

playerInstance.on('displayClick', function() {
	playerInstance.pause();
});
    
playerInstance.on('ready', function() {
    var seconds = new Date().getMinutes()*350 + new Date().getSeconds();
    var playlist = playerInstance.getPlaylist();
    var offset = 0;

    for (var index=0; index < playlist.length; index++) {
        var duration = Math.round(playlist[index]['duration']);
        if(offset + duration > seconds) {
            playerInstance.playlistItem(index);
            playerInstance.seek(seconds-offset);
            break;
        } else {
            offset += duration;
        }
    }
});
