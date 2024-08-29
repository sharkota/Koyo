// vars
const intro_el = document.getElementById('intro').firstElementChild
const main_el = document.getElementById('main')
const nav_el = document.getElementById('nav')
const glass = document.getElementById('glass')
const music = document.getElementById('music')
music.loop = true

intro_messages = [
    { msg: 'verifying user.', time: 0.1 },
    { msg: 'verifying user..', time: 1 },
    { msg: 'verifying user...', time: 1 },
    { msg: 'verifying user.', time: 1 },
    { msg: 'verifying user..', time: 1 },
    { msg: 'verifying user...', time: 1 },
    { msg: 'user authorized', time: 1.5 },
]

//setup
main_el.style.display = 'none'
nav_el.style.display = 'none'
glass.style.display = 'none'
intro_el.parentElement.style.display = 'block'

// wait for dom to load
document.addEventListener("DOMContentLoaded", function () {
    // skip intro
    if (localStorage.getItem('new_user') == undefined) {
        localStorage.setItem('new_user', true)
        music.play()
    } else {
        document.removeEventListener("keydown", play_intro, false);
        intro_el.parentElement.remove()
        main_el.style.display = 'inherit'
        nav_el.style.display = 'inherit'
        glass.style.display = 'inherit'
        music.play()
    }
})

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function play_intro() {
    // manage sounds
    playsound('click.ogg')
    playsound('space.wav')
    // cleanup listeners
    intro_el.removeEventListener("click", play_intro, false);
    document.removeEventListener("keydown", play_intro, false);
    // display new message
    count = 0
    await (async () => {
        // change some styles
        intro_el.textContent = ''
        intro_el.parentElement.style.textAlign = 'left'
        intro_el.style.marginLeft = '8%'
        // loop messages
        while (intro_messages[count] != undefined) {
            await sleep(intro_messages[count].time * 1000)
            intro_el.textContent = intro_messages[count].msg
            count++
            // play sound on last message, before it dissapears
            if ((intro_messages.length - count) == 0) {
                playsound('login.oga')
            }
            if (count >= intro_messages.length) {
                // end loop
                await sleep(1000)
                intro_el.parentElement.remove()
                main_el.style.display = 'inherit'
                nav_el.style.display = 'inherit'
                glass.style.display = 'inherit'
            }
        }
    })()
}

// event listener
intro_el.addEventListener('click', play_intro, false);
document.addEventListener('keydown', play_intro, false)