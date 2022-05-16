function loadFile(file_path) {
    console.log('requesting', file_path);
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", file_path, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}

function renderMD(file_path) {
    // Create and append markdown container
    var page = document.getElementById('page');
    var element = document.createElement('div');
    element.classList.add('markdown');
    page.appendChild(element);
    // Load and render markdown file
    var contents = loadFile(file_path);
    var converter = new showdown.Converter();
    converter.setOption('emojis', true);
    converter.setOption('tables', true);
    converter.setOption('tasklists', true);
    element.innerHTML = converter.makeHtml(contents);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}