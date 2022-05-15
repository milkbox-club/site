function getArtistData(artist_name) {
    return new Promise(resolve => {
        const url = `/api/getArtist?application_id=${application_id}&artist_name=${artist_name}`;
        fetch(url).then(response => response.json()).then(data => {
            console.log('/getArtist', data);
            resolve(data);
        });
    });
}

async function renderArtistPage(user_data) {
    console.log(application_id, user_data);
    var div = document.getElementById('artist-data');
    const urlParams = new URLSearchParams(window.location.search);
    var artist_name = urlParams.get('artist_name');
    if (artist_name != undefined) {
        getArtistData(artist_name).then(artist_data => {
            div.innerText = artist_data;
        })
    }
}