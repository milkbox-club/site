function submitPost(redirect = true) {
    var title = document.getElementById('title-input');
    var body = document.getElementById('body-input');
    var tags = document.getElementById('tags-input');
    const url = `/api/setPost?application_id=${application_id}&title=${title}&body=${body}&tags=${tags}`;
    console.log('api_url=', url);
    fetch(url).then(response => {
        if (redirect) { window.location = `/forum.html?application_id=${application_id}` };
    });
}