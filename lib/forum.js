function renderForumPage(user_data) {
    // Welcome
    var alias = ('alias' in user_data) ? user_data.alias : 'User';
    var welcome = document.getElementById('welcome');
    var alias_html = `<a onclick="gotoUser('${user_data.user_id}')"><u><b>${alias}</b></u></a>`;
    welcome.innerHTML = `Welcome ${alias_html}!`
    // Now playing
    if (!user_data.player?.paused) {
        var now_playing = document.getElementById('now-playing');
        var artist_html = `<a onclick='gotoArtist("${user_data.player.artist}")'><u>${user_data.player.artist}</u></a>`;
        var track_html = `<a onclick='gotoAlbum("${user_data.player.artist}', '${user_data.player.album}")'><u>${user_data.player.track}</u></a>`;
        now_playing.innerHTML = `Now playing ${artist_html} - ${track_html} (${user_data.player.collection})`;
    }
    // Submit
    var submit = document.getElementById('submit-post');
    if (!user_data.player?.paused) {
        var submit_html = `<a onclick="gotoSubmit()"><u><b>Create a post</b></u></a>&nbsp;&#8226;&nbsp;<a onclick="gotoRecommendTrack('${user_data.player.artist}', '${user_data.player.track}')"><u><b>Recommend</b></u></a>`;
        // 	
    } else {
        var submit_html = `<a onclick="gotoSubmit()"><u><b>Create a post</b></u></a>`;
    }
    submit.innerHTML = submit_html
    showRecentPosts();
}