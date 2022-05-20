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
        var div = null;
        var p = null;
        Object.keys(artists).forEach(id => {
            div = document.createElement('div');
            p = document.createElement('p');
            p.innerText = JSON.stringify(artists[id]);
            div.appendChild(p);
            music_div.appendChild(div);
        });
    });
}