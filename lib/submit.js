function checkAutoFill() {
    // Get recommend parameter
    const urlParams = new URLSearchParams(window.location.search);
    auto = urlParams.get('auto');
    if (auto == null) { return }
    // Get elements
    var body = document.getElementById('body-input');
    var tags = document.getElementById('tags-input');
    // Auto fill artist
    if (auto == 'track') {
        artist_name = urlParams.get('artist_name');
        track_name = urlParams.get('track_name');
        if ((artist_name != null) && (track_name != null)) {
            body.value = `Check out the track "${track_name}" by [artist:${artist_name}]`
            getArtistData(artist_name).then(data => {
                tags.value = data.genres?.join(',');
            });
        }
    }
}

function submitPost(redirect = true) {
    // Get title value
    var title = document.getElementById('title-input');
    title = encodeURIComponent(title.value);
    console.log('title=', title);
    // Get body value
    var body = document.getElementById('body-input');
    body = encodeURIComponent(body.value);
    console.log('body=', body);
    // Get tags value
    var tags = document.getElementById('tags-input');
    tags = encodeURIComponent(tags.value);
    console.log('tags=', tags);
    // Create HTTP GET request
    const url = `/api/setPost?application_id=${application_id}&title=${title}&body=${body}&tags=${tags}`;
    console.log('api_url=', url);
    fetch(url).then(response => {
        if (redirect) {
            console.log(response);
            window.location = `/forum.html?application_id=${application_id}` ;
        };
    });
}