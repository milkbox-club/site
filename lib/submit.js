function submitPost(redirect = true) {
    var title = document.getElementById('title-input').value;
    var body = document.getElementById('body-input').value;
    var tags = document.getElementById('tags-input').value;
    const url = `/api/setPost?application_id=${application_id}&title=${title}&body=${body}&tags=${tags}`;
    console.log('api_url=', url);
    fetch(url).then(response => {
        if (redirect) {
            console.log(response);
            // window.location = `/forum.html?application_id=${application_id}` 
        };
    });
}