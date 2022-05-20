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
    getAlbums().then(albums => {
        var div = document.getElementById('music');
        div.innerText = JSON.stringify(albums);
    });
}