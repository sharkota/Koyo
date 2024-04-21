let lanyard = {};
function fetchJSONData() {
    fetch("https://api.lanyard.rest/v1/users/362050318512685057")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            lanyard = data)
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();

const song_name = document.getElementById('song_name');
const artist_name = document.getElementById('artist_name');
const album_art = document.getElementById('album_art');
const album_name = document.getElementById('album_name');
const song_link = document.getElementById('song_link');

function updateDisplay() {
    // username.textContent = lanyard.data.discord_user.display_name
    // avatar.setAttribute('href', (`https://cdn.discordapp.com/avatars/` + lanyard.data.discord_user.id + '/' + lanyard.data.discord_user.avatar + '.webp'))
    if (lanyard.data.listening_to_spotify === true) {
        song_name.textContent = lanyard.data.spotify.song
        artist_name.textContent = ('by ' + lanyard.data.spotify.artist)
        album_art.setAttribute('src', lanyard.data.spotify.album_art_url)
        album_name.textContent = ('on ' + lanyard.data.spotify.album)
        song_link.setAttribute('href', ("https://open.spotify.com/track/" + lanyard.data.spotify.track_id))
    }
}
setTimeout(() => {
    updateDisplay()
    setInterval(() => {
        fetchJSONData()
        updateDisplay()
    }, 50);
}, 500);