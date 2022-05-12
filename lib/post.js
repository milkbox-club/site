
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

function showPosts() {
    const url = `/api/getRecentPosts?application_id=${application_id}`;
    var index = 0;
    var div = document.getElementById('posts');
    console.log('api_url=', url);
    fetch(url).then(response => response.json()).then(posts => {
        console.log(posts);
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
            title.innerText = post.contents.title;
            grid.appendChild(title);
            // Body
            var body = document.createElement('div');
            body.classList.add('body');
            body.innerHTML = `<b>${post.contents.body}</b>`;
            grid.appendChild(body);
            // Votes
            var votes = document.createElement('div');
            votes.classList.add('votes');
            votes.innerText = `${post.votes.length} vote${post.votes.length == 1 ? '' : 's'}`
            grid.appendChild(votes);
            // Posted at
            var posted_at = document.createElement('div');
            posted_at.classList.add('posted_at');
            posted_at.innerHTML = `${timeSince(new Date(post.posted_at))} ago by <u>${post.author.alias}</u>`;
            grid.appendChild(posted_at);
            // Grid
            div.appendChild(grid);
        });
    });
}