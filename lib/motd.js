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
        span.classList.add('marquee-text', 'first');
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

const motds = [
    "Don't waste your time crying over spilt milk.",
    "What I like best about music is when time goes away",
    "Music is enough for a lifetime but a lifetime is not enough for music",
    "Offline is the new luxury",
    "I just need a break from everything for a little while",
    "You can never stop discovering music",
    "Music is the soundtrack of your life",
]

renderMarquee(
    motds[Math.floor(Math.random()*motds.length)]
)