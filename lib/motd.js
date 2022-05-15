function toMotd(str, r = 1) {
    return (str.replace(' ', '&nbsp;') + '&nbsp;').repeat(r)
}

var caption = toMotd("This is just an example of the message of the day.");

var spans = document.getElementsByClassName('marquee-text');

for (var i = 0; i < spans.length; i++) {
    spans[i].innerHTML = caption;
}