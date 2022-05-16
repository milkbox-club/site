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

async function renderUserPage(application_data) {
    console.log(application_id, application_data);
    var div = document.getElementById('artist-data');
    const urlParams = new URLSearchParams(window.location.search);
    var user_id = urlParams.get('user_id');
    if (artist_name != undefined) {
        getUserData(user_id).then(user_data => {
            div.innerText = JSON.stringify(user_data);
        })
    }
}