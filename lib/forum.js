function gotoArtist(artist_name) {
    console.log(artist_name)
}

function gotoAlbum(artist_name, album_name) {
    console.log(artist_name, album_name);
}

function renderForumPage() {
    var alias = ('alias' in data) ? data.alias : 'User';
    var welcome = document.getElementById('welcome');
    welcome.innerHTML = `Welcome <u><b>${alias}</b></u>!`
    if (!data.player?.paused) {
        var now_playing = document.getElementById('now-playing');
        var artist_html = `<a onclick="gotoArtist('${data.player.artist}')"><u>${data.player.artist}</u></a>`;
        var track_html = `<a onclick="gotoAlbum('${data.player.artist}', '${data.player.album}')"><u>${data.player.track}</u></a>`;
        now_playing.innerHTML = `Now playing ${artist_html} - ${track_html} (${data.player.collection})`;
    }
    showRecentPosts();
}