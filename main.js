var currentSong = 0;

document.getElementById('title-text').innerText = page_title;

document.getElementById('c-menu').onclick = function(e) {
    let c_songs = document.getElementById('c-songs');
    c_songs.hidden = !c_songs.hidden;
}

// Load titles
for(let i = 0; i < lyrics.length; i++) {
    document.getElementById('c-songs').innerHTML += `<div class="menuitem" id="__mit_${i}">${lyrics[i].title}</div>`;
}

function prepareContent(lindex) {
    var l_title = document.getElementById("l-title");
    var l_artist = document.getElementById("l-artist");
    var l_lyrics = document.getElementById("l-lyrics");

    if(!setting.is_title_selectable) {
        l_title.style.userSelect = "none";
    }
    if(!setting.is_artist_selectable) {
        l_artist.style.userSelect = "none";
    }

    l_title.innerText = lyrics[lindex].title;
    l_artist.innerText = lyrics[lindex].artist;
    l_lyrics.innerHTML = "";
    for(var j = 0; j < lyrics[lindex].content.length; j++) {
        l_lyrics.innerHTML += `<p ${setting.is_lyrics_selectable ? "" : "style=\"user-select: none;\" "}>${lyrics[lindex].content[j].replace('\n', '<br />')}</p>`;
    }
    currentSong = lindex;
    document.title = page_title + " - " + lyrics[lindex].title + "(" + lyrics[lindex].artist + ")";
}

prepareContent(0);
if(window.location.href.split('?')[1] != undefined) {
    let param = new URLSearchParams(window.location.href.split('?')[1]);
    if(param.get('song') != null) {
        prepareContent(Number(param.get('song')));
    }
}

for(let i = 0; i < lyrics.length; i++) {
    document.getElementById(`__mit_${i}`).onclick = function(e) {
        if(setting.update_method === 'hotload' || setting.update_method === 'default') {
            prepareContent(i);
            document.getElementById("c-songs").hidden = true;
            window.scrollTo(0, 0);
        } else if (setting.update_method === 'reload') {
            window.location.href = window.location.href.split('?')[0] + `?song=${i}`;
        } else {
            console.error(`Unsupported update method: ${setting.update_method}`);
        }
    };
}
