const { response } = require("express");

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
    var div = document.getElementById('user');
    const urlParams = new URLSearchParams(window.location.search);
    var user_id = urlParams.get('user_id');
    if (user_id != undefined) {
        getUserData(user_id).then(user_data => {
            div.innerHTML = `<p>${JSON.stringify(user_data)}</p>`;
            getUserAvatar(user_id).then(image => {
                if (image != null) {
                    let avatar = document.getElementById("avatar-image");
                    avatar.setAttribute("src", URL.createObjectURL(image));
                }
            })
        })
        showUserPosts(user_id);
    }
}