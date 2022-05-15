function gotoArtist(artist_name) {
    console.log(artist_name)
}

function gotoAlbum(artist_name, album_name) {
    console.log(artist_name, album_name);
}

function renderForumPage(user_data) {
    var alias = ('alias' in user_data) ? user_data.alias : 'User';
    var welcome = document.getElementById('welcome');
    welcome.innerHTML = `Welcome <u><b>${alias}</b></u>!`
    if (!user_data.player?.paused) {
        var now_playing = document.getElementById('now-playing');
        var artist_html = `<a onclick="gotoArtist('${user_data.player.artist}')"><u>${user_data.player.artist}</u></a>`;
        var track_html = `<a onclick="gotoAlbum('${user_data.player.artist}', '${user_data.player.album}')"><u>${user_data.player.track}</u></a>`;
        now_playing.innerHTML = `Now playing ${artist_html} - ${track_html} (${user_data.player.collection})`;
    }
    showRecentPosts();
}