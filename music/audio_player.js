const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const muteButton = document.getElementById('mute');
const volumeBar = document.getElementById('volume-bar');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = `<svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_7_copy"><path d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z"/><path d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"/><path d="M40.489,27.248c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.119   C43.746,29.177,42.338,27.573,40.489,27.248z"/><path d="M68.792,27.211c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.082   C72.049,29.14,70.641,27.535,68.792,27.211z"/><path d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/><path d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
        `;
        playPauseButton.classList.remove('playing');
    } else {
        audio.pause();
        playPauseButton.innerHTML = `<svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_4_copy"><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7   C27.852,25.902,29.798,24.778,31.356,25.677z"/><path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3   C71.538,51.124,71.538,48.876,69.981,47.977z"/><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
        `;
        playPauseButton.classList.add('playing');
    }
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    seekBar.value = (currentTime / duration) * 100;
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
});

seekBar.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (seekBar.value / 100) * duration;
});


volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value / 100;

    // Update the mute icon based on the volume
    const muteIcon = muteButton.querySelector('svg');
    if (audio.volume === 0) {
        muteButton.innerHTML = `
            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 24 24"
   version="1.1"
   id="svg1"
   sodipodi:docname="no_sound.svg"
   inkscape:version="1.4 (e7c3feb100, 2024-10-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="21.684608"
     inkscape:cx="18.584611"
     inkscape:cy="15.540977"
     inkscape:window-width="1440"
     inkscape:window-height="875"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg1" />
  <path
     id="path1"
     d="M 12.060547,2.0019531 A 1,1 0 0 0 11.359375,2.2304688 L 5.6386719,7 H 2 A 1,1 0 0 0 1,8 v 8 a 1,1 0 0 0 1,1 h 3.6386719 l 5.7207031,4.769531 A 1,1 0 0 0 12,22 0.989,0.989 0 0 0 12.423828,21.904297 1,1 0 0 0 13,21 V 3 A 1,1 0 0 0 12.060547,2.0019531 Z M 11,5.1347656 V 18.865234 L 6.640625,15.230469 A 1,1 0 0 0 6,15 H 3 V 9 H 6 A 1,1 0 0 0 6.640625,8.7695312 Z" />
</svg>`;
    } else {
        muteButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2,17H5.638l5.722,4.769A1,1,0,0,0,12,22a.989.989,0,0,0,.424-.095A1,1,0,0,0,13,21V3a1,1,0,0,0-1.64-.769L5.638,7H2A1,1,0,0,0,1,8v8A1,1,0,0,0,2,17ZM3,9H6a1,1,0,0,0,.64-.231L11,5.135v13.73L6.64,15.231A1,1,0,0,0,6,15H3Zm20,3a7.008,7.008,0,0,1-7,7,1,1,0,0,1,0-2A5,5,0,0,0,16,7a1,1,0,0,1,0-2A7.008,7.008,0,0,1,23,12Zm-5,0a2,2,0,0,0-2-2,1,1,0,0,1,0-2,4,4,0,0,1,0,8,1,1,0,0,1,0-2A2,2,0,0,0,18,12Z"/></svg>`;
    }
});

muteButton.addEventListener('click', () => {
    audio.muted = !audio.muted;

    if (audio.muted) {
        muteButton.innerHTML = `
            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 24 24"
   version="1.1"
   id="svg1"
   sodipodi:docname="no_sound.svg"
   inkscape:version="1.4 (e7c3feb100, 2024-10-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="21.684608"
     inkscape:cx="18.584611"
     inkscape:cy="15.540977"
     inkscape:window-width="1440"
     inkscape:window-height="875"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg1" />
  <path
     id="path1"
     d="M 12.060547,2.0019531 A 1,1 0 0 0 11.359375,2.2304688 L 5.6386719,7 H 2 A 1,1 0 0 0 1,8 v 8 a 1,1 0 0 0 1,1 h 3.6386719 l 5.7207031,4.769531 A 1,1 0 0 0 12,22 0.989,0.989 0 0 0 12.423828,21.904297 1,1 0 0 0 13,21 V 3 A 1,1 0 0 0 12.060547,2.0019531 Z M 11,5.1347656 V 18.865234 L 6.640625,15.230469 A 1,1 0 0 0 6,15 H 3 V 9 H 6 A 1,1 0 0 0 6.640625,8.7695312 Z" />
</svg>`;
        volumeBar.value = 0; // Reflect muted state on the slider
    } else {
        muteButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2,17H5.638l5.722,4.769A1,1,0,0,0,12,22a.989.989,0,0,0,.424-.095A1,1,0,0,0,13,21V3a1,1,0,0,0-1.64-.769L5.638,7H2A1,1,0,0,0,1,8v8A1,1,0,0,0,2,17ZM3,9H6a1,1,0,0,0,.64-.231L11,5.135v13.73L6.64,15.231A1,1,0,0,0,6,15H3Zm20,3a7.008,7.008,0,0,1-7,7,1,1,0,0,1,0-2A5,5,0,0,0,16,7a1,1,0,0,1,0-2A7.008,7.008,0,0,1,23,12Zm-5,0a2,2,0,0,0-2-2,1,1,0,0,1,0-2,4,4,0,0,1,0,8,1,1,0,0,1,0-2A2,2,0,0,0,18,12Z"/></svg>`;
        volumeBar.value = audio.volume * 100; // Restore slider to current volume
    }
});


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}