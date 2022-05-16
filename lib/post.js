function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

function toggleVote(post_id) {
    const url = `/api/setVote?application_id=${application_id}&post_id=${post_id}`;
    console.log('api_url=', url);
    fetch(url).then(response => showPostFunction())
}

function renderPosts(posts) {
    var index = 0;
    var div = document.getElementById('posts');
    div.innerHTML = '';
    posts.forEach(function (post) {
        var grid = document.createElement('div');
        grid.classList.add('post');
        // Margin
        var margin = document.createElement('div');
        margin.classList.add('margin');
        index += 1;
        margin.innerText = index;
        grid.appendChild(margin);
        // Title
        var title = document.createElement('div');
        title.classList.add('title');
        title.innerHTML = `<b>${post.contents.title}</b>`;
        grid.appendChild(title);
        // Body
        var body = document.createElement('div');
        body.classList.add('body');
        body.innerText = post.contents.body;
        grid.appendChild(body);
        // Votes
        var votes = document.createElement('div');
        votes.classList.add('votes');
        var vote_caption = `${post.votes.length} vote${post.votes.length == 1 ? '' : 's'}`;
        votes.innerHTML = `<a onclick="toggleVote('${post.id}')">${vote_caption}</a>`
        grid.appendChild(votes);
        // Bullet
        var bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.innerText = '-';
        grid.appendChild(bullet);
        // Posted at
        var posted_at = document.createElement('div');
        posted_at.classList.add('posted_at');
        var alias_html = `<a onclick="gotoUser('${post.author.id}')"><u>${post.author.alias}</u></a>`;
        posted_at.innerHTML = `${timeSince(new Date(post.posted_at))} ago by&#32;${alias_html}`;
        grid.appendChild(posted_at);
        // Grid
        div.appendChild(grid);
    });
}

var showPostFunction = function() { showRecentPosts() };

function showRecentPosts() {
    showPostFunction = function() { showRecentPosts() };
    const url = `/api/getRecentPosts?application_id=${application_id}`;
    console.log('api_url=', url);
    document.getElementById('filter-heading').innerHTML = '<b>Recent posts</b>';
    document.getElementById('recent-posts-button').classList.add('current');
    document.getElementById('top-posts-button').classList.remove('current');
    fetch(url).then(response => response.json()).then(posts => {
        console.log(posts);
        renderPosts(posts);
    });
}

function showTopPosts() {
    showPostFunction = function() { showTopPosts() };
    const url = `/api/getTopPosts?application_id=${application_id}`;
    console.log('api_url=', url);
    document.getElementById('filter-heading').innerHTML = '<b>Top posts</b>';
    document.getElementById('recent-posts-button').classList.remove('current');
    document.getElementById('top-posts-button').classList.add('current');
    fetch(url).then(response => response.json()).then(posts => {
        console.log(posts);
        renderPosts(posts);
    });
}