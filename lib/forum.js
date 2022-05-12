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
    var div = document.getElementById('posts');
    console.log('api_url=', url);
    fetch(url).then(response => response.json()).then(posts => {
        console.log(posts);
        posts.forEach(function (post) {
            var grid = document.createElement('div');
            grid.classList.add('post');
            // Title
            var title = document.createElement('div');
            title.classList.add('title');
            title.innerText = post.contents.title;
            grid.appendChild(title);
            // Body
            var body = document.createElement('div');
            body.classList.add('body');
            body.innerText = post.contents.body;
            grid.appendChild(body);
            // Votes
            var votes = document.createElement('div');
            votes.classList.add('votes');
            votes.innerText = `${post.votes.length} vote${post.votes.length == 1 ? '' : 's'}`
            grid.appendChild(votes);
            // Author
            var author = document.createElement('div');
            author.classList.add('author');
            author.innerText = post.author.alias;
            grid.appendChild(author);
            // Grid
            div.appendChild(grid);
        });
    });
}

assertApplicationId();