document.getElementById('c-menu').onclick = function(e) {
    document.getElementById('c-songs').hidden = !document.getElementById('c-songs').hidden;
}

// Load titles
for(let i = 0; i < lyrics.length; i++) {
    document.getElementById('c-songs').innerHTML += `<div class="menuitem" id="__mit_${i}">${lyrics[i].title}</div>`;
}

function prepareContent(lindex) {
    var l_title = document.getElementById("l-title");
    var l_artist = document.getElementById("l-artist");
    var l_lyrics = document.getElementById("l-lyrics");

    l_title.innerText = lyrics[lindex].title;
    l_artist.innerText = lyrics[lindex].artist;
    l_lyrics.innerHTML = "";
    for(var j = 0; j < lyrics[lindex].content.length; j++) {
        l_lyrics.innerHTML += `<p>${lyrics[lindex].content[j].replace('\n', '<br />')}</p>`;
    }
}

prepareContent(0);

for(let i = 0; i < lyrics.length; i++) {
    document.getElementById(`__mit_${i}`).onclick = function(e) {
        prepareContent(i);
        document.getElementById("c-songs").hidden = true;
    };
}
