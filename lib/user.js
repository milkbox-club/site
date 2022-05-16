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

function getUserPosts(user_id) {
    return new Promise(resolve => {
        (async () => {
            const url = `/api/getUserPosts?application_id=${application_id}&user_id=${user_id}`;
            fetch(url).then(response => response.json()).then(data => {
                console.log('/getUserPosts', data);
                resolve(data);
            });
        })()
    });
}

async function renderUserPage(application_data) {
    console.log(application_id, application_data);
    var div = document.getElementById('user-data');
    const urlParams = new URLSearchParams(window.location.search);
    var user_id = urlParams.get('user_id');
    if (user_id != undefined) {
        getUserData(user_id).then(user_data => {
            div.innerText = JSON.stringify(user_data);
        })
        showUserPosts(user_id);
    }
}