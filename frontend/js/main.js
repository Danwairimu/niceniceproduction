document.addEventListener("DOMContentLoaded", () => {
    // load components
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    // fetch footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);

    // mock songs for now
    const mockSongs = [
        { id: 1, title: "Ass Like That", artist: "Eminem", url: "#" },
        { id: 2, title: "All Along", artist: "Kid Cudi", url: "#" },
        { id: 3, title: "7 min freestyle", artist: "21 Savage", url: "#" },
        { id: 4, title: "So High", artist: "Wiz Khalifa", url: "#" },
        { id: 5, title: "The Next Episode", artist: "Dr.Dre", url: "#" },
    ];

    const featuredSongsContainer = document.getElementById('featured-songs');
    const songsContainer = document.getElementById('songs');
    const searchBar = document.getElementById('search-bar');

    // display the songs
    const displaySongs = (songs, container) => {
        container.innerHTML = '';
        songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.innerHTML = `
                   <h3>${song.title}</h3>
                   <p>${song.artist}</p>
                   <button>Play</button>`;
            container.appendChild(songDiv);
        });
    };

    if (featuredSongsContainer) displaySongs(mockSongs, featuredSongsContainer);

    if (songsContainer && searchBar) {
        displaySongs(mockSongs, songsContainer);

        searchBar.addEventListener('input', e => {
            const query = e.target.value.toLowerCase();
            const filteredSongs = mockSongs.filter(song =>
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query)
            );
            displaySongs(filteredSongs, songsContainer);
        });

    }

});