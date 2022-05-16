function toMotd(str, r = 1) {
    return (str.replace(' ', '&nbsp;') + '&nbsp;').repeat(r)
}

function renderMarquee(str) {
    var caption = toMotd(str);
    var marquee = document.getElementById('marquee');
    var div = null;
    var span = null;
    for (var direction of ['left', 'top', 'right']) {
        // Grid area
        div = document.createElement('div');
        div.id = direction;
        // First span
        span = document.createElement('span');
        span.classList.add('marquee-text');
        span.innerHTML = caption;
        div.appendChild(span);
        // Second span
        span = document.createElement('span');
        span.classList.add('marquee-text', 'second');
        span.innerHTML = caption;
        div.appendChild(span);
        // Append to grid
        marquee.appendChild(div);
    }
}

renderMarquee("This is just an example of the message of the day.");