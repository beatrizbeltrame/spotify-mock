const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultsPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    fetch(`http://localhost:8080/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}


function displayResults(result) {
    hidePlaylists();
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    console.log(result);

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
    hidePlaylists();
}

function hidePlaylists() {
    if (resultsPlaylist) {
        resultsPlaylist.classList.add('hidden');
    }
}


searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultsPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
});


