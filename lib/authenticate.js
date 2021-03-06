var application_id = null;

function assertApplicationId(callback, redirect = true) {
    const urlParams = new URLSearchParams(window.location.search);
    application_id = urlParams.get('application_id');
    console.log('application_id=', application_id);
    if (application_id != null) {
        const url = `/api/getApplication?application_id=${application_id}`;
        console.log('api_url=', url);
        fetch(url).then(response => response.json()).then(data => {
            console.log('response_data=', data);
            if (('enabled' in data) && data.enabled == true) {
                callback(data);
            } else {
                console.log(`application_id=${application_id} not enabled`);
                if (redirect) { window.location = '/' };
            }
        });
    } else {
        if (redirect) {
            console.log(`application_id not given`);
            if (redirect) { window.location = '/' };
        }
    }
}