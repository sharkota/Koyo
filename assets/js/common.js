// general use functions
playsound = function (name = String, vol = 1, loop = false) {
    let audio = new Audio('/assets/audio/' + name);
    audio.volume = vol
    audio.loop = loop
    audio.play();
}