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

function gotoRecommendTrack(artist_name, track_name) {
    window.location = `/submit.html?application_id=${application_id}&auto=track&artist_name=${artist_name}&track_name=${track_name}`;
}