function submitPost(redirect = true) {
    var title = document.getElementById('title-input');
    var body = document.getElementById('body-input');
    var tags = document.getElementById('tags-input');
    console.log('title=', title.value);
    console.log('body=', body.value);
    console.log('tags=', tags.value);
    const url = `/api/setPost?application_id=${application_id}&title=${title.value}&body=${body.value}&tags=${tags.value}`;
    console.log('api_url=', url);
    fetch(url).then(response => {
        if (redirect) {
            console.log(response);
            // window.location = `/forum.html?application_id=${application_id}` 
        };
    });
}