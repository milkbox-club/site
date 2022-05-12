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
                welcome.innerText = `Welcome ${alias}!`
                var now_playing = document.getElementById('now-playing');
                now_playing.innerText = `Now playing ${data.player.artist} - ${data.player.track} (${data.player.collection})...`;
                showPosts();
            } else {
                console.log(`application_id=${application_id} not enabled`);
                window.location = '/';
            }
        });
    }
}

function showPosts() {
    const url = `/api/getRecentPosts?application_id=${application_id}`;
    console.log('api_url=', url);
    fetch(url).then(response => response.json()).then(posts => {
        console.log(posts);
        posts.forEach(function (post) {
            console.log(post);
            var p = document.createElement('p');
            p.innerText = `${post.contents.title}<br>${post.contents.body}<br>${post.author}`
        });
    });
}

assertApplicationId();