var application_id = null;

function assertApplicationId() {
    const urlParams = new URLSearchParams(window.location.search);
    application_id = urlParams.get('application_id');
    console.log('application_id=', application_id);
    if (application_id != null) {
        const url = `/api/getUser?application_id=${application_id}`;
        console.log('api_url=', url);
        fetch(url).then(response => response.json()).then(data => {
            console.log('response_data=', data);
            if (('enabled' in data) && data.enabled == true) {
                var alias = ('alias' in data) ? data.alias : 'User';
                var welcome = document.getElementById('welcome');
                welcome.innerHTML = `Welcome <u><b>${alias}</b></u>!`
                var now_playing = document.getElementById('now-playing');
                now_playing.innerHTML = `Now playing <u>${data.player.artist}</u> - <u>${data.player.track}</u> (${data.player.collection})`;
                showRecentPosts();
            } else {
                console.log(`application_id=${application_id} not enabled`);
                window.location = '/';
            }
        });
    }
}

assertApplicationId();