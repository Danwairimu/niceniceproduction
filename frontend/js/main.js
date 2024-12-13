
import { getSongs } from "./api.js";

document.addEventListener("DOMContentLoaded", async() =>{
    // load components
    try{
        const headerResponse = await fetch('components/header.html');
        const headerData = await headerResponse.text();
        document.getElementById('header').innerHTML = headerData;

        const footerResponse = await fetch('components/footer.html');
        const footerData = await footerResponse.text();
        document.getElementById('footer').innerHTML = footerData;
    }catch (error){
        console.error('Error loading components!!', error);
    }
    // initializing DOM elements
    const featuredSongsContainer = document.getElementById('featured-songs');
    const songsContainer = document.getElementById('songs');
    const searchBar = document.getElementById('search-bar');
    
    // display songs
    const displaySongs = (songs, container) =>{
        container.innerHTML = '';
        songs.forEach(song =>{
            const songDiv = document.createElement('div');
            songDiv.innerHTML = `
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                    <button>Play</button>`;
                container.appendChild(songDiv);             
        });
    }
    // fetch and display songs
    try{
        const token = null; //pass a valid token after completing backend code
        const songs = await getSongs(token); //fetch songs from the API

        if (featuredSongsContainer) displaySongs(songs, featuredSongsContainer);

        if (songsContainer && searchBar){
            displaySongs(songs, songsContainer);

            // search functionality
            searchBar.addEventListener('input', e =>{
                const query = e.target.value.toLowerCase();
                const filteredSongs = songs.filter(song =>
                    song.title.toLowerCase().includes(query) ||
                    song.artist.toLowerCase().includes(query)
                );
                displaySongs(filteredSongs, songsContainer);
            });
        }
    }catch (error){
        console.error('Error fetching songs:', error);
        if (featuredSongsContainer){
            featuredSongsContainer.innerHTML = '<p>Failed to load songs:(</p>';
        }
        if (songsContainer){
            songsContainer.innerHTML = '<p>Failed to load songs:(</p>';
        }
    }
});