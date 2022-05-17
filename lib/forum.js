function gotoUser(user_id) {
    console.log(user_id);
    window.location = `/user.html?application_id=${application_id}&user_id=${user_id}`;
}

function gotoArtist(artist_name) {
    console.log(artist_name);
    window.location = `/artist.html?application_id=${application_id}&artist_name=${artist_name}`;
}

function gotoAlbum(artist_name, album_name) {
    console.log(artist_name, album_name);
    window.location = `/artist.html?application_id=${application_id}&artist_name=${artist_name}`;
}

function gotoSubmit() {
    window.location = `/submit.html?application_id=${application_id}`;
}

function renderForumPage(user_data) {
    // Welcome
    var alias = ('alias' in user_data) ? user_data.alias : 'User';
    var welcome = document.getElementById('welcome');
    var alias_html = `<a onclick="gotoUser('${user_data.user_id}')"><u><b>${alias}</b></u></a>`;
    welcome.innerHTML = `Welcome ${alias_html}!`
    // Now playing
    if (!user_data.player?.paused) {
        var now_playing = document.getElementById('now-playing');
        var artist_html = `<a onclick="gotoArtist('${user_data.player.artist}')"><u>${user_data.player.artist}</u></a>`;
        var track_html = `<a onclick="gotoAlbum('${user_data.player.artist}', '${user_data.player.album}')"><u>${user_data.player.track}</u></a>`;
        now_playing.innerHTML = `Now playing ${artist_html} - ${track_html} (${user_data.player.collection})`;
    }
    // Submit
    var submit = document.getElementById('submit-post');
    if (!user_data.player?.paused) {
        var submit_html = `<a onclick="gotoSubmit()"><u>Create a post</u></a>&nbsp;&#8226;&nbsp;<a onclick="gotoSubmit()"><u>Recommend</u></a>`;
        // 	
    } else {
        var submit_html = `<a onclick="gotoSubmit()"><u>Create a post</u></a>`;
    }
    submit.innerHTML = submit_html
    showRecentPosts();
}