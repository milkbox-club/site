const { response } = require("express");

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}

function keyToStr(str) {
    str = replaceAll(str, '_', ' ');
    str = titleCase(str);
    return str
}

function getUserData(user_id) {
    return new Promise(resolve => {
        (async () => {
            const url = `/api/getUser?application_id=${application_id}&user_id=${user_id}`;
            fetch(url).then(response => response.json()).then(data => {
                console.log('/getUser', data);
                resolve(data);
            });
        })()
    });
}

function getUserRoles(user_id) {
    return new Promise(resolve => {
        (async () => {
            const url = `/api/getUserRoles?application_id=${application_id}&user_id=${user_id}`;
            fetch(url).then(response => response.json()).then(data => {
                console.log('/getUserRoles', data);
                resolve(data);
            });
        })()
    });
}

function getUserAvatar(user_id) {
    return new Promise(resolve => {
        (async () => {
            const url = `/api/getAvatar?application_id=${application_id}&user_id=${user_id}`;
            fetch(url).then(response => {
                console.log('/getAvatar', response);
                if (response.status == '200') {
                    response.blob().then(blob => {
                        console.log('/getAvatar blob=', blob);
                        resolve(blob);
                    });
                } else {
                    resolve(null);
                }
            });
        })()
    });
}

async function renderUserPage(application_data) {
    console.log(application_id, application_data);
    var user_div = document.getElementById('user');
    var genres_div = document.getElementById('genres');
    var artists_div = document.getElementById('artists');
    var tracks_div = document.getElementById('tracks');
    const urlParams = new URLSearchParams(window.location.search);
    var user_id = urlParams.get('user_id');
    var element = null;
    var span = null;
    var index = 0;
    if (user_id != undefined) {
        getUserData(user_id).then(user_data => {
            getUserRoles(user_id).then(roles => {
                // Alias
                element = document.createElement('h1');
                element.innerText = user_data.alias;
                user_div.appendChild(element);
                // Roles
                element = document.createElement('p');
                element.innerHTML = roles.join('&#32;&bull;&#32');
                user_div.appendChild(element);
                // Contributions
                element = document.createElement('p');
                element.innerText = `${user_data.contributions?.count} contributions`;
                user_div.appendChild(element);
                // Player
                element = document.createElement('p');
                var caption = (user_data.player?.paused) ? 'Last played' : 'Now playing';
                var artist_html = `<a onclick="gotoArtist('${user_data.player.artist}')"><u>${user_data.player.artist}</u></a>`;
                var track_html = `<a onclick="gotoAlbum('${user_data.player.artist}', '${user_data.player.album}')"><u>${user_data.player.track}</u></a>`;
                element.innerHTML = `${caption} ${artist_html} - ${track_html} (${user_data.player.collection})`;
                user_div.appendChild(element);
                // Genres
                if (user_data.statistics?.top_genres != undefined) {
                    index = 0
                    user_data.statistics.top_genres.forEach(entry => {
                        index += 1
                        span = document.createElement('span');
                        // Index
                        element = document.createElement('p');
                        element.classList.add('index');
                        element.innerText = index;
                        span.appendChild(element);
                        // Text
                        element = document.createElement('p');
                        element.innerText = `${keyToStr(entry.genre)}: ${entry.listens}`
                        span.appendChild(element);
                        // Append span
                        genres_div.appendChild(span);
                    })
                }
                // Artists
                if (user_data.statistics?.top_artists != undefined) {
                    user_data.statistics.top_artists.forEach(entry => {
                        element = document.createElement('p');
                        element.innerText = `${keyToStr(entry.artist)}: ${entry.listens}`
                        artists_div.appendChild(element);
                    })
                }
                // Tracks
                if (user_data.statistics?.top_tracks != undefined) {
                    user_data.statistics.top_tracks.forEach(entry => {
                        element = document.createElement('p');
                        element.innerText = `${keyToStr(entry.artist)} - ${keyToStr(entry.track)}: ${entry.listens}`
                        tracks_div.appendChild(element);
                    })
                }
            });
        });
        getUserAvatar(user_id).then(image => {
            if (image != null) {
                let avatar = document.getElementById("avatar-image");
                avatar.setAttribute("src", URL.createObjectURL(image));
            }
        });
        showUserPosts(user_id);
    }
}