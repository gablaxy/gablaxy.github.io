async function loadMusic() {
    try {
        const response = await fetch('songs.json');
        if (!response.ok) {
            throw new Error('Failed to load music data');
        }

        const musicData = await response.json();

        const musicContainer = document.getElementById('music-container');
        if (!musicContainer) {
            throw new Error('Music container element not found');
        }

        const audioPlayer = document.getElementById('audio'); 

        musicData.forEach(music => {
            const musicElement = document.createElement('div');
            musicElement.className = 'song';
        
            const titleArtistContainer = document.createElement('div');
            titleArtistContainer.className = 'title-artist';
        
            const titleElement = document.createElement('span');
            titleElement.className = 'song-title';
            titleElement.textContent = music.title;

            const artistElement = document.createElement('span');
            artistElement.className = 'song-artist';
            artistElement.textContent = `${music.artist}`;
            
            titleArtistContainer.appendChild(titleElement);
            titleArtistContainer.appendChild(artistElement);            
        
            const playButton = document.createElement('button');
            playButton.className = 'play-button';
            playButton.innerHTML = `
                <svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Layer_4_copy">
                        <path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7 C27.852,25.902,29.798,24.778,31.356,25.677z"/>
                        <path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046 l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3 C71.538,51.124,71.538,48.876,69.981,47.977z"/>
                        <path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046 l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/>
                    </g>
                </svg>
            `;
            playButton.addEventListener('click', () => {
                // Set the audio source to the selected song
                audioPlayer.src = music.audioUrl;
                audioPlayer.play();
            
                // Update the current song display
                const currentSongDisplay = document.getElementById('current-song');
                currentSongDisplay.textContent = `${music.title} - ${music.artist}`;
            
                // Update the play/pause button in the audio player to show the pause icon
                const playPauseIcon = playPauseButton.querySelector('svg');
                playPauseIcon.innerHTML = `
                    <?xml version="1.0" ?><svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_7_copy"><path d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z"/><path d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"/><path d="M40.489,27.248c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.119   C43.746,29.177,42.338,27.573,40.489,27.248z"/><path d="M68.792,27.211c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.082   C72.049,29.14,70.641,27.535,68.792,27.211z"/><path d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/><path d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
                `;
                playPauseButton.classList.remove('playing');
            });
        
            musicElement.appendChild(titleArtistContainer);
            musicElement.appendChild(playButton);
            musicContainer.appendChild(musicElement);
        });
    } catch (error) {
        console.error('Error loading music:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadMusic);