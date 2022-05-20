function getAlbums() {
    return new Promise(resolve => {
        (async () => {
            const url = `/api/getAlbums?application_id=${application_id}`;
            fetch(url).then(response => response.json()).then(data => {
                console.log('/getAlbums', data);
                resolve(data);
            });
        })()
    });
}

function renderMusic(user_data) {
    getAlbums().then(artists => {
        var music_div = document.getElementById('music');
        music_div.innerText = JSON.stringify(albums);
        var div = null;
        var p = null;
        artists.forEach(artist => {
            div = document.createElement('div');
            p = document.createElement('p');
            p.innerText(artist);
            div.appendChild(p);
            music_div.appendChild(div);
        });
    });
}